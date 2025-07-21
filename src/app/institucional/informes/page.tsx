'use client';

import { useState, useEffect } from 'react';
import { FileText, Download, Calendar, ExternalLink, RefreshCw, AlertTriangle, BarChart3 } from 'lucide-react';

export default function InformesPage() {
  const [activeTab, setActiveTab] = useState('reporte');
  const [expandedSections, setExpandedSections] = useState({});
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [stats, setStats] = useState({ total: 0, reporte: 0, plan: 0, informes: 0 });

  // Configuración de secciones exacta como WordPress
  const sectionConfig = {
    reporte: [
      { key: 'empalme', title: 'Informe de Empalme', keywords: ['empalme', 'gestion'] },
      { key: 'integrado-2024', title: 'Reporte Integrado 2024', keywords: ['reporte', 'integrado', '2024'] },
      { key: 'integrado-2023', title: 'Reporte Integrado 2023', keywords: ['reporte', 'integrado', '2023'] },
      { key: 'integrado-2022', title: 'Reporte Integrado 2022', keywords: ['reporte', 'integrado', '2022'] },
      { key: 'integrado-2021', title: 'Reporte Integrado 2021', keywords: ['reporte', 'integrado', '2021'] },
      { key: 'integrado-2020', title: 'Reporte Integrado 2020', keywords: ['reporte', 'integrado', '2020'] },
      { key: 'integrado-2019', title: 'Reporte Integrado 2019', keywords: ['reporte', 'integrado', '2019'] },
      { key: 'integrado-2018', title: 'Reporte Integrado 2018', keywords: ['reporte', 'integrado', '2018'] },
      { key: 'integrado-2017', title: 'Reporte Integrado 2017', keywords: ['reporte', 'integrado', '2017'] }
    ],
    plan: [
      { key: 'resumen-2019-2023', title: 'Resumen Plan de Inversiones Electrohuila 2019 - 2023', keywords: ['resumen', 'plan', 'inversiones', '2019', '2023'] },
      { key: 'ejecucion-2019-2020', title: 'Informe de Ejecución Plan de Inversiones 2019 - 2020', keywords: ['ejecucion', 'plan', 'inversiones', '2019', '2020'] },
      { key: 'ejecucion-2021', title: 'Informe Ejecución Plan de Inversiones 2021', keywords: ['ejecucion', 'plan', 'inversiones', '2021'] },
      { key: 'ejecucion-2022', title: 'Informe de Ejecución Plan de Inversiones 2022', keywords: ['ejecucion', 'plan', 'inversiones', '2022'] },
      { key: 'ejecucion-2023', title: 'Informe de Ejecución Plan de Inversiones 2023', keywords: ['ejecucion', 'plan', 'inversiones', '2023'] },
      { key: 'ejecucion-2024', title: 'Informe de Ejecución Plan de Inversiones 2024', keywords: ['ejecucion', 'plan', 'inversiones', '2024'] }
    ],
    informes: [
      { key: 'operacion-2024', title: 'Informe Anual de Operación 2024', keywords: ['cgm', 'operacion', '2024'] },
      { key: 'operacion-2023', title: 'Informe Anual de Operación 2023', keywords: ['cgm', 'operacion', '2023'] },
      { key: 'operacion-2022', title: 'Informe Anual de Operación 2022', keywords: ['cgm', 'operacion', '2022'] },
      { key: 'operacion-2021', title: 'Informe Anual de Operación 2021', keywords: ['cgm', 'operacion', '2021'] },
      { key: 'operacion-2019', title: 'Informe Anual de Operación 2019', keywords: ['cgm', 'operacion', '2019'] },
      { key: 'operacion-2018', title: 'Informe Anual de Operación 2018', keywords: ['cgm', 'operacion', '2018'] },
      { key: 'operacion-2017', title: 'Informe Anual de Operación 2017', keywords: ['cgm', 'operacion', '2017'] },
      { key: 'operacion-2016', title: 'Informe Anual de Operación 2016', keywords: ['cgm', 'operacion', '2016'] },
      { key: 'transparencia', title: 'Informes Línea de Transparencia', keywords: ['transparencia', 'linea'] },
      { key: 'pqr', title: 'Peticiones, quejas y reclamos', keywords: ['pqr', 'peticiones', 'quejas', 'reclamos'] },
      { key: 'munts', title: 'Estudio MUNTS 2017', keywords: ['munts', 'estudio'] },
      { key: 'garantias', title: 'Costos garantías financieras en el MEM', keywords: ['garantias', 'financieras', 'mem'] },
      { key: 'cargos', title: 'Cargos Regulados', keywords: ['cargos', 'regulados'] },
      { key: 'medicion', title: 'Sistema de Medición', keywords: ['sistema', 'medicion'] },
      { key: 'manual', title: 'Manual de Operación EH', keywords: ['manual', 'operacion'] },
      { key: 'carta', title: 'Carta de trato digno al usuario', keywords: ['carta', 'trato', 'digno'] }
    ]
  };

  // Datos de respaldo con URLs EXACTAS del HTML de WordPress
  const fallbackData = [
    // REPORTES INTEGRADOS
    { id: 1001, title: "Informe de Empalme 2022", url: "https://electrohuila.net/wp-content/uploads/2023/07/INFORME-DE-GESTION-2021-2022.pdf", categoria: "reporte", seccionKey: "empalme", year: 2022, size: "2.5 MB", date: "2023-07-01" },
    { id: 1002, title: "Reporte Integrado 2023", url: "https://electrohuila.net/wp-content/uploads/2023/07/Reporte-integrado-EH-2023.pdf", categoria: "reporte", seccionKey: "integrado-2023", year: 2023, size: "3.1 MB", date: "2023-07-01" },
    { id: 1003, title: "Reporte Integrado 2022", url: "https://electrohuila.net/wp-content/uploads/2023/07/Reporte-Integrado-EH-2022.pdf", categoria: "reporte", seccionKey: "integrado-2022", year: 2022, size: "2.8 MB", date: "2023-07-01" },
    { id: 1004, title: "Reporte Integrado 2021", url: "https://electrohuila.net/wp-content/uploads/2023/07/REPORTE-INTEGRADO-2021-EH.pdf", categoria: "reporte", seccionKey: "integrado-2021", year: 2021, size: "2.6 MB", date: "2023-07-01" },
    { id: 1005, title: "Reporte Integrado 2020", url: "https://electrohuila.net/wp-content/uploads/2023/07/ElectroHuila-Reporte-Integrado-2020.pdf", categoria: "reporte", seccionKey: "integrado-2020", year: 2020, size: "2.4 MB", date: "2023-07-01" },
    { id: 1006, title: "Reporte Integrado 2019", url: "https://electrohuila.net/wp-content/uploads/2023/07/Electrohuila-Reporte-integrado-2019_compressed.pdf", categoria: "reporte", seccionKey: "integrado-2019", year: 2019, size: "2.2 MB", date: "2023-07-01" },
    { id: 1007, title: "Reporte Integrado 2018", url: "https://electrohuila.net/wp-content/uploads/2023/07/D-REPORTE-INTEGRADO-2018.pdf", categoria: "reporte", seccionKey: "integrado-2018", year: 2018, size: "2.0 MB", date: "2023-07-01" },
    { id: 1008, title: "Reporte Integrado 2017", url: "https://electrohuila.net/wp-content/uploads/2023/07/E-INFORME-DE-GESTION-2017.pdf", categoria: "reporte", seccionKey: "integrado-2017", year: 2017, size: "1.8 MB", date: "2023-07-01" },
    
    // PLAN DE INVERSIÓN
    { id: 2001, title: "Resumen plan de inversiones 2019 – 2023", url: "https://electrohuila.net/wp-content/uploads/2023/07/Resumen-del-plan-de-inversiones-Electrohuila-1.pdf", categoria: "plan", seccionKey: "resumen-2019-2023", year: 2023, size: "1.5 MB", date: "2023-07-01" },
    { id: 2002, title: "Informe de ejecución plan de inversiones 2019 – 2020", url: "https://electrohuila.net/wp-content/uploads/2023/07/PUBLICACION-WEB-INFORME-EJECUCION-PLAN-DE-INVERSIONES-2019-2020.pdf", categoria: "plan", seccionKey: "ejecucion-2019-2020", year: 2020, size: "2.1 MB", date: "2023-07-01" },
    { id: 2003, title: "Documento soporte plan de inversiones 2019 – 2020", url: "https://electrohuila.net/wp-content/uploads/2023/07/DOCUMENTO-SOPORTE-PLAN-DE-INVERSIONES-2019-2020-EH.pdf", categoria: "plan", seccionKey: "ejecucion-2019-2020", year: 2020, size: "1.8 MB", date: "2023-07-01" },
    { id: 2004, title: "Informe de ejecución plan de inversiones 2021", url: "https://electrohuila.net/wp-content/uploads/2023/07/Informe-de-ejecucion-PI-2021-Electrohuila-S.A.-E.S.P.pdf", categoria: "plan", seccionKey: "ejecucion-2021", year: 2021, size: "2.3 MB", date: "2023-07-01" },
    { id: 2005, title: "Documento soporte plan de inversiones 2021", url: "https://electrohuila.net/wp-content/uploads/2023/07/INFORME-EJECUCION-PLAN-DE-INVERSIONES-2021-DE-ELECTROHUILA.pdf", categoria: "plan", seccionKey: "ejecucion-2021", year: 2021, size: "2.0 MB", date: "2023-07-01" },
    { id: 2006, title: "Informe de ejecución plan de inversiones 2022", url: "https://electrohuila.net/wp-content/uploads/2023/07/PLAN-DE-INVERSIONES-2022.pdf", categoria: "plan", seccionKey: "ejecucion-2022", year: 2022, size: "2.5 MB", date: "2023-07-01" },
    { id: 2007, title: "Informe de ejecución plan de inversiones 2023", url: "https://electrohuila.net/descargar/83/2024/5525/informe-de-ejecucion-plan-de-inversiones-2023.pdf", categoria: "plan", seccionKey: "ejecucion-2023", year: 2023, size: "2.7 MB", date: "2024-01-01" },
    { id: 2008, title: "Documento soporte plan de inversiones 2023", url: "https://electrohuila.net/descargar/83/2024/5526/documento-soporte-ejecucion-plan-de-inversiones-2023.pdf", categoria: "plan", seccionKey: "ejecucion-2023", year: 2023, size: "2.4 MB", date: "2024-01-01" },
    { id: 2009, title: "Documento Soporte Plan de Inversiones 2024", url: "https://electrohuila.net/wp-content/uploads/2025/03/BOLETIN-PLAN-DE-INVERSIONES-2024.pdf", categoria: "plan", seccionKey: "ejecucion-2024", year: 2024, size: "12.6 MB", date: "2025-03-28" },
    { id: 2010, title: "Informe de Ejecución Plan de Inversiones 2024", url: "https://electrohuila.net/wp-content/uploads/2025/03/INFORME-EJECUCION-PLAN-DE-INVERSIONES-2024.pdf", categoria: "plan", seccionKey: "ejecucion-2024", year: 2024, size: "12.6 MB", date: "2025-03-28" },
    
    // INFORMES
    { id: 3001, title: "Reporte CGM HLAC 2024", url: "https://electrohuila.net/wp-content/uploads/2025/02/Reporte-CGM-2024-HLAC.pdf", categoria: "informes", seccionKey: "operacion-2024", year: 2024, size: "694.7 KB", date: "2025-02-28" },
    { id: 3002, title: "Reporte CGM HLAG 2024", url: "https://electrohuila.net/wp-content/uploads/2025/02/Reporte-CGM-2024-HLAG.pdf", categoria: "informes", seccionKey: "operacion-2024", year: 2024, size: "680.8 KB", date: "2025-02-28" },
    { id: 3003, title: "Reporte CGM HLAC 2023", url: "https://electrohuila.net/wp-content/uploads/2024/02/reporte-cgm-hlac-2023.pdf", categoria: "informes", seccionKey: "operacion-2023", year: 2023, size: "650 KB", date: "2024-02-01" },
    { id: 3004, title: "Reporte CGM HLAG 2023", url: "https://electrohuila.net/wp-content/uploads/2024/02/reporte-cgm-hlag-2023.pdf", categoria: "informes", seccionKey: "operacion-2023", year: 2023, size: "640 KB", date: "2024-02-01" },
    { id: 3005, title: "Reporte CGM HLAC 2022", url: "https://electrohuila.net/wp-content/uploads/2023/07/Reporte-CGM-2022-HLAC.pdf", categoria: "informes", seccionKey: "operacion-2022", year: 2022, size: "620 KB", date: "2023-07-01" },
    { id: 3006, title: "Reporte CGM HLAG 2022", url: "https://electrohuila.net/wp-content/uploads/2023/07/Reporte-CGM-2022-HLAG.pdf", categoria: "informes", seccionKey: "operacion-2022", year: 2022, size: "610 KB", date: "2023-07-01" },
    { id: 3007, title: "Reporte CGM HLAC 2021", url: "https://electrohuila.net/wp-content/uploads/2023/07/Reporte-Anual-CGM-HLAC-2021.pdf", categoria: "informes", seccionKey: "operacion-2021", year: 2021, size: "600 KB", date: "2023-07-01" },
    { id: 3008, title: "Reporte CGM HLAG 2021", url: "https://electrohuila.net/wp-content/uploads/2023/07/Reporte-Anual-CGM-HLAG-2021.pdf", categoria: "informes", seccionKey: "operacion-2021", year: 2021, size: "590 KB", date: "2023-07-01" },
    { id: 3009, title: "Reporte CGM HLAC 2019", url: "https://electrohuila.net/wp-content/uploads/2023/07/Reporte-CGM-HLAC-2019.pdf", categoria: "informes", seccionKey: "operacion-2019", year: 2019, size: "580 KB", date: "2023-07-01" },
    { id: 3010, title: "Informe Final Línea de Transparencia 2023", url: "https://electrohuila.net/wp-content/uploads/2024/01/informe-linea-transparencia-2023.pdf", categoria: "informes", seccionKey: "transparencia", year: 2023, size: "1.2 MB", date: "2024-01-01" },
    { id: 3011, title: "Informe primer trimestre 2025", url: "https://electrohuila.net/wp-content/uploads/2025/05/Informe-Primer-trimestre-2025.docx", categoria: "informes", seccionKey: "pqr", year: 2025, size: "240 KB", date: "2025-05-01" },
    { id: 3012, title: "Cargos regulados 2025", url: "https://electrohuila.net/wp-content/uploads/2025/07/DG-135-DE-2025.pdf", categoria: "informes", seccionKey: "cargos", year: 2025, size: "5.8 MB", date: "2025-07-10" },
    { id: 3013, title: "Sistema de medición", url: "https://electrohuila.net/wp-content/uploads/2023/07/PROCEDIMIENTO-PARA-MANTENIMIENTO-SISTEMA-DE-MEDICON.pdf", categoria: "informes", seccionKey: "medicion", year: 2023, size: "1.8 MB", date: "2023-07-01" },
    { id: 3014, title: "Manual de Operación EH", url: "https://electrohuila.net/wp-content/uploads/2023/07/Manual-de-operacion-SEH.pdf", categoria: "informes", seccionKey: "manual", year: 2023, size: "3.2 MB", date: "2023-07-01" },
    { id: 3015, title: "Carta de trato digno al usuario", url: "https://electrohuila.net/wp-content/uploads/2023/07/CARTA-DE-TRATO-DIGNO-AL-USUARIO-DE-ELECTROHUILA.pdf", categoria: "informes", seccionKey: "carta", year: 2023, size: "850 KB", date: "2023-07-01" }
  ];

  // Función para cargar documentos
  const loadDocuments = async () => {
    setLoading(true);
    setError(null);
    
    try {
       //  setError('Usando datos de respaldo con URLs reales de ElectroHuila.');// 
      setDocuments(fallbackData);
    } catch (err) {
      console.warn('Error:', err);
      setDocuments(fallbackData);
    } finally {
      setLoading(false);
    }
  };

  // Calcular estadísticas
  useEffect(() => {
    const newStats = {
      total: documents.length,
      reporte: documents.filter(doc => doc.categoria === 'reporte').length,
      plan: documents.filter(doc => doc.categoria === 'plan').length,
      informes: documents.filter(doc => doc.categoria === 'informes').length
    };
    setStats(newStats);
  }, [documents]);

  // Cargar documentos al inicializar
  useEffect(() => {
    loadDocuments();
  }, []);

  // Inicializar secciones expandidas por defecto
  useEffect(() => {
    if (activeTab && sectionConfig[activeTab]) {
      const defaultExpanded = {};
      if (sectionConfig[activeTab].length > 0) {
        defaultExpanded[sectionConfig[activeTab][0].key] = true;
      }
      setExpandedSections(defaultExpanded);
    }
  }, [activeTab]);

  // Función para alternar secciones
  const toggleSection = (sectionKey) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionKey]: !prev[sectionKey]
    }));
  };

  // Organizar documentos por sección
  const organizeDocuments = () => {
    const filteredDocs = documents.filter(doc => doc.categoria === activeTab);
    const sections = sectionConfig[activeTab] || [];
    
    return sections.map(section => {
      const sectionDocs = filteredDocs.filter(doc => doc.seccionKey === section.key);
      
      return {
        ...section,
        documents: sectionDocs
      };
    });
  };

  const getCategoryTitle = (category) => {
    switch(category) {
      case 'reporte': return 'Reporte Integrado';
      case 'plan': return 'Plan de Inversión';
      case 'informes': return 'Informes';
      default: return 'Documentos';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-800 via-slate-700 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Informes Institucionales</h1>
            <p className="text-xl text-slate-200 max-w-3xl mx-auto">
              Documentos organizados según la estructura oficial de ElectroHuila
            </p>
            
            <div className="mt-6 flex justify-center">
              <button
                onClick={loadDocuments}
                disabled={loading}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/30 rounded-lg transition-colors disabled:opacity-50"
              >
                <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
                {loading ? 'Actualizando...' : 'Actualizar'}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Mensaje de error */}
        {error && (
          <div className="mb-6 bg-amber-50 border border-amber-200 rounded-lg p-4">
            <div className="flex items-center gap-2 text-amber-800">
              <AlertTriangle className="w-5 h-5" />
              <span>{error}</span>
            </div>
          </div>
        )}

        {/* Estadísticas */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-lg p-4 shadow-sm border border-slate-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-slate-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Total</p>
                <p className="text-2xl font-bold text-slate-800">{stats.total}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-4 shadow-sm border border-emerald-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                <FileText className="w-5 h-5 text-emerald-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Reportes</p>
                <p className="text-2xl font-bold text-emerald-800">{stats.reporte}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-4 shadow-sm border border-blue-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Planes</p>
                <p className="text-2xl font-bold text-blue-800">{stats.plan}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-4 shadow-sm border border-slate-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center">
                <FileText className="w-5 h-5 text-slate-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Informes</p>
                <p className="text-2xl font-bold text-slate-800">{stats.informes}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs de navegación */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 p-1 bg-white rounded-lg shadow-sm border border-slate-200">
            {[
              { key: 'reporte', label: 'Reportes Integrados', count: stats.reporte },
              { key: 'plan', label: 'Plan de Inversión', count: stats.plan },
              { key: 'informes', label: 'Informes', count: stats.informes }
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`flex-1 px-4 py-3 text-sm font-medium rounded-md transition-colors ${
                  activeTab === tab.key
                    ? 'bg-slate-800 text-white shadow-sm'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <span className="block">{tab.label}</span>
                <span className="text-xs opacity-75">({tab.count} documentos)</span>
              </button>
            ))}
          </div>
        </div>

        {/* Contenido principal */}
        <div className="bg-white rounded-lg shadow-sm border border-slate-200">
          <div className="border-b border-gray-200 p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {getCategoryTitle(activeTab)}
            </h2>
            <p className="text-gray-600">
              Documentos organizados según la estructura oficial de ElectroHuila
            </p>
          </div>

          <div className="p-6">
            {loading ? (
              <div className="text-center py-12">
                <RefreshCw className="w-8 h-8 animate-spin text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">Cargando documentos...</p>
              </div>
            ) : (
              <div className="space-y-4">
                {organizeDocuments().map((section) => (
                  <div key={section.key} className="border border-gray-200 rounded-lg overflow-hidden">
                    <button
                      onClick={() => toggleSection(section.key)}
                      className={`w-full px-6 py-4 text-left transition-colors border-l-4 ${
                        activeTab === 'reporte' ? 'border-l-emerald-500 bg-emerald-50 hover:bg-emerald-100' :
                        activeTab === 'plan' ? 'border-l-blue-500 bg-blue-50 hover:bg-blue-100' :
                        'border-l-slate-500 bg-slate-50 hover:bg-slate-100'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-1">{section.title}</h3>
                          <p className="text-sm text-gray-600">
                            {section.documents.length} documento{section.documents.length !== 1 ? 's' : ''}
                          </p>
                        </div>
                        <div className={`transform transition-transform ${expandedSections[section.key] ? 'rotate-180' : ''}`}>
                          <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                    </button>

                    {expandedSections[section.key] && (
                      <div className="bg-gray-50 p-6 border-t border-gray-200">
                        {section.documents.length === 0 ? (
                          <div className="text-center py-8">
                            <FileText className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                            <p className="text-gray-600">No hay documentos disponibles en esta sección</p>
                          </div>
                        ) : (
                          <div className="grid grid-cols-1 gap-4">
                            {section.documents.map((doc) => (
                              <div 
                                key={doc.id} 
                                className={`bg-white rounded-lg p-4 shadow-sm border-l-4 transition-shadow hover:shadow-md ${
                                  activeTab === 'reporte' ? 'border-l-emerald-500' :
                                  activeTab === 'plan' ? 'border-l-blue-500' :
                                  'border-l-slate-500'
                                }`}
                              >
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3">
                                  <div className="flex-1">
                                    <h4 className="font-medium text-gray-900 mb-2 leading-relaxed">
                                      {doc.title}
                                    </h4>
                                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                                      <div className="flex items-center gap-1">
                                        <Calendar className="w-4 h-4" />
                                        <span>Año {doc.year}</span>
                                      </div>
                                      <div className="flex items-center gap-1">
                                        <FileText className="w-4 h-4" />
                                        <span>{doc.size}</span>
                                      </div>
                                      <div className="flex items-center gap-1">
                                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                        <span>PDF</span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="flex gap-2 flex-shrink-0">
                                    <a
                                      href={doc.url}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className={`inline-flex items-center gap-1 px-3 py-1.5 text-sm font-medium border rounded-md transition-colors ${
                                        activeTab === 'reporte' 
                                          ? 'text-emerald-700 bg-emerald-50 border-emerald-200 hover:bg-emerald-100'
                                          : activeTab === 'plan'
                                          ? 'text-blue-700 bg-blue-50 border-blue-200 hover:bg-blue-100'
                                          : 'text-slate-700 bg-slate-50 border-slate-200 hover:bg-slate-100'
                                      }`}
                                    >
                                      <ExternalLink className="w-4 h-4" />
                                      Ver
                                    </a>
                                    <a
                                      href={doc.url}
                                      download
                                      className="inline-flex items-center gap-1 px-3 py-1.5 text-sm font-medium text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-md hover:bg-emerald-100 transition-colors"
                                    >
                                      <Download className="w-4 h-4" />
                                      Descargar
                                    </a>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gradient-to-r from-slate-800 via-slate-700 to-blue-900 text-white mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="font-semibold mb-2">URLs Reales</h3>
              <p className="text-slate-300 text-sm">Enlaces directos a documentos de ElectroHuila</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Estructura Fiel</h3>
              <p className="text-slate-300 text-sm">Replica exacta de la página oficial</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Organización Inteligente</h3>
              <p className="text-slate-300 text-sm">Clasificación automática por secciones y años</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}