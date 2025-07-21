'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';

// Importación dinámica para resolver problemas con react-hook-form
const FormularioPQRAnonimo = dynamic(() => import('@/components/FormularioPQRAnonimo'), {
  ssr: false,
});

const PQRAnonimoPage = () => {
  const [activeTab, setActiveTab] = useState('formulario');

  const normativas = [
    {
      ley: 'Ley 1755 de 2015',
      descripcion: 'Derecho de petición',
      detalle: 'Regula el derecho fundamental de petición y establece los términos para su ejercicio.',
      icono: '📋'
    },
    {
      ley: 'Ley 142 de 1994',
      descripcion: 'Régimen de servicios públicos domiciliarios',
      detalle: 'Establece el régimen de los servicios públicos domiciliarios y su prestación.',
      icono: '⚡'
    },
    {
      ley: 'Ley 1581 de 2012',
      descripcion: 'Protección de datos personales',
      detalle: 'Dicta disposiciones generales para la protección de datos personales.',
      icono: '🔒'
    },
    {
      ley: 'Decreto 1077 de 2015',
      descripcion: 'Reglamentario del sector vivienda, ciudad y territorio',
      detalle: 'Reglamento único del sector vivienda, ciudad y territorio.',
      icono: '🏛️'
    }
  ];

  const tiposPQR = [
    {
      tipo: 'Petición',
      descripcion: 'Solicitud de información, documentos o actuaciones',
      icono: '📝',
      color: 'blue'
    },
    {
      tipo: 'Queja',
      descripcion: 'Manifestación de inconformidad por la prestación del servicio',
      icono: '⚠️',
      color: 'orange'
    },
    {
      tipo: 'Reclamo',
      descripcion: 'Solicitud de revisión de facturación o servicios',
      icono: '📄',
      color: 'red'
    },
    {
      tipo: 'Sugerencia',
      descripcion: 'Propuesta para mejorar nuestros servicios',
      icono: '💡',
      color: 'green'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header Premium */}
      <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="relative">
            {/* Elementos decorativos */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
            
            <div className="relative text-center">
              <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-sm font-medium mb-4">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                Sistema de Atención al Cliente
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                PQR <span className="text-purple-300">Anónimo</span>
              </h1>
              
              <p className="text-xl opacity-90 max-w-3xl mx-auto">
                Tu voz importa. Comparte tus peticiones, quejas, reclamos o sugerencias de manera segura y anónima
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Estadísticas destacadas */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center transform hover:scale-105 transition-transform">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">100%</h3>
            <p className="text-gray-600 text-sm">Confidencialidad</p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center transform hover:scale-105 transition-transform">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">24/7</h3>
            <p className="text-gray-600 text-sm">Disponibilidad</p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center transform hover:scale-105 transition-transform">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">72h</h3>
            <p className="text-gray-600 text-sm">Respuesta máxima</p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center transform hover:scale-105 transition-transform">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">ID</h3>
            <p className="text-gray-600 text-sm">Código de seguimiento</p>
          </div>
        </div>

        {/* Información destacada */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                Sistema PQR Anónimo
              </div>
              
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Tu opinión nos ayuda a <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">mejorar</span>
              </h2>
              
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  En Electrohuila valoramos tu opinión. Puedes presentar tus peticiones, quejas, reclamos o sugerencias
                  de manera anónima a través de este formulario seguro.
                </p>
                <p>
                  Si deseas realizar un seguimiento a tu solicitud, tienes la opción de proporcionar tus datos de contacto
                  o conservar el código de radicado que se generará automáticamente.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {tiposPQR.map((item, index) => (
                <div key={index} className={`bg-gradient-to-br from-${item.color}-50 to-${item.color}-100 rounded-xl p-4 border border-${item.color}-200`}>
                  <div className="text-center">
                    <div className="text-2xl mb-2">{item.icono}</div>
                    <h3 className={`font-semibold text-${item.color}-800 mb-2`}>{item.tipo}</h3>
                    <p className={`text-xs text-${item.color}-600`}>{item.descripcion}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Aviso importante mejorado */}
          <div className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-blue-900 mb-2">Importante: Confidencialidad Garantizada</h3>
                <p className="text-blue-800 leading-relaxed">
                  Utilizamos tus comentarios para mejorar continuamente nuestros servicios. 
                  Toda la información proporcionada es tratada con confidencialidad según la 
                  legislación vigente de protección de datos.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Pestañas de navegación */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
          <div className="border-b border-gray-200">
            <div className="flex">
              <button
                onClick={() => setActiveTab('formulario')}
                className={`flex-1 px-6 py-4 font-medium text-sm transition-all duration-300 ${
                  activeTab === 'formulario'
                    ? 'text-blue-600 bg-blue-50 border-b-2 border-blue-500'
                    : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center justify-center space-x-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span>Formulario PQR</span>
                </div>
              </button>
              
              <button
                onClick={() => setActiveTab('normativa')}
                className={`flex-1 px-6 py-4 font-medium text-sm transition-all duration-300 ${
                  activeTab === 'normativa'
                    ? 'text-purple-600 bg-purple-50 border-b-2 border-purple-500'
                    : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center justify-center space-x-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  <span>Marco Normativo</span>
                </div>
              </button>
            </div>
          </div>

          <div className="p-8">
            {activeTab === 'formulario' && (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Formulario de PQR</h3>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    Completa el siguiente formulario para enviar tu solicitud. Todos los campos marcados con * son obligatorios.
                  </p>
                </div>
                <FormularioPQRAnonimo />
              </div>
            )}

            {activeTab === 'normativa' && (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Marco Normativo</h3>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    Conoce las leyes y decretos que respaldan tu derecho a presentar PQR
                  </p>
                </div>
                
                <div className="grid gap-6">
                  {normativas.map((norma, index) => (
                    <div key={index} className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center">
                            <span className="text-xl">{norma.icono}</span>
                          </div>
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-bold text-gray-900 mb-2">{norma.ley}</h4>
                          <p className="text-blue-600 font-medium mb-2">{norma.descripcion}</p>
                          <p className="text-gray-700 text-sm leading-relaxed">{norma.detalle}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* Call to Action final */}
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">¿Ya radicaste una solicitud?</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Si ya has enviado una solicitud y deseas consultar su estado, puedes hacerlo 
            a través de nuestro sistema de consulta utilizando el código de radicado.
          </p>
          
          <a 
            href="/consulta-pqr" 
            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            Consultar Estado de PQR
          </a>
        </div>
      </div>
    </div>
  );
};

export default PQRAnonimoPage;