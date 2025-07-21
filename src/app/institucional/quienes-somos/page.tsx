'use client';

import { useState, useEffect } from 'react';
import BreadcrumbSimple from './BreadcrumbSimple';
import { TimelineAnimado } from './TimelineAnimado';

export default function QuienesSomos() {
    const [animateCards, setAnimateCards] = useState(false);

    // Activar animaciones al cargar
    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimateCards(true);
        }, 300);
        return () => clearTimeout(timer);
    }, []);

    // Objetivos institucionales con iconos mejorados
    const objetivosInstitucionales = [
        {
            id: 1,
            title: 'Generación Sostenible',
            icon: '🌱',
            descripcion: 'Desarrollo de fuentes de energía renovables y sostenibles'
        },
        {
            id: 2,
            title: 'Expansión de infraestructura y mejoramiento de la calidad del servicio',
            icon: '🏗️',
            descripcion: 'Modernización y ampliación de nuestra infraestructura eléctrica'
        },
        {
            id: 3,
            title: 'Mejoramiento de la gestión comercial',
            icon: '📊',
            descripcion: 'Optimización de procesos comerciales y de facturación'
        },
        {
            id: 4,
            title: 'Atención integral al cliente',
            icon: '🤝',
            descripcion: 'Servicio personalizado y soluciones efectivas para nuestros usuarios'
        },
        {
            id: 5,
            title: 'Gestión eficiente de los servicios',
            icon: '⚙️',
            descripcion: 'Optimización de recursos y procesos operativos'
        },
        {
            id: 6,
            title: 'Tecnología de la información y las telecomunicaciones',
            icon: '💻',
            descripcion: 'Innovación tecnológica y digitalización de servicios'
        },
        {
            id: 7,
            title: 'Crecimiento organizacional',
            icon: '📈',
            descripcion: 'Desarrollo del talento humano y fortalecimiento institucional'
        },
        {
            id: 8,
            title: 'Calidad y eficiencia empresarial',
            icon: '⭐',
            descripcion: 'Excelencia en todos nuestros procesos y servicios'
        },
        {
            id: 9,
            title: 'Relacionamiento con los grupos de interés',
            icon: '👥',
            descripcion: 'Comunicación efectiva con stakeholders y comunidad'
        },
        {
            id: 10,
            title: 'Innovación en energías renovables',
            icon: '☀️',
            descripcion: 'Investigación y desarrollo en tecnologías limpias'
        },
        {
            id: 11,
            title: 'Sostenibilidad y responsabilidad social',
            icon: '🌍',
            descripcion: 'Compromiso con el medio ambiente y la sociedad'
        },
        {
            id: 12,
            title: 'Optimización de la eficiencia energética',
            icon: '⚡',
            descripcion: 'Reducción de pérdidas y mejora en el uso de la energía'
        }
    ];

    const valoresCorporativos = [
        {
            id: 1,
            titulo: 'Integridad',
            descripcion: 'Actuamos con ética, honestidad y transparencia en todas nuestras operaciones.',
            icono: '🤝',
            color: 'blue'
        },
        {
            id: 2,
            titulo: 'Compromiso Social',
            descripcion: 'Trabajamos por el bienestar de nuestras comunidades y el desarrollo regional.',
            icono: '👥',
            color: 'green'
        },
        {
            id: 3,
            titulo: 'Responsabilidad Ambiental',
            descripcion: 'Implementamos prácticas sostenibles que minimicen nuestro impacto en el medio ambiente.',
            icono: '🌱',
            color: 'emerald'
        },
        {
            id: 4,
            titulo: 'Innovación',
            descripcion: 'Buscamos constantemente soluciones creativas y tecnológicas para mejorar nuestros servicios.',
            icono: '💡',
            color: 'purple'
        },
        {
            id: 5,
            titulo: 'Eficiencia',
            descripcion: 'Optimizamos nuestros recursos para garantizar la sostenibilidad empresarial.',
            icono: '📊',
            color: 'orange'
        },
        {
            id: 6,
            titulo: 'Servicio',
            descripcion: 'Nos enfocamos en brindar experiencias positivas y soluciones efectivas a nuestros usuarios.',
            icono: '✨',
            color: 'pink'
        }
    ];

    const certificaciones = [
        {
            nombre: 'ISO 9001',
            imagen: '/images/logo_Icontec-ISO-9001.png',
            descripcion: 'Gestión de Calidad'
        },
        {
            nombre: 'ISO 45001',
            imagen: '/images/icontec-iso-45001.png',
            descripcion: 'Seguridad y Salud'
        },
        {
            nombre: 'ISO 14001',
            imagen: '/images/ISO-14001.png',
            descripcion: 'Gestión Ambiental'
        },
        {
            nombre: 'IQNET',
            imagen: '/images/IQNET.png',
            descripcion: 'Red Internacional'
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Banner principal premium */}
            <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden">
                {/* Elementos decorativos */}
                <div className="absolute inset-0">
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-blue-400/20 rounded-full blur-3xl"></div>
                </div>
                
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="text-center">
                        <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-sm font-medium mb-6">
                            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            Conoce ElectroHuila
                        </div>
                        
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">
                            Quiénes <span className="text-blue-300">Somos</span>
                        </h1>
                        
                        <p className="text-xl opacity-90 max-w-3xl mx-auto">
                            Más de 75 años llevando energía y desarrollo al departamento del Huila
                        </p>
                    </div>
                </div>
            </section>

            {/* Breadcrumbs */}
            <BreadcrumbSimple />

            {/* Sección Objeto Social */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                                </svg>
                                Nuestro Propósito
                            </div>
                            
                            <h2 className="text-3xl font-bold text-gray-900">
                                Objeto <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Social</span>
                            </h2>
                            
                            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
                            
                            <div className="space-y-4 text-gray-700 leading-relaxed">
                                <p>
                                    La empresa tiene como propósito principal la prestación del servicio público domiciliario de energía eléctrica, 
                                    abarcando todas sus actividades complementarias: <strong>generación, transmisión, distribución y comercialización</strong>. 
                                    Asimismo, podrá ofrecer servicios conexos y relacionados con el sector de servicios públicos, en estricto 
                                    cumplimiento del marco legal y regulatorio vigente.
                                </p>
                                <p>
                                    Para alcanzar sus objetivos y asegurar su adecuada operación, la sociedad está facultada para celebrar y 
                                    ejecutar todo tipo de actos y contratos, incluyendo servicios de asesoría, consultoría, interventoría e 
                                    intermediación; construcción de infraestructura; así como la prestación de servicios técnicos, administrativos, 
                                    operativos y de mantenimiento.
                                </p>
                            </div>
                        </div>
                        
                        <div className="relative">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                                <img 
                                    src="/images/quienes-somos-768x512.jpg.webp" 
                                    alt="Historia de Electrohuila" 
                                    className="w-full h-auto"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                                <div className="absolute bottom-6 left-6 text-white">
                                    <h3 className="text-xl font-bold mb-2">ElectroHuila S.A. E.S.P.</h3>
                                    <p className="text-white/90">Más de 7 décadas de servicio</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Misión y Visión mejorada */}
            <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white rounded-2xl shadow-xl p-8 transform hover:scale-105 transition-transform duration-300">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mr-4">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900">Misión</h3>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-lg">
                                <span className="font-semibold text-blue-600">Transmitimos buena energía</span>, 
                                <span className="font-semibold text-green-600"> generamos confianza</span> y 
                                <span className="font-semibold text-purple-600"> distribuimos bienestar</span>.
                            </p>
                        </div>
                        
                        <div className="bg-white rounded-2xl shadow-xl p-8 transform hover:scale-105 transition-transform duration-300">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-4">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900">Visión</h3>
                            </div>
                            <p className="text-gray-700 leading-relaxed">
                                Para <strong>2034</strong>, la ELECTRIFICADORA DEL HUILA S.A. E.S.P. será un motor del desarrollo productivo regional, 
                                destacándose por su generación sostenible, distribución inteligente y comercialización digital de energía. Con un 
                                portafolio diversificado de servicios de valor agregado, impulsará la electrificación de múltiples actividades en 
                                su área de influencia.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Objetivos Institucionales mejorados */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Objetivos Institucionales</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-4"></div>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Estos son los pilares fundamentales que guían nuestro crecimiento y desarrollo organizacional
                        </p>
                    </div>
                    
                    <div className="relative">
                        {/* Fondo con imagen y overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 to-indigo-900/95 rounded-2xl"></div>
                        <div className="absolute inset-0 bg-[url('/images/torres-electricas.jpg')] bg-cover bg-center rounded-2xl opacity-20"></div>
                        
                        <div className="relative p-8 md:p-12">
                            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 transition-all duration-1000 ${
                                animateCards ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                            }`}>
                                {objetivosInstitucionales.map((objetivo, index) => (
                                    <div 
                                        key={objetivo.id}
                                        className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl border border-white/20"
                                        style={{ 
                                            transitionDelay: `${index * 100}ms` 
                                        }}
                                    >
                                        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                            <span className="text-3xl">{objetivo.icon}</span>
                                        </div>
                                        <h3 className="text-white font-semibold mb-3 group-hover:text-blue-200 transition-colors">
                                            {objetivo.title}
                                        </h3>
                                        <p className="text-blue-100 text-sm opacity-90">
                                            {objetivo.descripcion}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Reseña Histórica */}
            <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Nuestra Historia</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6"></div>
                        <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Descubre el fascinante recorrido histórico de ElectroHuila a través de los momentos más importantes 
                            de nuestra evolución, desde nuestra fundación en 1947 hasta el presente.
                        </p>
                    </div>

                    {/* Timeline Component */}
                    <TimelineAnimado />
                </div>
            </section>

            {/* Valores Corporativos mejorados */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Valores Corporativos</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-4"></div>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Estos son los principios fundamentales que guían nuestra gestión diaria y definen nuestra cultura organizacional
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {valoresCorporativos.map((valor, index) => (
                            <div 
                                key={valor.id}
                                className={`group bg-gradient-to-br from-${valor.color}-50 to-${valor.color}-100 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-${valor.color}-200`}
                            >
                                <div className={`w-16 h-16 bg-gradient-to-r from-${valor.color}-500 to-${valor.color}-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                                    <span className="text-2xl">{valor.icono}</span>
                                </div>
                                <h3 className={`text-xl font-bold text-${valor.color}-900 mb-4`}>
                                    {valor.titulo}
                                </h3>
                                <p className={`text-${valor.color}-700 leading-relaxed`}>
                                    {valor.descripcion}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Certificaciones mejoradas */}
            <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Certificaciones y Reconocimientos</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6"></div>
                        <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Nuestro compromiso con la excelencia nos ha permitido obtener importantes certificaciones que respaldan 
                            la calidad de nuestros procesos y servicios, garantizando los más altos estándares operativos, ambientales y de seguridad.
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
                        {certificaciones.map((cert, index) => (
                            <div 
                                key={index}
                                className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                            >
                                <div className="mb-4">
                                    <img 
                                        src={cert.imagen} 
                                        alt={cert.nombre} 
                                        className="w-20 h-20 mx-auto object-contain"
                                    />
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">{cert.nombre}</h3>
                                <p className="text-gray-600 text-sm">{cert.descripcion}</p>
                            </div>
                        ))}
                    </div>
                    
                    <div className="bg-white rounded-2xl p-8 shadow-lg">
                        <div className="flex items-start space-x-4">
                            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-900 mb-2">Compromiso con la Calidad</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    Estas certificaciones representan nuestro compromiso continuo con la mejora de nuestros procesos, 
                                    la protección del medio ambiente, la seguridad de nuestros colaboradores y la satisfacción de nuestros clientes. 
                                    Trabajamos constantemente para mantener y superar estos estándares de excelencia.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}