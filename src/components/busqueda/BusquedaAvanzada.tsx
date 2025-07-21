import React, { useState } from 'react';
import BusquedaBase from './BusquedaBase';

const BusquedaAvanzada = ({ 
  categorias = [], 
  filtrosIniciales = {},
  onSearch,
  ...props 
}) => {
  const [filtrosAbiertos, setFiltrosAbiertos] = useState(false);
  const [filtros, setFiltros] = useState(filtrosIniciales);

  const handleBusqueda = (query) => {
    if (onSearch) {
      onSearch({ query, ...filtros });
    }
  };

  const toggleFiltros = () => {
    setFiltrosAbiertos(!filtrosAbiertos);
  };

  const actualizarFiltro = (clave, valor) => {
    setFiltros(prevFiltros => ({
      ...prevFiltros,
      [clave]: valor
    }));
  };

  return (
    <div className="w-full">
      <BusquedaBase 
        variante="avanzada" 
        onSearch={handleBusqueda}
        {...props} 
      />
      
      <button 
        type="button" 
        className="flex items-center justify-center bg-transparent border-none text-blue-600 text-sm cursor-pointer mt-2 px-2 py-1 rounded hover:bg-blue-50 transition-colors duration-200"
        onClick={toggleFiltros}
      >
        Filtros avanzados
        <svg 
          className={`w-4 h-4 ml-1 transition-transform duration-300 ${filtrosAbiertos ? 'rotate-180' : ''}`}
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>
      
      {filtrosAbiertos && (
        <div className="mt-4 p-4 border border-gray-300 rounded-lg bg-gray-50">
          {categorias.length > 0 && (
            <div className="mb-4">
              <label className="block font-medium mb-2 text-gray-700">
                Categoría
              </label>
              <select 
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={filtros.categoria || ''}
                onChange={(e) => actualizarFiltro('categoria', e.target.value)}
              >
                <option value="">Todas las categorías</option>
                {categorias.map(cat => (
                  <option key={cat.id} value={cat.id}>{cat.nombre}</option>
                ))}
              </select>
            </div>
          )}
          
          <div className="mb-4">
            <label className="block font-medium mb-2 text-gray-700">
              Fecha
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs text-gray-500 mb-1">
                  Desde
                </label>
                <input 
                  type="date" 
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={filtros.fechaDesde || ''}
                  onChange={(e) => actualizarFiltro('fechaDesde', e.target.value)}
                />
              </div>
              <div>
                <label className="block text-xs text-gray-500 mb-1">
                  Hasta
                </label>
                <input 
                  type="date" 
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={filtros.fechaHasta || ''}
                  onChange={(e) => actualizarFiltro('fechaHasta', e.target.value)}
                />
              </div>
            </div>
          </div>
          
          <div className="mb-0">
            <label className="block font-medium mb-2 text-gray-700">
              Estado
            </label>
            <div className="flex flex-wrap gap-3">
              <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                <input 
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                  checked={filtros.activo === true}
                  onChange={(e) => actualizarFiltro('activo', e.target.checked)}
                />
                Activo
              </label>
              <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                <input 
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                  checked={filtros.archivado === true}
                  onChange={(e) => actualizarFiltro('archivado', e.target.checked)}
                />
                Archivado
              </label>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BusquedaAvanzada;