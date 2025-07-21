"use client";
import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { ChevronRight, Download, Phone, Mail, MapPin, CreditCard, AlertCircle, Eye, Calculator, FileText, Zap } from 'lucide-react';

export default function ConoceTuFacturaPage() {
  const [selectedSection, setSelectedSection] = useState('codigo-cuenta');
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  // Datos de las secciones de la factura
  const facturaSections = [
    {
      id: 'codigo-cuenta',
      title: 'Código de Cuenta NIU',
      icon: <FileText size={20} />,
      description: 'Para cualquier consulta y pago electrónico',
      content: 'El NIU (Número de Identificación del Usuario) es tu código único de identificación en ElectroHuila. Lo necesitas para todos los trámites, consultas y pagos de tu factura.',
      highlight: 'Este número aparece en la parte superior derecha de tu factura',
      color: 'blue'
    },
    {
      id: 'pago-total',
      title: 'Total a Pagar',
      icon: <CreditCard size={20} />,
      description: 'Valor total de tu factura de energía',
      content: 'Incluye el valor de la energía consumida, más los impuestos, contribuciones y otros servicios como aseo público si aplica.',
      highlight: 'Puedes pagar el total o hacer un pago mínimo',
      color: 'green'
    },
    {
      id: 'fechas-importantes',
      title: 'Fechas Importantes',
      icon: <AlertCircle size={20} />,
      description: 'Vencimiento y fechas clave',
      content: 'Tu factura incluye la fecha de emisión, fecha límite de pago y fecha de suspensión del servicio en caso de no pago.',
      highlight: 'Paga antes del vencimiento para evitar intereses',
      color: 'orange'
    },
    {
      id: 'consumo-energia',
      title: 'Consumo de Energía',
      icon: <Zap size={20} />,
      description: 'Detalles de tu consumo mensual',
      content: 'Muestra tu consumo actual en kWh, el histórico de consumos anteriores y el promedio de consumo para que puedas comparar.',
      highlight: 'Revisa tu historial para identificar cambios en el consumo',
      color: 'yellow'
    },
    {
      id: 'costo-unitario',
      title: 'Costo Unitario del Servicio',
      icon: <Calculator size={20} />,
      description: 'Desglose de costos por kWh',
      content: 'Incluye los componentes de ElectroHuila (Comercialización, Distribución) y del Mercado de Energía Mayorista (Generación, Transmisión, Restricciones, Pérdidas).',
      highlight: 'Cada componente tiene un costo específico regulado',
      color: 'purple'
    },
    {
      id: 'datos-cuenta',
      title: 'Datos de tu Cuenta',
      icon: <Eye size={20} />,
      description: 'Información técnica de tu servicio',
      content: 'Incluye clase de servicio, estrato, zona, nivel de tensión, carga instalada, nodo y tipo de liquidación de tu conexión eléctrica.',
      highlight: 'Esta información determina las tarifas aplicables',
      color: 'indigo'
    }
  ];

  // Datos de contacto y servicios
  const contactInfo = [
    {
      title: 'Línea Gratuita de Atención',
      value: '01 8000 952 115',
      type: 'phone',
      description: 'Reporta cualquier novedad relacionada con la prestación del servicio',
      available: '24/7'
    },
    {
      title: 'WhatsApp',
      value: '313 435 4436',
      type: 'whatsapp',
      description: 'Atención personalizada por chat',
      available: 'Lun-Vie 7:00 AM - 4:00 PM'
    },
    {
      title: 'PQR - Radicación',
      value: 'radicacion@electrohuila.co',
      type: 'email',
      description: 'Para peticiones, quejas, reclamos y sugerencias',
      available: 'Respuesta en 24-48 horas'
    },
    {
      title: 'Emergencias',
      value: '115',
      type: 'emergency',
      description: 'Reporta daños y emergencias eléctricas',
      available: '24/7'
    }
  ];

  // Puntos de atención
  const sedesAtencion = [
    {
      nombre: 'Sede Administrativa',
      direccion: 'KM 1 VIA NEIVA PALERMO - COMPLEJO ECOLÓGICO EL BOTE',
      telefono: '(608) 8664600',
      ciudad: 'Neiva'
    },
    {
      nombre: 'Sede Neiva',
      direccion: 'Carrera 18 calle 9 esquina - BARRIO CALIXTO',
      ciudad: 'Neiva'
    },
    {
      nombre: 'Sede Garzón',
      direccion: 'Calle 8 No. 7-54 - BARRIO CENTRO',
      ciudad: 'Garzón'
    },
    {
      nombre: 'Sede La Plata',
      direccion: 'Calle 10 No. 6-20 - BARRIO SAN RAFAEL',
      ciudad: 'La Plata'
    }
  ];

  const openImageModal = (imageSrc) => {
    setSelectedImage(imageSrc);
    setIsImageModalOpen(true);
  };

  const getColorClasses = (color) => {
    const colors = {
      blue: 'border-blue-200 bg-blue-50 text-blue-700',
      green: 'border-green-200 bg-green-50 text-green-700',
      orange: 'border-orange-200 bg-orange-50 text-orange-700',
      yellow: 'border-yellow-200 bg-yellow-50 text-yellow-700',
      purple: 'border-purple-200 bg-purple-50 text-purple-700',
      indigo: 'border-indigo-200 bg-indigo-50 text-indigo-700'
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Conoce tu Factura
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Descubre cada detalle de tu factura de energía y aprende a gestionarla de manera sencilla y eficiente
            </p>
            
            {/* Botones de acción */}
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="https://pagos.electrohuila.com.co/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
              >
                <CreditCard className="w-5 h-5 mr-2" />
                Pagar Factura
              </a>
              <a 
                href="https://enlinea.electrohuila.com.co/generate-invoice/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors"
              >
                <Download className="w-5 h-5 mr-2" />
                Descargar Factura
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-blue-600 transition-colors">
            Inicio
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-900">Conoce tu Factura</span>
        </nav>

        {/* Imagen de la factura */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Tu Factura ElectroHuila</h2>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="text-center">
              <img 
                src="/images/factura.jpg" 
                alt="Factura ElectroHuila - Ejemplo"
                className="mx-auto rounded-lg border border-gray-200 cursor-pointer hover:shadow-lg transition-shadow"
                onClick={() => openImageModal('/api/placeholder/800/600')}
                style={{ maxWidth: '100%', height: 'auto' }}
              />
              <p className="text-sm text-gray-600 mt-4">
                Haz clic en la imagen para verla en tamaño completo
              </p>
            </div>
          </div>
        </div>

        {/* Secciones de la factura */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Menú lateral */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Secciones de tu Factura
              </h3>
              <nav className="space-y-2">
                {facturaSections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setSelectedSection(section.id)}
                    className={`w-full flex items-center p-3 rounded-lg transition-colors text-left ${
                      selectedSection === section.id
                        ? 'bg-blue-50 text-blue-700 border-l-4 border-blue-500'
                        : 'hover:bg-gray-50 text-gray-700'
                    }`}
                  >
                    <div className={`mr-3 ${selectedSection === section.id ? 'text-blue-600' : 'text-gray-400'}`}>
                      {section.icon}
                    </div>
                    <div>
                      <div className="font-medium">{section.title}</div>
                      <div className="text-sm opacity-75">{section.description}</div>
                    </div>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Contenido principal */}
          <div className="lg:col-span-2">
            {facturaSections.map((section) => (
              <div
                key={section.id}
                className={`bg-white rounded-lg shadow-md p-8 ${
                  selectedSection === section.id ? 'block' : 'hidden'
                }`}
              >
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-full mr-4 ${getColorClasses(section.color)}`}>
                    {section.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{section.title}</h3>
                    <p className="text-gray-600">{section.description}</p>
                  </div>
                </div>

                <div className="prose max-w-none">
                  <p className="text-gray-700 text-lg leading-relaxed mb-4">
                    {section.content}
                  </p>
                  
                  {section.highlight && (
                    <div className={`p-4 rounded-lg border-l-4 ${getColorClasses(section.color)}`}>
                      <p className="font-semibold">💡 Tip importante:</p>
                      <p>{section.highlight}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Información de contacto */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Canales de Atención
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((contact, index) => (
              <div key={index} className="text-center p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <div className="mb-3">
                  {contact.type === 'phone' && <Phone className="w-8 h-8 text-blue-600 mx-auto" />}
                  {contact.type === 'whatsapp' && <Phone className="w-8 h-8 text-green-600 mx-auto" />}
                  {contact.type === 'email' && <Mail className="w-8 h-8 text-orange-600 mx-auto" />}
                  {contact.type === 'emergency' && <AlertCircle className="w-8 h-8 text-red-600 mx-auto" />}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{contact.title}</h3>
                <p className="text-lg font-bold text-blue-600 mb-2">{contact.value}</p>
                <p className="text-sm text-gray-600 mb-1">{contact.description}</p>
                <p className="text-xs text-gray-500">{contact.available}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Puntos de atención */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Puntos de Atención Presencial
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {sedesAtencion.map((sede, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">{sede.nombre}</h3>
                    <p className="text-gray-700 mb-1">{sede.direccion}</p>
                    <p className="text-blue-600 font-medium mb-2">{sede.ciudad}</p>
                    {sede.telefono && (
                      <p className="text-sm text-gray-600">
                        <Phone className="w-4 h-4 inline mr-1" />
                        {sede.telefono}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <p className="text-blue-800">
              <strong>Horario de atención:</strong> Lunes a Viernes de 7:00 AM a 4:00 PM
            </p>
          </div>
        </div>
      </div>

      {/* Modal para imagen */}
      {isImageModalOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setIsImageModalOpen(false)}
        >
          <div className="relative max-w-4xl max-h-full">
            <img 
              src={selectedImage} 
              alt="Factura ElectroHuila - Ampliada"
              className="max-w-full max-h-full object-contain"
            />
            <button
              onClick={() => setIsImageModalOpen(false)}
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-opacity"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}