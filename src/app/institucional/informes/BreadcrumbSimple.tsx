'use client';

import { useState } from 'react';
import Link from 'next/link';
import BreadcrumbSimple from './BreadcrumbSimple';

export default function InformesPage() {
    // Estado para controlar la pestaña activa
    const [activeTab, setActiveTab] = useState('reporte');

    // Estado para controlar el acordeón expandido
    const [expandedItem, setExpandedItem] = useState(null);

    // Definimos la ruta de navegación para el breadcrumb
    const breadcrumbItems = [
        { label: 'Inicio', path: '/' },
        { label: 'Institucional', path: '/institucional' },
        { label: 'Informes', path: '/institucional/informes' }
    ];

    // Función para cambiar de pestaña
    const handleTabChange = (tab) => {
        setActiveTab(tab);
        setExpandedItem(null); // Cerrar acordeón al cambiar de pestaña
    };

    // Función para manejar la expansión del acordeón
    const toggleAccordion = (itemId) => {
        if (expandedItem === itemId) {
            setExpandedItem(null);
        } else {
            setExpandedItem(itemId);
        }
    };

    // Datos para las pestañas y sus respectivos contenidos de acordeón con PDFs
    const tabsData = {
        reporte: [
            {
                id: 'empalme',
                title: 'Informe de Empalme',
                description: 'Documentos relacionados con el proceso de empalme administrativo.',
                documents: [
                    { name: 'Informe de Empalme 2023-2024', url: '/documentos/informes/empalme/informe-empalme-2023-2024.pdf', size: '4.2 MB', updated: '15/01/2024' },
                    { name: 'Anexos Informe de Empalme', url: '/documentos/informes/empalme/anexos-empalme-2023.pdf', size: '2.8 MB', updated: '20/12/2023' }
                ]
            },
            {
                id: 'integrado-2024',
                title: 'Reporte Integrado 2024',
                description: 'Reporte de gestión integrado correspondiente al año 2024.',
                documents: [
                    { name: 'Reporte Integrado de Gestión 2024', url: '/documentos/informes/integrado/reporte-integrado-2024.pdf', size: '5.7 MB', updated: '15/03/2024' },
                    { name: 'Estados Financieros 2024', url: '/documentos/informes/integrado/estados-financieros-2024.pdf', size: '3.2 MB', updated: '10/03/2024' },
                    { name: 'Informe de Sostenibilidad 2024', url: '/documentos/informes/integrado/sostenibilidad-2024.pdf', size: '4.1 MB', updated: '20/03/2024' }
                ]
            },
            {
                id: 'integrado-2023',
                title: 'Reporte Integrado 2023',
                description: 'Reporte de gestión integrado correspondiente al año 2023.',
                documents: [
                    { name: 'Reporte Integrado de Gestión 2023', url: '/documentos/informes/integrado/reporte-integrado-2023.pdf', size: '5.5 MB', updated: '20/03/2023' },
                    { name: 'Estados Financieros 2023', url: '/documentos/informes/integrado/estados-financieros-2023.pdf', size: '3.0 MB', updated: '15/03/2023' },
                    { name: 'Informe de Sostenibilidad 2023', url: '/documentos/informes/integrado/sostenibilidad-2023.pdf', size: '4.0 MB', updated: '25/03/2023' }
                ]
            },
            {
                id: 'integrado-2022',
                title: 'Reporte Integrado 2022',
                description: 'Reporte de gestión integrado correspondiente al año 2022.',
                documents: [
                    { name: 'Reporte Integrado de Gestión 2022', url: '/documentos/informes/integrado/reporte-integrado-2022.pdf', size: '5.3 MB', updated: '18/03/2022' },
                    { name: 'Estados Financieros 2022', url: '/documentos/informes/integrado/estados-financieros-2022.pdf', size: '2.9 MB', updated: '12/03/2022' },
                    { name: 'Informe de Sostenibilidad 2022', url: '/documentos/informes/integrado/sostenibilidad-2022.pdf', size: '3.8 MB', updated: '22/03/2022' }
                ]
            },
            {
                id: 'integrado-2021',
                title: 'Reporte Integrado 2021',
                description: 'Reporte de gestión integrado correspondiente al año 2021.',
                documents: [
                    { name: 'Reporte Integrado de Gestión 2021', url: '/documentos/informes/integrado/reporte-integrado-2021.pdf', size: '5.0 MB', updated: '19/03/2021' },
                    { name: 'Estados Financieros 2021', url: '/documentos/informes/integrado/estados-financieros-2021.pdf', size: '2.8 MB', updated: '14/03/2021' },
                    { name: 'Informe de Sostenibilidad 2021', url: '/documentos/informes/integrado/sostenibilidad-2021.pdf', size: '3.7 MB', updated: '24/03/2021' }
                ]
            },
            {
                id: 'integrado-2020',
                title: 'Reporte Integrado 2020',
                description: 'Reporte de gestión integrado correspondiente al año 2020.',
                documents: [
                    { name: 'Reporte Integrado de Gestión 2020', url: '/documentos/informes/integrado/reporte-integrado-2020.pdf', size: '4.8 MB', updated: '17/03/2020' },
                    { name: 'Estados Financieros 2020', url: '/documentos/informes/integrado/estados-financieros-2020.pdf', size: '2.7 MB', updated: '12/03/2020' },
                    { name: 'Informe de Sostenibilidad 2020', url: '/documentos/informes/integrado/sostenibilidad-2020.pdf', size: '3.5 MB', updated: '22/03/2020' }
                ]
            },
            {
                id: 'integrado-2019',
                title: 'Reporte Integrado 2019',
                description: 'Reporte de gestión integrado correspondiente al año 2019.',
                documents: [
                    { name: 'Reporte Integrado de Gestión 2019', url: '/documentos/informes/integrado/reporte-integrado-2019.pdf', size: '4.6 MB', updated: '16/03/2019' },
                    { name: 'Estados Financieros 2019', url: '/documentos/informes/integrado/estados-financieros-2019.pdf', size: '2.6 MB', updated: '11/03/2019' },
                    { name: 'Informe de Sostenibilidad 2019', url: '/documentos/informes/integrado/sostenibilidad-2019.pdf', size: '3.4 MB', updated: '21/03/2019' }
                ]
            },
            {
                id: 'integrado-2018',
                title: 'Reporte Integrado 2018',
                description: 'Reporte de gestión integrado correspondiente al año 2018.',
                documents: [
                    { name: 'Reporte Integrado de Gestión 2018', url: '/documentos/informes/integrado/reporte-integrado-2018.pdf', size: '4.4 MB', updated: '15/03/2018' },
                    { name: 'Estados Financieros 2018', url: '/documentos/informes/integrado/estados-financieros-2018.pdf', size: '2.5 MB', updated: '10/03/2018' },
                    { name: 'Informe de Sostenibilidad 2018', url: '/documentos/informes/integrado/sostenibilidad-2018.pdf', size: '3.3 MB', updated: '20/03/2018' }
                ]
            },
            {
                id: 'integrado-2017',
                title: 'Reporte Integrado 2017',
                description: 'Reporte de gestión integrado correspondiente al año 2017.',
                documents: [
                    { name: 'Reporte Integrado de Gestión 2017', url: '/documentos/informes/integrado/reporte-integrado-2017.pdf', size: '4.2 MB', updated: '14/03/2017' },
                    { name: 'Estados Financieros 2017', url: '/documentos/informes/integrado/estados-financieros-2017.pdf', size: '2.4 MB', updated: '09/03/2017' },
                    { name: 'Informe de Sostenibilidad 2017', url: '/documentos/informes/integrado/sostenibilidad-2017.pdf', size: '3.2 MB', updated: '19/03/2017' }
                ]
            }
        ],
        plan: [
            {
                id: 'plan-inversion-2024',
                title: 'Plan de Inversión 2024',
                description: 'Documentos relacionados con el plan de inversiones para el año 2024.',
                documents: [
                    { name: 'Plan de Inversión 2024', url: '/documentos/informes/plan-inversion/plan-inversion-2024.pdf', size: '3.5 MB', updated: '10/01/2024' },
                    { name: 'Anexos Plan de Inversión 2024', url: '/documentos/informes/plan-inversion/anexos-plan-inversion-2024.pdf', size: '2.2 MB', updated: '12/01/2024' }
                ]
            },
            {
                id: 'plan-inversion-2023',
                title: 'Plan de Inversión 2023',
                description: 'Documentos relacionados con el plan de inversiones para el año 2023.',
                documents: [
                    { name: 'Plan de Inversión 2023', url: '/documentos/informes/plan-inversion/plan-inversion-2023.pdf', size: '3.4 MB', updated: '12/01/2023' },
                    { name: 'Anexos Plan de Inversión 2023', url: '/documentos/informes/plan-inversion/anexos-plan-inversion-2023.pdf', size: '2.1 MB', updated: '15/01/2023' },
                    { name: 'Seguimiento Plan de Inversión 2023', url: '/documentos/informes/plan-inversion/seguimiento-plan-inversion-2023.pdf', size: '1.8 MB', updated: '10/12/2023' }
                ]
            },
            {
                id: 'plan-inversion-2022',
                title: 'Plan de Inversión 2022',
                description: 'Documentos relacionados con el plan de inversiones para el año 2022.',
                documents: [
                    { name: 'Plan de Inversión 2022', url: '/documentos/informes/plan-inversion/plan-inversion-2022.pdf', size: '3.3 MB', updated: '14/01/2022' },
                    { name: 'Anexos Plan de Inversión 2022', url: '/documentos/informes/plan-inversion/anexos-plan-inversion-2022.pdf', size: '2.0 MB', updated: '16/01/2022' },
                    { name: 'Seguimiento Plan de Inversión 2022', url: '/documentos/informes/plan-inversion/seguimiento-plan-inversion-2022.pdf', size: '1.7 MB', updated: '12/12/2022' }
                ]
            }
        ],
        otros: [
            {
                id: 'informe-gestion',
                title: 'Informes de Gestión',
                description: 'Informes periódicos sobre la gestión de la empresa.',
                documents: [
                    { name: 'Informe de Gestión Primer Trimestre 2024', url: '/documentos/informes/gestion/informe-gestion-q1-2024.pdf', size: '2.8 MB', updated: '15/04/2024' },
                    { name: 'Informe de Gestión Cuarto Trimestre 2023', url: '/documentos/informes/gestion/informe-gestion-q4-2023.pdf', size: '2.7 MB', updated: '15/01/2024' },
                    { name: 'Informe de Gestión Tercer Trimestre 2023', url: '/documentos/informes/gestion/informe-gestion-q3-2023.pdf', size: '2.6 MB', updated: '15/10/2023' }
                ]
            },
            {
                id: 'informe-financiero',
                title: 'Informes Financieros',
                description: 'Informes detallados sobre el desempeño financiero de la empresa.',
                documents: [
                    { name: 'Estados Financieros Auditados 2023', url: '/documentos/informes/financieros/estados-financieros-auditados-2023.pdf', size: '3.6 MB', updated: '28/02/2024' },
                    { name: 'Informe de Revisoría Fiscal 2023', url: '/documentos/informes/financieros/informe-revisoria-fiscal-2023.pdf', size: '2.1 MB', updated: '25/02/2024' },
                    { name: 'Notas a los Estados Financieros 2023', url: '/documentos/informes/financieros/notas-estados-financieros-2023.pdf', size: '2.9 MB', updated: '28/02/2024' }
                ]
            },
            {
                id: 'informe-auditoria',
                title: 'Informes de Auditoría',
                description: 'Resultados de auditorías internas y externas.',
                documents: [
                    { name: 'Informe Auditoría Interna 2023', url: '/documentos/informes/auditoria/informe-auditoria-interna-2023.pdf', size: '2.4 MB', updated: '10/02/2024' },
                    { name: 'Informe Auditoría Externa 2023', url: '/documentos/informes/auditoria/informe-auditoria-externa-2023.pdf', size: '3.1 MB', updated: '15/03/2024' },
                    { name: 'Plan de Mejoramiento Auditoría 2023', url: '/documentos/informes/auditoria/plan-mejoramiento-auditoria-2023.pdf', size: '1.7 MB', updated: '20/03/2024' }
                ]
            }
        ]
    };

    // Obtener los elementos del acordeón según la pestaña activa
    const activeAccordionItems = tabsData[activeTab] || [];

    // Configuración de pestañas con iconos y colores
    const tabsConfig = {
        reporte: {
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            ),
            label: 'Reporte Integrado',
            color: 'blue'
        },
        plan: {
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            label: 'Plan de Inversión',
            color: 'green'
        },
        otros: {
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
            ),
            label: 'Informes',
            color: 'purple'
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            {/* Header Section */}
            <div className="bg-white border-b border-gray-200 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="flex flex-col space-y-4">
                        <div className="flex items-center space-x-3">
                            <div className="p-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            </div>
                            <div>
                                <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent">
                                    Informes Institucionales
                                </h1>
                                <p className="text-gray-600 mt-1">Transparencia y rendición de cuentas</p>
                            </div>
                        </div>
                        
                        <BreadcrumbSimple items={breadcrumbItems} />
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                        <div className="flex items-center">
                            <div className="p-2 bg-blue-100 rounded-lg">
                                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            </div>
                            <div className="ml-4">
                                <p className="text-sm font-medium text-gray-600">Reportes Integrados</p>
                                <p className="text-2xl font-semibold text-gray-900">9</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                        <div className="flex items-center">
                            <div className="p-2 bg-green-100 rounded-lg">
                                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div className="ml-4">
                                <p className="text-sm font-medium text-gray-600">Planes de Inversión</p>
                                <p className="text-2xl font-semibold text-gray-900">3</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                        <div className="flex items-center">
                            <div className="p-2 bg-purple-100 rounded-lg">
                                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                </svg>
                            </div>
                            <div className="ml-4">
                                <p className="text-sm font-medium text-gray-600">Otros Informes</p>
                                <p className="text-2xl font-semibold text-gray-900">3</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tabs */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                    <div className="border-b border-gray-200">
                        <nav className="-mb-px flex" aria-label="Tabs">
                            {Object.entries(tabsConfig).map(([key, config]) => (
                                <button
                                    key={key}
                                    onClick={() => handleTabChange(key)}
                                    className={`
                                        flex items-center px-6 py-4 text-sm font-medium border-b-2 transition-all duration-200
                                        ${activeTab === key
                                            ? `border-${config.color}-500 text-${config.color}-600 bg-${config.color}-50`
                                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                        }
                                    `}
                                >
                                    <span className="mr-2">{config.icon}</span>
                                    {config.label}
                                    <span className={`
                                        ml-2 px-2 py-1 text-xs rounded-full
                                        ${activeTab === key
                                            ? `bg-${config.color}-100 text-${config.color}-800`
                                            : 'bg-gray-100 text-gray-600'
                                        }
                                    `}>
                                        {tabsData[key]?.length || 0}
                                    </span>
                                </button>
                            ))}
                        </nav>
                    </div>

                    {/* Accordion Content */}
                    <div className="p-6">
                        <div className="space-y-4">
                            {activeAccordionItems.map((item, index) => (
                                <div key={item.id} className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm">
                                    <button
                                        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                                        onClick={() => toggleAccordion(item.id)}
                                        aria-expanded={expandedItem === item.id}
                                    >
                                        <div className="flex items-center space-x-3">
                                            <div className={`
                                                p-2 rounded-lg
                                                ${tabsConfig[activeTab].color === 'blue' ? 'bg-blue-100' : ''}
                                                ${tabsConfig[activeTab].color === 'green' ? 'bg-green-100' : ''}
                                                ${tabsConfig[activeTab].color === 'purple' ? 'bg-purple-100' : ''}
                                            `}>
                                                <svg className={`
                                                    w-5 h-5
                                                    ${tabsConfig[activeTab].color === 'blue' ? 'text-blue-600' : ''}
                                                    ${tabsConfig[activeTab].color === 'green' ? 'text-green-600' : ''}
                                                    ${tabsConfig[activeTab].color === 'purple' ? 'text-purple-600' : ''}
                                                `} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                                                <p className="text-sm text-gray-500 mt-1">{item.documents.length} documentos disponibles</p>
                                            </div>
                                        </div>
                                        
                                        <div className="flex items-center space-x-2">
                                            <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                                                {item.documents.length} docs
                                            </span>
                                            <svg 
                                                className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
                                                    expandedItem === item.id ? 'rotate-180' : ''
                                                }`}
                                                fill="none" 
                                                stroke="currentColor" 
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </div>
                                    </button>

                                    {expandedItem === item.id && (
                                        <div className="px-6 pb-6 border-t border-gray-100 bg-gray-50">
                                            <div className="pt-4">
                                                <p className="text-gray-600 mb-4">{item.description}</p>
                                                
                                                <div className="space-y-3">
                                                    {item.documents.map((doc, docIndex) => (
                                                        <div key={docIndex} className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow duration-200">
                                                            <div className="flex items-center justify-between">
                                                                <div className="flex items-center space-x-3">
                                                                    <div className="flex-shrink-0">
                                                                        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                                                                            <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2Z" fill="#E74C3C" />
                                                                            <path d="M14 2V8H20L14 2Z" fill="#C0392B" />
                                                                            <path d="M16 13H8V15H16V13Z" fill="white" />
                                                                            <path d="M16 16H8V18H16V16Z" fill="white" />
                                                                            <path d="M10 10H8V12H10V10Z" fill="white" />
                                                                            <path d="M12 10H10V12H12V10Z" fill="white" />
                                                                            <path d="M16 10H14V12H16V10Z" fill="white" />
                                                                            <path d="M14 10H12V12H14V10Z" fill="white" />
                                                                        </svg>
                                                                    </div>
                                                                    <div className="flex-1 min-w-0">
                                                                        <h4 className="text-sm font-medium text-gray-900 truncate">{doc.name}</h4>
                                                                        <div className="flex items-center space-x-4 mt-1 text-xs text-gray-500">
                                                                            <span className="flex items-center">
                                                                                <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.79 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.79 4 8 4s8-1.79 8-4M4 7c0-2.21 3.79-4 8-4s8 1.79 8 4" />
                                                                                </svg>
                                                                                {doc.size}
                                                                            </span>
                                                                            <span className="flex items-center">
                                                                                <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                                                </svg>
                                                                                {doc.updated}
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                
                                                                <div className="flex items-center space-x-2">
                                                                    <a 
                                                                        href={doc.url} 
                                                                        target="_blank" 
                                                                        rel="noopener noreferrer" 
                                                                        className="inline-flex items-center px-3 py-1.5 text-xs font-medium text-blue-600 bg-blue-50 rounded-md hover:bg-blue-100 transition-colors duration-200"
                                                                    >
                                                                        <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                                        </svg>
                                                                        Ver
                                                                    </a>
                                                                    <a 
                                                                        href={doc.url} 
                                                                        download 
                                                                        className="inline-flex items-center px-3 py-1.5 text-xs font-medium text-green-600 bg-green-50 rounded-md hover:bg-green-100 transition-colors duration-200"
                                                                    >
                                                                        <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                                        </svg>
                                                                        Descargar
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                        
                        {activeAccordionItems.length === 0 && (
                            <div className="text-center py-12">
                                <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                <h3 className="mt-2 text-sm font-medium text-gray-900">No hay documentos disponibles</h3>
                                <p className="mt-1 text-sm text-gray-500">Los documentos se mostrarán aquí cuando estén disponibles.</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Footer Info */}
                <div className="mt-8 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="text-center">
                            <div className="text-2xl font-bold text-blue-600">{tabsData.reporte.length}</div>
                            <div className="text-sm text-gray-600">Reportes Integrados</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-green-600">{tabsData.plan.length}</div>
                            <div className="text-sm text-gray-600">Planes de Inversión</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-purple-600">{tabsData.otros.length}</div>
                            <div className="text-sm text-gray-600">Otros Informes</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-gray-900">
                                {Object.values(tabsData).reduce((total, category) => 
                                    total + category.reduce((sum, item) => sum + item.documents.length, 0), 0
                                )}
                            </div>
                            <div className="text-sm text-gray-600">Total Documentos</div>
                        </div>
                    </div>
                    
                    <div className="mt-6 pt-6 border-t border-gray-200 text-center">
                        <p className="text-sm text-gray-500">
                            📄 Todos los documentos están disponibles en formato PDF | 
                            🔄 Actualizado regularmente | 
                            💾 Descarga gratuita
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}