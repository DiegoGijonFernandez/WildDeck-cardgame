import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

type FieldErrors = {
  username?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
};

const PASSWORD_REGEX =
  /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;

export const RegisterForm: React.FC = () => {
  const { register, login } = useAuth();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errors, setErrors] = useState<FieldErrors>({});
  const [authError, setAuthError] = useState<string | null>(null);

  const passwordChecks = {
    length: password.length >= 8,
    uppercase: /[A-Z]/.test(password),
    number: /\d/.test(password),
    symbol: /[^A-Za-z0-9]/.test(password),
  };

  const isPasswordSecure = Object.values(passwordChecks).every(Boolean);

  const validate = (): boolean => {
    const newErrors: FieldErrors = {};

    if (!username.trim()) {
      newErrors.username = "El nombre de usuario es obligatorio";
    }

    if (!email) {
      newErrors.email = "El correo es obligatorio";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "El correo no es válido";
    }

    if (!password) {
      newErrors.password = "La contraseña es obligatoria";
    } else if (!PASSWORD_REGEX.test(password)) {
      newErrors.password =
        "La contraseña no cumple los requisitos de seguridad";
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = "Repite la contraseña";
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = "Las contraseñas no coinciden";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleRegister = async () => {
    setAuthError(null);

    if (!validate()) return;

    const success = await register(email, username, password);

    if (!success) {
      setAuthError("No se pudo crear la cuenta");
      return;
    }

    const loggedIn = await login(email, password);
    if (loggedIn) {
      setUsername("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      navigate("/collection");
    } else {
      setAuthError("Cuenta creada, pero error al iniciar sesión");
    }
  };

  const inputClass = (hasError?: boolean) =>
    `w-full px-4 py-2.5 rounded-lg bg-surface border text-white placeholder:text-text-muted focus:outline-none focus:ring-2 transition
     ${hasError ? "border-danger focus:ring-danger" : "border-white/10 focus:ring-primary"}`;

  const checkClass = (ok: boolean) =>
    ok ? "text-green-500" : "text-danger";

  return (
    <div className="flex-1 flex flex-col gap-4">
      <h1 className="text-2xl font-bold mb-2">Crea tu cuenta</h1>
      <p className="text-sm text-text-muted mb-4">
        Regístrate para empezar a construir tu colección WildDeck.
      </p>

      {/* Username */}
      <label className="flex flex-col gap-1 text-sm">
        <span>Nombre de usuario</span>
        <input
          type="text"
          required
          className={inputClass(!!errors.username)}
          placeholder="Tu nickname"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
            setErrors((prev) => ({ ...prev, username: undefined }));
          }}
        />
        {errors.username && (
          <span className="text-danger text-xs">{errors.username}</span>
        )}
      </label>

      {/* Email */}
      <label className="flex flex-col gap-1 text-sm">
        <span>Correo electrónico</span>
        <input
          type="email"
          required
          className={inputClass(!!errors.email)}
          placeholder="tucorreo@ejemplo.com"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setErrors((prev) => ({ ...prev, email: undefined }));
          }}
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
          required
          className={inputClass(!!errors.password)}
          placeholder="••••••••"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setErrors((prev) => ({ ...prev, password: undefined }));
          }}
        />

        {password && (
          isPasswordSecure ? (
            <p className="text-green-500 text-xs mt-1 font-semibold">
              ✓ Tu contraseña es válida
            </p>
          ) : (
            <div className="mt-1 space-y-0.5 text-xs">
              <p className={checkClass(passwordChecks.length)}>
                • Mínimo 8 caracteres
              </p>
              <p className={checkClass(passwordChecks.uppercase)}>
                • Al menos una mayúscula
              </p>
              <p className={checkClass(passwordChecks.number)}>
                • Al menos un número
              </p>
              <p className={checkClass(passwordChecks.symbol)}>
                • Al menos un símbolo
              </p>
            </div>
          )
        )}

        {errors.password && (
          <span className="text-danger text-xs mt-1">{errors.password}</span>
        )}
      </label>

      {/* Confirm Password */}
      <label className="flex flex-col gap-1 text-sm">
        <span>Repite la contraseña</span>
        <input
          type="password"
          required
          className={inputClass(!!errors.confirmPassword)}
          placeholder="••••••••"
          value={confirmPassword}
          onChange={(e) => {
            setConfirmPassword(e.target.value);
            setErrors((prev) => ({ ...prev, confirmPassword: undefined }));
          }}
        />
        {errors.confirmPassword && (
          <span className="text-danger text-xs">
            {errors.confirmPassword}
          </span>
        )}
      </label>

      {/* Error general */}
      {authError && (
        <p className="text-danger text-sm mt-1">{authError}</p>
      )}

      <button
        type="button"
        disabled={!isPasswordSecure}
        className={`mt-6 inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold transition shadow-md
          ${isPasswordSecure
            ? "bg-primary text-white hover:bg-primary/90 active:scale-[0.98] shadow-primary/40"
            : "bg-white/10 text-text-muted cursor-not-allowed"
          }`}
        onClick={handleRegister}
      >
        Crear cuenta
      </button>
    </div>
  );
};
