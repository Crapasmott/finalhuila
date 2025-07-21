import { Tree, TreeNode } from 'react-organizational-chart';

export default function Organigrama() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Organigrama Institucional</h2>
        <p className="text-lg text-gray-600">Estructura jerárquica de ELECTROHUILA S.A. E.S.P.</p>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-8 overflow-x-auto">
        <Tree 
          label={
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg shadow-lg border-2 border-blue-200">
              <div className="text-center">
                <h3 className="text-lg font-bold">Gerencia General</h3>
                <p className="text-blue-100 text-sm">Dirección Ejecutiva</p>
              </div>
            </div>
          }
          lineWidth="2px"
          lineColor="#3b82f6"
          lineBorderRadius="10px"
        >
          <TreeNode 
            label={
              <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-lg shadow-md">
                <div className="text-center">
                  <h4 className="font-semibold text-sm">Subgerencia de Distribución</h4>
                  <p className="text-green-100 text-xs">Infraestructura</p>
                </div>
              </div>
            }
          >
            <TreeNode 
              label={
                <div className="bg-green-50 border border-green-200 px-4 py-2 rounded-lg shadow-sm">
                  <span className="text-sm text-green-800 font-medium">División Ingeniería de Proyectos</span>
                </div>
              } 
            />
            <TreeNode 
              label={
                <div className="bg-green-50 border border-green-200 px-4 py-2 rounded-lg shadow-sm">
                  <span className="text-sm text-green-800 font-medium">División Operación y Mantenimiento</span>
                </div>
              } 
            />
          </TreeNode>

          <TreeNode 
            label={
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-6 py-3 rounded-lg shadow-md">
                <div className="text-center">
                  <h4 className="font-semibold text-sm">Subgerencia Comercial</h4>
                  <p className="text-purple-100 text-xs">Ventas y Clientes</p>
                </div>
              </div>
            }
          >
            <TreeNode 
              label={
                <div className="bg-purple-50 border border-purple-200 px-4 py-2 rounded-lg shadow-sm">
                  <span className="text-sm text-purple-800 font-medium">División Gestión Comercial</span>
                </div>
              } 
            />
            <TreeNode 
              label={
                <div className="bg-purple-50 border border-purple-200 px-4 py-2 rounded-lg shadow-sm">
                  <span className="text-sm text-purple-800 font-medium">División Atención al Cliente</span>
                </div>
              } 
            />
          </TreeNode>

          <TreeNode 
            label={
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-lg shadow-md">
                <div className="text-center">
                  <h4 className="font-semibold text-sm">Subgerencia Administrativa</h4>
                  <p className="text-orange-100 text-xs">Gestión y Finanzas</p>
                </div>
              </div>
            }
          >
            <TreeNode 
              label={
                <div className="bg-orange-50 border border-orange-200 px-4 py-2 rounded-lg shadow-sm">
                  <span className="text-sm text-orange-800 font-medium">División Recursos Humanos</span>
                </div>
              } 
            />
            <TreeNode 
              label={
                <div className="bg-orange-50 border border-orange-200 px-4 py-2 rounded-lg shadow-sm">
                  <span className="text-sm text-orange-800 font-medium">División Financiera</span>
                </div>
              } 
            />
          </TreeNode>

          <TreeNode 
            label={
              <div className="bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3 rounded-lg shadow-md">
                <div className="text-center">
                  <h4 className="font-semibold text-sm">Asesoría Legal</h4>
                  <p className="text-red-100 text-xs">Cumplimiento</p>
                </div>
              </div>
            }
          >
            <TreeNode 
              label={
                <div className="bg-red-50 border border-red-200 px-4 py-2 rounded-lg shadow-sm">
                  <span className="text-sm text-red-800 font-medium">Contratos y Convenios</span>
                </div>
              } 
            />
            <TreeNode 
              label={
                <div className="bg-red-50 border border-red-200 px-4 py-2 rounded-lg shadow-sm">
                  <span className="text-sm text-red-800 font-medium">Normatividad</span>
                </div>
              } 
            />
          </TreeNode>
        </Tree>

        {/* Leyenda */}
        <div className="mt-8 bg-gray-50 rounded-lg p-6 border border-gray-200">
          <h4 className="text-lg font-semibold text-gray-900 mb-4 text-center">Estructura Organizacional</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-gradient-to-r from-blue-600 to-blue-700 rounded"></div>
              <span className="text-sm text-gray-700">Dirección Ejecutiva</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-gradient-to-r from-green-500 to-green-600 rounded"></div>
              <span className="text-sm text-gray-700">Distribución</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-gradient-to-r from-purple-500 to-purple-600 rounded"></div>
              <span className="text-sm text-gray-700">Comercial</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-gradient-to-r from-orange-500 to-orange-600 rounded"></div>
              <span className="text-sm text-gray-700">Administrativa</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}