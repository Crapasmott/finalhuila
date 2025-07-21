'use client';

import React, { useState } from 'react';

export default function PGRDPage() {
  const [expandedSection, setExpandedSection] = useState('documentos');

  const toggleSection = (sectionId) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  const isSectionExpanded = (sectionId) => expandedSection === sectionId;

  const documentos = [
    {
      id: 'pgrd-informe',
      title: 'Informe PGRD',
      url: 'https://electrohuila.net/wp-content/uploads/2024/04/Actualizacion-PGDR_2023.pdf',
      descripcion: 'Actualización del Plan de Gestión de Riesgos y Desastres 2023',
      tamaño: '2.1 MB'
    },
    {
      id: 'plan-emergencia',
      title: 'Plan de emergencia por zonas',
      url: 'https://electrohuila.net/wp-content/uploads/2024/04/plan-de-emergencia-por-zonas.pdf',
      descripcion: 'Estrategias de respuesta organizadas por sectores geográficos',
      tamaño: '2.4 MB'
    },
    {
      id: 'politica-control',
      title: 'Política de control de emergencias',
      url: 'https://electrohuila.net/wp-content/uploads/2024/04/politica-control-de-emergencias.pdf',
      descripcion: 'Marco normativo interno para gestión de crisis',
      tamaño: '1.8 MB'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center max-w-4xl mx-auto">
            <nav className="flex items-center justify-center space-x-2 text-sm text-gray-500 mb-8">
              <a href="/" className="hover:text-gray-700 transition-colors">Inicio</a>
              <span>/</span>
              <a href="/institucional" className="hover:text-gray-700 transition-colors">Institucional</a>
              <span>/</span>
              <span className="text-gray-900">PGRD</span>
            </nav>
            
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Plan de Gestión de Riesgos y Desastres
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Protegiendo a nuestra comunidad y colaboradores con estrategias integrales de prevención y respuesta.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {[
            { number: '24/7', label: 'Monitoreo continuo' },
            { number: '15', label: 'Protocolos activos' },
            { number: '500+', label: 'Personal capacitado' },
            { number: '12', label: 'Zonas de cobertura' }
          ].map((stat, index) => (
            <div key={index} className="bg-white rounded-lg border border-gray-200 p-6 text-center">
              <div className="text-2xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden mb-12">
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="p-8 lg:p-12">
              <div className="inline-flex items-center px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium mb-6">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Nuestro Compromiso
              </div>
              
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Gestión Integral de Riesgos
              </h2>
              
              <p className="text-gray-700 leading-relaxed text-lg mb-8">
                Electrohuila S.A. E.S.P. implementa acciones para evolucionar y crecer sosteniblemente 
                de la mano de la prevención de riesgos, protección a la comunidad y nuestros colaboradores, 
                garantizando el retorno seguro de los trabajadores a sus hogares.
              </p>
              
              <div className="flex items-center text-sm text-gray-600">
                <div className="flex -space-x-2 mr-4">
                  <div className="w-8 h-8 bg-blue-500 rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-green-500 rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-orange-500 rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-gray-500 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold">+</div>
                </div>
                <span className="font-medium">Equipo multidisciplinario</span>
              </div>
            </div>
            
            <div className="bg-gray-100 p-8 lg:p-12 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Protección Integral</h3>
                <p className="text-gray-600">Sistemas de prevención y respuesta ante emergencias</p>
              </div>
            </div>
          </div>
        </div>

        {/* Accordion */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden mb-12">
          <div className="p-6 border-b border-gray-200 bg-gray-50">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Información Institucional</h3>
            <p className="text-gray-600">Accede a documentos y reportes de nuestro sistema de gestión</p>
          </div>

          <div className="divide-y divide-gray-200">
            {/* Informe de Gestión de Riesgo */}
            <div>
              <button 
                className={`w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors ${
                  isSectionExpanded('informe') ? 'bg-gray-50' : ''
                }`}
                onClick={() => toggleSection('informe')}
              >
                <div className="flex items-center">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center mr-4 transition-colors ${
                    isSectionExpanded('informe') 
                      ? 'bg-blue-100 text-blue-600' 
                      : 'bg-gray-100 text-gray-600'
                  }`}>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isSectionExpanded('informe') ? 'M19 9l-7 7-7-7' : 'M9 5l7 7-7 7'} />
                    </svg>
                  </div>
                  <div>
                    <span className="text-lg font-semibold text-gray-900">Informe de Gestión de Riesgo</span>
                    <div className="text-sm text-gray-500">Reportes periódicos y análisis de riesgos</div>
                  </div>
                </div>
              </button>
              
              {isSectionExpanded('informe') && (
                <div className="px-6 pb-6 bg-gray-50">
                  <div className="bg-white rounded-lg p-6 border border-gray-200">
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Electrohuila cuenta con un Sistema de Gestión de Riesgos que permite identificar, evaluar, 
                      prevenir y mitigar los riesgos asociados a nuestra operación.
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      {[
                        'Identificación y análisis de riesgos',
                        'Medidas preventivas implementadas',
                        'Capacitaciones realizadas',
                        'Simulacros y ejercicios de preparación',
                        'Seguimiento a incidentes'
                      ].map((item, index) => (
                        <div key={index} className="flex items-center">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                          <span className="text-gray-700 text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                      <div className="flex items-center">
                        <svg className="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <div>
                          <p className="text-blue-800 font-medium text-sm">Para consultar informes detallados:</p>
                          <a href="mailto:gestionriesgos@electrohuila.co" className="text-blue-600 hover:text-blue-800 font-medium text-sm">
                            gestionriesgos@electrohuila.co
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Documentos de Interés */}
            <div>
              <button 
                className={`w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors ${
                  isSectionExpanded('documentos') ? 'bg-gray-50' : ''
                }`}
                onClick={() => toggleSection('documentos')}
              >
                <div className="flex items-center">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center mr-4 transition-colors ${
                    isSectionExpanded('documentos') 
                      ? 'bg-blue-100 text-blue-600' 
                      : 'bg-gray-100 text-gray-600'
                  }`}>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isSectionExpanded('documentos') ? 'M19 9l-7 7-7-7' : 'M9 5l7 7-7 7'} />
                    </svg>
                  </div>
                  <div>
                    <span className="text-lg font-semibold text-gray-900">Documentos de Interés</span>
                    <div className="text-sm text-gray-500">{documentos.length} documentos disponibles</div>
                  </div>
                </div>
              </button>
              
              {isSectionExpanded('documentos') && (
                <div className="px-6 pb-6 bg-gray-50">
                  <div className="space-y-4">
                    {documentos.map((doc) => (
                      <div key={doc.id} className="bg-white rounded-lg p-4 border border-gray-200 hover:border-gray-300 transition-colors">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center flex-1">
                            <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center mr-4">
                              <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                              </svg>
                            </div>
                            
                            <div className="flex-1 min-w-0">
                              <h4 className="text-lg font-semibold text-gray-900 mb-1">
                                {doc.title}
                              </h4>
                              <p className="text-gray-600 text-sm mb-2">
                                {doc.descripcion}
                              </p>
                              <div className="flex items-center text-xs text-gray-500">
                                <span className="mr-4">PDF</span>
                                <span>{doc.tamaño}</span>
                              </div>
                            </div>
                          </div>
                          
                          <div className="ml-4">
                            <a 
                              href={doc.url} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
                            >
                              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                              </svg>
                              Descargar
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Risk Management Process */}
        <div className="bg-white rounded-lg border border-gray-200 p-8 mb-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Gestión Integral de Riesgos</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Nuestro enfoque sistémico abarca todas las fases del ciclo de gestión de riesgos
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Prevención',
                description: 'Medidas preventivas para reducir la probabilidad de eventos adversos.',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                )
              },
              {
                title: 'Mitigación',
                description: 'Acciones para reducir el impacto de eventos adversos.',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
              },
              {
                title: 'Preparación',
                description: 'Protocolos y recursos de respuesta ante emergencias.',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v6a2 2 0 002 2h2M9 5a2 2 0 012 2v6a2 2 0 01-2 2m0-8V9a2 2 0 002-2V5a2 2 0 00-2-2m0 0V3a2 2 0 012-2" />
                  </svg>
                )
              },
              {
                title: 'Recuperación',
                description: 'Planes de continuidad para recuperación rápida.',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                )
              }
            ].map((fase, index) => (
              <div key={index} className="text-center p-6 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <div className="text-blue-600">{fase.icon}</div>
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-3">{fase.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{fase.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-gray-900 rounded-lg p-8 text-white">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-bold mb-4">¿Necesitas más información?</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Para mayor información sobre nuestro Plan de Gestión de Riesgos y Desastres, 
                nuestro equipo especializado está disponible para atenderte.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Línea directa</p>
                    <p className="text-gray-300 text-sm">(608) 8664600 Ext. 1234</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Email especializado</p>
                    <a href="mailto:gestionriesgos@electrohuila.co" className="text-gray-300 hover:text-white transition-colors text-sm">
                      gestionriesgos@electrohuila.co
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 109.75 9.75c0-2.33-.81-4.49-2.17-6.19" />
                </svg>
              </div>
              
              <h4 className="text-lg font-bold mb-4">Atención Especializada</h4>
              <p className="text-gray-300 mb-6 text-sm">
                Nuestro equipo está capacitado para brindarte información detallada 
                y resolver tus consultas específicas.
              </p>
              
              <a 
                href="mailto:gestionriesgos@electrohuila.co"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Contactar Ahora
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}