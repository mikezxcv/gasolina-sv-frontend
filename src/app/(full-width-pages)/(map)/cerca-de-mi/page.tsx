'use client';
import { useNearByGasStations } from '@/app/(admin)/(api)/admin.api';
import {
    APIProvider,
    Map,
    AdvancedMarker,
    InfoWindow,
    useMap,
} from '@vis.gl/react-google-maps';
import { Estacion } from '@/app/(admin)/(interfaces)/admin.interfaces';
import { useEffect, useState, useRef } from 'react';
import { FaCrosshairs, FaStore, FaCalendarAlt } from 'react-icons/fa';
import { toast } from 'react-toastify';
import Image from 'next/image';

function MapNearByMe() {
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '';
    const defaultPosition = {
        lat: Number(process.env.NEXT_PUBLIC_DEFAULT_LATITUDE ?? 13.69294),
        lng: Number(process.env.NEXT_PUBLIC_DEFAULT_LONGITUDE ?? -89.21819),
    };
    const defaultZoom = Number(process.env.NEXT_PUBLIC_DEFAULT_ZOOM ?? 12);
    const defaultRadiusKm = Number(process.env.NEXT_PUBLIC_DEFAULT_RADIUS_METERS ?? 5000) / 1000;

    const [center, setCenter] = useState(defaultPosition);
    const [radiusKm, setRadiusKm] = useState(defaultRadiusKm);
    const [tempRadiusKm, setTempRadiusKm] = useState(defaultRadiusKm);
    const [selectedStation, setSelectedStation] = useState<Estacion | null>(null);
    const [hoveredStationId, setHoveredStationId] = useState<string | null>(null);
    const [pendingCenter, setPendingCenter] = useState<{ lat: number; lng: number } | null>(null);
    const mapRef = useRef<google.maps.Map | null>(null);
    const hasRequestedLocation = useRef(false);

    const { data: estaciones, isLoading, refetch } = useNearByGasStations(true, {
        lat: center.lat,
        lng: center.lng,
        radioKm: radiusKm,
    });

    // Solicitar ubicación al cargar el componente
    useEffect(() => {
        if (!hasRequestedLocation.current) {
            hasRequestedLocation.current = true;
            requestInitialLocation();
        }
    }, []);

    // Mover el mapa cuando esté listo y haya una ubicación pendiente
    useEffect(() => {
        if (mapRef.current && pendingCenter) {
            mapRef.current.panTo(pendingCenter);
            mapRef.current.setZoom(defaultZoom);
            setPendingCenter(null);
        }
    }, [mapRef.current, pendingCenter, defaultZoom]);

    const requestInitialLocation = () => {
        if (!navigator.geolocation) {
            toast.info('Tu navegador no soporta geolocalización. Usando ubicación por defecto.');
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (pos) => {
                const { latitude, longitude } = pos.coords;
                const newCenter = { lat: latitude, lng: longitude };
                setCenter(newCenter);

                // Guardar la ubicación para mover el mapa cuando esté listo
                if (mapRef.current) {
                    mapRef.current.panTo(newCenter);
                    mapRef.current.setZoom(defaultZoom);
                } else {
                    setPendingCenter(newCenter);
                }

                toast.success('Ubicación obtenida correctamente');
            },
            (error) => {
                console.error('Error al obtener ubicación:', error);
                toast.info('Usando ubicación por defecto');
            },
            {
                enableHighAccuracy: true,
                timeout: 5000,
                maximumAge: 0
            }
        );
    };

    // Obtener ubicación actual al hacer click en el botón
    const handleUseMyLocation = () => {
        if (!navigator.geolocation) {
            toast.error('Tu navegador no soporta geolocalización');
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (pos) => {
                const { latitude, longitude } = pos.coords;
                const newCenter = { lat: latitude, lng: longitude };
                setCenter(newCenter);

                // Mover el mapa a la nueva ubicación con animación
                if (mapRef.current) {
                    mapRef.current.panTo(newCenter);
                    mapRef.current.setZoom(defaultZoom);
                }

                toast.success('Ubicación actualizada');
            },
            (error) => {
                console.error('Error al obtener ubicación:', error);
                toast.error('No se pudo obtener tu ubicación');
            },
            {
                enableHighAccuracy: true,
                timeout: 5000,
                maximumAge: 0
            }
        );
    };

    // Manejar cambio del slider (solo actualiza el valor temporal)
    const handleRadiusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = Math.max(1, Number(e.target.value) || 1);
        setTempRadiusKm(newValue);
    };

    // Manejar cuando se suelta el slider (actualiza el radio final y llama a la API)
    const handleRadiusChangeEnd = () => {
        setRadiusKm(tempRadiusKm);
    };

    // Refetch cuando cambie el radio final o la ubicación
    useEffect(() => {
        refetch();
    }, [center, radiusKm, refetch]);

    return (
        <div className="relative w-full h-screen">
            <APIProvider apiKey={apiKey}>
                <Map
                    style={{ width: '100%', height: '100%' }}
                    center={center}
                    zoom={defaultZoom}
                    gestureHandling="greedy"
                    disableDefaultUI={false}
                    mapId={'DEMO_MAP_ID'}
                    onCameraChanged={(ev) => {
                        // Guardar referencia al mapa
                        if (ev.map && !mapRef.current) {
                            mapRef.current = ev.map;
                        }
                    }}
                >
                    <AnimatedRadius center={center} radiusKm={tempRadiusKm} />

                    {/* Punto azul animado (ubicación actual) */}
                    <AdvancedMarker position={center}>
                        <div className="relative">
                            <div className="w-4 h-4 bg-blue-600 rounded-full border-2 border-white animate-pulse" />
                            <div className="absolute inset-0 rounded-full border border-blue-400 opacity-70 animate-ping" />
                        </div>
                    </AdvancedMarker>

                    {/* Marcadores de estaciones */}
                    {estaciones?.map(
                        (estacion: Estacion) =>
                            estacion.latitude &&
                            estacion.longitude && (
                                <AdvancedMarker
                                    key={estacion.id}
                                    position={{ lat: estacion.latitude, lng: estacion.longitude }}
                                    onClick={() =>
                                        setSelectedStation(
                                            selectedStation?.id === estacion.id ? null : estacion
                                        )
                                    }
                                >
                                    <div
                                        className="flex items-center justify-center"
                                        onMouseEnter={() => setHoveredStationId(estacion.id)}
                                        onMouseLeave={() => setHoveredStationId((id) => (id === estacion.id ? null : id))}
                                    >
                                        {hoveredStationId === estacion.id ? (
                                            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md border-2 border-gray-100 transition-transform transform hover:scale-110">
                                                <Image
                                                    width={40}
                                                    height={40}
                                                    src={`/images/brand/${estacion.marca}.svg`}
                                                    alt={estacion.marca}
                                                />
                                            </div>
                                        ) : (
                                            <div className="w-12 h-12 rounded-full bg-white flex flex-col items-center justify-center shadow-md border border-gray-200 p-2 hover:scale-110 transition-transform">
                                                <span className="text-xs text-gray-500">{estacion.marca.slice(0, 6)}</span>
                                                <span className="text-sm font-bold text-gray-900">
                                                    {getRegularPriceText(estacion)}
                                                </span>
                                            </div>
                                        )}
                                    </div>

                                    {selectedStation?.id === estacion.id && (
                                        <InfoWindow
                                            position={{
                                                lat: estacion.latitude,
                                                lng: estacion.longitude,
                                            }}
                                            onCloseClick={() => setSelectedStation(null)}
                                        >
                                            <div className="p-3 text-gray-800 text-sm min-w-[240px]">
                                                <div className="flex items-start gap-3">
                                                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
                                                        <Image
                                                            width={40}
                                                            height={40}
                                                            src={`/images/brand/${estacion.marca}.svg`}
                                                            alt={estacion.marca}
                                                            className="object-contain w-full h-full p-1"
                                                        />
                                                    </div>
                                                    <div className="flex-1">
                                                        <p className="font-semibold text-base mb-0">{estacion.estacion}</p>
                                                        <p className="text-gray-500 text-xs mb-2">{estacion.marca}</p>
                                                    </div>
                                                </div>

                                                <div className="mt-2 space-y-1">
                                                    {[
                                                        {
                                                            label: 'Regular',
                                                            auto: estacion.ultimoPrecio.regularAuto,
                                                            sc: estacion.ultimoPrecio.regularSc,
                                                        },
                                                        {
                                                            label: 'Especial',
                                                            auto: estacion.ultimoPrecio.especialAuto,
                                                            sc: estacion.ultimoPrecio.especialSc,
                                                        },
                                                        {
                                                            label: 'Diésel',
                                                            auto:
                                                                estacion.ultimoPrecio.dieselAuto ??
                                                                estacion.ultimoPrecio.dieselLSAuto ??
                                                                estacion.ultimoPrecio.ionDieselAuto,
                                                            sc:
                                                                estacion.ultimoPrecio.dieselSc ??
                                                                estacion.ultimoPrecio.dieselLSSc ??
                                                                estacion.ultimoPrecio.ionDieselSc,
                                                        },
                                                    ].map((p) => (
                                                        <div key={p.label}>
                                                            <p className="text-[11px] font-medium">{p.label}</p>
                                                            {p.auto || p.sc ? (
                                                                <div className="flex gap-2 text-[11px] mt-1">
                                                                    {p.auto && (
                                                                        <span className="bg-green-100 text-green-700 px-1.5 py-0.5 rounded-md font-semibold">
                                                                            A: ${p.auto.toFixed(2)}
                                                                        </span>
                                                                    )}
                                                                    {p.sc && (
                                                                        <span className="bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded-md font-semibold">
                                                                            SC: ${p.sc.toFixed(2)}
                                                                        </span>
                                                                    )}
                                                                </div>
                                                            ) : (
                                                                <p className="italic text-gray-400 text-[10px]">No hay datos</p>
                                                            )}
                                                        </div>
                                                    ))}
                                                </div>

                                                <div className="mt-2 flex items-center gap-2">
                                                    {estacion.tienda ? (
                                                        <span className="inline-flex items-center gap-2 px-2 py-1 bg-green-100 text-green-700 rounded-md text-xs">
                                                            <FaStore /> Con tienda
                                                        </span>
                                                    ) : (
                                                        <span className="inline-flex items-center gap-2 px-2 py-1 bg-gray-100 text-gray-500 rounded-md text-xs">
                                                            <FaStore /> Sin tienda
                                                        </span>
                                                    )}
                                                </div>

                                                <p className="flex items-center gap-2 text-xs text-gray-500 mt-2">
                                                    <FaCalendarAlt /> Última actualización:{' '}
                                                    <span className="font-medium">{new Date(estacion.ultimoPrecio.fechaReporte).toLocaleString('es-SV')}</span>
                                                </p>

                                                <div className="mt-3 flex gap-2">
                                                    <a
                                                        href={`https://www.google.com/maps?q=${estacion.latitude},${estacion.longitude}`}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="block mt-2 text-blue-500 underline text-xs text-center"
                                                    >
                                                        Abrir en Google Maps
                                                    </a>

                                                    <a
                                                        href={`/estacion/${estacion.id}/${estacion.estacion.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}`}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="block mt-2 text-blue-500 underline text-xs text-center"
                                                    >
                                                        Ver detalle Completo
                                                    </a>
                                                </div>
                                            </div>
                                        </InfoWindow>
                                    )}
                                </AdvancedMarker>
                            )
                    )}
                </Map>
            </APIProvider>

            {/* Controles */}
            <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
                <button
                    onClick={handleUseMyLocation}
                    className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg shadow-md hover:bg-gray-50 transition-colors"
                >
                    <FaCrosshairs className="text-gray-700" />
                    <span className="text-sm font-medium text-gray-800">Usar mi ubicación</span>
                </button>

                <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2"> {tempRadiusKm} km </label>
                        <input
                            type="range"
                            id="radius-range"
                            className="w-full accent-indigo-600"
                            min={1}
                            max={20}
                            value={tempRadiusKm}
                            onChange={handleRadiusChange}
                            onMouseUp={handleRadiusChangeEnd}
                            onTouchEnd={handleRadiusChangeEnd}
                        />
                    </div>
                    <div className="flex justify-between text-gray-500">
                        <span>1 km</span>
                        <span>20 km</span>
                    </div>
                </div>
            </div>

            {/* Indicador de carga */}
            {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-white/60 z-20">
                    <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-600"></div>
                </div>
            )}
        </div>
    );
}

/* === Componente para dibujar y animar el círculo del radio === */
function AnimatedRadius({
    center,
    radiusKm,
}: {
    center: { lat: number; lng: number };
    radiusKm: number;
}) {
    const map = useMap();
    const [circle, setCircle] = useState<google.maps.Circle | null>(null);

    useEffect(() => {
        if (!map) return;

        if (circle) circle.setMap(null);

        const newCircle = new google.maps.Circle({
            map,
            center,
            radius: radiusKm * 1000,
            strokeColor: '#2563eb',
            strokeOpacity: 0.9,
            strokeWeight: 2,
            fillColor: '#3b82f6',
            fillOpacity: 0.15,
        });
        setCircle(newCircle);

        let opacity = 0.15;
        let scale = 1;
        let frame = 0;
        const frames = 30;

        const animate = () => {
            frame++;
            opacity = 0.15 + 0.05 * Math.sin((frame / frames) * Math.PI);
            scale = 1 + 0.03 * Math.sin((frame / frames) * Math.PI);
            newCircle.setOptions({
                fillOpacity: opacity,
                radius: radiusKm * 1000 * scale,
            });
            if (frame < frames) requestAnimationFrame(animate);
            else newCircle.setOptions({
                fillOpacity: 0.15,
                radius: radiusKm * 1000,
            });
        };
        animate();

        return () => {
            newCircle.setMap(null);
        };
    }, [map, center, radiusKm]);

    return null;
}

function getRegularPriceText(estacion: Estacion) {
    const precio = estacion.ultimoPrecio.regularAuto ?? estacion.ultimoPrecio.regularSc ?? null;
    if (precio === null || precio === undefined) return 'N/D';
    try {
        return `$${precio.toFixed(2)}`;
    } catch (e) {
        console.error(e);
        return 'N/D';
    }
}

export default MapNearByMe;