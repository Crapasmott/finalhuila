'use client';

import React from 'react';
import Link from 'next/link';

export default function BreadcrumbSimple({ items = [] }) {
    // Si no se proporcionan items, usar los por defecto
    const defaultItems = [
        { label: 'Inicio', href: '/', isActive: false },
        { label: 'Institucional', href: '/institucional', isActive: false },
        { label: 'Quiénes Somos', href: null, isActive: true }
    ];

    const breadcrumbItems = items.length > 0 ? items : defaultItems;

    return (
        <div className="bg-gradient-to-r from-gray-50 to-blue-50 border-b border-gray-200 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <nav aria-label="Migas de pan" className="flex items-center space-x-1">
                    {/* Icono de inicio */}
                    <div className="flex items-center text-blue-600">
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                        </svg>
                    </div>

                    <ol className="flex items-center space-x-1 text-sm">
                        {breadcrumbItems.map((item, index) => (
                            <li key={index} className="flex items-center">
                                {item.isActive ? (
                                    // Elemento activo (último en la cadena)
                                    <span className="text-gray-900 font-semibold px-3 py-1 bg-white rounded-full shadow-sm border border-gray-200">
                                        {item.label}
                                    </span>
                                ) : (
                                    // Elemento con enlace
                                    <Link 
                                        href={item.href}
                                        className="text-blue-600 hover:text-blue-800 hover:bg-blue-50 px-3 py-1 rounded-full transition-all duration-200 font-medium"
                                    >
                                        {item.label}
                                    </Link>
                                )}
                                
                                {/* Separador (no mostrar después del último elemento) */}
                                {index < breadcrumbItems.length - 1 && (
                                    <svg 
                                        className="w-3 h-3 text-gray-400 mx-2" 
                                        fill="none" 
                                        stroke="currentColor" 
                                        viewBox="0 0 24 24"
                                    >
                                        <path 
                                            strokeLinecap="round" 
                                            strokeLinejoin="round" 
                                            strokeWidth="2" 
                                            d="M9 5l7 7-7 7" 
                                        />
                                    </svg>
                                )}
                            </li>
                        ))}
                    </ol>
                </nav>
            </div>
        </div>
    );
}

// Componente versión compacta para usar dentro de páginas
export function BreadcrumbCompact({ items = [] }) {
    const defaultItems = [
        { label: 'Inicio', href: '/', isActive: false },
        { label: 'Institucional', href: '/institucional', isActive: false },
        { label: 'Quiénes Somos', href: null, isActive: true }
    ];

    const breadcrumbItems = items.length > 0 ? items : defaultItems;

    return (
        <nav aria-label="Migas de pan" className="flex items-center space-x-1 text-sm mb-6">
            {/* Icono de inicio pequeño */}
            <svg className="w-4 h-4 text-blue-600 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>

            {breadcrumbItems.map((item, index) => (
                <React.Fragment key={index}>
                    {item.isActive ? (
                        <span className="text-gray-900 font-medium">
                            {item.label}
                        </span>
                    ) : (
                        <Link 
                            href={item.href}
                            className="text-blue-600 hover:text-blue-800 transition-colors font-medium"
                        >
                            {item.label}
                        </Link>
                    )}
                    
                    {index < breadcrumbItems.length - 1 && (
                        <span className="text-gray-400 mx-1">•</span>
                    )}
                </React.Fragment>
            ))}
        </nav>
    );
}

// Componente breadcrumb para headers de páginas
export function BreadcrumbHeader({ items = [], title = "Página" }) {
    const defaultItems = [
        { label: 'Inicio', href: '/', isActive: false },
        { label: 'Institucional', href: '/institucional', isActive: false }
    ];

    const breadcrumbItems = items.length > 0 ? items : defaultItems;

    return (
        <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Breadcrumbs */}
                <nav aria-label="Migas de pan" className="flex items-center space-x-1 text-sm mb-4 opacity-90">
                    <svg className="w-4 h-4 text-blue-200 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                    </svg>

                    {breadcrumbItems.map((item, index) => (
                        <React.Fragment key={index}>
                            <Link 
                                href={item.href}
                                className="text-blue-200 hover:text-white transition-colors"
                            >
                                {item.label}
                            </Link>
                            
                            {index < breadcrumbItems.length && (
                                <span className="text-blue-300 mx-2">•</span>
                            )}
                        </React.Fragment>
                    ))}
                    
                    <span className="text-white font-medium">{title}</span>
                </nav>

                {/* Título de la página */}
                <h1 className="text-3xl md:text-4xl font-bold">
                    {title}
                </h1>
            </div>
        </div>
    );
}