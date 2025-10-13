import axios, { AxiosError, InternalAxiosRequestConfig } from "axios";
import { toast } from "react-toastify";
import { SignJWT } from "jose"; // Librería que SÍ funciona en el navegador

interface JwtResponse {
  access_token: string;
  refresh_token: string;
  expires_in: number;
}

interface JwtPayload {
  user: string;
  purpose: string;
  iat?: number;
  exp?: number;
  timestamp?: number;
}

// Helper para verificar si estamos en el navegador
const isBrowser = () => typeof window !== "undefined";

// Funciones seguras para localStorage
const getStorageItem = (key: string): string | null => {
  if (!isBrowser()) return null;
  try {
    return localStorage.getItem(key);
  } catch (error) {
    console.error("Error getting localStorage item:", error);
    return null;
  }
};

const setStorageItem = (key: string, value: string): void => {
  if (!isBrowser()) return;
  try {
    localStorage.setItem(key, value);
  } catch (error) {
    console.error("Error setting localStorage item:", error);
  }
};

const removeStorageItem = (key: string): void => {
  if (!isBrowser()) return;
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error("Error removing localStorage item:", error);
  }
};

// Función para generar JWT en el CLIENTE usando jose
async function generateJwtToken(payload = {} as JwtPayload): Promise<JwtResponse> {
  try {

    const secret = process.env.NEXT_PUBLIC_SECRET_KEY;
    if (!secret) {
      toast.error("Secret key no definida");
      throw new Error("Secret key not defined");
    }

    const expiresIn = Number(process.env.NEXT_PUBLIC_EXPIRENS_IN_SECONDS) || 3600;

    // Convertir el secret a Uint8Array (requerido por jose)
    const secretKey = new TextEncoder().encode(secret);

    // Crear el JWT
    const token = await new SignJWT({
      ...payload,
      iat: Math.floor(Date.now() / 1000), // issued at
    })
      .setProtectedHeader({ alg: "HS256" }) // Algoritmo
      .setExpirationTime(`${expiresIn}s`) // Expiración
      .setIssuedAt() // Timestamp de emisión
      .sign(secretKey);


    return {
      access_token: token,
      refresh_token: token, // En producción, genera uno diferente
      expires_in: expiresIn,
    };
  } catch (error) {
    throw error;
  }
}

// Crear instancia de axios
const appService = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_SERVICE,
  headers: {
    "Content-Type": "application/json",
  },
});

// Variables para control de refresh token
let isRefreshing = false;
let failedQueue: Array<{
  resolve: (value?: unknown) => void;
  reject: (reason?: unknown) => void;
}> = [];

const processQueue = (error: Error | null, token: string | null = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });
  failedQueue = [];
};

// REQUEST INTERCEPTOR
appService.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {

    // Intentar obtener el token de localStorage
    let accessToken = getStorageItem("access_token");

    // Si no hay token, generar uno nuevo automáticamente
    if (!accessToken && isBrowser()) {
      try {
        const tokenData = await generateJwtToken({
          user: "gasolinera-sv",
          purpose: "gasolineras-app",
        });

        setStorageItem("access_token", tokenData.access_token);
        setStorageItem("refresh_token", tokenData.refresh_token);
        setStorageItem("expiresIn", tokenData.expires_in.toString());

        accessToken = tokenData.access_token;
      } catch (error) {
        console.error("Error generating JWT token:", error);
      }
    }

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }


    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

// RESPONSE INTERCEPTOR
appService.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error: AxiosError) => {
    const originalRequest = error.config as InternalAxiosRequestConfig & {
      _retry?: boolean;
    };


    // Error de red
    if (!error.response) {
      toast.error("Error de red. Por favor, verifica tu conexión.");
      return Promise.reject(error);
    }

    const { status } = error.response;

    // 403 Forbidden
    if (status === 403) {
      toast.error("No autorizado para realizar esta acción");
      return Promise.reject(error);
    }

    // 401 Unauthorized - Intentar refresh token
    if (status === 401 && originalRequest && !originalRequest._retry) {

      // Si ya estamos refrescando, encolar la petición
      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        })
          .then((token) => {
            if (originalRequest.headers) {
              originalRequest.headers.Authorization = `Bearer ${token}`;
            }
            return appService(originalRequest);
          })
          .catch((err) => Promise.reject(err));
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {

        // Generar un nuevo token
        const tokenData = await generateJwtToken({
          user: "demo-user",
          purpose: "refresh",
          timestamp: Date.now(),
        });

        // Guardar nuevos tokens
        setStorageItem("access_token", tokenData.access_token);
        setStorageItem("refresh_token", tokenData.refresh_token);
        setStorageItem("expiresIn", tokenData.expires_in.toString());

        // Actualizar header de la petición original
        if (originalRequest.headers) {
          originalRequest.headers.Authorization = `Bearer ${tokenData.access_token}`;
        }

        // Procesar peticiones encoladas
        processQueue(null, tokenData.access_token);
        isRefreshing = false;

        // Reintentar petición original
        return appService(originalRequest);
      } catch (refreshError) {
        processQueue(refreshError as Error, null);
        isRefreshing = false;

        // Limpiar tokens
        removeStorageItem("access_token");
        removeStorageItem("refresh_token");
        removeStorageItem("expiresIn");

        toast.error("Sesión expirada. Por favor, inicia sesión de nuevo.");
        return Promise.reject(refreshError);
      }
    }

    // Otros errores
    if (status === 404) {
      toast.error("Service not found (404)");
    } else if (status === 400) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const message = (error.response.data as any)?.message || "Bad request";
      toast.error(message);
    } else if (status === 500) {
      toast.error("Error del servidor. Por favor, inténtelo de nuevo más tarde.");
    } else {
      
    }

    return Promise.reject(error);
  }
);

// Función helper para inicializar/regenerar token manualmente
export const initializeAuth = async (customPayload = {} as JwtPayload): Promise<void> => {
  try {
    const tokenData = await generateJwtToken(customPayload);
    setStorageItem("access_token", tokenData.access_token);
    setStorageItem("refresh_token", tokenData.refresh_token);
    setStorageItem("expiresIn", tokenData.expires_in.toString());
    toast.success("Token generated successfully!");
  } catch (error) {
    toast.error("Error al generar el token");
    throw error;
  }
};

// Función helper para logout
export const logout = (): void => {
  removeStorageItem("access_token");
  removeStorageItem("refresh_token");
  removeStorageItem("expiresIn");
};

// Función para ver el token actual
export const getDecodedToken = (): JwtPayload | null => {
  const token = getStorageItem("access_token");
  if (!token) {
    toast.error("No se encontró el token");
    return null;
  }

  try {
    // Decodificar el payload (parte central del JWT)
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
        .join('')
    );

    const decoded = JSON.parse(jsonPayload);
    return decoded;
  } catch (error) {
    console.error("Error decoding token:", error);
    toast.error("Error al decodificar el token");
    return null;
  }
};

export default appService;