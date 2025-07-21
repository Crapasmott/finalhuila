'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function PoliticasPage() {
    const [activeTab, setActiveTab] = useState('institucionales');
    const [expandedItem, setExpandedItem] = useState(null);

    // DATOS FIJOS CON URLs REALES EXTRAÍDAS DE TU HTML
    const politicasData = {
        institucionales: [
            {
                id: 'talento',
                title: 'Talento Humano',
                description: 'Políticas relacionadas con la gestión del talento humano en nuestra empresa.',
                icon: '👥',
                color: 'slate',
                documents: [
                    { 
                        name: 'Política de Prevención del Acoso Laboral y Acoso Sexual; y de Promoción de la Desconexión Laboral', 
                        url: 'https://electrohuila.net/wp-content/uploads/2025/02/Politica-de-Prevencion-del-Acoso-Laboral-y-Acoso-Sexual-y-de-Promocion-de-la-Desconexion-Laboral-1.pdf',
                        size: '2.1 MB',
                        updated: '15/02/2025'
                    }
                ]
            },
            {
                id: 'planeacion',
                title: 'Planeación Estratégica',
                description: 'Documentos relacionados con la planeación estratégica y direccionamiento de la organización.',
                icon: '📋',
                color: 'blue',
                documents: [
                    { 
                        name: 'Política de Calidad', 
                        url: 'https://electrohuila.net/wp-content/uploads/2023/07/POLITICA-DE-CALIDAD.pdf', 
                        size: '4.2 MB', 
                        updated: '05/07/2023' 
                    },
                    { 
                        name: 'Política de prevención de consumo de alcohol, tabaco y sustancias psicoactivas', 
                        url: 'https://electrohuila.net/wp-content/uploads/2023/07/Politica-de-prevencion-de-consumo-de-alcohol-tabaco-y-sustancias-psicoactivas.pdf', 
                        size: '1.8 MB', 
                        updated: '12/07/2023' 
                    },
                    { 
                        name: 'Política de seguridad vial', 
                        url: 'https://drive.google.com/file/d/1oqEBl-DQEcgqgSWtCBtGXsSO2cL09zYx/view', 
                        size: '4.2 MB', 
                        updated: '05/01/2024' 
                    },
                    { 
                        name: 'Política de seguridad y salud en el trabajo', 
                        url: 'https://electrohuila.net/wp-content/uploads/2023/07/Pilitica-de-seguridad-y-salud-en-el-trabajo.pdf', 
                        size: '1.8 MB', 
                        updated: '12/07/2023' 
                    }
                ]
            },
            {
                id: 'etica',
                title: 'Ética y Cumplimiento',
                description: 'Políticas relacionadas con la ética empresarial y el cumplimiento normativo.',
                icon: '⚖️',
                color: 'gray',
                documents: [
                    { 
                        name: 'Política de prohibición a las represalias y protección al denunciante', 
                        url: 'https://electrohuila.net/wp-content/uploads/2023/07/Documento-No.075.pdf', 
                        size: '2.7 MB', 
                        updated: '18/07/2023' 
                    },
                    { 
                        name: 'Política, lineamientos y documentos vinculantes a la oficina de Ética y Cumplimiento', 
                        url: 'https://electrohuila.net/wp-content/uploads/2023/07/CIRCULAR-004-2023.pdf', 
                        size: '1.5 MB', 
                        updated: '20/07/2023' 
                    },
                    { 
                        name: 'Política de código de Ética', 
                        url: 'https://electrohuila.net/wp-content/uploads/2025/05/Acuerdo-08-del-28-de-febrero-de-2025-Codigo-de-Etica.pdf', 
                        size: '3.2 MB', 
                        updated: '28/02/2025' 
                    },
                    { 
                        name: 'Política de Control y Gestión del Riesgo LA_FT_FPADM_S_C', 
                        url: 'https://electrohuila.net/wp-content/uploads/2023/07/5.-Politica-de-Control-y-Gestion-del-Riesgo-LA_FT_FPADM_S_C.pdf', 
                        size: '2.7 MB', 
                        updated: '18/07/2023' 
                    },
                    { 
                        name: 'Política de Hospitalidades, Obsequios y Beneficios', 
                        url: 'https://electrohuila.net/wp-content/uploads/2023/07/4.-Politica-de-HospitalidadesObsequios-y-Beneficios.pdf', 
                        size: '1.5 MB', 
                        updated: '20/07/2023' 
                    },
                    { 
                        name: 'Política de la línea de Transparencia y Comité de Ética', 
                        url: 'https://electrohuila.net/wp-content/uploads/2023/07/3.-Politica-de-la-Linea-de-Transparencia-y-Comite-de-Etica.pdf', 
                        size: '3.2 MB', 
                        updated: '10/07/2023' 
                    },
                    { 
                        name: 'Política de programa de Transparencia y Ética Pública – PTEP', 
                        url: 'https://electrohuila.net/wp-content/uploads/2025/05/Acuerdo-09-del-28-de-febrero-de-2025-Programa-de-Transparencia-y-Etica-Publica-PTEP.pdf', 
                        size: '2.8 MB', 
                        updated: '28/02/2025' 
                    },
                    { 
                        name: 'Política de Privacidad Tratamiento y Protección de Datos Personales de ElectroHuila S.A. E.S.P.', 
                        url: 'https://electrohuila.net/wp-content/uploads/2023/07/POLITICA_DE_PRI_20230515_114541167.pdf', 
                        size: '1.5 MB', 
                        updated: '15/05/2023' 
                    },
                    { 
                        name: 'Código de Buen Gobierno Corporativo', 
                        url: 'https://electrohuila.net/wp-content/uploads/2025/05/Acuerdo-07-del-28-de-febrero-de-2025-Codigo-de-Buen-Gobierno-Corporativo.pdf', 
                        size: '3.2 MB', 
                        updated: '28/02/2025' 
                    }
                ]
            },
            {
                id: 'organizacion',
                title: 'Organización y Sistemas',
                description: 'Documentos sobre la estructura organizacional y sistemas de la empresa.',
                icon: '🏗️',
                color: 'indigo',
                documents: [
                    { 
                        name: 'Políticas de seguridad de la información', 
                        url: 'https://electrohuila.net/wp-content/uploads/2023/07/Politica-de-Seguridad-de-la-Informacion.pdf', 
                        size: '1.1 MB', 
                        updated: '15/07/2023' 
                    }
                ]
            },
            {
                id: 'responsabilidad',
                title: 'Responsabilidad Social y Ambiental',
                description: 'Políticas de responsabilidad social corporativa y gestión ambiental.',
                icon: '🌱',
                color: 'emerald',
                documents: [
                    { 
                        name: 'Política de Derechos Humanos', 
                        url: 'https://electrohuila.net/wp-content/uploads/2023/07/Politica-de-Derechos-Humanos.pdf', 
                        size: '2.3 MB', 
                        updated: '05/07/2023' 
                    },
                    { 
                        name: 'Política de Gestión Ambiental', 
                        url: 'https://electrohuila.net/wp-content/uploads/2023/07/Politica-de-Gestion-ambiental.pdf', 
                        size: '4.5 MB', 
                        updated: '20/07/2023' 
                    },
                    { 
                        name: 'Política de Responsabilidad Social', 
                        url: 'https://electrohuila.net/wp-content/uploads/2023/07/Politica-de-Responsabilidad-Social.pdf', 
                        size: '6.8 MB', 
                        updated: '15/07/2023' 
                    }
                ]
            },
            {
                id: 'sigac',
                title: 'SIGAC',
                description: 'Sistema Integrado de Gestión y Autocontrol.',
                icon: '⚙️',
                color: 'slate',
                documents: [
                    { 
                        name: 'Política SIGAC', 
                        url: 'https://electrohuila.net/wp-content/uploads/2023/07/POLITICA-SIGAC.pdf', 
                        size: '3.7 MB', 
                        updated: '10/07/2023' 
                    }
                ]
            },
            {
                id: 'bioseguridad',
                title: 'Protocolo de Bioseguridad',
                description: 'Protocolos y medidas de bioseguridad adoptados por la empresa.',
                icon: '🛡️',
                color: 'blue',
                documents: [
                    { 
                        name: 'Protocolo de Bioseguridad', 
                        url: 'https://electrohuila.net/wp-content/uploads/2023/07/protocolo-bioseguridad-electrohuila.pdf', 
                        size: '2.4 MB', 
                        updated: '15/07/2023' 
                    }
                ]
            }
        ],
        comerciales: [
            {
                id: 'servicio',
                title: 'Control de Cartera',
                description: 'Políticas para el manejo y control de cartera de clientes.',
                icon: '💰',
                color: 'slate',
                documents: [
                    { 
                        name: 'Política de financiación', 
                        url: 'https://electrohuila.net/wp-content/uploads/2023/07/POLITICA-DE-FINANCIACION.pdf', 
                        size: '2.3 MB', 
                        updated: '20/07/2023' 
                    }
                ]
            },
            {
                id: 'tarifas',
                title: 'Servicio al Cliente',
                description: 'Información sobre tarifas, facturación y procesos comerciales.',
                icon: '🤝',
                color: 'emerald',
                documents: [
                    { 
                        name: 'Política de Transparencia y acceso a información pública', 
                        url: 'https://electrohuila.net/wp-content/uploads/2023/07/Politica-de-Transparencia-y-acceso-a-informacion-publica-1.pdf', 
                        size: '1.7 MB', 
                        updated: '01/07/2023' 
                    }
                ]
            }
        ],
        administrativas: [
            {
                id: 'financiera',
                title: 'Gestión Financiera',
                description: 'Políticas y lineamientos financieros de la organización.',
                icon: '📊',
                color: 'slate',
                documents: [
                    { 
                        name: 'Política divulgación información Financiera', 
                        url: 'https://electrohuila.net/wp-content/uploads/2023/07/Politica-divulgacion-informacion-financiera.pdf', 
                        size: '2.6 MB', 
                        updated: '10/07/2023' 
                    },
                    { 
                        name: 'Manual de Políticas Contables', 
                        url: 'https://electrohuila.net/wp-content/uploads/2023/11/Documento-de-Gerencia-271-Actualizacion-de-Politicas-Contables.pdf', 
                        size: '1.9 MB', 
                        updated: '15/11/2023' 
                    }
                ]
            },
            {
                id: 'contratacion',
                title: 'Gestión Documental',
                description: 'Políticas y procedimientos para gestión documental y archivo.',
                icon: '📁',
                color: 'gray',
                documents: [
                    { 
                        name: 'Programa de gestión documental – PDGD', 
                        url: '#', 
                        size: '3.8 MB', 
                        updated: '20/01/2024' 
                    },
                    { 
                        name: 'Tablas de retención documental', 
                        url: '#', 
                        size: '2.1 MB', 
                        updated: '10/12/2023' 
                    }
                ]
            }
        ]
    };

    const handleTabChange = (tab) => {
        setActiveTab(tab);
        setExpandedItem(null);
    };

    const toggleAccordion = (itemId) => {
        setExpandedItem(expandedItem === itemId ? null : itemId);
    };

    // Obtener elementos del acordeón según la pestaña activa
    const activeAccordionItems = politicasData[activeTab] || [];

    // Calcular estadísticas por pestaña
    const getTabStats = (tab) => {
        const items = politicasData[tab] || [];
        const totalDocs = items.reduce((acc, item) => acc + (item.documents?.length || 0), 0);
        return { categories: items.length, documents: totalDocs };
    };

    // Obtener estadísticas totales
    const getTotalStats = () => {
        const allItems = Object.values(politicasData).flat();
        const totalCategories = allItems.length;
        const totalDocs = allItems.reduce((acc, item) => acc + (item.documents?.length || 0), 0);
        return { categories: totalCategories, documents: totalDocs };
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header Empresarial */}
            <div className="bg-gradient-to-r from-slate-800 via-slate-700 to-blue-900 text-white shadow-2xl">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="relative">
                        {/* Elementos decorativos sutiles */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32"></div>
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>
                        
                        <div className="relative">
                            {/* Badge corporativo */}
                            <div className="flex justify-center mb-6">
                                <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-sm font-semibold border border-white/20">
                                    <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 2L3 7v11a1 1 0 001 1h12a1 1 0 001-1V7l-7-5zM6 9.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm2.5 2.5a1 1 0 00-1 1v3a1 1 0 002 0v-3a1 1 0 00-1-1zm3-1.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" clipRule="evenodd" />
                                    </svg>
                                    Marco Normativo Corporativo
                                </div>
                            </div>
                            
                            {/* Título principal */}
                            <div className="text-center mb-8">
                                <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                                    Políticas <span className="text-blue-300">Institucionales</span>
                                </h1>
                                
                                <p className="text-xl md:text-2xl text-slate-200 max-w-4xl mx-auto leading-relaxed font-light">
                                    Documentos normativos que establecen el marco de gestión y operación empresarial de ElectroHuila S.A. E.S.P.
                                </p>
                            </div>

                            {/* Breadcrumbs empresariales */}
                            <nav className="flex items-center justify-center space-x-3 text-slate-300">
                                <Link href="/" className="hover:text-white transition-colors duration-200 flex items-center font-medium">
                                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                                    </svg>
                                    Inicio
                                </Link>
                                <span className="text-slate-400">•</span>
                                <Link href="/institucional/informes" className="hover:text-white transition-colors duration-200 font-medium">
                                    Informes Corporativos
                                </Link>
                                <span className="text-slate-400">•</span>
                                <span className="text-white font-semibold">Políticas Institucionales</span>
                            </nav>

                            {/* Indicadores corporativos */}
                            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                                <div className="text-center">
                                    <div className="inline-flex items-center justify-center w-12 h-12 bg-white/10 rounded-lg mb-3">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                        </svg>
                                    </div>
                                    <h3 className="font-semibold text-white mb-1">Cumplimiento</h3>
                                    <p className="text-sm text-slate-300">Normativas actualizadas</p>
                                </div>
                                <div className="text-center">
                                    <div className="inline-flex items-center justify-center w-12 h-12 bg-white/10 rounded-lg mb-3">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                    </div>
                                    <h3 className="font-semibold text-white mb-1">Transparencia</h3>
                                    <p className="text-sm text-slate-300">Acceso público total</p>
                                </div>
                                <div className="text-center">
                                    <div className="inline-flex items-center justify-center w-12 h-12 bg-white/10 rounded-lg mb-3">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                    <h3 className="font-semibold text-white mb-1">Excelencia</h3>
                                    <p className="text-sm text-slate-300">Estándares internacionales</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Estadísticas por pestaña */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {[
                        { key: 'institucionales', label: 'Institucionales', icon: '🏛️', color: 'slate' },
                        { key: 'comerciales', label: 'Comerciales', icon: '💼', color: 'emerald' },
                        { key: 'administrativas', label: 'Administrativas', icon: '📊', color: 'blue' }
                    ].map((tab) => {
                        const stats = getTabStats(tab.key);
                        return (
                            <div key={tab.key} className={`bg-white rounded-xl shadow-lg p-6 text-center transform hover:scale-105 transition-transform border-l-4 ${
                                activeTab === tab.key ? `border-${tab.color}-600 ring-2 ring-${tab.color}-200` : `border-${tab.color}-300`
                            }`}>
                                <div className={`w-12 h-12 bg-gradient-to-r from-${tab.color}-600 to-${tab.color}-700 rounded-full flex items-center justify-center mx-auto mb-4 text-white`}>
                                    <span className="text-xl">{tab.icon}</span>
                                </div>
                                <h3 className="text-lg font-bold text-gray-800 mb-2">{tab.label}</h3>
                                <p className="text-gray-600 text-sm mb-2">{stats.categories} categorías</p>
                                <p className={`text-${tab.color}-700 font-semibold text-lg`}>{stats.documents} documentos</p>
                            </div>
                        );
                    })}
                </div>

                {/* Pestañas */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
                    <div className="border-b border-gray-200 bg-gray-50">
                        <div className="flex flex-wrap">
                            {[
                                { key: 'institucionales', label: 'Institucionales', icon: '🏛️', color: 'slate' },
                                { key: 'comerciales', label: 'Comerciales', icon: '💼', color: 'emerald' },
                                { key: 'administrativas', label: 'Administrativas', icon: '📊', color: 'blue' }
                            ].map((tab) => {
                                const stats = getTabStats(tab.key);
                                return (
                                    <button
                                        key={tab.key}
                                        className={`flex-1 relative px-6 py-4 font-semibold text-sm transition-all duration-300 ${
                                            activeTab === tab.key
                                                ? `text-${tab.color}-700 bg-white border-b-3 border-${tab.color}-600 shadow-sm`
                                                : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
                                        }`}
                                        onClick={() => handleTabChange(tab.key)}
                                    >
                                        <div className="flex items-center justify-center space-x-2">
                                            <span className="text-xl">{tab.icon}</span>
                                            <span>{tab.label}</span>
                                            <span className={`inline-flex items-center justify-center w-6 h-6 text-xs font-bold rounded-full ${
                                                activeTab === tab.key 
                                                    ? `bg-${tab.color}-100 text-${tab.color}-700` 
                                                    : 'bg-gray-200 text-gray-600'
                                            }`}>
                                                {stats.categories}
                                            </span>
                                        </div>
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Acordeón */}
                    <div className="divide-y divide-gray-200">
                        {activeAccordionItems.map((item) => (
                            <div key={item.id} className="group">
                                <button
                                    className={`w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors ${
                                        expandedItem === item.id ? `bg-gradient-to-r from-${item.color}-50 to-gray-50` : ''
                                    }`}
                                    onClick={() => toggleAccordion(item.id)}
                                    aria-expanded={expandedItem === item.id}
                                >
                                    <div className="flex items-center space-x-4">
                                        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${
                                            expandedItem === item.id 
                                                ? `bg-gradient-to-r from-${item.color}-600 to-${item.color}-700 text-white` 
                                                : `bg-gray-100 text-gray-600 group-hover:bg-${item.color}-100 group-hover:text-${item.color}-700`
                                        }`}>
                                            <span className="text-lg">{expandedItem === item.id ? '−' : '+'}</span>
                                        </div>
                                        <div className="flex items-center space-x-3">
                                            <span className="text-2xl">{item.icon}</span>
                                            <div>
                                                <span className="text-xl font-bold text-gray-800">{item.title}</span>
                                                <div className="text-sm text-gray-500 mt-1">
                                                    {item.documents?.length || 0} documento{(item.documents?.length || 0) !== 1 ? 's' : ''} disponible{(item.documents?.length || 0) !== 1 ? 's' : ''}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className={`transform transition-transform duration-300 ${
                                        expandedItem === item.id ? `rotate-90 text-${item.color}-600` : 'text-gray-400'
                                    }`}>
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </button>

                                {expandedItem === item.id && (
                                    <div className={`px-8 pb-6 bg-gradient-to-r from-${item.color}-50 to-gray-50`}>
                                        {item.description && (
                                            <div className="bg-white rounded-lg p-4 mb-6 border border-gray-200">
                                                <p className="text-gray-700 leading-relaxed">{item.description}</p>
                                            </div>
                                        )}

                                        {/* Lista de documentos */}
                                        <div className="space-y-4">
                                            {item.documents && item.documents.length > 0 ? (
                                                item.documents.map((doc, index) => (
                                                    <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow group">
                                                        <div className="flex items-center justify-between">
                                                            <div className="flex items-start space-x-4 flex-1">
                                                                <div className="flex-shrink-0">
                                                                    <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center border border-red-100">
                                                                        <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                                                                            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                                
                                                                <div className="flex-1 min-w-0">
                                                                    <h4 className={`text-lg font-semibold text-gray-800 mb-3 group-hover:text-${item.color}-700 transition-colors`}>
                                                                        {doc.name}
                                                                    </h4>
                                                                    
                                                                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                                                                        <div className="flex items-center space-x-1">
                                                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                                                            </svg>
                                                                            <span className="font-medium">{doc.size}</span>
                                                                        </div>
                                                                        <div className="flex items-center space-x-1">
                                                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                                            </svg>
                                                                            <span>Actualizado: {doc.updated}</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            
                                                            <div className="flex items-center space-x-3 ml-6">
                                                                {doc.url !== '#' ? (
                                                                    <>
                                                                        <a 
                                                                            href={doc.url} 
                                                                            target="_blank" 
                                                                            rel="noopener noreferrer"
                                                                            className="inline-flex items-center px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors font-medium"
                                                                        >
                                                                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                                            </svg>
                                                                            Ver
                                                                        </a>
                                                                        <a 
                                                                            href={doc.url} 
                                                                            download
                                                                            className="inline-flex items-center px-4 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-800 transition-all duration-300 font-medium shadow-sm"
                                                                        >
                                                                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                                            </svg>
                                                                            Descargar
                                                                        </a>
                                                                    </>
                                                                ) : (
                                                                    <span className="text-gray-400 text-sm px-4 py-2 bg-gray-100 rounded-lg">
                                                                        Próximamente
                                                                    </span>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))
                                            ) : (
                                                <div className="text-center py-8">
                                                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                                        <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                        </svg>
                                                    </div>
                                                    <h3 className="text-lg font-medium text-gray-900 mb-2">Sin documentos disponibles</h3>
                                                    <p className="text-gray-600">Los documentos aparecerán aquí cuando estén disponibles.</p>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Estado vacío para pestañas sin contenido */}
                    {activeAccordionItems.length === 0 && (
                        <div className="text-center py-16">
                            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-medium text-gray-900 mb-2">No hay políticas disponibles</h3>
                            <p className="text-gray-600">Las políticas aparecerán aquí cuando estén disponibles.</p>
                        </div>
                    )}
                </div>

                {/* Información adicional con estadísticas dinámicas */}
                <div className="bg-gradient-to-r from-slate-800 via-slate-700 to-blue-800 rounded-xl p-8 text-white mb-8">
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                        <div>
                            <h3 className="text-2xl font-bold mb-4">Marco Normativo Integral</h3>
                            <p className="text-slate-200 mb-6 leading-relaxed">
                                Nuestras políticas institucionales garantizan el cumplimiento normativo, la transparencia 
                                y la excelencia en la prestación del servicio eléctrico en el departamento del Huila.
                            </p>
                            
                            <div className="space-y-3">
                                <div className="flex items-center space-x-3">
                                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                                    <span className="text-slate-200">Actualizaciones periódicas según normativa vigente</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                                    <span className="text-slate-200">Alineación con estándares nacionales e internacionales</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                                    <span className="text-slate-200">Acceso público y transparente a toda la información</span>
                                </div>
                            </div>
                        </div>
                        
                        <div className="text-center lg:text-right">
                            <div className="inline-flex items-center justify-center w-24 h-24 bg-white/10 rounded-full mb-6">
                                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            
                            <h4 className="text-xl font-bold mb-2">Cumplimiento Garantizado</h4>
                            <p className="text-slate-200 mb-4">
                                Todas nuestras políticas están alineadas con la legislación vigente 
                                y mejores prácticas del sector eléctrico.
                            </p>
                            
                            <div className="grid grid-cols-2 gap-4 text-center">
                                <div className="bg-white/10 rounded-lg p-3">
                                    <div className="text-2xl font-bold mb-1">{getTotalStats().categories}</div>
                                    <div className="text-slate-300 text-sm">Categorías</div>
                                </div>
                                <div className="bg-white/10 rounded-lg p-3">
                                    <div className="text-2xl font-bold mb-1">{getTotalStats().documents}</div>
                                    <div className="text-slate-300 text-sm">Documentos</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}