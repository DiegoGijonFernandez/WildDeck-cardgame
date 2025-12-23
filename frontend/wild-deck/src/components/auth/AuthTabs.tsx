import React from "react";

export type AuthMode = "login" | "register";

interface AuthTabsProps {
  mode: AuthMode;
  onChangeMode: (mode: AuthMode) => void;
}

export const AuthTabs: React.FC<AuthTabsProps> = ({ mode, onChangeMode }) => {
  const isLogin = mode === "login";

  return (
    <div className="flex justify-end gap-2 mb-8">
      <button
        type="button"
        onClick={() => onChangeMode("login")}
        className={
          "px-4 py-2 text-sm font-semibold rounded-full transition shadow-md shadow-primary/40 " +
          (isLogin
            ? "bg-primary text-white"
            : "bg-transparent text-text-muted border border-white/20 hover:bg-white/5")
        }
      >
        Iniciar sesión
      </button>

      <button
        type="button"
        onClick={() => onChangeMode("register")}
        className={
          "px-4 py-2 text-sm font-semibold rounded-full transition " +
          (!isLogin
            ? "bg-primary text-white shadow-md shadow-primary/40"
            : "bg-transparent text-text-muted border border-white/20 hover:bg-white/5")
        }
      >
        Crear cuenta
      </button>
    </div>
  );
};
