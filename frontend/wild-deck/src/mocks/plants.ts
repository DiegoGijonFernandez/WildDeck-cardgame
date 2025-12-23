// src/mocks/plants.ts

import type { PlantCard } from "../types";

export const plantsMock: PlantCard[] = [
  {
    id: 101,
    name: "Romero",
    scientificName: "Rosmarinus officinalis",
    image: "/image/plantCard/romero.jpg",
    category: "plant",

    habitat: "Matorral",
    type: "Herbácea",
    dietOrUse: "Aromática",
    conservationStatus: "LC",
    description:
      "El romero es una planta aromática típica de la región mediterránea, muy común en zonas de matorral y terrenos secos y soleados. Se caracteriza por sus hojas estrechas y alargadas, de color verde intenso, y por su aroma fuerte y agradable. Es una planta resistente que puede crecer en suelos pobres y soportar largos periodos de sequía, lo que la convierte en una especie muy representativa de los paisajes naturales del sur de España.",
    curiosity:
      "Desde la antigüedad, el romero ha sido utilizado con fines medicinales, culinarios y simbólicos. En la antigua Grecia y Roma se asociaba con la memoria y la concentración, y tradicionalmente se ha empleado en infusiones y ungüentos para aliviar dolores musculares y mejorar la circulación. Además, su intenso aroma ayuda a repeler insectos y a conservar alimentos.",

    isLocked: false, // ✅ DESBLOQUEADA
  },

  {
    id: 102,
    name: "Encina",
    scientificName: "Quercus ilex",
    image: "/image/plantCard/encina.jpg",
    category: "plant",

    habitat: "Bosque",
    type: "Árbol",
    dietOrUse: "Endémica",
    conservationStatus: "LC",

    description:
      "La encina es un árbol característico de los bosques mediterráneos y uno de los símbolos naturales más representativos de la península ibérica. Se adapta perfectamente a climas secos y calurosos, gracias a sus hojas duras y coriáceas, que reducen la pérdida de agua. Forma parte esencial de ecosistemas como las dehesas, donde proporciona refugio y alimento a numerosas especies animales, contribuyendo al equilibrio natural del entorno.",
    curiosity:
      "La encina es un árbol de crecimiento lento pero extremadamente longevo, capaz de vivir varios siglos si se dan las condiciones adecuadas. Algunos ejemplares pueden superar los 500 años de edad. Además, sus frutos, las bellotas, han sido aprovechados tradicionalmente tanto para la alimentación del ganado como en la dieta humana en épocas de escasez.",

    isLocked: false, // ✅ DESBLOQUEADA
  },

  // -------- BLOQUEADAS --------

  {
    id: 103,
    name: "Alcornoque",
    scientificName: "Quercus suber",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/70/Quercus_suber_JPG1.jpg",
    category: "plant",

    habitat: "Bosque",
    type: "Árbol",
    dietOrUse: "Protegida",
    conservationStatus: "LC",

    description: "Árbol del que se extrae el corcho.",
    curiosity: "Puede descorcharse sin matar al árbol.",

    isLocked: true,
  },

  {
    id: 104,
    name: "Lentisco",
    scientificName: "Pistacia lentiscus",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f8/Pistacia_lentiscus_g3.jpg",
    category: "plant",

    habitat: "Matorral",
    type: "Arbusto",
    dietOrUse: "Medicinal",
    conservationStatus: "LC",

    description: "Arbusto siempre verde típico del monte bajo.",
    curiosity: "Produce una resina usada tradicionalmente.",

    isLocked: true,
  },
  {
    id: 105,
    name: "Tomillo",
    scientificName: "Thymus vulgaris",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Starr-080812-9700-Thymus_vulgaris-leaves-Makawao-Maui_%2824807095872%29.jpg",
    category: "plant",

    habitat: "Matorral",
    type: "Herbácea",
    dietOrUse: "Aromática",
    conservationStatus: "LC",

    description: "Planta aromática muy presente en zonas secas.",
    curiosity: "Tradicionalmente se usa en infusiones medicinales.",

    isLocked: true,
  },
];
