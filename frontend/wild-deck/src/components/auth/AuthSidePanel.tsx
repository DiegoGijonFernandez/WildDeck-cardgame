import React from "react";

export const AuthSidePanel: React.FC = () => {
  return (
    <section className="bg-accent text-white flex flex-col items-center justify-center p-8">
      {/* Logo / icono */}
      <div className="mb-6 h-12 w-12 flex items-center justify-center">
        <span className="text-6xl font-bold">WildDeck</span>
      </div>

      {/* Mensaje principal */}
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
        Explora, aprende y desbloquea la naturaleza
      </h2>

      {/* Mensaje secundario */}
      <p className="text-center text-sm md:text-base opacity-90 max-w-md">
        Completa mini tests para desbloquear cartas de animales y plantas, gana
        experiencia y construye tu colección WildDeck.
      </p>
    </section>
  );
};
