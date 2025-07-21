'use client';

import React, { useState } from 'react';
import Link from 'next/link';

// Interfaces TypeScript
interface AccordionItem {
  id: string;
  title: string;
  content: string;
  icon: string;
}

export default function EticaCumplimientoPage(): React.JSX.Element {
    // Estados correctamente tipados
    const [expandedItem, setExpandedItem] = useState<string | null>('soborno');

    // Funciones tipadas
    const toggleItem = (itemId: string): void => {
        if (expandedItem === itemId) {
            setExpandedItem(null);
        } else {
            setExpandedItem(itemId);
        }
    };

    const isExpanded = (itemId: string): boolean => expandedItem === itemId;

    const accordionItems: AccordionItem[] = [
        {
            id: 'soborno',
            title: '¿Qué es el soborno?',
            content: 'En ElectroHuila S.A. E.S.P se entenderá cómo soborno ofrecer, prometer, dar, aceptar o solicitar ventajas como incentivo para cometer una acción ilegal, poco ética o que implica un abuso de confianza, lo que conlleva a obtener provecho a título personal o beneficios a favor de terceros mediante la omisión, alteración de información o la toma de decisiones.',
            icon: '⚠️'
        },
        {
            id: 'hospitalidades',
            title: '¿Qué son Hospitalidades, Obsequios y Beneficios?',
            content: 'Son atenciones corporativas que se otorgan o reciben en desarrollo de relaciones comerciales o institucionales, que pueden ser en dinero o en especie, tales como: alimentación, transporte, alojamiento, actividades recreativas, artículos promocionales, entradas a eventos deportivos o culturales, entre otros.',
            icon: '🎁'
        },
        {
            id: 'regalos',
            title: '¿Qué hacer con los regalos hospitalidad, donaciones y demás beneficios que nos lleguen ya sea a la oficina al hogar?',
            content: 'Cuando un colaborador de ElectroHuila S.A. E.S.P. reciba hospitalidades, obsequios o beneficios, deberá informar a su jefe inmediato y a la Gerencia General para determinar el manejo adecuado según las políticas corporativas.',
            icon: '📋'
        },
        {
            id: 'corrupcion',
            title: '¿Qué es corrupción?',
            content: 'Es el abuso de posiciones de poder o de confianza, para el beneficio particular en detrimento del interés colectivo, realizado a través de ofrecer o solicitar, entregar o recibir bienes o dinero en especie, en servicios o beneficios, a cambio de acciones, decisiones u omisiones.',
            icon: '🚫'
        },
        {
            id: 'lineamientos',
            title: 'Lineamientos de prevención del soborno y corrupción',
            content: 'ElectroHuila S.A. E.S.P. ha establecido lineamientos para prevenir actos de soborno y corrupción, incluyendo mecanismos de monitoreo, canales de denuncia y formación a colaboradores.',
            icon: '🛡️'
        },
        {
            id: 'reportar',
            title: '¿Quién puede reportar un caso de soborno y/o corrupción?',
            content: 'Cualquier persona interna o externa que tenga conocimiento o sospechas razonables de actos de soborno o corrupción puede realizar un reporte a través de los canales oficiales establecidos.',
            icon: '📞'
        },
        {
            id: 'acciones',
            title: 'ElectroHuila S.A E.S.P. ha realizado acciones contundentes contra el Soborno y Corrupción',
            content: 'La empresa ha implementado políticas, procedimientos y controles para prevenir y combatir el soborno y la corrupción, en línea con estándares nacionales e internacionales.',
            icon: '💪'
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header con colores suaves */}
            <div className="bg-gradient-to-r from-slate-700 via-slate-600 to-blue-700 text-white shadow-lg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="relative">
                        <div className="absolute -top-4 -left-4 w-24 h-24 bg-white/5 rounded-full blur-xl"></div>
                        <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-white/5 rounded-full blur-xl"></div>
                        
                        <h1 className="text-4xl sm:text-5xl font-light mb-6 relative">
                            Ética <span className="text-blue-200">y Cumplimiento</span>
                        </h1>
                        
                        <div className="text-lg text-slate-200 mb-6 max-w-2xl">
                            Construyendo una cultura de transparencia e integridad
                        </div>
                        
                        {/* Breadcrumbs suaves */}
                        <nav className="flex items-center space-x-2 text-slate-300">
                            <Link href="/" className="hover:text-white transition-colors flex items-center">
                                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                                </svg>
                                Inicio
                            </Link>
                            <span>•</span>
                            <Link href="/institucional" className="hover:text-white transition-colors">
                                Institucional
                            </Link>
                            <span>•</span>
                            <span className="text-blue-200 font-medium">Ética y Cumplimiento</span>
                        </nav>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
                {/* Estadísticas con colores suaves */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white rounded-2xl shadow-md p-8 text-center transform hover:scale-105 transition-transform border border-gray-100">
                        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">100%</h3>
                        <p className="text-gray-600">Transparencia en procesos</p>
                    </div>
                    
                    <div className="bg-white rounded-2xl shadow-md p-8 text-center transform hover:scale-105 transition-transform border border-gray-100">
                        <div className="w-16 h-16 bg-gradient-to-r from-slate-500 to-slate-600 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.268 16.5c-.77.833.192 2.5 1.732 2.5z" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">0</h3>
                        <p className="text-gray-600">Tolerancia a la corrupción</p>
                    </div>
                    
                    <div className="bg-white rounded-2xl shadow-md p-8 text-center transform hover:scale-105 transition-transform border border-gray-100">
                        <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">24/7</h3>
                        <p className="text-gray-600">Línea de transparencia</p>
                    </div>
                </div>

                {/* Sección imagen y texto con colores suaves */}
                <div className="bg-white rounded-2xl shadow-lg p-10 border border-gray-100">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1">
                            <div className="relative">
                                <img 
                                    src="/images/etica-768x512.jpg.webp" 
                                    alt="Ejecutivo de ElectroHuila" 
                                    className="w-full h-auto rounded-2xl shadow-lg"
                                />
                                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2 space-y-6">
                            <div className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium border border-blue-100">
                                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                Código de Ética Corporativo
                            </div>
                            
                            <h2 className="text-3xl font-bold text-gray-900 leading-tight">
                                Nuestro compromiso con la 
                                <span className="text-blue-600"> integridad</span>
                            </h2>
                            
                            <div className="space-y-4 text-gray-700 leading-relaxed">
                                <p>
                                    Para la Electrificadora del Huila S.A E.S.P., el Código de Ética refleja el 
                                    compromiso institucional para el adecuado funcionamiento de nuestro Gobierno 
                                    Corporativo basado en la transparencia e integridad.
                                </p>
                                <p>
                                    En este documento se integran los pilares éticos del comportamiento y define la cultura 
                                    de cero tolerancia a tipologías relacionadas con soborno, corrupción, fraude, 
                                    lavado de activos, financiación del terrorismo, y otras conductas conexas.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Botones de descarga con colores suaves */}
                    <div className="flex flex-wrap gap-6 mt-12 justify-center">
                        <a 
                            href="/documentos/etica/08.-CODIGO-DE-ETICA.pdf" 
                            className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            <svg className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <polyline points="7 10 12 15 17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <line x1="12" y1="15" x2="12" y2="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span className="font-semibold">Código de Ética</span>
                        </a>
                        <a 
                            href="/documentos/etica/codigo-etica-electrohuila.pdf" 
                            className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white rounded-xl hover:from-emerald-700 hover:to-emerald-800 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            <svg className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <polyline points="7 10 12 15 17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <line x1="12" y1="15" x2="12" y2="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span className="font-semibold">Guía Código de Ética</span>
                        </a>
                    </div>
                </div>

                {/* Valores y principios con colores suaves */}
                <div className="bg-white rounded-2xl shadow-lg p-10 border border-gray-100">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Valores y Principios</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto mb-4"></div>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Estos son los pilares fundamentales que guían nuestro comportamiento organizacional
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                icon: (
                                    <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                ),
                                title: "Transparencia",
                                description: "Principio de legalidad y cumplimiento",
                                gradient: "from-blue-500 to-blue-600"
                            },
                            {
                                icon: (
                                    <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16 4v6m-5-6v12m-5-6v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                ),
                                title: "Respeto",
                                description: "Protección de los derechos humanos y el medio ambiente",
                                gradient: "from-emerald-500 to-emerald-600"
                            },
                            {
                                icon: (
                                    <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <polyline points="22 4 12 14.01 9 11.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                ),
                                title: "Integridad",
                                description: "Uso eficiente de los activos",
                                gradient: "from-slate-500 to-slate-600"
                            },
                            {
                                icon: (
                                    <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                ),
                                title: "Responsabilidad",
                                description: "Sentido de pertenencia institucional",
                                gradient: "from-indigo-500 to-indigo-600"
                            }
                        ].map((valor, index) => (
                            <div key={index} className="group text-center p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
                                <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${valor.gradient} text-white rounded-2xl mb-6 group-hover:scale-110 transition-transform shadow-md`}>
                                    {valor.icon}
                                </div>
                                <h4 className="text-xl font-bold text-gray-900 mb-3">{valor.title}</h4>
                                <p className="text-gray-600 leading-relaxed">{valor.description}</p>
                            </div>
                        ))}
                    </div>

                    {/* Sección aliado con colores suaves */}
                    <div className="mt-16 bg-gradient-to-r from-blue-50 to-slate-50 rounded-2xl p-10 border border-blue-100">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="relative">
                                <img 
                                    src="/images/operariio.png (1).webp" 
                                    alt="Aliado ENERG-ÉTICO" 
                                    className="w-full h-auto rounded-2xl shadow-lg"
                                />
                                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                                    <span className="text-2xl">⚡</span>
                                </div>
                            </div>
                            <div className="space-y-6">
                                <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium border border-blue-200">
                                    <span className="mr-2">🤝</span>
                                    Compromiso Corporativo
                                </div>
                                
                                <h3 className="text-3xl font-bold text-gray-900">
                                    Soy Aliado <span className="text-blue-600">ENERG-ÉTICO</span>
                                </h3>
                                
                                <p className="text-gray-700 leading-relaxed text-lg">
                                    porque tengo la capacidad de ejercer mi rol en la empresa transmitiendo comportamientos éticos y genero efectos que impactan de forma positiva la imagen Reputacional de Electrohuila.
                                </p>
                                
                                <div className="flex items-center space-x-4 pt-4">
                                    <div className="flex -space-x-2">
                                        <div className="w-10 h-10 bg-blue-500 rounded-full border-2 border-white"></div>
                                        <div className="w-10 h-10 bg-emerald-500 rounded-full border-2 border-white"></div>
                                        <div className="w-10 h-10 bg-slate-500 rounded-full border-2 border-white"></div>
                                        <div className="w-10 h-10 bg-indigo-500 rounded-full border-2 border-white flex items-center justify-center text-white font-bold">+</div>
                                    </div>
                                    <span className="text-gray-600 font-medium">Todos somos aliados éticos</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Anti soborno con colores suaves */}
                <div className="bg-white rounded-2xl shadow-lg p-10 border border-gray-100">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <div className="inline-flex items-center px-4 py-2 bg-slate-50 text-slate-700 rounded-full text-sm font-medium border border-slate-200">
                                <span className="mr-2">🚫</span>
                                Lucha Anticorrupción
                            </div>
                            
                            <h2 className="text-3xl font-bold text-gray-900 leading-tight">
                                Electrohuila S.A. E.S.P. 
                                <span className="text-slate-600">
                                    contra el soborno y la corrupción
                                </span>
                            </h2>
                            
                            <div className="w-24 h-1 bg-gradient-to-r from-slate-500 to-slate-600"></div>
                            
                            <p className="text-gray-700 leading-relaxed text-lg">
                                ElectroHuila S.A. E.S.P., de conformidad con las políticas públicas nacionales y 
                                convenios internacionales han desarrollado esfuerzos relevantes encaminados
                                a luchar contra la Corrupción, prevenir actos de Soborno y otras conductas
                                asociadas a delitos LA/FT/FPADM, por significar un riesgo para la estabilidad
                                económica, social y política de los mercados.
                            </p>
                            
                            <div className="flex items-center space-x-4 pt-4">
                                <div className="flex items-center space-x-2">
                                    <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                                    <span className="text-sm text-gray-600">Políticas implementadas</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                                    <span className="text-sm text-gray-600">Monitoreo activo</span>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <img 
                                src="/images/anti-soborno-768x512.jpg.webp" 
                                alt="Contra el soborno y la corrupción" 
                                className="w-full h-auto rounded-2xl shadow-lg"
                            />
                            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-r from-slate-500 to-slate-600 rounded-full flex items-center justify-center shadow-lg">
                                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728L5.636 5.636m12.728 12.728L18.364 5.636M5.636 18.364l12.728-12.728" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Acordeón con colores suaves */}
                <div className="bg-white rounded-2xl shadow-lg p-10 border border-gray-100">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Abecé contra el soborno y la corrupción
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto mb-4"></div>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Encuentra respuestas a las preguntas más frecuentes sobre nuestras políticas anticorrupción
                        </p>
                    </div>
                    
                    <div className="space-y-4">
                        {accordionItems.map((item, index) => (
                            <div key={item.id} className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                                <button 
                                    className={`w-full text-left p-6 flex items-center justify-between hover:bg-gray-50 transition-colors ${
                                        isExpanded(item.id) ? 'bg-gradient-to-r from-blue-50 to-slate-50 border-b border-blue-200' : ''
                                    }`}
                                    onClick={() => toggleItem(item.id)}
                                >
                                    <div className="flex items-center space-x-4">
                                        <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg transition-all duration-300 ${
                                            isExpanded(item.id) ? 'bg-gradient-to-r from-blue-500 to-blue-600 scale-110' : 'bg-gray-400'
                                        }`}>
                                            <span className="text-xl">{item.icon}</span>
                                        </div>
                                        <div className="flex-1">
                                            <span className="font-semibold text-gray-900 text-lg">{item.title}</span>
                                            {index === 0 && (
                                                <div className="text-xs text-blue-600 font-medium mt-1">
                                                    📍 Expandido por defecto
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div className={`flex items-center space-x-2 transition-transform duration-300 ${
                                        isExpanded(item.id) ? 'rotate-90 text-blue-600' : 'text-gray-400'
                                    }`}>
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </button>
                                
                                {isExpanded(item.id) && (
                                    <div className="p-6 bg-gradient-to-r from-gray-50 to-blue-50 border-t border-blue-200">
                                        <div className="flex items-start space-x-4">
                                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                            <p className="text-gray-700 leading-relaxed text-lg">{item.content}</p>
                                        </div>
                                        
                                        {item.id === 'reportar' && (
                                            <div className="mt-6 p-4 bg-white rounded-xl border border-blue-200">
                                                <div className="flex items-center space-x-3 mb-3">
                                                    <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                                        </svg>
                                                    </div>
                                                    <h4 className="font-semibold text-gray-900">Canales de Reporte</h4>
                                                </div>
                                                <p className="text-sm text-gray-600">
                                                    📞 Línea de transparencia disponible 24/7<br/>
                                                    📧 Email institucional<br/>
                                                    🌐 Portal web corporativo
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Call to Action final */}
                <div className="bg-gradient-to-r from-blue-600 via-slate-600 to-blue-700 rounded-2xl p-10 text-white text-center">
                    <div className="max-w-3xl mx-auto">
                        <h3 className="text-3xl font-bold mb-6">¿Tienes información sobre actos de corrupción?</h3>
                        <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                            En ElectroHuila tenemos cero tolerancia a la corrupción. Si tienes conocimiento de algún 
                            acto irregular, repórtalo de manera segura y confidencial a través de nuestros canales oficiales.
                        </p>
                        
                        <div className="grid md:grid-cols-3 gap-6 mb-8">
                            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <h4 className="font-semibold mb-2">Línea Directa</h4>
                                <p className="text-blue-100 text-sm">Disponible 24/7</p>
                            </div>
                            
                            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <h4 className="font-semibold mb-2">Email Seguro</h4>
                                <p className="text-blue-100 text-sm">Comunicación encriptada</p>
                            </div>
                            
                            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                </div>
                                <h4 className="font-semibold mb-2">Confidencial</h4>
                                <p className="text-blue-100 text-sm">Tu identidad protegida</p>
                            </div>
                        </div>
                        
                        <a 
                            href="/contactenos" 
                            className="inline-flex items-center px-8 py-4 bg-white text-blue-700 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
                        >
                            <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                            Reportar de Forma Segura
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}