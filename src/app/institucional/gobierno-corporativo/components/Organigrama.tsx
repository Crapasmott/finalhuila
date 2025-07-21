import React, { useState } from 'react';
import Image from 'next/image';

// Interfaces TypeScript
interface NivelOrganizacional {
  nombre: string;
  descripcion: string;
  color: string;
  bgColor: string;
}

interface EstadisticaOrganizacional {
  valor: string;
  label: string;
  color: string;
}

const Organigrama: React.FC = () => {
  const [mostrarOrganigrama, setMostrarOrganigrama] = useState<boolean>(false);
  const [imagenError, setImagenError] = useState<boolean>(false);
  
  const nivelesOrganizacionales: NivelOrganizacional[] = [
    {
      nombre: 'Nivel Directivo',
      descripcion: 'Junta Directiva, Gerencia General y Subgerencias',
      color: 'bg-blue-500',
      bgColor: 'bg-blue-50'
    },
    {
      nombre: 'Nivel Operativo',
      descripcion: 'Áreas operativas y técnicas especializadas',
      color: 'bg-green-500',
      bgColor: 'bg-green-50'
    },
    {
      nombre: 'Nivel de Apoyo',
      descripcion: 'Áreas de soporte administrativo y técnico',
      color: 'bg-orange-500',
      bgColor: 'bg-orange-50'
    }
  ];

  const estadisticasOrg: EstadisticaOrganizacional[] = [
    {
      valor: '1',
      label: 'Gerencia General',
      color: 'text-blue-600'
    },
    {
      valor: '4',
      label: 'Subgerencias',
      color: 'text-green-600'
    },
    {
      valor: '15+',
      label: 'Áreas Especializadas',
      color: 'text-purple-600'
    },
    {
      valor: '2024',
      label: 'Última Actualización',
      color: 'text-orange-600'
    }
  ];

  // Handler de error correctamente tipado
  const handleImageError = (): void => {
    setImagenError(true);
  };

  // Toggle del organigrama
  const toggleOrganigrama = (): void => {
    setMostrarOrganigrama(!mostrarOrganigrama);
  };
  
  return (
    <div className="w-full">
      {/* Botón expandible mejorado */}
      <button
        className={`w-full flex items-center justify-between p-6 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white rounded-xl hover:from-green-700 hover:via-emerald-700 hover:to-teal-700 transition-all duration-500 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 group ${
          mostrarOrganigrama ? 'rounded-b-none shadow-2xl' : ''
        }`}
        onClick={toggleOrganigrama}
        aria-expanded={mostrarOrganigrama}
        aria-controls="organigrama-content"
      >
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center group-hover:bg-opacity-30 transition-all duration-300 group-hover:scale-110">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <div className="text-left">
            <h3 className="text-xl font-bold mb-1">Organigrama Institucional</h3>
            <p className="text-green-100 text-sm">Estructura organizacional completa de ELECTROHUILA</p>
          </div>
        </div>
        
        <div className={`w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center transform transition-all duration-500 group-hover:bg-opacity-30 ${
          mostrarOrganigrama ? 'rotate-180 bg-opacity-30' : 'group-hover:scale-110'
        }`}>
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>
      
      {/* Contenido expandible con animación */}
      <div 
        id="organigrama-content"
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          mostrarOrganigrama ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white border-2 border-t-0 border-green-200 rounded-b-xl shadow-xl">
          {/* Header del contenido mejorado */}
          <div className="bg-gradient-to-r from-green-50 via-emerald-50 to-teal-50 px-8 py-6 border-b border-green-200">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center shadow-md">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">ESTRUCTURA ORGANIZACIONAL</h3>
                <p className="text-green-700 font-medium">Jerarquía y distribución de responsabilidades institucionales</p>
              </div>
              
              {/* Badge de versión */}
              <div className="ml-auto">
                <div className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-md">
                  Versión 2024
                </div>
              </div>
            </div>
          </div>
          
          {/* Imagen del organigrama */}
          <div className="p-8 bg-gradient-to-br from-gray-50 to-green-50">
            <div className="relative w-full bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
              {!imagenError ? (
                <div className="relative">
                  <Image 
                    src="/images/directivos/ESTRUCTURA-ORGANIZACIONAL-2024-2048x1259.png.webp" 
                    alt="Estructura Organizacional ELECTROHUILA 2024 - Organigrama institucional completo" 
                    width={2048} 
                    height={1259} 
                    className="w-full h-auto transition-transform duration-300 hover:scale-105"
                    style={{ maxHeight: '700px', objectFit: 'contain' }}
                    onError={handleImageError}
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 2048px"
                  />
                  
                  {/* Overlay con información */}
                  <div className="absolute top-4 left-4 bg-white bg-opacity-95 rounded-lg p-3 shadow-md">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium text-gray-700">Actualizado 2024</span>
                    </div>
                  </div>

                  {/* Controles de zoom visual */}
                  <div className="absolute top-4 right-4 bg-white bg-opacity-90 rounded-lg p-2 shadow-md">
                    <div className="flex items-center space-x-2">
                      <button className="p-1 hover:bg-gray-100 rounded transition-colors" title="Ampliar imagen">
                        <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      </button>
                      <button className="p-1 hover:bg-gray-100 rounded transition-colors" title="Descargar">
                        <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                /* Fallback mejorado cuando no se puede cargar la imagen */
                <div className="w-full h-96 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 flex items-center justify-center border-2 border-dashed border-green-300 rounded-2xl">
                  <div className="text-center max-w-lg p-8">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="h-10 w-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Estructura Organizacional 2024</h3>
                    <p className="text-gray-600 mb-6">
                      El organigrama institucional completo no está disponible temporalmente. 
                      Puede solicitar una copia actualizada a través de nuestros canales oficiales.
                    </p>
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                      <p className="text-sm text-yellow-700">
                        📋 Para acceder al organigrama detallado, contáctenos directamente.
                      </p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-3">
                      <a 
                        href="/contactenos" 
                        className="inline-flex items-center px-4 py-2 bg-green-600 text-white text-sm rounded-lg hover:bg-green-700 transition-colors shadow-md"
                      >
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        Solicitar Información
                      </a>
                      <a 
                        href="/institucional/equipo-directivo" 
                        className="inline-flex items-center px-4 py-2 bg-white text-green-600 border-2 border-green-600 text-sm rounded-lg hover:bg-green-50 transition-colors"
                      >
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                        </svg>
                        Ver Equipo Directivo
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            {/* Información adicional sobre el organigrama */}
            <div className="mt-6 bg-green-50 border border-green-200 rounded-xl p-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-green-900 mb-2">Estructura Organizacional 2024</h4>
                  <p className="text-green-700 leading-relaxed">
                    Representa la estructura jerárquica actualizada de ELECTROHUILA S.A. E.S.P., 
                    mostrando las líneas de autoridad, responsabilidad y comunicación organizacional, 
                    así como la distribución funcional de las diferentes áreas de la empresa.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Información complementaria mejorada */}
          <div className="px-8 pb-8">
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
              <h4 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                Niveles de la Estructura Organizacional
              </h4>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                {nivelesOrganizacionales.map((nivel, index) => (
                  <div 
                    key={index} 
                    className={`${nivel.bgColor} border-2 border-opacity-20 rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group`}
                  >
                    <div className="flex items-center space-x-3 mb-4">
                      <div className={`w-6 h-6 ${nivel.color} rounded-full flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300`}></div>
                      <h5 className="font-bold text-gray-900 group-hover:text-green-700 transition-colors duration-300">
                        {nivel.nombre}
                      </h5>
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {nivel.descripcion}
                    </p>
                  </div>
                ))}
              </div>
              
              {/* Estadísticas organizacionales mejoradas */}
              <div className="bg-gradient-to-r from-gray-50 to-green-50 rounded-xl p-6 border border-gray-200">
                <h5 className="text-xl font-bold text-gray-900 mb-6 text-center">Composición Organizacional</h5>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {estadisticasOrg.map((stat, index) => (
                    <div 
                      key={index} 
                      className="text-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 group"
                    >
                      <div className={`text-3xl font-bold ${stat.color} mb-2 group-hover:scale-110 transition-transform duration-300`}>
                        {stat.valor}
                      </div>
                      <div className="text-sm text-gray-600 font-medium leading-tight">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-8 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 text-white text-center">
              <h5 className="text-2xl font-bold mb-4">¿Necesitas información detallada sobre nuestra estructura?</h5>
              <p className="text-green-100 mb-6 text-lg">
                Accede a información completa sobre nuestro organigrama, funciones y responsabilidades organizacionales.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href="/institucional/equipo-directivo" 
                  className="inline-flex items-center px-6 py-3 bg-white text-green-600 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                  </svg>
                  Conocer Equipo Directivo
                </a>
                <a 
                  href="/documentos/organizacional/organigrama-2024.pdf" 
                  className="inline-flex items-center px-6 py-3 bg-transparent border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-green-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Descargar Organigrama
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Organigrama;