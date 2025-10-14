import { useState, useEffect } from "react";
import { Dropdown } from "@/components/ui/dropdown/Dropdown";
import Button from "@/ui/button/Button";
import { FaSlidersH } from "react-icons/fa";
import { departments, brandsGasStation, IMunicipality } from "./HeaderData/DropDownFilterData";
import Select from "@/components/form/Select";
import { ChevronDownIcon } from "@/icons";
import { useFilters } from "@/context/FiltersContext";

const DropdownFilters: React.FC = () => {
    const {
        departamento,
        municipio,
        marca,
        setDepartamento,
        setMunicipio,
        setMarca
    } = useFilters();

    const [isOpen, setIsOpen] = useState(false);
    const [tempDepartamento, setTempDepartamento] = useState<string | null>(departamento);
    const [tempMunicipio, setTempMunicipio] = useState<string | null>(municipio);
    const [tempMarca, setTempMarca] = useState<string | null>(marca);

    // Función para normalizar texto (minúsculas y sin tildes)
    const normalizeText = (text: string): string => {
        // return text
        //     .toLowerCase()
        //     .normalize("NFD")
        //     .replace(/[\u0300-\u036f]/g, "");
        return text
            .toLowerCase();
    };

    // Sincronizar valores temporales con el contexto cuando se abre el dropdown
    useEffect(() => {
        if (isOpen) {
            setTempDepartamento(departamento);
            setTempMunicipio(municipio);
            setTempMarca(marca);
        }
    }, [isOpen, departamento, municipio, marca]);

    const municipalities: IMunicipality[] = tempDepartamento && tempDepartamento !== '0'
        ? departments.find(dept => normalizeText(dept.nombre) === tempDepartamento)?.municipios || []
        : [];

    // Resetear municipio si cambia el departamento
    useEffect(() => {
        if (tempDepartamento === '0' || !tempDepartamento) {
            setTempMunicipio(null);
        }
    }, [tempDepartamento]);

    const handleSelectChangeDepartment = (value: string) => {
        if (value === '0') {
            setTempDepartamento(null);
            setTempMunicipio(null);
        } else {
            // Buscar el nombre del departamento y normalizarlo
            const dept = departments.find(d => d.id === value);
            if (dept) {
                setTempDepartamento(normalizeText(dept.nombre));
            }
            setTempMunicipio(null);
        }
    };

    const handleSelectChangeMunicipality = (value: string) => {
        if (value === '0') {
            setTempMunicipio(null);
        } else {
            // Buscar el nombre del municipio y normalizarlo
            const mun = municipalities.find(m => m.id_mun === value);
            if (mun) {
                setTempMunicipio(normalizeText(mun.nombre));
            }
        }
    };

    const handleSelectChangeGasStation = (value: string) => {
        setTempMarca(value === '0' ? null : value);
    };

    const handleApplyFilters = () => {
        setDepartamento(tempDepartamento);
        setMunicipio(tempMunicipio);
        setMarca(tempMarca);
        closeDropdown();
    };

    function toggleDropdown() {
        setIsOpen(!isOpen);
    }

    function closeDropdown() {
        setIsOpen(false);
    }

    // Función auxiliar para obtener el value seleccionado del departamento
    const getSelectedDepartmentValue = (): string => {
        if (!tempDepartamento) return '0';
        const dept = departments.find(d => normalizeText(d.nombre) === tempDepartamento);
        return dept?.id || '0';
    };

    // Función auxiliar para obtener el value seleccionado del municipio
    const getSelectedMunicipalityValue = (): string => {
        if (!tempMunicipio) return '0';
        const mun = municipalities.find(m => normalizeText(m.nombre) === tempMunicipio);
        return mun?.id_mun || '0';
    };

    return (
        <div className="relative inline-block">
            <button
                className="inline-flex items-center gap-2 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 shadow-sm transition-all"
                onClick={toggleDropdown}
            >
                <FaSlidersH className="w-4 h-4" />
                Filtros
                {(departamento || municipio || marca) && (
                    <span className="inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-blue-600 rounded-full">
                        {[departamento, municipio, marca].filter(Boolean).length}
                    </span>
                )}
            </button>

            <Dropdown
                isOpen={isOpen}
                onClose={closeDropdown}
                className="absolute left-0 top-full z-40 mt-2 w-full min-w-[260px] rounded-2xl border border-gray-200 bg-white p-3 shadow-theme-lg dark:border-gray-800 dark:bg-[#1E2635]"
            >
                <div className="space-y-3">
                    <div className="relative">
                        <Select
                            options={[
                                { value: '0', label: 'Todos' },
                                ...departments.map((dept) => ({ value: dept.id, label: dept.nombre }))
                            ]}
                            placeholder="Departamento"
                            onChange={handleSelectChangeDepartment}
                            defaultValue={getSelectedDepartmentValue()}
                            className="dark:bg-dark-900"
                        />
                        <span className="absolute text-gray-500 -translate-y-1/2 pointer-events-none right-3 top-1/2 dark:text-gray-400">
                            <ChevronDownIcon />
                        </span>
                    </div>

                    <div className="relative">
                        <Select
                            options={[
                                { value: '0', label: 'Todos' },
                                ...municipalities.map((mun) => ({ value: mun.id_mun, label: mun.nombre }))
                            ]}
                            placeholder="Municipio"
                            onChange={handleSelectChangeMunicipality}
                            defaultValue={getSelectedMunicipalityValue()}
                            className="dark:bg-dark-900"
                        />
                        <span className="absolute text-gray-500 -translate-y-1/2 pointer-events-none right-3 top-1/2 dark:text-gray-400">
                            <ChevronDownIcon />
                        </span>
                    </div>

                    <div className="relative">
                        <Select
                            options={[
                                { value: '0', label: 'Todas' },
                                ...brandsGasStation.map((brand) => ({ value: brand.code, label: brand.name }))
                            ]}
                            placeholder="Gasolinera"
                            onChange={handleSelectChangeGasStation}
                            defaultValue={tempMarca || '0'}
                            className="dark:bg-dark-900"
                        />
                        <span className="absolute text-gray-500 -translate-y-1/2 pointer-events-none right-3 top-1/2 dark:text-gray-400">
                            <ChevronDownIcon />
                        </span>
                    </div>

                    <Button variant="primary" className="w-full" onClick={handleApplyFilters}>
                        Aplicar Filtros
                    </Button>
                </div>
            </Dropdown>
        </div>
    );
};

export default DropdownFilters;