import React, { useState } from 'react';
import Image from 'next/image';

// Interfaces TypeScript
interface TipoProceso {
  tipo: string;
  color: string;
  descripcion: string;
  icon: string;
}

const MapaProcesos: React.FC = () => {
  const [mostrarMapa, setMostrarMapa] = useState<boolean>(false);
  const [imagenError, setImagenError] = useState<boolean>(false);
  
  const tiposProcesos: TipoProceso[] = [
    {
      tipo: 'Estratégico',
      color: 'bg-blue-500',
      descripcion: 'Procesos de dirección y planificación estratégica',
      icon: '🎯'
    },
    {
      tipo: 'Cadena de Valor',
      color: 'bg-green-500',
      descripcion: 'Procesos operativos principales de la empresa',
      icon: '⚡'
    },
    {
      tipo: 'Soporte',
      color: 'bg-orange-500',
      descripcion: 'Procesos de apoyo y recursos organizacionales',
      icon: '🛠️'
    },
    {
      tipo: 'Control',
      color: 'bg-red-500',
      descripcion: 'Procesos de monitoreo y evaluación',
      icon: '📊'
    }
  ];

  // Handler de error correctamente tipado
  const handleImageError = () => {
    setImagenError(true);
  };

  // Toggle del mapa con animación
  const toggleMapa = (): void => {
    setMostrarMapa(!mostrarMapa);
  };
  
  return (
    <div className="w-full">
      {/* Botón expandible mejorado */}
      <button
        className={`w-full flex items-center justify-between p-6 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600 text-white rounded-xl hover:from-blue-700 hover:via-blue-800 hover:to-indigo-700 transition-all duration-500 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 group ${
          mostrarMapa ? 'rounded-b-none shadow-2xl' : ''
        }`}
        onClick={toggleMapa}
        aria-expanded={mostrarMapa}
        aria-controls="mapa-procesos-content"
      >
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center group-hover:bg-opacity-30 transition-all duration-300 group-hover:scale-110">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
          </div>
          <div className="text-left">
            <h3 className="text-xl font-bold mb-1">Mapa de Procesos</h3>
            <p className="text-blue-100 text-sm">Arquitectura organizacional de ELECTROHUILA</p>
          </div>
        </div>
        
        <div className={`w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center transform transition-all duration-500 group-hover:bg-opacity-30 ${
          mostrarMapa ? 'rotate-180 bg-opacity-30' : 'group-hover:scale-110'
        }`}>
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>
      
      {/* Contenido expandible con animación mejorada */}
      <div 
        id="mapa-procesos-content"
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          mostrarMapa ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white border-2 border-t-0 border-blue-200 rounded-b-xl shadow-xl">
          {/* Imagen del mapa */}
          <div className="p-8 bg-gradient-to-br from-gray-50 to-blue-50">
            <div className="relative w-full bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
              {!imagenError ? (
                <div className="relative">
                  <Image 
                    src="/images/directivos/mapa-de-procesos-electrohuila.svg" 
                    alt="Mapa de Procesos ELECTROHUILA - Arquitectura organizacional completa" 
                    width={1000} 
                    height={700} 
                    className="w-full h-auto transition-transform duration-300 hover:scale-105"
                    style={{ maxHeight: '600px', objectFit: 'contain' }}
                    onError={handleImageError}
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1000px"
                  />
                  
                  {/* Overlay con información */}
                  <div className="absolute top-4 left-4 bg-white bg-opacity-90 rounded-lg p-3 shadow-md">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium text-gray-700">Sistema Integrado de Gestión</span>
                    </div>
                  </div>
                </div>
              ) : (
                /* Fallback mejorado cuando no se puede cargar la imagen */
                <div className="w-full h-96 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center border-2 border-dashed border-blue-300 rounded-2xl">
                  <div className="text-center max-w-md p-8">
                    <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="h-10 w-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Mapa de Procesos</h3>
                    <p className="text-gray-600 mb-4">
                      El diagrama completo de nuestra arquitectura de procesos no está disponible temporalmente.
                    </p>
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
                      <p className="text-sm text-yellow-700">
                        📋 Para obtener una copia del mapa de procesos, puede contactarnos directamente.
                      </p>
                    </div>
                    <a 
                      href="/contactenos" 
                      className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      Solicitar Información
                    </a>
                  </div>
                </div>
              )}
            </div>
            
            {/* Información adicional sobre el mapa */}
            <div className="mt-6 bg-blue-50 border border-blue-200 rounded-xl p-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-blue-900 mb-2">Sobre el Mapa de Procesos</h4>
                  <p className="text-blue-700 leading-relaxed">
                    Representa la arquitectura integral de procesos de ELECTROHUILA S.A. E.S.P., 
                    mostrando la interrelación estratégica entre los diferentes tipos de procesos organizacionales 
                    y su contribución al logro de objetivos corporativos.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Leyenda mejorada */}
          <div className="px-8 pb-8">
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h4 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                  </svg>
                </div>
                Clasificación de Procesos
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                {tiposProcesos.map((proceso, index) => (
                  <div 
                    key={index} 
                    className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-blue-300 transition-all duration-300 transform hover:-translate-y-1 group"
                  >
                    <div className="flex items-center space-x-3 mb-4">
                      <div className={`w-6 h-6 ${proceso.color} rounded-full flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300`}></div>
                      <span className="text-2xl group-hover:scale-110 transition-transform duration-300">{proceso.icon}</span>
                      <h5 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                        {proceso.tipo}
                      </h5>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {proceso.descripcion}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Información adicional mejorada */}
            <div className="mt-8 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-200">
              <h5 className="text-xl font-bold text-green-900 mb-6 flex items-center">
                <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                Beneficios del Mapa de Procesos
              </h5>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    icon: "🎯",
                    title: "Visión Estratégica",
                    description: "Visualización clara de la arquitectura organizacional y alineación estratégica"
                  },
                  {
                    icon: "🔗", 
                    title: "Interconexión",
                    description: "Identificación de interrelaciones críticas entre procesos organizacionales"
                  },
                  {
                    icon: "📈",
                    title: "Mejora Continua",
                    description: "Base sólida para la optimización y mejora continua organizacional"
                  }
                ].map((beneficio, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-green-200 hover:shadow-md transition-all duration-300">
                    <div className="flex items-start space-x-4">
                      <div className="text-2xl">{beneficio.icon}</div>
                      <div>
                        <h6 className="font-semibold text-green-900 mb-2">{beneficio.title}</h6>
                        <p className="text-sm text-green-700 leading-relaxed">{beneficio.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white text-center">
              <h5 className="text-2xl font-bold mb-4">¿Necesitas más información sobre nuestros procesos?</h5>
              <p className="text-blue-100 mb-6 text-lg">
                Obtén acceso completo a nuestra documentación de procesos y procedimientos organizacionales.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href="/institucional/sistema-gestion" 
                  className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Sistema de Gestión
                </a>
                <a 
                  href="/contactenos" 
                  className="inline-flex items-center px-6 py-3 bg-transparent border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Contáctenos
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapaProcesos;