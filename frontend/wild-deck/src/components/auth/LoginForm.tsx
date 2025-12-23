import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

type FieldErrors = {
  email?: string;
  password?: string;
};

export const LoginForm: React.FC = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [authError, setAuthError] = useState<string | null>(null);

  const validate = (): boolean => {
    const newErrors: FieldErrors = {};

    if (!email) {
      newErrors.email = "El correo es obligatorio";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "El correo no es válido";
    }

    if (!password) {
      newErrors.password = "La contraseña es obligatoria";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError(null);

    if (!validate()) return;

    const success = await login(email, password);

    if (success) {
      navigate("/collection");
    } else {
      // Error de autenticación (no de formulario)
      setAuthError("Correo o contraseña incorrectos");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex-1 flex flex-col gap-4">
      <h1 className="text-2xl font-bold mb-2">Bienvenido de nuevo</h1>
      <p className="text-sm text-text-muted mb-4">
        Inicia sesión para continuar tu colección de cartas.
      </p>

      {/* Email */}
      <label className="flex flex-col gap-1 text-sm">
        <span>Correo electrónico</span>
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setErrors((prev) => ({ ...prev, email: undefined }));
          }}
          className={`w-full px-4 py-2.5 rounded-lg bg-surface border text-white placeholder:text-text-muted focus:outline-none focus:ring-2 transition
            ${errors.email || authError
              ? "border-danger focus:ring-danger"
              : "border-white/10 focus:ring-primary"
            }`}
          placeholder="tucorreo@ejemplo.com"
        />
        {errors.email && (
          <span className="text-danger text-xs">{errors.email}</span>
        )}
      </label>

      {/* Password */}
      <label className="flex flex-col gap-1 text-sm">
        <span>Contraseña</span>
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setErrors((prev) => ({ ...prev, password: undefined }));
          }}
          className={`w-full px-4 py-2.5 rounded-lg bg-surface border text-white placeholder:text-text-muted focus:outline-none focus:ring-2 transition
            ${errors.password || authError
              ? "border-danger focus:ring-danger"
              : "border-white/10 focus:ring-primary"
            }`}
          placeholder="••••••••"
        />
        {errors.password && (
          <span className="text-danger text-xs">{errors.password}</span>
        )}
      </label>

      {/* Error de autenticación */}
      {authError && (
        <p className="text-danger text-sm mt-1">
          {authError}
        </p>
      )}

      <div className="flex items-center justify-between mt-2 text-sm">
        <button className="text-accent hover:underline" type="button">
          ¿Has olvidado tu contraseña?
        </button>
      </div>

      <button
        type="submit"
        className="mt-6 inline-flex items-center justify-center px-6 py-3 rounded-xl bg-primary text-white font-semibold hover:bg-primary/90 active:scale-[0.98] transition shadow-md shadow-primary/40"
      >
        Iniciar sesión
      </button>
    </form>
  );
};
