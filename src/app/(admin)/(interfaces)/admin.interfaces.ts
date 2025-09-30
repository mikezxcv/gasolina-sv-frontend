export interface LastPrice {
    reportDate: string;
    specialSc: number | null;
    regularSc: number | null;
    dieselSc: number | null;
    ionDieselSc: number | null;
    dieselLSSc: number | null;
    specialAuto: number | null;
    regularAuto: number | null;
    dieselAuto: number | null;
    ionDieselAuto: number | null;
    dieselLSAuto: number | null;
}

export interface Station {
    id: string;
    station: string;
    brand: string;
    department: string;
    municipality: string;
    store: boolean | null;
    address: string | null;
    latitude: number | null;
    longitude: number | null;
    lastPrice: LastPrice;
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
    content: Station[];
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

































interface Geo {
  lat: string;
  lng: string;
}

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}