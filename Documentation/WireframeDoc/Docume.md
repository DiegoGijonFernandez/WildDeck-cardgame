### 1.1. Paleta de colores de WildDeck

WildDeck utiliza una paleta basada en verdes naturales, tonos tierra y colores cálidos
para reforzar la temática de fauna y flora.

Colores de marca (design tokens):

- `primary`: **#165736**  
  Verde profundo. Color principal. Usado en botones CTA, acentos y elementos clave.

- `secondary`: **#808033**  
  Verde oliva. Usado para rarezas, detalles secundarios y chips decorativos.

- `background`: **#2d403e**  
  Verde grisáceo oscuro. Fondo principal de pantallas y secciones.

- `surface`: **#f4f1ea** *(propuesto)*  
  Un tono claro neutro (muy suave) para cards y contenedores, generando un contraste agradable.  
  *(NOTA: tus cuatro colores son demasiado oscuros juntos, necesitábamos uno claro para las cards.)*

- `accent`: **#cc987a**  
  Color cálido tierra. Para rarezas especiales, badges, estados destacados, selectores y pequeños elementos de UI.

- `text-main`: **#ffffff**  
  Texto principal siempre en blanco por accesibilidad sobre fondos oscuros.

- `text-muted`: **#d1d5db**  
  Gris claro suave para descripciones, etiquetas y textos secundarios.

- `danger`: **#ef4444**  
  Error universal (rojo Tailwind). Se mantiene por consistencia con patrones modernos.

  
## tailwind.config.js

```CSS
theme: {
  extend: {
    colors: {
      primary:    '#165736',
      secondary:  '#808033',
      background: '#2d403e',
      surface:    '#f4f1ea',
      accent:     '#cc987a',
      'text-main':  '#ffffff',
      'text-muted': '#d1d5db',
      danger:     '#ef4444',
    },
  },
}
```

### 1.2. Tipografía base

- **Fuente principal:** "Poppins"  
  (Moderna, juvenil y muy legible → perfecta para una app educativa gamificada).
- Cargada desde Google Fonts.
- Usada como `font-sans`.

Jerarquía tipográfica recomendada:
- Títulos grandes → `text-3xl md:text-4xl font-bold`
- Títulos medios → `text-xl font-semibold`
- Texto normal → `text-base`
- Texto secundario → `text-sm text-text-muted`


### 1.3. Bordes, radios y sombras

- **Radio principal para toda la UI:** `rounded-2xl`  
  Dará un aspecto suave, moderno y coherente con las cartas de WildDeck.

- **Sombras:**
  - Cards → `shadow-lg shadow-black/30`
  - Botones CTA → `shadow-md shadow-primary/40`

- **Espaciado estándar:**
  - Padding interno cards → `p-6`
  - Padding en pantallas → `px-4 md:px-8`
  - Gaps entre elementos → `gap-4` o `gap-6`


# 1. 🔐 Pantalla Login / Register (modo Login)

Pantalla de acceso a WildDeck, compuesta por una **card central dividida en dos paneles**:

- Panel izquierdo → mensaje visual estático (hero).  
- Panel derecho → formulario de login (más adelante se alternará con register).

---

## 1.1. Contenedor principal centrado

Estructura base que centra la card en pantalla y define el grid de 2 columnas.

```html
<body
  class="min-h-screen bg-rightPanelBG text-text-main font-sans
         flex items-center justify-center px-4"
>
  <!-- Card principal centrada -->
  <div
    class="w-full max-w-5xl bg-surface rounded-2xl shadow-2xl shadow-black/30
           grid grid-cols-1 md:grid-cols-2 overflow-hidden"
  >
    <!-- Panel izquierdo -->
    <!-- Panel derecho -->
  </div>
</body>
```

| Elemento               | Clases Tailwind principales                                                          | Descripción breve                                           |
| ---------------------- | ------------------------------------------------------------------------------------ | ----------------------------------------------------------- |
| `<body>`               | `min-h-screen flex items-center justify-center bg-rightPanelBG px-4`                 | Centra vertical y horizontal; fondo verde global.           |
| Card principal (`div`) | `w-full max-w-5xl bg-surface rounded-2xl shadow-2xl grid grid-cols-1 md:grid-cols-2` | Tarjeta grande, bordes suaves, 1–2 columnas según viewport. |


## 1.2. Panel izquierdo – Hero inspiracional

Panel visual fijo con logo, claim y espacio para ilustración.
```html
<section
  class="bg-accent text-white flex flex-col items-center justify-center p-8"
>
  <!-- Logo / icono -->
  <div
    class="mb-6 h-12 w-12 rounded-full border border-white/40
           flex items-center justify-center"
  >
    <span class="text-xl font-bold">W</span>
  </div>

  <!-- Título principal -->
  <h2 class="text-2xl md:text-3xl font-bold text-center mb-4">
    Explora, aprende y desbloquea la naturaleza
  </h2>

  <!-- Texto secundario -->
  <p class="text-center text-sm md:text-base opacity-90 max-w-md">
    Completa mini tests para desbloquear cartas de animales y plantas,
    gana experiencia y construye tu colección WildDeck.
  </p>

  <!-- Ilustración placeholder -->
  <div
    class="mt-8 h-32 w-32 rounded-full border border-white/40
           flex items-center justify-center text-sm opacity-80"
  >
    Ilustración aquí
  </div>
</section>
```

| Zona                    | Clases Tailwind principales                                                      | Rol visual                              |
| ----------------------- | -------------------------------------------------------------------------------- | --------------------------------------- |
| `<section>`             | `bg-accent text-white flex flex-col items-center justify-center p-8`             | Fondo color acento, contenido centrado. |
| Logo circular           | `h-12 w-12 rounded-full border border-white/40 flex items-center justify-center` | Marca inicial “W” en círculo.           |
| Título                  | `text-2xl md:text-3xl font-bold text-center mb-4`                                | Claim principal llamativo.              |
| Descripción             | `text-sm md:text-base opacity-90 max-w-md text-center`                           | Texto de apoyo, ancho controlado.       |
| Placeholder ilustración | `h-32 w-32 rounded-full border border-white/40 flex items-center justify-center` | Zona reservada para ilustración.        |


## 1.3. Panel derecho – Formulario Login

Panel con pestañas (visual) y formulario de inicio de sesión.

```html
<section class="bg-background text-text-main p-8 md:p-10 flex flex-col">
  <!-- Pestañas Login / Register -->
  <div class="flex justify-end gap-2 mb-8">
    <button
      class="px-4 py-2 text-sm font-semibold rounded-full
             bg-primary text-white shadow-md shadow-primary/40"
    >
      Iniciar sesión
    </button>
    <button
      class="px-4 py-2 text-sm font-semibold rounded-full
             bg-transparent text-text-muted border border-white/20
             hover:bg-white/5 transition"
    >
      Crear cuenta
    </button>
  </div>

  <!-- Contenido LOGIN -->
  <div class="flex-1 flex flex-col gap-4">
    <h1 class="text-2xl font-bold mb-2">
      Bienvenido de nuevo
    </h1>
    <p class="text-sm text-text-muted mb-4">
      Inicia sesión para continuar tu colección de cartas.
    </p>

    <!-- Campo Email -->
    <label class="flex flex-col gap-1 text-sm">
      <span>Correo electrónico</span>
      <input
        type="email"
        class="w-full px-4 py-2.5 rounded-lg
               bg-surface border border-white/10
               text-black placeholder:text-text-muted
               focus:outline-none focus:ring-2 focus:ring-primary
               focus:border-transparent transition"
        placeholder="tucorreo@ejemplo.com"
      />
    </label>

    <!-- Campo Contraseña -->
    <label class="flex flex-col gap-1 text-sm">
      <span>Contraseña</span>
      <input
        type="password"
        class="w-full px-4 py-2.5 rounded-lg
               bg-surface border border-white/10
               text-black placeholder:text-text-muted
               focus:outline-none focus:ring-2 focus:ring-primary
               focus:border-transparent transition"
        placeholder="••••••••"
      />
    </label>

    <!-- Enlaces secundarios -->
    <div class="flex items-center justify-between mt-2 text-sm">
      <button class="text-accent hover:underline">
        ¿Has olvidado tu contraseña?
      </button>
      <button
        class="text-text-muted hover:text-text-main hover:underline"
      >
        ¿Nuevo en WildDeck? Crear cuenta
      </button>
    </div>

    <!-- Botón principal Login -->
    <button
      class="mt-6 inline-flex items-center justify-center px-6 py-3
             rounded-xl bg-primary text-white font-semibold
             hover:bg-primary/90 active:scale-[0.98]
             transition shadow-md shadow-primary/40"
    >
      Iniciar sesión
    </button>
  </div>
</section>
```

| Zona                   | Clases Tailwind principales                                                              | Descripción breve                                   |
| ---------------------- | ---------------------------------------------------------------------------------------- | --------------------------------------------------- |
| `<section>` derecha    | `bg-background text-text-main p-8 md:p-10 flex flex-col`                                 | Fondo verde oscuro, padding amplio.                 |
| Pestaña Login (activa) | `px-4 py-2 text-sm font-semibold rounded-full bg-primary text-white shadow-md`           | Botón destacado, estado activo.                     |
| Pestaña Crear cuenta   | `px-4 py-2 text-sm font-semibold rounded-full bg-transparent text-text-muted border ...` | Botón secundario, estado inactivo.                  |
| Título panel           | `text-2xl font-bold mb-2`                                                                | “Bienvenido de nuevo”.                              |
| Inputs                 | `w-full px-4 py-2.5 rounded-lg bg-surface border border-white/10 focus:ring-2 ...`       | Campos con fondo claro, borde suave y foco marcado. |
| Enlace “olvidado”      | `text-accent hover:underline`                                                            | Destacado con color acento.                         |
| Botón “Iniciar sesión” | `px-6 py-3 rounded-xl bg-primary text-white font-semibold shadow-md hover:bg-primary/90` | CTA principal del panel.                            |
