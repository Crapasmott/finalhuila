'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, ChevronUp, Download, FileText, ExternalLink } from 'lucide-react';

export default function TramitesUsuariosPage() {
    // Estado para controlar las secciones expandidas
    const [expandedSections, setExpandedSections] = useState({ 0: true }); // Primera sección expandida por defecto

    // Función para alternar secciones
    const toggleSection = (index) => {
        setExpandedSections(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    // Datos de los trámites basados en el HTML original
    const tramites = [
        {
            id: 'reclamacion-fallas',
            title: 'Trámite para la reclamación de fallas en la prestación del servicio',
            content: {
                description: 'Para atender las solicitudes de indemnización a usuarios por fallas en la prestación del servicio, es importante cumplir con las siguientes indicaciones:',
                steps: [
                    'Diligenciar el formato código FT-AGFM-05-001 versión No. 05 "Solicitud indemnización por fallas en la prestación del servicio" debidamente soportados con los requisitos mencionados en dicho formato, por las siguientes causales:'
                ],
                causales: [
                    'Reconocimiento económico por lesión o muerte de semovientes.',
                    'Reconocimiento económico de lucro cesante.',
                    'Reconocimiento económico de bienes muebles (electrodomésticos, maquinas, muebles y enseres, entre otros).',
                    'Reconocimiento económico de cultivos y árboles frutales.',
                    'Reconocimiento económico de bienes inmuebles.',
                    'Reconocimiento económico por lesión o muerte de personas.'
                ],
                downloads: [
                    {
                        title: 'Descargar formato FT-AGFM-05-001',
                        url: 'https://electrohuila.net/wp-content/uploads/2024/08/FT-AGFM-05-001-Formato-de-solicitud-de-indemnizacion.docx'
                    },
                    {
                        title: 'Descargar formato FT-AGFM-05-002',
                        url: 'https://electrohuila.net/wp-content/uploads/2024/08/FT-AGFM-05-002-Acreditacion-de-propiedad.docx'
                    }
                ],
                ubicaciones: [
                    {
                        ciudad: 'Neiva',
                        direccion: 'Servicio de atención Integral y Recaudo Empresarial Sede El Saire. Carrera 18 Calle 9 Esquina /B. Calixto'
                    },
                    {
                        ciudad: 'Garzón',
                        direccion: 'Sede Zona Centro Calle 8 No. 7-54/B. Centro'
                    },
                    {
                        ciudad: 'Pitalito',
                        direccion: 'Sede Zona Sur Calle 19 No. 3-05/B. San Solarte'
                    }
                ],
                horario: 'De 08:00 a. m a 12:00 pm y de 12:30 p. m a 04:00 p. m, días hábiles de la semana lunes a viernes.',
                email: 'radicacion@electrohuila.co'
            }
        },
        {
            id: 'autogeneradores',
            title: 'Trámite de conexión de autogeneradores y generación distribuida',
            content: {
                description: 'Documentos y formatos para el proceso de conexión de autogeneradores y generación distribuida.',
                downloads: [
                    {
                        title: 'Cartilla para el procedimiento de conexión resolución CREG 174 de 2021',
                        url: 'https://electrohuila.net/wp-content/uploads/2025/06/Cartilla-para-el-procedimiento-de-conexion-resolucion-CREG-174-de-2021.pdf'
                    },
                    {
                        title: 'Diagrama de flujo de conexión para entrada de nuevos proyectos de GD',
                        url: 'https://electrohuila.net/wp-content/uploads/2025/06/Diagrama-de-flujo-de-conexion-para-para-entrada-de-nuevos-proyectos-de-GD.pdf'
                    },
                    {
                        title: 'M-GDC-ESP-02 Manual de usuario solicitante GD-Connect V5.1.1',
                        url: 'https://electrohuila.net/wp-content/uploads/2025/06/M-GDC-ESP-02-Manual-Usuario-Solicitante-GD-Connect-V5.1.1.pdf'
                    },
                    {
                        title: 'Base_Seguimiento Contrato de conexión y respaldo (Excel)',
                        url: 'https://electrohuila.net/wp-content/uploads/2025/06/Base_Seguimiento-Contrato-de-conexion-y-resplado.xlsx'
                    },
                    {
                        title: 'Base_Minuta contrato de Conexión y Capacidad de Respaldo174 (Word)',
                        url: 'https://electrohuila.net/wp-content/uploads/2025/06/Base_Minuta-contrato-de-Conexion-y-Capcidad-de-Respaldo174.docx'
                    }
                ],
                formatos: [
                    {
                        title: 'FT-DEX-07-002',
                        url: 'https://electrohuila.net/wp-content/uploads/2025/06/FT-DEX-07-002.xlsx'
                    },
                    {
                        title: 'FT-DEX-07-003',
                        url: 'https://electrohuila.net/wp-content/uploads/2025/06/FT-DEX-07-003.xlsx'
                    },
                    {
                        title: 'FT-DEX-07-005',
                        url: 'https://electrohuila.net/wp-content/uploads/2025/06/FT-DEX-07-005-FORMATO-RECEPCION-DE-PROPUESTAS-DE-PROYECTOS-DE-GENERACION-DE-ENERGIA.xlsx'
                    }
                ]
            }
        },
        {
            id: 'legalizacion-proyectos',
            title: 'Trámite legalización proyectos y cuentas nuevas',
            content: {
                description: 'Documentos y formatos para la legalización de proyectos y cuentas nuevas.',
                downloads: [
                    {
                        title: 'Guía de conexión cuentas nuevas y nuevos proyectos',
                        url: 'https://electrohuila.net/wp-content/uploads/2025/03/GUIA-DE-CONEXION-CUENTAS-NUEVAS-V5-1.pdf'
                    },
                    {
                        title: 'Lista de verificación de acometida en BT',
                        url: 'https://electrohuila.net/wp-content/uploads/2023/07/Lista-de-Verificacion-de-acometida-en-BT.xls'
                    },
                    {
                        title: 'Notas generales de diseño de redes',
                        url: 'https://electrohuila.net/wp-content/uploads/2024/11/Notas-generales-de-diseno-de-redes-2024.pdf'
                    },
                    {
                        title: 'Rótulos para diseños de redes',
                        url: 'https://electrohuila.net/wp-content/uploads/2023/07/ROTULO-MEDIO-PLIEGO-EH-2021-EXTERNO.zip'
                    }
                ],
                formatos: [
                    {
                        title: 'Formato plan de trabajo',
                        url: 'https://electrohuila.net/wp-content/uploads/2024/11/Formato-plan-de-trabajo.docx'
                    },
                    {
                        title: 'FT-CCP-06-002 Solicitud del servicio de energía (E1)',
                        url: 'https://electrohuila.net/wp-content/uploads/2025/03/FT-CCP-06-002-Solicitud-del-servicio-de-energia-E1-version006-17.xlsx'
                    },
                    {
                        title: 'FT-CCP-06-011',
                        url: 'https://electrohuila.net/wp-content/uploads/2024/04/FT-CCP-06-011-PERMISO-DE-PASO-SERVIDUMBRE-Y-DE-RESPONSABILIDAD-DE-LA-COMUNIDAD.xlsx'
                    },
                    {
                        title: 'Lista de Chequeo para Verificación de Diseños MT y BT',
                        url: 'https://electrohuila.net/wp-content/uploads/2025/02/Lista-Chequeo-disenos-2024.xlsx'
                    }
                ]
            }
        },
        {
            id: 'recurso-reposicion',
            title: 'Trámite de recurso de reposición - apelación',
            content: {
                description: 'La persona natural y/o jurídica que haya presentado una petición o reclamo ante la Electrificadora del Huila S.A. E.S.P. puede presentar recurso de reposición o reposición y en subsidio apelación ante la Superintendencia de Servicios públicos domiciliarios, cuando considere que el resultado del trámite no satisface su requerimiento.',
                requisitos: [
                    'Haber sido notificado de la respuesta en conformidad a las reglas de la materia, acerca de su reclamación o petición, en los cinco días siguientes a la notificación de la respuesta.',
                    'Presentar documento de recurso de reposición o reposición y en subsidio apelación ante la Superintendencia de Servicios Públicos.'
                ],
                info: 'Presentar el recurso en cualquiera de las Sedes de atención al cliente dispuestas por Electrohuila, correo electrónico radicacion@electrohuila.co o dentro de la página web www.electrohuila.co sección "Electrohuila en Línea".',
                email: 'radicacion@electrohuila.co',
                webLink: 'https://enlinea.electrohuila.com.co/home/'
            }
        },
        {
            id: 'denuncia-arrendamiento',
            title: 'Trámite para la denuncia de arrendamiento',
            content: {
                description: 'Las personas naturales y/o jurídicas que pacten un contrato de arrendamiento en el cual está inmerso el pago del servicio de energía eléctrica por parte del arrendatario, pueden denunciar la existencia del contrato ante la Electrificadora del Huila SA. E.S.P.',
                requisitos: [
                    'Diligenciar el formato FT-CSC-03-001 Denuncia del contrato de arrendamiento.',
                    'Existencia de contrato de arrendamiento de bien inmueble.',
                    'Fotocopia de la factura del servicio de energía.',
                    'Fotocopia de la cédula de ciudadanía del arrendador y del arrendatario.',
                    'Garantías (Art. 15 Ley 820 de 2003).'
                ],
                info: 'El trámite se puede hacer en las Sedes de atención al cliente de Electrohuila S.A. E.S.P.'
            }
        },
        {
            id: 'reclamacion-facturacion',
            title: 'Trámite para la reclamación de facturación',
            content: {
                description: 'Las personas naturales y/o jurídicas que consideren que la factura del servicio de energía prestado contiene conceptos que no corresponden, puede acercarse a cualquiera de las oficinas dispuestas por la empresa para la atención del cliente y solicitar la revisión y ajustes pertinentes.',
                requisitos: [
                    'Presentarse antes de la fecha de vencimiento de pago.',
                    'Presentar la factura actualizada del medidor de energía.',
                    'Solicitar revisión y ajustes a la facturación.',
                    'Retirar nueva factura de haber accedido la reclamación.'
                ],
                info: 'Tener en cuenta que este trámite puede hacerlo través del correo radicacion@electrohuila.co o las Sedes de atención al cliente de Electrohuila S.A. E.S.P.',
                email: 'radicacion@electrohuila.co'
            }
        },
        {
            id: 'cambio-informacion',
            title: 'Trámite para solicitud de cambio de información del cliente',
            content: {
                description: 'Las personas naturales y/o jurídicas pueden actualizar la información propia del cliente en la base de datos de la Electrificadora del Huila SA. E.S.P. cómo es: Dirección postal, nombre del cliente, número de identificación, dirección, estrato socioeconómico.',
                requisitos: [
                    'Ser propietario del inmueble o disponer de autorización de este.',
                    'Dirección y/o postal – Autorización del suscriptor – Certificación catastral.',
                    'Nombre del suscriptor – Certificado de libertad y tradición no mayor a treinta (30) días.',
                    'Identificación – Fotocopia de la cédula de ciudadanía.',
                    'Estrato socioeconómico – Certificación de la autoridad Municipal no mayor a treinta (30) días.',
                    'Otros – (Documento pertinente)'
                ],
                info: 'Tener en cuenta que este trámite puede hacerlo través del correo radicacion@electrohuila.co o las Sedes de atención al cliente de Electrohuila S.A. E.S.P.',
                email: 'radicacion@electrohuila.co'
            }
        },
        {
            id: 'pago-no-ingresado',
            title: 'Trámite de pago no ingresado',
            content: {
                description: 'Es el trámite que se realiza cuando el cliente ha realizado el pago y éste no se evidencia en el sistema de Electrohuila S.A. E.S.P.',
                requisitos: [
                    'Si el pago se realizó con factura, adjuntar el soporte original de pago.',
                    'Si el pago se realizó por datafono, cajeros o cualquier medio electrónico, se debe anexar certificación bancaria o voucher original emitido por la terminal de pago.',
                    'Si el pago se realizó por Internet, la impresión de la pantalla de transacción exitosa.',
                    'Para domiciliación, banca móvil y/o pago programado, copia del extracto de la cuenta donde se evidencia el débito.'
                ],
                info: 'que este trámite puede hacerlo través del correo radicacion@electrohuila.co o las Sedes de atención al cliente de Electrohuila S.A. E.S.P.',
                email: 'radicacion@electrohuila.co'
            }
        },
        {
            id: 'reposicion-medidor',
            title: 'Trámite para la reposición del medidor de energía',
            content: {
                description: 'La persona natural y/o jurídica que requiera cambiar o reponer el medidor para el servicio de energía eléctrica, puede adquirirlo en la Electrificadora del Huila S.A. E.S.P. debidamente certificado y sellado para su instalación con cargo a la cuenta del suscriptor y financiado hasta 36 meses de plazo.',
                lugares: [
                    'Oficina de Atención al Cliente – SAIRE – Tel. (8) 8701952 – (8) 8706784 Neiva',
                    'Zona Centro – Tel. (8) 8330224 – (8) 8332265 Garzón',
                    'Zona Occidente – Tel (8) 8370372 La plata',
                    'Zona Sur – Tel (8) 8360242 Pitalito'
                ],
                documentos: [
                    'Fotocopia de la factura del servicio de energía',
                    'Solicitud firmada por el propietario del inmueble',
                    'Fotocopia de la cédula de ciudadanía del propietario',
                    'Factura de compra del medidor'
                ],
                pasos: [
                    'Presentar solicitud escrita firmada por el propietario del inmueble',
                    'Autorizar el cargo a la factura'
                ],
                plazo: 'Quince (15) días hábiles luego de presentada la solicitud',
                normativa: [
                    'Ley 142 . Servicios Públicos Domiciliarios',
                    'Documento de Gerencia Electrohuila No. 012 del 2 de Enero de 2007',
                    'Contrato de condiciones uniformes entre la Empresa y el usuario'
                ]
            }
        },
        {
            id: 'terminacion-contrato',
            title: 'Terminación del contrato por orden del suscriptor',
            content: {
                description: 'Es la solicitud que realiza el cliente y usuario para que se retire definitivamente el servicio público domiciliario de determinado inmueble.',
                solicitantes: 'Podrá solicitarlo Propietario del inmueble o quien solicito el servicio público domiciliario.',
                info: 'Los canales que podrá realizar la solicitud se tienen a disposición radicacion@electrohuila.co, de manera presencial en nuestras sedes de Neiva, Pitalito, Garzón y la Plata, contando con la información requerida para el trámite durante la atención.',
                email: 'radicacion@electrohuila.co'
            }
        },
        {
            id: 'plan-perdidas',
            title: 'Plan de mantenimiento de pérdidas',
            content: {
                downloads: [
                    {
                        title: 'Avance Plan de Mantenimiento de Pérdidas',
                        url: 'https://electrohuila.net/wp-content/uploads/2023/07/AVANCES-Y-EVOLUCION-DEL-IPT.pdf'
                    }
                ]
            }
        }
    ];

    // Documentos adicionales del HTML original
    const documentosAdicionales = [
        {
            title: 'Medidores soportados para Telegestión',
            url: 'https://electrohuila.net/wp-content/uploads/2023/07/PrimeRead10-Dispositivos_Implementados-09SPT2021.pdf'
        },
        {
            title: 'Formatos solicitud de parametrización',
            url: 'https://electrohuila.net/wp-content/uploads/2023/07/FT-CCP-02-012-Formato-Solicitud-de-Parametrizacion-V-004.pdf'
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-slate-800 via-slate-700 to-blue-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold mb-4">Trámites de Usuarios</h1>
                        <p className="text-xl text-slate-200 max-w-3xl mx-auto">
                            Encuentra toda la información sobre los trámites y servicios disponibles para nuestros usuarios
                        </p>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Breadcrumb */}
                <div className="mb-6">
                    <Link href="/" className="text-blue-600 hover:text-blue-800">Inicio</Link>
                    <span className="mx-2 text-gray-500">/</span>
                    <span className="text-gray-700">Trámites de Usuarios</span>
                </div>

                {/* Introducción */}
                <div className="mb-8 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Servicios y Trámites Disponibles
                    </h2>
                    <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                        Accede a todos los trámites y servicios que ElectroHuila tiene disponibles para ti. 
                        Encuentra formatos, requisitos y procedimientos para realizar tus gestiones de manera eficiente.
                    </p>
                </div>

                {/* Acordeón de Trámites */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-8">
                    <div className="p-6">
                        <div className="space-y-4">
                            {tramites.map((tramite, index) => (
                                <div key={tramite.id} className="border border-gray-200 rounded-lg overflow-hidden">
                                    <button
                                        onClick={() => toggleSection(index)}
                                        className={`w-full px-6 py-4 text-left transition-colors border-l-4 ${
                                            expandedSections[index] 
                                                ? 'border-l-blue-500 bg-blue-50' 
                                                : 'border-l-gray-300 bg-white hover:bg-gray-50'
                                        }`}
                                    >
                                        <div className="flex justify-between items-center">
                                            <h3 className="font-semibold text-gray-900 text-lg">{tramite.title}</h3>
                                            <div className={`transform transition-transform ${expandedSections[index] ? 'rotate-180' : ''}`}>
                                                <ChevronDown className="w-5 h-5 text-gray-500" />
                                            </div>
                                        </div>
                                    </button>

                                    {expandedSections[index] && (
                                        <div className="bg-gray-50 p-6 border-t border-gray-200">
                                            <div className="prose max-w-none">
                                                {/* Descripción */}
                                                {tramite.content.description && (
                                                    <p className="text-gray-700 mb-4">{tramite.content.description}</p>
                                                )}

                                                {/* Pasos */}
                                                {tramite.content.steps && (
                                                    <div className="mb-4">
                                                        {tramite.content.steps.map((step, idx) => (
                                                            <p key={idx} className="text-gray-700 mb-2">{idx + 1}. {step}</p>
                                                        ))}
                                                    </div>
                                                )}

                                                {/* Causales */}
                                                {tramite.content.causales && (
                                                    <div className="mb-4">
                                                        <h4 className="font-semibold text-gray-900 mb-2">Causales:</h4>
                                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                            {tramite.content.causales.map((causal, idx) => (
                                                                <li key={idx}>{causal}</li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                )}

                                                {/* Requisitos */}
                                                {tramite.content.requisitos && (
                                                    <div className="mb-4">
                                                        <h4 className="font-semibold text-gray-900 mb-2">Requisitos:</h4>
                                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                            {tramite.content.requisitos.map((requisito, idx) => (
                                                                <li key={idx}>{requisito}</li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                )}

                                                {/* Documentos */}
                                                {tramite.content.documentos && (
                                                    <div className="mb-4">
                                                        <h4 className="font-semibold text-gray-900 mb-2">Documentos necesarios:</h4>
                                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                            {tramite.content.documentos.map((doc, idx) => (
                                                                <li key={idx}>{doc}</li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                )}

                                                {/* Lugares */}
                                                {tramite.content.lugares && (
                                                    <div className="mb-4">
                                                        <h4 className="font-semibold text-gray-900 mb-2">Lugares de atención:</h4>
                                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                            {tramite.content.lugares.map((lugar, idx) => (
                                                                <li key={idx}>{lugar}</li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                )}

                                                {/* Ubicaciones */}
                                                {tramite.content.ubicaciones && (
                                                    <div className="mb-4">
                                                        <h4 className="font-semibold text-gray-900 mb-2">Puntos de radicación:</h4>
                                                        {tramite.content.ubicaciones.map((ubicacion, idx) => (
                                                            <div key={idx} className="mb-2">
                                                                <strong className="text-gray-900">{ubicacion.ciudad}</strong>
                                                                <p className="text-gray-700">{ubicacion.direccion}</p>
                                                            </div>
                                                        ))}
                                                        {tramite.content.horario && (
                                                            <p className="text-gray-700 mt-2">
                                                                <strong>Horario:</strong> {tramite.content.horario}
                                                            </p>
                                                        )}
                                                    </div>
                                                )}

                                                {/* Descargas */}
                                                {tramite.content.downloads && (
                                                    <div className="mb-4">
                                                        <h4 className="font-semibold text-gray-900 mb-3">Documentos para descargar:</h4>
                                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                                            {tramite.content.downloads.map((download, idx) => (
                                                                <a
                                                                    key={idx}
                                                                    href={download.url}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                                                                >
                                                                    <Download className="w-4 h-4" />
                                                                    {download.title}
                                                                </a>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}

                                                {/* Formatos */}
                                                {tramite.content.formatos && (
                                                    <div className="mb-4">
                                                        <h4 className="font-semibold text-gray-900 mb-3">Formatos:</h4>
                                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                                            {tramite.content.formatos.map((formato, idx) => (
                                                                <a
                                                                    key={idx}
                                                                    href={formato.url}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
                                                                >
                                                                    <FileText className="w-4 h-4" />
                                                                    {formato.title}
                                                                </a>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}

                                                {/* Información adicional */}
                                                {tramite.content.info && (
                                                    <div className="mb-4">
                                                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                                                            <h4 className="font-semibold text-blue-900 mb-2">Información importante:</h4>
                                                            <p className="text-blue-800">{tramite.content.info}</p>
                                                            {tramite.content.email && (
                                                                <p className="mt-2">
                                                                    <strong>Email:</strong> 
                                                                    <a href={`mailto:${tramite.content.email}`} className="text-blue-600 hover:text-blue-800 ml-1">
                                                                        {tramite.content.email}
                                                                    </a>
                                                                </p>
                                                            )}
                                                            {tramite.content.webLink && (
                                                                <p className="mt-2">
                                                                    <strong>Portal en línea:</strong> 
                                                                    <a href={tramite.content.webLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 ml-1">
                                                                        Electrohuila en Línea
                                                                    </a>
                                                                </p>
                                                            )}
                                                        </div>
                                                    </div>
                                                )}

                                                {/* Plazo */}
                                                {tramite.content.plazo && (
                                                    <div className="mb-4">
                                                        <h4 className="font-semibold text-gray-900 mb-2">Plazo de respuesta:</h4>
                                                        <p className="text-gray-700">{tramite.content.plazo}</p>
                                                    </div>
                                                )}

                                                {/* Pasos a seguir */}
                                                {tramite.content.pasos && (
                                                    <div className="mb-4">
                                                        <h4 className="font-semibold text-gray-900 mb-2">Pasos a seguir:</h4>
                                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                            {tramite.content.pasos.map((paso, idx) => (
                                                                <li key={idx}>{paso}</li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                )}

                                                {/* Normativa */}
                                                {tramite.content.normativa && (
                                                    <div className="mb-4">
                                                        <h4 className="font-semibold text-gray-900 mb-2">Normatividad que regula el trámite:</h4>
                                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                            {tramite.content.normativa.map((norma, idx) => (
                                                                <li key={idx}>{norma}</li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                )}

                                                {/* Solicitantes */}
                                                {tramite.content.solicitantes && (
                                                    <div className="mb-4">
                                                        <h4 className="font-semibold text-gray-900 mb-2">¿Quién puede solicitarlo?</h4>
                                                        <p className="text-gray-700">{tramite.content.solicitantes}</p>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Documentos Adicionales */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-8">
                    <div className="p-6">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Documentos Adicionales</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {documentosAdicionales.map((doc, index) => (
                                <a
                                    key={index}
                                    href={doc.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                                >
                                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                                        <Download className="w-5 h-5 text-blue-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-gray-900">{doc.title}</h3>
                                        <p className="text-sm text-gray-600">Descargar documento</p>
                                    </div>
                                    <ExternalLink className="w-4 h-4 text-gray-400 ml-auto" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Información de Contacto */}
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg text-white p-8">
                    <div className="text-center">
                        <h2 className="text-2xl font-bold mb-4">¿Necesitas ayuda con algún trámite?</h2>
                        <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                            Nuestro equipo de atención al cliente está disponible para ayudarte con cualquier consulta 
                            o procedimiento que necesites realizar.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                            <div className="text-center">
                                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                                    <FileText className="w-6 h-6" />
                                </div>
                                <h3 className="font-semibold mb-2">Radicación en línea</h3>
                                <a 
                                    href="mailto:radicacion@electrohuila.co" 
                                    className="text-blue-200 hover:text-white transition-colors"
                                >
                                    radicacion@electrohuila.co
                                </a>
                            </div>
                            <div className="text-center">
                                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                                    <ExternalLink className="w-6 h-6" />
                                </div>
                                <h3 className="font-semibold mb-2">Portal en línea</h3>
                                <a 
                                    href="https://enlinea.electrohuila.com.co/home/" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-blue-200 hover:text-white transition-colors"
                                >
                                    Electrohuila en Línea
                                </a>
                            </div>
                            <div className="text-center">
                                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <h3 className="font-semibold mb-2">Sedes de atención</h3>
                                <p className="text-blue-200">Neiva, Garzón, Pitalito, La Plata</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Horarios de Atención */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 mt-8">
                    <div className="p-6">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Horarios de Atención</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <h3 className="font-semibold text-gray-900 mb-2">Atención Presencial</h3>
                                <p className="text-gray-700">Lunes a Viernes</p>
                                <p className="text-gray-700">08:00 a.m. a 12:00 p.m.</p>
                                <p className="text-gray-700">12:30 p.m. a 04:00 p.m.</p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-900 mb-2">Radicación Virtual</h3>
                                <p className="text-gray-700">Lunes a Viernes</p>
                                <p className="text-gray-700">08:00 a.m. a 04:30 p.m.</p>
                                <p className="text-gray-700">Jornada continua</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}