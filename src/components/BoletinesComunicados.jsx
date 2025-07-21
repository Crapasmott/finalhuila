'use client';
import React, { useState, useEffect } from 'react';
import { FileText, Download, Calendar, ExternalLink, ChevronRight, X } from 'lucide-react';

const BoletinesComunicados = () => {
    const [boletines, setBoletines] = useState([]);
    const [loading, setLoading] = useState(true);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [modalAbierto, setModalAbierto] = useState(false);
    const [boletinSeleccionado, setBoletinSeleccionado] = useState(null);

    // Datos de ejemplo como fallback
    const datosFallback = [
        {
            id: 1,
            titulo: "Boletín de Prensa - Inversiones en Infraestructura Eléctrica 2025",
            fecha: "2025-01-15",
            url: "https://www.electrohuila.com.co/wp-content/uploads/2025/01/boletin-infraestructura.pdf",
            tipo: "Boletín",
            año: 2025
        },
        {
            id: 2,
            titulo: "Comunicado Oficial - Nuevas Tarifas Energéticas",
            fecha: "2024-12-20",
            url: "https://www.electrohuila.com.co/wp-content/uploads/2024/12/comunicado-tarifas.pdf",
            tipo: "Comunicado",
            año: 2024
        },
        {
            id: 3,
            titulo: "Consignas de Trabajo - Mantenimiento Preventivo",
            fecha: "2024-11-10",
            url: "https://www.electrohuila.com.co/wp-content/uploads/2024/11/consignas-mantenimiento.pdf",
            tipo: "Consignas",
            año: 2024
        }
    ];

    // Función para obtener datos de múltiples fuentes
    const obtenerBoletines = async () => {
        try {
            setLoading(true);
            let todosLosBoletines = [];

            // FUENTE 1: Tu API personalizada (solo 2025 funciona por ahora)
            try {
                console.log('🔍 Cargando desde API personalizada...');
                const response = await fetch(`https://www.electrohuila.com.co/wp-json/electrohuila/v1/boletines-simple/2025`);
                if (response.ok) {
                    const data = await response.json();
                    if (data.success && data.data && Array.isArray(data.data)) {
                        const boletinesCustom = data.data.map(item => ({
                            id: item.id,
                            titulo: item.titulo,
                            fecha: `${item.year}-01-01`,
                            url: item.url,
                            tipo: item.tipo || 'Boletín',
                            año: item.year || 2025,
                            tamaño: item.tamaño || '',
                            semana: item.semana || '',
                            hits: item.hits || 0,
                            archivo: item.archivo || '',
                            fuente: 'api_custom'
                        }));
                        todosLosBoletines = [...todosLosBoletines, ...boletinesCustom];
                        console.log(`✅ API personalizada: ${boletinesCustom.length} documentos de 2025`);
                    }
                }
            } catch (error) {
                console.log('❌ Error en API personalizada:', error);
            }

            // FUENTE 2: API nativa de WordPress (otros años y más documentos)
            try {
                console.log('🔍 Cargando desde API nativa de WordPress...');
                
                // Buscar documentos PDF de diferentes categorías
                const searchTerms = ['boletin', 'comunicado', 'consigna', 'informe', 'tarifa'];
                
                for (const term of searchTerms) {
                    try {
                        const response = await fetch(`https://electrohuila.net/wp-json/wp/v2/media?search=${term}&per_page=20&mime_type=application/pdf`);
                        if (response.ok) {
                            const mediaData = await response.json();
                            
                            const boletinesWordPress = mediaData
                                .filter(item => item.mime_type === 'application/pdf')
                                .map(item => {
                                    // Extraer año del título o fecha
                                    const titulo = item.title.rendered;
                                    const fecha = item.date;
                                    let año = new Date(fecha).getFullYear();
                                    
                                    // Detectar año del título si es posible
                                    const añoMatch = titulo.match(/20(18|19|20|21|22|23|24|25)/);
                                    if (añoMatch) {
                                        año = parseInt('20' + añoMatch[1]);
                                    }
                                    
                                    // Detectar tipo de documento
                                    let tipo = 'Documento';
                                    const tituloLower = titulo.toLowerCase();
                                    if (tituloLower.includes('boletin') || tituloLower.includes('boletín')) tipo = 'Boletín';
                                    else if (tituloLower.includes('comunicado')) tipo = 'Comunicado';
                                    else if (tituloLower.includes('consigna')) tipo = 'Consignas';
                                    else if (tituloLower.includes('informe')) tipo = 'Informe';
                                    else if (tituloLower.includes('tarifa')) tipo = 'Tarifa';
                                    
                                    // Extraer semana si está en el título
                                    const semanaMatch = titulo.match(/semana\s*(\d+)/i);
                                    const semana = semanaMatch ? `Semana ${semanaMatch[1]}` : '';
                                    
                                    // Formatear tamaño
                                    let tamaño = '';
                                    if (item.media_details && item.media_details.filesize) {
                                        const bytes = item.media_details.filesize;
                                        if (bytes >= 1048576) {
                                            tamaño = (bytes / 1048576).toFixed(1) + ' MB';
                                        } else if (bytes >= 1024) {
                                            tamaño = (bytes / 1024).toFixed(0) + ' KB';
                                        } else {
                                            tamaño = bytes + ' bytes';
                                        }
                                    }
                                    
                                    return {
                                        id: item.id,
                                        titulo: titulo,
                                        fecha: fecha,
                                        url: item.source_url,
                                        tipo: tipo,
                                        año: año,
                                        tamaño: tamaño,
                                        semana: semana,
                                        hits: 0,
                                        archivo: item.slug,
                                        fuente: 'wp_native'
                                    };
                                });
                            
                            todosLosBoletines = [...todosLosBoletines, ...boletinesWordPress];
                            console.log(`✅ WordPress (${term}): ${boletinesWordPress.length} documentos`);
                        }
                    } catch (termError) {
                        console.log(`❌ Error buscando "${term}":`, termError);
                    }
                }
                
            } catch (error) {
                console.log('❌ Error en API nativa de WordPress:', error);
            }

            // Eliminar duplicados por ID
            const boletinesUnicos = todosLosBoletines.filter((item, index, self) => 
                index === self.findIndex(t => t.id === item.id)
            );

            console.log(`🎯 Total documentos únicos cargados: ${boletinesUnicos.length}`);
            console.log('📊 Por fuente:', {
                api_custom: boletinesUnicos.filter(b => b.fuente === 'api_custom').length,
                wp_native: boletinesUnicos.filter(b => b.fuente === 'wp_native').length
            });
            
            if (boletinesUnicos.length > 0) {
                // Ordenar por fecha más reciente primero
                boletinesUnicos.sort((a, b) => {
                    const fechaA = new Date(a.fecha || '2020-01-01');
                    const fechaB = new Date(b.fecha || '2020-01-01');
                    return fechaB - fechaA;
                });
                setBoletines(boletinesUnicos);
            } else {
                console.log('No se cargaron datos, usando fallback');
                setBoletines(datosFallback);
            }
        } catch (error) {
            console.error('Error general cargando boletines:', error);
            setBoletines(datosFallback);
        } finally {
            setLoading(false);
        }
    };

    // Función para detectar tipo de documento
    const detectarTipo = (titulo) => {
        const tituloLower = titulo.toLowerCase();
        if (tituloLower.includes('boletín') || tituloLower.includes('boletin')) return 'Boletín';
        if (tituloLower.includes('comunicado')) return 'Comunicado';
        if (tituloLower.includes('consigna')) return 'Consignas';
        if (tituloLower.includes('aviso')) return 'Aviso';
        return 'Boletín';
    };

    // Función para abrir modal
    const abrirModal = (boletin) => {
        setBoletinSeleccionado(boletin);
        setModalAbierto(true);
        document.body.style.overflow = 'hidden'; // Evitar scroll del body
    };

    // Función para cerrar modal
    const cerrarModal = () => {
        setModalAbierto(false);
        setBoletinSeleccionado(null);
        document.body.style.overflow = 'unset';
    };

    // Efecto para cargar datos
    useEffect(() => {
        obtenerBoletines();
    }, []);

    // Efecto para animación del slider
    useEffect(() => {
        if (boletines.length === 0) return;

        const intervalo = setInterval(() => {
            setScrollPosition(prev => prev + 3);
        }, 6);

        return () => clearInterval(intervalo);
    }, [boletines]);

    // Función para formatear fecha (adaptada para tu estructura)
    const formatearFecha = (fecha, año, semana) => {
        if (semana && año) {
            return `${semana} - ${año}`;
        }
        if (!fecha || fecha === `${año}-01-01`) {
            return `Año ${año}`;
        }
        const fechaObj = new Date(fecha);
        return fechaObj.toLocaleDateString('es-ES', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    // Función para obtener color por tipo
    const obtenerColorPorTipo = (tipo) => {
        switch (tipo) {
            case 'Boletín': return 'bg-blue-100 text-blue-800 border border-blue-200';
            case 'Comunicado': return 'bg-green-100 text-green-800 border border-green-200';
            case 'Consignas': return 'bg-purple-100 text-purple-800 border border-purple-200';
            case 'Aviso': return 'bg-orange-100 text-orange-800 border border-orange-200';
            default: return 'bg-gray-100 text-gray-800 border border-gray-200';
        }
    };

    // Función para obtener icono por tipo
    const obtenerIconoPorTipo = (tipo) => {
        switch (tipo) {
            case 'Boletín': return <FileText className="w-4 h-4" />;
            case 'Comunicado': return <ExternalLink className="w-4 h-4" />;
            case 'Consignas': return <Calendar className="w-4 h-4" />;
            default: return <FileText className="w-4 h-4" />;
        }
    };

    if (loading) {
        return (
            <div className="w-full max-w-7xl mx-auto px-4 py-8">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600 mx-auto"></div>
                    <p className="mt-4 text-gray-600">Cargando boletines y comunicados...</p>
                </div>
            </div>
        );
    }

    return (
        <>
            <div className="w-full py-8">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Boletines y Comunicados de Prensa
                    </h2>
                    <p className="text-gray-600 text-lg mb-6">
                        Mantente informado con nuestras últimas noticias y comunicados oficiales
                    </p>
                </div>

                <div className="max-w-6xl mx-auto relative overflow-hidden">
                    {/* Slider container */}
                    <div className="relative h-80 overflow-hidden">
                        {/* Gradientes de desvanecimiento suaves más sutiles */}
                        <div className="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-gray-50 via-gray-50/80 to-transparent z-10"></div>
                        <div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-gray-50 via-gray-50/80 to-transparent z-10"></div>
                        
                        {/* Contenedor de tarjetas */}
                        <div 
                            className="flex space-x-4 absolute top-8 transition-transform duration-1000 ease-linear"
                            style={{
                                transform: `translateX(-${scrollPosition % (boletines.length * 280)}px)`,
                                width: `${(boletines.length * 2) * 280}px`
                            }}
                            onMouseEnter={() => setScrollPosition(prev => prev)}
                            onMouseLeave={() => {}}
                        >
                            {/* Duplicar boletines para efecto infinito */}
                            {[...boletines, ...boletines].map((boletin, index) => (
                                <div
                                    key={`${boletin.id}-${index}`}
                                    className="flex-none w-64 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105 border border-gray-200"
                                    onClick={() => abrirModal(boletin)}
                                >
                                    <div className="p-4">
                                        {/* Header con badge */}
                                        <div className="flex items-center justify-between mb-3">
                                            <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${obtenerColorPorTipo(boletin.tipo)}`}>
                                                {obtenerIconoPorTipo(boletin.tipo)}
                                                {boletin.tipo}
                                            </span>
                                            <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs font-bold">
                                                {boletin.año}
                                            </span>
                                        </div>

                                        {/* Título */}
                                        <h3 className="text-sm font-semibold text-gray-900 mb-2 line-clamp-2 leading-tight">
                                            {boletin.titulo}
                                        </h3>

                                        {/* Fecha y semana */}
                                        <div className="flex items-center text-xs text-gray-600 mb-3">
                                            <Calendar className="w-3 h-3 mr-1 text-gray-400" />
                                            {formatearFecha(boletin.fecha, boletin.año, boletin.semana)}
                                        </div>

                                        {/* Info adicional */}
                                        {boletin.tamaño && (
                                            <div className="text-xs text-gray-500 mb-2">
                                                📄 {boletin.tamaño} • 👁️ {boletin.hits} vistas
                                            </div>
                                        )}

                                        {/* Botones de acción */}
                                        <div className="flex space-x-2">
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    abrirModal(boletin);
                                                }}
                                                className="flex-1 bg-orange-600 hover:bg-orange-700 text-white text-xs font-medium py-1.5 px-3 rounded-lg transition-colors duration-200 flex items-center justify-center"
                                            >
                                                <FileText className="w-3 h-3 mr-1" />
                                                Ver
                                            </button>
                                            <a
                                                href={boletin.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                onClick={(e) => e.stopPropagation()}
                                                className="bg-gray-100 hover:bg-gray-200 text-gray-700 p-1.5 rounded-lg transition-colors duration-200"
                                                title="Descargar PDF"
                                            >
                                                <Download className="w-3 h-3" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Botón para ver todos - centrado */}
                    <div className="text-center mt-6">
                        <a
                            href="/boletines-comunicados"
                            className="inline-flex items-center px-8 py-3 bg-orange-600 hover:bg-orange-700 text-white font-medium rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
                        >
                            Ver todos los boletines
                            <ChevronRight className="w-5 h-5 ml-2" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Modal */}
            {modalAbierto && boletinSeleccionado && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden">
                        {/* Header del modal */}
                        <div className="bg-orange-600 text-white p-4 flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                                <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-white bg-opacity-20 text-white`}>
                                    {obtenerIconoPorTipo(boletinSeleccionado.tipo)}
                                    {boletinSeleccionado.tipo}
                                </span>
                                <span className="bg-white bg-opacity-20 text-white px-2 py-1 rounded-full text-xs font-bold">
                                    {boletinSeleccionado.año}
                                </span>
                            </div>
                            <button
                                onClick={cerrarModal}
                                className="text-white hover:bg-white hover:bg-opacity-20 p-2 rounded-lg transition-colors"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Contenido del modal */}
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                                {boletinSeleccionado.titulo}
                            </h3>
                            
                            <div className="flex items-center text-sm text-gray-600 mb-4">
                                <Calendar className="w-4 h-4 mr-2" />
                                {formatearFecha(boletinSeleccionado.fecha, boletinSeleccionado.año, boletinSeleccionado.semana)}
                                {boletinSeleccionado.tamaño && (
                                    <>
                                        <span className="mx-2">•</span>
                                        <span>📄 {boletinSeleccionado.tamaño}</span>
                                    </>
                                )}
                                {boletinSeleccionado.hits && (
                                    <>
                                        <span className="mx-2">•</span>
                                        <span>👁️ {boletinSeleccionado.hits} vistas</span>
                                    </>
                                )}
                            </div>

                            {/* Visor de PDF */}
                            <div className="bg-gray-100 rounded-lg overflow-hidden mb-4">
                                <iframe
                                    src={`https://docs.google.com/viewer?url=${encodeURIComponent(boletinSeleccionado.url)}&embedded=true`}
                                    className="w-full h-96 border-0"
                                    title="Visualizador de PDF"
                                />
                            </div>

                            {/* Botones de acción del modal */}
                            <div className="flex space-x-3">
                                <a
                                    href={boletinSeleccionado.url}
                                    download
                                    className="flex-1 bg-green-600 hover:bg-green-700 text-white text-center py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center"
                                >
                                    <Download className="w-4 h-4 mr-2" />
                                    Descargar PDF
                                </a>
                                <a
                                    href={boletinSeleccionado.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center"
                                >
                                    <ExternalLink className="w-4 h-4 mr-2" />
                                    Abrir en nueva ventana
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default BoletinesComunicados;