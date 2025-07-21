'use client';

import { useState, useEffect } from 'react';
import { Search, Calendar, FileText, Download, Eye, X, Filter, MapPin, Clock, AlertTriangle, ChevronLeft } from 'lucide-react';

export default function SuspensionesPage() {
  const [activeTab, setActiveTab] = useState('cortes');
  const [loading, setLoading] = useState(false);

  // Estados para Cortes por Cartera
  const [filtrosCortes, setFiltrosCortes] = useState({
    ano: new Date().getFullYear(),
    mes: new Date().getMonth() + 1, // Mes actual (1-12)
    estado: 'ACEVEDO'
  });
  const [cortesData, setCortesData] = useState([]);
  const [municipiosDisponibles, setMunicipiosDisponibles] = useState([]);
  const [anosDisponiblesCortes, setAnosDisponiblesCortes] = useState([]);

  // Estados para Suspensiones por Mantenimiento
  const [anosDisponibles, setAnosDisponibles] = useState([2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018]);
  const [anoSeleccionado, setAnoSeleccionado] = useState(null);
  const [boletinesData, setBoletinesData] = useState([]);
  const [boletinesPorMes, setBoletinesPorMes] = useState({});

  // Estados para Modal
  const [modalVisible, setModalVisible] = useState(false);
  const [archivoSeleccionado, setArchivoSeleccionado] = useState(null);

  const API_BASE = 'https://electrohuila.net/wp-json/electrohuila/v1';

  // 🔧 CARGAR DATOS INICIALES PARA CORTES
  useEffect(() => {
    console.log('🚀 Iniciando carga de datos iniciales...');
    
    const cargarMunicipios = async () => {
      console.log('🏢 Cargando municipios...');
      try {
        const response = await fetch('https://backapp.electrohuila.com.co:8071/ehrest/index.php/SIECApi/get_municipios');
        console.log('📥 Response municipios status:', response.status);
        
        const data = await response.json();
        console.log('📊 Data municipios:', data);
        
        if (data && data.registros && data.registros.length > 0) {
          setMunicipiosDisponibles(data.registros);
          // Establecer el primer municipio como default
          setFiltrosCortes(prev => ({ 
            ...prev, 
            estado: data.registros[0].NOMBRE 
          }));
          console.log(`✅ ${data.registros.length} municipios cargados, default: ${data.registros[0].NOMBRE}`);
        } else {
          console.log('⚠️ No se encontraron municipios en la respuesta');
          throw new Error('Sin municipios');
        }
      } catch (error) {
        console.error('❌ Error cargando municipios:', error);
        // Fallback a municipios estáticos si falla la API
        const municipiosEstaticos = [
          { CODIGO: '6', NOMBRE: 'ACEVEDO' },
          { CODIGO: '13', NOMBRE: 'AGRADO' },
          { CODIGO: '1', NOMBRE: 'NEIVA' },
          { CODIGO: '551', NOMBRE: 'PITALITO' }
        ];
        setMunicipiosDisponibles(municipiosEstaticos);
        setFiltrosCortes(prev => ({ ...prev, estado: 'ACEVEDO' }));
        console.log('✅ Usando municipios estáticos como fallback');
      }
    };

    const cargarAnosCortes = async () => {
      console.log('📅 Cargando años...');
      try {
        const response = await fetch('https://backapp.electrohuila.com.co:8071/ehrest/index.php/SIECApi/get_suspensiones_anios');
        console.log('📥 Response años status:', response.status);
        
        const data = await response.json();
        console.log('📊 Data años:', data);
        
        if (data && data.registros && data.registros.length > 0) {
          setAnosDisponiblesCortes(data.registros);
          console.log(`✅ ${data.registros.length} años cargados`);
        } else {
          console.log('⚠️ No se encontraron años en la respuesta');
          throw new Error('Sin años');
        }
      } catch (error) {
        console.error('❌ Error cargando años:', error);
        // Fallback a años estáticos si falla la API
        const anosEstaticos = [];
        for (let year = new Date().getFullYear(); year >= 2005; year--) {
          anosEstaticos.push({ ANIO: year });
        }
        setAnosDisponiblesCortes(anosEstaticos);
        console.log('✅ Usando años estáticos como fallback');
      }
    };

    cargarMunicipios();
    cargarAnosCortes();
  }, []);

  const meses = [
    { value: 1, label: 'ENERO' },
    { value: 2, label: 'FEBRERO' },
    { value: 3, label: 'MARZO' },
    { value: 4, label: 'ABRIL' },
    { value: 5, label: 'MAYO' },
    { value: 6, label: 'JUNIO' },
    { value: 7, label: 'JULIO' },
    { value: 8, label: 'AGOSTO' },
    { value: 9, label: 'SEPTIEMBRE' },
    { value: 10, label: 'OCTUBRE' },
    { value: 11, label: 'NOVIEMBRE' },
    { value: 12, label: 'DICIEMBRE' }
  ];

  const nombresMs = {
    '01': 'Enero', '02': 'Febrero', '03': 'Marzo', '04': 'Abril',
    '05': 'Mayo', '06': 'Junio', '07': 'Julio', '08': 'Agosto',
    '09': 'Septiembre', '10': 'Octubre', '11': 'Noviembre', '12': 'Diciembre'
  };

  const consultarCortes = async () => {
    setLoading(true);
    console.log('🔄 Iniciando consulta de cortes...');
    console.log('📝 Filtros actuales:', filtrosCortes);
    
    try {
      // Validar que tenemos todos los parámetros
      if (!filtrosCortes.estado || !filtrosCortes.ano || !filtrosCortes.mes) {
        console.error('❌ Faltan parámetros:', filtrosCortes);
        setLoading(false);
        return;
      }

      // Construir URL con logging detallado
      const apiUrl = `https://backapp.electrohuila.com.co:8071/ehrest/index.php/SIECApi/get_suspensiones_cartera/${filtrosCortes.estado}/${filtrosCortes.ano}/${filtrosCortes.mes}`;
      console.log('📡 URL completa de la API:', apiUrl);
      console.log('🔗 Parámetros individuales:');
      console.log('   - Municipio:', filtrosCortes.estado);
      console.log('   - Año:', filtrosCortes.ano);
      console.log('   - Mes:', filtrosCortes.mes);

      console.log('🌐 Iniciando fetch...');
      const response = await fetch(apiUrl);
      console.log('📥 Response status:', response.status);
      console.log('📥 Response ok:', response.ok);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      console.log('🔄 Parseando JSON...');
      const data = await response.json();
      console.log('📊 Respuesta completa de la API:', data);
      console.log('📊 Tipo de data:', typeof data);
      console.log('📊 Keys de data:', Object.keys(data));

      if (data) {
        console.log('✅ Data recibida');
        console.log('📊 data.cod:', data.cod);
        console.log('📊 data.msg:', data.msg);
        console.log('📊 data.registros:', data.registros);
        console.log('📊 Cantidad de registros:', data.registros ? data.registros.length : 'undefined');

        if (data.registros && Array.isArray(data.registros) && data.registros.length > 0) {
          setCortesData(data.registros);
          console.log(`✅ ${data.registros.length} registros cargados exitosamente`);
        } else {
          setCortesData([]);
          console.log('⚠️ Sin registros encontrados');
          // ❌ REMOVIDO: alert con mensaje
        }
      } else {
        console.error('❌ Data es null o undefined');
        setCortesData([]);
        // ❌ REMOVIDO: alert de error
      }
    } catch (error) {
      console.error('❌ Error completo:', error);
      console.error('❌ Error message:', error.message);
      console.error('❌ Error stack:', error.stack);
      setCortesData([]);
      // ❌ REMOVIDO: alert de error de conexión
    } finally {
      console.log('🏁 Finalizando consulta...');
      setLoading(false);
    }
  };

  const cargarBoletinesPorAno = async (ano) => {
    setLoading(true);
    console.log(`🔄 Cargando boletines para el año ${ano}...`);
    
    try {
      const response = await fetch(`${API_BASE}/boletines-simple/${ano}`);
      const data = await response.json();

      console.log(`📊 Respuesta de la API para ${ano}:`, data);

      // 🔧 CORRECCIÓN CRÍTICA: Verificar tanto data.success como data.status === 'success'
      if (data.success || data.status === 'success') {
        const boletines = data.data || [];
        console.log(`✅ Datos encontrados para ${ano}: ${boletines.length} boletines`);
        
        setBoletinesData(boletines);
        setAnoSeleccionado(ano);
        
        // Agrupar boletines por mes
        const boletinesPorMes = agruparBoletinesPorMes(boletines, ano);
        setBoletinesPorMes(boletinesPorMes);
        
        console.log(`📅 Boletines agrupados por mes:`, boletinesPorMes);
      } else {
        console.log(`⚠️ No hay datos para ${ano} o el endpoint devolvió error`);
        setBoletinesData([]);
        setBoletinesPorMes({});
        setAnoSeleccionado(ano);
      }
    } catch (error) {
      console.error(`❌ Error al cargar boletines para ${ano}:`, error);
      setBoletinesData([]);
      setBoletinesPorMes({});
      setAnoSeleccionado(ano);
    } finally {
      setLoading(false);
    }
  };

  // 🔧 FUNCIÓN DE AGRUPACIÓN MEJORADA PARA TODOS LOS AÑOS
  const agruparBoletinesPorMes = (boletines, ano) => {
    const boletinesPorMes = {};
    
    boletines.forEach(boletin => {
      let mes = '01'; // Default a enero
      
      try {
        if (ano === 2025 || ano === 2024) {
          // Para 2025 y 2024, usar la lógica de semanas
          const semanaTexto = boletin.semana || boletin.titulo || '';
          const semanaMatch = semanaTexto.match(/(\d+)/);
          
          if (semanaMatch) {
            const numeroSemana = parseInt(semanaMatch[1]);
            const mesCalculado = Math.min(Math.ceil(numeroSemana / 4.33), 12);
            mes = mesCalculado.toString().padStart(2, '0');
          }
        } else if (ano === 2023) {
          // Para 2023, extraer mes de la fecha
          if (boletin.fecha) {
            const fechaMatch = boletin.fecha.match(/^(\d{1,2})-(\d{1,2})-2023$/) ||
                             boletin.fecha.match(/^(\d{1,2})-(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i);
            
            if (fechaMatch) {
              if (fechaMatch[2] && fechaMatch[2].match(/^\d+$/)) {
                mes = fechaMatch[2].padStart(2, '0');
              } else if (fechaMatch[2]) {
                const mesesNombres = {
                  'enero': '01', 'febrero': '02', 'marzo': '03', 'abril': '04',
                  'mayo': '05', 'junio': '06', 'julio': '07', 'agosto': '08',
                  'septiembre': '09', 'octubre': '10', 'noviembre': '11', 'diciembre': '12'
                };
                mes = mesesNombres[fechaMatch[2].toLowerCase()] || '01';
              }
            }
          }
        } else if (ano === 2022) {
          // Para 2022, extraer mes de fecha "2022-MM-DD" o título "MM-mes"
          if (boletin.fecha) {
            const fechaMatch = boletin.fecha.match(/^2022-(\d{2})-\d{2}$/);
            if (fechaMatch) {
              mes = fechaMatch[1];
            }
          } else if (boletin.titulo) {
            const tituloMatch = boletin.titulo.match(/^(\d{2})-(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i);
            if (tituloMatch) {
              mes = tituloMatch[1];
            }
          }
        } else if (ano === 2021 || ano === 2020) {
          // Para 2021 y 2020, extraer mes de fecha ISO o título
          if (boletin.fecha) {
            const fechaMatch = boletin.fecha.match(/^20(21|20)-(\d{2})-\d{2}$/);
            if (fechaMatch) {
              mes = fechaMatch[2];
            }
          } else if (boletin.titulo) {
            const patterns = [
              /^(\d{1,2})-(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
              /^(\d{1,2})-(\d{1,2})-20(21|20)/,
              /(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i
            ];
            
            for (const pattern of patterns) {
              const match = boletin.titulo.match(pattern);
              if (match) {
                if (match[2] && match[2].match(/^\d+$/)) {
                  mes = match[2].padStart(2, '0');
                  break;
                } else if (match[1] && typeof match[1] === 'string' && !match[1].match(/^\d+$/)) {
                  const mesesNombres = {
                    'enero': '01', 'febrero': '02', 'marzo': '03', 'abril': '04',
                    'mayo': '05', 'junio': '06', 'julio': '07', 'agosto': '08',
                    'septiembre': '09', 'octubre': '10', 'noviembre': '11', 'diciembre': '12'
                  };
                  mes = mesesNombres[match[1].toLowerCase()] || '01';
                  break;
                } else if (match[0] && typeof match[0] === 'string' && !match[0].match(/^\d+$/)) {
                  const mesesNombres = {
                    'enero': '01', 'febrero': '02', 'marzo': '03', 'abril': '04',
                    'mayo': '05', 'junio': '06', 'julio': '07', 'agosto': '08',
                    'septiembre': '09', 'octubre': '10', 'noviembre': '11', 'diciembre': '12'
                  };
                  mes = mesesNombres[match[0].toLowerCase()] || '01';
                  break;
                }
              }
            }
          }
        } else if (ano === 2019 || ano === 2018) {
          // 🔧 NUEVA LÓGICA PARA 2019 Y 2018 (ahora con endpoints completos)
          if (boletin.fecha) {
            const fechaMatch = boletin.fecha.match(/^20(19|18)-(\d{2})-\d{2}$/);
            if (fechaMatch) {
              mes = fechaMatch[2];
            }
          } else if (boletin.titulo) {
            // Extraer mes del título
            const patterns = [
              /^(\d{1,2})-(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
              /^(\d{1,2})-(\d{1,2})-20(19|18)/,
              /(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i
            ];
            
            for (const pattern of patterns) {
              const match = boletin.titulo.match(pattern);
              if (match) {
                if (match[2] && match[2].match(/^\d+$/)) {
                  mes = match[2].padStart(2, '0');
                  break;
                } else if (match[1] && typeof match[1] === 'string' && !match[1].match(/^\d+$/)) {
                  const mesesNombres = {
                    'enero': '01', 'febrero': '02', 'marzo': '03', 'abril': '04',
                    'mayo': '05', 'junio': '06', 'julio': '07', 'agosto': '08',
                    'septiembre': '09', 'octubre': '10', 'noviembre': '11', 'diciembre': '12'
                  };
                  mes = mesesNombres[match[1].toLowerCase()] || '01';
                  break;
                } else if (match[0] && typeof match[0] === 'string' && !match[0].match(/^\d+$/)) {
                  const mesesNombres = {
                    'enero': '01', 'febrero': '02', 'marzo': '03', 'abril': '04',
                    'mayo': '05', 'junio': '06', 'julio': '07', 'agosto': '08',
                    'septiembre': '09', 'octubre': '10', 'noviembre': '11', 'diciembre': '12'
                  };
                  mes = mesesNombres[match[0].toLowerCase()] || '01';
                  break;
                }
              }
            }
          }
          
          // Si no se pudo extraer el mes, usar el campo 'mes' del boletin
          if (mes === '01' && boletin.mes) {
            const mesesNombres = {
              'enero': '01', 'febrero': '02', 'marzo': '03', 'abril': '04',
              'mayo': '05', 'junio': '06', 'julio': '07', 'agosto': '08',
              'septiembre': '09', 'octubre': '10', 'noviembre': '11', 'diciembre': '12'
            };
            mes = mesesNombres[boletin.mes.toLowerCase()] || '01';
          }
        } else {
          // Para años futuros o no especificados
          const totalBoletines = boletines.length;
          const indice = boletines.indexOf(boletin);
          const mesCalculado = Math.floor((indice / totalBoletines) * 12) + 1;
          mes = Math.min(mesCalculado, 12).toString().padStart(2, '0');
        }
      } catch (error) {
        console.warn('Error procesando fecha/semana:', error);
        mes = '01'; // Fallback a enero
      }
      
      if (!boletinesPorMes[mes]) {
        boletinesPorMes[mes] = [];
      }
      boletinesPorMes[mes].push(boletin);
    });
    
    return boletinesPorMes;
  };

  const volverAAños = () => {
    setAnoSeleccionado(null);
    setBoletinesData([]);
    setBoletinesPorMes({});
  };

  const handleVerArchivo = (boletin) => {
    console.log('🔍 BOTÓN VER CLICKEADO:', boletin.titulo);
    console.log('🔗 URL:', boletin.url_descarga || boletin.url);
    
    const urlArchivo = boletin.url_descarga || boletin.url;
    
    setArchivoSeleccionado({
      ...boletin,
      url: urlArchivo,
      url_viewer: `https://docs.google.com/viewer?url=${encodeURIComponent(urlArchivo)}&embedded=true`,
      url_viewer_alt: `https://mozilla.github.io/pdf.js/web/viewer.html?file=${encodeURIComponent(urlArchivo)}`
    });
    setModalVisible(true);
    
    console.log('📄 ¡MODAL ABIERTO! Archivo:', boletin.titulo);
  };

  const handleDescargar = (boletin) => {
    console.log('📥 Descargando archivo:', boletin.titulo);
    const url = boletin.url_descarga || boletin.url;
    window.open(url, '_blank');
  };

  const cerrarModal = () => {
    console.log('❌ Cerrando modal');
    setModalVisible(false);
    setArchivoSeleccionado(null);
  };

  const getIconoArchivo = (formato) => {
    return <FileText className="h-6 w-6 text-white" />;
  };

  // 🔧 FUNCIÓN CORREGIDA: TODOS LOS AÑOS AZULES Y FUNCIONALES
  const getEstadoAno = (ano) => {
    // ✅ TODOS los años de 2018 a 2025 ahora tienen endpoints funcionando
    if (ano >= 2018 && ano <= 2025) {
      return { 
        disponible: true, 
        color: 'from-blue-500 to-blue-600', 
        texto: 'Disponible',
        hover: 'hover:from-blue-600 hover:to-blue-700'
      };
    } 
    // Solo para años fuera del rango (que no deberían existir)
    else {
      return { 
        disponible: false, 
        color: 'from-gray-300 to-gray-400', 
        texto: 'No disponible',
        hover: 'hover:from-gray-400 hover:to-gray-500'
      };
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto p-6">
        <div className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-4">
            Suspensiones Programadas
          </h1>
          <div className="flex items-center text-sm text-gray-600 space-x-2">
            <span>Inicio</span>
            <span>|</span>
            <span className="text-blue-600">Suspensiones Programadas</span>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg mb-8 overflow-hidden">
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => setActiveTab('cortes')}
              className={`flex-1 px-6 py-4 text-sm font-medium transition-all duration-200 ${
                activeTab === 'cortes'
                  ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                  : 'text-gray-500 hover:text-blue-600 hover:bg-gray-50'
              }`}
            >
              <div className="flex items-center justify-center space-x-2">
                <Filter className="h-4 w-4" />
                <span>Cortes programados por cartera</span>
              </div>
            </button>
            <button
              onClick={() => setActiveTab('suspensiones')}
              className={`flex-1 px-6 py-4 text-sm font-medium transition-all duration-200 ${
                activeTab === 'suspensiones'
                  ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                  : 'text-gray-500 hover:text-blue-600 hover:bg-gray-50'
              }`}
            >
              <div className="flex items-center justify-center space-x-2">
                <Calendar className="h-4 w-4" />
                <span>Suspensiones programadas por mantenimiento</span>
              </div>
            </button>
          </div>

          <div className="p-6">
            {activeTab === 'cortes' && (
              <div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Año ({anosDisponiblesCortes.length} disponibles)
                    </label>
                    <select
                      value={filtrosCortes.ano}
                      onChange={(e) => {
                        console.log('🔄 Cambiando año a:', e.target.value);
                        setFiltrosCortes(prev => ({ ...prev, ano: parseInt(e.target.value) }));
                      }}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      {anosDisponiblesCortes.length > 0 ? (
                        anosDisponiblesCortes.map(anio => (
                          <option key={anio.ANIO} value={anio.ANIO}>{anio.ANIO}</option>
                        ))
                      ) : (
                        <option value="">Cargando años...</option>
                      )}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Mes</label>
                    <select
                      value={filtrosCortes.mes}
                      onChange={(e) => {
                        console.log('🔄 Cambiando mes a:', e.target.value);
                        setFiltrosCortes(prev => ({ ...prev, mes: parseInt(e.target.value) }));
                      }}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      {meses.map(mes => (
                        <option key={mes.value} value={mes.value}>{mes.label}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Municipio ({municipiosDisponibles.length} disponibles)
                    </label>
                    <select
                      value={filtrosCortes.estado}
                      onChange={(e) => {
                        console.log('🔄 Cambiando municipio a:', e.target.value);
                        setFiltrosCortes(prev => ({ ...prev, estado: e.target.value }));
                      }}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      {municipiosDisponibles.length > 0 ? (
                        municipiosDisponibles.map(municipio => (
                          <option key={municipio.CODIGO} value={municipio.NOMBRE}>{municipio.NOMBRE}</option>
                        ))
                      ) : (
                        <option value="">Cargando municipios...</option>
                      )}
                    </select>
                  </div>

                  <div className="flex items-end">
                    <button
                      onClick={() => {
                        console.log('🔘 Botón Consultar clickeado');
                        console.log('📝 Estado actual de filtros:', filtrosCortes);
                        consultarCortes();
                      }}
                      disabled={loading || municipiosDisponibles.length === 0 || anosDisponiblesCortes.length === 0}
                      className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <span className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Consultando...
                        </span>
                      ) : 'Consultar'}
                    </button>
                  </div>
                </div>

                {/* Debug info - remover en producción */}
                <div className="mb-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg text-sm">
                  <strong>🐛 Debug Info:</strong><br />
                  Municipio: {filtrosCortes.estado} | Año: {filtrosCortes.ano} | Mes: {filtrosCortes.mes}<br />
                  Municipios cargados: {municipiosDisponibles.length} | Años cargados: {anosDisponiblesCortes.length}
                </div>

                {cortesData.length > 0 && (
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">
                      Resultados de la consulta ({cortesData.length} registros)
                    </h3>
                    <div className="overflow-x-auto">
                      <table className="min-w-full bg-white rounded-lg overflow-hidden shadow">
                        <thead className="bg-blue-500 text-white">
                          <tr>
                            <th className="px-4 py-3 text-left text-sm font-medium">CICLO</th>
                            <th className="px-4 py-3 text-left text-sm font-medium">MES CALENDARIO</th>
                            <th className="px-4 py-3 text-left text-sm font-medium">AÑO CALENDARIO</th>
                            <th className="px-4 py-3 text-left text-sm font-medium">CÓDIGO MUNICIPIO</th>
                            <th className="px-4 py-3 text-left text-sm font-medium">MUNICIPIO</th>
                            <th className="px-4 py-3 text-left text-sm font-medium">UBICACIÓN</th>
                            <th className="px-4 py-3 text-left text-sm font-medium">VENCIMIENTO</th>
                            <th className="px-4 py-3 text-left text-sm font-medium">SUSPENSIÓN</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          {cortesData.map((corte, index) => (
                            <tr key={index} className="hover:bg-gray-50 transition-colors">
                              <td className="px-4 py-3 text-sm text-gray-900">{corte.CICLO || '-'}</td>
                              <td className="px-4 py-3 text-sm text-gray-900">{corte.MES_CALENDARIO || '-'}</td>
                              <td className="px-4 py-3 text-sm text-gray-900">{corte.ANIO_CALENDARIO || '-'}</td>
                              <td className="px-4 py-3 text-sm text-gray-900">{corte.CODIGO_MUNICIPIO || '-'}</td>
                              <td className="px-4 py-3 text-sm text-gray-900">{corte.MUNICIPIO || '-'}</td>
                              <td className="px-4 py-3 text-sm text-gray-900">{corte.UBICACION || '-'}</td>
                              <td className="px-4 py-3 text-sm text-gray-900">{corte.VENCIMIENTO || '-'}</td>
                              <td className="px-4 py-3 text-sm text-gray-900">{corte.SUSPENSION || '-'}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {!loading && cortesData.length === 0 && (
                  <div className="bg-gray-50 rounded-lg p-6 text-center">
                    <div className="text-gray-500 mb-2">
                      <Search className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                      <h3 className="text-lg font-medium text-gray-900 mb-2">Sin resultados</h3>
                      <p className="text-gray-600">
                        No se encontraron cortes programados para los filtros seleccionados.
                      </p>
                      <p className="text-sm text-gray-500 mt-2">
                        Intente con diferentes criterios de búsqueda (otro municipio, mes o año).
                      </p>
                    </div>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'suspensiones' && (
              <div>
                {!anoSeleccionado ? (
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-6">Seleccione un año para ver los boletines</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                      {anosDisponibles.map((ano) => {
                        const estado = getEstadoAno(ano);
                        return (
                          <button
                            key={ano}
                            onClick={() => cargarBoletinesPorAno(ano)}
                            disabled={loading || !estado.disponible}
                            className={`bg-gradient-to-r ${estado.color} text-white p-6 rounded-xl ${estado.hover} transition-all duration-200 transform hover:scale-105 disabled:opacity-50 shadow-lg relative overflow-hidden`}
                          >
                            <div className="relative z-10">
                              <div className="text-2xl font-bold">{ano}</div>
                              <div className="text-sm opacity-90">{estado.texto}</div>
                              {!estado.disponible && (
                                <div className="text-xs mt-1 bg-white/20 rounded px-2 py-1">
                                  Próximamente
                                </div>
                              )}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800">
                          Boletines de Prensa {anoSeleccionado}
                        </h3>
                        <p className="text-gray-600 mt-1">
                          {boletinesData.length} boletín{boletinesData.length !== 1 ? 'es' : ''} encontrado{boletinesData.length !== 1 ? 's' : ''}
                        </p>
                      </div>
                      <button
                        onClick={volverAAños}
                        className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors"
                      >
                        <ChevronLeft className="h-4 w-4" />
                        <span>Volver a años</span>
                      </button>
                    </div>

                    {Object.keys(boletinesPorMes).length > 0 ? (
                      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                        {Object.entries(boletinesPorMes).map(([mes, boletines]) => (
                          <div key={mes} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                            <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 relative overflow-hidden">
                              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/10"></div>
                              <div className="relative z-10">
                                <div className="flex items-center justify-between">
                                  <div>
                                    <h4 className="text-xl font-bold">{nombresMs[mes]}</h4>
                                    <p className="text-blue-100">{anoSeleccionado}</p>
                                  </div>
                                  <div className="bg-white/20 rounded-full p-3">
                                    <Calendar className="h-6 w-6" />
                                  </div>
                                </div>
                                <div className="mt-4 text-sm text-blue-100">
                                  {boletines.length} boletín{boletines.length !== 1 ? 'es' : ''}
                                </div>
                              </div>
                            </div>

                            <div className="p-4 max-h-80 overflow-y-auto custom-scrollbar">
                              <div className="space-y-3">
                                {boletines.map((boletin, index) => (
                                  <div key={boletin.id} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors group">
                                    <div className="flex items-start justify-between">
                                      <div className="flex-1 min-w-0">
                                        <div className="flex items-center space-x-2 mb-2">
                                          <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-full p-2">
                                            {getIconoArchivo(boletin.formato)}
                                          </div>
                                          <div className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-medium">
                                            {boletin.semana || boletin.fecha || `${anoSeleccionado}`}
                                          </div>
                                        </div>
                                        
                                        <h5 className="font-medium text-gray-900 text-sm mb-2 line-clamp-2">
                                          {boletin.titulo}
                                        </h5>
                                        
                                        <div className="flex flex-wrap gap-1 text-xs text-gray-500">
                                          <span className="bg-gray-100 px-2 py-1 rounded">{boletin.formato || 'PDF'}</span>
                                          <span className="bg-gray-100 px-2 py-1 rounded">{boletin.tamaño || 'N/A'}</span>
                                          <span className="bg-gray-100 px-2 py-1 rounded">{boletin.hits || 0} vistas</span>
                                        </div>
                                      </div>
                                    </div>

                                    <div className="flex space-x-2 mt-3">
                                      <button
                                        onClick={() => handleVerArchivo(boletin)}
                                        className="flex items-center space-x-1 bg-blue-500 text-white px-3 py-1.5 rounded-md text-xs hover:bg-blue-600 transition-all duration-200 transform hover:scale-105"
                                      >
                                        <Eye className="h-3 w-3" />
                                        <span>Ver</span>
                                      </button>
                                      <button
                                        onClick={() => handleDescargar(boletin)}
                                        className="flex items-center space-x-1 bg-gray-500 text-white px-3 py-1.5 rounded-md text-xs hover:bg-gray-600 transition-all duration-200 transform hover:scale-105"
                                      >
                                        <Download className="h-3 w-3" />
                                        <span>Descargar</span>
                                      </button>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-12">
                        <FileText className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                        <h3 className="text-lg font-medium text-gray-900 mb-2">
                          {boletinesData.length === 0 ? 'No hay boletines disponibles' : 'Datos en construcción'}
                        </h3>
                        <p className="text-gray-500">
                          {boletinesData.length === 0 
                            ? `No se encontraron boletines para el año ${anoSeleccionado}`
                            : `Los boletines para ${anoSeleccionado} están siendo organizados.`
                          }
                        </p>
                        {boletinesData.length === 0 && getEstadoAno(anoSeleccionado).texto === 'Disponible' && (
                          <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                            <p className="text-sm text-blue-700">
                              ℹ️ Los datos para este año están disponibles, pero pueden estar cargando.
                            </p>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {modalVisible && archivoSeleccionado && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50" onClick={cerrarModal}>
          <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium mb-2">
                    🔍 MODO VISTA - Visualizando archivo
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {archivoSeleccionado.titulo}
                  </h3>
                  <p className="text-sm text-blue-100 mb-4">
                    📄 Archivo: {archivoSeleccionado.archivo || 'N/A'} • 
                    📏 Tamaño: {archivoSeleccionado.tamaño || 'N/A'} • 
                    📂 Formato: {archivoSeleccionado.formato || 'PDF'}
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => {
                      console.log('📥 Descargando archivo desde modal');
                      const url = archivoSeleccionado.url_descarga || archivoSeleccionado.url;
                      window.open(url, '_blank');
                    }}
                    className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-lg transition-colors"
                    title="Descargar archivo"
                  >
                    <Download className="h-5 w-5" />
                  </button>
                  <button
                    onClick={cerrarModal}
                    className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-lg transition-colors"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <div className="bg-gray-100 rounded-lg h-96 mb-4 overflow-hidden relative">
                <iframe
                  src={archivoSeleccionado.url_viewer}
                  className="w-full h-full border-0"
                  title={`Vista previa de ${archivoSeleccionado.titulo}`}
                  sandbox="allow-same-origin allow-scripts"
                  onError={() => {
                    console.log('❌ Error en Google Docs Viewer, intentando con PDF.js...');
                  }}
                />
                
                <div className="absolute inset-0 bg-gray-800/90 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <div className="text-center text-white p-6">
                    <div className="text-lg font-semibold mb-4">
                      ¿No se visualiza correctamente?
                    </div>
                    <div className="space-y-3">
                      <button
                        onClick={() => {
                          console.log('🔄 Intentando con PDF.js viewer...');
                          window.open(archivoSeleccionado.url_viewer_alt, '_blank');
                        }}
                        className="block w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors"
                      >
                        📄 Abrir con PDF.js
                      </button>
                      <button
                        onClick={() => {
                          console.log('📥 Descarga directa...');
                          window.open(archivoSeleccionado.url, '_blank');
                        }}
                        className="block w-full bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors"
                      >
                        📥 Descargar directamente
                      </button>
                      <button
                        onClick={() => {
                          console.log('🌐 Abrir en nueva pestaña...');
                          window.open(archivoSeleccionado.url, '_blank');
                        }}
                        className="block w-full bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors"
                      >
                        🌐 Abrir en nueva pestaña
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <div className="text-sm text-gray-600">
                  📊 {archivoSeleccionado.hits || 0} visualizaciones • {archivoSeleccionado.semana || archivoSeleccionado.fecha || 'Sin fecha'}
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => {
                      console.log('🔄 Recargar visor...');
                      const iframe = document.querySelector('iframe[title*="Vista previa"]');
                      if (iframe) {
                        iframe.src = iframe.src;
                      }
                    }}
                    className="bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600 transition-colors"
                  >
                    🔄 Recargar
                  </button>
                  <button
                    onClick={cerrarModal}
                    className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors"
                  >
                    Cerrar
                  </button>
                </div>
              </div>
              
              <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                <div className="text-sm text-blue-700">
                  💡 <strong>Sugerencia:</strong> Si el archivo no se visualiza correctamente, 
                  puedes pasar el cursor sobre la vista previa para ver opciones alternativas 
                  o usar el botón de descarga directa.
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f5f9;
          border-radius: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #3b82f6;
          border-radius: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #2563eb;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}