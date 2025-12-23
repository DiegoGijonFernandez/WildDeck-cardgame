import { useNavigate, useParams } from "react-router-dom";
import { animalsMock } from "../mocks/animals";
import { plantsMock } from "../mocks/plants";
import { CardDetail } from "../components/cards/CardDetail";
import { useEffect, useState } from "react";
import type { Card } from "../types";

export const CardDetailPage = () => {

  const navigate = useNavigate();

  const { id } = useParams();

  const [cards, setCards] = useState<Card[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch("http://localhost:8080/api/cards");
        if (!res.ok) throw new Error("Error " + res.status);
        const data: Card[] = await res.json();
        console.log("API /cards =>", data);
        setCards(data);
      } catch (e) {
        // si falla, usar mocks directamente
         setCards([...animalsMock, ...plantsMock]);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  const allCards = cards;
  const card = allCards.find((c) => c.id === Number(id));

  if (!card) {
    return <div className="text-white p-12">Carta no encontrada</div>;
  }

  return (
    <div
      className="
  min-h-screen
  bg-background
  px-4 lg:px-5
  pt-3 pb-6
  text-black
  flex flex-col
  overflow-y-auto
  lg:overflow-visible
"
    >
      {/* Botón volver */}
      <button
        onClick={() => navigate("/collection")}
        className="
          mb-1
          flex items-center justify-center
          h-10 w-10
          rounded-full
          bg-green-700
          text-white
          shadow-lg
          hover:scale-105
          transition
        "
        aria-label="Volver a la colección"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <CardDetail card={card} />
    </div>
  );
};
