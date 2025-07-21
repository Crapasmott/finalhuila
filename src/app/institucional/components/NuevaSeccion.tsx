import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const NuevaSeccion = () => {
  const [activeTab, setActiveTab] = useState('categoria1');
  const [expandedYear, setExpandedYear] = useState(null);
  
  const toggleYear = (year) => {
    if (expandedYear === year) {
      setExpandedYear(null);
    } else {
      setExpandedYear(year);
    }
  };
  
  // Datos de ejemplo para mostrar la estructura
  const datosCategoria1 = [
    {
      id: 1,
      titulo: 'Documento 1',
      descripcion: 'Descripción breve del documento 1',
      fecha: '15-04-2025',
      enlace: '/documentos/doc1.pdf',
      tamaño: '2.5 MB'
    },
    {
      id: 2,
      titulo: 'Documento 2',
      descripcion: 'Descripción breve del documento 2',
      fecha: '12-03-2025',
      enlace: '/documentos/doc2.pdf',
      tamaño: '1.8 MB'
    },
    {
      id: 3,
      titulo: 'Documento 3',
      descripcion: 'Descripción breve del documento 3',
      fecha: '28-02-2025',
      enlace: '/documentos/doc3.pdf',
      tamaño: '3.2 MB'
    }
  ];
  
  const datosCategoria2 = [
    {
      id: 1,
      titulo: 'Reporte 1',
      descripcion: 'Descripción breve del reporte 1',
      fecha: '20-04-2025',
      enlace: '/reportes/rep1.pdf',
      tamaño: '4.1 MB'
    },
    {
      id: 2,
      titulo: 'Reporte 2',
      descripcion: 'Descripción breve del reporte 2',
      fecha: '10-03-2025',
      enlace: '/reportes/rep2.pdf',
      tamaño: '2.9 MB'
    }
  ];
  
  const datosCategoria3 = [
    {
      id: 1,
      titulo: 'Circular 1',
      descripcion: 'Descripción breve de la circular 1',
      fecha: '22-04-2025',
      enlace: '/circulares/circ1.pdf',
      tamaño: '1.2 MB'
    },
    {
      id: 2,
      titulo: 'Circular 2',
      descripcion: 'Descripción breve de la circular 2',
      fecha: '18-03-2025',
      enlace: '/circulares/circ2.pdf',
      tamaño: '0.8 MB'
    },
    {
      id: 3,
      titulo: 'Circular 3',
      descripcion: 'Descripción breve de la circular 3',
      fecha: '05-02-2025',
      enlace: '/circulares/circ3.pdf',
      tamaño: '1.5 MB'
    }
  ];

  const yearsData = {
    2025: [
      { titulo: 'Documento Reciente 2025', fecha: '15-04-2025', tipo: 'PDF' },
      { titulo: 'Informe Anual 2025', fecha: '01-01-2025', tipo: 'PDF' }
    ],
    2024: [
      { titulo: 'Memoria Anual 2024', fecha: '20-12-2024', tipo: 'PDF' },
      { titulo: 'Estados Financieros 2024', fecha: '31-12-2024', tipo: 'PDF' },
      { titulo: 'Informe de Gestión 2024', fecha: '15-11-2024', tipo: 'PDF' }
    ],
    2023: [
      { titulo: 'Balances 2023', fecha: '31-12-2023', tipo: 'PDF' },
      { titulo: 'Auditoría 2023', fecha: '28-02-2023', tipo: 'PDF' }
    ],
    2022: [
      { titulo: 'Resultados 2022', fecha: '31-12-2022', tipo: 'PDF' }
    ]
  };

  const getActiveData = () => {
    switch(activeTab) {
      case 'categoria1':
        return datosCategoria1;
      case 'categoria2':
        return datosCategoria2;
      case 'categoria3':
        return datosCategoria3;
      default:
        return [];
    }
  };

  const getTabIcon = (tab) => {
    switch(tab) {
      case 'categoria1':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        );
      case 'categoria2':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        );
      case 'categoria3':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        );
      default:
        return null;
    }
  };

  const getTabCount = (tab) => {
    switch(tab) {
      case 'categoria1':
        return datosCategoria1.length;
      case 'categoria2':
        return datosCategoria2.length;
      case 'categoria3':
        return datosCategoria3.length;
      default:
        return 0;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header con gradiente premium */}
      <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="relative">
            {/* Elementos decorativos */}
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
            
            <h1 className="text-5xl font-bold mb-6 relative">
              Nueva <span className="text-purple-300">Sección</span>
            </h1>
            
            <div className="text-lg opacity-90 mb-4">
              Documentos y recursos organizados para tu consulta
            </div>
            
            {/* Breadcrumbs mejorados */}
            <nav className="flex items-center space-x-2 text-blue-100">
              <Link href="/" className="hover:text-white transition-colors flex items-center">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
                Inicio
              </Link>
              <span>•</span>
              <span className="text-purple-300 font-medium">Nueva Sección</span>
            </nav>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Título y descripción */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Documentos y Recursos
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Accede a todos los documentos organizados por categorías y años
          </p>
        </div>
        
        {/* Pestañas mejoradas */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
          {/* Header de pestañas */}
          <div className="border-b border-gray-200 bg-gray-50">
            <div className="flex flex-wrap">
              {[
                { id: 'categoria1', label: 'Documentos', color: 'blue' },
                { id: 'categoria2', label: 'Reportes', color: 'green' },
                { id: 'categoria3', label: 'Circulares', color: 'purple' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 relative px-6 py-4 font-medium text-sm transition-all duration-300 ${
                    activeTab === tab.id
                      ? `text-${tab.color}-600 bg-white border-b-2 border-${tab.color}-500`
                      : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <div className="flex items-center justify-center space-x-2">
                    <div className={activeTab === tab.id ? `text-${tab.color}-600` : 'text-gray-400'}>
                      {getTabIcon(tab.id)}
                    </div>
                    <span>{tab.label}</span>
                    <span className={`inline-flex items-center justify-center w-6 h-6 text-xs font-bold rounded-full ${
                      activeTab === tab.id 
                        ? `bg-${tab.color}-100 text-${tab.color}-600` 
                        : 'bg-gray-200 text-gray-600'
                    }`}>
                      {getTabCount(tab.id)}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
          
          {/* Contenido de pestañas */}
          <div className="p-8">
            <div className="grid gap-6">
              {getActiveData().map((item, index) => (
                <div 
                  key={item.id} 
                  className="group bg-gradient-to-r from-white to-gray-50 rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-start space-x-4">
                        {/* Icono PDF */}
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                            <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                        
                        {/* Información del documento */}
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                            {item.titulo}
                          </h3>
                          <p className="text-gray-600 mb-3 line-clamp-2">
                            {item.descripcion}
                          </p>
                          
                          {/* Metadatos */}
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <div className="flex items-center space-x-1">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                              <span>{item.fecha}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                              </svg>
                              <span>{item.tamaño}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Botones de acción */}
                    <div className="flex items-center space-x-3 ml-6">
                      <button className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        Ver
                      </button>
                      
                      <Link 
                        href={item.enlace}
                        className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-lg hover:from-green-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-md"
                      >
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        Descargar
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Estado vacío si no hay documentos */}
            {getActiveData().length === 0 && (
              <div className="text-center py-12">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No hay documentos disponibles</h3>
                <p className="text-gray-600">Los documentos aparecerán aquí cuando estén disponibles.</p>
              </div>
            )}
          </div>
        </div>
        
        {/* Acordeón de años mejorado */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 px-8 py-6 border-b border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Archivo por Años</h3>
            <p className="text-gray-600">Explora documentos organizados cronológicamente</p>
          </div>
          
          <div className="divide-y divide-gray-200">
            {Object.entries(yearsData).map(([year, documents]) => (
              <div key={year} className="group">
                <button 
                  onClick={() => toggleYear(year)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${
                      expandedYear === year 
                        ? 'bg-blue-500 text-white rotate-45' 
                        : 'bg-gray-100 text-gray-600 group-hover:bg-blue-100 group-hover:text-blue-600'
                    }`}>
                      <span className="text-xl">{expandedYear === year ? '−' : '+'}</span>
                    </div>
                    <div>
                      <span className="text-xl font-bold text-gray-900">{year}</span>
                      <div className="text-sm text-gray-500 mt-1">
                        {documents.length} documento{documents.length !== 1 ? 's' : ''} disponible{documents.length !== 1 ? 's' : ''}
                      </div>
                    </div>
                  </div>
                  
                  <div className={`transform transition-transform duration-300 ${
                    expandedYear === year ? 'rotate-90 text-blue-600' : 'text-gray-400'
                  }`}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </button>
                
                {expandedYear === year && (
                  <div className="px-8 pb-6 bg-gradient-to-r from-blue-50 to-indigo-50">
                    <div className="grid gap-4">
                      {documents.map((doc, index) => (
                        <div key={index} className="bg-white rounded-lg p-4 border border-blue-200 hover:shadow-md transition-shadow">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                                <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                                </svg>
                              </div>
                              <div>
                                <h4 className="font-medium text-gray-900">{doc.titulo}</h4>
                                <p className="text-sm text-gray-500">{doc.fecha} • {doc.tipo}</p>
                              </div>
                            </div>
                            
                            <button className="inline-flex items-center px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm">
                              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3" />
                              </svg>
                              Descargar
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Estadísticas finales */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-2xl p-8 text-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">
                {datosCategoria1.length + datosCategoria2.length + datosCategoria3.length}
              </div>
              <div className="text-blue-100">Documentos Totales</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">
                {Object.keys(yearsData).length}
              </div>
              <div className="text-blue-100">Años de Archivo</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">3</div>
              <div className="text-blue-100">Categorías Activas</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NuevaSeccion;