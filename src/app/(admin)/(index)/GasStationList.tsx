import { Estacion } from "../(interfaces)/admin.interfaces";
import GasStationCard from "./GasStationCard";

interface IProps {
  gasStations: Estacion[];
}

export default function GasStationList({ gasStations }: IProps) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 xl:grid-cols-4">
      {gasStations.map((station, i) => (
        <GasStationCard key={i + 1}
          station={station}
          imgUrl={`/images/brand/${station.marca}.svg`}
        />
      ))}
    </div>
  );
}