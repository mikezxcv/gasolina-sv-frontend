import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import appService from "../../../services/app.service";
import { ApiResponse, QueryParamsGasStationsNearBy, QueryParamsGasStations, Estacion } from "../(interfaces)/admin.interfaces";

// GET NEARBY GAS STATIONS
export const useNearByGasStations = (enabled: boolean, queryParams?: QueryParamsGasStationsNearBy) => {
    return useQuery({
        queryKey: ["nearby-gas-stations"],
        queryFn: (): Promise<Estacion[]> =>
            appService
                .get(`/gasolineras/cercanas`, { params: queryParams })
                .then((res) => res.data),
        enabled,
    });
};

// GET GAS STATIONS
export const useGasStations = (enabled: boolean, queryParams?: QueryParamsGasStations) => {
    // setear valor por defecto de size si no está definido
    if (!queryParams?.size) {
        queryParams = { ...queryParams, size: 20 };
    }

    if (!queryParams?.page) {
        queryParams = { ...queryParams, page: 0 };
    }

    return useQuery({
        queryKey: ["gas-stations", queryParams],
        queryFn: (): Promise<ApiResponse> =>
            appService
                .get(`/gasolineras`, { params: queryParams })
                .then((res) => res.data),
        enabled,
    });
};

// INFINITE SCROLL GAS STATIONS
export const useInfiniteGasStations = (enabled: boolean, queryParams?: QueryParamsGasStations) => {
    return useInfiniteQuery({
        queryKey: ["gas-stations", queryParams],
        queryFn: ({ pageParam = 0 }): Promise<ApiResponse> =>
            appService
                .get(`/gasolineras`, { params: { ...queryParams, page: pageParam } })
                .then((res) => res.data),
        getNextPageParam: (lastPage) => {
            if (!lastPage.last) {
                return (lastPage.number ?? 0) + 1;
            }
            return undefined;
        },
        enabled,
        initialPageParam: 0,
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