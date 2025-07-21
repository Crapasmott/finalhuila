'use client';

import React, { useState, useEffect } from 'react';

// Interfaces TypeScript (renombradas para evitar conflictos)
interface PQRFormData {
  tipoSolicitud: string;
  descripcion: string;
  departamento: string;
  municipio: string;
  deseaContacto: string;
  telefono?: string;
  correo?: string;
  captcha: string;
  [key: string]: any; // Para campos adicionales
}

export default function FormularioPQRAnonimo(): React.JSX.Element {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitSuccess, setSubmitSuccess] = useState<boolean>(false);
  const [trackingCode, setTrackingCode] = useState<string>('');
  const [captchaValue, setCaptchaValue] = useState<string>('');
  const [captchaError, setCaptchaError] = useState<boolean>(false);
  const [formData, setFormData] = useState<PQRFormData>({
    tipoSolicitud: '',
    descripcion: '',
    departamento: 'Huila',
    municipio: '',
    deseaContacto: '',
    telefono: '',
    correo: '',
    captcha: ''
  });

  // Generar CAPTCHA simple
  const generateCaptcha = (): string => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < 6; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  };

  // Verificar CAPTCHA
  const verifyCaptcha = (inputValue: string): boolean => {
    return inputValue.toUpperCase() === captchaValue.toUpperCase();
  };

  // Generar CAPTCHA inicial
  useEffect(() => {
    setCaptchaValue(generateCaptcha());
  }, []);

  // Manejar cambios en inputs
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>): void => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Manejar envío del formulario
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    
    // Validaciones básicas
    if (!formData.tipoSolicitud || !formData.descripcion || !formData.municipio) {
      alert('Por favor completa todos los campos obligatorios');
      return;
    }

    // Verificar CAPTCHA antes de enviar
    if (!verifyCaptcha(formData.captcha)) {
      setCaptchaError(true);
      setCaptchaValue(generateCaptcha());
      setFormData(prev => ({ ...prev, captcha: '' }));
      return;
    }
    
    setCaptchaError(false);
    setIsSubmitting(true);
    
    try {
      // Generar código de seguimiento
      const randomCode = 'PQR-' + Math.random().toString(36).substring(2, 10).toUpperCase();
      
      // Simular envío (reemplaza con tu lógica real)
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Datos del formulario:', {
        ...formData,
        trackingCode: randomCode,
        fechaEnvio: new Date().toLocaleString()
      });
      
      setTrackingCode(randomCode);
      setSubmitSuccess(true);
      
      // Limpiar formulario
      setFormData({
        tipoSolicitud: '',
        descripcion: '',
        departamento: 'Huila',
        municipio: '',
        deseaContacto: '',
        telefono: '',
        correo: '',
        captcha: ''
      });
      
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      alert('Hubo un error al enviar tu solicitud. Por favor, intenta nuevamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Formulario PQR Anónimo
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Presenta tu Petición, Queja o Reclamo de forma anónima. 
            Tu identidad será protegida y recibirás un código de seguimiento.
          </p>
        </div>

        {submitSuccess ? (
          // Mensaje de éxito
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">¡Solicitud Enviada!</h2>
            <p className="text-gray-600 mb-6">
              Tu PQR ha sido enviada exitosamente. Guarda este código de seguimiento:
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <p className="text-sm text-blue-600 mb-1">Código de Seguimiento:</p>
              <p className="text-xl font-bold text-blue-800">{trackingCode}</p>
            </div>
            <button
              onClick={() => {
                setSubmitSuccess(false);
                setTrackingCode('');
                setCaptchaValue(generateCaptcha());
              }}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Enviar Nueva PQR
            </button>
          </div>
        ) : (
          // Formulario
          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8 space-y-6">
            {/* Tipo de Solicitud */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tipo de Solicitud *
              </label>
              <select
                name="tipoSolicitud"
                value={formData.tipoSolicitud}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Selecciona una opción</option>
                <option value="peticion">Petición</option>
                <option value="queja">Queja</option>
                <option value="reclamo">Reclamo</option>
                <option value="sugerencia">Sugerencia</option>
                <option value="felicitacion">Felicitación</option>
              </select>
            </div>

            {/* Descripción */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Descripción detallada *
              </label>
              <textarea
                name="descripcion"
                value={formData.descripcion}
                onChange={handleInputChange}
                required
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Describe detalladamente tu solicitud..."
              />
            </div>

            {/* Ubicación */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Departamento *
                </label>
                <input
                  name="departamento"
                  value={formData.departamento}
                  onChange={handleInputChange}
                  type="text"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Municipio *
                </label>
                <input
                  name="municipio"
                  value={formData.municipio}
                  onChange={handleInputChange}
                  type="text"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Ingresa el municipio"
                />
              </div>
            </div>

            {/* Desea contacto */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                ¿Deseas que te contactemos? *
              </label>
              <div className="flex space-x-4">
                <label className="flex items-center">
                  <input
                    name="deseaContacto"
                    value="si"
                    checked={formData.deseaContacto === 'si'}
                    onChange={handleInputChange}
                    type="radio"
                    required
                    className="text-blue-600 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">Sí</span>
                </label>
                <label className="flex items-center">
                  <input
                    name="deseaContacto"
                    value="no"
                    checked={formData.deseaContacto === 'no'}
                    onChange={handleInputChange}
                    type="radio"
                    required
                    className="text-blue-600 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">No (anónimo)</span>
                </label>
              </div>
            </div>

            {/* Información de contacto (solo si desea contacto) */}
            {formData.deseaContacto === 'si' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Teléfono
                  </label>
                  <input
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleInputChange}
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Ingresa tu teléfono"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Correo electrónico
                  </label>
                  <input
                    name="correo"
                    value={formData.correo}
                    onChange={handleInputChange}
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Ingresa tu correo"
                  />
                </div>
              </div>
            )}

            {/* CAPTCHA */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Código de verificación *
              </label>
              <div className="flex items-center space-x-4">
                <div className="bg-gray-100 px-4 py-3 rounded-lg border border-gray-300 font-mono text-lg tracking-wider">
                  {captchaValue}
                </div>
                <input
                  name="captcha"
                  value={formData.captcha}
                  onChange={handleInputChange}
                  type="text"
                  required
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Ingresa el código"
                />
                <button
                  type="button"
                  onClick={() => {
                    setCaptchaValue(generateCaptcha());
                    setFormData(prev => ({ ...prev, captcha: '' }));
                    setCaptchaError(false);
                  }}
                  className="px-4 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
                >
                  🔄
                </button>
              </div>
              {captchaError && (
                <p className="mt-1 text-sm text-red-600">Código de verificación incorrecto</p>
              )}
            </div>

            {/* Botón de envío */}
            <div className="pt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Enviando...
                  </span>
                ) : (
                  'Enviar PQR'
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}