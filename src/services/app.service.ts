import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";

// ✅ In Next.js, public env vars must start with NEXT_PUBLIC_
const appService = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_SERVICE,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor
appService.interceptors.request.use(
  (config) => {
    // set access_token temporaly from env var for testing purposes
    const accessTokenFromEnv = process.env.NEXT_PUBLIC_ACCESS_TOKEN;
    localStorage.setItem("access_token", accessTokenFromEnv || "");
    const accessToken =
      typeof window !== "undefined"
        ? localStorage.getItem("access_token")
        : accessTokenFromEnv;

    if (!config.headers) {
      throw new Error(
        "Expected 'config' and 'config.headers' not to be undefined"
      );
    }

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error: AxiosError) => Promise.reject(error)
);

// Response interceptor
appService.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    if (!error.response) {
      console.log("Error: Network Error");
    } else {
      console.log("Error: ", error.response);

      if (error.response.status === 403) {
        toast.error("Not authorized to perform this action");
      }
      // Unauthorized → try refresh token
      else if (error.response.status === 401) {
        const refreshToken =
          typeof window !== "undefined"
            ? localStorage.getItem("refresh_token")
            : null;

        if (refreshToken) {
          try {
            const response = await appService.post("/api/auth/refresh", {
              refresh_token: refreshToken,
            });

            const { access_token, refresh_token, expires_in } = response.data;
            localStorage.setItem("access_token", access_token);
            localStorage.setItem("refresh_token", refresh_token);
            localStorage.setItem("expiresIn", expires_in.toString());

            // Retry original request
            if (error.config?.headers) {
              error.config.headers.Authorization = `Bearer ${access_token}`;
            }
            return axios(error.config!);
          } catch (refreshError) {
            console.error("Error refreshing token:", refreshError);
            localStorage.removeItem("access_token");
            localStorage.removeItem("refresh_token");
            localStorage.removeItem("expiresIn");
            if (typeof window !== "undefined") {
              // window.location.href = "/signin";
            }
          }
        } else {
          localStorage.removeItem("access_token");
          localStorage.removeItem("refresh_token");
          localStorage.removeItem("expiresIn");
          if (typeof window !== "undefined") {
            // window.location.href = "/signin";
          }
        }
      } else if (error.response.status === 404) {
        toast.error("Service not found (404)");
      } else if (error.response.status === 400) {
        toast.error((error.response.data as string) || "Bad request");
      } else if (error.response.status === 500) {
        toast.error(
          "An error occurred while processing the request. Please try again. If the error persists, contact the administrator."
        );
      } else if (!error.response || !error.response.data) {
        toast.error(
          "An unexpected error occurred. If the error persists, please reload the page."
        );
      }
    }

    return Promise.reject(error);
  }
);

export default appService;  