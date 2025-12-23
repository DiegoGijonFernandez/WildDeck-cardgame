import type {
  Category,
  Habitat,
  AnimalType,
  PlantType,
  Diet,
  PlantUse,
  ConservationStatus,
} from "./enums";

export interface CardFilters {
  category?: Category | null;
  habitat?: Habitat | null;
  type?: AnimalType | PlantType | null;
  dietOrUse?: Diet | PlantUse | null;
  conservationStatus?: ConservationStatus | null;
}
