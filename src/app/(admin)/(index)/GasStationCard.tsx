import React from "react";
import { Estacion } from "../(interfaces)/admin.interfaces";
import { FaStore, FaCalendarAlt } from "react-icons/fa";
import Badge from "@/ui/badge/Badge";
import Image from "next/image";

type GasStationCardProps = {
  station: Estacion;
  imgUrl: string;
  onClick: () => void;
};

const GasStationCard: React.FC<GasStationCardProps> = ({ station, imgUrl, onClick }) => {
  const getPrecioRegular = (): string => {
    if (station.ultimoPrecio.regularAuto !== null) {
      return `$${station.ultimoPrecio.regularAuto.toFixed(2)}`;
    }
    if (station.ultimoPrecio.regularSc !== null) {
      return `$${station.ultimoPrecio.regularSc.toFixed(2)}`;
    }
    return "N/A";
  };

  const getUltimaActualizacion = (): string => {
    const fecha = new Date(station.ultimoPrecio.fechaReporte);
    const dia = fecha.getDate().toString().padStart(2, "0");
    const mes = (fecha.getMonth() + 1).toString().padStart(2, "0");
    const anio = fecha.getFullYear();
    const horas = fecha.getHours().toString().padStart(2, "0");
    const minutos = fecha.getMinutes().toString().padStart(2, "0");
    return `${dia}/${mes}/${anio} ${horas}:${minutos}`;
  };

  return (
    <div
      className="rounded-2xl border border-gray-200 bg-white px-6 pb-5 pt-6
      dark:border-gray-500 dark:bg-white/[0.03] cursor-pointer transform 
      transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
      onClick={onClick}
    >
      <div className="flex items-start gap-4">
        <div className="w-16 h-16 flex items-center justify-center rounded-lg bg-gray-50 dark:bg-gray-700">
          <Image src={imgUrl} alt={station.marca} width="64" height="64" className="w-14 h-14 object-contain" />
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="text-base md:text-lg font-semibold text-gray-900 dark:text-white">
            {station.estacion}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {station.departamento}, {station.municipio}
          </p>

          <div className="flex items-center gap-2 mt-2 text-xs text-gray-500 dark:text-gray-400">
            <Badge variant="light">
              {station.tienda ? (
                <>
                  <FaStore className="w-3.5 h-3.5" />
                  <span>Con tienda</span>
                </>
              ) : (
                <span>Sin tienda</span>
              )}
            </Badge>
          </div>

          <div className="flex items-center justify-between mt-4">
            <span
              className={`text-xl font-bold ${getPrecioRegular() !== "N/A"
                ? "text-green-600 dark:text-green-400"
                : "text-gray-400"
                }`}
            >
              {getPrecioRegular()}
            </span>
            <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
              <FaCalendarAlt className="w-3 h-3" />
              {getUltimaActualizacion()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GasStationCard;
