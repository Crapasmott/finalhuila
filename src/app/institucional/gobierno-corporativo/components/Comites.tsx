import React from 'react';
import Image from 'next/image';

// Interfaces TypeScript
interface ComiteItem {
  id: number;
  nombre: string;
  descripcion?: string;
}

const Comites: React.FC = () => {
  const comites: ComiteItem[] = [
    {
      id: 1,
      nombre: 'Gobierno Corporativo Talento Humano y Sostenibilidad',
      descripcion: 'Supervisa las políticas de gobierno corporativo y sostenibilidad'
    },
    {
      id: 2,
      nombre: 'Comité de Estrategia y Finanzas',
      descripcion: 'Define las estrategias financieras y de crecimiento'
    },
    {
      id: 3,
      nombre: 'Comité de Auditoría y Riesgos',
      descripcion: 'Gestiona los riesgos operacionales y auditorías'
    }
  ];

  // Handler de error correctamente tipado
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    target.src = '/images/placeholder-team.jpg';
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Imagen del equipo */}
        <div className="relative rounded-2xl overflow-hidden shadow-xl group">
          <div className="relative">
            <Image 
              src="/images/directivos/comite-768x512.jpg.webp" 
              alt="Equipo de comités directivos de ElectroHuila" 
              width={768} 
              height={512}
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              onError={handleImageError}
              priority
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* Badge decorativo */}
            <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
              Comités Activos
            </div>
          </div>
        </div>

        {/* Lista de comités mejorada */}
        <div className="space-y-8">
          {/* Header */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Comités de <span className="text-blue-600">Dirección</span>
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mb-4"></div>
            <p className="text-gray-600 leading-relaxed">
              Estructuras de gobierno corporativo que garantizan la gestión eficiente y transparente de nuestra organización.
            </p>
          </div>

          {/* Lista de comités */}
          <div className="space-y-4">
            {comites.map((comite, index) => (
              <div 
                key={comite.id} 
                className="group p-6 bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-lg hover:border-blue-300 transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-start space-x-4">
                  {/* Icono numerado */}
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm group-hover:scale-110 transition-transform shadow-md">
                    {index + 1}
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {comite.nombre}
                    </h4>
                    {comite.descripcion && (
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {comite.descripcion}
                      </p>
                    )}
                  </div>

                  {/* Check icon */}
                  <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Estadísticas rápidas */}
          <div className="grid grid-cols-3 gap-4 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 mb-1">{comites.length}</div>
              <div className="text-xs text-gray-600 uppercase tracking-wide">Comités Activos</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600 mb-1">100%</div>
              <div className="text-xs text-gray-600 uppercase tracking-wide">Transparencia</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600 mb-1">24/7</div>
              <div className="text-xs text-gray-600 uppercase tracking-wide">Supervisión</div>
            </div>
          </div>

          {/* Botones de descarga mejorados */}
          <div className="flex flex-wrap gap-4">
            <a 
              href="/documentos/gobierne-corporativo/codigo-buen-gobierno.pdf" 
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 group"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <svg className="w-5 h-5 mr-3 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span className="font-semibold">Código de Buen Gobierno</span>
            </a>

            <a 
              href="/" 
              className="inline-flex items-center px-6 py-3 bg-white text-blue-600 border-2 border-blue-600 rounded-xl hover:bg-blue-50 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 group"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <svg className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span className="font-semibold">Manual de Comités</span>
            </a>
          </div>

          {/* Información adicional */}
          <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <svg className="w-5 h-5 text-yellow-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-medium text-yellow-800 mb-1">
                  Información importante
                </h4>
                <p className="text-sm text-yellow-700">
                  Los comités se reúnen de manera periódica para evaluar y tomar decisiones estratégicas. 
                  Conoce más sobre su funcionamiento en nuestros documentos corporativos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comites;