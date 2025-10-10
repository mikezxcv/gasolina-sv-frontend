'use client';
import React, { useMemo } from "react";
import { useGasStations } from './(api)/admin.api';
import GasStationList from "./(index)/GasStationList";
import { QueryParamsGasStations } from "./(interfaces)/admin.interfaces";
import Spinner from "@/ui/spinner/Spinner";
import Badge from "@/components/ui/badge/Badge";
import { useFilters } from "@/context/FiltersContext";

export default function Index() {
	const { departamento, municipio, marca, searchTerm } = useFilters();

	// Construir queryParams dinámicamente basado en los filtros
	const queryParams: QueryParamsGasStations = useMemo(() => {
		const params: QueryParamsGasStations = {};

		if (departamento && departamento !== '0') {
			params.departamento = departamento;
		}

		if (municipio && municipio !== '0') {
			params.municipio = municipio;
		}

		if (marca && marca !== '0') {
			params.marca = marca;
		}

		if (searchTerm.trim()) {
			params.q = searchTerm.trim();
		}

		return params;
	}, [departamento, municipio, marca, searchTerm]);

	const { data, isLoading, isError } = useGasStations(true, queryParams);

	console.log("queryParams aplicados:", queryParams);
	console.log("data", data);

	return (
		<div className="grid grid-cols-12 gap-4 md:gap-6">
			{isError && (
				<div className="col-span-12 flex justify-center">
					<Badge size="md" color="error">Error Cargando Gasolineras.</Badge>
				</div>
			)}
			{isLoading && <Spinner />}
			<div className="col-span-12">
				<GasStationList gasStations={data?.content ?? []} />
			</div>
		</div>
	);
}