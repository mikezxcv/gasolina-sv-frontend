"use client";

import { ThemeToggleButton } from "@/components/common/ThemeToggleButton";
import { FaMapMarkerAlt, FaSearch, FaSlidersH, FaGasPump } from "react-icons/fa";
import React, { useState, useRef, useEffect } from "react";
import DropdownFilters from "./DropdownFilters";

const AppHeader: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleNearMeClick = () => {
    window.open("/mapa", "_blank");
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
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 shadow-[0_2px_6px_-1px_rgba(0,0,0,0.05)]">
      <div className="flex flex-wrap items-center justify-between gap-4 px-6 py-4 max-w-7xl mx-auto">
        {/* Left Section */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <ThemeToggleButton />
          <h1 className="text-lg font-semibold text-gray-900 dark:text-gray-100 tracking-tight whitespace-nowrap">
            <FaGasPump className="inline-block mr-2 text-blue-600" />
            Gasolina SV
          </h1>
          <button
            onClick={handleNearMeClick}
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2.5 rounded-xl shadow-sm transition-all duration-200 active:scale-95 whitespace-nowrap"
          >
            <FaMapMarkerAlt className="w-4 h-4" />
            <span>Cerca de mí</span>
          </button>
        </div>

        {/* Search & Filters */}
        <div className="flex flex-1 items-center gap-3 w-full">
          <DropdownFilters />
          <div className="relative flex-1 min-w-0">
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              ref={inputRef}
              type="text"
              placeholder="Buscar estación..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;