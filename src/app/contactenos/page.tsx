'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, Send, ChevronDown, ChevronRight } from 'lucide-react';

// Interfaces TypeScript
interface FormData {
  nombre: string;
  email: string;
  telefono: string;
  asunto: string;
  mensaje: string;
  tipoConsulta: string;
}

interface FormErrors {
  nombre?: string;
  email?: string;
  telefono?: string;
  asunto?: string;
  mensaje?: string;
  tipoConsulta?: string;
}

interface ContactInfo {
  title: string;
  items: Array<{
    icon: React.ReactNode;
    label: string;
    value: string;
    link?: string;
  }>;
}

export default function ContactoPage() {
  // Estado para el formulario
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    email: '',
    telefono: '',
    asunto: '',
    mensaje: '',
    tipoConsulta: 'general'
  });

  // Estado para errores
  const [errors, setErrors] = useState<FormErrors>({});

  // Estado para el envío
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Estado para acordeón de información de contacto
  const [expandedContact, setExpandedContact] = useState<string>('principal');

  // Manejar cambios en el formulario
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Limpiar error cuando el usuario empiece a escribir
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  // Validar formulario
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.nombre.trim()) {
      newErrors.nombre = 'El nombre es requerido';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Formato de email inválido';
    }

    if (!formData.telefono.trim()) {
      newErrors.telefono = 'El teléfono es requerido';
    } else if (!/^\d{10}$/.test(formData.telefono.replace(/\s/g, ''))) {
      newErrors.telefono = 'El teléfono debe tener 10 dígitos';
    }

    if (!formData.asunto.trim()) {
      newErrors.asunto = 'El asunto es requerido';
    }

    if (!formData.mensaje.trim()) {
      newErrors.mensaje = 'El mensaje es requerido';
    } else if (formData.mensaje.length < 10) {
      newErrors.mensaje = 'El mensaje debe tener al menos 10 caracteres';
    }

    if (!formData.tipoConsulta) {
      newErrors.tipoConsulta = 'Seleccione un tipo de consulta';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Manejar envío del formulario
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Aquí iría la lógica de envío del formulario
      // Por ejemplo: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) })
      
      // Simulación de envío
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSubmitStatus('success');
      
      // Limpiar formulario
      setFormData({
        nombre: '',
        email: '',
        telefono: '',
        asunto: '',
        mensaje: '',
        tipoConsulta: 'general'
      });
      
    } catch (error) {
      console.error('Error enviando formulario:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Información de contacto
  const contactInfo: ContactInfo[] = [
    {
      title: 'Oficina Principal',
      items: [
        {
          icon: <MapPin className="w-5 h-5" />,
          label: 'Dirección',
          value: 'Calle 7 No. 8-09 Neiva, Huila',
          link: 'https://maps.google.com/?q=Calle+7+No.+8-09+Neiva+Huila'
        },
        {
          icon: <Phone className="w-5 h-5" />,
          label: 'Teléfono',
          value: '(608) 8664600',
          link: 'tel:+576086664600'
        },
        {
          icon: <Mail className="w-5 h-5" />,
          label: 'Email',
          value: 'servicioalclienteeh@electrohuila.co',
          link: 'mailto:servicioalclienteeh@electrohuila.co'
        },
        {
          icon: <Clock className="w-5 h-5" />,
          label: 'Horarios',
          value: 'Lun - Vie: 7:30 AM - 5:30 PM'
        }
      ]
    },
    {
      title: 'Puntos de Atención',
      items: [
        {
          icon: <MapPin className="w-5 h-5" />,
          label: 'Garzón',
          value: 'Calle 11 No. 13-45',
          link: 'https://maps.google.com/?q=Calle+11+No.+13-45+Garzon+Huila'
        },
        {
          icon: <MapPin className="w-5 h-5" />,
          label: 'La Plata',
          value: 'Carrera 6 No. 4-08',
          link: 'https://maps.google.com/?q=Carrera+6+No.+4-08+La+Plata+Huila'
        },
        {
          icon: <MapPin className="w-5 h-5" />,
          label: 'Pitalito',
          value: 'Calle 4 No. 5-19',
          link: 'https://maps.google.com/?q=Calle+4+No.+5-19+Pitalito+Huila'
        }
      ]
    },
    {
      title: 'Líneas Especializadas',
      items: [
        {
          icon: <Phone className="w-5 h-5" />,
          label: 'Emergencias 24/7',
          value: '115',
          link: 'tel:115'
        },
        {
          icon: <Phone className="w-5 h-5" />,
          label: 'Servicio al Cliente',
          value: '(608) 8664600 Ext. 1000',
          link: 'tel:+576086664600'
        },
        {
          icon: <Mail className="w-5 h-5" />,
          label: 'PQR',
          value: 'radicacion@electrohuila.co',
          link: 'mailto:radicacion@electrohuila.co'
        }
      ]
    }
  ];

  // Tipos de consulta
  const tiposConsulta = [
    { value: 'general', label: 'Consulta General' },
    { value: 'facturacion', label: 'Facturación y Pagos' },
    { value: 'tecnica', label: 'Soporte Técnico' },
    { value: 'comercial', label: 'Información Comercial' },
    { value: 'pqr', label: 'PQR - Petición, Queja o Reclamo' },
    { value: 'nuevo_servicio', label: 'Nuevo Servicio' },
    { value: 'suspension', label: 'Suspensión del Servicio' },
    { value: 'otro', label: 'Otro' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-4">
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="flex items-center space-x-4">
                <li>
                  <Link href="/" className="text-gray-500 hover:text-blue-600 transition-colors">
                    Inicio
                  </Link>
                </li>
                <li>
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                </li>
                <li>
                  <span className="text-gray-900 font-medium">Contáctenos</span>
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Contáctenos</h1>
            <p className="text-xl opacity-90">
              Estamos aquí para ayudarte. Ponte en contacto con nosotros.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Formulario de contacto */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Envíanos un mensaje</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Tipo de consulta */}
              <div>
                <label htmlFor="tipoConsulta" className="block text-sm font-medium text-gray-700 mb-2">
                  Tipo de consulta *
                </label>
                <select
                  id="tipoConsulta"
                  name="tipoConsulta"
                  value={formData.tipoConsulta}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                    errors.tipoConsulta ? 'border-red-500' : 'border-gray-300'
                  }`}
                >
                  <option value="">Selecciona un tipo de consulta</option>
                  {tiposConsulta.map(tipo => (
                    <option key={tipo.value} value={tipo.value}>
                      {tipo.label}
                    </option>
                  ))}
                </select>
                {errors.tipoConsulta && (
                  <p className="mt-1 text-sm text-red-600">{errors.tipoConsulta}</p>
                )}
              </div>

              {/* Nombre */}
              <div>
                <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-2">
                  Nombre completo *
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                    errors.nombre ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Tu nombre completo"
                />
                {errors.nombre && (
                  <p className="mt-1 text-sm text-red-600">{errors.nombre}</p>
                )}
              </div>

              {/* Email y Teléfono */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="tu@email.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-2">
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                      errors.telefono ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="300 123 4567"
                  />
                  {errors.telefono && (
                    <p className="mt-1 text-sm text-red-600">{errors.telefono}</p>
                  )}
                </div>
              </div>

              {/* Asunto */}
              <div>
                <label htmlFor="asunto" className="block text-sm font-medium text-gray-700 mb-2">
                  Asunto *
                </label>
                <input
                  type="text"
                  id="asunto"
                  name="asunto"
                  value={formData.asunto}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                    errors.asunto ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Resumen de tu consulta"
                />
                {errors.asunto && (
                  <p className="mt-1 text-sm text-red-600">{errors.asunto}</p>
                )}
              </div>

              {/* Mensaje */}
              <div>
                <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensaje *
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleInputChange}
                  rows={5}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-vertical ${
                    errors.mensaje ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Describe tu consulta o solicitud en detalle..."
                />
                {errors.mensaje && (
                  <p className="mt-1 text-sm text-red-600">{errors.mensaje}</p>
                )}
                <p className="mt-1 text-sm text-gray-500">
                  {formData.mensaje.length}/500 caracteres
                </p>
              </div>

              {/* Botón de envío */}
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex items-center justify-center px-6 py-3 border border-transparent rounded-lg text-white font-medium transition-colors ${
                    isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-blue-500'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Enviar mensaje
                    </>
                  )}
                </button>
              </div>

              {/* Estados de envío */}
              {submitStatus === 'success' && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-700 font-medium">
                    ✅ Mensaje enviado exitosamente. Te responderemos pronto.
                  </p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-700 font-medium">
                    ❌ Error al enviar el mensaje. Por favor, intenta nuevamente.
                  </p>
                </div>
              )}
            </form>
          </div>

          {/* Información de contacto */}
          <div className="space-y-6">
            {contactInfo.map((section, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg">
                <button
                  onClick={() => setExpandedContact(
                    expandedContact === section.title ? '' : section.title
                  )}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-900">
                    {section.title}
                  </h3>
                  {expandedContact === section.title ? (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  ) : (
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  )}
                </button>

                {expandedContact === section.title && (
                  <div className="px-6 pb-6 space-y-4">
                    {section.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-start space-x-3">
                        <div className="text-blue-600 mt-1">
                          {item.icon}
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-gray-700">
                            {item.label}
                          </p>
                          {item.link ? (
                            <a
                              href={item.link}
                              className="text-blue-600 hover:text-blue-800 transition-colors"
                              target={item.link.startsWith('http') ? '_blank' : undefined}
                              rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className="text-gray-600">{item.value}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Información adicional */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">
                💡 ¿Sabías que...?
              </h3>
              <ul className="text-blue-700 space-y-2 text-sm">
                <li>• Puedes pagar tu factura en línea las 24 horas</li>
                <li>• Ofrecemos servicio de emergencia 24/7 llamando al 115</li>
                <li>• Tienes 15 días calendario para presentar recursos de reposición</li>
                <li>• Puedes consultar el estado de tu solicitud en línea</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Mapa o información adicional */}
        <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Visítanos en nuestra oficina principal
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                ElectroHuila S.A. E.S.P.
              </h3>
              <div className="space-y-3 text-gray-600">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <span>Calle 7 No. 8-09, Neiva, Huila, Colombia</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-blue-600" />
                  <span>Conmutador: (608) 8664600</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-blue-600" />
                  <span>Lunes a Viernes: 7:30 AM - 5:30 PM</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <span>servicioalclienteeh@electrohuila.co</span>
                </div>
              </div>
              
              <div className="mt-6">
                <Link
                  href="https://maps.google.com/?q=Calle+7+No.+8-09+Neiva+Huila"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <MapPin className="w-4 h-4 mr-2" />
                  Ver en Google Maps
                </Link>
              </div>
            </div>
            
            <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center">
              <p className="text-gray-500">
                [Aquí iría integrado el mapa de Google Maps]
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}