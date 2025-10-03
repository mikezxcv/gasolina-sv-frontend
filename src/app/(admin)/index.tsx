'use client';
import React, { useState } from "react";
import { useGasStations, useNearByGasStations } from './(api)/admin.api'
import GasStationList from "./(index)/GasStationList";
import { QueryParamsGasStations } from "./(interfaces)/admin.interfaces";
import Spinner from "@/ui/spinner/Spinner";

export default function Index() {
  const [queryParams, setQueryParams] = useState<QueryParamsGasStations>();
  const { data, isLoading, isError } = useGasStations(true, queryParams);
  console.log("data", data);
  console.log("isLoading", isLoading);
  console.log("isError", isError);

  return (
		<>
			{isLoading && <Spinner />}
			<div className="grid grid-cols-12 gap-4 md:gap-6">
				<div className="col-span-12">
					<GasStationList gasStations={data?.content ?? []} />
				</div>
			</div>
		</>
  );
}
