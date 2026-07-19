"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  const checkLogin = async () => {
    try {
      const token = localStorage.getItem("accessToken");

      if (!token) {
        setIsLoggedIn(false);
        setLoading(false);
        return;
      }

      const res = await fetch(
        "https://portfolio-server-mpeo.onrender.com/api/auth/me",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          credentials: "include",
        }
      );

      if (res.ok) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    } catch (error) {
      console.error(error);
      setIsLoggedIn(false);
    } finally {
      setLoading(false);
    }
  };

  checkLogin();
}, []);

  const login = () => {
    setIsLoggedIn(true);
    setLoading(false);
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  const value = useMemo(
    () => ({
      isLoggedIn,
      loading,
      login,
      logout,
    }),
    [isLoggedIn, loading],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
