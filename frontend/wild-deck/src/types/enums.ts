// src/types/enums.ts

export type Category = "animal" | "plant";

export type Habitat =
  | "Bosque"
  | "Montaña"
  | "Humedal"
  | "Litoral"
  | "Matorral"
  | "Costa/Mar";

export type AnimalType =
  | "Mamífero"
  | "Ave"
  | "Reptil"
  | "Anfibio"
  | "Insectoide";

export type Diet =
  | "Herbívoro"
  | "Carnívoro"
  | "Omnívoro"
  | "Insectívoro"
  | "Piscívoro";

export type PlantType =
  | "Árbol"
  | "Arbusto"
  | "Herbácea"
  | "Conífera";

export type PlantUse =
  | "Medicinal"
  | "Aromática"
  | "Endémica"
  | "Protegida";

export type ConservationStatus =
  | "LC"
  | "VU"
  | "EN"
  | "CR";
