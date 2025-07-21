import React from 'react';
import Image from 'next/image';

const Comites = () => {
  const comites = [
    'Gobierno Corporativo Talento Humano y Sostenibilidad',
    'Comité de Estrategia y Finanzas',
    'Comité de Auditoría y Riesgos'
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        {/* Imagen del equipo */}
        <div className="relative rounded-lg overflow-hidden shadow-lg">
          <Image 
            src="/images/directivos/comite-768x512.jpg.webp" 
            alt="Equipo de trabajo" 
            width={768} 
            height={512}
            className="w-full h-auto object-cover"
            onError={(e) => {
              e.target.src = '/images/placeholder-team.jpg';
            }}
          />
        </div>

        {/* Lista de comités */}
        <div className="space-y-6">
          <ul className="space-y-4">
            {comites.map((comite, index) => (
              <li key={index} className="flex items-start space-x-3 p-4 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                {/* Check icon */}
                <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-800 font-medium leading-relaxed">{comite}</span>
              </li>
            ))}
          </ul>

          {/* Botón de descarga */}
          <div className="pt-4">
            <a 
              href="/documentos/gobierne-corporativo/codigo-buen-gobierno.pdf" 
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg group"
              target="_blank" 
              rel="noopener noreferrer"
            >
              {/* Download icon */}
              <svg className="w-5 h-5 mr-3 group-hover:animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Código de Buen Gobierno
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comites;