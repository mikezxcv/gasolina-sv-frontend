interface Department {
    name: string;
    code: string;
}

interface Municipality {
    name: string;
    code: string;
    departmentCode: string;
}

interface BrandsGasStation {
    name: string;
    code: string;
}

export const departments: Department[] = [
    { name: "Ahuachapán", code: "01" },
    { name: "Cabañas", code: "02" },
    { name: "Chalatenango", code: "03" },
    { name: "Cuscatlán", code: "04" },
];

export const municipalities: Municipality[] = [
    { name: "Ahuachapán", code: "001", departmentCode: "01" },
    { name: "Apaneca", code: "002", departmentCode: "01" },

    { name: "Atiquizaya", code: "003", departmentCode: "02" },
    { name: "El Refugio", code: "004", departmentCode: "02" },

    { name: "Guadalupe", code: "005", departmentCode: "03" },
    { name: "Jujutla", code: "006", departmentCode: "03" },

    { name: "San Francisco Menéndez", code: "007", departmentCode: "04" },
    { name: "San Lorenzo", code: "008", departmentCode: "04" },

    { name: "Tacuba", code: "009", departmentCode: "01" },
    { name: "Turín", code: "010", departmentCode: "01" },
];

export const brandsGasStation: BrandsGasStation[] = [
    { name: "PUMA", code: "PUMA" },
    { name: "SHELL", code: "SHELL" },
];