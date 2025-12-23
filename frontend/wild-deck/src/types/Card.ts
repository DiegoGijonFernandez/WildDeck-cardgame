// src/types/WildCard.ts

import type {
  Habitat,
  AnimalType,
  PlantType,
  Diet,
  PlantUse,
  ConservationStatus,
} from "./enums";

export interface BaseCard {
  id: number;
  name: string;
  scientificName: string;
  image: string;
  habitat: Habitat;
  conservationStatus: ConservationStatus;
  description: string;
  curiosity: string;
  isLocked: boolean;
}

/* ============== ANIMAL ============== */

export interface AnimalCard extends BaseCard {
  category: "animal";
  type: AnimalType;
  dietOrUse: Diet;
}

/* ============== PLANTA ============== */

export interface PlantCard extends BaseCard {
  category: "plant";
  type: PlantType;
  dietOrUse: PlantUse;
}

/* ============== UNION GENERAL ============== */

export type Card = AnimalCard | PlantCard;


