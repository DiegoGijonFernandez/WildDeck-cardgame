import type { Card } from "../../types/Card";
import { conservationLabels, conservationConfig  } from "../../utils/conservation";

export const CardDetail = ({ card }: { card: Card }) => {
  return (
    <div
      className="
        grid
        grid-cols-1
        lg:grid-cols-2
        gap-2
        items-start
      "
    >
      {/* COLUMNA IZQUIERDA – IMAGEN */}
      <div className="flex justify-center">
        <div
          className="
            bg-white
            rounded-2xl
            shadow-xl
            p-3
            max-w-lg
            w-full
          "
        >
          <img
            src={card.image}
            alt={card.name}
            className="
              w-full
              max-h-[60vh]
              object-cover
              rounded-xl
            "
          />

          <div className="mt-2 text-center">
            <h2 className="text-2xl font-semibold">{card.name}</h2>
          </div>
        </div>
      </div>

      {/* COLUMNA DERECHA – INFO */}
      <div className="flex flex-col gap-4">
        {/* BLOQUE 1 – CARACTERÍSTICAS */}
        <div
          className="
            bg-white
            rounded-2xl
            shadow
            p-4
            grid
            grid-cols-2
            gap-4
          "
        >
          <div>
            <p className="text-base text-gray-500">Hábitat</p>
            <p className="text-lg font-medium text-gray-800">{card.habitat}</p>
          </div>

          <div>
            <p className="text-base text-gray-500">Estado de conservación</p>
            <p className="text-lg font-medium text-gray-800">
              {conservationLabels[card.conservationStatus]} (
              {card.conservationStatus})
            </p>
          </div>

          <div>
            <p className="text-base text-gray-500">Tipo</p>
            <p className="text-lg font-medium text-gray-800">{card.type}</p>
          </div>

          <div>
            <p className="text-base text-gray-500">Dieta / Uso</p>
            <p className="text-lg font-medium text-gray-800">
              {card.dietOrUse}
            </p>
          </div>
        </div>

        {/* BLOQUE 2 – TEXTO */}
        <div
          className="
            bg-white
            rounded-2xl
            shadow
            p-4
            flex
            flex-col
            gap-3
          "
        >
          <div>
            <p className="text-base text-gray-500 mb-1">Descripción</p>
            <p className="text-lg text-gray-700 leading-relaxed">
              {card.description}
            </p>
          </div>

          <hr className="border-gray-200" />

          <div>
            <p className="text-base text-gray-500 mb-1">Curiosidad</p>
            <p className="text-lg text-gray-700 leading-relaxed">
              {card.curiosity}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
