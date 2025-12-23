import React, { useState } from "react";

import { AuthLayout } from "../components/auth/AuthLayout";
import { AuthTabs, type AuthMode } from "../components/auth/AuthTabs";
import { LoginForm } from "../components/auth/LoginForm";
import { RegisterForm } from "../components/auth/RegisterForm";

export const LoginPage: React.FC = () => {
  const [mode, setMode] = useState<AuthMode>("login");

  return (
    <AuthLayout>
      {/* Tabs */}
      <AuthTabs mode={mode} onChangeMode={setMode} />

      {/* Form dinámico */}
      {mode === "login" ? <LoginForm /> : <RegisterForm />}
    </AuthLayout>
  );
};
