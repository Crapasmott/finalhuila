'use client';

import React from 'react';
import Link from 'next/link';

export default function BreadcrumbSimple({ items, variant = 'default', showHome = true }) {
    // Agregar "Inicio" automáticamente si showHome es true y no está presente
    const breadcrumbItems = showHome && items[0]?.path !== '/' 
        ? [{ label: 'Inicio', path: '/' }, ...items]
        : items;

    const variants = {
        default: {
            container: 'bg-white border-b border-gray-200',
            nav: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4',
            list: 'flex items-center space-x-2 text-sm',
            item: 'flex items-center',
            link: 'text-gray-500 hover:text-blue-600 transition-colors duration-200',
            active: 'text-gray-900 font-medium',
            separator: 'text-gray-400 mx-2'
        },
        minimal: {
            container: '',
            nav: 'py-2',
            list: 'flex items-center space-x-1 text-sm',
            item: 'flex items-center',
            link: 'text-gray-500 hover:text-gray-700 transition-colors',
            active: 'text-gray-700',
            separator: 'text-gray-400 mx-1'
        },
        card: {
            container: 'bg-gray-50 rounded-lg border border-gray-200',
            nav: 'px-4 py-3',
            list: 'flex items-center space-x-2 text-sm',
            item: 'flex items-center',
            link: 'text-blue-600 hover:text-blue-800 transition-colors',
            active: 'text-gray-900 font-medium',
            separator: 'text-gray-400 mx-2'
        }
    };

    const currentVariant = variants[variant] || variants.default;

    return (
        <div className={currentVariant.container}>
            <nav aria-label="Migas de pan" className={currentVariant.nav}>
                <ol className={currentVariant.list}>
                    {breadcrumbItems.map((item, index) => (
                        <li key={`${item.path}-${index}`} className={currentVariant.item}>
                            {index === breadcrumbItems.length - 1 ? (
                                // Último elemento (activo)
                                <span className={currentVariant.active}>
                                    {item.label}
                                </span>
                            ) : (
                                // Elementos con enlaces
                                <>
                                    <Link 
                                        href={item.path}
                                        className={currentVariant.link}
                                    >
                                        {item.label}
                                    </Link>
                                    <span className={currentVariant.separator}>
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                        </svg>
                                    </span>
                                </>
                            )}
                        </li>
                    ))}
                </ol>
            </nav>
        </div>
    );
}

// Componente especializado para headers de página
export function PageBreadcrumb({ items, title, subtitle }) {
    return (
        <div className="bg-white shadow-sm border-b">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="py-6">
                    {/* Breadcrumb */}
                    <nav aria-label="Migas de pan" className="mb-4">
                        <ol className="flex items-center space-x-2 text-sm">
                            {items.map((item, index) => (
                                <li key={`${item.path}-${index}`} className="flex items-center">
                                    {index === items.length - 1 ? (
                                        <span className="text-gray-900 font-medium">
                                            {item.label}
                                        </span>
                                    ) : (
                                        <>
                                            <Link 
                                                href={item.path}
                                                className="text-gray-500 hover:text-blue-600 transition-colors duration-200"
                                            >
                                                {item.label}
                                            </Link>
                                            <span className="text-gray-400 mx-2">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                                </svg>
                                            </span>
                                        </>
                                    )}
                                </li>
                            ))}
                        </ol>
                    </nav>
                    
                    {/* Título de página */}
                    {title && (
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900 mb-2">
                                {title}
                            </h1>
                            {subtitle && (
                                <p className="text-lg text-gray-600">
                                    {subtitle}
                                </p>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

// Componente con iconos para cada tipo de página
export function IconBreadcrumb({ items, icons = {} }) {
    const defaultIcons = {
        home: (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
        ),
        institucional: (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
        ),
        gobierno: (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
        )
    };

    const combinedIcons = { ...defaultIcons, ...icons };

    return (
        <nav aria-label="Migas de pan" className="py-3">
            <ol className="flex items-center space-x-2 text-sm">
                {items.map((item, index) => {
                    const IconComponent = combinedIcons[item.icon] || null;
                    
                    return (
                        <li key={`${item.path}-${index}`} className="flex items-center">
                            {index === items.length - 1 ? (
                                <span className="flex items-center space-x-1 text-gray-900 font-medium">
                                    {IconComponent && IconComponent}
                                    <span>{item.label}</span>
                                </span>
                            ) : (
                                <>
                                    <Link 
                                        href={item.path}
                                        className="flex items-center space-x-1 text-gray-500 hover:text-blue-600 transition-colors duration-200"
                                    >
                                        {IconComponent && IconComponent}
                                        <span>{item.label}</span>
                                    </Link>
                                    <span className="text-gray-400 mx-2">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                        </svg>
                                    </span>
                                </>
                            )}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
}