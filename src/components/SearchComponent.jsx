"use client";
import React, { useState, useRef, useEffect } from 'react';
import { Search, X, ChevronRight, Clock, Lightbulb, FileText, Phone, MapPin, Calculator, CreditCard, AlertCircle, User, Building, Zap, Home, Settings } from 'lucide-react';
import { useRouter } from 'next/navigation';

// Base de datos MEGA COMPLETA con TODAS las variaciones posibles
const SITE_CONTENT = [
  // PAGOS Y FACTURACIÓN - Todas las variaciones posibles
  { 
    id: 'factura-pago', 
    text: 'Pagar factura', 
    url: '/servicios/pagar-factura',
    category: 'Pagos',
    icon: <CreditCard size={16} />,
    keywords: [
      // Pagar
      'pagar', 'pago', 'pagos', 'cancelar', 'cancela', 'abonar', 'abono',
      // Factura  
      'factura', 'facturas', 'cuenta', 'cuentas', 'recibo', 'recibos', 'bill',
      // Dinero
      'dinero', 'plata', 'efectivo', 'tarjeta', 'debito', 'credito',
      // PSE, bancos
      'pse', 'banco', 'bancos', 'online', 'linea', 'virtual', 'internet',
      // Errores comunes
      'faktura', 'pagar faktura', 'como pago', 'donde pago', 'pago factura'
    ]
  },
  { 
    id: 'consulta-factura', 
    text: 'Consultar factura', 
    url: '/servicios/consulta-facturas',
    category: 'Pagos',
    icon: <FileText size={16} />,
    keywords: [
      'consultar', 'consulta', 'ver', 'revisar', 'mirar', 'buscar',
      'factura', 'facturas', 'cuenta', 'cuentas', 'recibo', 'recibos',
      'estado', 'valor', 'cuanto', 'debo', 'debe', 'saldo',
      'historial', 'historico', 'anterior', 'anteriores',
      'consultar factura', 'ver factura', 'estado cuenta'
    ]
  },
  { 
    id: 'duplicado-factura', 
    text: 'Duplicado de factura', 
    url: '/servicios/duplicado-factura',
    category: 'Pagos',
    icon: <FileText size={16} />,
    keywords: [
      'duplicado', 'copia', 'nueva', 'otro', 'otra', 'segundo',
      'perdida', 'perdi', 'perdio', 'extravie', 'extraviada',
      'dañada', 'rota', 'maltratada', 'no tengo', 'sin factura',
      'reimprimir', 'imprimir', 'generar', 'descargar'
    ]
  },
  
  // TARIFAS - Súper completo
  { 
    id: 'tarifas-energia', 
    text: 'Tarifas de energía', 
    url: '/tarifas',
    category: 'Tarifas',
    icon: <Calculator size={16} />,
    keywords: [
      'tarifas', 'tarifa', 'precios', 'precio', 'costo', 'costos', 'valor', 'valores',
      'kwh', 'kw', 'kilowatio', 'kilowatios', 'energia', 'electricidad', 'luz',
      'estrato', 'estratos', '1', '2', '3', '4', '5', '6',
      'residencial', 'comercial', 'industrial', 'oficial',
      'cuanto cuesta', 'cuanto vale', 'que precio', 'cobran',
      'tarifa energia', 'precio luz', 'costo electricidad',
      // Errores comunes
      'tarfas', 'tariffa', 'precios luz', 'valor energia'
    ]
  },
  { 
    id: 'calculadora-consumo', 
    text: 'Calculadora de consumo', 
    url: '/servicios/calculadora-consumo',
    category: 'Tarifas',
    icon: <Calculator size={16} />,
    keywords: [
      'calculadora', 'calcular', 'calculos', 'calculo', 'simulador', 'simular',
      'consumo', 'gasto', 'gastos', 'cuanto', 'gastare', 'consumire',
      'electrodomesticos', 'nevera', 'televisor', 'aire', 'plancha',
      'kwh', 'energia', 'electricidad', 'luz', 'factura',
      'calculadora consumo', 'calcular gasto', 'simular factura'
    ]
  },
  
  // SERVICIOS TÉCNICOS - Todo lo que puede fallar
  { 
    id: 'cortes-programados', 
    text: 'Suspensiones programadas', 
    url: '/suspensiones-programadas',
    category: 'Servicios',
    icon: <AlertCircle size={16} />,
    keywords: [
      'cortes', 'corte', 'suspension', 'suspensiones', 'suspender',
      'programados', 'programado', 'programadas', 'mantenimiento',
      'sin luz', 'no hay luz', 'apagon', 'apagones', 'interrupcion',
      'cuando', 'donde', 'que horas', 'horario', 'hora',
      'barrio', 'sector', 'zona', 'comuna', 'vereda',
      // Neiva y municipios
      'neiva', 'garzon', 'pitalito', 'la plata', 'huila',
      'cortes programados', 'mantenimiento luz', 'suspension energia'
    ]
  },
  { 
    id: 'reportar-dano', 
    text: 'Reportar daño', 
    url: '/servicios/reportar-dano',
    category: 'Servicios',
    icon: <AlertCircle size={16} />,
    keywords: [
      'reportar', 'reporto', 'informar', 'avisar', 'denunciar',
      'daño', 'daños', 'dano', 'problema', 'problemas', 'falla', 'fallas',
      'averia', 'averias', 'emergencia', 'urgente',
      'sin luz', 'no hay luz', 'se fue', 'apagon', 'oscuro',
      'poste', 'cable', 'transformador', 'medidor', 'contador',
      'chispa', 'chispas', 'corto', 'quemado', 'humo',
      'reportar daño', 'sin energia', 'emergencia luz'
    ]
  },
  { 
    id: 'nueva-conexion', 
    text: 'Nueva conexión', 
    url: '/servicios/nueva-conexion',
    category: 'Servicios',
    icon: <Zap size={16} />,
    keywords: [
      'nueva', 'nuevo', 'conexion', 'conectar', 'instalar', 'instalacion',
      'acometida', 'servicio', 'luz', 'energia', 'electricidad',
      'casa', 'local', 'negocio', 'apartamento', 'finca',
      'solicitar', 'pedir', 'tramitar', 'como', 'requisitos',
      'nueva conexion', 'instalar luz', 'pedir energia'
    ]
  },
  { 
    id: 'reconexion', 
    text: 'Reconexión del servicio', 
    url: '/servicios/reconexion',
    category: 'Servicios',
    icon: <Zap size={16} />,
    keywords: [
      'reconexion', 'reconectar', 'reconeccion', 'activar', 'reactivar',
      'suspendido', 'cortado', 'desconectado', 'bloqueado',
      'pagar', 'pagando', 'pague', 'cancelar', 'deuda',
      'volver', 'conectar', 'servicio', 'luz', 'energia'
    ]
  },
  
  // PUNTOS Y UBICACIONES - Súper detallado
  { 
    id: 'puntos-pago', 
    text: 'Puntos de pago', 
    url: '/puntos-de-pago',
    category: 'Pagos',
    icon: <MapPin size={16} />,
    keywords: [
      'puntos', 'donde', 'ubicacion', 'lugares', 'sitios',
      'pago', 'pagar', 'pagos', 'cancelar',
      'oficinas', 'oficina', 'sedes', 'sede',
      'bancos', 'banco', 'corresponsales', 'cajeros',
      'efecty', 'baloto', 'supergiros', 'western', 'union',
      'drogas', 'farmacias', 'tiendas', 'almacenes',
      // Ubicaciones específicas
      'neiva', 'garzon', 'pitalito', 'la plata', 'cerca',
      'donde pagar', 'puntos pago', 'oficinas pago'
    ]
  },
  { 
    id: 'puntos-atencion', 
    text: 'Puntos de atención', 
    url: '/puntos-de-atencion',
    category: 'Contacto',
    icon: <MapPin size={16} />,
    keywords: [
      'puntos', 'oficinas', 'sedes', 'atencion', 'servicio',
      'donde', 'ubicacion', 'direccion', 'direcciones',
      'presencial', 'personalmente', 'ir', 'visitar',
      'neiva', 'garzon', 'pitalito', 'la plata', 'huila',
      'horarios', 'horario', 'abierto', 'cerrado', 'funciona',
      'puntos atencion', 'oficinas electrohuila', 'sedes electrohuila'
    ]
  },
  
  // CONTACTO - Todas las formas posibles
  { 
    id: 'contactenos', 
    text: 'Contáctenos', 
    url: '/contactenos',
    category: 'Contacto',
    icon: <Phone size={16} />,
    keywords: [
      'contacto', 'contactar', 'contactenos', 'comunicarse',
      'telefono', 'telefonos', 'celular', 'llamar', 'llamada',
      'email', 'correo', 'mail', 'escribir', 'enviar',
      'whatsapp', 'chat', 'mensaje', 'mensajes',
      'pqr', 'pqrs', 'peticion', 'queja', 'reclamo', 'sugerencia',
      'ayuda', 'soporte', 'atencion', 'servicio',
      // Números específicos
      '115', 'emergencia', 'urgente', 'linea',
      'como contactar', 'telefono electrohuila', 'numero electrohuila'
    ]
  },
  
  // TRÁMITES - Todo tipo de gestiones
  { 
    id: 'tramites', 
    text: 'Trámites', 
    url: '/tramites',
    category: 'Trámites',
    icon: <FileText size={16} />,
    keywords: [
      'tramites', 'tramite', 'solicitudes', 'solicitud', 'peticion',
      'certificados', 'certificado', 'constancia', 'documento',
      'formularios', 'formulario', 'formato', 'papeles',
      'gestiones', 'gestion', 'procesos', 'proceso',
      'como', 'requisitos', 'documentos', 'necesito',
      'certificacion', 'paz y salvo', 'servicio', 'conexion'
    ]
  },
  
  // EMPRESA E INSTITUCIONAL
  { 
    id: 'quienes-somos', 
    text: 'Quiénes somos', 
    url: '/institucional/quienes-somos',
    category: 'Empresa',
    icon: <Building size={16} />,
    keywords: [
      'quienes', 'somos', 'empresa', 'electrohuila', 'historia',
      'mision', 'vision', 'valores', 'objetivos',
      'nosotros', 'acerca', 'informacion', 'corporativo',
      'electrificadora', 'huila', 'neiva', 'energia'
    ]
  },
  
  // NOTICIAS Y COMUNICADOS
  { 
    id: 'boletines-comunicados', 
    text: 'Boletines y comunicados', 
    url: '/boletines-comunicados',
    category: 'Noticias',
    icon: <FileText size={16} />,
    keywords: [
      'boletines', 'boletin', 'comunicados', 'comunicado',
      'noticias', 'noticia', 'informes', 'informe',
      'avisos', 'aviso', 'anuncios', 'anuncio',
      'prensa', 'medios', 'informacion', 'novedades'
    ]
  },

  // USUARIOS - Gestión de cuentas
  { 
    id: 'crear-cuenta', 
    text: 'Crear cuenta / Registro', 
    url: '/servicios/crear-cuenta',
    category: 'Usuario',
    icon: <User size={16} />,
    keywords: [
      'crear', 'registro', 'registrarse', 'cuenta', 'usuario',
      'inscribirse', 'nueva', 'abrir', 'portal', 'online',
      'electrohuila linea', 'virtual', 'internet', 'web'
    ]
  },

  // HOME - Por si buscan inicio
  { 
    id: 'inicio', 
    text: 'Página de inicio', 
    url: '/',
    category: 'Navegación',
    icon: <Home size={16} />,
    keywords: [
      'inicio', 'home', 'principal', 'portada', 'electrohuila',
      'pagina', 'website', 'sitio', 'web'
    ]
  }
];

export default function SearchComponent() {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [recentSearches, setRecentSearches] = useState([]);
  const [isFocused, setIsFocused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  const searchRef = useRef(null);
  const inputRef = useRef(null);
  const router = useRouter();

  // Detectar tamaño de pantalla
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  // Cargar búsquedas recientes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedSearches = localStorage.getItem('electrohuila_recent_searches');
      if (storedSearches) {
        try {
          setRecentSearches(JSON.parse(storedSearches));
        } catch (e) {
          console.error('Error parsing recent searches:', e);
        }
      }
    }
  }, []);

  // Guardar búsqueda reciente
  const saveRecentSearch = (search) => {
    if (!search.trim()) return;
    
    const updatedSearches = [
      search, 
      ...recentSearches.filter(s => s !== search)
    ].slice(0, 5);
    
    setRecentSearches(updatedSearches);
    
    if (typeof window !== 'undefined') {
      localStorage.setItem('electrohuila_recent_searches', JSON.stringify(updatedSearches));
    }
  };

  // FUNCIÓN DE BÚSQUEDA SÚPER INTELIGENTE
  const searchContent = (searchQuery) => {
    if (!searchQuery.trim()) return [];
    
    // Normalizar query: quitar acentos, espacios extra, etc.
    const normalizeText = (text) => {
      return text
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '') // Quitar acentos
        .replace(/[^\w\s]/g, '') // Quitar caracteres especiales
        .replace(/\s+/g, ' ') // Espacios múltiples a uno
        .trim();
    };

    const queryNormalized = normalizeText(searchQuery);
    const words = queryNormalized.split(' ').filter(word => word.length > 0);
    
    const results = SITE_CONTENT.map(item => {
      let score = 0;
      
      const titleNormalized = normalizeText(item.text);
      const categoryNormalized = normalizeText(item.category);
      
      // 1. BÚSQUEDA EXACTA COMPLETA (peso máximo)
      if (titleNormalized.includes(queryNormalized)) {
        score += 1000;
      }
      
      // 2. BÚSQUEDA EN TÍTULO palabra por palabra (peso muy alto)
      words.forEach(word => {
        if (word.length > 1) { // Ignorar palabras muy cortas
          if (titleNormalized.includes(word)) {
            score += 300;
          }
          // Búsqueda parcial en título
          if (titleNormalized.split(' ').some(titleWord => titleWord.includes(word))) {
            score += 200;
          }
        }
      });
      
      // 3. BÚSQUEDA EN KEYWORDS (peso alto)
      if (item.keywords) {
        item.keywords.forEach(keyword => {
          const keywordNormalized = normalizeText(keyword);
          
          // Coincidencia exacta en keyword
          if (keywordNormalized === queryNormalized) {
            score += 500;
          }
          
          // Keyword contiene la query
          if (keywordNormalized.includes(queryNormalized)) {
            score += 250;
          }
          
          // Query contiene la keyword (útil para búsquedas largas)
          if (queryNormalized.includes(keywordNormalized)) {
            score += 150;
          }
          
          // Búsqueda palabra por palabra en keywords
          words.forEach(word => {
            if (word.length > 1 && keywordNormalized.includes(word)) {
              score += 100;
            }
            
            // Búsqueda fuzzy (palabras similares)
            if (word.length > 2) {
              const keywordWords = keywordNormalized.split(' ');
              keywordWords.forEach(kw => {
                if (kw.includes(word) || word.includes(kw)) {
                  score += 50;
                }
              });
            }
          });
        });
      }
      
      // 4. BÚSQUEDA EN CATEGORÍA (peso medio)
      if (categoryNormalized.includes(queryNormalized)) {
        score += 100;
      }
      
      words.forEach(word => {
        if (word.length > 1 && categoryNormalized.includes(word)) {
          score += 50;
        }
      });
      
      // 5. BÚSQUEDA FONÉTICA (para errores de escritura)
      const phoneticMatches = (str1, str2) => {
        // Reemplazos comunes de errores
        const replacements = {
          'k': 'c', 'c': 'k', 'z': 's', 's': 'z',
          'y': 'i', 'i': 'y', 'b': 'v', 'v': 'b',
          'g': 'j', 'j': 'g', 'h': '', 'll': 'y'
        };
        
        let phoneticStr1 = str1;
        let phoneticStr2 = str2;
        
        Object.entries(replacements).forEach(([from, to]) => {
          phoneticStr1 = phoneticStr1.replace(new RegExp(from, 'g'), to);
          phoneticStr2 = phoneticStr2.replace(new RegExp(from, 'g'), to);
        });
        
        return phoneticStr1.includes(phoneticStr2) || phoneticStr2.includes(phoneticStr1);
      };
      
      // Aplicar búsqueda fonética
      if (item.keywords) {
        item.keywords.forEach(keyword => {
          if (phoneticMatches(normalizeText(keyword), queryNormalized)) {
            score += 25;
          }
        });
      }
      
      return { ...item, score };
    })
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score);
    
    // Si no hay resultados, intentar con palabras individuales
    if (results.length === 0 && words.length > 1) {
      words.forEach(word => {
        if (word.length > 2) {
          const wordResults = searchContent(word);
          results.push(...wordResults.slice(0, 2));
        }
      });
      
      // Eliminar duplicados
      const uniqueResults = results.filter((item, index, self) => 
        index === self.findIndex(i => i.id === item.id)
      );
      
      return uniqueResults.slice(0, 8);
    }
    
    return results.slice(0, 8);
  };

  // Filtrar sugerencias basado en la consulta
  useEffect(() => {
    if (query.trim()) {
      const results = searchContent(query);
      setFilteredSuggestions(results);
    } else {
      setFilteredSuggestions([]);
    }
    setSelectedIndex(-1);
  }, [query]);

  // Cerrar panel al hacer clic fuera
  useEffect(() => {
    function handleClickOutside(event) {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsExpanded(false);
        setTimeout(() => {
          if (!isFocused) setIsOpen(false);
        }, 200);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isFocused]);

  // Navegación por teclado
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => 
        prev < filteredSuggestions.length - 1 ? prev + 1 : prev
      );
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => (prev > 0 ? prev - 1 : 0));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (selectedIndex >= 0 && filteredSuggestions[selectedIndex]) {
        const selected = filteredSuggestions[selectedIndex];
        handleSuggestionClick(selected);
      } else if (query.trim()) {
        handleSearch();
      }
    } else if (e.key === 'Escape') {
      setIsExpanded(false);
      inputRef.current?.blur();
      setTimeout(() => setIsOpen(false), 200);
    }
  };

  // Abrir búsqueda
  const openSearch = () => {
    setIsOpen(true);
    setTimeout(() => {
      setIsExpanded(true);
      setTimeout(() => {
        if (inputRef.current) {
          inputRef.current.focus();
        }
      }, 150);
    }, 10);
  };

  // Manejar envío del formulario
  const handleSearch = () => {
    if (query.trim()) {
      saveRecentSearch(query);
      router.push(`/busqueda?q=${encodeURIComponent(query)}`);
      setIsOpen(false);
      setIsExpanded(false);
      setQuery('');
    }
  };

  // Manejar clic en sugerencia
  const handleSuggestionClick = (suggestion) => {
    saveRecentSearch(suggestion.text);
    router.push(suggestion.url);
    setIsOpen(false);
    setIsExpanded(false);
    setQuery('');
  };

  // Sugerencias populares
  const popularSuggestions = SITE_CONTENT.filter(item => 
    ['factura-pago', 'consulta-factura', 'cortes-programados', 'contactenos', 'tarifas-energia'].includes(item.id)
  );

  const searchWidth = isMobile ? 'w-80' : 'w-96';

  return (
    <div className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30">
      <div ref={searchRef} className="relative z-20">
        {/* Botón de búsqueda */}
        {!isOpen ? (
          <button 
            onClick={openSearch}
            className="flex items-center justify-center h-9 w-9 rounded-full bg-blue-600 text-white border-none shadow-md cursor-pointer transition-all duration-200 hover:bg-blue-700 hover:scale-105"
            aria-label="Buscar en ElectroHuila"
          >
            <Search size={18} />
          </button>
        ) : (
          <div 
            className={`absolute right-0 top-0 flex items-center rounded-full shadow-md bg-white border border-gray-300 transition-all duration-300 ease-out overflow-hidden ${
              isExpanded ? searchWidth : 'w-9'
            } h-9`}
          >
            {/* Icono de búsqueda */}
            <div className="flex items-center justify-center min-w-9 h-9 text-gray-500">
              <Search size={18} className={`transition-opacity duration-200 ${isExpanded ? 'opacity-100' : 'opacity-0'}`} />
            </div>
            
            {/* Campo de búsqueda */}
            {isOpen && (
              <div 
                className={`flex-1 overflow-hidden transition-all duration-300 ${
                  isExpanded ? 'w-full opacity-100' : 'w-0 opacity-0'
                }`}
              >
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={handleKeyDown}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  placeholder="Busca cualquier cosa..."
                  className="w-full h-9 bg-transparent border-none outline-none text-gray-800 pr-2 text-sm"
                />
              </div>
            )}
            
            {/* Botón cerrar/limpiar */}
            {isExpanded && (
              <button 
                onClick={() => {
                  if (query) {
                    setQuery('');
                  } else {
                    setIsExpanded(false);
                    setTimeout(() => setIsOpen(false), 200);
                  }
                }}
                className="flex items-center justify-center h-9 w-9 bg-transparent border-none cursor-pointer text-gray-500 transition-colors duration-200 hover:text-gray-800"
                aria-label={query ? "Limpiar búsqueda" : "Cerrar búsqueda"}
              >
                <X size={16} />
              </button>
            )}
          </div>
        )}

        {/* Panel de sugerencias */}
        {isOpen && isExpanded && (
          <div 
            className={`absolute right-0 top-11 ${searchWidth} bg-white rounded-lg shadow-lg border border-gray-300 overflow-hidden max-h-96 transition-all duration-300 ${
              isExpanded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
            } z-30`}
          >
            {/* Resultados */}
            {query.trim() ? (
              <div className="py-2">
                <div className="px-3 py-1 text-xs text-gray-500 font-medium">
                  {filteredSuggestions.length > 0 ? 
                    `✨ ${filteredSuggestions.length} resultado${filteredSuggestions.length > 1 ? 's' : ''} encontrado${filteredSuggestions.length > 1 ? 's' : ''}` : 
                    '🔍 Buscando...'
                  }
                </div>
                
                {filteredSuggestions.length > 0 ? (
                  <div>
                    {filteredSuggestions.map((suggestion, index) => (
                      <button 
                        key={suggestion.id}
                        onClick={() => handleSuggestionClick(suggestion)}
                        className={`w-full p-3 cursor-pointer flex items-center gap-2 transition-colors duration-150 hover:bg-blue-50 ${
                          selectedIndex === index ? 'bg-blue-50' : ''
                        }`}
                      >
                        <div className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 flex-shrink-0">
                          {suggestion.icon || <Search size={14} />}
                        </div>
                        <div className="flex-1 min-w-0 text-left">
                          <div className="font-medium text-gray-800 truncate text-sm">
                            {suggestion.text}
                          </div>
                          {suggestion.category && (
                            <div className="text-xs text-blue-600">
                              {suggestion.category}
                            </div>
                          )}
                        </div>
                        <ChevronRight size={14} className="text-gray-400 flex-shrink-0" />
                      </button>
                    ))}
                    
                    <div className="p-3 mt-1 border-t border-gray-100">
                      <button 
                        onClick={handleSearch}
                        className="w-full py-2 flex items-center justify-center gap-2 bg-transparent border-none cursor-pointer text-sm text-blue-600 font-medium transition-colors duration-200 hover:text-blue-800"
                      >
                        <span>🚀 Ver todos los resultados para "{query}"</span>
                        <ChevronRight size={14} />
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="py-6 px-4 text-center">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-yellow-100 mx-auto mb-3">
                      <Search size={20} className="text-yellow-600" />
                    </div>
                    <div className="text-gray-700 mb-2 text-sm font-medium">
                      🤔 ¡Hmm! No encontré "{query}"
                    </div>
                    <div className="text-xs text-gray-500 mb-3">
                      Pero no te preocupes, déjame sugerirte algo:
                    </div>
                    <div className="flex flex-wrap gap-1 justify-center">
                      {['factura', 'tarifas', 'cortes', 'oficinas', 'pagar'].map(suggestion => (
                        <button
                          key={suggestion}
                          onClick={() => {
                            setQuery(suggestion);
                            inputRef.current?.focus();
                          }}
                          className="px-2 py-1 text-xs bg-blue-100 text-blue-700 rounded-full hover:bg-blue-200 transition-colors"
                        >
                          {suggestion}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : recentSearches.length > 0 ? (
              <div className="py-2">
                <div className="px-3 py-1 text-xs text-gray-500 font-medium flex items-center gap-1">
                  <Clock size={12} />
                  Búsquedas recientes
                </div>
                
                {recentSearches.map((search, index) => (
                  <div 
                    key={`recent-${index}`}
                    className="px-3 py-2 cursor-pointer flex items-center gap-2 transition-colors duration-150 hover:bg-blue-50"
                  >
                    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 flex-shrink-0">
                      <Clock size={14} />
                    </div>
                    <div 
                      className="flex-1 text-gray-600 truncate text-sm"
                      onClick={() => {
                        setQuery(search);
                        inputRef.current?.focus();
                      }}
                    >
                      {search}
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        const updated = recentSearches.filter(s => s !== search);
                        setRecentSearches(updated);
                        if (typeof window !== 'undefined') {
                          localStorage.setItem('electrohuila_recent_searches', JSON.stringify(updated));
                        }
                      }}
                      className="text-gray-400 hover:text-gray-600 cursor-pointer flex-shrink-0"
                    >
                      <X size={14} />
                    </button>
                  </div>
                ))}
                
                <div className="px-3 py-2 border-t border-gray-100">
                  <button 
                    onClick={() => {
                      setRecentSearches([]);
                      if (typeof window !== 'undefined') {
                        localStorage.removeItem('electrohuila_recent_searches');
                      }
                    }}
                    className="w-full py-1 bg-transparent border-none cursor-pointer text-xs text-gray-500 transition-colors duration-200 hover:text-gray-700"
                  >
                    🗑️ Borrar historial
                  </button>
                </div>
              </div>
            ) : (
              <div className="py-2">
                <div className="px-3 py-1 text-xs text-gray-500 font-medium flex items-center gap-1">
                  <Lightbulb size={12} />
                  Lo más buscado
                </div>
                
                <div className="py-2">
                  {popularSuggestions.map((suggestion) => (
                    <button
                      key={suggestion.id}
                      onClick={() => handleSuggestionClick(suggestion)}
                      className="w-full px-3 py-2 cursor-pointer flex items-center gap-2 transition-colors duration-150 hover:bg-blue-50"
                    >
                      <div className="w-7 h-7 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 flex-shrink-0">
                        {suggestion.icon}
                      </div>
                      <div className="text-sm text-gray-600 font-medium">
                        {suggestion.text}
                      </div>
                    </button>
                  ))}
                </div>
                
                <div className="px-3 py-3 border-t border-gray-100">
                  <div className="text-xs text-gray-400 text-center">
                    ✨ Escribe cualquier cosa: "pagar", "sin luz", "cuanto debo"
                  </div>
                  <div className="text-xs text-green-600 text-center mt-1 font-medium">
                    ¡Te entiendo sin importar cómo escribas! 🎯
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}