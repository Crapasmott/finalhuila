import React, { useState } from 'react';
import Image from 'next/image';

const MapaProcesos = () => {
  const [mostrarMapa, setMostrarMapa] = useState(false);
  
  const tiposProcesos = [
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
  
  return (
    <div className="w-full">
      {/* Botón expandible */}
      <button
        className={`w-full flex items-center justify-between p-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 ${
          mostrarMapa ? 'rounded-b-none' : ''
        }`}
        onClick={() => setMostrarMapa(!mostrarMapa)}
      >
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
          </div>
          <div className="text-left">
            <h3 className="text-lg font-semibold">Mapa de Procesos</h3>
            <p className="text-blue-100 text-sm">Arquitectura organizacional de ELECTROHUILA</p>
          </div>
        </div>
        
        <div className={`w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center transform transition-transform duration-300 ${
          mostrarMapa ? 'rotate-180' : ''
        }`}>
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>
      
      {/* Contenido expandible */}
      {mostrarMapa && (
        <div className="bg-white border-2 border-t-0 border-blue-200 rounded-b-lg shadow-lg overflow-hidden">
          {/* Imagen del mapa */}
          <div className="p-6 bg-gray-50">
            <div className="relative w-full bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
              <Image 
                src="/images/directivos/mapa-de-procesos-electrohuila.svg" 
                alt="Mapa de Procesos ELECTROHUILA" 
                width={800} 
                height={600} 
                className="w-full h-auto"
                style={{ maxHeight: '500px', objectFit: 'contain' }}
                onError={(e) => {
                  // Fallback en caso de error
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              
              {/* Fallback cuando no se puede cargar la imagen */}
              <div className="hidden w-full h-80 bg-gradient-to-br from-blue-50 to-gray-100 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg">
                <div className="text-center">
                  <svg className="mx-auto h-16 w-16 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Mapa de Procesos</h3>
                  <p className="text-gray-500">Imagen no disponible temporalmente</p>
                  <p className="text-sm text-gray-400 mt-2">Por favor, contacte al administrador del sistema</p>
                </div>
              </div>
            </div>
            
            {/* Información adicional sobre el mapa */}
            <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <svg className="flex-shrink-0 w-5 h-5 text-blue-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h4 className="text-sm font-medium text-blue-900">Sobre el Mapa de Procesos</h4>
                  <p className="text-sm text-blue-700 mt-1">
                    Representa la arquitectura de procesos de ELECTROHUILA S.A. E.S.P., 
                    mostrando la interrelación entre los diferentes tipos de procesos organizacionales.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Leyenda */}
          <div className="px-6 pb-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <svg className="w-5 h-5 mr-2 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
              </svg>
              Tipos de Procesos
            </h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {tiposProcesos.map((proceso, index) => (
                <div 
                  key={index} 
                  className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-200"
                >
                  <div className="flex items-center space-x-3 mb-3">
                    <div className={`w-4 h-4 ${proceso.color} rounded-full flex-shrink-0`}></div>
                    <span className="text-lg">{proceso.icon}</span>
                    <h5 className="font-semibold text-gray-900 text-sm">{proceso.tipo}</h5>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {proceso.descripcion}
                  </p>
                </div>
              ))}
            </div>
            
            {/* Información adicional */}
            <div className="mt-6 bg-gray-50 rounded-lg p-4 border border-gray-200">
              <h5 className="font-medium text-gray-900 mb-2">Beneficios del Mapa de Procesos:</h5>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
                <div className="flex items-start space-x-2">
                  <svg className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Visualización clara de la arquitectura organizacional</span>
                </div>
                <div className="flex items-start space-x-2">
                  <svg className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Identificación de interrelaciones entre procesos</span>
                </div>
                <div className="flex items-start space-x-2">
                  <svg className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Base para la mejora continua organizacional</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MapaProcesos;