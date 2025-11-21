# ÍNDICE DE MÓDULOS - GLAM SOFT

## 📁 Estructura de Archivos

Cada módulo del panel tiene 3 archivos correspondientes:
- **HTML**: Estructura y contenido del módulo
- **CSS**: Estilos específicos del módulo  
- **JS**: Lógica y funcionalidad del módulo

---

## 🏠 MÓDULO: INICIO (Calendario)

**Archivos:**
- `HTML/inicio.html` - Vista del calendario (mensual y diaria)
- `CSS/inicio.css` - Estilos del calendario
- `JAVA_SCRIPT/inicio.js` - Lógica de citas y navegación del calendario

**Funcionalidades:**
- Vista mensual y diaria del calendario
- Agregar/editar/eliminar citas
- Modo edición
- Navegación por meses y días

---

## 📸 MÓDULO: PORTAFOLIO

**Archivos:**
- `HTML/portafolio.html` - Galería de imágenes
- `CSS/portafolio.css` - Estilos de la galería
- `JAVA_SCRIPT/portafolio.js` - Gestión de imágenes

**Funcionalidades:**
- Galería de imágenes del salón
- Subir imágenes
- Eliminar imágenes
- Agregar más slots de imágenes

---

## 📢 MÓDULO: PROMOCIÓN

**Archivos:**
- `HTML/promocion.html` - Lista de promociones y modal de agregar/editar
- `CSS/promocion.css` - Estilos de tarjetas de promociones
- `JAVA_SCRIPT/promocion.js` - CRUD de promociones

**Funcionalidades:**
- Ver lista de promociones
- Agregar nueva promoción
- Editar promoción existente
- Eliminar promoción

---

## ✂️ MÓDULO: SERVICIOS

**Archivos:**
- `HTML/servicios.html` - Lista de servicios y modal de agregar/editar
- `CSS/servicios.css` - Estilos de tarjetas de servicios
- `JAVA_SCRIPT/servicios.js` - CRUD de servicios

**Funcionalidades:**
- Ver catálogo de servicios
- Agregar nuevo servicio
- Editar servicio existente
- Eliminar servicio

---

## 💇 MÓDULO: ESTILISTAS

**Archivos:**
- `HTML/estilistas.html` - Lista de estilistas y modal de agregar/editar
- `CSS/estilistas.css` - Estilos de tarjetas de estilistas
- `JAVA_SCRIPT/estilistas.js` - CRUD de estilistas

**Funcionalidades:**
- Ver lista de estilistas
- Agregar nuevo estilista
- Editar estilista existente
- Eliminar estilista
- Ver horarios de estilistas

---

## 📊 MÓDULO: REPORTES

**Archivos:**
- `HTML/reportes.html` - Vista de reportes
- `CSS/reportes.css` - Estilos de reportes
- `JAVA_SCRIPT/reportes.js` - Lógica de reportes

**Funcionalidades:**
- Visualización de estadísticas
- Reportes de citas y ventas

---

## 📝 MÓDULO: FORMULARIO

**Archivos:**
- `HTML/formulario.html` - Gestión de formularios
- `CSS/formulario.css` - Estilos de formularios
- `JAVA_SCRIPT/formulario.js` - CRUD de formularios

**Funcionalidades:**
- Crear formularios personalizados
- Editar formularios
- Eliminar formularios

---

## 💬 MÓDULO: COMENTARIOS

**Archivos:**
- `HTML/comentarios.html` - Vista de comentarios
- `CSS/comentarios.css` - Estilos de comentarios
- `JAVA_SCRIPT/comentarios.js` - Gestión de comentarios

**Funcionalidades:**
- Ver comentarios de clientes
- Responder comentarios
- Gestionar feedback

---

## 🔔 MÓDULO: NOTIFICACIONES

**Archivos:**
- `HTML/notificaciones.html` - Lista de notificaciones con tabs
- `CSS/notificaciones.css` - Estilos de notificaciones
- `JAVA_SCRIPT/notificaciones.js` - Gestión de notificaciones

**Funcionalidades:**
- Ver notificaciones pendientes
- Ver notificaciones confirmadas
- Ver notificaciones realizadas
- Filtrado por estado

---

## 📜 MÓDULO: HISTORIAL

**Archivos:**
- `HTML/historial.html` - Tabla de historial de citas
- `CSS/historial.css` - Estilos de tabla
- `JAVA_SCRIPT/historial.js` - Visualización de historial

**Funcionalidades:**
- Ver historial completo de citas
- Filtrar por estado
- Búsqueda de citas
- Ordenamiento

---

## 👤 MÓDULO: PERFIL

**Archivos:**
- `HTML/perfil.html` - Formulario de perfil de usuario
- `CSS/perfil.css` - Estilos del perfil
- `JAVA_SCRIPT/perfil.js` - Edición de perfil

**Funcionalidades:**
- Ver datos del perfil
- Editar información personal
- Cambiar contraseña
- Cerrar sesión

---

## 📦 ARCHIVOS COMUNES (Compartidos por todos los módulos)

### `common.css`
**Contiene:**
- Variables CSS globales (colores, tamaños)
- Estilos del sidebar y navegación
- Estilos del header
- Estilos de modales
- Estilos de botones
- Estilos de formularios
- Utilidades y animaciones
- Media queries responsive

### `common.js`
**Contiene:**
- **Utils**: Funciones de utilidad (formateo de fechas, precios, IDs)
- **ModalManager**: Abrir/cerrar modales
- **NavigationManager**: Navegación entre módulos, ocultar/mostrar secciones
- **ConfirmationManager**: Modales de confirmación (guardar, eliminar, cancelar)
- **ImageManager**: Gestión de subida de imágenes
- **FormManager**: Resetear y obtener datos de formularios

### `dashboard.html`
**Estructura principal:**
- Sidebar con navegación
- Header con notificaciones y perfil
- Contenedores para cada módulo
- Modales compartidos (confirmaciones, logout)
- Enlaces a todos los archivos CSS y JS

### `dashboard.js`
**Controlador principal:**
- Inicializa todos los módulos
- Configura navegación del sidebar
- Maneja eventos globales
- Coordina la interacción entre módulos

---

## 🎯 Flujo de Carga

1. Se carga `dashboard.html`
2. Se cargan estilos (`common.css` + CSS de cada módulo)
3. Se cargan scripts (`common.js` + JS de cada módulo + `dashboard.js`)
4. `dashboard.js` inicializa todos los módulos
5. Se muestra el módulo de Inicio por defecto
6. Al hacer click en el sidebar, se cambia de módulo

---

## 🔄 Cómo Funciona Cada Módulo

Todos los módulos siguen el mismo patrón:

```javascript
const ModuloModule = (() => {
    // 1. Estado del módulo
    let state = { ... };
    
    // 2. Referencias DOM
    let elements = {};
    
    // 3. Cargar HTML dinámicamente
    const loadHTML = async () => { ... };
    
    // 4. Actualizar referencias
    const updateDOMReferences = () => { ... };
    
    // 5. Configurar eventos
    const setupEventListeners = () => { ... };
    
    // 6. Renderizar contenido
    const render = () => { ... };
    
    // 7. Inicializar
    const initialize = async () => { ... };
    
    // 8. Mostrar módulo
    const show = () => { ... };
    
    // API pública
    return { initialize, show };
})();
```

---

## 📋 Checklist de Archivos Creados

**HTML (12 archivos):**
- ✅ dashboard.html (principal)
- ✅ inicio.html
- ✅ portafolio.html
- ✅ promocion.html
- ✅ servicios.html
- ✅ estilistas.html
- ✅ reportes.html
- ✅ formulario.html
- ✅ comentarios.html
- ✅ notificaciones.html
- ✅ historial.html
- ✅ perfil.html

**CSS (12 archivos):**
- ✅ common.css (compartido)
- ✅ inicio.css
- ✅ portafolio.css
- ✅ promocion.css
- ✅ servicios.css
- ✅ estilistas.css
- ✅ reportes.css
- ✅ formulario.css
- ✅ comentarios.css
- ✅ notificaciones.css
- ✅ historial.css
- ✅ perfil.css

**JAVASCRIPT (13 archivos):**
- ✅ common.js (compartido)
- ✅ dashboard.js (controlador)
- ✅ inicio.js
- ✅ portafolio.js
- ✅ promocion.js
- ✅ servicios.js
- ✅ estilistas.js
- ✅ reportes.js
- ✅ formulario.js
- ✅ comentarios.js
- ✅ notificaciones.js
- ✅ historial.js
- ✅ perfil.js

**DOCUMENTACIÓN:**
- ✅ README.md
- ✅ INDICE.md

**TOTAL: 38 archivos**

---

## 🚀 Cómo Usar

1. Abre `/HTML/dashboard.html` en tu navegador
2. El sistema cargará automáticamente todos los módulos
3. Navega usando el sidebar lateral
4. Cada módulo se carga dinámicamente al hacer click

---

## 📌 Notas Importantes

- Todos los módulos son **independientes** y **auto-contenidos**
- Los datos son de **ejemplo** (no hay backend)
- Para persistencia, agregar LocalStorage o conectar con API
- El sistema es **responsive** y funciona en móviles
- Código **limpio** y **bien documentado**

---

© 2025 Glam Soft - Sistema Modular v1.0
