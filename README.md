# Dashboard Admin Panel

Un moderno panel de administración construido con las últimas tecnologías web, diseñado para proporcionar una experiencia de usuario fluida y profesional.

## 🚀 Características

- **Dashboard interactivo** con visualización de datos en tiempo real
- **Componentes UI modernos** y reutilizables
- **Sidebar responsive** con navegación intuitiva
- **Modo oscuro** integrado para mejor experiencia de usuario
- **Gráficos y tablas** para análisis de datos con ApexCharts
- **Calendario interactivo** con FullCalendar
- **Mapas vectoriales** con React JVectorMap
- **Drag & Drop** funcionalidad integrada
- **Gestión de archivos** con React Dropzone
- **Carruseles** con Swiper
- **Formularios avanzados** con validación

## 🛠️ Stack Tecnológico

Este proyecto está construido con tecnologías de vanguardia:

- **Next.js 15.2.3** - Framework React con SSR y SSG
- **React 19** - Biblioteca de interfaz de usuario
- **TypeScript 5** - Superset tipado de JavaScript
- **Tailwind CSS V4** - Framework de CSS utility-first
- **ApexCharts** - Librería de gráficos interactivos
- **FullCalendar** - Componente de calendario completo
- **React JVectorMap** - Mapas vectoriales interactivos
- **React DnD** - Funcionalidad Drag and Drop

## 📋 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- Node.js 18.x o superior (se recomienda Node.js 20.x o posterior)
- npm o yarn como gestor de paquetes
- Git para control de versiones

## 🔧 Instalación

1. **Clonar el repositorio**

```bash
git clone https://github.com/mikezxcv/tailadmin-next-typescript-free-2.0-main.git
cd tailadmin-next-typescript-free-2.0-main
```

> **Nota para usuarios de Windows:** Coloca el repositorio cerca de la raíz de tu unidad si encuentras problemas al clonar.

2. **Instalar dependencias**

```bash
npm install
# o
yarn install
```

> Si encuentras errores de dependencias peer, usa el flag `--legacy-peer-deps`:
> ```bash
> npm install --legacy-peer-deps
> ```

3. **Iniciar el servidor de desarrollo**

```bash
npm run dev
# o
yarn dev
```

4. **Abrir en el navegador**

Navega a [http://localhost:3000](http://localhost:3000) para ver la aplicación en funcionamiento.

## 📁 Estructura del Proyecto

```
.
├── public/                 # Archivos estáticos e imágenes
│   └── images/            # Recursos de imágenes
├── src/
│   ├── app/               # Next.js App Router (páginas y rutas)
│   ├── components/        # Componentes React reutilizables
│   ├── context/           # Context API de React
│   ├── hooks/             # Custom React Hooks
│   ├── icons/             # Componentes de iconos SVG
│   └── layout/            # Componentes de layout (Header, Sidebar, etc.)
├── .next/                 # Build de Next.js (generado automáticamente)
├── package.json           # Dependencias y scripts del proyecto
└── tsconfig.json          # Configuración de TypeScript
```

## 🎨 Componentes y Librerías Principales

### Visualización de Datos
- **ApexCharts** - Gráficos de líneas, barras, áreas, dona y más
- **React JVectorMap** - Mapas interactivos del mundo

### Componentes de UI
- **FullCalendar** - Calendario completo con vistas diaria, semanal y mensual
- **React Dropzone** - Upload de archivos con drag & drop
- **React DnD** - Funcionalidad de arrastrar y soltar
- **Swiper** - Carruseles y sliders modernos
- **Flatpickr** - Selector de fechas elegante

### Utilidades
- **Tailwind Merge** - Gestión optimizada de clases de Tailwind
- **Tailwind Forms** - Estilos mejorados para formularios

## 🚀 Scripts Disponibles

```bash
# Desarrollo - Inicia el servidor de desarrollo
npm run dev

# Construcción - Genera la build de producción
npm run build

# Producción - Inicia el servidor de producción
npm run start

# Linting - Revisa y corrige errores de código
npm run lint
```

## 🔄 Versión Actual

**v2.0.2** - Actualización estable con Next.js 15.2.3

### Características de esta versión:
- Migración completa a Next.js 15 App Router
- Soporte para React 19
- Actualización a Tailwind CSS v4
- Componentes optimizados con Server Components
- Mejoras de rendimiento y seguridad

## 🎯 Uso y Personalización

### Estructura de Componentes

Los componentes están organizados de la siguiente manera:

- **`src/components/`** - Componentes reutilizables (botones, cards, tablas, etc.)
- **`src/layout/`** - Componentes de estructura (Header, Sidebar, Footer)
- **`src/app/`** - Páginas y rutas usando Next.js App Router
- **`src/context/`** - Context providers para estado global
- **`src/hooks/`** - Custom hooks para lógica reutilizable
- **`src/icons/`** - Iconos SVG personalizados

### Personalizar Estilos

Todos los componentes usan Tailwind CSS. Para personalizar:

1. Modifica las clases de Tailwind directamente en los componentes
2. Ajusta la configuración en `tailwind.config.js` (si existe)
3. Añade estilos globales en `src/app/globals.css`

### Agregar Nuevas Páginas

Utiliza el sistema de routing de Next.js App Router:

```typescript
// src/app/nueva-pagina/page.tsx
export default function NuevaPagina() {
  return <div>Mi nueva página</div>
}
```

## 🌐 Navegadores Soportados

- Chrome (última versión)
- Firefox (última versión)
- Safari (última versión)
- Edge (última versión)

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo LICENSE para más detalles.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Si encuentras algún error o tienes sugerencias de mejora:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 🐛 Reporte de Bugs

Si encuentras un bug, por favor abre un issue con:
- Descripción detallada del problema
- Pasos para reproducirlo
- Comportamiento esperado vs actual
- Screenshots si aplica

## 📧 Soporte

Para preguntas o soporte:
- Abre un issue en el repositorio
- Revisa la documentación de Next.js
- Consulta la documentación de Tailwind CSS

---

Desarrollado con ❤️ usando Next.js, React 19 y Tailwind CSS