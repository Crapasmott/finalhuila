import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const EquipoDirectivoAnimado = () => {
  // Estado para controlar las animaciones
  const [animateCards, setAnimateCards] = useState(false);
  const [activeCard, setActiveCard] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  
  // Datos del equipo directivo con información adicional
  const miembrosEquipo = [
    {
      id: 1,
      nombre: 'Nika Duniezhka Cuellar',
      apellido: 'Cuenca',
      cargo: 'Gerente General (E)',
      imagen: '/images/equipo/nika-cuellar.jpg',
      experiencia: 'Profesional con más de 15 años de experiencia en administración de empresas del sector energético.',
      formacion: ['Magíster en Administración de Empresas', 'Especialista en Gestión Estratégica'],
      email: 'nika.cuellar@electrohuila.com.co',
      linkedin: '#'
    },
    {
      id: 2,
      nombre: 'Luis Alfredo Carballo',
      apellido: 'Gutiérrez',
      cargo: 'Secretario General (E) Y Asesor Legal',
      imagen: '/images/equipo/luis-carballo.jpg',
      experiencia: 'Abogado especializado en derecho administrativo y corporativo con amplia trayectoria en el sector público.',
      formacion: ['Especialista en Derecho Administrativo', 'Magíster en Derecho Público'],
      email: 'luis.carballo@electrohuila.com.co',
      linkedin: '#'
    },
    {
      id: 3,
      nombre: 'Sebastián Andrés Repiso',
      apellido: 'Ramón',
      cargo: 'Subgerente Administrativo y Financiero (E)',
      imagen: '/images/equipo/sebastian-repiso.jpg',
      experiencia: 'Contador Público con experiencia en gestión financiera y administrativa en empresas de servicios públicos.',
      formacion: ['Especialista en Finanzas Corporativas', 'Magíster en Gestión Financiera'],
      email: 'sebastian.repiso@electrohuila.com.co',
      linkedin: '#'
    },
    {
      id: 4,
      nombre: 'Jhonatan Torres',
      apellido: 'Cleves',
      cargo: 'Subgerente Comercial',
      imagen: '/images/equipo/jhonatan-torres.jpg',
      experiencia: 'Ingeniero con sólida experiencia en desarrollo comercial y atención al cliente en el sector eléctrico.',
      formacion: ['Especialista en Mercadeo y Ventas', 'Diplomado en Servicio al Cliente'],
      email: 'jhonatan.torres@electrohuila.com.co',
      linkedin: '#'
    },
    {
      id: 5,
      nombre: 'Alberto Bladimir Solis',
      apellido: 'Perdomo',
      cargo: 'Subgerente de Distribución (E)',
      imagen: '/images/equipo/alberto-solis.jpg',
      experiencia: 'Ingeniero Eléctrico especializado en sistemas de distribución eléctrica y gestión de infraestructura.',
      formacion: ['Especialista en Sistemas Eléctricos de Potencia', 'Diplomado en Gestión de Proyectos'],
      email: 'alberto.solis@electrohuila.com.co',
      linkedin: '#'
    }
  ];

  // Datos de los comités con descripciones
  const comites = [
    {
      nombre: 'Gobierno Corporativo Talento Humano y Sostenibilidad',
      descripcion: 'Supervisa las políticas de gobierno corporativo y sostenibilidad',
      icon: '🏛️'
    },
    {
      nombre: 'Comité de Estrategia y Finanzas',
      descripcion: 'Define las estrategias financieras y de crecimiento',
      icon: '📊'
    },
    {
      nombre: 'Comité de Auditoría y Riesgos',
      descripcion: 'Gestiona los riesgos operacionales y auditorías',
      icon: '🔍'
    }
  ];

  // Efecto para activar la animación al cargar
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimateCards(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
      {/* Header elegante */}
      <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative">
            {/* Elementos decorativos */}
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
            
            <h1 className="text-5xl font-bold mb-6 relative">
              Equipo <span className="text-purple-300">Directivo</span>
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-purple-300 to-pink-300 mx-auto mb-6"></div>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Liderazgo comprometido con la excelencia en el servicio y el desarrollo sostenible de nuestra región
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Grid de tarjetas del equipo */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 mb-16">
          {miembrosEquipo.map((miembro, index) => (
            <div 
              key={miembro.id}
              className={`group perspective-1000 transition-all duration-700 ${
                animateCards 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
              onMouseEnter={() => {
                setActiveCard(miembro.id);
                setHoveredCard(miembro.id);
              }}
              onMouseLeave={() => {
                setActiveCard(null);
                setHoveredCard(null);
              }}
            >
              <div className={`relative w-full h-96 transform-style-preserve-3d transition-transform duration-700 ${
                hoveredCard === miembro.id ? 'rotate-y-180' : ''
              }`}>
                {/* Cara frontal */}
                <div className="absolute inset-0 w-full h-full backface-hidden">
                  <div className="bg-white rounded-2xl shadow-xl p-6 h-full flex flex-col items-center justify-center text-center group-hover:shadow-2xl transition-shadow duration-300">
                    {/* Imagen con efectos */}
                    <div className="relative mb-6">
                      <div className="w-24 h-24 rounded-full overflow-hidden ring-4 ring-blue-100 group-hover:ring-blue-300 transition-all duration-300">
                        <Image 
                          src={miembro.imagen} 
                          alt={`${miembro.nombre} ${miembro.apellido}`}
                          width={96}
                          height={96}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      {/* Badge de cargo */}
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                        <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs px-3 py-1 rounded-full font-medium">
                          Directivo
                        </div>
                      </div>
                    </div>
                    
                    {/* Información básica */}
                    <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                      {miembro.nombre}
                    </h3>
                    <h4 className="text-md font-semibold text-gray-700 mb-3">
                      {miembro.apellido}
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">
                      {miembro.cargo}
                    </p>
                    
                    {/* Indicador de hover */}
                    <div className="mt-auto">
                      <div className="inline-flex items-center text-blue-600 text-sm font-medium">
                        <span className="mr-2">Ver más</span>
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Cara trasera */}
                <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
                  <div className="bg-gradient-to-br from-blue-600 to-purple-700 text-white rounded-2xl shadow-xl p-6 h-full flex flex-col">
                    <div className="text-center mb-4">
                      <h3 className="text-lg font-bold mb-2">{miembro.nombre} {miembro.apellido}</h3>
                      <div className="w-16 h-0.5 bg-white/50 mx-auto"></div>
                    </div>
                    
                    <div className="flex-1 space-y-4 text-sm">
                      <div>
                        <h4 className="font-semibold mb-2 flex items-center">
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V4.5a2 2 0 00-2-2h-4a2 2 0 00-2 2V6m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2h8z" />
                          </svg>
                          Experiencia
                        </h4>
                        <p className="text-white/90 leading-relaxed">{miembro.experiencia}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2 flex items-center">
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                          </svg>
                          Formación
                        </h4>
                        <ul className="space-y-1">
                          {miembro.formacion.map((titulo, idx) => (
                            <li key={idx} className="text-white/90 text-xs flex items-center">
                              <span className="w-1 h-1 bg-white/70 rounded-full mr-2"></span>
                              {titulo}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    {/* Enlaces sociales */}
                    <div className="flex items-center justify-center space-x-4 mt-4 pt-4 border-t border-white/20">
                      <a 
                        href={miembro.email} 
                        className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                      </a>
                      <a 
                        href={miembro.linkedin} 
                        className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                      >
                        <span className="text-xs font-bold">in</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Foto grupal mejorada */}
        <div className={`mb-16 transition-all duration-1000 delay-1000 ${
          animateCards ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Nuestro Equipo Unido</h3>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Trabajamos en conjunto para brindar el mejor servicio eléctrico a la región del Huila
              </p>
            </div>
            
            <div className="relative group">
              <div className="overflow-hidden">
                <Image 
                  src="/images/equipo/foto-grupal.jpg" 
                  alt="Foto grupal del equipo directivo" 
                  width={1200} 
                  height={600}
                  className="w-full h-auto group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-8 left-8 text-white">
                  <h4 className="text-xl font-bold mb-2">Equipo Directivo ElectroHuila</h4>
                  <p className="text-white/90">Comprometidos con la excelencia y el servicio</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Sección de comités mejorada */}
        <div className={`mb-16 transition-all duration-1000 delay-1200 ${
          animateCards ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Comités de Dirección</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Estructuras de gobierno corporativo que garantizan la gestión eficiente y transparente
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {comites.map((comite, index) => (
              <div 
                key={index}
                className={`group bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${
                  animateCards ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${1400 + index * 200}ms` }}
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">{comite.icon}</span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {comite.nombre}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {comite.descripcion}
                  </p>
                  
                  <div className="inline-flex items-center text-blue-600 text-sm font-medium">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Comité Activo
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Call to Action mejorado */}
        <div className={`text-center transition-all duration-1000 delay-1800 ${
          animateCards ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Código de Buen Gobierno</h3>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Conoce nuestros principios de gobierno corporativo y las normativas que rigen nuestra gestión
            </p>
            
            <a 
              href="/documentos/codigo-buen-gobierno.pdf" 
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Descargar Código de Buen Gobierno
            </a>
          </div>
        </div>
      </div>

      {/* Estilos CSS personalizados para las animaciones 3D */}
      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        
        .backface-hidden {
          backface-visibility: hidden;
        }
        
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
};

export default EquipoDirectivoAnimado;