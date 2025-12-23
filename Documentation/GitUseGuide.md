# 🌳 Flujo de Trabajo de Ramas (Git Workflow)

Este flujo define el proceso de desarrollo y la gestión de ramas para asegurar la estabilidad del código en las fases de integración y producción.

---

## 1. Ramas Troncales y Propósito

| Rama | Propósito Principal | Reglas de Fusión |
| :--- | :--- | :--- |
| **`main`** | **Producción.** Contiene el código estable, probado y listo para el despliegue final. | **Solo se fusiona desde `develop`** cuando hay una versión completa lista. |
| **`develop`** | **Integración.** Es la base de trabajo. Contiene el último código estable de Frontend y Backend integrado. | Es la rama base de donde salen las ramas de funcionalidad. |
| **`frontend`** | **Funcionalidad (Cliente).** Contiene todas las características de UI/UX de la versión actual. | Rama padre para todas las ramas de *feature* de Frontend. |
| **`backend`** | **Funcionalidad (Servidor).** Contiene todas las características de la API y la lógica del servidor de la versión actual. | Rama padre para todas las ramas de *feature* de Backend. |

---

## 2. Creación de Ramas de Funcionalidad

Todas las ramas de funcionalidad (`feature`) se crean a partir de su rama padre correspondiente (`frontend` o `backend`).

| Tipo de Rama | Origen | Convención de Nombres | Destino de Merge |
| :--- | :--- | :--- | :--- |
| **Feature Frontend** | `frontend` | `front-nombre-tarea` | `frontend` |
| **Feature Backend** | `backend` | `back-nombre-tarea` | `backend` |

---

## 3. Proceso de Integración (Merge Flow)

1.  **Desarrollo Individual:** El trabajo se desarrolla y se fusiona (`merge`) a la rama padre correspondiente (e.g., `feature/front-login` $\rightarrow$ `frontend`).
2.  **Preparación de Versión:** Una vez que todas las funcionalidades de la versión están completas y probadas individualmente en `frontend` y `backend`.
3.  **Integración:** Ambas ramas, **`frontend`** y **`backend`**, se fusionan a **`develop`** para la prueba de integración completa (QA).
4.  **Lanzamiento:** Cuando el código en `develop` es **estable, completo y sin fallos**, se fusiona a **`main`** para el despliegue a producción.

**Flujo Resumido:**
$$\text{develop} \xrightarrow{\text{Fork}} \text{frontend} / \text{backend} \quad\quad \text{feature} \xrightarrow{\text{Merge}} \text{Padre} \quad\quad \text{Padre} \xrightarrow{\text{Merge}} \text{develop} \xrightarrow{\text{Merge}} \text{main}$$



# 📝 Convención de Nomenclatura de Commits (Modelo TLP)

Utilizaremos el siguiente formato estricto para asegurar un historial de Git limpio y legible:

```javascript
    <TRABAJO>:<LUGAR>:<TAREA REALIZADA>
```
---

## 1. Elementos y Reglas

| Elemento | Descripción | Ejemplos de Contenido | Reglas Clave |
| :--- | :--- | :--- | :--- |
| **`<TRABAJO>`** | Define la **acción** realizada o la naturaleza del cambio. | `feat`, `fix`, `modify`, `delete`, `refactor`, `docs` | **Obligatorio.** Indica qué se hizo. |
| **`<LUGAR>`** | Indica **dónde** se encuentra el código modificado (archivo, módulo, o área general). | `LoginForm`, `authService`, `pages/Profile`, `utils/validation` | **Obligatorio.** Indica dónde se hizo el cambio. |
| **`<TAREA REALIZADA>`** | Una descripción **concisa e imperativa** de la tarea completada. | `Implementar layout inicial`, `Corregir token expirado`, `Optimizar consulta a DB` | **Obligatorio.** Breve y al punto. |

---

## 2. Ejemplos Prácticos

### A. Tareas Específicas

| Tipo de Tarea | Nomenclatura del Commit |
| :--- | :--- |
| **Nueva funcionalidad** en el formulario de login. | `feat:LoginForm:Añadir funcionalidad de 'Recordarme'` |
| **Corrección** de un error en el servicio de la API. | `fix:authService:Corregir deserialización de la respuesta` |
| **Modificación** de una validación de seguridad. | `modify:utils/validation:Aumentar longitud mínima de password a 8` |
| **Refactorización** del *custom hook*. | `refactor:useAuth:Simplificar manejo de estado con useReducer` |
| **Adición** de pruebas unitarias. | `add:tests/api:Añadir pruebas para el endpoint GET /users` |

### B. Manejo de Cambios Globales (Múltiples Archivos)

Cuando la tarea afecta a muchas secciones a la vez, se usa un término general en el campo **`<LUGAR>`**.

| Ejemplo de Tarea | Nomenclatura del Commit |
| :--- | :--- |
| Implementar un cambio de tema en toda la app. | `feat:Global:Implementar funcionalidad de modo oscuro` |
| Actualizar una librería de terceros en todo el proyecto. | `chore:Dependencies:Actualizar versión de axios a 1.0` |
| Cambiar el nombre de una función en varios módulos. | `refactor:Nomenclatura:Renombrar función 'getData' a 'fetchData'` |

**Regla de Formato:** No uses espacios alrededor de los dos puntos (`:`) para mantener el patrón consistente.