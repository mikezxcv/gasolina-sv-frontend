"use client";
import Image from "next/image";
import { Estacion } from "@/app/(admin)/(interfaces)/admin.interfaces";
import { FaStore, FaCalendarAlt, FaMap, FaPaperPlane } from "react-icons/fa";
import Badge from "@/ui/badge/Badge";
import Button from "@/ui/button/Button";
import { useParams } from "next/navigation";
import { useGasStationById } from "@/app/(admin)/(api)/admin.api";
import Spinner from "@/ui/spinner/Spinner";

export default function StationDetailPage() {
    const { idEstacion } = useParams();
    console.log("idEstacion", idEstacion);
    const { data, isLoading, isError } = useGasStationById(true, idEstacion as string);

    console.log("data", data);

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
                <Spinner />
            </div>
        );
    };

    if (isError || !data) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-red-50 dark:bg-red-900">
                <p className="text-red-500">Error al cargar los datos de la estación.</p>
            </div>
        );
    };

    const { estacion, marca, direccion, departamento, municipio, tienda, ultimoPrecio, latitude, longitude } = data as Estacion;

    const staticMapUrl =
        latitude && longitude
            ? `https://maps.geoapify.com/v1/staticmap?style=osm-bright-smooth&width=1200&height=500&center=lonlat:${longitude},${latitude}&zoom=15&marker=lonlat:${longitude},${latitude};type:material;color:%23dc2626;size:large;icon:gas-station&apiKey=b0e48491f5a445b6b29951c52c19e4ae`
            : null;

    const googleMapsUrl =
        latitude && longitude
            ? `https://www.google.com/maps?q=${latitude},${longitude}`
            : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(estacion)}`;

    const precios = [
        {
            label: "Regular",
            auto: ultimoPrecio.regularAuto,
            sc: ultimoPrecio.regularSc,
        },
        {
            label: "Especial",
            auto: ultimoPrecio.especialAuto,
            sc: ultimoPrecio.especialSc,
        },
        {
            label: "Diésel",
            auto:
                ultimoPrecio.dieselAuto ??
                ultimoPrecio.dieselLSAuto ??
                ultimoPrecio.ionDieselAuto,
            sc:
                ultimoPrecio.dieselSc ??
                ultimoPrecio.dieselLSSc ??
                ultimoPrecio.ionDieselSc,
        },
    ];

    const fecha = new Date(ultimoPrecio.fechaReporte).toLocaleString("es-SV");

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            {/* Contenido principal */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Columna izquierda - Información principal */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Card de información de la estación */}
                        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                            <div className="flex items-start gap-6">
                                <div className="w-20 h-20 bg-gray-100 dark:bg-gray-700 flex items-center justify-center rounded-xl flex-shrink-0">
                                    <Image
                                        src={`/images/brand/${marca}.svg`}
                                        alt={marca}
                                        width={64}
                                        height={64}
                                        className="object-contain"
                                    />
                                </div>
                                <div className="flex-1">
                                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                                        {estacion}
                                    </h1>
                                    <p className="text-base text-gray-600 dark:text-gray-300 flex items-center gap-2 mb-1">
                                        {direccion || "Dirección no disponible"}
                                    </p>
                                    <p className="text-base text-gray-600 dark:text-gray-300 mb-3 mt-4">
                                        {municipio}, {departamento}
                                    </p>
                                    <div>
                                        {tienda ? (
                                            <span className="inline-flex items-center gap-2 px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-lg text-sm font-medium">
                                                <FaStore /> Con tienda
                                            </span>
                                        ) : (
                                            <span className="inline-flex items-center gap-2 px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 rounded-lg text-sm">
                                                <FaStore /> Sin tienda
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Card de precios */}
                        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                                Precios de Combustible
                            </h2>
                            <div className="space-y-4">
                                {precios.map((p) => (
                                    <div
                                        key={p.label}
                                        className="border border-gray-200 dark:border-gray-700 rounded-xl p-5 bg-gray-50 dark:bg-gray-800/40 hover:shadow-md transition-shadow"
                                    >
                                        <p className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
                                            {p.label}
                                        </p>
                                        {p.auto || p.sc ? (
                                            <div className="flex flex-wrap gap-6">
                                                {p.auto !== null && p.auto !== undefined && (
                                                    <div className="flex flex-col gap-2">
                                                        <Badge variant="solid" color="success">
                                                            Servicio Normal
                                                        </Badge>
                                                        <span className="text-2xl font-bold text-gray-900 dark:text-white">
                                                            ${p.auto.toFixed(2)}
                                                        </span>
                                                    </div>
                                                )}
                                                {p.sc !== null && p.sc !== undefined && (
                                                    <div className="flex flex-col gap-2">
                                                        <Badge variant="solid" color="info">
                                                            Servicio Completo
                                                        </Badge>
                                                        <span className="text-2xl font-bold text-gray-900 dark:text-white">
                                                            ${p.sc.toFixed(2)}
                                                        </span>
                                                    </div>
                                                )}
                                            </div>
                                        ) : (
                                            <p className="text-sm italic text-gray-400">
                                                NO HAY DATOS
                                            </p>
                                        )}
                                    </div>
                                ))}
                            </div>

                            {/* Fecha de actualización */}
                            <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                                <p className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                                    <FaCalendarAlt />
                                    Última actualización: {fecha}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Columna derecha - Mapa y acciones */}
                    <div className="lg:col-span-1 space-y-6">
                        {/* Card del mapa */}
                        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 sticky top-6">
                            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                                <FaMap /> Ubicación
                            </h2>
                            <div className="w-full h-[300px] bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden mb-4">
                                {staticMapUrl ? (
                                    <Image
                                        src={staticMapUrl}
                                        alt="Mapa Estación"
                                        width={600}
                                        height={300}
                                        className="object-cover w-full h-full"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center">
                                        <p className="text-gray-500 text-sm">
                                            Ubicación no disponible
                                        </p>
                                    </div>
                                )}
                            </div>
                            <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
                                Ubicación aproximada de la estación
                            </p>
                            <Button
                                size="md"
                                className="w-full flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white mb-3"
                                onClick={() => window.open(googleMapsUrl, "_blank")}
                            >
                                <FaPaperPlane /> Cómo llegar (Google Maps)
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}