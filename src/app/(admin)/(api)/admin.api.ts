import { useQuery } from "@tanstack/react-query";
import appService from "../../../services/app.service";
import { ApiResponse, QueryParamsGasStationsNearBy, QueryParamsGasStations, Estacion } from "../(interfaces)/admin.interfaces";

// GET NEARBY GAS STATIONS
export const useNearByGasStations = (enabled: boolean, queryParams?: QueryParamsGasStationsNearBy) => {
    return useQuery({
        queryKey: ["nearby-gas-stations"],
        queryFn: (): Promise<ApiResponse> =>
            appService
                .get(`/gasolineras/cercanas`, { params: queryParams })
                .then((res) => res.data),
        enabled,
    });
};

// GET GAS STATIONS
export const useGasStations = (enabled: boolean, queryParams?: QueryParamsGasStations) => {
    return useQuery({
        queryKey: ["gas-stations"],
        queryFn: (): Promise<ApiResponse> =>
            appService
                .get(`/gasolineras`, { params: queryParams })
                .then((res) => res.data),
        enabled,
    });
};

// GET GAS STATION BY ID
export const useGasStationById = (enabled: boolean, id?: string) => {
    return useQuery({
        queryKey: ["gas-station", id],
        queryFn: (): Promise<Estacion> =>
            appService
                .get(`/gasolineras/${id}`)
                .then((res) => res.data),
        enabled: enabled && !!id,
    });
};