'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Search, X, Loader } from 'lucide-react';

// Interfaces TypeScript
interface SearchResult {
  id: string;
  title: string;
  description?: string;
  url: string;
  category: string;
  type: 'page' | 'document' | 'service' | 'information';
}

interface HeaderSearchProps {
  onClose?: () => void;
  className?: string;
}

const HeaderSearch: React.FC<HeaderSearchProps> = ({ onClose, className = '' }) => {
  // Estados tipados
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [showResults, setShowResults] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);

  // Referencias tipadas
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Datos de ejemplo para búsqueda
  const searchData: SearchResult[] = [
    {
      id: '1',
      title: 'Pagar Factura en Línea',
      description: 'Realiza el pago de tu factura de energía eléctrica de forma segura',
      url: '/servicios/pagar-factura',
      category: 'Servicios',
      type: 'service'
    },
    {
      id: '2',
      title: 'Consultar Factura',
      description: 'Consulta tu factura actual y el histórico de consumos',
      url: '/servicios/consultar-factura',
      category: 'Servicios',
      type: 'service'
    },
    {
      id: '3',
      title: 'Reportar Daño o Emergencia',
      description: 'Reporta interrupciones del servicio o emergencias eléctricas',
      url: '/servicios/reportar-dano',
      category: 'Servicios',
      type: 'service'
    },
    {
      id: '4',
      title: 'Tarifas de Energía',
      description: 'Consulta las tarifas vigentes y su estructura',
      url: '/tarifas',
      category: 'Información',
      type: 'information'
    },
    {
      id: '5',
      title: 'Puntos de Atención',
      description: 'Encuentra nuestras oficinas y horarios de atención',
      url: '/puntos-de-atencion',
      category: 'Información',
      type: 'information'
    },
    {
      id: '6',
      title: 'PQR - Peticiones, Quejas y Reclamos',
      description: 'Presenta tu petición, queja o reclamo',
      url: '/pqr',
      category: 'Atención al Cliente',
      type: 'service'
    },
    {
      id: '7',
      title: 'Suspensiones Programadas',
      description: 'Consulta las interrupciones programadas en tu zona',
      url: '/suspensiones-programadas',
      category: 'Información',
      type: 'information'
    },
    {
      id: '8',
      title: 'Nuevo Usuario',
      description: 'Solicita la instalación de un nuevo servicio',
      url: '/servicios/nuevo-usuario',
      category: 'Servicios',
      type: 'service'
    }
  ];

  // Función de búsqueda mejorada
  const performSearch = (term: string): SearchResult[] => {
    if (!term.trim()) return [];

    const searchTermLower = term.toLowerCase().trim();
    
    return searchData.filter(item => {
      const titleMatch = item.title.toLowerCase().includes(searchTermLower);
      const descriptionMatch = item.description?.toLowerCase().includes(searchTermLower) || false;
      const categoryMatch = item.category.toLowerCase().includes(searchTermLower);
      
      return titleMatch || descriptionMatch || categoryMatch;
    }).slice(0, 6); // Limitar a 6 resultados
  };

  // Manejar cambios en el input de búsqueda
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    setSelectedIndex(-1);

    if (value.trim()) {
      setIsLoading(true);
      
      // Simular delay de búsqueda
      setTimeout(() => {
        const searchResults = performSearch(value);
        setResults(searchResults);
        setShowResults(true);
        setIsLoading(false);
      }, 200);
    } else {
      setResults([]);
      setShowResults(false);
      setIsLoading(false);
    }
  };

  // Manejar navegación con teclado
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!showResults || results.length === 0) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex(prev => 
          prev < results.length - 1 ? prev + 1 : 0
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex(prev => 
          prev > 0 ? prev - 1 : results.length - 1
        );
        break;
      case 'Enter':
        e.preventDefault();
        if (selectedIndex >= 0 && results[selectedIndex]) {
          handleResultClick(results[selectedIndex]);
        }
        break;
      case 'Escape':
        setShowResults(false);
        setSelectedIndex(-1);
        inputRef.current?.blur();
        break;
    }
  };

  // Manejar click en resultado
  const handleResultClick = (result: SearchResult) => {
    window.location.href = result.url;
    setShowResults(false);
    setSearchTerm('');
    onClose?.();
  };

  // Limpiar búsqueda
  const clearSearch = () => {
    setSearchTerm('');
    setResults([]);
    setShowResults(false);
    setSelectedIndex(-1);
    inputRef.current?.focus();
  };

  // Manejar clicks fuera del componente - CORREGIDO
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && event.target instanceof Node && !searchRef.current.contains(event.target)) {
        setShowResults(false);
        setSelectedIndex(-1);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Enfocar input al montar
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // Obtener icono según el tipo
  const getResultIcon = (type: SearchResult['type']) => {
    switch (type) {
      case 'service':
        return '⚡';
      case 'document':
        return '📄';
      case 'information':
        return 'ℹ️';
      default:
        return '🔍';
    }
  };

  return (
    <div className={`relative w-full max-w-2xl ${className}`} ref={searchRef}>
      {/* Campo de búsqueda */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          {isLoading ? (
            <Loader className="h-5 w-5 text-gray-400 animate-spin" />
          ) : (
            <Search className="h-5 w-5 text-gray-400" />
          )}
        </div>
        
        <input
          ref={inputRef}
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onFocus={() => {
            if (searchTerm.trim()) {
              setShowResults(true);
            }
          }}
          className="block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-xl leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
          placeholder="Buscar servicios, información, tarifas..."
          autoComplete="off"
        />
        
        {searchTerm && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
            <button
              onClick={clearSearch}
              className="h-5 w-5 text-gray-400 hover:text-gray-600 transition-colors"
              type="button"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>

      {/* Resultados de búsqueda */}
      {showResults && (
        <div className="absolute z-50 w-full mt-2 bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden">
          {results.length > 0 ? (
            <>
              <div className="px-4 py-2 bg-gray-50 border-b border-gray-200">
                <p className="text-sm text-gray-600">
                  {results.length} resultado{results.length !== 1 ? 's' : ''} encontrado{results.length !== 1 ? 's' : ''}
                </p>
              </div>
              
              <div className="max-h-80 overflow-y-auto">
                {results.map((result, index) => (
                  <button
                    key={result.id}
                    onClick={() => handleResultClick(result)}
                    className={`w-full px-4 py-3 text-left hover:bg-gray-50 focus:bg-gray-50 focus:outline-none transition-colors border-b border-gray-100 last:border-b-0 ${
                      index === selectedIndex ? 'bg-blue-50 border-blue-200' : ''
                    }`}
                  >
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 mt-1">
                        <span className="text-lg">{getResultIcon(result.type)}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-2">
                          <h4 className="text-sm font-semibold text-gray-900 truncate">
                            {result.title}
                          </h4>
                          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                            {result.category}
                          </span>
                        </div>
                        {result.description && (
                          <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                            {result.description}
                          </p>
                        )}
                      </div>
                      <div className="flex-shrink-0">
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
              
              <div className="px-4 py-2 bg-gray-50 border-t border-gray-200">
                <p className="text-xs text-gray-500 text-center">
                  Usa las flechas ↑↓ para navegar y Enter para seleccionar
                </p>
              </div>
            </>
          ) : searchTerm.trim() && !isLoading ? (
            <div className="px-4 py-8 text-center">
              <div className="text-gray-400 mb-2">
                <Search className="h-8 w-8 mx-auto" />
              </div>
              <p className="text-sm text-gray-600 mb-2">
                No encontramos resultados para "{searchTerm}"
              </p>
              <p className="text-xs text-gray-500">
                Intenta con otros términos o revisa la ortografía
              </p>
            </div>
          ) : null}
        </div>
      )}

      {/* Sugerencias rápidas cuando no hay búsqueda */}
      {!searchTerm && showResults && (
        <div className="absolute z-50 w-full mt-2 bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden">
          <div className="px-4 py-2 bg-gray-50 border-b border-gray-200">
            <p className="text-sm text-gray-600 font-medium">Búsquedas populares</p>
          </div>
          
          <div className="max-h-64 overflow-y-auto">
            {searchData.slice(0, 4).map((item, index) => (
              <button
                key={item.id}
                onClick={() => handleResultClick(item)}
                className="w-full px-4 py-3 text-left hover:bg-gray-50 focus:bg-gray-50 focus:outline-none transition-colors border-b border-gray-100 last:border-b-0"
              >
                <div className="flex items-center space-x-3">
                  <span className="text-lg">{getResultIcon(item.type)}</span>
                  <span className="text-sm font-medium text-gray-900">{item.title}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default HeaderSearch;