import { Link } from "react-router-dom";
import type { Card as WildCardType } from "../../types/Card";
import type { ConservationStatus } from "../../types/enums";

/* Badge según estado de conservación */
const conservationClasses: Record<ConservationStatus, string> = {
  LC: "bg-[color:var(--status-lc)] border border-[color:var(--status-lc)] text-white",
  VU: "bg-[color:var(--status-vu)] border border-[color:var(--status-vu)] text-white",
  EN: "bg-[color:var(--status-en)] border border-[color:var(--status-en)] text-white",
  CR: "bg-[color:var(--status-cr)] border border-[color:var(--status-cr)] text-white",
};

/* Marcos por estado */
const frameClasses: Record<ConservationStatus, string> = {
  LC: "bg-[color:var(--status-lc)] border-[color:var(--status-lc)]",
  VU: "bg-[color:var(--status-vu)] border-[color:var(--status-vu)]",
  EN: "bg-[color:var(--status-en)] border-[color:var(--status-en)]",
  CR: "bg-[color:var(--status-cr)] border-[color:var(--status-cr)]",
};

/* Color original cuando está bloqueada */
const lockedFrame = "bg-[#7A6252] border-[#7A6252]";

export const WildCard = ({ card }: { card: WildCardType }) => {
  const isLocked = card.isLocked;

  const frameColor = isLocked
    ? lockedFrame
    : frameClasses[card.conservationStatus];

  const CardContent = (
    <article
      className={`
        relative
        w-full
        aspect-3/4
        rounded-2xl
        shadow-md
        transition-all
        duration-300
        mt-2
        ${isLocked
          ? "opacity-60 cursor-not-allowed"
          : "hover:-translate-y-1 hover:shadow-xl hover:z-20 cursor-pointer"
        }
      `}
    >
      {/* MARCO EXTERIOR */}
      <div
        className="
          h-full w-full
          p-1.5
          rounded-2xl
          bg-[#7A6252]
        "
      >
        {/* CARTA */}
        <div
          className="
            h-full w-full
            bg-[#FFEEDE]
            rounded-xl
            overflow-hidden
            flex flex-col
          "
        >
          {/* IMAGEN */}
          <div
            className={`
              flex-9
              relative
              bg-cover
              bg-center
              border-b-4
              ${frameColor}
              border-opacity-20
              ${isLocked ? "grayscale blur-[0.5px]" : ""}
            `}
            style={{ backgroundImage: `url(${card.image})` }}
          >
            {isLocked && (
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <span className="text-white font-semibold text-sm">
                  BLOQUEADA
                </span>
              </div>
            )}
          </div>

          {/* TEXTO */}
          <div className="flex-4 p-3 bg-surface flex flex-col">
            <h3 className="text-black font-semibold text-lg truncate">
              {isLocked ? "????" : card.name}
            </h3>

            <p className="text-sm text-black">
              {isLocked ? "Completa el reto" : card.habitat}
            </p>

            <div className="mt-auto flex items-center justify-between text-sm">
              {/* ESTADO DE CONSERVACIÓN */}
              {!isLocked && (
                <span
                  className={`
                    px-2.5 py-0.5
                    rounded-md
                    text-2xs
                    font-semibold
                    tracking-wide
                    ${conservationClasses[card.conservationStatus]}
                  `}
                >
                  {card.conservationStatus}
                </span>
              )}

              {/* LOCK */}
              <span
                className={`font-bold text-sm ${isLocked ? "text-red-500" : "text-green-500"
                  }`}
              >
                {isLocked ? "Bloqueada" : ""}
              </span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );

  return !isLocked ? (
    <Link to={`/card/${card.id}`}>{CardContent}</Link>
  ) : (
    CardContent
  );
};
