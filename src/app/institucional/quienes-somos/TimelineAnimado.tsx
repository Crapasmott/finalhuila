'use client';

import { useState, useEffect } from 'react';

// Componente de línea de tiempo animada y de alto impacto visual
export function TimelineAnimado() {
    const [currentPage, setCurrentPage] = useState(0);
    const [currentTimelineIndex, setCurrentTimelineIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [direction, setDirection] = useState('');

    // Todas las épocas históricas de la empresa
    const timelineEpocas = [
        { id: 0, nombre: "Fundación y primeros años", periodo: "1947-1960", color: "blue" },
        { id: 1, nombre: "Expansión inicial", periodo: "1962-1971", color: "emerald" },
        { id: 2, nombre: "Consolidación regional", periodo: "1972-1984", color: "orange" },
        { id: 3, nombre: "Modernización y tecnología", periodo: "1985-1998", color: "purple" },
        { id: 4, nombre: "Era digital", periodo: "2001-2020", color: "red" }
    ];

    // Todos los eventos históricos de la empresa, organizados por páginas
    const timelinePages = [
        // Página 1: 1947-1960
        [
            {
                year: '1947',
                title: 'Creación de Centrales Eléctricas del Huila',
                description: '05/Jun/1946 se firma contrato de creación de Centrales Eléctricas del Huila S.A. firmado entre: Gobernación del Huila, Empresa Figueroa Saravia, Municipios de Neiva, Garzón, Baraya, Rivera, Tello, Ministerios de Hacienda y Obras Públicas.',
                additionalInfo: [
                    'El 19 de abril de 1947, según escritura pública No. 487 se constituyó la Sociedad Comercial Anónima "Centrales Eléctricas del Huila S.A."',
                    'Se crea el Instituto de Aprovechamiento de Aguas y Fomento Eléctrico ELECTRAGUAS (Ley 80 del 26 dic 1946). Inicia operación en 1947'
                ],
                icon: '⚡',
                imageUrl: '/images/historia/firma.jpg'
            },
            {
                year: '1951',
                title: 'Entra en operación La Plata - Iquira 1',
                description: 'Centrales Eléctricas del Huila S.A. Gerencia Miguel M. Rivera Dussán.',
                additionalInfo: [
                    'En 1950 se adquieren pequeñas plantas hidroeléctricas y la Vicosa (Paicol)',
                    'En 1951 entra en operación la Plata Iquira 1 (Capacidad 3.900 Kw)'
                ],
                icon: '🏗️',
                imageUrl: '/images/historia/miguel-.jpg'
            },
            {
                year: '1955',
                title: 'Se adquiere Planta La Pita se interconecta Garzón - Neiva y se da servicio al municipio Hobo',
                description: 'Gerencia Miguel M. Rivera Dussán.',
                additionalInfo: [
                    'En 1955 se Adquiere Planta La Pita (Garzón)',
                    'Se interconecta Garzón - Neiva y se da servicio al municipio de Hobo en el año 1955',
                    'Sale de operación Planta Palermo (Fuerte creciente quebrada la Guagua en el año 1953)'
                ],
                icon: '🔌',
                imageUrl: '/images/historia/la-pita.jpg'
            },
            {
                year: '1958',
                title: 'Inicia la generación térmica para reforzar planta diesel',
                description: 'En 1958 entra en funcionamiento para reforzar planta Diesel Neiva tres nuevos motores MAN para reforzar Planta Diesel Barrio Calixto Leyva (Operaron hasta 1972)',
                icon: '🔋',
                imageUrl: '/images/historia/1958.jpg'
            },
            {
                year: '1959',
                title: 'Primera convención colectiva',
                description: 'Centrales Eléctricas del Huila S.A. Gerencia Miguel M. Rivera Dussán.',
                additionalInfo: [
                    '10 de mayo de 1961 se firma primera convención colectiva de trabajo - CCT19'
                ],
                icon: '📝',
                imageUrl: '/images/historia/miguel-.jpg'
            }
        ],
        // Página 2: 1962-1971
        [
            {
                year: '1962-1964',
                title: 'Cambio de gerencia',
                description: 'Centrales Eléctricas del Huila S.A. Gerencia Idelfonso Polania Pérez.',
                additionalInfo: [
                    'En octubre de 1963, es nombrado como Gerente General el Ing. Civil Idelfonso Polania Pérez'
                ],
                icon: '👨‍💼',
                imageUrl: '/images/historia/idenlfonso.jpg'
            },
            {
                year: '1965',
                title: 'Se inaugura Plata - Iquira II se reconstruye línea Garzón - La Pita se da servicio a línea Yaguara - Altamira',
                description: 'Centrales Eléctricas del Huila S.A. Gerencia Idelfonso Polania Pérez.',
                additionalInfo: [
                    '28 febrero se inaugura Plata Iquira II',
                    'Se instalan motores S.I.L-ZEH en Planta Diesel-Neiva (Unidades 1 y 2)',
                    'Se reconstruye línea de transmisión Garzón - La Pita',
                    'En mayo se da servicio a línea Yaguara-Altamira (33.000 voltios) y se construye subestación (1000 Kva)',
                    'A finales de mayo se hace la interconexión del Sistema de Generación, que une zona norte con las del centro y sur',
                    'Se programa e inicia labores para contrato, diseño y financiación de interconexión Girardot-Prado-Neiva (115.000 voltios) a cargo de la multinacional SAP, electrificadora de Río Prado y ELECTRAGUAS',
                    'Se suspende operación de planta térmica en Palermo por emergencias'
                ],
                icon: '🔌',
                imageUrl: '/images/historia/la-pita.jpg'
            },
            {
                year: '1966',
                title: 'Expansión de servicios rurales',
                description: 'Se contrata con el Ing. Javier González Franco el trazado y diseño de las líneas de subtransmisión y distribución rural del sistema "Río Prado" en las zonas norte y centro del departamento.',
                additionalInfo: [
                    'En junio entra nuevamente en operación Plata Fortalecillas, mejorando oficialmente el 8 de diciembre',
                    'Entran en servicio nuevas líneas de transmisión La Pita-Garzón y Altamira-Pitalito',
                    '8 diciembre entra en operación Plata La Pita (Segundo Grupo)',
                    '14 diciembre queda por fuera de servicio la Iquira II por deslizamiento que destruyó obras hidráulicas de la entrada del túnel a presión'
                ],
                icon: '🚜',
                imageUrl: '/images/historia/javier.png'
            },
            {
                year: '1968',
                title: 'Gerencia Alvaro Ramírez Sierra',
                description: 'Centrales Eléctricas del Huila S.A. Gerencia Alvaro Ramírez Sierra.',
                additionalInfo: [
                    'Es nombrado como Gerente General el Ing. Electricista Alvaro Ramírez Sierra'
                ],
                icon: '👨‍💼',
                imageUrl: '/images/historia/Alvaro.jpg'
            },
            {
                year: '1969',
                title: 'Expansión de infraestructura',
                description: 'Se construye S/E Campoalegre de 1500 KVA-23.',
                additionalInfo: [
                    'Entra en operación definitivamente Plata La Vicosa (Guadalupe)'
                ],
                icon: '🏗️',
                imageUrl: '/images/historia/constru.png'
            },
            {
                year: '1971',
                title: 'Cambio razón social a Electrificadora del Huila S.A.',
                description: 'Electrificadora del Huila S.A. Gerencia David Rojas Castro.',
                additionalInfo: [
                    'En febrero con escritura Pública 98 con capital $170.000.000.oo y con ello cambio de razón social a "Electrificadora del Huila S.A."',
                    'Es nombrado como Gerente General el Ing. Industrial David Rojas Castro',
                    'Se crea el CLUB ELECTROHUILA con ánimo de fomentar el deporte en todas sus ramas',
                    '17 diciembre entra en construcción de la S/E Betania',
                    'Se terminó construcción de línea de transmisión Neiva-Prado-Neiva',
                    'En mayo del 58 se pone en marcha el Plan de Subtransmisión y Distribución para aumentar la potencia en el departamento',
                    'Se da inicio al Plan de Electrificación Rural, financiado por Caja de Crédito Agrario, Fondo de Inversiones del INAGRARIO, Fondo Nacional de Electrificación Rural, Electrificadora del Huila y programa ICEL-BIDSOA'
                ],
                icon: '📇',
                imageUrl: '/images/historia/placeholder.jpg'
            }
        ],
        // Épocas adicionales pueden añadirse aquí...
        // Página 3: 1972-1984 (Consolidación regional)
        [
            {
                year: '1972',
                title: 'Nueva era de consolidación',
                description: 'Inicio de la era de consolidación regional con importantes inversiones en infraestructura.',
                icon: '🏛️',
                imageUrl: '/images/historia/1972.png'
            }
        ],
        // Página 4: 1985-1998 (Modernización y tecnología)
        [
            {
                year: '1985',
                title: 'Era de modernización tecnológica',
                description: 'Implementación de nuevas tecnologías y sistemas de gestión modernos.',
                icon: '💻',
                imageUrl: '/images/historia/era tecnologica.png'
            }
        ],
        // Página 5: 2001-2020 (Era digital)
        [
            {
                year: '2001',
                title: 'Transformación digital',
                description: 'Inicio de la transformación digital y modernización de servicios.',
                icon: '🌐',
                imageUrl: '/images/historia/era tecnologica.png'
            }
        ]
    ];

    // Obtener los eventos actuales según la página seleccionada
    const currentEvents = timelinePages[currentPage] || timelinePages[0];
    const currentEpoca = timelineEpocas[currentPage];

    // Evento actual que se muestra
    const currentEvent = currentEvents[currentTimelineIndex];

    // Efecto para manejar la animación
    useEffect(() => {
        if (isAnimating) {
            const timer = setTimeout(() => {
                setIsAnimating(false);
            }, 500);
            return () => clearTimeout(timer);
        }
    }, [isAnimating]);

    // Función para navegar entre eventos con animación
    const navigateTimelineWithAnimation = (dir) => {
        setIsAnimating(true);
        setDirection(dir);

        setTimeout(() => {
            if (dir === 'next' && currentTimelineIndex < currentEvents.length - 1) {
                setCurrentTimelineIndex(currentTimelineIndex + 1);
            } else if (dir === 'prev' && currentTimelineIndex > 0) {
                setCurrentTimelineIndex(currentTimelineIndex - 1);
            }
        }, 250);
    };

    // Función para cambiar de época con animación
    const changePageWithAnimation = (dir) => {
        setIsAnimating(true);
        setDirection(dir);

        setTimeout(() => {
            if (dir === 'next' && currentPage < timelineEpocas.length - 1) {
                setCurrentPage(currentPage + 1);
                setCurrentTimelineIndex(0);
            } else if (dir === 'prev' && currentPage > 0) {
                setCurrentPage(currentPage - 1);
                setCurrentTimelineIndex(0);
            }
        }, 250);
    };

    // Función para seleccionar directamente una época
    const selectEpoca = (epochIndex) => {
        if (epochIndex !== currentPage) {
            setIsAnimating(true);
            setDirection(epochIndex > currentPage ? 'next' : 'prev');

            setTimeout(() => {
                setCurrentPage(epochIndex);
                setCurrentTimelineIndex(0);
            }, 250);
        }
    };

    return (
        <div className="w-full max-w-6xl mx-auto px-4">
            {/* Selector de épocas mejorado */}
            <div className="flex justify-center mb-8 overflow-x-auto py-4">
                <div className="relative flex min-w-max">
                    {/* Línea de progreso */}
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-200 rounded-full"></div>
                    <div 
                        className={`absolute bottom-0 h-1 bg-gradient-to-r from-${currentEpoca.color}-500 to-${currentEpoca.color}-600 rounded-full transition-all duration-500`}
                        style={{ width: `${((currentPage + 1) / timelineEpocas.length) * 100}%` }}
                    ></div>

                    {timelineEpocas.map((epoca, index) => (
                        <div
                            key={epoca.id}
                            onClick={() => selectEpoca(index)}
                            className="flex flex-col items-center cursor-pointer px-6 relative z-10 group"
                        >
                            {/* Punto de época */}
                            <div className={`w-6 h-6 rounded-full mb-3 transition-all duration-300 ${
                                index === currentPage 
                                    ? `bg-${epoca.color}-500 ring-4 ring-${epoca.color}-200 scale-110` 
                                    : 'bg-gray-300 hover:bg-gray-400'
                            }`}></div>
                            
                            {/* Periodo */}
                            <span className={`font-semibold text-sm mb-1 transition-colors duration-300 ${
                                index === currentPage ? `text-${epoca.color}-600` : 'text-gray-600'
                            }`}>
                                {epoca.periodo}
                            </span>
                            
                            {/* Nombre de la época */}
                            <span className={`text-xs text-center max-w-24 transition-opacity duration-300 ${
                                index === currentPage ? 'text-gray-800 opacity-100' : 'text-gray-500 opacity-70'
                            }`}>
                                {epoca.nombre}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Contenedor de eventos mejorado */}
            <div className="relative min-h-[500px] mb-8 overflow-hidden">
                <div className={`bg-white rounded-2xl shadow-2xl overflow-hidden max-w-4xl mx-auto transition-all duration-500 transform ${
                    isAnimating 
                        ? direction === 'next' 
                            ? 'translate-x-full opacity-0' 
                            : '-translate-x-full opacity-0'
                        : 'translate-x-0 opacity-100'
                } border-t-4 border-${currentEpoca.color}-500`}>
                    
                    <div className="flex flex-col lg:flex-row">
                        {/* Imagen del evento */}
                        <div className="lg:w-2/5 h-64 lg:h-auto relative">
                            <div 
                                className="w-full h-full bg-gray-200 bg-cover bg-center"
                                style={{ 
                                    backgroundImage: `url(${currentEvent.imageUrl || '/images/historia/placeholder.jpg'})` 
                                }}
                            >
                                {/* Año destacado */}
                                <div className={`absolute top-4 left-4 bg-${currentEpoca.color}-500 text-white px-6 py-3 rounded-full text-xl font-bold shadow-lg`}>
                                    {currentEvent.year}
                                </div>

                                {/* Ícono del evento */}
                                {currentEvent.icon && (
                                    <div className="absolute bottom-4 right-4 bg-white bg-opacity-90 w-14 h-14 rounded-full flex items-center justify-center text-2xl shadow-lg">
                                        {currentEvent.icon}
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Contenido del evento */}
                        <div className="lg:w-3/5 p-8 flex flex-col">
                            <h3 className={`text-2xl font-bold mb-4 text-gray-800 border-b-2 border-${currentEpoca.color}-200 pb-3`}>
                                {currentEvent.title}
                            </h3>

                            <p className="text-gray-700 leading-relaxed mb-6 flex-grow">
                                {currentEvent.description}
                            </p>

                            {/* Información adicional */}
                            {currentEvent.additionalInfo && currentEvent.additionalInfo.length > 0 && (
                                <div className="bg-gray-50 rounded-xl p-6 mt-auto">
                                    <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                                        <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        Datos destacados:
                                    </h4>
                                    <ul className="space-y-2">
                                        {currentEvent.additionalInfo.map((info, index) => (
                                            <li key={index} className="text-sm text-gray-600 flex items-start">
                                                <span className={`w-2 h-2 bg-${currentEpoca.color}-500 rounded-full mt-2 mr-3 flex-shrink-0`}></span>
                                                {info}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Navegación mejorada */}
            <div className="flex flex-wrap justify-center items-center gap-4 mb-12">
                {/* Botón época anterior */}
                <button
                    onClick={() => changePageWithAnimation('prev')}
                    disabled={currentPage === 0}
                    className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                        currentPage === 0
                            ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                            : 'bg-blue-500 text-white hover:bg-blue-600 shadow-lg hover:shadow-xl transform hover:-translate-y-1'
                    }`}
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                    </svg>
                    <span className="hidden sm:inline">Época anterior</span>
                </button>

                {/* Navegación entre eventos */}
                <div className="flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-lg">
                    <button
                        onClick={() => navigateTimelineWithAnimation('prev')}
                        disabled={currentTimelineIndex === 0}
                        className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                            currentTimelineIndex === 0
                                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                : `bg-${currentEpoca.color}-500 text-white hover:bg-${currentEpoca.color}-600 shadow-md`
                        }`}
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    {/* Indicadores de eventos */}
                    <div className="flex gap-2">
                        {currentEvents.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentTimelineIndex(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                    index === currentTimelineIndex 
                                        ? `bg-${currentEpoca.color}-500 scale-125` 
                                        : 'bg-gray-300 hover:bg-gray-400'
                                }`}
                            />
                        ))}
                    </div>

                    <button
                        onClick={() => navigateTimelineWithAnimation('next')}
                        disabled={currentTimelineIndex === currentEvents.length - 1}
                        className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                            currentTimelineIndex === currentEvents.length - 1
                                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                : `bg-${currentEpoca.color}-500 text-white hover:bg-${currentEpoca.color}-600 shadow-md`
                        }`}
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>

                {/* Botón época siguiente */}
                <button
                    onClick={() => changePageWithAnimation('next')}
                    disabled={currentPage === timelineEpocas.length - 1}
                    className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                        currentPage === timelineEpocas.length - 1
                            ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                            : 'bg-blue-500 text-white hover:bg-blue-600 shadow-lg hover:shadow-xl transform hover:-translate-y-1'
                    }`}
                >
                    <span className="hidden sm:inline">Época siguiente</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>

            {/* Información de la época actual */}
            <div className={`bg-gradient-to-r from-${currentEpoca.color}-50 to-${currentEpoca.color}-100 rounded-xl p-6 border border-${currentEpoca.color}-200`}>
                <div className="flex items-center justify-between">
                    <div>
                        <h3 className={`text-xl font-bold text-${currentEpoca.color}-800 mb-2`}>
                            {currentEpoca.nombre}
                        </h3>
                        <p className={`text-${currentEpoca.color}-600`}>
                            Período: {currentEpoca.periodo}
                        </p>
                    </div>
                    <div className={`text-${currentEpoca.color}-600 text-sm`}>
                        Evento {currentTimelineIndex + 1} de {currentEvents.length}
                    </div>
                </div>
            </div>
        </div>
    );
}