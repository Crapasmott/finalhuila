'use client';

import React, { useState } from 'react';
import Link from 'next/link';

// Componente de página de Servicios - CONVERTIDO A TAILWIND CSS
export default function Page() {
    // Estado para navegación
    const [activeCategory, setActiveCategory] = useState('');

    // Lista de servicios
    const servicios = [
        {
            id: 1,
            title: "Paga tu Factura",
            description: "Realiza el pago de tu factura de energía de forma rápida y segura mediante nuestros canales digitales.",
            icon: "💳",
            link: "https://pagos.electrohuila.com.co/",
            category: "pagos"
        },
        {
            id: 2,
            title: "Descarga de Factura",
            description: "Descarga tu factura de energía en formato PDF ingresando tu número de cuenta o NIC.",
            icon: "📄",
            link: "https://enlinea.electrohuila.com.co/generate-invoice/",
            category: "pagos"
        },
        {
            id: 3,
            title: "Conoce tu Factura",
            description: "Descubre cada detalle de tu factura y aprende a gestionarla de manera sencilla y eficiente.",
            icon: "📄",
            link: "/conoce-tu-factura",
            category: "pagos"
        },
        {
            id: 4,
            title: "Puntos de Pago",
            description: "Encuentra todos los puntos físicos donde puedes realizar el pago de tu factura de energía.",
            icon: "📍",
            link: "/puntos-de-pago",
            category: "pagos"
        },
        {
            id: 5,
            title: "Puntos de Atención",
            description: "Conoce nuestras oficinas y centros de atención al cliente en todo el departamento del Huila.",
            icon: "👥",
            link: "/puntos-de-atencion",
            category: "atencion"
        },
        {
            id: 6,
            title: "Tarifas",
            description: "Consulta las tarifas vigentes para el servicio de energía eléctrica según tu tipo de usuario.",
            icon: "💲",
            link: "/tarifas/",
            category: "pagos"
        },
        {
            id: 7,
            title: "Suspensiones Programadas",
            description: "Infórmate sobre los mantenimientos y suspensiones programadas del servicio en tu zona.",
            icon: "📅",
            link: "/suspensiones-programadas/",
            category: "mantenimiento"
        },
        {
            id: 8,
            title: "Contrato de Condiciones Uniformes",
            description: "Consulta el contrato que regula la prestación del servicio público domiciliario de energía eléctrica.",
            icon: "📄",
            link: "/documentos/servicios/Contrato-Condiciones-Uniformes.pdf",
            category: "documentos"
        },
        {
            id: 9,
            title: "Uso Confiable de Energía Eléctrica",
            description: "Conoce las prácticas recomendadas para el uso eficiente y confiable de la energía eléctrica.",
            icon: "⚡",
            link: "/documentos/manuales de usuario/CARTILLA USO CONFIABLE Y SEGURO DE LA ENERGIA ELECTRICA.pdf",
            category: "educacion"
        },
        {
            id: 10,
            title: "Uso Seguro de Energía Eléctrica",
            description: "Aprende sobre medidas de seguridad para prevenir accidentes relacionados con la energía eléctrica.",
            icon: "🛡️",
            link: "/documentos/manuales de usuario/CARTILLA SEGURIDAD.pdf",
            category: "educacion"
        },
        {
            id: 11,
            title: "Usuarios Contribución por Solidaridad",
            description: "Información sobre el programa de contribución solidaria y cómo beneficia a usuarios de menores recursos.",
            icon: "❤️",
            link: "/documentos/manuales de usuario/USUARIOS-CONTRIBUCION-POR-SOLIDARIDAD-v2.pdf",
            category: "ayudas"
        },
        {
            id: 12,
            title: "Campaña Riesgo Eléctrico",
            description: "Información sobre la campaña de riesgo eléctrico y cómo prevenir accidentes en hogares con instalaciones vulnerables.",
            icon: "⚡",
            link: "/documentos/manuales de usuario/RIESGO-ELECTRICO-1.png",
            category: "ayudas"
        }
    ];

    // Categorías para filtros rápidos (servicios)
    const categoriesServicios = [
        { name: "Todos", value: "" },
        { name: "Pagos", value: "pagos" },
        { name: "Atención", value: "atencion" },
        { name: "Documentos", value: "documentos" },
        { name: "Educación", value: "educacion" },
        { name: "Ayudas", value: "ayudas" },
        { name: "Mantenimiento", value: "mantenimiento" }
    ];

    // Filtrar por categoría
    const serviciosFiltrados = activeCategory
        ? servicios.filter(item => item.category === activeCategory)
        : servicios;

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section con banner personalizado */}
            <div className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white">
                <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
                    style={{
                        backgroundImage: "url('/images/reparaciones.jpg')"
                    }}
                ></div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                            Nuestros Servicios
                        </h1>
                        <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
                            Encuentra toda la información sobre nuestros servicios de manera rápida y sencilla.
                        </p>
                    </div>
                </div>
            </div>

            {/* Breadcrumb */}
            <div className="bg-gray-100 border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
                    <div className="flex items-center space-x-2 text-sm">
                        <Link href="/" className="text-orange-500 hover:text-orange-600 font-medium transition-colors">
                            Inicio
                        </Link>
                        <span className="text-gray-500">/</span>
                        <span className="text-gray-800 font-medium">
                            Servicios
                        </span>
                    </div>
                </div>
            </div>

            {/* Quick Access Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white rounded-2xl shadow-xl p-8 text-center transform hover:scale-105 transition-all duration-300">
                        <div className="text-4xl mb-6">{servicios[0].icon}</div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">Pagar Factura</h3>
                        <p className="text-gray-600 mb-6">Paga tu factura en línea de manera rápida y segura.</p>
                        <a 
                            href="https://pagos.electrohuila.com.co/" 
                            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            Pagar ahora
                        </a>
                    </div>

                    <div className="bg-white rounded-2xl shadow-xl p-8 text-center transform hover:scale-105 transition-all duration-300">
                        <div className="text-4xl mb-6">{servicios[1].icon}</div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">ElectroHuila en Línea</h3>
                        <p className="text-gray-600 mb-6">Accede a tu cuenta para gestionar tus servicios.</p>
                        <a 
                            href="https://enlinea.electrohuila.com.co/home/" 
                            className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
                        >
                            Acceder
                        </a>
                    </div>

                    <div className="bg-white rounded-2xl shadow-xl p-8 text-center transform hover:scale-105 transition-all duration-300">
                        <div className="text-4xl mb-6">🔌</div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">Trámites de Usuario</h3>
                        <p className="text-gray-600 mb-6">Accede a todos los trámites disponibles para nuestros usuarios.</p>
                        <a 
                            href="/institucional/tramites-usuarios" 
                            className="inline-flex items-center px-6 py-3 bg-yellow-600 text-white font-semibold rounded-lg hover:bg-yellow-700 transition-colors"
                        >
                            Ver trámites
                        </a>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        Nuestros Servicios
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Encuentra todos los servicios que ElectroHuila tiene disponibles para ti.
                    </p>
                </div>

                {/* Filtros por categoría */}
                <div className="flex flex-wrap gap-3 justify-center mb-12">
                    {categoriesServicios.map((category) => (
                        <button
                            key={category.value}
                            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                                activeCategory === category.value
                                    ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                            }`}
                            onClick={() => setActiveCategory(category.value)}
                        >
                            {category.name}
                        </button>
                    ))}
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {serviciosFiltrados.map((item) => (
                        <div key={item.id} className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                            <div className="text-center">
                                <div className="text-5xl mb-6">{item.icon}</div>
                                <h3 className="text-xl font-bold text-gray-800 mb-4">{item.title}</h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">{item.description}</p>
                                <a 
                                    href={item.link} 
                                    className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                                >
                                    Acceder
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            ¿Necesitas ayuda con algún servicio?
                        </h2>
                        <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                            Nuestro equipo de atención al cliente está disponible para asistirte con cualquier consulta o solicitud que tengas.
                        </p>
                        <Link 
                            href="/contactenos" 
                            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors transform hover:scale-105"
                        >
                            Contáctanos
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}