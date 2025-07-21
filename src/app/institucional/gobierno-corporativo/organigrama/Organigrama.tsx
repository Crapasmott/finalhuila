import React, { useState } from 'react';

// Interfaces TypeScript
interface Cargo {
  id: string;
  nombre: string;
  titular?: string;
  descripcion: string;
  color: string;
  bgColor: string;
  nivel: number;
  parent?: string;
  departamentos?: string[];
}

interface OrganigramaNode {
  cargo: Cargo;
  children: OrganigramaNode[];
}

const Organigrama: React.FC = () => {
  const [expandedNodes, setExpandedNodes] = useState<Set<string>>(new Set(['gerencia-general']));
  const [selectedNode, setSelectedNode] = useState<string | null>(null);

  // Estructura organizacional de ELECTROHUILA
  const estructuraOrganizacional: Cargo[] = [
    {
      id: 'gerencia-general',
      nombre: 'Gerencia General',
      titular: 'Nika Duniezhka Cuellar Cuenca',
      descripcion: 'Dirección Ejecutiva y Representación Legal',
      color: 'from-blue-600 to-blue-700',
      bgColor: 'bg-blue-50',
      nivel: 0,
      departamentos: ['Planeación Estratégica', 'Control Interno', 'Comunicaciones']
    },
    {
      id: 'subgerencia-distribucion',
      nombre: 'Subgerencia de Distribución',
      titular: 'Alberto Bladimir Solis Perdomo',
      descripcion: 'Infraestructura y Operaciones Técnicas',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      nivel: 1,
      parent: 'gerencia-general',
      departamentos: ['Ingeniería de Proyectos', 'Operación y Mantenimiento', 'Gestión de Activos']
    },
    {
      id: 'subgerencia-comercial',
      nombre: 'Subgerencia Comercial',
      titular: 'Jhonatan Torres Cleves',
      descripcion: 'Gestión Comercial y Atención al Cliente',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      nivel: 1,
      parent: 'gerencia-general',
      departamentos: ['Gestión Comercial', 'Atención al Cliente', 'Mercadeo y Ventas']
    },
    {
      id: 'subgerencia-administrativa',
      nombre: 'Subgerencia Administrativa y Financiera',
      titular: 'Sebastián Andrés Repiso Ramón',
      descripcion: 'Gestión Administrativa y Financiera',
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      nivel: 1,
      parent: 'gerencia-general',
      departamentos: ['Recursos Humanos', 'Contabilidad y Finanzas', 'Sistemas de Información']
    },
    {
      id: 'asesoria-legal',
      nombre: 'Secretaría General y Asesoría Legal',
      titular: 'Luis Alfredo Carballo Gutiérrez',
      descripcion: 'Asesoramiento Jurídico y Secretaría',
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50',
      nivel: 1,
      parent: 'gerencia-general',
      departamentos: ['Contratos y Convenios', 'Normatividad', 'Gestión Documental']
    },
    // Subdivisiones nivel 2
    {
      id: 'ingenieria-proyectos',
      nombre: 'División Ingeniería de Proyectos',
      descripcion: 'Diseño y Ejecución de Proyectos de Infraestructura',
      color: 'from-green-400 to-green-500',
      bgColor: 'bg-green-25',
      nivel: 2,
      parent: 'subgerencia-distribucion'
    },
    {
      id: 'operacion-mantenimiento',
      nombre: 'División Operación y Mantenimiento',
      descripcion: 'Operación y Mantenimiento de Redes',
      color: 'from-green-400 to-green-500',
      bgColor: 'bg-green-25',
      nivel: 2,
      parent: 'subgerencia-distribucion'
    },
    {
      id: 'gestion-comercial',
      nombre: 'División Gestión Comercial',
      descripcion: 'Facturación y Gestión de Clientes',
      color: 'from-purple-400 to-purple-500',
      bgColor: 'bg-purple-25',
      nivel: 2,
      parent: 'subgerencia-comercial'
    },
    {
      id: 'atencion-cliente',
      nombre: 'División Atención al Cliente',
      descripcion: 'Servicio al Cliente y PQR',
      color: 'from-purple-400 to-purple-500',
      bgColor: 'bg-purple-25',
      nivel: 2,
      parent: 'subgerencia-comercial'
    },
    {
      id: 'recursos-humanos',
      nombre: 'División Recursos Humanos',
      descripcion: 'Gestión del Talento Humano',
      color: 'from-orange-400 to-orange-500',
      bgColor: 'bg-orange-25',
      nivel: 2,
      parent: 'subgerencia-administrativa'
    },
    {
      id: 'financiera',
      nombre: 'División Financiera',
      descripcion: 'Contabilidad, Presupuesto y Tesorería',
      color: 'from-orange-400 to-orange-500',
      bgColor: 'bg-orange-25',
      nivel: 2,
      parent: 'subgerencia-administrativa'
    }
  ];

  // Construir árbol jerárquico
  const buildOrgChart = (parentId?: string, nivel: number = 0): OrganigramaNode[] => {
    return estructuraOrganizacional
      .filter(cargo => cargo.parent === parentId && cargo.nivel === nivel)
      .map(cargo => ({
        cargo,
        children: buildOrgChart(cargo.id, nivel + 1)
      }));
  };

  const orgChart = buildOrgChart();

  // Toggle expansión de nodos
  const toggleNode = (nodeId: string): void => {
    const newExpanded = new Set(expandedNodes);
    if (newExpanded.has(nodeId)) {
      newExpanded.delete(nodeId);
    } else {
      newExpanded.add(nodeId);
    }
    setExpandedNodes(newExpanded);
  };

  // Seleccionar nodo para mostrar detalles
  const selectNode = (nodeId: string): void => {
    setSelectedNode(selectedNode === nodeId ? null : nodeId);
  };

  // Renderizar nodo del organigrama
  const renderNode = (node: OrganigramaNode, isRoot: boolean = false): React.JSX.Element => {
    const { cargo, children } = node;
    const isExpanded = expandedNodes.has(cargo.id);
    const isSelected = selectedNode === cargo.id;
    const hasChildren = children.length > 0;

    return (
      <div key={cargo.id} className="flex flex-col items-center">
        {/* Nodo principal */}
        <div className="relative">
          <div 
            className={`
              relative cursor-pointer transition-all duration-300 transform hover:scale-105
              ${isSelected ? 'ring-4 ring-blue-300 ring-opacity-60' : ''}
              ${isRoot ? 'mb-8' : 'mb-4'}
            `}
            onClick={() => selectNode(cargo.id)}
          >
            <div className={`
              bg-gradient-to-r ${cargo.color} text-white rounded-xl shadow-lg hover:shadow-xl
              ${isRoot ? 'px-8 py-6' : cargo.nivel === 1 ? 'px-6 py-4' : 'px-4 py-3'}
              border-2 border-white border-opacity-20
            `}>
              <div className="text-center">
                <h3 className={`font-bold ${isRoot ? 'text-lg' : cargo.nivel === 1 ? 'text-base' : 'text-sm'}`}>
                  {cargo.nombre}
                </h3>
                {cargo.titular && (
                  <p className={`text-white text-opacity-90 font-medium ${isRoot ? 'text-sm' : 'text-xs'} mt-1`}>
                    {cargo.titular}
                  </p>
                )}
                <p className={`text-white text-opacity-75 ${isRoot ? 'text-sm' : 'text-xs'} mt-1`}>
                  {cargo.descripcion}
                </p>
              </div>
            </div>

            {/* Botón de expansión */}
            {hasChildren && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleNode(cargo.id);
                }}
                className={`
                  absolute -bottom-3 left-1/2 transform -translate-x-1/2 
                  w-6 h-6 bg-white border-2 border-gray-300 rounded-full 
                  flex items-center justify-center hover:bg-gray-50 transition-all duration-200
                  ${isExpanded ? 'bg-blue-50 border-blue-300' : ''}
                `}
              >
                <svg 
                  className={`w-3 h-3 text-gray-600 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            )}
          </div>
        </div>

        {/* Líneas conectoras y nodos hijos */}
        {hasChildren && isExpanded && (
          <div className="relative">
            {/* Línea vertical */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-gray-300"></div>
            
            {/* Contenedor de hijos */}
            <div className="flex items-start justify-center mt-8 space-x-8">
              {children.map((childNode, index) => (
                <div key={childNode.cargo.id} className="relative">
                  {/* Línea horizontal */}
                  {index === 0 && children.length > 1 && (
                    <div className="absolute -top-8 left-1/2 right-0 h-0.5 bg-gray-300" style={{
                      width: `${(children.length - 1) * 280 + 140}px`,
                      transform: 'translateX(-50%)'
                    }}></div>
                  )}
                  
                  {/* Línea vertical hacia el hijo */}
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-gray-300"></div>
                  
                  {/* Render del nodo hijo */}
                  {renderNode(childNode)}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  // Obtener información del nodo seleccionado
  const selectedCargo = selectedNode ? estructuraOrganizacional.find(c => c.id === selectedNode) : null;

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-12 text-center">
        <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
          Estructura Organizacional 2024
        </div>
        
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Organigrama <span className="text-blue-600">Institucional</span>
        </h2>
        
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto mb-6"></div>
        
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Estructura jerárquica y funcional de ELECTROHUILA S.A. E.S.P. 
          Haz clic en cualquier cargo para ver más detalles.
        </p>
      </div>

      {/* Organigrama interactivo */}
      <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 overflow-x-auto">
        <div className="min-w-max">
          {orgChart.map(node => renderNode(node, true))}
        </div>
      </div>

      {/* Panel de detalles del cargo seleccionado */}
      {selectedCargo && (
        <div className={`${selectedCargo.bgColor} border-2 border-opacity-50 rounded-2xl p-8 mb-8 transition-all duration-300`}>
          <div className="flex items-start space-x-6">
            <div className={`w-16 h-16 bg-gradient-to-r ${selectedCargo.color} rounded-full flex items-center justify-center flex-shrink-0 shadow-lg`}>
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{selectedCargo.nombre}</h3>
              {selectedCargo.titular && (
                <p className="text-lg font-semibold text-gray-700 mb-3">👤 {selectedCargo.titular}</p>
              )}
              <p className="text-gray-600 mb-4 leading-relaxed">{selectedCargo.descripcion}</p>
              
              {selectedCargo.departamentos && (
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Departamentos y Divisiones:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {selectedCargo.departamentos.map((dept, index) => (
                      <div key={index} className="bg-white rounded-lg p-3 shadow-sm border border-gray-200">
                        <div className="flex items-center space-x-2">
                          <div className={`w-3 h-3 bg-gradient-to-r ${selectedCargo.color} rounded-full`}></div>
                          <span className="text-sm font-medium text-gray-700">{dept}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            <button
              onClick={() => setSelectedNode(null)}
              className="text-gray-400 hover:text-gray-600 transition-colors p-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Leyenda y estadísticas */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Leyenda */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
          <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
            <div className="w-6 h-6 bg-blue-600 rounded-lg mr-3"></div>
            Niveles Organizacionales
          </h4>
          
          <div className="space-y-4">
            {[
              { label: 'Dirección Ejecutiva', color: 'from-blue-600 to-blue-700', description: 'Gerencia General' },
              { label: 'Nivel Directivo', color: 'from-green-500 to-red-600', description: 'Subgerencias y Asesorías' },
              { label: 'Nivel Operativo', color: 'from-green-400 to-orange-400', description: 'Divisiones y Departamentos' }
            ].map((nivel, index) => (
              <div key={index} className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                <div className={`w-6 h-6 bg-gradient-to-r ${nivel.color} rounded-lg shadow-sm`}></div>
                <div>
                  <span className="font-semibold text-gray-900">{nivel.label}</span>
                  <p className="text-sm text-gray-600">{nivel.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Estadísticas */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
          <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
            <div className="w-6 h-6 bg-green-600 rounded-lg mr-3"></div>
            Composición Organizacional
          </h4>
          
          <div className="grid grid-cols-2 gap-6">
            {[
              { valor: '1', label: 'Gerencia General', color: 'text-blue-600' },
              { valor: '4', label: 'Subgerencias', color: 'text-green-600' },
              { valor: '12+', label: 'Divisiones', color: 'text-purple-600' },
              { valor: '2024', label: 'Actualizado', color: 'text-orange-600' }
            ].map((stat, index) => (
              <div key={index} className="text-center p-4 bg-gray-50 rounded-xl">
                <div className={`text-2xl font-bold ${stat.color} mb-1`}>{stat.valor}</div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-sm text-blue-700">
              💡 <strong>Tip:</strong> Haz clic en cualquier cargo para expandir/contraer sus dependencias 
              y obtener información detallada sobre sus funciones.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white text-center">
        <h5 className="text-2xl font-bold mb-4">¿Necesitas el organigrama en formato PDF?</h5>
        <p className="text-blue-100 mb-6 text-lg">
          Descarga la versión completa de nuestra estructura organizacional en formato imprimible.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a 
            href="/documentos/organizacional/organigrama-electrohuila-2024.pdf" 
            className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Descargar Organigrama
          </a>
          <a 
            href="/institucional/equipo-directivo" 
            className="inline-flex items-center px-6 py-3 bg-transparent border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
            </svg>
            Conocer Equipo Directivo
          </a>
        </div>
      </div>
    </div>
  );
};

export default Organigrama;