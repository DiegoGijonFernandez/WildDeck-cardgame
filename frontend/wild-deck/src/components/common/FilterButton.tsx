type FilterVariant = "animal" | "plant" | "status" | "neutral";

type FilterButtonProps = {
  label: string;
  active: boolean;
  onClick: () => void;
  variant?: FilterVariant;
  className?: string;
};

export const FilterButton = ({
  label,
  active,
  onClick,
  variant = "neutral",
  className = "",
}: FilterButtonProps) => {
  const base =
    "h-8 min-w-[32px] px-2 rounded-full border border-white/70 text-lg font-semibold transition flex items-center justify-center";

  const variants: Record<FilterVariant, { active: string; inactive: string }> = {
    animal: {
      active: "bg-[var(--animal-bg-active)] text-white",
      inactive: "bg-[var(--animal-bg)] text-black hover:brightness-110",
    },
    plant: {
      active: "bg-[var(--plant-bg-active)] text-white",
      inactive: "bg-[var(--plant-bg)] text-black hover:brightness-110",
    },
    status: {
      active: "text-white",
      inactive: "text-black/90 hover:brightness-110",
    },
    neutral: {
      active: "bg-primary text-white",
      inactive: "bg-surface text-black hover:brightness-110",
    },
  };

  return (
    <button
      onClick={onClick}
      className={`${base} ${active ? variants[variant].active : variants[variant].inactive} ${className}`}
      type="button"
    >
      {label}
    </button>
  );
};
