"use client";

import React, { useState, useEffect } from 'react';
import { ChevronRight, Folder, FileText, Download, Eye, ArrowLeft, Calendar, File, Search, Filter } from 'lucide-react';

const TarifasElectrohuila = () => {
    const [currentView, setCurrentView] = useState('main');
    const [selectedYear, setSelectedYear] = useState(null);
    const [files, setFiles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterType, setFilterType] = useState('all');
    const [showModal, setShowModal] = useState(false);
    const [modalFile, setModalFile] = useState(null);

    const years = Array.from({ length: 18 }, (_, i) => 2025 - i);

    const getMockFiles = (year) => {
        const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
            'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

        const mockFiles = [];

        // Generar 12 tarifas + 12 COT = 24 archivos
        months.forEach((month, index) => {
            // Tarifa del mes
            mockFiles.push({
                id: `tarifa_${month.toLowerCase()}_${year}`,
                name: `Tarifas ${month} ${year}`,
                type: 'pdf',
                size: 'N/A',
                hits: Math.floor(Math.random() * 100),
                downloadUrl: null,
                previewUrl: null,
                available: false,
                category: 'tarifa'
            });

            // COT del mes
            mockFiles.push({
                id: `cot_${month.toLowerCase()}_${year}`,
                name: `${month} COT`,
                type: 'pdf',
                size: 'N/A',
                hits: Math.floor(Math.random() * 50),
                downloadUrl: null,
                previewUrl: null,
                available: false,
                category: 'cot'
            });
        });

        return mockFiles;
    };

    const fetchFiles = async (year) => {
        setLoading(true);

        try {
            if (year === 2025 || year === 2024 || year === 2023 || year === 2022 || year === 2021 || year === 2020 || year === 2019 || year === 2018 || year === 2017 || year === 2016 || year === 2015 || year === 2014 || year === 2013 || year === 2012 || year === 2011 || year === 2010 || year === 2009 || year === 2008) {
                // Para todos los años con APIs reales
                const response = await fetch(`https://electrohuila.net/wp-json/electrohuila/v1/tarifas-simple/${year}`);

                if (response.ok) {
                    const apiData = await response.json();

                    if (apiData.success && apiData.data) {
                        console.log('✅ API Response:', apiData);

                        // Transformar datos de la API al formato del componente
                        const apiFiles = apiData.data.map(item => ({
                            id: item.id,
                            name: `${item.tipo === 'Tarifa' ? 'Tarifas' : item.tipo === 'Modificación' ? 'Modificación' : ''} ${item.mes} ${item.year}${item.tipo === 'COT' ? ' COT' : ''}`,
                            type: item.formato.toLowerCase(),
                            size: item.tamaño,
                            hits: Math.floor(Math.random() * 1000),
                            downloadUrl: item.url,
                            previewUrl: item.url,
                            available: item.disponible,
                            category: item.tipo === 'COT' ? 'cot' : 'tarifa',
                            originalData: item
                        }));

                        // Para años con datos especiales (solo archivos reales, sin placeholders)
                        if (year === 2023 || year === 2020 || year === 2019 || year === 2018 || year === 2017 || year === 2016 || year === 2015 || year === 2014 || year === 2013 || year === 2012 || year === 2011 || year === 2010 || year === 2009 || year === 2008) {
                            const availableFiles = apiFiles.filter(file => 
                                file.available && 
                                file.downloadUrl && 
                                file.downloadUrl !== '' &&
                                file.size !== 'N/A'
                            );
                            console.log(`🎯 Archivos REALES de ${year} a mostrar: ${availableFiles.length}`);
                            setFiles(availableFiles);
                        } else {
                            // Para 2025, 2024, 2022, 2021: Generar todas las 24 tarjetas (12 meses × 2 tipos)
                            const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
                                'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

                            const allFiles = [];

                            months.forEach(month => {
                                // Buscar tarifa del mes en los datos de la API
                                const tarifaData = apiFiles.find(f =>
                                    f.originalData.mes === month && f.originalData.tipo === 'Tarifa'
                                );

                                // Buscar COT del mes en los datos de la API
                                const cotData = apiFiles.find(f =>
                                    f.originalData.mes === month && f.originalData.tipo === 'COT'
                                );

                                // Agregar tarifa (real o placeholder)
                                allFiles.push(tarifaData || {
                                    id: `tarifa_${month.toLowerCase()}_${year}`,
                                    name: `Tarifas ${month} ${year}`,
                                    type: 'pdf',
                                    size: 'N/A',
                                    hits: 0,
                                    downloadUrl: null,
                                    previewUrl: null,
                                    available: false,
                                    category: 'tarifa'
                                });

                                // Agregar COT (real o placeholder)
                                allFiles.push(cotData || {
                                    id: `cot_${month.toLowerCase()}_${year}`,
                                    name: `${month} COT`,
                                    type: 'pdf',
                                    size: 'N/A',
                                    hits: 0,
                                    downloadUrl: null,
                                    previewUrl: null,
                                    available: false,
                                    category: 'cot'
                                });
                            });

                            console.log(`📊 Total archivos generados: ${allFiles.length}`);
                            console.log(`✅ Archivos disponibles: ${allFiles.filter(f => f.available).length}`);
                            console.log(`⚪ Placeholders: ${allFiles.filter(f => !f.available).length}`);

                            // SOLO mostrar archivos disponibles (quitar placeholders)
                            const availableFiles = allFiles.filter(file =>
                                file.available &&
                                file.downloadUrl &&
                                file.downloadUrl !== '' &&
                                file.size !== 'N/A'
                            );
                            console.log(`🎯 Archivos REALES a mostrar: ${availableFiles.length}`);
                            console.log('📋 Archivos filtrados:', availableFiles);

                            setFiles(availableFiles);
                        }
                    } else {
                        console.error('❌ Estructura de respuesta inválida:', apiData);
                        setFiles(getMockFiles(year));
                    }
                } else {
                    console.error('❌ Error HTTP:', response.status);
                    setFiles(getMockFiles(year));
                }
            } else {
                // Para otros años usar mock data (SOLO disponibles si quieres)
                console.log(`📝 Usando mock data para año ${year}`);
                // Opción 1: No mostrar nada para otros años
                setFiles([]);

                // Opción 2: Si quieres mostrar placeholders para otros años, descomenta la línea siguiente:
                // setFiles(getMockFiles(year).filter(file => file.available)); // Solo disponibles
            }
        } catch (error) {
            console.error('❌ Error conectando con API:', error);
            setFiles(getMockFiles(year));
        }

        setLoading(false);
    };

    const handleYearClick = (year) => {
        setSelectedYear(year);
        setCurrentView('year');
        fetchFiles(year);
    };

    const handleBackToMain = () => {
        setCurrentView('main');
        setSelectedYear(null);
        setFiles([]);
        setSearchTerm('');
        setFilterType('all');
    };

    const handleDownload = (file) => {
        if (file.available && file.downloadUrl) {
            console.log('🔽 Descargando:', file.downloadUrl);
            window.open(file.downloadUrl, '_blank');
        } else {
            console.log('❌ Archivo no disponible:', file.name);
            alert('Este archivo no está disponible aún.');
        }
    };

    const handlePreview = (file) => {
        if (file.available && file.previewUrl) {
            console.log('👁️ Vista previa:', file.previewUrl);
            setModalFile(file);
            setShowModal(true);
        } else {
            console.log('❌ Vista previa no disponible:', file.name);
            alert('Vista previa no disponible para este archivo.');
        }
    };

    const closeModal = () => {
        setShowModal(false);
        setModalFile(null);
    };

    const filteredFiles = files.filter(file => {
        const matchesSearch = file.name?.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesFilter = filterType === 'all' || file.category === filterType;
        return matchesSearch && matchesFilter;
    });

    // Modal Component para vista previa
    const PreviewModal = () => {
        if (!showModal || !modalFile) return null;

        return (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
                <div className="bg-white rounded-lg shadow-xl max-w-6xl w-full h-[90vh] flex flex-col">
                    {/* Header del modal */}
                    <div className="flex items-center justify-between p-6 border-b border-gray-200">
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                                <FileText className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900">{modalFile.name}</h3>
                                <div className="flex items-center space-x-2 text-sm text-gray-500">
                                    <span>{modalFile.size}</span>
                                    <span>•</span>
                                    <span className={`px-2 py-1 rounded text-xs font-medium ${modalFile.category === 'cot' ? 'bg-purple-50 text-purple-700' : 'bg-blue-50 text-blue-700'
                                        }`}>
                                        {modalFile.category === 'cot' ? 'COT' : 'Tarifa'}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2">
                            <button
                                onClick={() => handleDownload(modalFile)}
                                className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
                            >
                                <Download className="w-4 h-4 mr-2" />
                                Descargar
                            </button>
                            <button
                                onClick={closeModal}
                                className="flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-all"
                            >
                                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                                Cerrar
                            </button>
                        </div>
                    </div>

                    {/* Contenido del modal */}
                    <div className="flex-1 p-6">
                        <div className="w-full h-full bg-gray-100 rounded-lg overflow-hidden relative">
                            {modalFile.type === 'pdf' ? (
                                <>
                                    {/* Opción 1: Google Docs Viewer */}
                                    <iframe
                                        src={`https://docs.google.com/viewer?url=${encodeURIComponent(modalFile.previewUrl)}&embedded=true`}
                                        className="w-full h-full border-0"
                                        title={`Vista previa de ${modalFile.name}`}
                                        onLoad={() => console.log('📄 PDF cargado en Google Docs Viewer')}
                                        onError={(e) => {
                                            console.error('❌ Error con Google Docs Viewer:', e);
                                            // Fallback: intentar con iframe directo
                                            e.target.src = modalFile.previewUrl;
                                        }}
                                    />

                                    {/* Mensaje de ayuda superpuesto */}
                                    <div className="absolute bottom-4 left-4 right-4 z-10">
                                        <div className="bg-white/90 backdrop-blur border border-gray-200 rounded-lg p-3 shadow-lg">
                                            <div className="flex items-center justify-between text-sm">
                                                <div className="flex items-center space-x-2">
                                                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                                                    <span className="text-gray-700">Vista previa disponible</span>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <button
                                                        onClick={() => window.open(modalFile.previewUrl, '_blank')}
                                                        className="text-blue-600 hover:text-blue-800 text-xs underline"
                                                    >
                                                        Abrir en nueva pestaña
                                                    </button>
                                                    <span className="text-gray-300">|</span>
                                                    <button
                                                        onClick={() => handleDownload(modalFile)}
                                                        className="text-blue-600 hover:text-blue-800 text-xs underline"
                                                    >
                                                        Descargar
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            ) : modalFile.type === 'docx' ? (
                                <>
                                    <iframe
                                        src={`https://docs.google.com/viewer?url=${encodeURIComponent(modalFile.previewUrl)}&embedded=true`}
                                        className="w-full h-full border-0"
                                        title={`Vista previa de ${modalFile.name}`}
                                    />
                                    <div className="absolute bottom-4 left-4 right-4 z-10">
                                        <div className="bg-white/90 backdrop-blur border border-gray-200 rounded-lg p-3 shadow-lg">
                                            <div className="flex items-center justify-between text-sm">
                                                <span className="text-gray-700">📄 Documento DOCX</span>
                                                <button
                                                    onClick={() => handleDownload(modalFile)}
                                                    className="text-blue-600 hover:text-blue-800 underline"
                                                >
                                                    Descargar
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <div className="flex items-center justify-center h-full">
                                    <div className="text-center">
                                        <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                                        <h3 className="text-lg font-medium text-gray-900 mb-2">Vista previa no disponible</h3>
                                        <p className="text-gray-600 mb-4">
                                            Este tipo de archivo ({modalFile.type.toUpperCase()}) no se puede previsualizar en el navegador.
                                        </p>
                                        <button
                                            onClick={() => handleDownload(modalFile)}
                                            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
                                        >
                                            <Download className="w-4 h-4 mr-2 inline" />
                                            Descargar archivo
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    const MainView = () => (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                                <FileText className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <h1 className="text-2xl font-semibold text-gray-900">
                                    Tarifas Electrohuila
                                </h1>
                                <div className="flex items-center text-sm text-gray-600">
                                    <span className="text-blue-600 hover:text-blue-700 cursor-pointer transition-colors">Inicio</span>
                                    <ChevronRight className="w-3 h-3 mx-2" />
                                    <span>Tarifas</span>
                                </div>
                            </div>
                        </div>
                        <div className="hidden md:flex items-center space-x-4">
                            <div className="text-sm text-gray-600">
                                {years.length} años disponibles
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contenido principal */}
            <div className="max-w-7xl mx-auto px-6 py-12">
                {/* Hero section */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium mb-6">
                        <Calendar className="w-4 h-4 mr-2" />
                        Tarifas Clientes Regulados
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Consulta histórico de
                        <span className="text-blue-600"> tarifas</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Accede a las tarifas de energía eléctrica desde 2008 hasta la actualidad
                    </p>
                </div>

                {/* Grid de años */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {years.map((year, index) => {
                        const isCurrent = year === 2025;
                        const hasRealData = year === 2025 || year === 2024 || year === 2023 || year === 2022 || year === 2021 || year === 2020 || year === 2019 || year === 2018 || year === 2017 || year === 2016 || year === 2015 || year === 2014 || year === 2013 || year === 2012 || year === 2011 || year === 2010 || year === 2009 || year === 2008;

                        return (
                            <button
                                key={year}
                                onClick={() => handleYearClick(year)}
                                className={`group relative overflow-hidden rounded-lg p-6 transition-all duration-200 hover:shadow-lg ${isCurrent
                                        ? 'bg-blue-600 text-white shadow-md'
                                        : 'bg-white text-gray-700 border border-gray-200 hover:border-blue-300 hover:bg-blue-50'
                                    }`}
                            >
                                {/* Contenido */}
                                <div className="flex flex-col items-center space-y-3">
                                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors ${isCurrent ? 'bg-white/20' : 'bg-gray-100 group-hover:bg-blue-100'
                                        }`}>
                                        <Folder className={`w-6 h-6 ${isCurrent ? 'text-white' : 'text-gray-600 group-hover:text-blue-600'
                                            }`} />
                                    </div>

                                    <div className="text-center">
                                        <div className="text-lg font-semibold">{year}</div>
                                        {isCurrent && (
                                            <div className="text-xs bg-white/20 px-2 py-1 rounded mt-1">
                                                Actual
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Indicador de disponibilidad */}
                                <div className={`absolute top-3 right-3 w-2 h-2 rounded-full ${hasRealData ? 'bg-green-400' : 'bg-gray-300'
                                    }`} />
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    );

    const YearView = () => {
        return (
            <div className="min-h-screen bg-gray-50">
                {/* Header con navegación */}
                <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
                    <div className="max-w-7xl mx-auto px-6 py-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                                <button
                                    onClick={handleBackToMain}
                                    className="flex items-center px-4 py-2 text-gray-600 hover:text-blue-600 transition-colors rounded-lg hover:bg-blue-50"
                                >
                                    <ArrowLeft className="w-4 h-4 mr-2" />
                                    Volver
                                </button>
                                <div className="h-6 w-px bg-gray-300" />
                                <div className="flex items-center text-sm text-gray-600">
                                    <span className="text-blue-600">Tarifas</span>
                                    <ChevronRight className="w-3 h-3 mx-2" />
                                    <span className="font-medium">{selectedYear}</span>
                                </div>
                            </div>

                            <div className="flex items-center space-x-3">
                                <div className={`px-3 py-1 rounded-lg text-xs font-medium ${files.length > 0
                                        ? 'bg-green-50 text-green-700'
                                        : 'bg-gray-100 text-gray-600'
                                    }`}>
                                    {files.length > 0 ? `${files.length} disponibles` : 'Sin documentos'}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-6 py-8">
                    {/* Header del año */}
                    <div className="mb-8">
                        <div className="flex items-center space-x-4 mb-4">
                            <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center">
                                <Calendar className="w-8 h-8 text-white" />
                            </div>
                            <div>
                                <h1 className="text-3xl font-bold text-gray-900">Tarifas {selectedYear}</h1>
                                <p className="text-gray-600">
                                    {(selectedYear === 2025 || selectedYear === 2024 || selectedYear === 2023 || selectedYear === 2022 || selectedYear === 2021 || selectedYear === 2020 || selectedYear === 2019 || selectedYear === 2018 || selectedYear === 2017 || selectedYear === 2016 || selectedYear === 2015 || selectedYear === 2014 || selectedYear === 2013 || selectedYear === 2012 || selectedYear === 2011 || selectedYear === 2010 || selectedYear === 2009 || selectedYear === 2008)
                                        ? `${files.length} documentos disponibles`
                                        : files.length > 0
                                            ? `${files.length} documentos disponibles`
                                            : 'No hay documentos disponibles para este año'
                                    }
                                </p>
                            </div>
                        </div>

                        {/* Barra de búsqueda y filtros */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <div className="relative flex-1">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                <input
                                    type="text"
                                    placeholder="Buscar documentos..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                                />
                            </div>
                            <select
                                value={filterType}
                                onChange={(e) => setFilterType(e.target.value)}
                                className="px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                            >
                                <option value="all">Todos los tipos</option>
                                <option value="tarifa">Solo Tarifas</option>
                                <option value="cot">Solo COT</option>
                            </select>
                        </div>
                    </div>

                    {/* Loading state */}
                    {loading && (
                        <div className="flex justify-center items-center py-20">
                            <div className="relative">
                                <div className="w-12 h-12 border-4 border-gray-200 rounded-full"></div>
                                <div className="absolute top-0 left-0 w-12 h-12 border-4 border-blue-500 rounded-full border-t-transparent animate-spin"></div>
                            </div>
                        </div>
                    )}

                    {/* Grid de archivos */}
                    {!loading && files.length > 0 && (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredFiles.map((file, index) => (
                                <div
                                    key={file.id}
                                    className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-all duration-200 hover:border-blue-300"
                                >
                                    {/* Header del archivo */}
                                    <div className="flex items-start space-x-4 mb-4">
                                        <div className="w-14 h-14 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <FileText className="w-7 h-7 text-white" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h3 className="font-semibold text-gray-900 mb-1 leading-tight">
                                                {file.name}
                                            </h3>
                                            <div className="flex items-center space-x-3 text-sm text-gray-500">
                                                <span>{file.size}</span>
                                                {file.hits > 0 && (
                                                    <>
                                                        <span>•</span>
                                                        <span>{file.hits} hits</span>
                                                    </>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Tipo de documento */}
                                    <div className="mb-4">
                                        <span className={`inline-flex px-3 py-1 rounded-lg text-xs font-medium ${file.category === 'cot'
                                                ? 'bg-purple-50 text-purple-700'
                                                : 'bg-blue-50 text-blue-700'
                                            }`}>
                                            {file.category === 'cot' ? 'COT' : 'Tarifa'}
                                        </span>
                                    </div>

                                    {/* Botones de acción */}
                                    <div className="flex space-x-3">
                                        <button
                                            onClick={() => handleDownload(file)}
                                            className="flex-1 flex items-center justify-center px-4 py-3 rounded-lg font-medium bg-blue-600 hover:bg-blue-700 text-white cursor-pointer transform hover:scale-105 transition-all"
                                        >
                                            <Download className="w-4 h-4 mr-2" />
                                            Descargar
                                        </button>

                                        <button
                                            onClick={() => handlePreview(file)}
                                            className="px-4 py-3 rounded-lg border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 cursor-pointer transform hover:scale-105 transition-all"
                                        >
                                            <Eye className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Mensaje cuando no hay archivos */}
                    {!loading && files.length === 0 && (
                        <div className="text-center py-12">
                            <div className="inline-flex flex-col items-center p-8 bg-white rounded-lg border border-gray-200 max-w-md mx-auto">
                                <div className="w-16 h-16 bg-gray-50 rounded-lg flex items-center justify-center mb-4">
                                    <Calendar className="w-8 h-8 text-gray-400" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                    Sin documentos disponibles
                                </h3>
                                <p className="text-gray-600 text-center leading-relaxed mb-4">
                                    {(selectedYear === 2025 || selectedYear === 2024 || selectedYear === 2023 || selectedYear === 2022 || selectedYear === 2021 || selectedYear === 2020 || selectedYear === 2019 || selectedYear === 2018 || selectedYear === 2017 || selectedYear === 2016 || selectedYear === 2015 || selectedYear === 2014 || selectedYear === 2013 || selectedYear === 2012 || selectedYear === 2011 || selectedYear === 2010 || selectedYear === 2009 || selectedYear === 2008)
                                        ? 'Los documentos se están cargando...'
                                        : `No hay documentos disponibles para el año ${selectedYear} aún.`
                                    }
                                </p>
                                {(selectedYear !== 2025 && selectedYear !== 2024 && selectedYear !== 2023 && selectedYear !== 2022 && selectedYear !== 2021 && selectedYear !== 2020 && selectedYear !== 2019 && selectedYear !== 2018 && selectedYear !== 2017 && selectedYear !== 2016 && selectedYear !== 2015 && selectedYear !== 2014 && selectedYear !== 2013 && selectedYear !== 2012 && selectedYear !== 2011 && selectedYear !== 2010 && selectedYear !== 2009 && selectedYear !== 2008) && (
                                    <button
                                        onClick={() => handleYearClick(2025)}
                                        className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all"
                                    >
                                        Ver tarifas 2025
                                    </button>
                                )}
                            </div>
                        </div>
                    )}

                    {/* Estado vacío para búsqueda */}
                    {!loading && filteredFiles.length === 0 && searchTerm && (
                        <div className="text-center py-12">
                            <div className="inline-flex flex-col items-center p-8 bg-white rounded-lg border border-gray-200">
                                <Search className="w-12 h-12 text-gray-400 mb-4" />
                                <h3 className="text-lg font-medium text-gray-900 mb-2">No se encontraron resultados</h3>
                                <p className="text-gray-600">Intenta con otros términos de búsqueda</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    };

    return (
        <div>
            {currentView === 'main' ? <MainView /> : <YearView />}
            <PreviewModal />
        </div>
    );
};

export default TarifasElectrohuila;