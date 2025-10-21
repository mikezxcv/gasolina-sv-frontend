"use client";

import Button from "../button/Button";
import { Modal } from "./Modal";
import Image from "next/image";
import { Estacion } from "@/app/(admin)/(interfaces)/admin.interfaces";
import { FaStore, FaCalendarAlt, FaMap, FaShareAlt, FaMapMarkedAlt } from "react-icons/fa";
import Badge from "../badge/Badge";
import { toast } from "react-toastify";
import StaticMapGasStation from "./StaticMap";

interface VerticallyCenteredModalProps {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  station: Estacion | null;
}

export default function VerticallyCenteredModal({
  isOpen,
  // openModal,
  closeModal,
  station,
}: VerticallyCenteredModalProps) {
  if (!station) return null;

  const {
    id,
    estacion,
    marca,
    direccion,
    departamento,
    municipio,
    tienda,
    ultimoPrecio,
    latitude,
    longitude,
  } = station;

  // const staticMapUrl =
  //   latitude && longitude
  //     ? `https://maps.geoapify.com/v1/staticmap?style=osm-bright-smooth&width=600&height=400&center=lonlat:${longitude},${latitude}&zoom=15&marker=lonlat:${longitude},${latitude};type:material;color:%23dc2626;size:large;icon:gas-station&apiKey=b0e48491f5a445b6b29951c52c19e4ae`
  //     : null;

  const googleMapsUrl =
    latitude && longitude
      ? `https://www.google.com/maps?q=${latitude},${longitude}`
      : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(estacion)}`;

  // Precios diferenciando autoservicio / completo
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

  const handleCopyLink = async () => {
    const slug = estacion.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
    const stationUrl = `${window.location.origin}/estacion/${id}/${slug}`;

    // Si el navegador soporta la API Web Share (móvil o tablet)
    if (navigator.share) {
      try {
        await navigator.share({
          title: estacion,
          text: `Consulta los precios de combustible en ${estacion}`,
          url: stationUrl,
        });
        closeModal();
        toast.success("¡Compartido exitosamente!");
      } catch (error) {
        console.error("Error al compartir:", error);
        toast.error("No se pudo compartir el enlace.");
      }
    } else {
      // En PC o navegadores sin soporte
      navigator.clipboard.writeText(stationUrl)
        .then(() => {
          closeModal();
          toast.success("¡Enlace copiado al portapapeles!");
        })
        .catch((err) => {
          toast.error("Error al copiar el enlace:", err);
        });
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={closeModal}
      showCloseButton={false}
      className="max-w-lg w-full p-6 lg:p-8"
    >
      <div
        className="grid grid-cols-1 gap-6"
        style={{
          maxHeight: "80vh",
          overflowY: "auto",
        }}
      >
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 flex items-center justify-center rounded-lg">
            <Image
              src={`/images/brand/${marca}.svg`}
              alt={marca}
              width={48}
              height={48}
              className="object-contain"
            />
          </div>
          <div className="flex-1">
            <h4 className="text-xl font-semibold text-gray-800 dark:text-white">
              {estacion}
            </h4>

            <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1">
              {direccion?.toLocaleLowerCase() || "Dirección no disponible"}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500 mt-4">
              {municipio.toUpperCase()}, {departamento.toUpperCase()}
            </p>
            <div className="mt-1">
              {tienda ? (
                <span className="flex items-center gap-1 text-green-600 dark:text-green-400 text-sm">
                  <FaStore /> Con tienda
                </span>
              ) : (
                <span className="text-gray-400 text-sm">Sin tienda</span>
              )}
            </div>
          </div>
        </div>

        {/* Precios */}
        <div className="space-y-4">
          <h5 className="text-lg font-semibold text-gray-800 dark:text-white">
            Precios de Combustible
          </h5>
          <div className="space-y-2">
            {precios.map((p) => (
              <div
                key={p.label}
                className="border border-gray-200 dark:border-gray-700 rounded-lg p-3 bg-gray-50 dark:bg-gray-800/40"
              >
                <p className="text-base font-medium text-gray-700 dark:text-gray-200 mb-1">
                  {p.label}
                </p>
                {p.auto || p.sc ? (
                  <div className="flex flex-wrap gap-4">
                    {p.auto !== null && p.auto !== undefined && (
                      <div className="flex items-center gap-2">
                        <Badge variant="solid" color="success">Autoservicio</Badge>
                        <span className="text-lg font-bold text-gray-800 dark:text-white">
                          ${p.auto.toFixed(2)}
                        </span>
                      </div>
                    )}
                    {p.sc !== null && p.sc !== undefined && (
                      <div className="flex items-center gap-2">
                        <Badge variant="solid" color="info">Servicio Completo</Badge>
                        <span className="text-lg font-bold text-gray-800 dark:text-white">
                          ${p.sc.toFixed(2)}
                        </span>
                      </div>
                    )}
                  </div>
                ) : (
                  <p className="text-sm italic text-gray-400">NO HAY DATOS</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mapa estático */}
        <div className="space-y-2">
          <h5 className="text-base font-semibold text-gray-800 dark:text-white flex items-center gap-2">
            <FaMap /> Mapa (ubicación aproximada)
          </h5>
          {/* <div className="w-full h-[200px] bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden flex items-center justify-center">
            {staticMapUrl ? (
              <Image
                src={staticMapUrl}
                alt="Mapa Estación"
                width={500}
                height={200}
                className="object-cover"
              />
            ) : (
              <p className="text-gray-500 text-sm">Ubicación no disponible</p>
            )}
          </div> */}
          <div className="w-full h-[200px] bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden flex items-center justify-center">
            {latitude && longitude ? (
              <StaticMapGasStation lat={latitude} lng={longitude} />
            ) : (
              <p className="text-gray-500 text-sm">Ubicación no disponible</p>
            )}
          </div>
          <Button
            size="sm"
            className="w-full mt-2 flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white"
            onClick={() => window.open(googleMapsUrl, "_blank")}
          >
            <FaMapMarkedAlt /> Cómo llegar (Google Maps)
          </Button>
        </div>

        {/* Fecha actualización */}
        <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
          <FaCalendarAlt />
          Última actualización: {fecha}
        </div>

        {/* Botones al final */}
        <div className="flex justify-end gap-2">
          <Button
            size="sm"
            variant="primary"
            onClick={handleCopyLink}
            className="flex items-center gap-2"
          >
            <FaShareAlt /> Compartir
          </Button>
          <Button size="sm" variant="outline" onClick={closeModal}>
            Cerrar
          </Button>
        </div>
      </div>
    </Modal>
  );
}