import type { Metadata } from "next";
import React from "react";
import Index from ".";

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
  // manifest: "/manifest.json",
};

export default function Ecommerce() {

  return (
    <div>
      <Index />
    </div>
  );
}
