import { Estacion } from "../(interfaces)/admin.interfaces";
import GasStationCard from "./GasStationCard";

type GasStationCardProps = {
  imgUrl: string;
  symbol: string;
  companyName: string;
  price: string;
  change: string;
  changeDirection: "up" | "down"; // Direction of the price change
};

const gasStationData: GasStationCardProps[] = [
  {
    imgUrl: "/images/brand/brand-07.svg",
    symbol: "APPL",
    companyName: "Apple, Inc",
    price: "$1,232.00",
    change: "11.01%",
    changeDirection: "up",
  },

  {
    imgUrl: "/images/brand/brand-08.svg",
    symbol: "PYPL",
    companyName: "Paypal, Inc",
    price: "$965.00",
    change: "9.05%",
    changeDirection: "down",
  },
  {
    imgUrl: "/images/brand/brand-09.svg",
    symbol: "TSLA",
    companyName: "Tesla, Inc",
    price: "$1,232.00",
    change: "11.01%",
    changeDirection: "up",
  },
  {
    imgUrl: "/images/brand/brand-10.svg",
    symbol: "AMZN",
    companyName: "Amazon.com, Inc",
    price: "$2,567.00",
    change: "11.01%",
    changeDirection: "up",
  },
];

interface IProps {
  gasStations: Estacion[];
}

console.log("gasStations", gasStationData);

export default function GasStationList({ gasStations }: IProps) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 xl:grid-cols-4">
      {gasStations.map((station, i) => (
        <GasStationCard key={i + 1}
          change={station.departamento}
          changeDirection={"up"}
          companyName={station.marca}
          imgUrl={`/images/brand/${station.marca}.svg`}
          price={(station.ultimoPrecio.regularAuto || station.ultimoPrecio.regularSc) ? `$${station.ultimoPrecio.regularAuto || station.ultimoPrecio.regularSc}` : "N/A"}
          symbol={station.id}
          name={station.estacion}
        />
      ))}
    </div>
  );
}