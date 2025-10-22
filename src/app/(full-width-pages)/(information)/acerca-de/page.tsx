
import AppFooter from "@/layout/AppFooter";
import { Metadata } from "next";
import React from "react";

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
                url: "https://gasolinasv.com",
                width: 1200,
                height: 630,
                alt: "Gasolineras SV - Precios de Combustible en El Salvador",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Gasolina SV | Precios de Combustible en El Salvador",
        description:
            "Consulta precios actualizados de gasolina y diésel en todo El Salvador.",
        images: ["https://gasolinasv.com"],
        creator: "@GasolinaSV",
    },
    manifest: "/manifest.json",
};

export default function AcercaDePage() {
    return (
        <main className="max-w-4xl mx-auto px-6 py-10 text-gray-800 dark:text-gray-300">
            <h1 className="text-2xl font-semibold mb-6 text-center">
                Aviso sobre el origen y uso de los datos
            </h1>

            <div className="space-y-4 text-sm leading-relaxed">
                <p>
                    La información presentada en este sitio proviene de fuentes públicas
                    del Gobierno de la República de El Salvador, particularmente del portal
                    del Sistema de Información de Hidrocarburos (SINAPP) administrado por
                    la Dirección General de Energía, Hidrocarburos y Minas (DGEHM) del
                    Ministerio de Economía (MINEC).
                </p>

                <p>
                    Este sitio no tiene relación institucional, contractual ni comercial con
                    el MINEC ni con la DGEHM, y su finalidad es únicamente facilitar la
                    consulta ciudadana de los precios de los combustibles mediante una
                    interfaz más accesible y herramientas de análisis.
                </p>

                <p>
                    Los datos mostrados pueden diferir temporalmente de la información
                    oficial debido a retrasos en la actualización, errores de conexión o
                    transformaciones automáticas del formato original. No se garantiza la
                    exactitud, integridad ni vigencia de la información.
                </p>

                <p>
                    La información reproducida es de carácter público, según las políticas
                    de acceso a la información del Gobierno de El Salvador y principios de
                    transparencia activa. Este proyecto respeta dichas disposiciones y no
                    modifica ni altera los datos originales más allá de su formato de
                    presentación.
                </p>

                <p>
                    El uso de la información es exclusivamente con fines informativos y
                    educativos, y no debe considerarse asesoramiento comercial o técnico.
                    Los usuarios asumen toda responsabilidad por el uso que hagan de los
                    datos aquí expuestos.
                </p>

                <p>
                    Si algún organismo o entidad pública considera que el contenido infringe
                    derechos o políticas de uso de datos, puede solicitar su revisión o
                    eliminación mediante los canales de contacto indicados en este sitio.
                </p>
            </div>
            <div>
                <AppFooter />
            </div>
        </main>
    );
}
