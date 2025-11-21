# Sistema de Gestión Glam Soft - Estructura Modular

## Descripción
Panel de administración modular para salón de belleza "Glam Soft", organizado por componentes independientes.

## Estructura de Carpetas

```
ADMINISTRACION/
├── CSS/
│   ├── common.css              # Estilos compartidos (variables, sidebar, modales, botones)
│   ├── inicio.css              # Estilos del calendario
│   ├── portafolio.css          # Estilos del portafolio
│   ├── promocion.css           # Estilos de promociones
│   ├── servicios.css           # Estilos de servicios
│   ├── estilistas.css          # Estilos de estilistas
│   ├── formulario.css          # Estilos de formularios
│   ├── reportes.css            # Estilos de reportes
│   ├── comentarios.css         # Estilos de comentarios
│   ├── notificaciones.css      # Estilos de notificaciones
│   ├── historial.css           # Estilos del historial
│   └── perfil.css              # Estilos del perfil
│
├── HTML/
│   ├── dashboard.html          # Página principal (carga todos los módulos)
│   ├── inicio.html             # Vista del calendario
│   ├── portafolio.html         # Vista del portafolio
│   ├── promocion.html          # Vista de promociones
│   ├── servicios.html          # Vista de servicios
│   ├── estilistas.html         # Vista de estilistas
│   ├── formulario.html         # Vista de formularios
│   ├── reportes.html           # Vista de reportes
│   ├── comentarios.html        # Vista de comentarios
│   ├── notificaciones.html     # Vista de notificaciones
│   ├── historial.html          # Vista del historial
│   └── perfil.html             # Vista del perfil
│
└── JAVA_SCRIPT/
    ├── common.js               # Funciones compartidas (Utils, ModalManager, etc.)
    ├── dashboard.js            # Controlador principal
    ├── inicio.js               # Lógica del calendario
    ├── portafolio.js           # Lógica del portafolio
    ├── promocion.js            # Lógica de promociones
    ├── servicios.js            # Lógica de servicios
    ├── estilistas.js           # Lógica de estilistas
    ├── formulario.js           # Lógica de formularios
    ├── reportes.js             # Lógica de reportes
    ├── comentarios.js          # Lógica de comentarios
    ├── notificaciones.js       # Lógica de notificaciones
    ├── historial.js            # Lógica del historial
    └── perfil.js               # Lógica del perfil
```

## Módulos del Sistema

### 1. **Inicio (Calendario)**
- Vista mensual y diaria de citas
- Agregar/editar/eliminar citas
- Modo edición para gestionar el calendario
- **Archivos**: `inicio.html`, `inicio.css`, `inicio.js`

### 2. **Portafolio**
- Galería de imágenes del salón
- Subida de imágenes
- Gestión de slots de imágenes
- **Archivos**: `portafolio.html`, `portafolio.css`, `portafolio.js`

### 3. **Promoción**
- Gestión de promociones del salón
- CRUD completo de promociones
- **Archivos**: `promocion.html`, `promocion.css`, `promocion.js`

### 4. **Servicios**
- Catálogo de servicios disponibles
- CRUD completo de servicios
- **Archivos**: `servicios.html`, `servicios.css`, `servicios.js`

### 5. **Estilistas**
- Gestión del equipo de estilistas
- CRUD completo de estilistas
- Horarios de cada estilista
- **Archivos**: `estilistas.html`, `estilistas.css`, `estilistas.js`

### 6. **Reportes**
- Visualización de reportes y estadísticas
- **Archivos**: `reportes.html`, `reportes.css`, `reportes.js`

### 7. **Formulario**
- Gestión de formularios personalizados
- **Archivos**: `formulario.html`, `formulario.css`, `formulario.js`

### 8. **Comentarios**
- Gestión de comentarios de clientes
- **Archivos**: `comentarios.html`, `comentarios.css`, `comentarios.js`

### 9. **Notificaciones**
- Sistema de notificaciones de citas
- Filtrado por estado (Pendientes, Confirmadas, Realizadas)
- **Archivos**: `notificaciones.html`, `notificaciones.css`, `notificaciones.js`

### 10. **Historial**
- Historial completo de citas
- Filtros y búsqueda
- **Archivos**: `historial.html`, `historial.css`, `historial.js`

### 11. **Perfil**
- Gestión del perfil de administrador
- Edición de datos personales
- **Archivos**: `perfil.html`, `perfil.css`, `perfil.js`

## Archivos Comunes

### `common.css`
Contiene estilos compartidos por todos los módulos:
- Variables CSS (colores, tamaños)
- Reset y estilos generales
- Sidebar y navegación
- Header principal
- Modales y formularios
- Botones
- Utilidades y animaciones
- Media queries para responsive

### `common.js`
Contiene funciones compartidas:
- **Utils**: Utilidades generales (formateo de fechas, precios, etc.)
- **ModalManager**: Gestión de modales (abrir/cerrar)
- **NavigationManager**: Navegación entre módulos
- **ConfirmationManager**: Modales de confirmación
- **ImageManager**: Gestión de imágenes
- **FormManager**: Gestión de formularios

### `dashboard.js`
Controlador principal que:
- Inicializa todos los módulos
- Configura la navegación del sidebar
- Maneja eventos globales (notificaciones, perfil, logout)

## Cómo Usar

### Instalación
1. Coloca la carpeta `ADMINISTRACION` en tu servidor web
2. Asegúrate de que tienes acceso a Internet para cargar:
   - Google Fonts (Lato y Montserrat)
   - Font Awesome 6

### Acceso
- Abre `HTML/dashboard.html` en tu navegador
- El sistema cargará automáticamente todos los módulos

### Navegación
- Usa el sidebar lateral para navegar entre módulos
- Click en el icono de campana para ver notificaciones
- Click en el icono de usuario para ver el perfil

## Características del Sistema

### ✅ Modularidad
- Cada módulo es independiente con sus propios archivos HTML, CSS y JS
- Fácil de mantener y escalar
- Carga dinámica de módulos

### ✅ Responsive
- Diseño adaptable a diferentes tamaños de pantalla
- Mobile-friendly

### ✅ Gestión de Estado
- Cada módulo mantiene su propio estado
- Datos de ejemplo pre-cargados para demostración

### ✅ Interactividad
- Modales para CRUD de elementos
- Confirmaciones antes de acciones destructivas
- Feedback visual (animaciones, transiciones)

### ✅ Accesibilidad
- Etiquetas ARIA
- Navegación por teclado
- Semántica HTML correcta

## Personalización

### Cambiar Colores
Edita las variables CSS en `common.css`:
```css
:root {
    --dark-bg: #1A1A1A;
    --accent-color: #7B68EE;
    --success-green: #28A745;
    /* ... más variables */
}
```

### Agregar Nuevo Módulo
1. Crea `HTML/nuevo-modulo.html`
2. Crea `CSS/nuevo-modulo.css`
3. Crea `JAVA_SCRIPT/nuevo-modulo.js` con estructura:
```javascript
const NuevoModuloModule = (() => {
    const initialize = async () => { /* ... */ };
    const show = () => { /* ... */ };
    return { initialize, show };
})();
```
4. Agrega el módulo en `dashboard.js`
5. Agrega item en el sidebar del `dashboard.html`

## Dependencias Externas
- **Google Fonts**: Lato y Montserrat
- **Font Awesome 6**: Iconos

## Navegadores Soportados
- Chrome/Edge (últimas 2 versiones)
- Firefox (últimas 2 versiones)
- Safari (últimas 2 versiones)

## Notas Técnicas
- Sistema usa Fetch API para cargar módulos dinámicamente
- Patrón de módulo revelador para encapsulación
- Event delegation para eventos dinámicos
- LocalStorage puede agregarse para persistencia de datos

## Próximas Mejoras Sugeridas
- [ ] Integración con backend (API REST)
- [ ] Persistencia de datos (LocalStorage/IndexedDB)
- [ ] Sistema de autenticación real
- [ ] Más filtros y búsquedas avanzadas
- [ ] Exportación de reportes (PDF, Excel)
- [ ] Sistema de notificaciones en tiempo real

## Autor
Desarrollado para el salón de belleza **Glam Soft**

## Versión
1.0.0 - Versión Modular

---
© 2025 Glam Soft. Todos los derechos reservados.
