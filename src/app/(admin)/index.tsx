'use client';
import React from "react";
import { useNearByGasStations } from './(api)/admin.api'
import GasStationList from "./(index)/GasStationList";
import { ApiResponse } from "./(interfaces)/admin.interfaces";

// object for testing purposes
const gasStationResponse: ApiResponse = {
	"content": [
		{
			"id": "68d44db18c92ee75b993b9f6",
			"estacion": "TEXACO EL MOLINO",
			"marca": "TEXACO",
			"departamento": "SANTA ANA",
			"municipio": "SANTA ANA",
			"tienda": false,
			"direccion": "carretera antiguo a San Salvador y calle al Cementerio, final veinticinco avenida sur",
			"latitude": 13.982709,
			"longitude": -89.545996,
			"ultimoPrecio": {
				"fechaReporte": "2025-09-16T06:32:00",
				"especialSc": 3.93,
				"regularSc": 3.64,
				"dieselSc": null,
				"ionDieselSc": null,
				"dieselLSSc": 3.42,
				"especialAuto": 3.83,
				"regularAuto": 3.54,
				"dieselAuto": null,
				"ionDieselAuto": null,
				"dieselLSAuto": 3.32
			}
		},
		{
			"id": "68d44dae8c92ee75b993b9c6",
			"estacion": "SEVGASA SANTA ISABEL",
			"marca": "BANDERA BLANCA",
			"departamento": "SANTA ANA",
			"municipio": "SANTA ANA",
			"tienda": false,
			"direccion": "Lotificación América, Carretera a San Luis La Planta tacachico, Colonia Santa Isabel, Santa Ana.",
			"latitude": 13.983378,
			"longitude": -89.538813,
			"ultimoPrecio": {
				"fechaReporte": "2025-09-17T08:44:00",
				"especialSc": null,
				"regularSc": 3.54,
				"dieselSc": null,
				"ionDieselSc": null,
				"dieselLSSc": 3.32,
				"especialAuto": null,
				"regularAuto": null,
				"dieselAuto": null,
				"ionDieselAuto": null,
				"dieselLSAuto": null
			}
		},
		{
			"id": "68d44db58c92ee75b993ba47",
			"estacion": "UNO AUTOPISTA SANTA ANA",
			"marca": "UNO",
			"departamento": "SANTA ANA",
			"municipio": "SANTA ANA",
			"tienda": true,
			"direccion": "Avenida Independencia Sur, entre treinta y tres y treinta y cinco calle poniente.",
			"latitude": 13.978855,
			"longitude": -89.560391,
			"ultimoPrecio": {
				"fechaReporte": "2025-09-17T10:37:00",
				"especialSc": 3.92,
				"regularSc": 3.63,
				"dieselSc": null,
				"ionDieselSc": null,
				"dieselLSSc": 3.41,
				"especialAuto": 3.83,
				"regularAuto": 3.54,
				"dieselAuto": null,
				"ionDieselAuto": null,
				"dieselLSAuto": 3.32
			}
		},
		{
			"id": "68d44db28c92ee75b993ba0e",
			"estacion": "TEXACO LAS ARBOLEDAS",
			"marca": "TEXACO",
			"departamento": "SANTA ANA",
			"municipio": "SANTA ANA",
			"tienda": true,
			"direccion": "Kilómetro sesenta, carretera de Santa Ana hacia San Salvador, canton Loma Alta, Santa Ana",
			"latitude": 13.954283,
			"longitude": -89.564034,
			"ultimoPrecio": {
				"fechaReporte": "2025-09-16T05:07:00",
				"especialSc": null,
				"regularSc": null,
				"dieselSc": null,
				"ionDieselSc": null,
				"dieselLSSc": null,
				"especialAuto": 3.83,
				"regularAuto": 3.54,
				"dieselAuto": null,
				"ionDieselAuto": null,
				"dieselLSAuto": 3.32
			}
		},
		{
			"id": "68d44da38c92ee75b993b8dc",
			"estacion": "DLC SANTA ANA",
			"marca": "DLC",
			"departamento": "SANTA ANA",
			"municipio": "SANTA ANA",
			"tienda": false,
			"direccion": "Barrio Nuevo, Ventiuna Calle Poniente y Avenida Independencia Sur.",
			"latitude": 13.983849,
			"longitude": -89.558898,
			"ultimoPrecio": {
				"fechaReporte": "2025-09-16T12:33:00",
				"especialSc": null,
				"regularSc": null,
				"dieselSc": null,
				"ionDieselSc": null,
				"dieselLSSc": null,
				"especialAuto": null,
				"regularAuto": 3.49,
				"dieselAuto": null,
				"ionDieselAuto": null,
				"dieselLSAuto": 3.32
			}
		},
		{
			"id": "68d44dab8c92ee75b993b988",
			"estacion": "PUMA INDEPENDENCIA",
			"marca": "PUMA",
			"departamento": "SANTA ANA",
			"municipio": "SANTA ANA",
			"tienda": true,
			"direccion": "Avenida Independencia Sur y Onceava Calle Oriente, Barrio San Miguelito.Santa Ana.",
			"latitude": 13.989252,
			"longitude": -89.55778,
			"ultimoPrecio": {
				"fechaReporte": "2025-09-16T06:21:00",
				"especialSc": 4.39,
				"regularSc": 3.97,
				"dieselSc": null,
				"ionDieselSc": null,
				"dieselLSSc": 3.48,
				"especialAuto": 3.83,
				"regularAuto": 3.54,
				"dieselAuto": null,
				"ionDieselAuto": null,
				"dieselLSAuto": 3.32
			}
		},
		{
			"id": "68d44db88c92ee75b993ba81",
			"estacion": "UNO MORAGA",
			"marca": "UNO",
			"departamento": "SANTA ANA",
			"municipio": "SANTA ANA",
			"tienda": false,
			"direccion": "Avenida Fray Felipe de Jesus Moraga Sur y Quince Calle Poniente. Barrio San Sebastián.",
			"latitude": 13.988941,
			"longitude": -89.56539,
			"ultimoPrecio": {
				"fechaReporte": "2025-09-16T07:46:00",
				"especialSc": 3.83,
				"regularSc": 3.54,
				"dieselSc": null,
				"ionDieselSc": null,
				"dieselLSSc": 3.32,
				"especialAuto": null,
				"regularAuto": null,
				"dieselAuto": null,
				"ionDieselAuto": null,
				"dieselLSAuto": 3.27
			}
		},
		{
			"id": "68d44daa8c92ee75b993b96d",
			"estacion": "PUMA COLÓN",
			"marca": "PUMA",
			"departamento": "SANTA ANA",
			"municipio": "SANTA ANA",
			"tienda": false,
			"direccion": "Avenida Fray Felipe de Jesús Moraga y Trece Calle Poniente.",
			"latitude": 13.989996,
			"longitude": -89.564281,
			"ultimoPrecio": {
				"fechaReporte": "2025-09-16T04:58:00",
				"especialSc": 3.93,
				"regularSc": 3.64,
				"dieselSc": null,
				"ionDieselSc": null,
				"dieselLSSc": null,
				"especialAuto": 3.83,
				"regularAuto": 3.54,
				"dieselAuto": null,
				"ionDieselAuto": null,
				"dieselLSAuto": 3.32
			}
		},
		{
			"id": "68d44da28c92ee75b993b8ce",
			"estacion": "DLC ALDEA SAN ANTONIO",
			"marca": "DLC",
			"departamento": "SANTA ANA",
			"municipio": "SANTA ANA",
			"tienda": false,
			"direccion": "Calle Aldea San Antonio, carretera antigua de Santa Ana hacia Chalchuapa.",
			"latitude": 13.98342,
			"longitude": -89.573046,
			"ultimoPrecio": {
				"fechaReporte": "2025-09-16T06:53:00",
				"especialSc": null,
				"regularSc": null,
				"dieselSc": null,
				"ionDieselSc": null,
				"dieselLSSc": null,
				"especialAuto": 3.83,
				"regularAuto": 3.54,
				"dieselAuto": null,
				"ionDieselAuto": null,
				"dieselLSAuto": 3.32
			}
		},
		{
			"id": "68d44da78c92ee75b993b930",
			"estacion": "ESTACIÓN DE SERVICIO TEXACO SANTA BARBARA",
			"marca": "TEXACO",
			"departamento": "SANTA ANA",
			"municipio": "SANTA ANA",
			"tienda": null,
			"direccion": "NOVENA Y ONCE AVENIDA NORTE, BARRIO SANTA BÁRBARA.",
			"latitude": 14.000168,
			"longitude": -89.551528,
			"ultimoPrecio": {
				"fechaReporte": "2025-09-16T06:45:00",
				"especialSc": 3.83,
				"regularSc": 3.54,
				"dieselSc": null,
				"ionDieselSc": null,
				"dieselLSSc": 3.32,
				"especialAuto": 3.83,
				"regularAuto": 3.54,
				"dieselAuto": null,
				"ionDieselAuto": null,
				"dieselLSAuto": 3.32
			}
		},
		{
			"id": "68d44da28c92ee75b993b8c8",
			"estacion": "CANTARRANA",
			"marca": "BANDERA BLANCA",
			"departamento": "SANTA ANA",
			"municipio": "SANTA ANA",
			"tienda": true,
			"direccion": "Kilómetro dos Carretera de Santa Ana a Sonsonate, Cantón Cantarrana, entrada a Beneficio Monedero.",
			"latitude": 13.976772,
			"longitude": -89.582134,
			"ultimoPrecio": {
				"fechaReporte": "2025-09-16T12:57:00",
				"especialSc": 3.8,
				"regularSc": 3.51,
				"dieselSc": null,
				"ionDieselSc": null,
				"dieselLSSc": 3.29,
				"especialAuto": null,
				"regularAuto": null,
				"dieselAuto": null,
				"ionDieselAuto": null,
				"dieselLSAuto": null
			}
		},
		{
			"id": "68d44dab8c92ee75b993b98a",
			"estacion": "PUMA IZALCO",
			"marca": "PUMA",
			"departamento": "SANTA ANA",
			"municipio": "SANTA ANA",
			"tienda": true,
			"direccion": "UBICADA EN LA INTERSECCIÓN DE LA CARRETERA PANAMERICANA, FRENTE AL REDONDEL QUE CONDUCE HACIA AHUACHAPÁN Y HACIA LOS NARANJOS",
			"latitude": 13.973357,
			"longitude": -89.585083,
			"ultimoPrecio": {
				"fechaReporte": "2025-09-16T11:38:00",
				"especialSc": 3.93,
				"regularSc": 3.64,
				"dieselSc": null,
				"ionDieselSc": 3.52,
				"dieselLSSc": 3.42,
				"especialAuto": 3.83,
				"regularAuto": 3.54,
				"dieselAuto": null,
				"ionDieselAuto": null,
				"dieselLSAuto": 3.32
			}
		},
		{
			"id": "68d44dae8c92ee75b993b9bd",
			"estacion": "SAN CAYETANO",
			"marca": "BANDERA BLANCA",
			"departamento": "SANTA ANA",
			"municipio": "SANTA ANA",
			"tienda": false,
			"direccion": "Kilómetro sesenta y siete y medio, Autopista By Pass y Carretera a Metapán, San Cayetano, Santa Ana",
			"latitude": 14.010131,
			"longitude": -89.542428,
			"ultimoPrecio": {
				"fechaReporte": "2025-09-15T21:05:00",
				"especialSc": 3.78,
				"regularSc": 3.49,
				"dieselSc": null,
				"ionDieselSc": null,
				"dieselLSSc": 3.27,
				"especialAuto": null,
				"regularAuto": null,
				"dieselAuto": null,
				"ionDieselAuto": null,
				"dieselLSAuto": null
			}
		},
		{
			"id": "68d44dad8c92ee75b993b9a5",
			"estacion": "PUMA PORTEZUELO",
			"marca": "PUMA",
			"departamento": "SANTA ANA",
			"municipio": "SANTA ANA",
			"tienda": false,
			"direccion": "Kilómetro Setenta, Carretera a Chalchuapa, Cantón El Portezuelo.",
			"latitude": 13.984914,
			"longitude": -89.588025,
			"ultimoPrecio": {
				"fechaReporte": "2025-09-16T05:28:00",
				"especialSc": null,
				"regularSc": null,
				"dieselSc": null,
				"ionDieselSc": null,
				"dieselLSSc": null,
				"especialAuto": 3.83,
				"regularAuto": 3.54,
				"dieselAuto": null,
				"ionDieselAuto": null,
				"dieselLSAuto": 3.32
			}
		},
		{
			"id": "68d44dad8c92ee75b993b9ad",
			"estacion": "PUMA SANTA MARIA",
			"marca": "PUMA",
			"departamento": "SANTA ANA",
			"municipio": "SANTA ANA",
			"tienda": true,
			"direccion": "KILOMETRO SETENTA Y UNO DE LA AUTOPISTA A SANTA ANA Y CARRETERA A CHALCHUAPA, CANTON EL PORTEZUELO, LOTIFICACION SANTA MARIA.",
			"latitude": 13.984286,
			"longitude": -89.597081,
			"ultimoPrecio": {
				"fechaReporte": "2025-09-16T11:42:00",
				"especialSc": 3.93,
				"regularSc": 3.64,
				"dieselSc": null,
				"ionDieselSc": 3.52,
				"dieselLSSc": 3.42,
				"especialAuto": 3.83,
				"regularAuto": 3.54,
				"dieselAuto": null,
				"ionDieselAuto": null,
				"dieselLSAuto": 3.32
			}
		},
		{
			"id": "68d44db18c92ee75b993b9f3",
			"estacion": "TEXACO EL CONGO II",
			"marca": "TEXACO",
			"departamento": "SANTA ANA",
			"municipio": "EL CONGO",
			"tienda": true,
			"direccion": "Antigua carretera Panamericana, Kilómetro cincuenta y uno, calle al lago de Coatepeque, El Congo, Santa Ana.",
			"latitude": 13.912065,
			"longitude": -89.494024,
			"ultimoPrecio": {
				"fechaReporte": "2025-09-15T21:31:00",
				"especialSc": 3.87,
				"regularSc": 3.58,
				"dieselSc": null,
				"ionDieselSc": null,
				"dieselLSSc": 3.32,
				"especialAuto": null,
				"regularAuto": null,
				"dieselAuto": null,
				"ionDieselAuto": null,
				"dieselLSAuto": null
			}
		},
		{
			"id": "68d44da48c92ee75b993b8f4",
			"estacion": "ESTACIÓN DE SERVICIO CONGO CENTRO",
			"marca": "BANDERA BLANCA",
			"departamento": "SANTA ANA",
			"municipio": "EL CONGO",
			"tienda": false,
			"direccion": "Avenida Teniente Ricardo Mancia, frente a Iglesia San Antonio.",
			"latitude": 13.905855,
			"longitude": -89.496769,
			"ultimoPrecio": {
				"fechaReporte": "2025-09-15T19:28:00",
				"especialSc": null,
				"regularSc": 3.54,
				"dieselSc": null,
				"ionDieselSc": null,
				"dieselLSSc": 3.32,
				"especialAuto": null,
				"regularAuto": null,
				"dieselAuto": null,
				"ionDieselAuto": null,
				"dieselLSAuto": null
			}
		}
	],
	"pageable": {
		"sort": {
			"sorted": false,
			"empty": true,
			"unsorted": true
		},
		"pageNumber": 0,
		"pageSize": 20,
		"offset": 0,
		"paged": true,
		"unpaged": false
	},
	"last": true,
	"totalPages": 1,
	"totalElements": 17,
	"size": 20,
	"number": 0,
	"sort": {
		"sorted": false,
		"empty": true,
		"unsorted": true
	},
	"first": true,
	"numberOfElements": 17,
	"empty": false
};

export default function Index() {
  const { data, isLoading, isError } = useNearByGasStations(true);
  console.log("data", data);
  console.log("isLoading", isLoading);
  console.log("isError", isError);

  return (
    <div className="grid grid-cols-12 gap-4 md:gap-6">
      <div className="col-span-12">
        {/* <!-- Metric Group Five --> */}
        <GasStationList gasStations={gasStationResponse.content} />
        {/* <!-- Metric Group Five --> */}
      </div>
    </div>
  );
}
