import React from 'react';

const ComposicionAccionaria = () => {
  const accionistas = [
    {
      nombre: 'Ministerio de Hacienda',
      acciones: '36.566.229',
      porcentaje: '83,05%',
      color: 'bg-blue-600',
      colorLight: 'bg-blue-50',
      textColor: 'text-blue-700'
    },
    {
      nombre: 'Departamento del Huila',
      acciones: '3.628.415',
      porcentaje: '8,24%',
      color: 'bg-green-600',
      colorLight: 'bg-green-50',
      textColor: 'text-green-700'
    },
    {
      nombre: 'Infihuila',
      acciones: '2.747.486',
      porcentaje: '6,24%',
      color: 'bg-orange-600',
      colorLight: 'bg-orange-50',
      textColor: 'text-orange-700'
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Composición Accionaria</h2>
        <p className="text-gray-600">Distribución del capital social de ELECTROHUILA S.A. E.S.P.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {accionistas.map((accionista, index) => (
          <div 
            key={index} 
            className={`relative ${accionista.colorLight} rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200`}
          >
            {/* Barra superior de color */}
            <div className={`absolute top-0 left-0 right-0 h-2 ${accionista.color} rounded-t-xl`}></div>
            
            {/* Contenido de la tarjeta */}
            <div className="pt-4 text-center">
              {/* Porcentaje principal */}
              <div className={`text-4xl font-bold ${accionista.textColor} mb-2`}>
                {accionista.porcentaje}
              </div>
              
              {/* Número de acciones */}
              <div className="text-gray-700 font-medium mb-3 text-lg">
                {accionista.acciones}
                <span className="text-sm text-gray-500 ml-1">Acciones</span>
              </div>
              
              {/* Nombre del accionista */}
              <div className={`${accionista.textColor} font-semibold text-lg leading-tight`}>
                {accionista.nombre}
              </div>
            </div>

            {/* Icono decorativo */}
            <div className={`absolute top-4 right-4 w-8 h-8 ${accionista.color} rounded-full flex items-center justify-center`}>
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
          </div>
        ))}
      </div>

      {/* Información adicional */}
      <div className="mt-8 bg-gray-50 rounded-lg p-6 border border-gray-200">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Total de Acciones</h3>
          <p className="text-3xl font-bold text-gray-800">44.942.130</p>
          <p className="text-sm text-gray-600 mt-2">Capital social autorizado, suscrito y pagado</p>
        </div>
      </div>

      {/* Gráfico de barras simple */}
      <div className="mt-8 bg-white rounded-lg p-6 shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">Participación Accionaria</h3>
        <div className="space-y-3">
          {accionistas.map((accionista, index) => (
            <div key={index} className="flex items-center">
              <div className="w-32 text-sm text-gray-700 font-medium">
                {accionista.nombre}
              </div>
              <div className="flex-1 mx-4 bg-gray-200 rounded-full h-4 relative overflow-hidden">
                <div 
                  className={`h-full ${accionista.color} rounded-full transition-all duration-1000 ease-out`}
                  style={{ width: accionista.porcentaje }}
                ></div>
              </div>
              <div className="w-16 text-sm font-semibold text-gray-700">
                {accionista.porcentaje}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComposicionAccionaria;