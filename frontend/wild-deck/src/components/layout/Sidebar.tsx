import { useState } from "react";
import type {
  AnimalType,
  Category,
  ConservationStatus,
  Diet,
  Habitat,
  PlantType,
  PlantUse,
} from "../../types";
import { useFilters } from "../../context/FiltersContext";

export const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const [openSections, setOpenSections] = useState({
    category: false,
    type: false,
    habitat: false,
    diet: false,
    danger: false,
  });

  const { filters, setFilters } = useFilters();

  const toggleSection = (key: keyof typeof openSections) => {
    setOpenSections((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  /* ======================
     SETTERS
  ====================== */

  const setCategory = (category: Category) =>
    setFilters((p) => ({
      ...p,
      category: p.category === category ? null : category,
    }));

  const setType = (type: AnimalType | PlantType) =>
    setFilters((p) => ({
      ...p,
      type: p.type === type ? null : type,
    }));

  const setHabitat = (habitat: Habitat) =>
    setFilters((p) => ({
      ...p,
      habitat: p.habitat === habitat ? null : habitat,
    }));

  const setDietUse = (value: Diet | PlantUse) =>
    setFilters((p) => ({
      ...p,
      dietOrUse: p.dietOrUse === value ? null : value,
    }));

  const setDanger = (status: ConservationStatus) =>
    setFilters((p) => ({
      ...p,
      conservationStatus:
        p.conservationStatus === status ? null : status,
    }));

  const clearFilter = (key: keyof typeof filters) =>
    setFilters((p) => ({ ...p, [key]: null }));

  /* ======================
     LABELS
  ====================== */

  const dangerLabels: Record<ConservationStatus, string> = {
    LC: "Preocupación menor (LC)",
    VU: "Vulnerable (VU)",
    EN: "En peligro (EN)",
    CR: "En peligro crítico (CR)",
  };

  const categoryLabels: Record<Category, string> = {
    animal: "Animal",
    plant: "Planta",
  };

  /* ======================
     TAGS ACTIVOS
  ====================== */

  const activeTags = [
    filters.category && {
      key: "category",
      label: categoryLabels[filters.category],
    },
    filters.type && { key: "type", label: filters.type },
    filters.habitat && { key: "habitat", label: filters.habitat },
    filters.dietOrUse && { key: "dietOrUse", label: filters.dietOrUse },
    filters.conservationStatus && {
      key: "conservationStatus",
      label: dangerLabels[filters.conservationStatus],
    },
  ].filter(Boolean) as { key: keyof typeof filters; label: string }[];

  return (
    <aside
      className={`
        relative
        border-r border-white/10
        bg-gradient-to-b
        from-[var(--topbar-from)]
        to-[var(--topbar-to)]
        transition-all duration-300
        ${collapsed ? "w-5 px-2 pt-4" : "w-80 px-4 pt-4"}
        hidden md:flex flex-col gap-4
      `}
    >
      {/* BOTÓN COLAPSAR */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="absolute top-1/2 -translate-y-1/2 -right-4 h-9 w-9 rounded-full bg-green-700 text-white flex items-center justify-center shadow-lg hover:scale-110 transition z-50"
      >
        ‹
      </button>

      {!collapsed && (
        <>
          {/* TAGS ACTIVOS */}
          {activeTags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {activeTags.map((tag) => (
                <span
                  key={tag.key}
                  className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs text-white"
                >
                  {tag.label}
                  <button
                    onClick={() => clearFilter(tag.key)}
                    className="text-white/70 hover:text-white"
                  >
                    ✕
                  </button>
                </span>
              ))}
            </div>
          )}

          {/* FILTROS */}
          <div className="space-y-2 text-sm">

            {/* TIPO DE ANIMAL */}
            <FilterSection
              title="Tipo de animal"
              color="text-sky-400"
              open={openSections.category}
              onToggle={() => toggleSection("category")}
            >
              {(["animal", "plant"] as Category[]).map((v) => (
                <FilterRadio
                  key={v}
                  label={categoryLabels[v]}
                  active={filters.category === v}
                  color="bg-sky-500"
                  onSelect={() => setCategory(v)}
                />
              ))}
            </FilterSection>

            {/* TIPO */}
            <FilterSection
              title="Tipo"
              color="text-orange-400"
              open={openSections.type}
              onToggle={() => toggleSection("type")}
            >
              {[
                "Anfibio", "Ave", "Insectoide", "Mamífero", "Reptil",
                "Arbusto", "Conífera", "Herbácea", "Árbol",
              ].map((v) => (
                <FilterRadio
                  key={v}
                  label={v}
                  active={filters.type === v}
                  color="bg-orange-500"
                  onSelect={() => setType(v as any)}
                />
              ))}
            </FilterSection>

            {/* HÁBITAT */}
            <FilterSection
              title="Hábitat"
              color="text-emerald-400"
              open={openSections.habitat}
              onToggle={() => toggleSection("habitat")}
            >
              {[
                "Bosque", "Matorral", "Montaña", "Costa/Mar", "Humedal", "Litoral",
              ].map((v) => (
                <FilterRadio
                  key={v}
                  label={v}
                  active={filters.habitat === v}
                  color="bg-emerald-500"
                  onSelect={() => setHabitat(v as Habitat)}
                />
              ))}
            </FilterSection>

            {/* DIETA / USO */}
            <FilterSection
              title="Dieta / Uso"
              color="text-lime-400"
              open={openSections.diet}
              onToggle={() => toggleSection("diet")}
            >
              {[
                "Carnívoro", "Herbívoro", "Insectívoro", "Omnívoro", "Piscívoro",
                "Aromática", "Endémica", "Medicinal", "Protegida",
              ].map((v) => (
                <FilterRadio
                  key={v}
                  label={v}
                  active={filters.dietOrUse === v}
                  color="bg-lime-500"
                  onSelect={() => setDietUse(v as any)}
                />
              ))}
            </FilterSection>

            {/* PELIGRO DE EXTINCIÓN */}
            <FilterSection
              title="Peligro de extinción"
              color="text-red-400"
              open={openSections.danger}
              onToggle={() => toggleSection("danger")}
            >
              {(Object.keys(dangerLabels) as ConservationStatus[]).map((k) => (
                <FilterRadio
                  key={k}
                  label={dangerLabels[k]}
                  active={filters.conservationStatus === k}
                  color="bg-red-500"
                  onSelect={() => setDanger(k)}
                />
              ))}
            </FilterSection>
          </div>
        </>
      )}
    </aside>
  );
};

/* =========================
   COMPONENTES AUXILIARES
========================= */

const FilterSection = ({
  title,
  color,
  open,
  onToggle,
  children,
}: {
  title: string;
  color: string;
  open: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) => (
  <div className="border border-white/10 rounded-xl bg-background/60 px-3 py-2">
    <button
      onClick={onToggle}
      className={`w-full flex justify-between font-semibold ${color}`}
    >
      {title}
      <span>{open ? "−" : "+"}</span>
    </button>
    {open && <div className="mt-2 space-y-2">{children}</div>}
  </div>
);

const FilterRadio = ({
  label,
  active,
  onSelect,
  color,
}: {
  label: string;
  active: boolean;
  onSelect: () => void;
  color: string;
}) => (
  <button
    onClick={onSelect}
    className="flex items-center gap-2 text-left"
  >
    <span
      className={`
        h-4 w-4 rounded-full border border-white/40
        flex items-center justify-center
        ${active ? color : ""}
      `}
    >
      {active && <span className="h-2 w-2 rounded-full bg-white" />}
    </span>
    <span className={active ? "text-white" : "text-white/70"}>
      {label}
    </span>
  </button>
);
