export interface UltimoPrecio {
  fechaReporte: string;
  especialSc: number | null;
  regularSc: number | null;
  dieselSc: number | null;
  ionDieselSc: number | null;
  dieselLSSc: number | null;
  especialAuto: number | null;
  regularAuto: number | null;
  dieselAuto: number | null;
  ionDieselAuto: number | null;
  dieselLSAuto: number | null;
}

export interface Estacion {
  id: string;
  estacion: string;
  marca: string;
  departamento: string;
  municipio: string;
  tienda: boolean | null;
  direccion: string | null;
  latitude: number | null;
  longitude: number | null;
  ultimoPrecio: UltimoPrecio;
}

export interface SortInfo {
  sorted: boolean;
  empty: boolean;
  unsorted: boolean;
}

export interface Pageable {
  sort: SortInfo;
  pageNumber: number;
  pageSize: number;
  offset: number;
  paged: boolean;
  unpaged: boolean;
}

export interface ApiResponse {
  content: Estacion[];
  pageable?: Pageable;
  last?: boolean;
  totalPages?: number;
  totalElements?: number;
  size?: number;
  number?: number;
  sort?: SortInfo;
  first?: boolean;
  numberOfElements?: number;
  empty?: boolean;
}

export interface QueryParamsGasStations {
  departamento?: string;
  municipio?: string;
  marca?: string;
  q?: string;
  page?: number;
  size?: number;
}

export interface QueryParamsGasStationsNearBy {
  lat: number;
  lng: number;
  radioKm?: number; // in kilometers
  page?: number;
  size?: number;
}