export interface IMunicipality {
    id_mun: string;
    nombre: string;
    cantones: number;
    codigo_postal: string;
}

export interface IDepartment {
    id: string;
    nombre: string;
    cabecera: string;
    ISO3166_2: string;
    extension: number;
    municipios: IMunicipality[];
}

export interface IBrandsGasStation {
    name: string;
    code: string;
}

export const brandsGasStation: IBrandsGasStation[] = [
    { name: "DLC", code: "DLC" },
    { name: "PUMA", code: "PUMA" },
    { name: "SHELL", code: "SHELL" },
    { name: "TEXACO", code: "TEXACO" },
    { name: "UNO", code: "UNO" },
    { name: "BANDERA BLANCA", code: "BANDERA BLANCA" },
];

export const departments: IDepartment[] = [
    {
        "id": "01",
        "nombre": "Ahuachapán",
        "cabecera": "Ahuachapán",
        "ISO3166_2": "SV-AH",
        "extension": 1239.6,
        "municipios": [
            {
                "id_mun": "0101",
                "nombre": "Ahuachapán",
                "cantones": 29,
                "codigo_postal": "02101"
            },
            {
                "id_mun": "0102",
                "nombre": "Apaneca",
                "cantones": 7,
                "codigo_postal": "02102"
            },
            {
                "id_mun": "0103",
                "nombre": "Atiquizaya",
                "cantones": 14,
                "codigo_postal": "02103"
            },
            {
                "id_mun": "0104",
                "nombre": "Concepción de Ataco",
                "cantones": 11,
                "codigo_postal": "02106"
            },
            {
                "id_mun": "0105",
                "nombre": "El Refugio",
                "cantones": 3,
                "codigo_postal": "02107"
            },
            {
                "id_mun": "0106",
                "nombre": "Guaymango",
                "cantones": 14,
                "codigo_postal": "02108"
            },
            {
                "id_mun": "0107",
                "nombre": "Jujutla",
                "cantones": 12,
                "codigo_postal": "02109"
            },
            {
                "id_mun": "0108",
                "nombre": "San Francisco Menéndez",
                "cantones": 9,
                "codigo_postal": "02113"
            },
            {
                "id_mun": "0109",
                "nombre": "San Lorenzo",
                "cantones": 6,
                "codigo_postal": "02115"
            },
            {
                "id_mun": "0110",
                "nombre": "San Pedro Puxtla",
                "cantones": 6,
                "codigo_postal": "02116"
            },
            {
                "id_mun": "0111",
                "nombre": "Tacuba",
                "cantones": 14,
                "codigo_postal": "02117"
            },
            {
                "id_mun": "0112",
                "nombre": "Turín",
                "cantones": 2,
                "codigo_postal": "02118"
            }
        ]
    },
    {
        "id": "02",
        "nombre": "Santa Ana",
        "cabecera": "Santa Ana",
        "ISO3166_2": "SV-SA",
        "extension": 2023.17,
        "municipios": [
            {
                "id_mun": "0201",
                "nombre": "Candelaria de la Frontera",
                "cantones": 11,
                "codigo_postal": "02203"
            },
            {
                "id_mun": "0202",
                "nombre": "Coatepeque",
                "cantones": 16,
                "codigo_postal": "02204"
            },
            {
                "id_mun": "0203",
                "nombre": "Chalchuapa",
                "cantones": 20,
                "codigo_postal": "02205"
            },
            {
                "id_mun": "0204",
                "nombre": "El Congo",
                "cantones": 8,
                "codigo_postal": "02207"
            },
            {
                "id_mun": "0205",
                "nombre": "El Porvenir",
                "cantones": 4,
                "codigo_postal": "02208"
            },
            {
                "id_mun": "0206",
                "nombre": "Masahuat",
                "cantones": 5,
                "codigo_postal": "02210"
            },
            {
                "id_mun": "0207",
                "nombre": "Metapán",
                "cantones": 29,
                "codigo_postal": "02211"
            },
            {
                "id_mun": "0208",
                "nombre": "San Antonio Pajonal",
                "cantones": 4,
                "codigo_postal": "02212"
            },
            {
                "id_mun": "0209",
                "nombre": "San Sebastián Salitrillo",
                "cantones": 4,
                "codigo_postal": "02215"
            },
            {
                "id_mun": "0210",
                "nombre": "Santa Ana",
                "cantones": 35,
                "codigo_postal": "02201"
            },
            {
                "id_mun": "0211",
                "nombre": "Santa Rosa Guachipilín",
                "cantones": 6,
                "codigo_postal": "02216"
            },
            {
                "id_mun": "0212",
                "nombre": "Santiago de la Frontera",
                "cantones": 6,
                "codigo_postal": "02217"
            },
            {
                "id_mun": "0213",
                "nombre": "Texistepeque",
                "cantones": 6,
                "codigo_postal": "02218"
            }
        ]
    },
    {
        "id": "03",
        "nombre": "Sonsonate",
        "cabecera": "Sonsonate",
        "ISO3166_2": "SV-SO",
        "extension": 1225.77,
        "municipios": [
            {
                "id_mun": "0301",
                "nombre": "Acajutla",
                "cantones": 9,
                "codigo_postal": "02302"
            },
            {
                "id_mun": "0302",
                "nombre": "Armenia",
                "cantones": 9,
                "codigo_postal": "02303"
            },
            {
                "id_mun": "0303",
                "nombre": "Caluco",
                "cantones": 8,
                "codigo_postal": "02304"
            },
            {
                "id_mun": "0304",
                "nombre": "Cuisnahuat",
                "cantones": 5,
                "codigo_postal": "02305"
            },
            {
                "id_mun": "0305",
                "nombre": "Santa Isabel Ishuatán",
                "cantones": 8,
                "codigo_postal": "02318"
            },
            {
                "id_mun": "0306",
                "nombre": "Izalco",
                "cantones": 25,
                "codigo_postal": "02306"
            },
            {
                "id_mun": "0307",
                "nombre": "Juayúa",
                "cantones": 10,
                "codigo_postal": "02307"
            },
            {
                "id_mun": "0308",
                "nombre": "Nahuizalco",
                "cantones": 15,
                "codigo_postal": "02311"
            },
            {
                "id_mun": "0309",
                "nombre": "Nahulingo",
                "cantones": 4,
                "codigo_postal": "02312"
            },
            {
                "id_mun": "0310",
                "nombre": "Salcoatitán",
                "cantones": 2,
                "codigo_postal": "02313"
            },
            {
                "id_mun": "0311",
                "nombre": "San Antonio del Monte",
                "cantones": 6,
                "codigo_postal": "02314"
            },
            {
                "id_mun": "0312",
                "nombre": "San Julián",
                "cantones": 9,
                "codigo_postal": "02316"
            },
            {
                "id_mun": "0313",
                "nombre": "Santa Catarina Masahuat",
                "cantones": 4,
                "codigo_postal": "02317"
            },
            {
                "id_mun": "0314",
                "nombre": "Santo Domingo de Guzmán",
                "cantones": 4,
                "codigo_postal": "02319"
            },
            {
                "id_mun": "0315",
                "nombre": "Sonsonate",
                "cantones": 12,
                "codigo_postal": "02301"
            },
            {
                "id_mun": "0316",
                "nombre": "Sonzacate",
                "cantones": 2,
                "codigo_postal": "02320"
            }
        ]
    },
    {
        "id": "04",
        "nombre": "Chalatenango",
        "cabecera": "Chalatenango",
        "ISO3166_2": "SV-CH",
        "extension": 2017,
        "municipios": [
            {
                "id_mun": "0401",
                "nombre": "Agua Caliente",
                "cantones": 7,
                "codigo_postal": "01302"
            },
            {
                "id_mun": "0402",
                "nombre": "Arcatao",
                "cantones": 8,
                "codigo_postal": "01303"
            },
            {
                "id_mun": "0403",
                "nombre": "Azacualpa",
                "cantones": 2,
                "codigo_postal": "01304"
            },
            {
                "id_mun": "0404",
                "nombre": "Citalá",
                "cantones": 8,
                "codigo_postal": "01306"
            },
            {
                "id_mun": "0405",
                "nombre": "Comalapa",
                "cantones": 4,
                "codigo_postal": "01307"
            },
            {
                "id_mun": "0406",
                "nombre": "Concepción Quezaltepeque",
                "cantones": 5,
                "codigo_postal": "01308"
            },
            {
                "id_mun": "0407",
                "nombre": "Chalatenango",
                "cantones": 6,
                "codigo_postal": "01301"
            },
            {
                "id_mun": "0408",
                "nombre": "Dulce Nombre de María",
                "cantones": 9,
                "codigo_postal": "01309"
            },
            {
                "id_mun": "0409",
                "nombre": "El Carrizal",
                "cantones": 4,
                "codigo_postal": "01311"
            },
            {
                "id_mun": "0410",
                "nombre": "El Paraíso",
                "cantones": 3,
                "codigo_postal": "01312"
            },
            {
                "id_mun": "0411",
                "nombre": "La Laguna",
                "cantones": 4,
                "codigo_postal": "01313"
            },
            {
                "id_mun": "0412",
                "nombre": "La Palma",
                "cantones": 7,
                "codigo_postal": "01314"
            },
            {
                "id_mun": "0413",
                "nombre": "La Reina",
                "cantones": 7,
                "codigo_postal": "01315"
            },
            {
                "id_mun": "0414",
                "nombre": "Las Vueltas",
                "cantones": 6,
                "codigo_postal": "01317"
            },
            {
                "id_mun": "0415",
                "nombre": "Nombre de Jesús",
                "cantones": 6,
                "codigo_postal": "01318"
            },
            {
                "id_mun": "0416",
                "nombre": "Nueva Concepción",
                "cantones": 10,
                "codigo_postal": "01319"
            },
            {
                "id_mun": "0417",
                "nombre": "Nueva Trinidad",
                "cantones": 7,
                "codigo_postal": "01320"
            },
            {
                "id_mun": "0418",
                "nombre": "Ojos de Agua",
                "cantones": 7,
                "codigo_postal": "01321"
            },
            {
                "id_mun": "0419",
                "nombre": "Potonico",
                "cantones": 4,
                "codigo_postal": "01322"
            },
            {
                "id_mun": "0420",
                "nombre": "San Antonio de la Cruz",
                "cantones": 4,
                "codigo_postal": "01324"
            },
            {
                "id_mun": "0421",
                "nombre": "San Antonio Los Ranchos",
                "cantones": 1,
                "codigo_postal": "01325"
            },
            {
                "id_mun": "0422",
                "nombre": "San Fernando",
                "cantones": 5,
                "codigo_postal": "01326"
            },
            {
                "id_mun": "0423",
                "nombre": "San Francisco Lempa",
                "cantones": 5,
                "codigo_postal": "01327"
            },
            {
                "id_mun": "0424",
                "nombre": "San Francisco Morazán",
                "cantones": 2,
                "codigo_postal": "01328"
            },
            {
                "id_mun": "0425",
                "nombre": "San Ignacio",
                "cantones": 7,
                "codigo_postal": "01329"
            },
            {
                "id_mun": "0426",
                "nombre": "San Isidro Labrador",
                "cantones": 5,
                "codigo_postal": "01330"
            },
            {
                "id_mun": "0427",
                "nombre": "San José Cancasque (Cancasque)",
                "cantones": 4,
                "codigo_postal": "01305"
            },
            {
                "id_mun": "0428",
                "nombre": "San José Las Flores / Las Flores",
                "cantones": 6,
                "codigo_postal": "01316"
            },
            {
                "id_mun": "0429",
                "nombre": "San Luis del Carmen",
                "cantones": 5,
                "codigo_postal": "01331"
            },
            {
                "id_mun": "0430",
                "nombre": "San Miguel de Mercedes",
                "cantones": 5,
                "codigo_postal": "01332"
            },
            {
                "id_mun": "0431",
                "nombre": "San Rafael",
                "cantones": 4,
                "codigo_postal": "01333"
            },
            {
                "id_mun": "0432",
                "nombre": "Santa Rita",
                "cantones": 4,
                "codigo_postal": "01334"
            },
            {
                "id_mun": "0433",
                "nombre": "Tejutla",
                "cantones": 15,
                "codigo_postal": "01335"
            }
        ]
    },
    {
        "id": "05",
        "nombre": "La Libertad",
        "cabecera": "Santa Tecla",
        "ISO3166_2": "SV-LI",
        "extension": 1652.88,
        "municipios": [
            {
                "id_mun": "0501",
                "nombre": "Antiguo Cuscatlán",
                "cantones": 6,
                "codigo_postal": "01502"
            },
            {
                "id_mun": "0502",
                "nombre": "Ciudad Arce",
                "cantones": 15,
                "codigo_postal": "01504"
            },
            {
                "id_mun": "0503",
                "nombre": "Colón",
                "cantones": 12,
                "codigo_postal": "01512"
            },
            {
                "id_mun": "0504",
                "nombre": "Comasagua",
                "cantones": 9,
                "codigo_postal": "01506"
            },
            {
                "id_mun": "0505",
                "nombre": "Chiltiupán",
                "cantones": 11,
                "codigo_postal": "01507"
            },
            {
                "id_mun": "0506",
                "nombre": "Huizúcar",
                "cantones": 6,
                "codigo_postal": "01508"
            },
            {
                "id_mun": "0507",
                "nombre": "Jayaque",
                "cantones": 4,
                "codigo_postal": "01509"
            },
            {
                "id_mun": "0508",
                "nombre": "Jicalapa",
                "cantones": 3,
                "codigo_postal": "01510"
            },
            {
                "id_mun": "0509",
                "nombre": "La Libertad",
                "cantones": 10,
                "codigo_postal": "01511"
            },
            {
                "id_mun": "0510",
                "nombre": "Nuevo Cuscatlán",
                "cantones": 0,
                "codigo_postal": "01513"
            },
            {
                "id_mun": "0511",
                "nombre": "Santa Tecla",
                "cantones": 10,
                "codigo_postal": "01501"
            },
            {
                "id_mun": "0512",
                "nombre": "Quezaltepeque",
                "cantones": 13,
                "codigo_postal": "01515"
            },
            {
                "id_mun": "0513",
                "nombre": "Sacacoyo",
                "cantones": 3,
                "codigo_postal": "01516"
            },
            {
                "id_mun": "0514",
                "nombre": "San José Villanueva",
                "cantones": 5,
                "codigo_postal": "01517"
            },
            {
                "id_mun": "0515",
                "nombre": "San Juan Opico",
                "cantones": 27,
                "codigo_postal": "01514"
            },
            {
                "id_mun": "0516",
                "nombre": "San Matías",
                "cantones": 8,
                "codigo_postal": "01518"
            },
            {
                "id_mun": "0517",
                "nombre": "San Pablo Tacachico",
                "cantones": 8,
                "codigo_postal": "01519"
            },
            {
                "id_mun": "0518",
                "nombre": "Tamanique",
                "cantones": 11,
                "codigo_postal": "01522"
            },
            {
                "id_mun": "0519",
                "nombre": "Talnique",
                "cantones": 7,
                "codigo_postal": "01521"
            },
            {
                "id_mun": "0520",
                "nombre": "Teotepeque",
                "cantones": 10,
                "codigo_postal": "01523"
            },
            {
                "id_mun": "0521",
                "nombre": "Tepecoyo",
                "cantones": 10,
                "codigo_postal": "01524"
            },
            {
                "id_mun": "0522",
                "nombre": "Zaragoza",
                "cantones": 4,
                "codigo_postal": "01525"
            }
        ]
    },
    {
        "id": "06",
        "nombre": "San Salvador",
        "cabecera": "San Salvador",
        "ISO3166_2": "SV-SS",
        "extension": 886.15,
        "municipios": [
            {
                "id_mun": "0601",
                "nombre": "Aguilares",
                "cantones": 5,
                "codigo_postal": "01122"
            },
            {
                "id_mun": "0602",
                "nombre": "Apopa",
                "cantones": 8,
                "codigo_postal": "01123"
            },
            {
                "id_mun": "0603",
                "nombre": "Ayutuxtepeque",
                "cantones": 2,
                "codigo_postal": "01121"
            },
            {
                "id_mun": "0604",
                "nombre": "Cuscatancingo",
                "cantones": 1,
                "codigo_postal": "01119"
            },
            {
                "id_mun": "0605",
                "nombre": "El Paisnal",
                "cantones": 12,
                "codigo_postal": "01124"
            },
            {
                "id_mun": "0606",
                "nombre": "Guazapa",
                "cantones": 8,
                "codigo_postal": "01125"
            },
            {
                "id_mun": "0607",
                "nombre": "Ilopango",
                "cantones": 4,
                "codigo_postal": "01117"
            },
            {
                "id_mun": "0608",
                "nombre": "Mejicanos",
                "cantones": 0,
                "codigo_postal": "01120"
            },
            {
                "id_mun": "0609",
                "nombre": "Nejapa",
                "cantones": 8,
                "codigo_postal": "01126"
            },
            {
                "id_mun": "0610",
                "nombre": "Panchimalco",
                "cantones": 14,
                "codigo_postal": "01127"
            },
            {
                "id_mun": "0611",
                "nombre": "Rosario de Mora",
                "cantones": 7,
                "codigo_postal": "01128"
            },
            {
                "id_mun": "0612",
                "nombre": "San Marcos",
                "cantones": 4,
                "codigo_postal": "01115"
            },
            {
                "id_mun": "0613",
                "nombre": "San Martín",
                "cantones": 6,
                "codigo_postal": "01129"
            },
            {
                "id_mun": "0614",
                "nombre": "San Salvador",
                "cantones": 7,
                "codigo_postal": "01101"
            },
            {
                "id_mun": "0615",
                "nombre": "Santiago Texacuangos",
                "cantones": 5,
                "codigo_postal": "01130"
            },
            {
                "id_mun": "0616",
                "nombre": "Santo Tomás",
                "cantones": 9,
                "codigo_postal": "01131"
            },
            {
                "id_mun": "0617",
                "nombre": "Soyapango",
                "cantones": 8,
                "codigo_postal": "01116"
            },
            {
                "id_mun": "0618",
                "nombre": "Tonacatepeque",
                "cantones": 8,
                "codigo_postal": "01132"
            },
            {
                "id_mun": "0619",
                "nombre": "Ciudad Delgado",
                "cantones": 8,
                "codigo_postal": "01118"
            }
        ]
    },
    {
        "id": "07",
        "nombre": "Cuscatlán",
        "cabecera": "Cojutepeque",
        "ISO3166_2": "SV-CU",
        "extension": 756.19,
        "municipios": [
            {
                "id_mun": "0701",
                "nombre": "Candelaria",
                "cantones": 8,
                "codigo_postal": "01402"
            },
            {
                "id_mun": "0702",
                "nombre": "Cojutepeque",
                "cantones": 7,
                "codigo_postal": "01401"
            },
            {
                "id_mun": "0703",
                "nombre": "El Carmen",
                "cantones": 7,
                "codigo_postal": "01403"
            },
            {
                "id_mun": "0704",
                "nombre": "El Rosario",
                "cantones": 4,
                "codigo_postal": "01404"
            },
            {
                "id_mun": "0705",
                "nombre": "Monte San Juan",
                "cantones": 10,
                "codigo_postal": "01405"
            },
            {
                "id_mun": "0706",
                "nombre": "Oratorio de Concepción",
                "cantones": 2,
                "codigo_postal": "01406"
            },
            {
                "id_mun": "0707",
                "nombre": "San Bartolomé Perulapía",
                "cantones": 2,
                "codigo_postal": "01407"
            },
            {
                "id_mun": "0708",
                "nombre": "San Cristóbal",
                "cantones": 6,
                "codigo_postal": "01408"
            },
            {
                "id_mun": "0709",
                "nombre": "San José Guayabal",
                "cantones": 9,
                "codigo_postal": "01409"
            },
            {
                "id_mun": "0710",
                "nombre": "San Pedro Perulapán",
                "cantones": 17,
                "codigo_postal": "01410"
            },
            {
                "id_mun": "0711",
                "nombre": "San Rafael Cedros",
                "cantones": 6,
                "codigo_postal": "01411"
            },
            {
                "id_mun": "0712",
                "nombre": "San Ramón",
                "cantones": 4,
                "codigo_postal": "01412"
            },
            {
                "id_mun": "0713",
                "nombre": "Santa Cruz Analquito",
                "cantones": 1,
                "codigo_postal": "01413"
            },
            {
                "id_mun": "0714",
                "nombre": "Santa Cruz Michapa",
                "cantones": 6,
                "codigo_postal": "01414"
            },
            {
                "id_mun": "0715",
                "nombre": "Suchitoto",
                "cantones": 26,
                "codigo_postal": "01415"
            },
            {
                "id_mun": "0716",
                "nombre": "Tenancingo",
                "cantones": 10,
                "codigo_postal": "01416"
            }
        ]
    },
    {
        "id": "08",
        "nombre": "La Paz",
        "cabecera": "Zacatecoluca",
        "ISO3166_2": "SV-PA",
        "extension": 1223.61,
        "municipios": [
            {
                "id_mun": "0801",
                "nombre": "Cuyultitán",
                "cantones": 2,
                "codigo_postal": "01603"
            },
            {
                "id_mun": "0802",
                "nombre": "El Rosario",
                "cantones": 4,
                "codigo_postal": "01604"
            },
            {
                "id_mun": "0803",
                "nombre": "Jerusalén",
                "cantones": 5,
                "codigo_postal": "01605"
            },
            {
                "id_mun": "0804",
                "nombre": "Mercedes La Ceiba",
                "cantones": 2,
                "codigo_postal": "01607"
            },
            {
                "id_mun": "0805",
                "nombre": "Olocuilta",
                "cantones": 12,
                "codigo_postal": "01608"
            },
            {
                "id_mun": "0806",
                "nombre": "Paraíso de Osorio",
                "cantones": 2,
                "codigo_postal": "01609"
            },
            {
                "id_mun": "0807",
                "nombre": "San Antonio Masahuat",
                "cantones": 5,
                "codigo_postal": "01610"
            },
            {
                "id_mun": "0808",
                "nombre": "San Emigdio",
                "cantones": 2,
                "codigo_postal": "01611"
            },
            {
                "id_mun": "0809",
                "nombre": "San Francisco Chinameca",
                "cantones": 5,
                "codigo_postal": "01612"
            },
            {
                "id_mun": "0810",
                "nombre": "San Juan Nonualco",
                "cantones": 12,
                "codigo_postal": "01613"
            },
            {
                "id_mun": "0811",
                "nombre": "San Juan Talpa",
                "cantones": 4,
                "codigo_postal": "01614"
            },
            {
                "id_mun": "0812",
                "nombre": "San Juan Tepezontes",
                "cantones": 3,
                "codigo_postal": "01615"
            },
            {
                "id_mun": "0813",
                "nombre": "San Luis Talpa",
                "cantones": 10,
                "codigo_postal": "01616"
            },
            {
                "id_mun": "0814",
                "nombre": "San Miguel Tepezontes",
                "cantones": 2,
                "codigo_postal": "01617"
            },
            {
                "id_mun": "0815",
                "nombre": "San Pedro Masahuat",
                "cantones": 15,
                "codigo_postal": "01618"
            },
            {
                "id_mun": "0816",
                "nombre": "San Pedro Nonualco",
                "cantones": 7,
                "codigo_postal": "01619"
            },
            {
                "id_mun": "0817",
                "nombre": "San Rafael Obrajuelo",
                "cantones": 6,
                "codigo_postal": "01620"
            },
            {
                "id_mun": "0818",
                "nombre": "Santa María Ostuma",
                "cantones": 7,
                "codigo_postal": "01621"
            },
            {
                "id_mun": "0819",
                "nombre": "Santiago Nonualco",
                "cantones": 22,
                "codigo_postal": "01622"
            },
            {
                "id_mun": "0820",
                "nombre": "Tapalhuaca",
                "cantones": 3,
                "codigo_postal": "01623"
            },
            {
                "id_mun": "0821",
                "nombre": "Zacatecoluca",
                "cantones": 39,
                "codigo_postal": "01624"
            },
            {
                "id_mun": "0822",
                "nombre": "San Luis La Herradura",
                "cantones": 10,
                "codigo_postal": "01606"
            }
        ]
    },
    {
        "id": "09",
        "nombre": "Cabañas",
        "cabecera": "Sensuntepeque",
        "ISO3166_2": "SV-CA",
        "extension": 1103.51,
        "municipios": [
            {
                "id_mun": "0901",
                "nombre": "Cinquera",
                "cantones": 8,
                "codigo_postal": "01202"
            },
            {
                "id_mun": "0902",
                "nombre": "Guacotecti",
                "cantones": 3,
                "codigo_postal": "01203"
            },
            {
                "id_mun": "0903",
                "nombre": "Ilobasco",
                "cantones": 18,
                "codigo_postal": "01204"
            },
            {
                "id_mun": "0904",
                "nombre": "Jutiapa",
                "cantones": 7,
                "codigo_postal": "01206"
            },
            {
                "id_mun": "0905",
                "nombre": "San Isidro",
                "cantones": 7,
                "codigo_postal": "01207"
            },
            {
                "id_mun": "0906",
                "nombre": "Sensuntepeque",
                "cantones": 22,
                "codigo_postal": "01201"
            },
            {
                "id_mun": "0907",
                "nombre": "Tejutepeque",
                "cantones": 6,
                "codigo_postal": "01208"
            },
            {
                "id_mun": "0908",
                "nombre": "Victoria",
                "cantones": 10,
                "codigo_postal": "01210"
            },
            {
                "id_mun": "0909",
                "nombre": "Dolores",
                "cantones": 6,
                "codigo_postal": "01209"
            }
        ]
    },
    {
        "id": "10",
        "nombre": "San Vicente",
        "cabecera": "San Vicente",
        "ISO3166_2": "SV-SV",
        "extension": 1184.02,
        "municipios": [
            {
                "id_mun": "1001",
                "nombre": "Apastepeque",
                "cantones": 10,
                "codigo_postal": "01702"
            },
            {
                "id_mun": "1002",
                "nombre": "Guadalupe",
                "cantones": 4,
                "codigo_postal": "01703"
            },
            {
                "id_mun": "1003",
                "nombre": "San Cayetano Istepeque",
                "cantones": 3,
                "codigo_postal": "01704"
            },
            {
                "id_mun": "1004",
                "nombre": "Santa Clara",
                "cantones": 6,
                "codigo_postal": "01709"
            },
            {
                "id_mun": "1005",
                "nombre": "Santo Domingo",
                "cantones": 4,
                "codigo_postal": "01710"
            },
            {
                "id_mun": "1006",
                "nombre": "San Esteban Catarina",
                "cantones": 7,
                "codigo_postal": "01705"
            },
            {
                "id_mun": "1007",
                "nombre": "San Ildefonso",
                "cantones": 6,
                "codigo_postal": "01706"
            },
            {
                "id_mun": "1008",
                "nombre": "San Lorenzo",
                "cantones": 4,
                "codigo_postal": "01707"
            },
            {
                "id_mun": "1009",
                "nombre": "San Sebastián",
                "cantones": 6,
                "codigo_postal": "01708"
            },
            {
                "id_mun": "1010",
                "nombre": "San Vicente",
                "cantones": 26,
                "codigo_postal": "01701"
            },
            {
                "id_mun": "1011",
                "nombre": "Tecoluca",
                "cantones": 24,
                "codigo_postal": "01711"
            },
            {
                "id_mun": "1012",
                "nombre": "Tepetitán",
                "cantones": 3,
                "codigo_postal": "01712"
            },
            {
                "id_mun": "1013",
                "nombre": "Verapaz",
                "cantones": 8,
                "codigo_postal": "01713"
            }
        ]
    },
    {
        "id": "11",
        "nombre": "Usulután",
        "cabecera": "Usulután",
        "ISO3166_2": "SV-US",
        "extension": 2130.44,
        "municipios": [
            {
                "id_mun": "1101",
                "nombre": "Alegría",
                "cantones": 8,
                "codigo_postal": "03404"
            },
            {
                "id_mun": "1102",
                "nombre": "Berlín",
                "cantones": 17,
                "codigo_postal": "03403"
            },
            {
                "id_mun": "1103",
                "nombre": "California",
                "cantones": 1,
                "codigo_postal": "03404"
            },
            {
                "id_mun": "1104",
                "nombre": "Concepción Batres",
                "cantones": 9,
                "codigo_postal": "03405"
            },
            {
                "id_mun": "1105",
                "nombre": "El Triunfo",
                "cantones": 5,
                "codigo_postal": "03406"
            },
            {
                "id_mun": "1106",
                "nombre": "Ereguayquín",
                "cantones": 5,
                "codigo_postal": "03407"
            },
            {
                "id_mun": "1107",
                "nombre": "Estanzuelas",
                "cantones": 9,
                "codigo_postal": "03408"
            },
            {
                "id_mun": "1108",
                "nombre": "Jiquilisco",
                "cantones": 39,
                "codigo_postal": "03409"
            },
            {
                "id_mun": "1109",
                "nombre": "Jucuapa",
                "cantones": 9,
                "codigo_postal": "03410"
            },
            {
                "id_mun": "1110",
                "nombre": "Jucuarán",
                "cantones": 9,
                "codigo_postal": "03411"
            },
            {
                "id_mun": "1111",
                "nombre": "Mercedes Umaña",
                "cantones": 9,
                "codigo_postal": "03412"
            },
            {
                "id_mun": "1112",
                "nombre": "Nueva Granada",
                "cantones": 11,
                "codigo_postal": "03413"
            },
            {
                "id_mun": "1113",
                "nombre": "Ozatlán",
                "cantones": 6,
                "codigo_postal": "03415"
            },
            {
                "id_mun": "1114",
                "nombre": "Puerto El Triunfo",
                "cantones": 5,
                "codigo_postal": "03417"
            },
            {
                "id_mun": "1115",
                "nombre": "San Agustín",
                "cantones": 20,
                "codigo_postal": "03418"
            },
            {
                "id_mun": "1116",
                "nombre": "San Buenaventura",
                "cantones": 6,
                "codigo_postal": "03419"
            },
            {
                "id_mun": "1117",
                "nombre": "San Dionisio",
                "cantones": 3,
                "codigo_postal": "03420"
            },
            {
                "id_mun": "1118",
                "nombre": "Santa Elena",
                "cantones": 10,
                "codigo_postal": "03422"
            },
            {
                "id_mun": "1119",
                "nombre": "San Francisco Javier",
                "cantones": 9,
                "codigo_postal": "03421"
            },
            {
                "id_mun": "1120",
                "nombre": "Santa María",
                "cantones": 2,
                "codigo_postal": "03423"
            },
            {
                "id_mun": "1121",
                "nombre": "Santiago de María",
                "cantones": 7,
                "codigo_postal": "03424"
            },
            {
                "id_mun": "1122",
                "nombre": "Tecapán",
                "cantones": 4,
                "codigo_postal": "03426"
            },
            {
                "id_mun": "1123",
                "nombre": "Usulután",
                "cantones": 8,
                "codigo_postal": "03401"
            }
        ]
    },
    {
        "id": "12",
        "nombre": "San Miguel",
        "cabecera": "San Miguel",
        "ISO3166_2": "SV-SM",
        "extension": 2077.1,
        "municipios": [
            {
                "id_mun": "1201",
                "nombre": "Carolina",
                "cantones": 5,
                "codigo_postal": "03302"
            },
            {
                "id_mun": "1202",
                "nombre": "Ciudad Barrios",
                "cantones": 11,
                "codigo_postal": "03303"
            },
            {
                "id_mun": "1203",
                "nombre": "Comacarán",
                "cantones": 5,
                "codigo_postal": "03304"
            },
            {
                "id_mun": "1204",
                "nombre": "Chapeltique",
                "cantones": 6,
                "codigo_postal": "03305"
            },
            {
                "id_mun": "1205",
                "nombre": "Chinameca",
                "cantones": 20,
                "codigo_postal": "03306"
            },
            {
                "id_mun": "1206",
                "nombre": "Chirilagua",
                "cantones": 11,
                "codigo_postal": "03307"
            },
            {
                "id_mun": "1207",
                "nombre": "El Tránsito",
                "cantones": 6,
                "codigo_postal": "03309"
            },
            {
                "id_mun": "1208",
                "nombre": "Lolotique",
                "cantones": 9,
                "codigo_postal": "03311"
            },
            {
                "id_mun": "1209",
                "nombre": "Moncagua",
                "cantones": 10,
                "codigo_postal": "03312"
            },
            {
                "id_mun": "1210",
                "nombre": "Nueva Guadalupe",
                "cantones": 3,
                "codigo_postal": "03313"
            },
            {
                "id_mun": "1211",
                "nombre": "Nuevo Edén de San Juan",
                "cantones": 7,
                "codigo_postal": "03314"
            },
            {
                "id_mun": "1212",
                "nombre": "Quelepa",
                "cantones": 3,
                "codigo_postal": "03315"
            },
            {
                "id_mun": "1213",
                "nombre": "San Antonio del Mosco",
                "cantones": 2,
                "codigo_postal": "03316"
            },
            {
                "id_mun": "1214",
                "nombre": "San Gerardo",
                "cantones": 4,
                "codigo_postal": "03318"
            },
            {
                "id_mun": "1215",
                "nombre": "San Jorge",
                "cantones": 5,
                "codigo_postal": "03319"
            },
            {
                "id_mun": "1216",
                "nombre": "San Luis de la Reina",
                "cantones": 4,
                "codigo_postal": "03320"
            },
            {
                "id_mun": "1217",
                "nombre": "San Miguel",
                "cantones": 32,
                "codigo_postal": "03301"
            },
            {
                "id_mun": "1218",
                "nombre": "San Rafael Oriente",
                "cantones": 4,
                "codigo_postal": "03322"
            },
            {
                "id_mun": "1219",
                "nombre": "Sesori",
                "cantones": 11,
                "codigo_postal": "03323"
            },
            {
                "id_mun": "1220",
                "nombre": "Uluazapa",
                "cantones": 3,
                "codigo_postal": "03324"
            }
        ]
    },
    {
        "id": "13",
        "nombre": "Morazán",
        "cabecera": "San Francisco Gotera",
        "ISO3166_2": "SV-MO",
        "extension": 1447.43,
        "municipios": [
            {
                "id_mun": "1301",
                "nombre": "Arambala",
                "cantones": 2,
                "codigo_postal": "03202"
            },
            {
                "id_mun": "1302",
                "nombre": "Cacaopera",
                "cantones": 7,
                "codigo_postal": "03203"
            },
            {
                "id_mun": "1303",
                "nombre": "Corinto",
                "cantones": 5,
                "codigo_postal": "03204"
            },
            {
                "id_mun": "1304",
                "nombre": "Chilanga",
                "cantones": 6,
                "codigo_postal": "03205"
            },
            {
                "id_mun": "1305",
                "nombre": "Delicias de Concepción",
                "cantones": 2,
                "codigo_postal": "03206"
            },
            {
                "id_mun": "1306",
                "nombre": "El Divisadero",
                "cantones": 7,
                "codigo_postal": "03207"
            },
            {
                "id_mun": "1307",
                "nombre": "El Rosario",
                "cantones": 2,
                "codigo_postal": "03208"
            },
            {
                "id_mun": "1308",
                "nombre": "Gualococti",
                "cantones": 2,
                "codigo_postal": "03209"
            },
            {
                "id_mun": "1309",
                "nombre": "Guatajiagua",
                "cantones": 6,
                "codigo_postal": "03210"
            },
            {
                "id_mun": "1310",
                "nombre": "Joateca",
                "cantones": 3,
                "codigo_postal": "03211"
            },
            {
                "id_mun": "1311",
                "nombre": "Jocoaitique",
                "cantones": 2,
                "codigo_postal": "03212"
            },
            {
                "id_mun": "1312",
                "nombre": "Jocoro",
                "cantones": 8,
                "codigo_postal": "03213"
            },
            {
                "id_mun": "1313",
                "nombre": "Lolotiquillo",
                "cantones": 4,
                "codigo_postal": "03214"
            },
            {
                "id_mun": "1314",
                "nombre": "Meanguera",
                "cantones": 4,
                "codigo_postal": "03215"
            },
            {
                "id_mun": "1315",
                "nombre": "Osicala",
                "cantones": 5,
                "codigo_postal": "03216"
            },
            {
                "id_mun": "1316",
                "nombre": "Perquín",
                "cantones": 3,
                "codigo_postal": "03217"
            },
            {
                "id_mun": "1317",
                "nombre": "San Carlos",
                "cantones": 4,
                "codigo_postal": "03218"
            },
            {
                "id_mun": "1318",
                "nombre": "San Fernando",
                "cantones": 2,
                "codigo_postal": "03219"
            },
            {
                "id_mun": "1319",
                "nombre": "San Francisco Gotera",
                "cantones": 6,
                "codigo_postal": "03201"
            },
            {
                "id_mun": "1320",
                "nombre": "San Isidro",
                "cantones": 2,
                "codigo_postal": "03220"
            },
            {
                "id_mun": "1321",
                "nombre": "San Simón",
                "cantones": 6,
                "codigo_postal": "03221"
            },
            {
                "id_mun": "1322",
                "nombre": "Sensembra",
                "cantones": 2,
                "codigo_postal": "03222"
            },
            {
                "id_mun": "1323",
                "nombre": "Sociedad",
                "cantones": 8,
                "codigo_postal": "03223"
            },
            {
                "id_mun": "1324",
                "nombre": "Torola",
                "cantones": 4,
                "codigo_postal": "03224"
            },
            {
                "id_mun": "1325",
                "nombre": "Yamabal",
                "cantones": 4,
                "codigo_postal": "03225"
            },
            {
                "id_mun": "1326",
                "nombre": "Yoloaiquín",
                "cantones": 2,
                "codigo_postal": "03226"
            }
        ]
    },
    {
        "id": "14",
        "nombre": "La Unión",
        "cabecera": "La Unión",
        "ISO3166_2": "SV-UN",
        "extension": 2074.34,
        "municipios": [
            {
                "id_mun": "1401",
                "nombre": "Anamorós",
                "cantones": 8,
                "codigo_postal": "03104"
            },
            {
                "id_mun": "1402",
                "nombre": "Bolívar",
                "cantones": 9,
                "codigo_postal": "03104"
            },
            {
                "id_mun": "1403",
                "nombre": "Concepción de Oriente",
                "cantones": 4,
                "codigo_postal": "03104"
            },
            {
                "id_mun": "1404",
                "nombre": "Conchagua",
                "cantones": 16,
                "codigo_postal": "03104"
            },
            {
                "id_mun": "1405",
                "nombre": "El Carmen",
                "cantones": 11,
                "codigo_postal": "03104"
            },
            {
                "id_mun": "1406",
                "nombre": "El Sauce",
                "cantones": 5,
                "codigo_postal": "03104"
            },
            {
                "id_mun": "1407",
                "nombre": "Intipucá",
                "cantones": 2,
                "codigo_postal": "03104"
            },
            {
                "id_mun": "1408",
                "nombre": "La Unión",
                "cantones": 13,
                "codigo_postal": "03104"
            },
            {
                "id_mun": "1409",
                "nombre": "Lilisque",
                "cantones": 6,
                "codigo_postal": "03104"
            },
            {
                "id_mun": "1410",
                "nombre": "Meanguera del Golfo",
                "cantones": 3,
                "codigo_postal": "03104"
            },
            {
                "id_mun": "1411",
                "nombre": "Nueva Esparta",
                "cantones": 6,
                "codigo_postal": "03104"
            },
            {
                "id_mun": "1412",
                "nombre": "Pasaquina",
                "cantones": 9,
                "codigo_postal": "03104"
            },
            {
                "id_mun": "1413",
                "nombre": "Polorós",
                "cantones": 7,
                "codigo_postal": "03104"
            },
            {
                "id_mun": "1414",
                "nombre": "San Alejo",
                "cantones": 19,
                "codigo_postal": "03104"
            },
            {
                "id_mun": "1415",
                "nombre": "San José",
                "cantones": 4,
                "codigo_postal": "03104"
            },
            {
                "id_mun": "1416",
                "nombre": "Santa Rosa de Lima",
                "cantones": 8,
                "codigo_postal": "03104"
            },
            {
                "id_mun": "1417",
                "nombre": "Yayantique",
                "cantones": 4,
                "codigo_postal": "03104"
            },
            {
                "id_mun": "1418",
                "nombre": "Yucuaiquín",
                "cantones": 9,
                "codigo_postal": "03104"
            }
        ]
    }
]