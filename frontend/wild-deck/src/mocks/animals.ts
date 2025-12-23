// src/mocks/animals.ts

import type { AnimalCard } from "../types";

export const animalsMock: AnimalCard[] = [
  {
    id: 1,
    name: "Camaleón Común",
    scientificName: "Chamaeleo chamaeleon",
    image: "/image/animalCard/camaleon_comun.avif",
    category: "animal",

    habitat: "Matorral",
    type: "Reptil",
    dietOrUse: "Insectívoro",
    conservationStatus: "LC",
    description:
      "El camaleón es un reptil especializado que destaca por su extraordinaria capacidad para cambiar de color, una habilidad que utiliza no solo para camuflarse en su entorno, sino también para comunicarse con otros camaleones y regular su temperatura corporal. Vive principalmente en zonas de matorral y vegetación densa, donde se desplaza lentamente entre ramas gracias a sus patas prensiles y su cola enroscada, que le permite mantener el equilibrio y sujetarse con firmeza.",
    curiosity:
      "Una de las características más sorprendentes del camaleón es que puede mover cada ojo de forma independiente, lo que le permite observar dos direcciones distintas al mismo tiempo. Cuando localiza una presa, ambos ojos se enfocan de manera precisa y su lengua, extremadamente larga y pegajosa, se proyecta a gran velocidad para capturar insectos en una fracción de segundo.",
    isLocked: false, // ✅ DESBLOQUEADA
  },

  {
    id: 2,
    name: "Flamenco Rosado",
    scientificName: "Phoenicopterus roseus",
    image: "/image/animalCard/flamenco_rosa.avif",
    category: "animal",

    habitat: "Humedal",
    type: "Ave",
    dietOrUse: "Omnívoro",
    conservationStatus: "CR",

    description:
      "El flamenco rosado es un ave emblemática de los humedales y marismas andaluzas, donde habita en lagunas poco profundas y zonas costeras ricas en alimento. Se caracteriza por su elegante silueta, su largo cuello curvado y sus patas extremadamente largas, adaptadas para caminar y alimentarse en el agua. Estas aves viven en grandes colonias y realizan complejos rituales de grupo, especialmente durante la época de reproducción, lo que las convierte en una de las especies más llamativas de los ecosistemas acuáticos.",
    curiosity:
      "El característico color rosado del flamenco no es natural al nacer, sino que se adquiere gracias a su alimentación, rica en pequeños crustáceos y algas que contienen pigmentos llamados carotenoides. Cuantos más pigmentos consume, más intenso es su color. Además, los flamencos se alimentan filtrando el agua con su pico curvado hacia abajo, una técnica muy particular que los hace únicos entre las aves.",

    isLocked: false, // ✅ DESBLOQUEADA
  },

  // -------- BLOQUEADAS --------

  {
    id: 3,
    name: "Lagarto Ocelado",
    scientificName: "Timon lepidus",
    image: "https://sparrou.net/wp-content/uploads/lagarto-ocelado_timon-lepidus-2-768x576.jpg",
    category: "animal",

    habitat: "Matorral",
    type: "Reptil",
    dietOrUse: "Carnívoro",
    conservationStatus: "LC",

    description: "Es el reptil más grande de la península ibérica.",
    curiosity: "Puede superar los 2 metros de longitud.",

    isLocked: true,
  },

  {
    id: 4,
    name: "Búho Real",
    scientificName: "Bubo bubo",
    image: "https://wildlifeimages.org/wp-content/uploads/2024/03/0005_AdobeStock_454627667.jpg",
    category: "animal",

    habitat: "Montaña",
    type: "Ave",
    dietOrUse: "Carnívoro",
    conservationStatus: "LC",

    description: "El búho más grande de Europa.",
    curiosity: "Puede girar su cabeza hasta 270°.",

    isLocked: true,
  },
  {
    id: 5,
    name: "Zorro Rojo",
    scientificName: "Vulpes vulpes",
    image: "https://ichef.bbci.co.uk/news/1024/cpsprodpb/7bfc/live/7f11cc50-e23d-11ef-99d1-25d244600c9d.jpg.webp",
    category: "animal",

    habitat: "Bosque",
    type: "Mamífero",
    dietOrUse: "Omnívoro",
    conservationStatus: "LC",

    description: "Mamífero muy adaptable que vive en gran parte de Andalucía.",
    curiosity: "Puede oír pequeños roedores bajo tierra.",

    isLocked: true,
  },

  {
    id: 6,
    name: "Erizo Europeo",
    scientificName: "Erinaceus europaeus",
    image: "https://voice.gardenbird.co.uk/wp-content/uploads/2018/02/Hedgehog2-min.jpg",
    category: "animal",

    habitat: "Matorral",
    type: "Mamífero",
    dietOrUse: "Insectívoro",
    conservationStatus: "LC",

    description: "Pequeño mamífero nocturno cubierto de púas.",
    curiosity: "Puede recorrer varios kilómetros durante una noche.",

    isLocked: true,
  },
];
