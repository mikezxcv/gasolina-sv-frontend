import { Metadata } from "next";

export const metadata: Metadata = {

    title: "Gasolina SV | Precios de Gasolina en El Salvador en Tiempo Real",
    description:
        "Consulta los precios actualizados de gasolina, diésel y gas en El Salvador. Compara estaciones, encuentra la más barata y ahorra en tus llenados con Gasolineras SV.",
    keywords: [
        "gasolineras El Salvador",
        "precios gasolina El Salvador",
        "precio combustible hoy",
        "diésel El Salvador",
        "gasolina regular, especial, diésel",
        "estaciones de servicio",
        "combustibles SV",
    ],
    authors: [{ name: "Gasolina SV Team" }],
    openGraph: {
        title: "Gasolina SV | Precios de Combustible en El Salvador",
        description:
            "Encuentra los precios más recientes de gasolina y diésel en El Salvador. Compara y localiza las mejores estaciones cerca de ti.",
        url: "https://gasolinasv.com",
        siteName: "Gasolina SV",
        locale: "es_SV",
        type: "website",
        images: [
            {
                url: "https://gasolinerassv.com/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Gasolineras SV - Precios de Combustible en El Salvador",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Gasolineras SV | Precios de Combustible en El Salvador",
        description:
            "Consulta precios actualizados de gasolina y diésel en todo El Salvador.",
        images: ["https://gasolinerassv.com/og-image.jpg"],
        creator: "@GasolinerasSV",
    },
    themeColor: "#0F172A",
    manifest: "/manifest.json",
};

export default function AppFooter() {
    return (
        <footer className="relative w-full mt-10 border-t border-gray-200 dark:border-gray-700 py-4 text-center px-4">
            <aside>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                    Copyright © {new Date().getFullYear()} - Todos los derechos reservados por{" "}
                    <span className="font-medium text-gray-600 dark:text-gray-300">
                        {process.env.NEXT_PUBLIC_APP_NAME || "Gasolina SV"}
                    </span>
                </p>
            </aside>

            <aside className="mt-3 text-xs text-gray-500 dark:text-gray-400 leading-relaxed max-w-3xl mx-auto">
                <p>
                    Datos obtenidos de fuentes públicas del Ministerio de Economía de El Salvador.
                    Este sitio no representa ni está afiliado a ninguna institución gubernamental.
                    La información se presenta con fines informativos y puede no reflejar actualizaciones en tiempo real.
                </p>
                <p className="mt-2">
                    <a
                        href="/acerca-de"
                        className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 underline underline-offset-2 transition-colors"
                    >
                        Acerca de
                    </a>
                </p>
            </aside>
        </footer>
    );
}

