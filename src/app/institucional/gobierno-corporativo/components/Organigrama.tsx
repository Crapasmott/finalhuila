import React, { useState } from 'react';
import Image from 'next/image';

const Organigrama = () => {
  const [mostrarOrganigrama, setMostrarOrganigrama] = useState(false);
  
  return (
    <div className="w-full">
      {/* Botón expandible */}
      <button
        className={`w-full flex items-center justify-between p-4 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg hover:from-green-700 hover:to-green-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 ${
          mostrarOrganigrama ? 'rounded-b-none' : ''
        }`}
        onClick={() => setMostrarOrganigrama(!mostrarOrganigrama)}
      >
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <div className="text-left">
            <h3 className="text-lg font-semibold">Organigrama</h3>
            <p className="text-green-100 text-sm">Estructura organizacional de ELECTROHUILA</p>
          </div>
        </div>
        
        <div className={`w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center transform transition-transform duration-300 ${
          mostrarOrganigrama ? 'rotate-180' : ''
        }`}>
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>
      
      {/* Contenido expandible */}
      {mostrarOrganigrama && (
        <div className="bg-white border-2 border-t-0 border-green-200 rounded-b-lg shadow-lg overflow-hidden">
          {/* Header del contenido */}
          <div className="bg-gradient-to-r from-green-50 to-blue-50 px-6 py-4 border-b border-gray-200">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">ESTRUCTURA ORGANIZACIONAL</h3>
                <p className="text-sm text-gray-600">Jerarquía y distribución de responsabilidades</p>
              </div>
            </div>
          </div>
          
          {/* Imagen del organigrama */}
          <div className="p-6 bg-gray-50">
            <div className="relative w-full bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
              <Image 
                src="/images/directivos/ESTRUCTURA-ORGANIZACIONAL-2024-2048x1259.png.webp" 
                alt="Estructura Organizacional ELECTROHUILA 2024" 
                width={2048} 
                height={1259} 
                className="w-full h-auto"
                style={{ maxHeight: '600px', objectFit: 'contain' }}
                onError={(e) => {
                  // Fallback en caso de error
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              
              {/* Fallback cuando no se puede cargar la imagen */}
              <div className="hidden w-full h-96 bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg">
                <div className="text-center">
                  <svg className="mx-auto h-16 w-16 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Estructura Organizacional</h3>
                  <p className="text-gray-500">Organigrama no disponible temporalmente</p>
                  <p className="text-sm text-gray-400 mt-2">Por favor, contacte al administrador del sistema</p>
                </div>
              </div>
            </div>
            
            {/* Información adicional sobre el organigrama */}
            <div className="mt-4 bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <svg className="flex-shrink-0 w-5 h-5 text-green-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h4 className="text-sm font-medium text-green-900">Estructura Organizacional 2024</h4>
                  <p className="text-sm text-green-700 mt-1">
                    Representa la estructura jerárquica actual de ELECTROHUILA S.A. E.S.P., 
                    mostrando las líneas de autoridad, responsabilidad y comunicación organizacional.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Información complementaria */}
          <div className="px-6 pb-6">
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <svg className="w-5 h-5 mr-2 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
                Características de la Estructura
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <h5 className="font-semibold text-blue-900 text-sm">Nivel Directivo</h5>
                  </div>
                  <p className="text-xs text-blue-700">
                    Junta Directiva, Gerencia General y Subgerencias
                  </p>
                </div>
                
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <h5 className="font-semibold text-green-900 text-sm">Nivel Operativo</h5>
                  </div>
                  <p className="text-xs text-green-700">
                    Áreas operativas y técnicas especializadas
                  </p>
                </div>
                
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                    <h5 className="font-semibold text-orange-900 text-sm">Nivel de Apoyo</h5>
                  </div>
                  <p className="text-xs text-orange-700">
                    Áreas de soporte administrativo y técnico
                  </p>
                </div>
              </div>
              
              {/* Estadísticas organizacionales */}
              <div className="mt-6 pt-4 border-t border-gray-200">
                <h5 className="font-medium text-gray-900 mb-3">Estructura Organizacional:</h5>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="text-xl font-bold text-blue-600">1</div>
                    <div className="text-xs text-gray-600">Gerencia General</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-green-600">4</div>
                    <div className="text-xs text-gray-600">Subgerencias</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-purple-600">15+</div>
                    <div className="text-xs text-gray-600">Áreas</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-orange-600">2024</div>
                    <div className="text-xs text-gray-600">Actualización</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Organigrama;