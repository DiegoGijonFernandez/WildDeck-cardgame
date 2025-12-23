// src/context/AuthContext.tsx
import { createContext, useContext, useEffect, useState } from "react";
import { mockUsers } from "../mocks/users.mock";
import { useNavigate } from "react-router-dom";

type AuthContextType = {
  user: any | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  register: (email: string, username: string, password: string) => Promise<boolean>;
  setUser: (user: any) => void;
  updateUserData: (newUser: any) => void;
};

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("wilddeck_user");
    if (storedUser) {
      try {
        const p = JSON.parse(storedUser);
        setUser(p);
        console.log("AuthProvider: loaded user from localStorage", p);
      } catch {
        localStorage.removeItem("wilddeck_user");
      }
    }
    setLoading(false);
  }, []);

  const persistUser = (u: any) => {
    setUser(u);
    try {
      localStorage.setItem("wilddeck_user", JSON.stringify(u));
    } catch (e) {
      console.warn("Could not persist user to localStorage", e);
    }
  };

  const login = async (email: string, password: string): Promise<boolean> => {
    const mockUser = mockUsers.find(
      (u) =>
        u.email.toLowerCase() === email.toLowerCase() &&
        u.password === password
    );

    if (mockUser) {
      console.log("LOGIN MOCK OK:", mockUser);

      const loggedUser = {
        id: mockUser.id,
        email: mockUser.email,
        username: mockUser.name,
        token: "mock-token-" + mockUser.id,
      };

      persistUser(loggedUser);
      return true;
    }

    try {
      const response = await fetch("http://localhost:8080/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        console.log("LOGIN FALLIDO:", email, response.status);
        return false;
      }

      // backend may return a token as plain text or a JSON { token, user }
      const contentType = response.headers.get("content-type") || "";
      let token: string | null = null;
      let respJson: any = null;

      if (contentType.includes("application/json")) {
        respJson = await response.json();
        // common shapes: { token: "...", user: {...} } or { accessToken: "..." }
        token = respJson.token ?? respJson.accessToken ?? null;
      } else {
        // plain text token (your current backend behaviour)
        token = await response.text();
      }

      if (!token) {
        // maybe backend returned user object directly
        if (respJson?.user) {
          const loggedUser = respJson.user;
          // ensure token field exists
          persistUser({ ...loggedUser, token: respJson.token ?? null });
          console.log("LOGIN OK (user object returned):", loggedUser);
          return true;
        }
        console.warn("No token found in login response", respJson);
        return false;
      }

      const responseData = respJson;

      const loggedUser = {
        id: responseData.user.id,
        email: responseData.user.email,
        username: responseData.user.username,
        token: responseData.token,
      };

      persistUser(loggedUser);

      console.log("LOGIN OK Backend -> stored user:", loggedUser);

      return true;
    } catch (error) {
      console.error("ERROR LOGIN:", error);
      return false;
    }
  };

  const register = async (email: string, username: string, password: string): Promise<boolean> => {
    try {
      const response = await fetch("http://localhost:8080/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, username, password }),
      });

      if (!response.ok) {
        console.log("REGISTER FALLIDO:", email, username, response.status);
        return false;
      }

      // tu backend actual devuelve "User registered successfully" (texto).
      // Hacemos login automático tras registro para obtener token y usuario.
      console.log("REGISTER OK. Intentando login automático...");
      const logged = await login(email, password);
      return logged;
    } catch (error) {
      console.error("ERROR REGISTER:", error);
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("wilddeck_user");
    navigate("/login");
  };

  const updateUserData = (newUser: any) => {
    setUser((prev: any) => {
      const updated = {
        ...prev,
        ...newUser,
      };

      try {
        localStorage.setItem("wilddeck_user", JSON.stringify(updated));
      } catch (e) {
        console.warn("Could not persist user to localStorage", e);
      }

      return updated;
    });
  };

  if (loading) return null;

  return (
    <AuthContext.Provider value={{ user, login, logout, register, setUser: persistUser, updateUserData, }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used inside AuthProvider");
  return context;
};
