import { useState } from "react";
import { Dropdown } from "@/components/ui/dropdown/Dropdown";
import { DropdownItem } from "@/components/ui/dropdown/DropdownItem";
import Button from "@/ui/button/Button";
import { FaSlidersH } from "react-icons/fa";
import { departments, municipalities, brandsGasStation } from "./HeaderData/DropDownFilterData";
import Label from "@/components/form/Label";
import Select from "@/components/form/Select";
import { ChevronDownIcon } from "@/icons";
import { options } from "@fullcalendar/core/preact.js";

const handleSelectChangeDepartment = (value: string) => {
    console.log("Selected department:", value);
};

const handleSelectChangeMunicipality = (value: string) => {
    console.log("Selected municipality:", value);
};

const handleSelectChangeGasStation = (value: string) => {
    console.log("Selected gas station:", value);
};

const DropdownFilters: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    function toggleDropdown() {
        setIsOpen(!isOpen);
    }

    function closeDropdown() {
        setIsOpen(false);
    }

    return (
        <div className="relative inline-block">
            {/* <Button
                variant="info"
                onClick={toggleDropdown}
                className="inline-flex items-center gap-2 px-4 py-3 text-sm font-medium text-white rounded-lg dropdown-toggle bg-brand-500 hover:bg-brand-600">
                <FaSlidersH className="w-4 h-4" />
                Filtros
            </Button> */}

            <button className="inline-flex items-center gap-2 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 shadow-sm transition-all"
                onClick={toggleDropdown}>
                <FaSlidersH className="w-4 h-4" />
                Filtros
            </button>

            <Dropdown
                isOpen={isOpen}
                onClose={closeDropdown}
                className="absolute left-0 top-full z-40 mt-2 w-full min-w-[260px] rounded-2xl border border-gray-200 bg-white p-3 shadow-theme-lg dark:border-gray-800 dark:bg-[#1E2635]"
            >
                <div>
                    <div>
                        <div className="relative">
                            <Select
                                options={departments.map((dept) => ({ value: dept.code, label: dept.name }))}
                                placeholder="Departamento"
                                onChange={handleSelectChangeDepartment}
                                className="dark:bg-dark-900"
                            />
                            <span className="absolute text-gray-500 -translate-y-1/2 pointer-events-none right-3 top-1/2 dark:text-gray-400">
                                <ChevronDownIcon />
                            </span>
                        </div>
                    </div>
                    <div>
                        <div className="relative">
                            <Select
                                options={municipalities.map((mun) => ({ value: mun.code, label: mun.name }))}
                                placeholder="Municipio"
                                onChange={handleSelectChangeMunicipality}
                                className="dark:bg-dark-900"
                            />
                            <span className="absolute text-gray-500 -translate-y-1/2 pointer-events-none right-3 top-1/2 dark:text-gray-400">
                                <ChevronDownIcon />
                            </span>
                        </div>
                    </div>
                    <div>
                        <div className="relative">
                            <Select
                                options={brandsGasStation.map((brand) => ({ value: brand.code, label: brand.name }))}
                                placeholder="Gasolinera"
                                onChange={handleSelectChangeGasStation}
                                className="dark:bg-dark-900"
                            />
                            <span className="absolute text-gray-500 -translate-y-1/2 pointer-events-none right-3 top-1/2 dark:text-gray-400">
                                <ChevronDownIcon />
                            </span>
                        </div>
                    </div>
                    <div>
                        <Button variant="primary" className="w-full mt-3" onClick={closeDropdown}>
                            Aplicar Filtros
                        </Button>
                    </div>
                </div>
            </Dropdown>
        </div>
    );
};

export default DropdownFilters;
