import { useQuery } from "@tanstack/react-query";
import appService from "../../../services/app.service";
import { ApiResponse } from "../(interfaces)/admin.interfaces";

// GET NEARBY GAS STATIONS
export const useNearByGasStations = (enabled: boolean) => {
    return useQuery({
        queryKey: ["nearby-gas-stations"],
        queryFn: (): Promise<ApiResponse> =>
            appService
                .get(`/gasolineras?departamento=san salvador&marca=texaco`)
                .then((res) => res.data),
        enabled,
    });
}