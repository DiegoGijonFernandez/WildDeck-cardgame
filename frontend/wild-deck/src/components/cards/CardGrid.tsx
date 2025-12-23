import { animalsMock } from "../../mocks/animals";
import { plantsMock } from "../../mocks/plants";
import { WildCard } from "./WildCard";
import { useFilters } from "../../context/FiltersContext";
import { useEffect, useState } from "react";
import type { Card } from "../../types";

export const CardGrid = () => {
  //necesitamos contar el back y tarer cartas

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
//const [cards] = useState<Card[]>([...animalsMock, ...plantsMock]);

const allCards = cards;


  const unlocked = allCards.filter((card) => !card.isLocked);
  const locked = allCards.filter((card) => card.isLocked);

  const orderedCards = [...unlocked, ...locked];
  const { filters } = useFilters();

  let filteredCards = orderedCards;

  if (filters.category) {
    filteredCards = filteredCards.filter(
      (card) => card.category === filters.category
    );
  }

  if (filters.type) {
    filteredCards = filteredCards.filter((card) => card.type === filters.type);
  }

  if (filters.habitat) {
    filteredCards = filteredCards.filter(
      (card) => card.habitat === filters.habitat
    );
  }

  if (filters.dietOrUse) {
    filteredCards = filteredCards.filter(
      (card) => card.dietOrUse === filters.dietOrUse
    );
  }

  if (filters.conservationStatus) {
    filteredCards = filteredCards.filter(
      (card) => card.conservationStatus === filters.conservationStatus
    );
  }

  if (loading) return <p>Cargando cartas...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <section className="h-full px-4 sm:px-6 py-4 overflow-hidden">
      <div
        className="
      h-full
      grid
      grid-cols-2
      sm:grid-cols-3
      md:grid-cols-4
      xl:grid-cols-5
      gap-4 sm:gap-5
      overflow-y-auto
      auto-rows-max
      no-scrollbar
    "
      >
        {filteredCards.map((card) => (
          <WildCard key={card.id} card={card} />
        ))}
      </div>
    </section>
  );
};
