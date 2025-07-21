import React from 'react';
import Image from 'next/image';

const EquipoDirectivo = () => {
  const directivos = [
    {
      nombre: 'Nika Duniezhka Cuellar Cuenca',
      cargo: 'Gerente General (E)',
      imagen: '/images/directivos/Dra-nika-768x768.jpg.webp',
      color: 'border-blue-500',
      bgColor: 'bg-blue-50'
    },
    {
      nombre: 'Sebastián Andrés Repiso Ramón',
      cargo: 'Subgerente Administrativo y Financiero (E)',
      imagen: '/images/directivos/sebastioa-768x768.jpg.webp',
      color: 'border-green-500',
      bgColor: 'bg-green-50'
    },
    {
      nombre: 'Jhonatan Torres Cleves',
      cargo: 'Subgerente Comercial',
      imagen: '/images/directivos/jhonatan-torres.png.webp',
      color: 'border-purple-500',
      bgColor: 'bg-purple-50'
    },
    {
      nombre: 'Alberto Bladimir Solis Perdomo',
      cargo: 'Subgerente de Distribución (E)',
      imagen: '/images/directivos/Sin-titulo-2-v3-768x768.jpg.webp',
      color: 'border-orange-500',
      bgColor: 'bg-orange-50'
    },
    {
      nombre: 'Luis Alfredo Carballo Gutiérrez',
      cargo: 'Secretario General (E) Y Asesor Legal',
      imagen: '/images/directivos/luis-carballo-768x768.jpg.webp',
      color: 'border-red-500',
      bgColor: 'bg-red-50'
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Equipo Directivo</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Conozca a los líderes que dirigen ELECTROHUILA S.A. E.S.P. hacia el futuro
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {directivos.map((directivo, index) => (
          <div 
            key={index} 
            className={`relative ${directivo.bgColor} rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 ${directivo.color} group`}
          >
            {/* Avatar container */}
            <div className="relative mb-4">
              <div className="w-32 h-32 mx-auto relative">
                {/* Círculo decorativo de fondo */}
                <div className={`absolute inset-0 ${directivo.color.replace('border-', 'bg-')} rounded-full opacity-20 group-hover:opacity-30 transition-opacity`}></div>
                
                {/* Imagen del directivo */}
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <Image 
                    src={directivo.imagen} 
                    alt={directivo.nombre} 
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      e.target.src = '/images/placeholder-avatar.jpg';
                    }}
                  />
                </div>
                
                {/* Badge decorativo */}
                <div className={`absolute -top-2 -right-2 w-6 h-6 ${directivo.color.replace('border-', 'bg-')} rounded-full border-2 border-white flex items-center justify-center`}>
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Información del directivo */}
            <div className="text-center">
              <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight min-h-[3.5rem] flex items-center justify-center">
                {directivo.nombre}
              </h3>
              <p className={`text-sm font-medium ${directivo.color.replace('border-', 'text-')} leading-relaxed`}>
                {directivo.cargo}
              </p>
            </div>

            {/* Línea decorativa inferior */}
            <div className={`absolute bottom-0 left-0 right-0 h-1 ${directivo.color.replace('border-', 'bg-')} rounded-b-2xl`}></div>
          </div>
        ))}
      </div>

      {/* Información adicional */}
      <div className="mt-12 bg-white rounded-xl shadow-lg p-8 border border-gray-200">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Estructura Organizacional</h3>
          <p className="text-gray-600 leading-relaxed max-w-4xl mx-auto">
            Nuestro equipo directivo está conformado por profesionales altamente calificados, 
            comprometidos con la excelencia operacional y el desarrollo sostenible de la región. 
            Cada uno aporta su experiencia y liderazgo para garantizar la prestación de un servicio 
            de energía eléctrica confiable y de calidad.
          </p>
        </div>
        
        {/* Stats o métricas */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">5</div>
            <div className="text-sm text-gray-600">Directivos</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">100+</div>
            <div className="text-sm text-gray-600">Años Experiencia</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600">4</div>
            <div className="text-sm text-gray-600">Subgerencias</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-600">1</div>
            <div className="text-sm text-gray-600">Gerencia General</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EquipoDirectivo;