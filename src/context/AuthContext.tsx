// "use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import appService from "../services/app.service";

interface IJwtTokenPayload {
  id: number;
  name: string;
  email: string;
  password: string;
  active: boolean;
  address: string | null;
  masterPassword: string | null;
  profiles: string[];
  permissions: string[];
  iat: number;
  exp: number;
}

interface AuthContextType {
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (accessToken: string, refreshToken: string, expiresIn: number) => void;
  logout: () => void;
  decodedJwtToken: (token?: string) => IJwtTokenPayload;
  userLogged: IJwtTokenPayload | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [userLogged, setUserLogged] = useState<IJwtTokenPayload | null>(null);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      if (typeof window === "undefined") return;

      const accessToken = localStorage.getItem("access_token");
      const refreshToken = localStorage.getItem("refresh_token");
      const expiresIn = Number(localStorage.getItem("expiresIn"));

      if (accessToken && refreshToken && expiresIn > 0) {
        try {
          const user = decodedJwtToken(accessToken);
          setUserLogged(user);
          setIsAuthenticated(true);
          scheduleTokenRefresh(expiresIn);
        } catch (error) {
          console.error("Error decoding JWT token:", error);
          logout();
        }
      }
      setIsLoading(false);
    };

    checkAuth();
  }, []);

  const login = (accessToken: string, refreshToken: string, expiresIn: number) => {
    if (typeof window === "undefined") return;

    localStorage.setItem("access_token", accessToken);
    localStorage.setItem("refresh_token", refreshToken);
    localStorage.setItem("expiresIn", expiresIn.toString());

    setIsAuthenticated(true);
    const user = decodedJwtToken(accessToken);
    setUserLogged(user);
    scheduleTokenRefresh(expiresIn);

    setTimeout(() => {
      router.push("/");
    }, 100);
  };

  const logout = () => {
    if (typeof window === "undefined") return;

    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    localStorage.removeItem("expiresIn");

    setIsAuthenticated(false);
    setUserLogged(null);

    // router.push("/signin");
  };

  const refreshToken = async () => {
    if (typeof window === "undefined") return;

    try {
      const refreshToken = localStorage.getItem("refresh_token");
      if (!refreshToken) throw new Error("No refresh token available");

      const user = decodedJwtToken(refreshToken);
      setUserLogged(user);

      const response = await appService.post("/authentication/refresh-token", {
        email: user.email,
        refreshToken,
      });

      const { access_token, refresh_token, expires_in } = response.data;

      localStorage.setItem("access_token", access_token);
      localStorage.setItem("refresh_token", refresh_token);
      localStorage.setItem("expiresIn", expires_in.toString());

      scheduleTokenRefresh(expires_in);
    } catch (error) {
      console.error("Error refreshing token:", error);
      logout();
    }
  };

  const scheduleTokenRefresh = (expiresIn: number) => {
    const refreshTime = (expiresIn - 60) * 1000;
    if (refreshTime > 0) {
      setTimeout(() => {
        refreshToken();
      }, refreshTime);
    } else {
      refreshToken();
    }
  };

  const decodedJwtToken = (token?: string): IJwtTokenPayload => {
    if (typeof window === "undefined") {
      throw new Error("decodedJwtToken cannot run on the server");
    }

    if (!token) token = localStorage.getItem("access_token") || "";
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map((c) => `%${("00" + c.charCodeAt(0).toString(16)).slice(-2)}`)
        .join("")
    );
    return JSON.parse(jsonPayload);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, isLoading, login, logout, decodedJwtToken, userLogged }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
