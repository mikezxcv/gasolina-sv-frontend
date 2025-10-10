'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface FilterContextType {
  departamento: string | null;
  municipio: string | null;
  marca: string | null;
  searchTerm: string;
  setDepartamento: (value: string | null) => void;
  setMunicipio: (value: string | null) => void;
  setMarca: (value: string | null) => void;
  setSearchTerm: (value: string) => void;
  resetFilters: () => void;
}

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export const FilterProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [departamento, setDepartamento] = useState<string | null>(null);
  const [municipio, setMunicipio] = useState<string | null>(null);
  const [marca, setMarca] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const resetFilters = () => {
    setDepartamento(null);
    setMunicipio(null);
    setMarca(null);
    setSearchTerm('');
  };

  return (
    <FilterContext.Provider
      value={{
        departamento,
        municipio,
        marca,
        searchTerm,
        setDepartamento,
        setMunicipio,
        setMarca,
        setSearchTerm,
        resetFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilters = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error('useFilters must be used within a FilterProvider');
  }
  return context;
};