# 🃏 WildDeck

Aplicación web educativa basada en **gamificación** donde los usuarios desbloquean cartas de animales y plantas al superar mini tests interactivos. El objetivo es fomentar el aprendizaje sobre **biodiversidad** de forma visual, progresiva y divertida. :contentReference[oaicite:0]{index=0}

---

## 🌱 Visión del Proyecto
> “Queremos ayudar a las personas interesadas en la naturaleza (...) permitiéndoles desbloquear cartas educativas mediante minitests y minijuegos, para fomentar un aprendizaje activo, visual y motivador basado en la gamificación.” :contentReference[oaicite:1]{index=1}

Público objetivo:
- Jóvenes de 8 a 18 años
- Estudiantes y profesorado
- Amantes de la fauna y flora
- Personas que disfrutan de sistemas coleccionables :contentReference[oaicite:2]{index=2}

Valor diferencial del producto:
- Interfaz visual basada en cartas
- Aprendizaje progresivo con XP y niveles
- Contenido breve, atractivo y educativo
- Gamificación con recompensas :contentReference[oaicite:3]{index=3}

---

## 🎯 Problema que Resolvemos
El aprendizaje sobre biodiversidad suele ser:
- Aburrido y poco interactivo
- Difícil de seguir en términos de progreso
- Poco accesible para jóvenes

> “No existe una herramienta interactiva, sencilla y motivadora que convierta el aprendizaje en una experiencia visual, progresiva y divertida.” :contentReference[oaicite:4]{index=4}

---

## ✨ Funcionalidades del MVP

| Prioridad | Funcionalidad | Descripción |
|----------|---------------|-------------|
| Must Have | Ver colección de cartas | Mostrar cartas bloqueadas/desbloqueadas |
| Must Have | Realizar minitest por carta | Tests de 3–5 preguntas para desbloquear |
| Must Have | Ver ficha educativa | Hábitat, conservación y curiosidades |
| Must Have | XP + Nivel + Progreso | Avance visual y motivador |
| Should Have | Cuenta de usuario | Guardado de progreso en BD |
| Should Have | Rareza de cartas | Común / no común / rara |
| Could Have | Minijuego adicional | Asociación de animales y hábitats |
| Could Have | Logros / insignias | Recompensas adicionales | :contentReference[oaicite:5]{index=5}

Flujo básico del usuario:
1. Explora la colección
2. Selecciona carta bloqueada
3. Realiza minitest
4. Si aprueba → carta desbloqueada + XP
5. Revisa su progreso total :contentReference[oaicite:6]{index=6}

---

## 🛠️ Tecnologías del Proyecto

Frontend:
- **React**

Backend:
- **Java + Spring Boot**

Base de datos:
- **MySQL**

Arquitectura:
- **API REST** :contentReference[oaicite:7]{index=7}

---

## 👥 Equipo

| Rol | Integrante | Responsabilidad |
|-----|------------|----------------|
| Full-Stack | Diego | Desarrollo funcional |
| Scrum Master | Luis | Gestión ágil + UX/UI |
| Frontend | Pablo | SPA en React |
| Backend | Paco | API y datos en Java/Spring Boot | :contentReference[oaicite:8]{index=8}

---

## 📅 Gestión del Proyecto

- Metodología: **Scrum**
- Reuniones por sprint con revisión y planificación
- Herramientas: GitHub, Discord, Figma, Google Docs, Trello, WhatsApp :contentReference[oaicite:9]{index=9}

---

## 🚧 Estado del Proyecto

📌 Duración estimada: 4–5 semanas de desarrollo total :contentReference[oaicite:10]{index=10}  
👷 Sprint actual: MVP en construcción

---

## 🐾 Objetivo Final
Fomentar una mayor conexión con la **conservación del medio ambiente** a través del juego y el aprendizaje activo. :contentReference[oaicite:11]{index=11}

---

## 📝 Licencia
Este proyecto es de uso educativo y puede ser extendido libremente por el equipo desarrollador.

---
---

# Wildeck FrontEnd

## 📂 Estructura del Directorio `src/`

La carpeta `src/` contiene todo el código fuente de la aplicación. Su organización sigue un patrón que prioriza la **cohesión**, la **reutilización** y la **escalabilidad**.

---

### Componentes y Vistas

* **`components/`** 🧩
    * Contiene componentes React **reutilizables**. Se recomienda una sub-división para mantener la claridad:
        * **`common/`** (o `ui/`): Componentes atómicos o muy genéricos (e.g., `Button`, `Input`, `Card`).
        * **`specific/`**: Componentes más complejos y específicos de una característica, que suelen componerse de los componentes `common/`.
* **`pages/`** (o `views/`) 📄
    * Contiene los componentes que representan las **páginas o rutas principales** de la aplicación (e.g., `HomePage.tsx`, `ProfilePage.tsx`). Estos componentes orquestan la presentación de los `components/`.
* **`App.tsx`**
    * El componente raíz que maneja el *routing* (enrutamiento) y la estructura principal.
* **`index.tsx`**
    * El punto de entrada de la aplicación, donde se monta el componente raíz (`App`) en el DOM.

---

### Lógica y Datos

* **`hooks/`** 🎣
    * Contiene **Custom Hooks** (ganchos personalizados) para encapsular y reutilizar lógica compleja con estado entre componentes (e.g., `useFetch`, `useAuth`).
* **`context/`** (o `store/`) 📦
    * Contiene la lógica y la configuración para la **gestión del estado global** de la aplicación (usando React Context, Redux, Zustand, etc.).
* **`services/`** 📡
    * Contiene la lógica para la **comunicación con APIs externas**. Aquí se definen las funciones para realizar peticiones *fetch* o utilizar librerías como Axios/TanStack Query.

---

### Utilidades y Configuración

* **`utils/`** 🛠️
    * Funciones auxiliares, genéricas y **sin estado** que se utilizan en múltiples lugares (e.g., formateo de fechas, validación de datos, cálculos simples).
* **`types/`** ⚙️
    * Archivos dedicados a la **definición de los tipos e interfaces de TypeScript** de uso global para asegurar la coherencia y el tipado estricto en toda la aplicación.
* **`assets/`** 🖼️
    * Contiene archivos estáticos como imágenes, iconos, fuentes y otros medios que tu aplicación utilizará.

---
---

# Wildeck BackEnd

## 📂 Estructura del Directorio `src/`

La carpeta `src/` contiene todo el código fuente de la aplicación. Su organización sigue un patrón que prioriza la **cohesión**, la **reutilización** y la **escalabilidad**.

---

### Componentes y organización

### `configuration/`
Contiene los elementos relacionados con la configuración de la aplicación y la seguridad JWT:

- **`JwtUtil`**: Clase que genera y valida tokens JWT.
- **`JwtFilter`**: Filtro que intercepta las peticiones HTTP y valida los tokens.
- **`SecurityConfig`**: Configuración de Spring Security y registro del filtro JWT.

---

### `controllers/`
Contiene los controladores que manejan las rutas HTTP y la comunicación con los servicios:
---

### `dto/`
Contiene las clases DTO (Data Transfer Object) utilizadas para transportar datos entre el frontend y el backend:
---

### `entities/`
Contiene las entidades JPA que representan las tablas de la base de datos:
---

### `repositories/`
Contiene las interfaces de acceso a la base de datos:
---

### `services/`
Contiene la lógica de negocio de la aplicación
---


