import React from 'react';
import Image from 'next/image';

// Interfaces TypeScript
interface Directivo {
  id: number;
  nombre: string;
  cargo: string;
  imagen: string;
  color: string;
  bgColor: string;
  email?: string;
  experiencia?: string;
}

interface EstadisticaItem {
  valor: string;
  label: string;
  color: string;
}

const EquipoDirectivo: React.FC = () => {
  const directivos: Directivo[] = [
    {
      id: 1,
      nombre: 'Nika Duniezhka Cuellar Cuenca',
      cargo: 'Gerente General (E)',
      imagen: '/images/directivos/Dra-nika-768x768.jpg.webp',
      color: 'border-blue-500',
      bgColor: 'bg-blue-50',
      experiencia: 'Más de 15 años en administración empresarial'
    },
    {
      id: 2,
      nombre: 'Sebastián Andrés Repiso Ramón',
      cargo: 'Subgerente Administrativo y Financiero (E)',
      imagen: '/images/directivos/sebastioa-768x768.jpg.webp',
      color: 'border-green-500',
      bgColor: 'bg-green-50',
      experiencia: 'Especialista en finanzas corporativas'
    },
    {
      id: 3,
      nombre: 'Jhonatan Torres Cleves',
      cargo: 'Subgerente Comercial',
      imagen: '/images/directivos/jhonatan-torres.png.webp',
      color: 'border-purple-500',
      bgColor: 'bg-purple-50',
      experiencia: 'Experto en desarrollo comercial'
    },
    {
      id: 4,
      nombre: 'Alberto Bladimir Solis Perdomo',
      cargo: 'Subgerente de Distribución (E)',
      imagen: '/images/directivos/Sin-titulo-2-v3-768x768.jpg.webp',
      color: 'border-orange-500',
      bgColor: 'bg-orange-50',
      experiencia: 'Ingeniero en sistemas eléctricos'
    },
    {
      id: 5,
      nombre: 'Luis Alfredo Carballo Gutiérrez',
      cargo: 'Secretario General (E) Y Asesor Legal',
      imagen: '/images/directivos/luis-carballo-768x768.jpg.webp',
      color: 'border-red-500',
      bgColor: 'bg-red-50',
      experiencia: 'Especialista en derecho administrativo'
    }
  ];

  const estadisticas: EstadisticaItem[] = [
    {
      valor: '5',
      label: 'Directivos',
      color: 'text-blue-600'
    },
    {
      valor: '100+',
      label: 'Años Experiencia',
      color: 'text-green-600'
    },
    {
      valor: '4',
      label: 'Subgerencias',
      color: 'text-purple-600'
    },
    {
      valor: '1',
      label: 'Gerencia General',
      color: 'text-orange-600'
    }
  ];

  // Handler de error correctamente tipado para Next.js Image
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    target.src = '/images/placeholder-avatar.jpg';
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12">
      {/* Header mejorado */}
      <div className="mb-12 text-center">
        <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
          </svg>
          Liderazgo Corporativo
        </div>
        
        <h2 className="text-4xl font-bold text-gray-900 mb-6">
          Equipo <span className="text-blue-600">Directivo</span>
        </h2>
        
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto mb-6"></div>
        
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Conozca a los líderes que dirigen ELECTROHUILA S.A. E.S.P. hacia el futuro, 
          con experiencia y compromiso en la prestación de servicios de calidad.
        </p>
      </div>

      {/* Grid de directivos mejorado */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 mb-16">
        {directivos.map((directivo, index) => (
          <div 
            key={directivo.id} 
            className={`relative ${directivo.bgColor} rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-2 ${directivo.color} group overflow-hidden`}
          >
            {/* Efecto de fondo animado */}
            <div className={`absolute top-0 left-0 w-full h-2 ${directivo.color.replace('border-', 'bg-')} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
            
            {/* Avatar container mejorado */}
            <div className="relative mb-6">
              <div className="w-36 h-36 mx-auto relative">
                {/* Círculo decorativo de fondo con animación */}
                <div className={`absolute inset-0 ${directivo.color.replace('border-', 'bg-')} rounded-full opacity-10 group-hover:opacity-20 transition-all duration-300 group-hover:scale-110`}></div>
                
                {/* Imagen del directivo */}
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-xl group-hover:shadow-2xl transition-all duration-300">
                  <Image 
                    src={directivo.imagen} 
                    alt={`${directivo.nombre} - ${directivo.cargo}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={handleImageError}
                    sizes="(max-width: 768px) 144px, 144px"
                  />
                </div>
                
                {/* Badge decorativo con animación */}
                <div className={`absolute -top-2 -right-2 w-8 h-8 ${directivo.color.replace('border-', 'bg-')} rounded-full border-3 border-white flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-300`}>
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                </div>

                {/* Número de posición */}
                <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-white rounded-full border-2 border-gray-200 flex items-center justify-center shadow-md">
                  <span className="text-sm font-bold text-gray-600">{index + 1}</span>
                </div>
              </div>
            </div>

            {/* Información del directivo mejorada */}
            <div className="text-center space-y-3">
              <h3 className="text-lg font-bold text-gray-900 leading-tight min-h-[3.5rem] flex items-center justify-center px-2 group-hover:text-blue-700 transition-colors">
                {directivo.nombre}
              </h3>
              
              <div className={`inline-block px-3 py-1 ${directivo.bgColor} ${directivo.color.replace('border-', 'text-')} text-sm font-medium rounded-full border`}>
                {directivo.cargo}
              </div>

              {directivo.experiencia && (
                <p className="text-xs text-gray-600 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-2">
                  {directivo.experiencia}
                </p>
              )}
            </div>

            {/* Línea decorativa inferior animada */}
            <div className={`absolute bottom-0 left-0 right-0 h-1 ${directivo.color.replace('border-', 'bg-')} rounded-b-3xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center`}></div>
          </div>
        ))}
      </div>

      {/* Información adicional mejorada */}
      <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-xl p-10 border border-gray-200">
        <div className="text-center mb-10">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Estructura <span className="text-blue-600">Organizacional</span>
          </h3>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 leading-relaxed max-w-4xl mx-auto text-lg">
            Nuestro equipo directivo está conformado por profesionales altamente calificados, 
            comprometidos con la excelencia operacional y el desarrollo sostenible de la región. 
            Cada uno aporta su experiencia y liderazgo para garantizar la prestación de un servicio 
            de energía eléctrica confiable y de calidad.
          </p>
        </div>
        
        {/* Stats mejoradas */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {estadisticas.map((stat, index) => (
            <div 
              key={index} 
              className="text-center p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 group"
            >
              <div className={`text-3xl font-bold ${stat.color} mb-2 group-hover:scale-110 transition-transform duration-300`}>
                {stat.valor}
              </div>
              <div className="text-sm text-gray-600 font-medium uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-10 text-center">
          <div className="inline-flex items-center space-x-4 px-6 py-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-full border border-blue-200">
            <div className="flex -space-x-2">
              {directivos.slice(0, 3).map((directivo, index) => (
                <div 
                  key={directivo.id} 
                  className={`w-8 h-8 rounded-full border-2 border-white ${directivo.color.replace('border-', 'bg-')} flex items-center justify-center text-white text-xs font-bold shadow-md`}
                >
                  {directivo.nombre.split(' ')[0].charAt(0)}
                </div>
              ))}
              <div className="w-8 h-8 bg-gray-400 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold shadow-md">
                +{directivos.length - 3}
              </div>
            </div>
            <span className="text-blue-700 font-medium text-sm">
              Equipo comprometido con la excelencia
            </span>
          </div>
        </div>
      </div>

      {/* Información de contacto adicional */}
      <div className="mt-12 bg-blue-50 rounded-2xl p-8 border border-blue-200">
        <div className="text-center">
          <h4 className="text-xl font-bold text-blue-900 mb-4">¿Deseas conocer más sobre nuestro liderazgo?</h4>
          <p className="text-blue-700 mb-6">
            Obtén información detallada sobre la trayectoria y logros de nuestro equipo directivo.
          </p>
          <a 
            href="/institucional/equipo-directivo" 
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg group"
          >
            <svg className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            Ver Información Completa
          </a>
        </div>
      </div>
    </div>
  );
};

export default EquipoDirectivo;