import React, { useState } from 'react';

const TablaAccionistas = () => {
  const [mostrarTabla, setMostrarTabla] = useState(false);

  const accionistasMenores = [
    { nombre: 'Municipio de Aipe', acciones: '173.169', participacion: '0,39%', tipo: 'municipio' },
    { nombre: 'Municipio de Neiva', acciones: '167.657', participacion: '0,38%', tipo: 'municipio' },
    { nombre: 'Municipio de Pitalito', acciones: '147.869', participacion: '0,34%', tipo: 'municipio' },
    { nombre: 'Empresas Públicas de Neiva', acciones: '99.094', participacion: '0,23%', tipo: 'empresa' },
    { nombre: 'Municipio de Gigante', acciones: '47.013', participacion: '0,11%', tipo: 'municipio' },
    { nombre: 'Municipio de Timaná', acciones: '46.562', participacion: '0,11%', tipo: 'municipio' },
    { nombre: 'Municipio de Campoalegre', acciones: '45.364', participacion: '0,10%', tipo: 'municipio' },
    { nombre: 'Municipio de Rivera', acciones: '42.076', participacion: '0,10%', tipo: 'municipio' },
    { nombre: 'Municipio de Colombia', acciones: '41.849', participacion: '0,10%', tipo: 'municipio' },
    { nombre: 'Municipio de La Plata', acciones: '32.340', participacion: '0,07%', tipo: 'municipio' },
    { nombre: 'Municipio de Agrado', acciones: '23.534', participacion: '0,05%', tipo: 'municipio' },
    { nombre: 'Municipio de Guadalupe', acciones: '19.763', participacion: '0,04%', tipo: 'municipio' },
    { nombre: 'Municipio de Yaguará', acciones: '19.445', participacion: '0,04%', tipo: 'municipio' },
    { nombre: 'Municipio de Tello', acciones: '19.292', participacion: '0,04%', tipo: 'municipio' },
    { nombre: 'Municipio de Garzón', acciones: '18.724', participacion: '0,04%', tipo: 'municipio' },
    { nombre: 'Municipio de Tarqui', acciones: '18.052', participacion: '0,04%', tipo: 'municipio' },
    { nombre: 'Municipio de Palermo', acciones: '16.848', participacion: '0,04%', tipo: 'municipio' },
    { nombre: 'Municipio de Suaza', acciones: '14.489', participacion: '0,03%', tipo: 'municipio' },
    { nombre: 'Municipio de Íquira', acciones: '13.138', participacion: '0,03%', tipo: 'municipio' },
    { nombre: 'Municipio de Acevedo', acciones: '12.943', participacion: '0,03%', tipo: 'municipio' },
    { nombre: 'Municipio de La Argentina', acciones: '12.918', participacion: '0,03%', tipo: 'municipio' },
    { nombre: 'Municipio de San Agustín', acciones: '11.983', participacion: '0,03%', tipo: 'municipio' },
    { nombre: 'Municipio de Hobo', acciones: '9.483', participacion: '0,02%', tipo: 'municipio' },
    { nombre: 'Municipio de Oporapa', acciones: '9.111', participacion: '0,02%', tipo: 'municipio' },
    { nombre: 'Municipio de Paicol', acciones: '4.711', participacion: '0,01%', tipo: 'municipio' },
    { nombre: 'Municipio de Tesalia', acciones: '4.571', participacion: '0,01%', tipo: 'municipio' },
    { nombre: 'Municipio de Saladoblanco', acciones: '3.543', participacion: '0,01%', tipo: 'municipio' },
    { nombre: 'Municipio de Baraya', acciones: '3.170', participacion: '0,01%', tipo: 'municipio' },
    { nombre: 'Municipio de Pital', acciones: '2.700', participacion: '0,01%', tipo: 'municipio' },
    { nombre: 'Municipio de Teruel', acciones: '2.590', participacion: '0,01%', tipo: 'municipio' },
    { nombre: 'Municipio de Villavieja', acciones: '2.492', participacion: '0,01%', tipo: 'municipio' },
    { nombre: 'Municipio de Altamira', acciones: '201', participacion: '0,00%', tipo: 'municipio' },
    { nombre: 'Codensa', acciones: '54', participacion: '0,00%', tipo: 'empresa' },
  ];

  const tipoIcons = {
    municipio: '🏛️',
    empresa: '🏢'
  };

  const totalAcciones = '44.028.878';
  const participacionTotal = '100,00%';

  return (
    <div className="w-full">
      {/* Botón expandible */}
      <button
        className={`w-full flex items-center justify-between p-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-lg hover:from-purple-700 hover:to-purple-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 ${
          mostrarTabla ? 'rounded-b-none' : ''
        }`}
        onClick={() => setMostrarTabla(!mostrarTabla)}
      >
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
            </svg>
          </div>
          <div className="text-left">
            <h3 className="text-lg font-semibold">Ver todos los accionistas</h3>
            <p className="text-purple-100 text-sm">{accionistasMenores.length} accionistas registrados</p>
          </div>
        </div>
        
        <div className={`w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center transform transition-transform duration-300 ${
          mostrarTabla ? 'rotate-180' : ''
        }`}>
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>
      
      {/* Tabla expandible */}
      {mostrarTabla && (
        <div className="bg-white border-2 border-t-0 border-purple-200 rounded-b-lg shadow-lg overflow-hidden">
          {/* Header de la tabla */}
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 px-6 py-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Registro de Accionistas</h3>
                  <p className="text-sm text-gray-600">Distribución detallada de acciones</p>
                </div>
              </div>
              
              {/* Estadísticas rápidas */}
              <div className="hidden md:flex space-x-6 text-sm">
                <div className="text-center">
                  <div className="font-bold text-purple-600">{accionistasMenores.filter(a => a.tipo === 'municipio').length}</div>
                  <div className="text-gray-600">Municipios</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-blue-600">{accionistasMenores.filter(a => a.tipo === 'empresa').length}</div>
                  <div className="text-gray-600">Empresas</div>
                </div>
              </div>
            </div>
          </div>

          {/* Tabla responsive */}
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    <div className="flex items-center space-x-1">
                      <span>Accionista</span>
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7l10-10M7 7l-10 10M7 7l10 10" />
                      </svg>
                    </div>
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    No. Acciones
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Participación
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {accionistasMenores.map((accionista, index) => (
                  <tr 
                    key={index} 
                    className={`hover:bg-gray-50 transition-colors ${
                      index % 2 === 0 ? 'bg-white' : 'bg-gray-25'
                    }`}
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center space-x-3">
                        <span className="text-lg">{tipoIcons[accionista.tipo]}</span>
                        <div>
                          <div className="text-sm font-medium text-gray-900">
                            {accionista.nombre}
                          </div>
                          <div className="text-xs text-gray-500 capitalize">
                            {accionista.tipo}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right">
                      <div className="text-sm font-mono text-gray-900">
                        {accionista.acciones}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right">
                      <div className="text-sm font-medium text-gray-900">
                        {accionista.participacion}
                      </div>
                      {/* Barra de progreso mini para participación */}
                      <div className="w-16 h-1 bg-gray-200 rounded-full ml-auto mt-1">
                        <div 
                          className="h-1 bg-purple-500 rounded-full transition-all duration-300"
                          style={{ 
                            width: `${Math.max(2, parseFloat(accionista.participacion.replace(',', '.')) * 50)}%` 
                          }}
                        ></div>
                      </div>
                    </td>
                  </tr>
                ))}
                
                {/* Fila de totales */}
                <tr className="bg-gradient-to-r from-purple-100 to-blue-100 font-bold border-t-2 border-purple-300">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                        </svg>
                      </div>
                      <span className="text-lg font-bold text-purple-900">TOTALES</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right">
                    <div className="text-lg font-bold font-mono text-purple-900">
                      {totalAcciones}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right">
                    <div className="text-lg font-bold text-purple-900">
                      {participacionTotal}
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Footer informativo */}
          <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-2 md:space-y-0">
              <div className="text-sm text-gray-600">
                Total de {accionistasMenores.length} accionistas registrados
              </div>
              <div className="flex items-center space-x-4 text-xs text-gray-500">
                <div className="flex items-center space-x-1">
                  <span>🏛️</span>
                  <span>Municipios</span>
                </div>
                <div className="flex items-center space-x-1">
                  <span>🏢</span>
                  <span>Empresas</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TablaAccionistas;