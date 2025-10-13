'use client';
import React, { useMemo, useRef, useEffect } from "react";
import { useInfiniteGasStations } from './(api)/admin.api';
import GasStationList from "./(index)/GasStationList";
import Spinner from "@/ui/spinner/Spinner";
import Badge from "@/components/ui/badge/Badge";
import { useFilters } from "@/context/FiltersContext";
import AppFooter from "@/layout/AppFooter";

export default function Index() {
	const { departamento, municipio, marca, searchTerm } = useFilters();

	const queryParams = useMemo(() => {
		const params: any = {};
		if (departamento && departamento !== '0') params.departamento = departamento;
		if (municipio && municipio !== '0') params.municipio = municipio;
		if (marca && marca !== '0') params.marca = marca;
		if (searchTerm.trim()) params.q = searchTerm.trim();
		params.size = 20;
		return params;
	}, [departamento, municipio, marca, searchTerm]);

	const {
		data,
		fetchNextPage,
		hasNextPage,
		isFetchingNextPage,
		isLoading,
		isError,
	} = useInfiniteGasStations(true, queryParams);

	const loadMoreRef = useRef<HTMLDivElement | null>(null);

	// Lazy loading con IntersectionObserver
	useEffect(() => {
		if (!hasNextPage || !loadMoreRef.current) return;

		const observer = new IntersectionObserver((entries) => {
			if (entries[0].isIntersecting) {
				fetchNextPage();
			}
		}, { threshold: 1 });

		const currentRef = loadMoreRef.current;
		observer.observe(currentRef);

		return () => {
			observer.unobserve(currentRef);
		};
	}, [hasNextPage, fetchNextPage]);

	const stations = data?.pages.flatMap(page => page.content) ?? [];

	return (
		<div className="grid grid-cols-12 gap-4 md:gap-6">
			{isError && (
				<div className="col-span-12 flex justify-center">
					<Badge size="md" color="error">Error cargando gasolineras.</Badge>
				</div>
			)}
			{isLoading && <Spinner />}

			<div className="col-span-12">
				<GasStationList gasStations={stations} />
			</div>

			{/* Loader para siguiente página */}
			<div ref={loadMoreRef} className="col-span-12 flex justify-center py-4">
				{isFetchingNextPage && <Spinner />}
				{!hasNextPage && !isLoading && (
					<p className="text-sm text-gray-400">No hay más resultados</p>
				)}
			</div>
			<div className="col-span-12 flex justify-center py-4">
				<AppFooter />
			</div>
		</div>
	);
}
