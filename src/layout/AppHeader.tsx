"use client";
import { ThemeToggleButton } from "@/components/common/ThemeToggleButton";
import NotificationDropdown from "@/components/header/NotificationDropdown";
import UserDropdown from "@/components/header/UserDropdown";
import { useSidebar } from "@/context/SidebarContext";
import {
  FaMapMarkerAlt,
  FaSearch,
  FaFilter,
  FaGasPump,
  FaCity,
  FaBuilding,
} from "react-icons/fa";
import React, { useState, useEffect, useRef } from "react";

const AppHeader: React.FC = () => {
  const [departamentos, setDepartamentos] = useState<string[]>([]);
  const [municipios, setMunicipios] = useState<string[]>([]);
  const [marcas, setMarcas] = useState<string[]>([]);
  const [selectedDepartamento, setSelectedDepartamento] = useState("");
  const [selectedMunicipio, setSelectedMunicipio] = useState("");
  const [selectedMarca, setSelectedMarca] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSort, setSelectedSort] = useState("mas barato");

  const { toggleSidebar, toggleMobileSidebar } = useSidebar();
  const inputRef = useRef<HTMLInputElement>(null);
  const API_BASE =
    "https://gasolina-sv-api-production.up.railway.app/api/v1/gasolineras";

  useEffect(() => {
    fetchUniqueValues("departamento");
    fetchUniqueValues("marca");
  }, []);

  useEffect(() => {
    if (selectedDepartamento) {
      fetchUniqueValues("municipio", selectedDepartamento);
    } else {
      setMunicipios([]);
      setSelectedMunicipio("");
    }
  }, [selectedDepartamento]);

  const fetchUniqueValues = async (field: string, filter?: string) => {
    let url = `${API_BASE}?page=0&size=100`;
    if (filter) {
      const param = field === "municipio" ? "departamento" : field;
    url += `&${param}=${encodeURIComponent(filter)}`;
    }
    const res = await fetch(url);
    const data = await res.json();
    const unique = [...new Set(data.content.map((item: any) => item[field]).filter(Boolean))].sort();
    if (field === "departamento") setDepartamentos(unique);
    else if (field === "municipio") setMunicipios(unique);
    else if (field === "marca") setMarcas(unique);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key === "k") {
        event.preventDefault();
        inputRef.current?.focus();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 shadow-sm">
      <div className="flex flex-col gap-3 px-4 py-3 lg:flex-row lg:items-center lg:justify-between lg:px-6">
        {/* Left Section */}
        <div className="flex items-center justify-between w-full lg:w-auto">
          <div className="flex items-center gap-3">
            <ThemeToggleButton />
            <h1 className="text-lg font-semibold text-gray-800 dark:text-gray-200 hidden sm:block">
              Gasolineras SV
            </h1>
          </div>
          <button
            onClick={() => (window.innerWidth >= 1024 ? toggleSidebar() : toggleMobileSidebar())}
            className="lg:hidden text-gray-600 dark:text-gray-300"
          >
            <FaFilter className="w-5 h-5" />
          </button>
        </div>

        {/* Filters */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 w-full">
          <div className="relative">
            <FaBuilding className="absolute left-3 top-3 text-gray-400" />
            <select
              value={selectedDepartamento}
              onChange={(e) => setSelectedDepartamento(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-sm rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Departamento</option>
              {departamentos.map((d) => (
                <option key={d}>{d}</option>
              ))}
            </select>
          </div>

          <div className="relative">
            <FaCity className="absolute left-3 top-3 text-gray-400" />
            <select
              value={selectedMunicipio}
              onChange={(e) => setSelectedMunicipio(e.target.value)}
              disabled={!selectedDepartamento}
              className="w-full pl-9 pr-3 py-2 text-sm rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
            >
              <option value="">Municipio</option>
              {municipios.map((m) => (
                <option key={m}>{m}</option>
              ))}
            </select>
          </div>

          <div className="relative">
            <FaGasPump className="absolute left-3 top-3 text-gray-400" />
            <select
              value={selectedMarca}
              onChange={(e) => setSelectedMarca(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-sm rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Marca</option>
              {marcas.map((m) => (
                <option key={m}>{m}</option>
              ))}
            </select>
          </div>

          <div className="relative">
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
            <input
              ref={inputRef}
              type="text"
              placeholder="Buscar estación..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-sm rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 justify-end w-full lg:w-auto pt-2 lg:pt-0">
          <select
            value={selectedSort}
            onChange={(e) => setSelectedSort(e.target.value)}
            className="hidden sm:block px-3 py-2 text-sm rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="mas barato">Más barato</option>
          </select>

          <button className="flex items-center gap-4 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500">
            <FaMapMarkerAlt className="w-4 h-4" />
            Cerca de mí
          </button>

        </div>
      </div>
    </header>
  );
};

export default AppHeader;
