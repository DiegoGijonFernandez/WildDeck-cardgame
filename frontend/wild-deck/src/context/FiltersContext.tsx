import { createContext, useContext, useState } from "react";
import type { CardFilters } from "../types/filters";

interface FiltersContextProps {
  filters: CardFilters;
  setFilters: React.Dispatch<React.SetStateAction<CardFilters>>;
}

const FiltersContext = createContext<FiltersContextProps | null>(null);

export const FiltersProvider = ({ children }: { children: React.ReactNode }) => {
  const [filters, setFilters] = useState<CardFilters>({
    category: null
  });

  return (
    <FiltersContext.Provider value={{ filters, setFilters }}>
      {children}
    </FiltersContext.Provider>
  );
};

export const useFilters = () => {
  const ctx = useContext(FiltersContext);
  if (!ctx) throw new Error("useFilters debe usarse dentro de FiltersProvider");
  return ctx;
};
