'use client';

import React from 'react';
import ComposicionAccionaria from './components/ComposicionAccionaria';
import TablaAccionistas from './components/TablaAccionistas';
import JuntaDirectiva from './components/JuntaDirectiva';
import MapaProcesos from './components/MapaProcesos';
import Organigrama from './components/Organigrama';
import EquipoDirectivo from './components/EquipoDirectivo';
import Comites from './components/Comites';
import InformacionFinanciera from './components/InformacionFinanciera';
import SectionTitle from './components/SectionTitle';

export default function GobiernoCorporativo() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header principal */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-8">
            {/* Breadcrumb */}
            <nav className="text-sm breadcrumbs mb-4">
              <ul className="flex space-x-2 text-gray-500">
                <li>
                  <a href="/" className="hover:text-blue-600 transition-colors">Inicio</a>
                </li>
                <li>/</li>
                <li className="text-gray-900">Gobierno Corporativo</li>
              </ul>
            </nav>
            
            {/* Título principal */}
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Gobierno <span className="text-blue-600">Corporativo</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Estructura organizacional, liderazgo y mecanismos de control que guían 
                las operaciones de ELECTROHUILA S.A. E.S.P.
              </p>
              
              {/* Línea decorativa */}
              <div className="mt-6 flex justify-center">
                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-500 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Sección: Composición Accionaria */}
        <section className="mb-16">
          <SectionTitle 
            title="Composición Accionaria" 
            subtitle="Distribución del capital social y participación de accionistas"
            variant="primary"
            size="xl"
          />
          <div className="space-y-8">
            <ComposicionAccionaria />
            <TablaAccionistas />
          </div>
        </section>

        {/* Sección: Junta Directiva */}
        <section className="mb-16">
          <SectionTitle 
            title="Nuestra Junta Directiva" 
            subtitle="Órgano de administración y dirección de la empresa"
            variant="secondary"
            size="xl"
          />
          <JuntaDirectiva />
        </section>

        {/* Sección: Procesos y Estructura */}
        <section className="mb-16">
          <SectionTitle 
            title="Arquitectura Organizacional" 
            subtitle="Procesos, estructura y organización empresarial"
            variant="accent"
            size="xl"
          />
          
          {/* Grid para Mapa de Procesos y Organigrama */}
          <div className="grid gap-8 lg:grid-cols-1">
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                Mapa de Procesos
              </h3>
              <MapaProcesos />
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <svg className="w-5 h-5 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Organigrama Institucional
              </h3>
              <Organigrama />
            </div>
          </div>
        </section>

        {/* Sección: Equipo Directivo */}
        <section className="mb-16">
          <SectionTitle 
            title="Equipo Directivo" 
            subtitle="Liderazgo ejecutivo y dirección estratégica"
            variant="primary"
            size="xl"
          />
          <EquipoDirectivo />
        </section>

        {/* Sección: Comités */}
        <section className="mb-16">
          <SectionTitle 
            title="Comités Corporativos" 
            subtitle="Órganos especializados de asesoría y control"
            variant="secondary"
            size="xl"
          />
          <Comites />
        </section>

        {/* Sección: Información Financiera */}
        <section className="mb-16">
          <SectionTitle 
            title="Información Financiera y de Control Interno" 
            subtitle="Transparencia financiera y sistemas de control"
            variant="accent"
            size="xl"
          />
          <InformacionFinanciera />
        </section>
      </div>
    </div>
  );
}