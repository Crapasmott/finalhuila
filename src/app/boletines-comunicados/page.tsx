'use client';

import React, { useState, useEffect } from 'react';
import { 
    Search, Filter, Calendar, FileText, Download, Eye, X, 
    ChevronLeft, ChevronRight, ExternalLink, Clock, Tag, ArrowLeft 
} from 'lucide-react';

// Interfaces TypeScript para mejor tipado
interface Boletin {
    id: string;
    titulo: string;
    fecha: string;
    fechaFormateada: string;
    tipo: string;
    url: string;
    tamaño: string;
    año: number;
    hits: number;
    semana?: string;
    mes?: string;
}

interface Filtros {
    año: string;
    tipo: string;
    busqueda: string;
}

const PaginaBoletinesCompleta = () => {
    const [boletines, setBoletines] = useState<Boletin[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [filtros, setFiltros] = useState<Filtros>({
        año: '',
        tipo: '',
        busqueda: ''
    });
    const [paginaActual, setPaginaActual] = useState<number>(1);
    const [modalAbierto, setModalAbierto] = useState<boolean>(false);
    const [boletinSeleccionado, setBoletinSeleccionado] = useState<Boletin | null>(null);
    const [loadingPdf, setLoadingPdf] = useState<boolean>(false);
    const boletinesPorPagina = 12;

    // Cargar todos los boletines de todos los años
    useEffect(() => {
        const cargarTodosLosBoletines = async () => {
            try {
                console.log('🔄 Cargando todos los boletines...');
                
                const añosDisponibles = [2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018];
                let todosLosBoletines: Boletin[] = []; // ✅ CORRECIÓN: Tipado explícito

                for (const año of añosDisponibles) {
                    try {
                        const response = await fetch(`https://electrohuila.net/wp-json/electrohuila/v1/boletines-simple/${año}`);
                        const data = await response.json();
                        
                        if (data.success && data.data) {
                            const boletinesProcesados: Boletin[] = data.data.map((item: any) => ({
                                id: `${año}-${item.id}`,
                                titulo: item.titulo || item.archivo || 'Sin título',
                                fecha: item.fecha || new Date().toISOString(),
                                fechaFormateada: item.fecha_formateada || new Date().toLocaleDateString('es-ES'),
                                tipo: determinarTipo(item.titulo || item.archivo || ''),
                                url: item.url || item.url_descarga || '#',
                                tamaño: item.tamaño || 'N/A',
                                año: año,
                                hits: item.hits || 0,
                                semana: item.semana || '',
                                mes: item.mes || ''
                            }));

                            todosLosBoletines = [...todosLosBoletines, ...boletinesProcesados]; // ✅ CORREGIDO: Ya no hay error de tipado
                        }
                    } catch (error) {
                        console.warn(`Error cargando año ${año}:`, error);
                    }
                }

                // Ordenar por fecha más reciente
                const boletinesOrdenados = todosLosBoletines.sort((a, b) => 
                    new Date(b.fecha).getTime() - new Date(a.fecha).getTime()
                );
                
                console.log(`✅ ${boletinesOrdenados.length} boletines cargados`);
                setBoletines(boletinesOrdenados);
                setLoading(false);
                
            } catch (error) {
                console.error('❌ Error al cargar boletines:', error);
                
                // Datos de ejemplo en caso de error
                const datosEjemplo: Boletin[] = [
                    {
                        id: '2025-7413',
                        titulo: 'BOLETÍN DE PRENSA SEMANA 27 DEL 2025',
                        fecha: '2025-06-27',
                        fechaFormateada: '27 de junio de 2025',
                        tipo: 'Boletín de Prensa',
                        url: 'https://electrohuila.net/descargar/88/2025/7413/27-boletin-de-prensa-semana-27-del-2025-docx.pdf',
                        tamaño: '139 KB',
                        año: 2025,
                        hits: 319
                    },
                    {
                        id: '2025-7412',
                        titulo: 'BOLETÍN DE PRENSA SEMANA 26 DEL 2025',
                        fecha: '2025-06-20',
                        fechaFormateada: '20 de junio de 2025',
                        tipo: 'Boletín de Prensa',
                        url: 'https://electrohuila.net/descargar/88/2025/7412/26-boletin-de-prensa-semana-26-del-2025.pdf',
                        tamaño: '165 KB',
                        año: 2025,
                        hits: 105
                    }
                ];
                
                setBoletines(datosEjemplo);
                setLoading(false);
            }
        };

        cargarTodosLosBoletines();
    }, []);

    // Determinar tipo de documento
    const determinarTipo = (titulo: string): string => {
        const tituloLower = titulo.toLowerCase();
        if (tituloLower.includes('comunicado')) return 'Comunicado';
        if (tituloLower.includes('consignas')) return 'Consignas';
        return 'Boletín de Prensa';
    };

    // Obtener icono según el tipo
    const obtenerIcono = (tipo: string): string => {
        switch (tipo) {
            case 'Comunicado': return '📋';
            case 'Consignas': return '⚡';
            default: return '📢';
        }
    };

    // Obtener color según el tipo
    const obtenerColor = (tipo: string): string => {
        switch (tipo) {
            case 'Comunicado': return 'from-green-500 to-emerald-600';
            case 'Consignas': return 'from-purple-500 to-violet-600';
            default: return 'from-blue-500 to-indigo-600';
        }
    };

    // Filtrar boletines
    const boletinesFiltrados = boletines.filter(boletin => {
        const cumpleAño = !filtros.año || boletin.año.toString() === filtros.año;
        const cumpleTipo = !filtros.tipo || boletin.tipo === filtros.tipo;
        const cumpleBusqueda = !filtros.busqueda || 
            boletin.titulo.toLowerCase().includes(filtros.busqueda.toLowerCase());
        
        return cumpleAño && cumpleTipo && cumpleBusqueda;
    });

    // Paginación
    const totalPaginas = Math.ceil(boletinesFiltrados.length / boletinesPorPagina);
    const indiceInicio = (paginaActual - 1) * boletinesPorPagina;
    const indiceFin = indiceInicio + boletinesPorPagina;
    const boletinesPagina = boletinesFiltrados.slice(indiceInicio, indiceFin);

    // Funciones de modal
    const abrirModal = async (boletin: Boletin) => {
        setBoletinSeleccionado(boletin);
        setModalAbierto(true);
        setLoadingPdf(true);
        document.body.style.overflow = 'hidden';
        
        // Simular carga del PDF
        setTimeout(() => {
            setLoadingPdf(false);
        }, 1000);
    };

    const cerrarModal = () => {
        setModalAbierto(false);
        setBoletinSeleccionado(null);
        setLoadingPdf(false);
        document.body.style.overflow = 'unset';
    };

    // Obtener años únicos
    const añosDisponibles = [...new Set(boletines.map(b => b.año))].sort((a, b) => b - a);
    const tiposDisponibles = [...new Set(boletines.map(b => b.tipo))];

    // Navegar entre documentos en el modal
    const navegarModal = (direccion: 'anterior' | 'siguiente') => {
        if (!boletinSeleccionado) return;
        
        const indiceActual = boletinesFiltrados.findIndex(b => b.id === boletinSeleccionado.id);
        let nuevoIndice: number;
        
        if (direccion === 'anterior') {
            nuevoIndice = indiceActual > 0 ? indiceActual - 1 : boletinesFiltrados.length - 1;
        } else {
            nuevoIndice = indiceActual < boletinesFiltrados.length - 1 ? indiceActual + 1 : 0;
        }
        
        setBoletinSeleccionado(boletinesFiltrados[nuevoIndice]);
        setLoadingPdf(true);
        setTimeout(() => setLoadingPdf(false), 800);
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="animate-pulse">
                        <div className="h-12 bg-gray-300 rounded w-1/2 mx-auto mb-8"></div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {[...Array(12)].map((_, i) => (
                                <div key={i} className="bg-white rounded-xl shadow-lg overflow-hidden">
                                    <div className="h-48 bg-gray-300"></div>
                                    <div className="p-6">
                                        <div className="h-4 bg-gray-300 rounded mb-3"></div>
                                        <div className="h-6 bg-gray-300 rounded mb-3"></div>
                                        <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold mb-4">Boletines y Comunicados</h1>
                        <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                            Accede a toda nuestra información oficial, boletines de prensa y comunicados importantes.
                        </p>
                        <div className="mt-8 flex justify-center items-center space-x-8 text-sm">
                            <div className="flex items-center">
                                <FileText className="w-5 h-5 mr-2" />
                                {boletines.length} Documentos
                            </div>
                            <div className="flex items-center">
                                <Calendar className="w-5 h-5 mr-2" />
                                {añosDisponibles.length} Años
                            </div>
                            <div className="flex items-center">
                                <Tag className="w-5 h-5 mr-2" />
                                {tiposDisponibles.length} Categorías
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Filtros */}
            <div className="bg-white shadow-sm border-b sticky top-0 z-40">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-wrap gap-4 items-center justify-between">
                        {/* Búsqueda */}
                        <div className="flex-1 min-w-64">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                <input
                                    type="text"
                                    placeholder="Buscar boletines y comunicados..."
                                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    value={filtros.busqueda}
                                    onChange={(e) => {
                                        setFiltros({...filtros, busqueda: e.target.value});
                                        setPaginaActual(1);
                                    }}
                                />
                            </div>
                        </div>

                        {/* Filtros */}
                        <div className="flex gap-4">
                            <select
                                className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 min-w-32"
                                value={filtros.año}
                                onChange={(e) => {
                                    setFiltros({...filtros, año: e.target.value});
                                    setPaginaActual(1);
                                }}
                            >
                                <option value="">Todos los años</option>
                                {añosDisponibles.map(año => (
                                    <option key={año} value={año.toString()}>{año}</option>
                                ))}
                            </select>

                            <select
                                className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 min-w-40"
                                value={filtros.tipo}
                                onChange={(e) => {
                                    setFiltros({...filtros, tipo: e.target.value});
                                    setPaginaActual(1);
                                }}
                            >
                                <option value="">Todos los tipos</option>
                                {tiposDisponibles.map(tipo => (
                                    <option key={tipo} value={tipo}>{tipo}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* Resultados */}
                    <div className="mt-4 flex justify-between items-center text-sm text-gray-600">
                        <div>
                            Mostrando {boletinesFiltrados.length} resultados
                            {filtros.busqueda && ` para "${filtros.busqueda}"`}
                            {filtros.año && ` del año ${filtros.año}`}
                            {filtros.tipo && ` de tipo ${filtros.tipo}`}
                        </div>
                        <div>
                            Página {paginaActual} de {totalPaginas}
                        </div>
                    </div>
                </div>
            </div>

            {/* Grid de boletines */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {boletinesFiltrados.length === 0 ? (
                    <div className="text-center py-16">
                        <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">No se encontraron resultados</h3>
                        <p className="text-gray-500">Intenta ajustar los filtros de búsqueda</p>
                        <button
                            onClick={() => {
                                setFiltros({ año: '', tipo: '', busqueda: '' });
                                setPaginaActual(1);
                            }}
                            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                        >
                            Limpiar filtros
                        </button>
                    </div>
                ) : (
                    <>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {boletinesPagina.map((boletin) => (
                                <div
                                    key={boletin.id}
                                    className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group cursor-pointer"
                                    onClick={() => abrirModal(boletin)}
                                >
                                    {/* Header de la tarjeta */}
                                    <div className={`relative h-40 bg-gradient-to-br ${obtenerColor(boletin.tipo)} flex items-center justify-center`}>
                                        <div className="text-center">
                                            <span className="text-3xl mb-2 block">
                                                {obtenerIcono(boletin.tipo)}
                                            </span>
                                            <div className="text-white text-xs font-medium px-2 py-1 bg-white/20 rounded-full">
                                                {boletin.tipo}
                                            </div>
                                        </div>
                                        
                                        {/* Badge del año */}
                                        <div className="absolute top-3 left-3">
                                            <span className="px-2 py-1 rounded-full text-xs font-medium text-white bg-black/30">
                                                {boletin.año}
                                            </span>
                                        </div>

                                        {/* Overlay con acciones */}
                                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-3">
                                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-700 hover:text-blue-600 transition-colors">
                                                <Eye className="w-6 h-6" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Contenido */}
                                    <div className="p-6">
                                        <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                                            <div className="flex items-center">
                                                <Calendar className="w-3 h-3 mr-1" />
                                                {boletin.fechaFormateada}
                                            </div>
                                            <span className="bg-gray-100 px-2 py-1 rounded">
                                                {boletin.tamaño}
                                            </span>
                                        </div>
                                        
                                        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 text-sm leading-tight group-hover:text-blue-600 transition-colors">
                                            {boletin.titulo}
                                        </h3>
                                        
                                        <div className="flex items-center justify-between text-xs">
                                            <div className="flex items-center text-gray-500">
                                                <FileText className="w-3 h-3 mr-1" />
                                                PDF
                                            </div>
                                            {boletin.hits > 0 && (
                                                <div className="flex items-center text-gray-500">
                                                    <Eye className="w-3 h-3 mr-1" />
                                                    {boletin.hits} vistas
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Paginación */}
                        {totalPaginas > 1 && (
                            <div className="mt-12 flex justify-center">
                                <div className="flex items-center space-x-2">
                                    <button
                                        onClick={() => setPaginaActual(Math.max(1, paginaActual - 1))}
                                        disabled={paginaActual === 1}
                                        className="p-2 rounded-lg border border-gray-300 text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        <ChevronLeft className="w-5 h-5" />
                                    </button>
                                    
                                    {[...Array(totalPaginas)].map((_, i) => {
                                        const pagina = i + 1;
                                        const esActual = pagina === paginaActual;
                                        const mostrar = pagina === 1 || pagina === totalPaginas || 
                                                       Math.abs(pagina - paginaActual) <= 2;
                                        
                                        if (!mostrar) {
                                            if (pagina === paginaActual - 3 || pagina === paginaActual + 3) {
                                                return <span key={i} className="px-2">...</span>;
                                            }
                                            return null;
                                        }
                                        
                                        return (
                                            <button
                                                key={i}
                                                onClick={() => setPaginaActual(pagina)}
                                                className={`px-4 py-2 rounded-lg border transition-colors ${
                                                    esActual
                                                        ? 'bg-blue-500 text-white border-blue-500'
                                                        : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                                                }`}
                                            >
                                                {pagina}
                                            </button>
                                        );
                                    })}
                                    
                                    <button
                                        onClick={() => setPaginaActual(Math.min(totalPaginas, paginaActual + 1))}
                                        disabled={paginaActual === totalPaginas}
                                        className="p-2 rounded-lg border border-gray-300 text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        <ChevronRight className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        )}
                    </>
                )}
            </div>

            {/* Modal */}
            {modalAbierto && boletinSeleccionado && (
                <div className="fixed inset-0 z-50 overflow-y-auto">
                    <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
                        {/* Overlay */}
                        <div 
                            className="fixed inset-0 bg-black bg-opacity-75 transition-opacity"
                            onClick={cerrarModal}
                        ></div>

                        {/* Modal */}
                        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full">
                            {/* Header del modal */}
                            <div className={`bg-gradient-to-r ${obtenerColor(boletinSeleccionado.tipo)} px-6 py-4`}>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <span className="text-2xl mr-3">
                                            {obtenerIcono(boletinSeleccionado.tipo)}
                                        </span>
                                        <div>
                                            <h3 className="text-lg font-semibold text-white">
                                                {boletinSeleccionado.tipo}
                                            </h3>
                                            <p className="text-white/80 text-sm">
                                                {boletinSeleccionado.fechaFormateada} • {boletinSeleccionado.año}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        {/* Navegación en modal */}
                                        <button
                                            onClick={() => navegarModal('anterior')}
                                            className="text-white hover:text-gray-200 p-2 rounded-lg hover:bg-white/10 transition-colors"
                                            title="Documento anterior"
                                        >
                                            <ChevronLeft className="w-5 h-5" />
                                        </button>
                                        <button
                                            onClick={() => navegarModal('siguiente')}
                                            className="text-white hover:text-gray-200 p-2 rounded-lg hover:bg-white/10 transition-colors"
                                            title="Documento siguiente"
                                        >
                                            <ChevronRight className="w-5 h-5" />
                                        </button>
                                        <button
                                            onClick={cerrarModal}
                                            className="text-white hover:text-gray-200 p-2 rounded-lg hover:bg-white/10 transition-colors"
                                        >
                                            <X className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Contenido del modal */}
                            <div className="px-6 py-6 max-h-96 overflow-y-auto">
                                <h4 className="text-xl font-semibold text-gray-900 mb-4">
                                    {boletinSeleccionado.titulo}
                                </h4>
                                
                                <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                                    <div>
                                        <span className="font-medium text-gray-500">Tipo:</span>
                                        <p className="text-gray-900">{boletinSeleccionado.tipo}</p>
                                    </div>
                                    <div>
                                        <span className="font-medium text-gray-500">Fecha:</span>
                                        <p className="text-gray-900">{boletinSeleccionado.fechaFormateada}</p>
                                    </div>
                                    <div>
                                        <span className="font-medium text-gray-500">Tamaño:</span>
                                        <p className="text-gray-900">{boletinSeleccionado.tamaño}</p>
                                    </div>
                                    <div>
                                        <span className="font-medium text-gray-500">Año:</span>
                                        <p className="text-gray-900">{boletinSeleccionado.año}</p>
                                    </div>
                                    {boletinSeleccionado.hits > 0 && (
                                        <div>
                                            <span className="font-medium text-gray-500">Vistas:</span>
                                            <p className="text-gray-900">{boletinSeleccionado.hits}</p>
                                        </div>
                                    )}
                                </div>

                                {/* Vista previa del PDF */}
                                <div className="bg-gray-50 rounded-lg p-6 mb-6">
                                    {loadingPdf ? (
                                        <div className="text-center py-12">
                                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
                                            <p className="text-gray-600">Cargando documento...</p>
                                        </div>
                                    ) : (
                                        <div className="space-y-4">
                                            <div className="text-center mb-4">
                                                <h5 className="font-medium text-gray-900 mb-2">Vista previa del documento</h5>
                                                <p className="text-sm text-gray-600">
                                                    {boletinSeleccionado.titulo}
                                                </p>
                                            </div>
                                            
                                            {/* Visor de PDF integrado con múltiples opciones */}
                                            <div className="border border-gray-200 rounded-lg overflow-hidden bg-white">
                                                <iframe 
                                                    src={`https://docs.google.com/viewer?url=${encodeURIComponent(boletinSeleccionado.url)}&embedded=true`}
                                                    className="w-full h-96"
                                                    title={`Vista previa: ${boletinSeleccionado.titulo}`}
                                                    onLoad={() => console.log('PDF cargado exitosamente')}
                                                    onError={(e: React.SyntheticEvent<HTMLIFrameElement, Event>) => {
                                                        console.log('Error con Google Viewer, intentando cargar directamente');
                                                        // Fallback a carga directa
                                                        const target = e.target as HTMLIFrameElement;
                                                        target.src = `${boletinSeleccionado.url}#toolbar=1&navpanes=1&scrollbar=1&page=1&view=FitH`;
                                                    }}
                                                />
                                            </div>
                                            
                                            <div className="text-center text-xs text-gray-500">
                                                Si el documento no se muestra correctamente, haz clic en "Abrir documento" para verlo en una nueva ventana.
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Acciones */}
                                <div className="flex justify-end space-x-3">
                                    <button
                                        onClick={cerrarModal}
                                        className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                                    >
                                        Cerrar
                                    </button>
                                    <a
                                        href={boletinSeleccionado.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors flex items-center"
                                    >
                                        <Download className="w-4 h-4 mr-2" />
                                        Descargar
                                    </a>
                                    <a
                                        href={boletinSeleccionado.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center"
                                    >
                                        <ExternalLink className="w-4 h-4 mr-2" />
                                        Abrir en nueva ventana
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <style jsx>{`
                .line-clamp-2 {
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
            `}</style>
        </div>
    );
};

export default PaginaBoletinesCompleta;