'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, Send, ChevronDown, ChevronRight } from 'lucide-react';

export default function ContactoPage() {
    // Estado para el formulario
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        telefono: '',
        asunto: '',
        mensaje: '',
        tipoPQRSD: 'Sede El Bote',
        aceptaPolitica: false
    });

    // Estado para controlar errores de validación
    const [errors, setErrors] = useState({});

    // Estado para controlar el mensaje de éxito
    const [successMessage, setSuccessMessage] = useState('');

    // Estado para controlar el envío
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Estado para controlar las oficinas expandidas
    const [expandedOffices, setExpandedOffices] = useState([]);

    // Función para manejar el cambio en los campos del formulario
    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });

        // Limpiar el error del campo si existe
        if (errors[name]) {
            setErrors({
                ...errors,
                [name]: null
            });
        }
    };

    // Función para validar el formulario
    const validateForm = () => {
        const newErrors = {};

        if (!formData.nombre.trim()) {
            newErrors.nombre = 'El nombre es requerido';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'El correo electrónico es requerido';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Ingrese un correo electrónico válido';
        }

        if (!formData.telefono.trim()) {
            newErrors.telefono = 'El teléfono es requerido';
        }

        if (!formData.asunto.trim()) {
            newErrors.asunto = 'El asunto es requerido';
        }

        if (!formData.mensaje.trim()) {
            newErrors.mensaje = 'El mensaje es requerido';
        }

        if (!formData.aceptaPolitica) {
            newErrors.aceptaPolitica = 'Debe aceptar la política de tratamiento de datos';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Función para enviar email usando Formspree (Método correcto)
    const sendEmailFormspree = async (data) => {
        try {
            // Crear FormData como lo espera Formspree
            const formData = new FormData();
            
            // Campos principales que Formspree reconoce
            formData.append('email', data.email);
            formData.append('message', `
Nuevo mensaje desde el sitio web de ElectroHuila:

Nombre: ${data.nombre}
Correo: ${data.email}
Teléfono: ${data.telefono}
Sede: ${data.tipoPQRSD}
Asunto: ${data.asunto}

Mensaje:
${data.mensaje}

---
Formulario enviado desde: ${window.location.href}
Fecha: ${new Date().toLocaleString('es-CO', { timeZone: 'America/Bogota' })}
            `);
            
            // Campos adicionales
            formData.append('name', data.nombre);
            formData.append('phone', data.telefono);
            formData.append('subject', data.asunto);
            formData.append('sede', data.tipoPQRSD);
            
            // Configuración especial de Formspree
            formData.append('_replyto', data.email);
            formData.append('_subject', `Nuevo mensaje desde el sitio web - ${data.asunto}`);
            
            const response = await fetch('https://formspree.io/f/xblkdaqg', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                return { success: true };
            } else {
                const errorData = await response.json();
                console.error('Error de Formspree:', errorData);
                return { success: false, error: 'Error en el envío' };
            }
        } catch (error) {
            console.error('Error en sendEmailFormspree:', error);
            return { success: false, error: error.message };
        }
    };

    // Función para enviar email usando EmailJS (OPCIÓN 2)
    const sendEmailJS = async (data) => {
        try {
            // Necesitas instalar EmailJS: npm install @emailjs/browser
            const emailjs = (await import('@emailjs/browser')).default;
            
            const templateParams = {
                to_email: 'atencionalcliente@electrohuila.co',
                from_name: data.nombre,
                from_email: data.email,
                phone: data.telefono,
                subject: data.asunto,
                message: data.mensaje,
                sede: data.tipoPQRSD,
                reply_to: data.email
            };

            const response = await emailjs.send(
                'YOUR_SERVICE_ID', // Reemplazar con tu Service ID
                'YOUR_TEMPLATE_ID', // Reemplazar con tu Template ID
                templateParams,
                'YOUR_PUBLIC_KEY' // Reemplazar con tu Public Key
            );

            if (response.status === 200) {
                return { success: true };
            } else {
                return { success: false, error: 'Error en el envío' };
            }
        } catch (error) {
            return { success: false, error: error.message };
        }
    };

    // Función para enviar email usando tu propio backend PHP (OPCIÓN 3)
    const sendEmailPHP = async (data) => {
        try {
            const response = await fetch('/api/send-email.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    to: 'atencionalcliente@electrohuila.co',
                    subject: `Nuevo mensaje desde el sitio web - ${data.asunto}`,
                    name: data.nombre,
                    email: data.email,
                    phone: data.telefono,
                    message: data.mensaje,
                    sede: data.tipoPQRSD
                }),
            });

            const result = await response.json();
            return result;
        } catch (error) {
            return { success: false, error: error.message };
        }
    };

    // Función para manejar el envío del formulario
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);

        try {
            // Usar Formspree con tu Form ID configurado
            const result = await sendEmailFormspree(formData);

            if (result.success) {
                setSuccessMessage('Su mensaje ha sido enviado con éxito. Pronto nos pondremos en contacto con usted.');
                
                // Limpiar el formulario
                setFormData({
                    nombre: '',
                    email: '',
                    telefono: '',
                    asunto: '',
                    mensaje: '',
                    tipoPQRSD: 'Sede El Bote',
                    aceptaPolitica: false
                });

                // Limpiar el mensaje después de 5 segundos
                setTimeout(() => {
                    setSuccessMessage('');
                }, 5000);
            } else {
                setErrors({ general: 'Error al enviar el mensaje. Por favor, intente nuevamente.' });
            }
        } catch (error) {
            console.error('Error:', error);
            setErrors({ general: 'Error al enviar el mensaje. Por favor, intente nuevamente.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    // Función para expandir/contraer oficinas
    const toggleOffice = (officeId) => {
        if (expandedOffices.includes(officeId)) {
            setExpandedOffices(expandedOffices.filter(id => id !== officeId));
        } else {
            setExpandedOffices([...expandedOffices, officeId]);
        }
    };

    // Verificar si una oficina está expandida
    const isOfficeExpanded = (officeId) => {
        return expandedOffices.includes(officeId);
    };

    // Datos de las oficinas
    const oficinas = [
        {
            id: 'neiva',
            nombre: 'Sede Principal Neiva',
            direccion: 'Carrera 8 No. 7-69, Neiva, Huila',
            telefono: '(608) 871 9020',
            horario: 'Lunes a Viernes: 7:00 am - 4:00 pm',
            email: 'info@electrohuila.com.co',
        },
        {
            id: 'pitalito',
            nombre: 'Oficina Pitalito',
            direccion: 'Calle 6 No. 4-85, Pitalito, Huila',
            telefono: '(608) 836 2425',
            horario: 'Lunes a Viernes: 7:00 am - 4:00 pm',
            email: 'pitalito@electrohuila.com.co',
        },
        {
            id: 'garzon',
            nombre: 'Oficina Garzón',
            direccion: 'Carrera 10 No. 8-45, Garzón, Huila',
            telefono: '(608) 833 3909',
            horario: 'Lunes a Viernes: 7:00 am - 4:00 pm',
            email: 'garzon@electrohuila.com.co',
        },
        {
            id: 'labplata',
            nombre: 'Oficina La Plata',
            direccion: 'Carrera 4 No. 5-36, La Plata, Huila',
            telefono: '(608) 837 0200',
            horario: 'Lunes a Viernes: 7:00 am - 4:00 pm',
            email: 'laplata@electrohuila.com.co',
        }
    ];

    // Canales de atención
    const canalesAtencion = [
        {
            id: 'telefono',
            titulo: 'Línea de Atención Telefónica',
            descripcion: 'Para peticiones, quejas, reclamos, solicitudes y denuncias',
            datos: [
                { valor: '(608) 871 9020', descripcion: 'Línea Principal' },
                { valor: '01 8000 918 034', descripcion: 'Línea Gratuita Nacional' },
                { valor: '115', descripcion: 'Daños y Emergencias' }
            ],
            icono: <Phone size={24} />
        },
        {
            id: 'email',
            titulo: 'Correos Electrónicos',
            descripcion: 'Escriba sus inquietudes o solicitudes',
            datos: [
                { valor: 'atencionalcliente@electrohuila.co', descripcion: 'Atención al Cliente' },
                { valor: 'pqrs@electrohuila.com.co', descripcion: 'Peticiones, Quejas y Reclamos' },
                { valor: 'notificaciones@electrohuila.com.co', descripcion: 'Notificaciones Judiciales' }
            ],
            icono: <Mail size={24} />
        },
        {
            id: 'presencial',
            titulo: 'Atención Presencial',
            descripcion: 'Visite nuestras oficinas',
            datos: [
                { valor: 'Carrera 8 No. 7-69, Neiva', descripcion: 'Sede Principal' },
                { valor: 'Lunes a Viernes', descripcion: '7:00 am - 4:00 pm' }
            ],
            icono: <MapPin size={24} />
        }
    ];

    return (
        <div>
            {/* Hero Section */}
            <div className="hero" style={{
                background: "linear-gradient(rgba(0, 0, 0, 0.47), rgba(0, 0, 0, 0.42)), url('/images/contacto.jpg') no-repeat center center",
                backgroundSize: "cover",
                padding: "80px 0",
                color: "white",
                textAlign: "center"
            }}>
                <div className="container">
                    <h1 style={{ fontSize: "42px", marginBottom: "20px" }}>Contáctenos</h1>
                    <p style={{ fontSize: "18px", maxWidth: "800px", margin: "0 auto" }}>
                        Estamos a su disposición para atender sus inquietudes, solicitudes y sugerencias.
                    </p>
                </div>
            </div>

            <div className="container" style={{ padding: '60px 0' }}>
                {/* Breadcrumb */}
                <div className="breadcrumb" style={{ marginBottom: '30px' }}>
                    <Link href="/" style={{ color: '#f27b13', textDecoration: 'none' }}>Inicio</Link> /
                    <span style={{ marginLeft: '5px' }}>Contáctenos</span>
                </div>

                {/* Canales de atención */}
                <div style={{ marginBottom: '60px' }}>
                    <h2 style={{ fontSize: '32px', marginBottom: '30px', color: '#333', borderBottom: '2px solid #0098d9', paddingBottom: '10px' }}>
                        Canales de Atención
                    </h2>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                        gap: '30px'
                    }}>
                        {canalesAtencion.map((canal) => (
                            <div key={canal.id} style={{
                                backgroundColor: '#fff',
                                borderRadius: '8px',
                                padding: '30px',
                                boxShadow: '0 2px 15px rgba(0,0,0,0.05)',
                                border: '1px solid #eee'
                            }}>
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    marginBottom: '20px'
                                }}>
                                    <div style={{
                                        backgroundColor: '#e9f7fe',
                                        borderRadius: '50%',
                                        width: '50px',
                                        height: '50px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        marginRight: '15px',
                                        color: '#0098d9'
                                    }}>
                                        {canal.icono}
                                    </div>
                                    <h3 style={{ margin: 0, fontSize: '20px', color: '#333' }}>
                                        {canal.titulo}
                                    </h3>
                                </div>
                                <p style={{ color: '#555', marginBottom: '20px', fontSize: '14px' }}>
                                    {canal.descripcion}
                                </p>
                                <ul style={{
                                    listStyle: 'none',
                                    padding: 0,
                                    margin: 0
                                }}>
                                    {canal.datos.map((dato, index) => (
                                        <li key={index} style={{
                                            marginBottom: '10px',
                                            paddingBottom: '10px',
                                            borderBottom: index !== canal.datos.length - 1 ? '1px solid #f0f0f0' : 'none'
                                        }}>
                                            <div style={{ fontWeight: 'bold', color: '#0098d9', marginBottom: '5px' }}>
                                                {dato.valor}
                                            </div>
                                            <div style={{ fontSize: '14px', color: '#777' }}>
                                                {dato.descripcion}
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Formulario y Mapa RESPONSIVO */}
                <style>
                    {`
                    @media (max-width: 900px) {
                        .form-map-grid {
                            display: block !important;
                        }
                    }
                    @media (max-width: 600px) {
                        .form-map-grid input,
                        .form-map-grid textarea,
                        .form-map-grid select,
                        .form-map-grid button {
                            font-size: 18px !important;
                            padding: 14px !important;
                        }
                        .form-card-mobile {
                            background: #fff;
                            border-radius: 12px;
                            box-shadow: 0 4px 24px rgba(0,0,0,0.08);
                            padding: 32px 24px;
                            border: 1px solid #eee;
                            max-width: 500px;
                            margin: 32px auto;
                        }
                    }
                    `}
                </style>
                <div
                    className="form-map-grid"
                    style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '40px',
                        marginBottom: '60px'
                    }}
                >
                    {/* Formulario de contacto */}
                    <div className="form-card-mobile">
                        <h2 style={{ fontSize: '28px', marginBottom: '20px', color: '#333' }}>
                            Formulario de Contacto
                        </h2>
                        
                        {/* Mensaje de éxito */}
                        {successMessage && (
                            <div style={{
                                backgroundColor: '#e1f5e8',
                                color: '#28a745',
                                padding: '15px',
                                borderRadius: '5px',
                                marginBottom: '20px',
                                fontWeight: 'bold'
                            }}>
                                {successMessage}
                            </div>
                        )}

                        {/* Mensaje de error general */}
                        {errors.general && (
                            <div style={{
                                backgroundColor: '#f8d7da',
                                color: '#dc3545',
                                padding: '15px',
                                borderRadius: '5px',
                                marginBottom: '20px',
                                fontWeight: 'bold'
                            }}>
                                {errors.general}
                            </div>
                        )}

                        <form onSubmit={handleSubmit}>
                            <div style={{ marginBottom: '20px' }}>
                                <label
                                    htmlFor="tipoPQRSD"
                                    style={{
                                        display: 'block',
                                        marginBottom: '5px',
                                        fontWeight: 'bold',
                                        color: '#333'
                                    }}
                                >
                                    Sede *
                                </label>
                                <select
                                    id="tipoPQRSD"
                                    name="tipoPQRSD"
                                    value={formData.tipoPQRSD}
                                    onChange={handleInputChange}
                                    style={{
                                        width: '100%',
                                        padding: '10px 15px',
                                        border: '1px solid #ddd',
                                        borderRadius: '5px',
                                        fontSize: '16px'
                                    }}
                                >
                                    <option value="Sede El Bote">Sede El Bote</option>
                                    <option value="Sede SAIRE">Sede SAIRE</option>
                                    <option value="Sede Pitalito">Sede Pitalito</option>
                                    <option value="Sede Garzón">Sede Garzón</option>
                                    <option value="Sede La Plata">Sede La Plata</option>
                                </select>
                            </div>
                            
                            <div style={{ marginBottom: '20px' }}>
                                <label
                                    htmlFor="nombre"
                                    style={{
                                        display: 'block',
                                        marginBottom: '5px',
                                        fontWeight: 'bold',
                                        color: '#333'
                                    }}
                                >
                                    Nombre Completo *
                                </label>
                                <input
                                    type="text"
                                    id="nombre"
                                    name="nombre"
                                    value={formData.nombre}
                                    onChange={handleInputChange}
                                    style={{
                                        width: '100%',
                                        padding: '10px 15px',
                                        border: errors.nombre ? '1px solid #dc3545' : '1px solid #ddd',
                                        borderRadius: '5px',
                                        fontSize: '16px'
                                    }}
                                />
                                {errors.nombre && (
                                    <div style={{ color: '#dc3545', fontSize: '14px', marginTop: '5px' }}>
                                        {errors.nombre}
                                    </div>
                                )}
                            </div>
                            
                            <div style={{ marginBottom: '20px' }}>
                                <label
                                    htmlFor="email"
                                    style={{
                                        display: 'block',
                                        marginBottom: '5px',
                                        fontWeight: 'bold',
                                        color: '#333'
                                    }}
                                >
                                    Correo Electrónico *
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    style={{
                                        width: '100%',
                                        padding: '10px 15px',
                                        border: errors.email ? '1px solid #dc3545' : '1px solid #ddd',
                                        borderRadius: '5px',
                                        fontSize: '16px'
                                    }}
                                />
                                {errors.email && (
                                    <div style={{ color: '#dc3545', fontSize: '14px', marginTop: '5px' }}>
                                        {errors.email}
                                    </div>
                                )}
                            </div>
                            
                            <div style={{ marginBottom: '20px' }}>
                                <label
                                    htmlFor="telefono"
                                    style={{
                                        display: 'block',
                                        marginBottom: '5px',
                                        fontWeight: 'bold',
                                        color: '#333'
                                    }}
                                >
                                    Teléfono *
                                </label>
                                <input
                                    type="tel"
                                    id="telefono"
                                    name="telefono"
                                    value={formData.telefono}
                                    onChange={handleInputChange}
                                    style={{
                                        width: '100%',
                                        padding: '10px 15px',
                                        border: errors.telefono ? '1px solid #dc3545' : '1px solid #ddd',
                                        borderRadius: '5px',
                                        fontSize: '16px'
                                    }}
                                />
                                {errors.telefono && (
                                    <div style={{ color: '#dc3545', fontSize: '14px', marginTop: '5px' }}>
                                        {errors.telefono}
                                    </div>
                                )}
                            </div>
                            
                            <div style={{ marginBottom: '20px' }}>
                                <label
                                    htmlFor="asunto"
                                    style={{
                                        display: 'block',
                                        marginBottom: '5px',
                                        fontWeight: 'bold',
                                        color: '#333'
                                    }}
                                >
                                    Asunto *
                                </label>
                                <input
                                    type="text"
                                    id="asunto"
                                    name="asunto"
                                    value={formData.asunto}
                                    onChange={handleInputChange}
                                    style={{
                                        width: '100%',
                                        padding: '10px 15px',
                                        border: errors.asunto ? '1px solid #dc3545' : '1px solid #ddd',
                                        borderRadius: '5px',
                                        fontSize: '16px'
                                    }}
                                />
                                {errors.asunto && (
                                    <div style={{ color: '#dc3545', fontSize: '14px', marginTop: '5px' }}>
                                        {errors.asunto}
                                    </div>
                                )}
                            </div>
                            
                            <div style={{ marginBottom: '20px' }}>
                                <label
                                    htmlFor="mensaje"
                                    style={{
                                        display: 'block',
                                        marginBottom: '5px',
                                        fontWeight: 'bold',
                                        color: '#333'
                                    }}
                                >
                                    Mensaje *
                                </label>
                                <textarea
                                    id="mensaje"
                                    name="mensaje"
                                    value={formData.mensaje}
                                    onChange={handleInputChange}
                                    rows={5}
                                    style={{
                                        width: '100%',
                                        padding: '10px 15px',
                                        border: errors.mensaje ? '1px solid #dc3545' : '1px solid #ddd',
                                        borderRadius: '5px',
                                        fontSize: '16px',
                                        resize: 'vertical'
                                    }}
                                />
                                {errors.mensaje && (
                                    <div style={{ color: '#dc3545', fontSize: '14px', marginTop: '5px' }}>
                                        {errors.mensaje}
                                    </div>
                                )}
                            </div>
                            
                            <div style={{ marginBottom: '20px' }}>
                                <label style={{
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    cursor: 'pointer'
                                }}>
                                    <input
                                        type="checkbox"
                                        name="aceptaPolitica"
                                        checked={formData.aceptaPolitica}
                                        onChange={handleInputChange}
                                        style={{
                                            marginRight: '10px',
                                            marginTop: '3px'
                                        }}
                                    />
                                    <span style={{ fontSize: '14px', color: '#555' }}>
                                        Acepto la <Link href="/politicas-privacidad" style={{ color: '#0098d9' }}>Política de Tratamiento de Datos Personales</Link> *
                                    </span>
                                </label>
                                {errors.aceptaPolitica && (
                                    <div style={{ color: '#dc3545', fontSize: '14px', marginTop: '5px' }}>
                                        {errors.aceptaPolitica}
                                    </div>
                                )}
                            </div>
                            
                            <div>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    style={{
                                        backgroundColor: isSubmitting ? '#6c757d' : '#0098d9',
                                        color: 'white',
                                        border: 'none',
                                        borderRadius: '5px',
                                        padding: '12px 25px',
                                        fontSize: '16px',
                                        fontWeight: 'bold',
                                        cursor: isSubmitting ? 'not-allowed' : 'pointer',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        width: '100%',
                                        opacity: isSubmitting ? 0.7 : 1
                                    }}
                                >
                                    <Send size={16} style={{ marginRight: '8px' }} />
                                    {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Mapa de ubicación */}
                    <div>
                        <h2 style={{ fontSize: '28px', marginBottom: '20px', color: '#333' }}>
                            Ubicación
                        </h2>
                        <div style={{
                            width: '100%',
                            height: '400px',
                            marginBottom: '20px',
                            borderRadius: '8px',
                            overflow: 'hidden',
                            border: '1px solid #ddd'
                        }}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.5632870255567!2d-75.3097839!3d2.9410099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3b74930d148179%3A0x2036b3da8145fb0!2sElectrificadora%20Del%20Huila!5e0!3m2!1ses-419!2sco!4v1744641852512!5m2!1ses-419!2sco"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Mapa Electrohuila"
                            />
                        </div>
                        <div>
                            <h3 style={{ fontSize: '20px', marginBottom: '15px', color: '#333' }}>
                                Nuestras Sedes
                            </h3>
                            {oficinas.map((oficina) => (
                                <div key={oficina.id} style={{
                                    marginBottom: '10px',
                                    border: '1px solid #e0e0e0',
                                    borderRadius: '5px',
                                    overflow: 'hidden'
                                }}>
                                    <div
                                        onClick={() => toggleOffice(oficina.id)}
                                        style={{
                                            padding: '15px',
                                            backgroundColor: isOfficeExpanded(oficina.id) ? '#f8f9fa' : '#fff',
                                            cursor: 'pointer',
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center'
                                        }}
                                    >
                                        <h4 style={{ margin: 0, fontSize: '16px', fontWeight: '600', color: '#333' }}>
                                            {oficina.nombre}
                                        </h4>
                                        {isOfficeExpanded(oficina.id) ?
                                            <ChevronDown size={18} color="#0098d9" /> :
                                            <ChevronRight size={18} color="#0098d9" />
                                        }
                                    </div>
                                    {isOfficeExpanded(oficina.id) && (
                                        <div style={{ padding: '15px', backgroundColor: '#f8f9fa', borderTop: '1px solid #e0e0e0' }}>
                                            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                                                <MapPin size={16} color="#0098d9" style={{ marginRight: '10px' }} />
                                                <span>{oficina.direccion}</span>
                                            </div>
                                            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                                                <Phone size={16} color="#0098d9" style={{ marginRight: '10px' }} />
                                                <span>{oficina.telefono}</span>
                                            </div>
                                            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                                                <Mail size={16} color="#0098d9" style={{ marginRight: '10px' }} />
                                                <span>{oficina.email}</span>
                                            </div>
                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                <Clock size={16} color="#0098d9" style={{ marginRight: '10px' }} />
                                                <span>{oficina.horario}</span>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Información adicional */}
                <div style={{
                    backgroundColor: '#f8f9fa',
                    borderRadius: '8px',
                    padding: '30px',
                    marginBottom: '30px'
                }}>
                    <h3 style={{ fontSize: '22px', marginBottom: '15px', color: '#0098d9' }}>
                        Información Importante
                    </h3>
                    <p style={{ marginBottom: '15px', color: '#555', lineHeight: '1.6' }}>
                        ElectroHuila garantiza la protección de sus datos personales de acuerdo con la
                        Ley 1581 de 2012 y el Decreto 1377 de 2013. La información que usted nos suministra
                        será utilizada únicamente para los fines autorizados por usted y para dar trámite a sus
                        solicitudes, quejas, reclamos o sugerencias.
                    </p>
                    <p style={{ color: '#555', lineHeight: '1.6' }}>
                        Recuerde que para trámites relacionados con su facturación, solicitudes técnicas y
                        reportes de daños, debe utilizar los canales específicos dispuestos para ello,
                        indicados en nuestra sección de <Link href="/servicios" style={{ color: '#0098d9' }}>Servicios</Link>.
                    </p>
                </div>
            </div>
        </div>
    );
}