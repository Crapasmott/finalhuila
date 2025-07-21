'use client';

import React, { useState } from 'react';

export default function SostenibilidadPage() {
  const [activeTab, setActiveTab] = useState('social');
  
  const socialPrograms = [
    {
      id: 'capacitaciones',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Capacitaciones Grupos de Interés',
      description: 'Programas formativos dirigidos a diferentes grupos de interés para fortalecer capacidades y conocimientos.',
      link: '/sostenibilidad/capacitaciones-grupos-interes'
    },
    {
      id: 'alianzas',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Alianzas / Convenios Empresariales',
      description: 'Alianzas estratégicas con entidades públicas y privadas para generar impacto positivo en la comunidad.',
      link: '/sostenibilidad/alianzas-convenios-empresariales'
    },
    {
      id: 'deporte',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Apoyo Social al Deporte',
      description: 'Iniciativas para promover la actividad física y el deporte como herramienta de desarrollo social.',
      link: '/sostenibilidad/apoyo-social-deporte'
    },
    {
      id: 'actividades',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Actividades Sociales',
      description: 'Actividades dedicadas a mejorar la calidad de vida y promover el bienestar en comunidades vulnerables.',
      link: '/institucional/sostenibilidad/actividades-sociales'
    },
    {
      id: 'esquema',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Esquema Diferencial del Servicio de Energía',
      description: 'Estrategias de acceso a la energía para comunidades en condiciones especiales.',
      link: '/institucional/sostenibilidad/esquema-diferencial'
    }
  ];

  const ambientalPrograms = [
    {
      id: 'compensaciones',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 11.08V12a10 10 0 11-5.93-9.14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <polyline points="22,4 12,14.01 9,11.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Compensaciones Ambientales',
      description: 'Acciones para mitigar el impacto ambiental de nuestras operaciones mediante programas de compensación.',
      link: '/institucional/sostenibilidad/compensaciones'
    },
    {
      id: 'cambio-climatico',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2v10l3-3m-3 3l-3-3m3 3v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Contribución al Cambio Climático',
      description: 'Estrategias y acciones para reducir la huella de carbono y contribuir a la lucha contra el cambio climático.',
      link: '/institucional/sostenibilidad/cambio-climatico'
    },
    {
      id: 'residuos',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 6h18M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2m-4 4v6m4-6v6M9 10v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Manejo y Disposición de Residuos',
      description: 'Gestión integral de residuos con enfoque en reducción, reutilización y reciclaje.',
      link: '/institucional/sostenibilidad/residuos'
    },
    {
      id: 'gestion-proyectos',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 11H5a2 2 0 00-2 2v5a2 2 0 002 2h4a2 2 0 002-2v-5a2 2 0 00-2-2zM21 11h-4a2 2 0 00-2 2v5a2 2 0 002 2h4a2 2 0 002-2v-5a2 2 0 00-2-2zM9 3H5a2 2 0 00-2 2v2a2 2 0 002 2h4a2 2 0 002-2V5a2 2 0 00-2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Gestión Social y Ambiental en Proyectos',
      description: 'Integración de criterios sociales y ambientales en el desarrollo de proyectos de infraestructura.',
      link: '/institucional/sostenibilidad/gestion-proyectos'
    },
    {
      id: 'compromiso',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Compromiso Ambiental con la Comunidad',
      description: 'Iniciativas de protección y conservación del medio ambiente en colaboración con las comunidades.',
      link: '/institucional/sostenibilidad/compromiso-ambiental'
    },
    {
      id: 'practicas',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Prácticas Sostenibles',
      description: 'Implementación de prácticas innovadoras para promover la sostenibilidad en nuestras operaciones diarias.',
      link: '/institucional/sostenibilidad/practicas-sostenibles'
    },
    {
      id: 'movilidad',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="4" y="16" width="6" height="4" rx="1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <rect x="14" y="16" width="6" height="4" rx="1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <rect x="4" y="12" width="16" height="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M4 12V8a2 2 0 012-2h10l4 6-2 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="7" cy="18" r="1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="17" cy="18" r="1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Movilidad Eléctrica',
      description: 'Promoción del uso de vehículos eléctricos y desarrollo de infraestructura de recarga.',
      link: '/institucional/sostenibilidad/movilidad-electrica'
    }
  ];

  const currentPrograms = activeTab === 'social' ? socialPrograms : ambientalPrograms;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center max-w-3xl mx-auto">
            <nav className="flex items-center justify-center space-x-2 text-sm text-gray-500 mb-8">
              <a href="/" className="hover:text-gray-700 transition-colors">Inicio</a>
              <span>/</span>
              <a href="/institucional" className="hover:text-gray-700 transition-colors">Institucional</a>
              <span>/</span>
              <span className="text-gray-900">Sostenibilidad</span>
            </nav>
            
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Programas de Sostenibilidad
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Construyendo un futuro sostenible para el Huila a través de iniciativas sociales y ambientales que generan valor compartido.
            </p>
          </div>
        </div>
      </div>

      {/* Statistics */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {[
            { number: socialPrograms.length, label: 'Programas Sociales', icon: 'users' },
            { number: ambientalPrograms.length, label: 'Programas Ambientales', icon: 'leaf' },
            { number: '17', label: 'ODS Contribución', icon: 'target' },
            { number: '100%', label: 'Compromiso', icon: 'check' }
          ].map((stat, index) => (
            <div key={index} className="bg-white rounded-lg border border-gray-200 p-6 text-center">
              <div className="text-2xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="border-b border-gray-200">
            <nav className="flex">
              <button 
                onClick={() => setActiveTab('social')}
                className={`px-6 py-4 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === 'social' 
                    ? 'border-blue-600 text-blue-600' 
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  Social
                  <span className="ml-2 px-2 py-0.5 text-xs bg-gray-100 text-gray-600 rounded-full">
                    {socialPrograms.length}
                  </span>
                </div>
              </button>
              <button 
                onClick={() => setActiveTab('ambiental')}
                className={`px-6 py-4 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === 'ambiental' 
                    ? 'border-green-600 text-green-600' 
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                  Ambiental
                  <span className="ml-2 px-2 py-0.5 text-xs bg-gray-100 text-gray-600 rounded-full">
                    {ambientalPrograms.length}
                  </span>
                </div>
              </button>
            </nav>
          </div>

          {/* Programs Grid */}
          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentPrograms.map(program => (
                <a 
                  href={program.link} 
                  key={program.id} 
                  className="group block bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all duration-200"
                >
                  <div className="flex items-start">
                    <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center ${
                      activeTab === 'social' ? 'bg-blue-50 text-blue-600' : 'bg-green-50 text-green-600'
                    }`}>
                      {program.icon}
                    </div>
                    <div className="ml-4 flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {program.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        {program.description}
                      </p>
                      <div className="flex items-center text-sm font-medium text-blue-600 group-hover:text-blue-700">
                        Ver más
                        <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Company Commitment */}
        <div className="mt-12 bg-white rounded-lg border border-gray-200 p-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Nuestro Compromiso con la Sostenibilidad
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                En ElectroHuila trabajamos para garantizar que nuestras operaciones generen valor económico, 
                social y ambiental de manera responsable. Nuestros programas de sostenibilidad están orientados 
                a contribuir al desarrollo sostenible de la región.
              </p>
              <p>
                Nos hemos comprometido con los Objetivos de Desarrollo Sostenible (ODS) y trabajamos para 
                integrarlos en nuestra estrategia corporativa, especialmente en aquellos relacionados con 
                energía asequible y no contaminante, acción por el clima y reducción de las desigualdades.
              </p>
            </div>
          </div>
        </div>

        {/* ODS Section */}
        <div className="mt-12 bg-gray-900 rounded-lg p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Objetivos de Desarrollo Sostenible</h3>
            <p className="text-gray-300">
              Contribuyendo activamente a la Agenda 2030 para el Desarrollo Sostenible
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: '7', title: 'Energía Asequible y No Contaminante' },
              { number: '8', title: 'Trabajo Decente y Crecimiento Económico' },
              { number: '10', title: 'Reducción de Desigualdades' },
              { number: '13', title: 'Acción por el Clima' }
            ].map((ods, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-white text-gray-900 rounded-lg flex items-center justify-center mx-auto mb-3 font-bold text-lg">
                  {ods.number}
                </div>
                <div className="text-sm text-gray-300">{ods.title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}