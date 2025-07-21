import React from 'react';

const JuntaDirectiva = () => {
  const miembros = [
    {
      nombre: 'Humberto Londoño Blandón',
      entidad: 'Ministerio de Hacienda y Crédito Público',
      tipo: 'Principal',
      color: 'bg-blue-50 border-blue-200 text-blue-800',
      icon: '🏛️'
    },
    {
      nombre: 'Claudia Marcela Martínez Gómez',
      entidad: 'Ministerio de Hacienda y Crédito Público',
      tipo: 'Principal',
      color: 'bg-blue-50 border-blue-200 text-blue-800',
      icon: '🏛️'
    },
    {
      nombre: 'Jose Alejandro Rico Olaya',
      entidad: 'Ministerio de Hacienda y Crédito Público',
      tipo: 'Principal',
      color: 'bg-blue-50 border-blue-200 text-blue-800',
      icon: '🏛️'
    },
    {
      nombre: 'Luz Dary Carmona Moreno',
      entidad: 'Ministerio de Minas y Energía',
      tipo: 'Principal',
      color: 'bg-green-50 border-green-200 text-green-800',
      icon: '⚡'
    },
    {
      nombre: 'Jorge Eduardo Salgado Ardila',
      entidad: 'Ministerio de Minas y Energía',
      tipo: 'Principal',
      color: 'bg-green-50 border-green-200 text-green-800',
      icon: '⚡'
    },
    {
      nombre: 'Nominación a Cargo del Ministerio de Hacienda y Crédito Público',
      entidad: 'Independiente',
      tipo: 'Principal',
      color: 'bg-purple-50 border-purple-200 text-purple-800',
      icon: '👤'
    },
    {
      nombre: 'Rodrigo Villalba Mosquera',
      entidad: 'Departamento del Huila',
      tipo: 'Principal',
      color: 'bg-orange-50 border-orange-200 text-orange-800',
      icon: '🏛️'
    },
  ];

  const entidadStats = {
    'Ministerio de Hacienda y Crédito Público': { count: 3, color: 'text-blue-600', bg: 'bg-blue-100' },
    'Ministerio de Minas y Energía': { count: 2, color: 'text-green-600', bg: 'bg-green-100' },
    'Independiente': { count: 1, color: 'text-purple-600', bg: 'bg-purple-100' },
    'Departamento del Huila': { count: 1, color: 'text-orange-600', bg: 'bg-orange-100' }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Junta Directiva</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Órgano de administración y dirección de la Electrificadora del Huila S.A. E.S.P.
        </p>
      </div>

      {/* Descripción */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-gray-200">
        <div className="flex items-start space-x-4 mb-6">
          <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Composición</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              La Junta Directiva de la Electrificadora del Huila S.A. E.S.P. está compuesta por siete (07) miembros 
              elegidos por la Asamblea General de Accionistas, a saber:
            </p>
            
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <ul className="space-y-2">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700">Tres (03) representantes del Ministerio de Hacienda</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">Dos (02) representantes del Ministerio de Minas y Energía</span>
                </li>
              </ul>
              <ul className="space-y-2">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-700">Un (01) miembro independiente</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-700">El Gobernador del Huila, o su delegado</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
              <p className="text-blue-800 font-medium">
                ℹ️ Todos son miembros Principales con plenos derechos de participación y voto.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Estadísticas */}
      <div className="bg-white rounded-xl shadow-lg p-6 mb-8 border border-gray-200">
        <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Distribución por Entidad</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Object.entries(entidadStats).map(([entidad, stats]) => (
            <div key={entidad} className={`${stats.bg} rounded-lg p-4 text-center`}>
              <div className={`text-2xl font-bold ${stats.color}`}>{stats.count}</div>
              <div className="text-sm text-gray-600 mt-1">
                {entidad === 'Ministerio de Hacienda y Crédito Público' ? 'Min. Hacienda' :
                 entidad === 'Ministerio de Minas y Energía' ? 'Min. Minas' :
                 entidad === 'Departamento del Huila' ? 'Dpto. Huila' : entidad}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Miembros */}
      <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-semibold text-gray-900">Miembros Principales</h3>
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span>7 miembros activos</span>
          </div>
        </div>
        
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {miembros.map((miembro, index) => (
            <div 
              key={index} 
              className={`${miembro.color} rounded-lg border-2 p-5 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}
            >
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 text-2xl">{miembro.icon}</div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-gray-900 leading-tight mb-2">
                    {miembro.nombre}
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed mb-3">
                    {miembro.entidad}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                      {miembro.tipo}
                    </span>
                    <div className="text-xs text-gray-500">
                      #{index + 1}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Información adicional */}
      <div className="mt-8 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-6 border border-gray-200">
        <div className="text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            Gobierno Corporativo
          </h3>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed mb-6">
            La Junta Directiva ejerce las funciones de dirección y administración de la sociedad, 
            velando por el cumplimiento de los objetivos corporativos y el buen gobierno empresarial.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">7</div>
              <div className="text-sm text-gray-600">Miembros</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">4</div>
              <div className="text-sm text-gray-600">Entidades</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">100%</div>
              <div className="text-sm text-gray-600">Principales</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600">2025</div>
              <div className="text-sm text-gray-600">Período Actual</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JuntaDirectiva;