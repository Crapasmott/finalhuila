'use client';

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, FileText, Download, Calendar, ExternalLink } from 'lucide-react';

const BoletinesComunicados = () => {
    const [boletines, setBoletines] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    // Cargar datos desde la API de WordPress
    useEffect(() => {
        const cargarBoletines = async () => {
            try {
                const response = await fetch('https://electrohuila.net/wp-json/wp/v2/media?per_page=100');
                const data = await response.json();
                
                // Procesar y filtrar los datos
                const boletinesProcesados = data.filter(item => 
                    item.mime_type === 'application/pdf' || 
                    item.mime_type === 'application/msword'
                ).map(item => ({
                    id: item.id,
                    titulo: item.title.rendered,
                    fecha: new Date(item.date).toLocaleDateString('es-ES', {
                        day: '2-digit',
                        month: 'long',
                        year: 'numeric'
                    }),
                    tipo: item.title.rendered.toLowerCase().includes('boletin') ? 'Boletín de Prensa' : 'Comunicado',
                    url: item.source_url,
                    imagen: item.media_details?.sizes?.medium?.source_url || null,
                    icono: item.title.rendered.toLowerCase().includes('boletin') ? '📢' : '📋'
                }));

                // Ordenar por fecha más reciente
                const boletinesOrdenados = boletinesProcesados.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));
                setBoletines(boletinesOrdenados);
                setLoading(false);
            } catch (error) {
                console.error('Error al cargar boletines:', error);
                // Datos de ejemplo más extensos para demostrar el slider
                const ejemplos = [
                    {
                        id: 1,
                        titulo: '27 BOLETÍN DE PRENSA SEMANA 27 DEL 2025',
                        fecha: '27 junio 2025',
                        tipo: 'Boletín de Prensa',
                        url: '#',
                        icono: '📢'
                    },
                    {
                        id: 2,
                        titulo: 'COMUNICADO EMERGENCIA NEIVA',
                        fecha: '25 junio 2025',
                        tipo: 'Comunicado',
                        url: '#',
                        icono: '📋'
                    },
                    {
                        id: 3,
                        titulo: 'COMUNICADO EMERGENCIA GARZÓN',
                        fecha: '25 junio 2025',
                        tipo: 'Comunicado',
                        url: '#',
                        icono: '📋'
                    },
                    {
                        id: 4,
                        titulo: '26 BOLETÍN DE PRENSA SEMANA 26 DEL 2025',
                        fecha: '25 junio 2025',
                        tipo: 'Boletín de Prensa',
                        url: '#',
                        icono: '📢'
                    },
                    {
                        id: 5,
                        titulo: 'INFORME TRIMESTRAL SOBRE ACCESO A INFORMACIÓN',
                        fecha: '22 febrero 2025',
                        tipo: 'Informe',
                        url: '#',
                        icono: '📊'
                    },
                    {
                        id: 6,
                        titulo: 'BOLETÍN DE PRENSA JULIO 2023',
                        fecha: '31 julio 2023',
                        tipo: 'Boletín de Prensa',
                        url: '#',
                        icono: '📢'
                    },
                    {
                        id: 7,
                        titulo: 'PROGRAMACIÓN CONSIGNAS SEMANA 31',
                        fecha: '31 julio 2023',
                        tipo: 'Programación',
                        url: '#',
                        icono: '📅'
                    },
                    {
                        id: 8,
                        titulo: 'TARIFA JULIO 2023',
                        fecha: '20 septiembre 2023',
                        tipo: 'Tarifa',
                        url: '#',
                        icono: '💰'
                    },
                    {
                        id: 9,
                        titulo: 'COMUNICADO MANTENIMIENTO RED ELÉCTRICA',
                        fecha: '15 marzo 2024',
                        tipo: 'Comunicado',
                        url: '#',
                        icono: '📋'
                    },
                    {
                        id: 10,
                        titulo: 'BOLETÍN ESPECIAL ENERGÍAS RENOVABLES',
                        fecha: '10 abril 2024',
                        tipo: 'Boletín de Prensa',
                        url: '#',
                        icono: '📢'
                    },
                    {
                        id: 11,
                        titulo: 'INFORME GESTIÓN SOSTENIBILIDAD 2024',
                        fecha: '5 mayo 2024',
                        tipo: 'Informe',
                        url: '#',
                        icono: '📊'
                    },
                    {
                        id: 12,
                        titulo: 'COMUNICADO NUEVAS TARIFAS 2025',
                        fecha: '1 enero 2025',
                        tipo: 'Comunicado',
                        url: '#',
                        icono: '📋'
                    }
                ];
                setBoletines(ejemplos);
                setLoading(false);
            }
        };

        cargarBoletines();
    }, []);

    // Auto-play slider - Avanza UNA TARJETA cada 3 segundos
    useEffect(() => {
        if (boletines.length > 0 && isAutoPlaying) {
            const interval = setInterval(() => {
                setCurrentIndex(prevIndex => {
                    // Si llegamos al final, volver al inicio
                    if (prevIndex >= boletines.length - 4) {
                        return 0;
                    }
                    return prevIndex + 1;
                });
            }, 3000); // Cada 3 segundos

            return () => clearInterval(interval);
        }
    }, [boletines.length, isAutoPlaying]);

    // Funciones de navegación manual
    const siguiente = () => {
        setIsAutoPlaying(false); // Pausar auto-play cuando el usuario interactúa
        setCurrentIndex(prevIndex => {
            if (prevIndex >= boletines.length - 4) {
                return 0;
            }
            return prevIndex + 1;
        });
        // Reanudar auto-play después de 10 segundos
        setTimeout(() => setIsAutoPlaying(true), 10000);
    };

    const anterior = () => {
        setIsAutoPlaying(false);
        setCurrentIndex(prevIndex => {
            if (prevIndex <= 0) {
                return Math.max(0, boletines.length - 4);
            }
            return prevIndex - 1;
        });
        setTimeout(() => setIsAutoPlaying(true), 10000);
    };

    // Obtener boletines visibles (4 a la vez)
    const boletinesVisibles = boletines.slice(currentIndex, currentIndex + 4);
    
    // Si no hay suficientes elementos al final, completar con los del inicio
    if (boletinesVisibles.length < 4 && boletines.length >= 4) {
        const faltantes = 4 - boletinesVisibles.length;
        const adicionales = boletines.slice(0, faltantes);
        boletinesVisibles.push(...adicionales);
    }

    if (loading) {
        return (
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <div className="animate-pulse">
                            <div className="h-8 bg-gray-300 rounded mx-auto w-64 mb-4"></div>
                            <div className="h-4 bg-gray-300 rounded mx-auto w-96"></div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Título de la sección */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Boletines y Comunicados
                    </h2>
                    <div className="w-24 h-1 bg-orange-500 mx-auto mb-4"></div>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Mantente informado con nuestras últimas publicaciones, comunicados oficiales y boletines de prensa.
                    </p>
                </div>

                {/* Carrusel de boletines */}
                <div className="relative">
                    {/* Botones de navegación */}
                    {boletines.length > 4 && (
                        <>
                            <button
                                onClick={anterior}
                                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-orange-600 hover:bg-orange-50 transition-all duration-200"
                                aria-label="Anterior"
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </button>
                            
                            <button
                                onClick={siguiente}
                                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-orange-600 hover:bg-orange-50 transition-all duration-200"
                                aria-label="Siguiente"
                            >
                                <ChevronRight className="w-6 h-6" />
                            </button>
                        </>
                    )}

                    {/* Contenedor con overflow hidden para la animación */}
                    <div className="overflow-hidden">
                        {/* Grid de tarjetas con transición suave */}
                        <div 
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-500 ease-in-out"
                            style={{
                                transform: `translateX(-${currentIndex * (100 / 4)}%)`,
                                width: `${Math.max(boletines.length, 4) * (100 / 4)}%`
                            }}
                        >
                            {boletines.map((boletin, index) => (
                                <div 
                                    key={`${boletin.id}-${index}`}
                                    className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group w-full"
                                >
                                    {/* Imagen de vista previa o icono */}
                                    <div className="relative h-48 bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                                        {boletin.imagen ? (
                                            <img 
                                                src={boletin.imagen} 
                                                alt={boletin.titulo}
                                                className="w-full h-full object-cover"
                                            />
                                        ) : (
                                            <div className="text-center">
                                                <span className="text-4xl mb-2 block">{boletin.icono}</span>
                                                <div className="text-white text-sm font-medium px-3 py-1 bg-white/20 rounded-full">
                                                    {boletin.tipo}
                                                </div>
                                            </div>
                                        )}
                                        
                                        {/* Overlay con tipo de documento */}
                                        <div className="absolute top-3 left-3">
                                            <span className={`px-3 py-1 rounded-full text-xs font-medium text-white ${
                                                boletin.tipo === 'Boletín de Prensa' 
                                                    ? 'bg-orange-500' 
                                                    : 'bg-blue-500'
                                            }`}>
                                                {boletin.tipo}
                                            </span>
                                        </div>

                                        {/* Botón de descarga en hover */}
                                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                            <a
                                                href={boletin.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-700 hover:text-orange-600 transition-colors"
                                            >
                                                <Download className="w-6 h-6" />
                                            </a>
                                        </div>
                                    </div>

                                    {/* Contenido */}
                                    <div className="p-6">
                                        <div className="flex items-center text-sm text-gray-500 mb-3">
                                            <Calendar className="w-4 h-4 mr-2" />
                                            {boletin.fecha}
                                        </div>
                                        
                                        <h3 className="font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-orange-600 transition-colors">
                                            {boletin.titulo}
                                        </h3>
                                        
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center text-sm text-gray-500">
                                                <FileText className="w-4 h-4 mr-1" />
                                                PDF
                                            </div>
                                            
                                            <a
                                                href={boletin.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-orange-600 hover:text-orange-700 transition-colors flex items-center text-sm font-medium"
                                            >
                                                Ver documento
                                                <ExternalLink className="w-4 h-4 ml-1" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Indicadores de progreso */}
                    {boletines.length > 4 && (
                        <div className="flex justify-center mt-8 space-x-2">
                            {Array.from({ length: Math.max(1, boletines.length - 3) }, (_, i) => (
                                <button
                                    key={i}
                                    onClick={() => {
                                        setCurrentIndex(i);
                                        setIsAutoPlaying(false);
                                        setTimeout(() => setIsAutoPlaying(true), 10000);
                                    }}
                                    className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                                        currentIndex === i
                                            ? 'bg-orange-500'
                                            : 'bg-gray-300 hover:bg-gray-400'
                                    }`}
                                    aria-label={`Ir al grupo ${i + 1}`}
                                />
                            ))}
                        </div>
                    )}

                    {/* Indicador de auto-play */}
                    <div className="flex justify-center mt-4">
                        <div className="flex items-center text-sm text-gray-500">
                            <div className={`w-2 h-2 rounded-full mr-2 ${isAutoPlaying ? 'bg-green-500 animate-pulse' : 'bg-gray-400'}`}></div>
                            {isAutoPlaying ? 'Reproducción automática' : 'Pausado'}
                        </div>
                    </div>
                </div>

                {/* Botón para ver todos */}
                <div className="text-center mt-12">
                    <a
                        href="/boletines-comunicados"
                        className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-xl font-semibold hover:from-orange-700 hover:to-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                        <FileText className="w-5 h-5 mr-2" />
                        Ver todos los boletines
                        <ChevronRight className="w-5 h-5 ml-2" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default BoletinesComunicados;