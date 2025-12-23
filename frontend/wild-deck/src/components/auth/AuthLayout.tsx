import React from "react";
import { AuthSidePanel } from "./AuthSidePanel";

interface AuthLayoutProps {
  children: React.ReactNode; // panel derecho
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-rightPanelBG text-text-main font-sans flex items-center justify-center px-4">
      {/* Card principal centrada */}
      <div className="w-full max-w-5xl bg-surface rounded-2xl shadow-2xl shadow-black/30 grid grid-cols-1 md:grid-cols-2 overflow-hidden">
        {/* Panel izquierdo fijo */}
        <AuthSidePanel />

        {/* Panel derecho dinámico (login / register) */}
        <section className="bg-background text-text-main p-8 md:p-10 flex flex-col">
          {children}
        </section>
      </div>
    </div>
  );
};
