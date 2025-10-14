"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, Circle, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useNearByGasStations } from "@/app/(admin)/(api)/admin.api";
import { QueryParamsGasStationsNearBy } from "@/app/(admin)/(interfaces)/admin.interfaces";
// import icons from react-icons if needed
import { FaGasPump, FaMapMarkerAlt } from "react-icons/fa";

// usarlas en

// fix default marker icon issues with parcel/webpack + leaflet
// delete (L.Icon.Default.prototype as any)._getIconUrl;
// L.Icon.Default.mergeOptions({
//   // eslint-disable-next-line @typescript-eslint/no-require-imports
//   iconRetinaUrl: typeof window !== "undefined" ? require("leaflet/dist/images/marker-icon-2x.png") : "",
//   // eslint-disable-next-line @typescript-eslint/no-require-imports
//   iconUrl: typeof window !== "undefined" ? require("leaflet/dist/images/marker-icon.png") : "",
//   // eslint-disable-next-line @typescript-eslint/no-require-imports
//   shadowUrl: typeof window !== "undefined" ? require("leaflet/dist/images/marker-shadow.png") : "",
// });

interface IPosition {
    latitude: number;
    longitude: number;
}

function FitBounds({ positions }: { positions: [number, number][] }) {
    const map = useMap();

    useEffect(() => {
        if (!map) return;
        if (!positions || positions.length === 0) return;

        const bounds = L.latLngBounds(positions.map((p) => [p[0], p[1]]));
        map.fitBounds(bounds, { padding: [40, 40] });
    }, [map, positions]);

    return null;
}

export default function MapNearByMe() {
    const [position, setPosition] = useState<IPosition | null>(null);
    const [radio, setRadio] = useState<number>(5);
    const [enabled, setEnabled] = useState<boolean>(false);
    const [permissionDenied, setPermissionDenied] = useState<boolean>(false);

    const queryParams: QueryParamsGasStationsNearBy = useMemo(() => ({
        lat: position?.latitude ?? 13.718236,
        lng: position?.longitude ?? -89.199612,
        radioKm: radio,
    }), [position, radio]);

    // enable query only when we have a position (so it re-fetches when user gives permission)
    const { data: stations, isLoading, error, refetch } = useNearByGasStations(enabled, queryParams as any);

    // request geolocation
    const solicitarUbicacion = () => {
        // fijar valor por defecto
        setPosition({ latitude: 13.718236, longitude: -89.199612 });
        if (!navigator.geolocation) {
            alert("Tu navegador no soporta geolocalización.");
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (pos) => {
                setPosition({ latitude: pos.coords.latitude, longitude: pos.coords.longitude });
                setEnabled(true);
                setPermissionDenied(false);
            },
            (err) => {
                console.error("Geolocation error:", err);
                if (err.code === err.PERMISSION_DENIED) setPermissionDenied(true);
                // delete on production
                setPosition({ latitude: 13.718236, longitude: -89.199612 });
                setEnabled(true);
                setPermissionDenied(false);
                alert("No fue posible obtener la ubicación. Revisa los permisos del navegador.");
                // delete on production

            },
            { enableHighAccuracy: true, timeout: 10000 }
        );
    };

    // controlled radio input
    const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const v = parseInt(e.target.value);
        if (!isNaN(v) && v > 0) setRadio(v);
    };

    // prepare marker positions for FitBounds
    const markerPositions = useMemo(() => {
        if (!stations) return [] as [number, number][];
        return stations
            .filter((s: any) => typeof s.latitude === "number" && typeof s.longitude === "number")
            .map((s: any) => [s.latitude, s.longitude]);
    }, [stations]);

    // default map center
    const center: [number, number] = [position?.latitude ?? 13.718236, position?.longitude ?? -89.199612];

    return (
        <div className="p-4 md:p-8 flex flex-col items-center">
            <div className="w-full max-w-5xl">
                <div className="bg-white/80 dark:bg-gray-900/70 border border-gray-200 dark:border-gray-800 rounded-xl shadow-sm p-5 md:p-6 transition-colors">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                        <div>
                            <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Gasolineras cercanas</h2>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Permite el acceso a tu ubicación y ajusta el radio para filtrar resultados.</p>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="flex items-center gap-2">
                                <label htmlFor="radio" className="text-sm text-gray-600 dark:text-gray-300">Radio (km)</label>
                                <input
                                    id="radio"
                                    type="number"
                                    min={1}
                                    value={radio}
                                    onChange={handleRadioChange}
                                    className="w-20 px-3 py-1 rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm text-gray-800 dark:text-gray-100"
                                />
                            </div>

                            <button
                                onClick={solicitarUbicacion}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white text-sm shadow-sm"
                            >
                                Obtener ubicación
                            </button>

                            <button
                                onClick={() => { if (enabled) refetch(); else alert('Primero debe permitir la ubicación'); }}
                                className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-sm"
                            >
                                Buscar
                            </button>
                        </div>
                    </div>

                    {/* status */}
                    <div className="mb-4 text-sm text-gray-600 dark:text-gray-300">
                        {permissionDenied && <div className="text-red-500">Permiso de ubicación denegado. Activa el permiso para ver estaciones cercanas.</div>}
                        {!position && !permissionDenied && <div>Tu ubicación actual no está establecida. Haga click en <strong>Obtener ubicación</strong>.</div>}
                        {position && (
                            <div>Ubicación: <strong>{position.latitude.toFixed(5)}, {position.longitude.toFixed(5)}</strong> — Radio: <strong>{radio} km</strong></div>
                        )}
                    </div>

                    {/* map area */}
                    <div className="w-full h-[60vh] rounded-lg overflow-hidden border border-gray-200 dark:border-gray-800">
                        {/* Loading / Error */}
                        {isLoading && (
                            <div className="w-full h-full flex items-center justify-center">
                                <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-600"></div>
                            </div>
                        )}

                        {!isLoading && error && (
                            <div className="w-full h-full flex items-center justify-center text-red-500">Error cargando estaciones.</div>
                        )}

                        {!isLoading && !error && (
                            <MapContainer center={center} zoom={13} style={{ height: "100%", width: "100%" }}>
                                <TileLayer
                                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                />

                                {/* user location marker + circle */}
                                {position && (
                                    <>
                                        <Marker position={[position.latitude, position.longitude]}>
                                            <Popup>Tu ubicación</Popup>
                                        </Marker>

                                        <Circle center={[position.latitude, position.longitude]} radius={radio * 1000} pathOptions={{ fillOpacity: 0.05 }} />
                                    </>
                                )}

                                {/* markers for stations; ready to accept extra fields: price, lastUpdate, etc. */}
                                {stations && stations.length > 0 && stations.map((st: any) => (
                                    <Marker key={st.id ?? `${st.latitude}-${st.longitude}`} position={[st.latitude, st.longitude]}>
                                        <Popup className="max-w-xs">
                                            <div className="text-sm">
                                                <div className="font-medium text-gray-900 dark:text-gray-100">{st.nombre || st.name || 'Estación'}</div>
                                                <div className="text-xs text-gray-600 dark:text-gray-300">{st.direccion || st.address}</div>

                                                {/* PLACEHOLDER: agrega aquí tu contenido extra como precio, última actualización, etiquetas, botones, etc. */}
                                                <div className="mt-2 text-xs text-gray-700 dark:text-gray-200">
                                                    {/* Ejemplos - sustituir/expandir con tus campos reales */}
                                                    {st.precio_gasolina ? (
                                                        <div>Precio gasolina: <strong>${st.precio_gasolina}</strong></div>
                                                    ) : (
                                                        <div className="italic text-gray-500">Precio no disponible</div>
                                                    )}

                                                    {st.ultima_actualizacion && (
                                                        <div className="mt-1 text-[11px] text-gray-500">Actualizado: {new Date(st.ultima_actualizacion).toLocaleString()}</div>
                                                    )}

                                                    {/* Por ejemplo podrías añadir un botón para ir al detalle */}
                                                    <div className="mt-2 flex gap-2">
                                                        <a href={`#`} className="text-xs px-2 py-1 rounded bg-blue-600 text-white">Ver detalle</a>
                                                        <a href={`https://www.google.com/maps/search/?api=1&query=${st.latitude},${st.longitude}`} target="_blank" rel="noreferrer" className="text-xs px-2 py-1 rounded bg-gray-200 dark:bg-gray-700">Abrir en Google Maps</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </Popup>
                                    </Marker>
                                ))}

                                {/* Adjust map bounds when markers change */}
                                <FitBounds positions={position ? [[position.latitude, position.longitude], ...markerPositions] : markerPositions} />
                            </MapContainer>
                        )}
                    </div>

                    {/* list view (optional) */}
                    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
                        {stations && stations.length > 0 ? (
                            stations.map((st: any) => (
                                <div key={st.id ?? `${st.latitude}-${st.longitude}`} className="p-3 border border-gray-100 dark:border-gray-800 rounded-md bg-white dark:bg-gray-900">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <div className="font-medium text-gray-900 dark:text-gray-100">{st.nombre || st.name || 'Estación'}</div>
                                            <div className="text-xs text-gray-500 dark:text-gray-400">{st.direccion || st.address}</div>
                                        </div>
                                        <div className="text-sm text-gray-700 dark:text-gray-200">
                                            {st.precio_gasolina ? `$${st.precio_gasolina}` : '—'}
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="text-sm text-gray-500">No se encontraron estaciones en el radio seleccionado.</div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
