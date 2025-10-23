# Gasolina SV - (Frontend)

Proyecto frontend para visualizar estaciones de servicio en El Salvador. Está construido con Next.js (App Router), React, TypeScript y Tailwind CSS.

## 🔎 Resumen

- Framework: Next.js (App Router) 15.2.3
- React 19: Biblioteca de interfaz de usuario
- Lenguaje: TypeScript
- Estilos: Tailwind CSS v4
- State / Data fetching: @tanstack/react-query
- Mapas: Geoapify (API pública para mapas estáticos en algunas vistas)
- Autenticación: manejo de JWT en cliente (helpers en `src/services/app.service.ts`)

Este repo contiene la interfaz, componentes y páginas destinadas a administrar y mostrar información de estaciones de servicio (gasolineras).

## Requisitos

- Node.js >= 18 (se recomienda 20+)
- npm o yarn
- Git

## Instalación rápida

Clona el repositorio y instala dependencias:

```bash
git clone https://github.com/jmanuelgnt/gasolina-sv-frontend.git
cd gasolina-sv-frontend
npm install
# o
# yarn
```

Inicia en modo desarrollo:

```bash
npm run dev
# o
# yarn dev
```

Abre http://localhost:3000 en tu navegador.

## Variables de entorno

Copia el archivo de ejemplo `.env.template` a `.env` y ajusta los valores según tu entorno.

Variables principales que usa la aplicación (también están en `.env` del proyecto):

- NEXT_PUBLIC_API_SERVICE: URL base del API (ej: https://mi-api.example.com/api/v1)
- NEXT_PUBLIC_SECRET_KEY: clave pública/semilla usada para generación de tokens en entorno de desarrollo
- NEXT_PUBLIC_EXPIRENS_IN_SECONDS: tiempo de expiración por defecto (en segundos)
- NEXT_PUBLIC_APP_NAME: nombre de la aplicación que se muestra en el header

- Variables de entorno de Google Maps:
- NEXT_PUBLIC_GOOGLE_MAPS_API_KEY: Api Key de google maps
- NEXT_PUBLIC_DEFAULT_LATITUDE: Latitude por defecto para mostrar en mapa CERCA DE MI
- NEXT_PUBLIC_DEFAULT_LONGITUDE: Longitud por defecto para mostrar en mapa CERCA DE MI
- NEXT_PUBLIC_DEFAULT_ZOOM: Zoom a aplicar en el mapa
- NEXT_PUBLIC_DEFAULT_RADIUS_METERS: Radio en Metros a aplicar en el mapa a partir de LATITUD y LONGITUD

Ejemplo mínimo (.env.template):

```
NEXT_PUBLIC_API_SERVICE=https://gasolina-sv-api-production.up.railway.app/api/v1
NEXT_PUBLIC_SECRET_KEY=alguna_clave_secreta_base64
NEXT_PUBLIC_EXPIRENS_IN_SECONDS=120
NEXT_PUBLIC_APP_NAME=Gasolina SV

#Google maps Env
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY = pvQNG184adVfuRqK
NEXT_PUBLIC_DEFAULT_LATITUDE = 13.692943
NEXT_PUBLIC_DEFAULT_LONGITUDE = -89.218191
NEXT_PUBLIC_DEFAULT_ZOOM = 12
NEXT_PUBLIC_DEFAULT_RADIUS_METERS = 5000
```

> Nota: No comites credenciales ni claves reales al repositorio.

## Scripts útiles

- npm run dev: ejecución en desarrollo (localhost:3000)
- npm run build: construcción de producción
- npm run start: iniciar servidor de producción
- npm run lint: corrección de lint

## Estructura principal del proyecto

```
.
├── public/                # Recursos estáticos (imágenes, SVGs, etc.)
├── src/
│   ├── app/               # Rutas y páginas (Next.js App Router)
│   ├── components/        # Componentes reutilizables
│   ├── context/           # Providers (Auth, Filters, Theme, Sidebar)
│   ├── hooks/             # Custom hooks
│   ├── layout/            # Layouts y cabeceras (AppHeader, AppFooter, etc.)
│   ├── services/          # Cliente API y utilidades (app.service.ts)
│   └── ui/                # Componentes de UI globales (Modal, Button, etc.)
├── .env                  # Variables de entorno (no incluidas en repo)
├── package.json
└── tsconfig.json
```

## Puntos importantes del código

- `src/services/app.service.ts` contiene helpers para manejo de JWT y configuración de axios.
- `src/app/(admin)` contiene las páginas y componentes del panel admin.
- `src/app/(full-width-pages)` agrupa páginas que ocupan todo el ancho (por ejemplo, detalles de estación).
- Modal reutilizable: `src/ui/modal/Modal.tsx` y variantes en `src/ui/modal/`.

## API y fetching

El proyecto usa `@tanstack/react-query` para consultas al backend. Hay hooks personalizados bajo `src/app/(admin)/(api)` que envuelven las llamadas al `appService`.

Ejemplos de hooks:

- `useGasStations`, `useInfiniteGasStations` — listados paginados e infinite scroll
- `useGasStationById` — obtener detalles por id
- `useNearByGasStations` — estaciones cercanas usando coordenadas

## Autenticación

La app gestiona JWT en cliente. Revisa `src/context/AuthContext.tsx` y `src/services/app.service.ts` para entender cómo se generan/guardan/recuperan tokens. En desarrollo, `initializeAuth()` permite crear un token.

## Buenas prácticas y notas

- Mantén las imágenes de marcas en `public/images/brand/` con nombres que coincidan con el campo `marca` de las estaciones.
- Para mapas estáticos se emplea Google Maps (ver `.env` para la KEY). Si cambias proveedor, ajusta las URLs donde se construyen los mapas.
- Evita exponer claves privadas en `.env` en repositorios públicos.

## Contribuir

1. Fork del repo
2. Crea una rama feature: git checkout -b feature/mi-feature
3. Haz commits con mensajes claros
4. Abre PR desde tu rama hacia `main`

## Reportar bugs

Abre un issue describiendo:
- Pasos para reproducir
- Resultado esperado vs resultado actual
- Logs o screenshots si aplica

## Licencia

Proyecto bajo la Licencia PRIVATIVA. Consulta el archivo `LICENSE`.