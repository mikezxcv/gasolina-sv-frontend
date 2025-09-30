'use client';
import React from "react";
import { useNearByGasStations } from './(api)/admin.api'
import StockMetricsList from "./(index)/StockMetricsList";

export default function Index() {
    const { data, isLoading, isError } = useNearByGasStations(true);
  console.log("data", data);
  console.log("isLoading", isLoading);
  console.log("isError", isError);

  return (
      <div className="grid grid-cols-12 gap-4 md:gap-6">
        <div className="col-span-12">
          {/* <!-- Metric Group Five --> */}
          <StockMetricsList />
          {/* <!-- Metric Group Five --> */}
        </div>
      </div>
  );
}
