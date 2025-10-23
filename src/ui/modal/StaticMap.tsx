import React, { useEffect, useState } from 'react';
import { StaticMap, createStaticMapsUrl } from '@vis.gl/react-google-maps';

const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? (process.env.GOOGLE_MAPS_API_KEY as string);

interface StaticMapGasStationProps {
    lat: number;
    lng: number;
    width?: number;
    height?: number;
}

export default function StaticMapGasStation({ lat, lng, width, height }: StaticMapGasStationProps) {
    const staticMapsUrl = createStaticMapsUrl({
        apiKey: API_KEY,
        scale: 3,
        width: width ?? 600,
        height: height ?? 600,
        center: { lat, lng },
        zoom: 19,
        language: 'sv',
        markers: [
            {
                location: { lat, lng },
            },
        ],
    });

    // estados: 'loading' | 'loaded' | 'error'
    const [status, setStatus] = useState<'loading' | 'loaded' | 'error'>('loading');
    // contador para forzar reintento
    const [attempt, setAttempt] = useState(0);

    useEffect(() => {
        let cancelled = false;
        setStatus('loading');

        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.onload = () => {
            if (!cancelled) setStatus('loaded');
        };
        img.onerror = () => {
            if (!cancelled) setStatus('error');
        };
        img.src = staticMapsUrl;

        return () => {
            cancelled = true;
        };
    }, [staticMapsUrl, attempt]);

    if (status === 'loading') {
        return (
            <div className="flex items-center justify-center w-full h-64">
                <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-gray-900 dark:border-white" aria-hidden="true" />
                <span className="sr-only">Cargando mapa...</span>
            </div>
        );
    }

    if (status === 'error') {
        return (
            <div className="flex flex-col items-center justify-center w-full h-64 text-center p-4">
                <div className="text-red-600 font-medium mb-2">No se pudo cargar el mapa.</div>
                <div className="text-sm text-gray-600 mb-4">Verifica tu conexión y la clave de la API de Google Maps.</div>
                <button
                    className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
                    onClick={() => setAttempt((s) => s + 1)}
                >
                    Reintentar
                </button>
            </div>
        );
    }

    // loaded
    return <StaticMap className="map" url={staticMapsUrl} />;
}