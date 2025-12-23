import type { ConservationStatus } from "../types/enums";

export const conservationLabels: Record<ConservationStatus, string> = {
  LC: "Preocupación menor",
  VU: "Vulnerable",
  EN: "En peligro",
  CR: "En peligro crítico",
};

export const conservationConfig: Record<
  ConservationStatus,
  { label: string; classes: string }
> = {
  LC: {
    label: "Preocupación menor",
    classes: "bg-[color:var(--status-lc)] border border-[color:var(--status-lc)] text-white",
  },
  VU: {
    label: "Vulnerable",
    classes: "bg-[color:var(--status-vu)] border border-[color:var(--status-vu)] text-white",
  },
  EN: {
    label: "En peligro",
    classes: "bg-[color:var(--status-en)] border border-[color:var(--status-en)] text-white",
  },
  CR: {
    label: "En peligro crítico",
    classes: "bg-[color:var(--status-cr)] border border-[color:var(--status-cr)] text-white",
  },
};
