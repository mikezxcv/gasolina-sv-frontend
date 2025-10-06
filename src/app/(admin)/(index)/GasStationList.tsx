import { useState } from "react";
import { useModal } from "@/hooks/useModal";
import VerticallyCenteredModal from "@/ui/modal/VerticallyCenteredModal";
import { Estacion } from "../(interfaces)/admin.interfaces";
import GasStationCard from "./GasStationCard";

interface IProps {
  gasStations: Estacion[];
}

export default function GasStationList({ gasStations }: IProps) {
  const successModal = useModal();
  const [selectedStation, setSelectedStation] = useState<Estacion | null>(null);

  const handleOpenModal = (station: Estacion) => {
    setSelectedStation(station);
    successModal.openModal();
  };

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 xl:grid-cols-4">
      <VerticallyCenteredModal {...successModal} station={selectedStation} />
      {gasStations.map((station, i) => (
        <GasStationCard
          key={i + 1}
          station={station}
          imgUrl={`/images/brand/${station.marca}.svg`}
          onClick={() => handleOpenModal(station)}
        />
      ))}
    </div>
  );
}
