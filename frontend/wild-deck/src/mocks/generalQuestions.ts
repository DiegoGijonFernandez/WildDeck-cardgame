export interface Question {
    id: number;
    question: string;
    r1: string; // Incorrect response 1
    r2: string; // Incorrect response 2
    r3: string; // Incorrect response 3
    correctAnswer: string; // Correct response
    explanation: string;
}

export const generalCultureQuestions: Question[] = [
    // --- ANIMALES ---
    {
        id: 1,
        question: "¿Cuál es la principal amenaza para la supervivencia del Lince Ibérico?",
        r1: "La caza furtiva por su piel",
        r2: "El cambio climático extremo en el norte",
        r3: "La competencia directa con los lobos",
        correctAnswer: "La destrucción de su hábitat y la escasez de conejos",
        explanation: "El lince ibérico es un especialista que depende casi exclusivamente del conejo para alimentarse. La disminución de las poblaciones de conejos y la fragmentación del hábitat son sus mayores retos."
    },
    {
        id: 2,
        question: "¿Qué característica hace única al Águila Imperial Ibérica respecto a otras águilas?",
        r1: "Es el ave más rápida del mundo",
        r2: "Puede sumergirse en el agua para pescar",
        r3: "Migra a África todos los inviernos para criar",
        correctAnswer: "Es una especie endémica de la Península Ibérica",
        explanation: "A diferencia de otras grandes rapaces, el Águila Imperial Ibérica solo se encuentra de forma natural en los bosques y montes de la península ibérica."
    },
    {
        id: 3,
        question: "¿Por qué los flamencos tienen ese color rosado característico en sus plumas?",
        r1: "Es su color genético natural desde que nacen",
        r2: "Para camuflarse durante las puestas de sol",
        r3: "Debido a la exposición prolongada a la radiación solar",
        correctAnswer: "Por los pigmentos de los pequeños crustáceos y algas que comen",
        explanation: "Su color rosa proviene de los carotenoides presentes en los organismos que filtran del agua, como la artemia salina. Al nacer, su plumaje es grisáceo."
    },
    {
        id: 4,
        question: "¿Qué curioso mito antiguo rodeaba a la Salamandra Común?",
        r1: "Se pensaba que su canto atraía las tormentas",
        r2: "Decían que podía volar distancias cortas",
        r3: "Se creía que se convertía en piedra al sol",
        correctAnswer: "Se creía que nacía del fuego y no se quemaba",
        explanation: "Al esconderse en troncos que luego se usaban como leña, escapaban al encenderse el fuego, haciendo creer a la gente que nacían de las llamas."
    },
    {
        id: 5,
        question: "¿Cuál es la función especial de los ojos del Camaleón Común?",
        r1: "Pueden ver en total oscuridad como los búhos",
        r2: "Detectan el calor corporal de las presas",
        r3: "Cambian de color según la temperatura ambiente",
        correctAnswer: "Se mueven independientemente para una visión de 360 grados",
        explanation: "Cada ojo puede moverse y enfocar por separado, permitiéndoles vigilar a los depredadores y apuntar a sus presas simultáneamente."
    },

    // --- PLANTAS ---
    {
        id: 6,
        question: "¿Qué material famoso se obtiene del Alcornoque sin necesidad de talar el árbol?",
        r1: "La resina de pino",
        r2: "El látex natural",
        r3: "La savia de arce",
        correctAnswer: "El corcho",
        explanation: "El corcho es la corteza del alcornoque, que se puede extraer (la 'saca') periódicamente sin dañar el árbol, siendo un recurso renovable y sostenible."
    },
    {
        id: 7,
        question: "¿Cuál es la relación botánica entre el Acebuche y el Olivo?",
        r1: "Son plantas de familias totalmente distintas",
        r2: "El Acebuche es un parásito que crece sobre el Olivo",
        r3: "El Olivo es la versión venenosa del Acebuche",
        correctAnswer: "El Acebuche es la variedad silvestre del Olivo",
        explanation: "El acebuche es el olivo en su estado salvaje. A menudo se utiliza como patrón para injertar las variedades de olivo cultivado."
    },
    {
        id: 8,
        question: "¿Para qué se utilizaba tradicionalmente el Esparto en el sur de España?",
        r1: "Como principal alimento para el ganado vacuno",
        r2: "Para construir vigas maestras de las casas",
        r3: "Sus flores se vendían como perfume de lujo",
        correctAnswer: "Para fabricar cuerdas, cestas, alfombras y calzado",
        explanation: "La fibra del esparto ha sido fundamental en la artesanía mediterránea para elaborar todo tipo de utensilios agrícolas y domésticos, como las alpargatas."
    },
    {
        id: 9,
        question: "¿Qué curiosidad histórica tiene la semilla del Algarrobo relacionada con la joyería?",
        r1: "Se pulía para usarla como gema negra falsa",
        r2: "Se usaba para limpiar el oro de impurezas",
        r3: "Era la moneda de cambio más valiosa que el oro",
        correctAnswer: "Se usaba como unidad de peso, dando origen al 'quilate'",
        explanation: "Debido a la gran uniformidad en el peso de sus semillas (aprox 0.2g), se usaban como patrón para pesar gemas, de donde deriva la palabra 'quilate' (del griego keration)."
    },
    {
        id: 10,
        question: "¿Qué uso medicinal popular se le ha dado históricamente a la infusión de Manzanilla?",
        r1: "Curar huesos rotos rápidamente",
        r2: "Mejorar la visión nocturna",
        r3: "Teñir el cabello de negro intenso",
        correctAnswer: "Calmar dolores estomacales y digestivos",
        explanation: "La manzanilla es ampliamente conocida por sus propiedades digestivas, calmantes y antiinflamatorias, siendo un remedio casero muy común."
    }
];
