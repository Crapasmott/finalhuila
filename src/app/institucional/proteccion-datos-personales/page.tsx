'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function ProteccionDatosPage() {
    const [expandedItem, setExpandedItem] = useState(null);

    const toggleItem = (itemId) => {
        setExpandedItem(expandedItem === itemId ? null : itemId);
    };

    const isExpanded = (itemId) => expandedItem === itemId;

    const accordionItems = [
        {
            id: 'datosPersonales',
            title: '¿Qué son los datos personales?',
            content: 'Los datos personales son aquellos que contienen información asociada a una persona y que permite su identificación, por ejemplo; número de documento de identificación, el lugar de nacimiento, estado civil, edad, lugar de residencia, trayectoria académica, laboral, o profesional; esta información también puede estar relacionada a datos sensibles entre ellos; historia clínica, características físicas, ideología política o religiosa, orientación sexual, entre otros aspectos.'
        },
        {
            id: 'tiposDatos',
            title: '¿Qué tipos de datos hay?',
            content: (
                <div>
                    <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                            <div><strong>Dato público:</strong> Es el dato calificado como tal según los mandatos de la ley o de la Constitución Política y todos aquellos que no sean semiprivados o privados, de tal manera que; son datos que pueden circular de manera libre en la sociedad y que garantizan el Derecho al acceso a la Información.</div>
                        </li>
                        <li className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                            <div><strong>Dato Semiprivado:</strong> Es el dato que no tiene naturaleza íntima, reservada, ni pública y cuyo conocimiento o divulgación puede interesar no sólo a su titular sino a cierto sector o grupo de personas o a la sociedad en general, por lo cual, requieren autorización para su circulación.</div>
                        </li>
                        <li className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                            <div><strong>Dato privado:</strong> Es el dato que por su naturaleza íntima o reservada sólo es relevante para el titular.</div>
                        </li>
                        <li className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                            <div><strong>Derecho De Los Niños, Niñas y Adolescentes:</strong> En el Tratamiento se asegurará el respeto a los derechos prevalentes de los niños, niñas y adolescentes. Sólo podrán tratarse aquellos datos que sean de naturaleza pública.</div>
                        </li>
                        <li className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                            <div><strong>Dato Sensible:</strong> Es el dato que afecta la intimidad del titular o cuyo uso indebido puede generar su discriminación. Tales como aquellos que revelen el origen racial o étnico, la orientación política, las convicciones religiosas o filosóficas, la pertenencia a sindicatos, organizaciones sociales, de derechos humanos o que promueva intereses de cualquier partido político o que garanticen los derechos y garantías de partidos políticos de oposición, así como los datos relativos a la salud, a la vida sexual y los datos biométricos.</div>
                        </li>
                    </ul>
                </div>
            )
        },
        {
            id: 'datosElectrohuila',
            title: '¿Qué datos almacena ElectroHuila S.A. E.S.P.?',
            content: 'Los datos de carácter personal que son objeto de recolección, uso y tratamiento de ElectroHuila S.A. E.S.P., son obtenidos por medio de las relaciones directas o indirectas que establezca en el desarrollo de su objeto social y de sus funciones corporativas; de tal manera que; conforme al tipo de relación se podrán obtener del titular la siguiente información; nombre, fecha de nacimiento, número de identificación, dirección de residencia o laboral, correo electrónico, número telefónico, y demás; datos que tendrán el uso, tratamiento y disposición descritos en la Política de Privacidad, Tratamiento y Protección de Datos Personales de la Electrificadora del Huila S.A. E.S.P.'
        },
        {
            id: 'finalidades',
            title: 'Finalidades del tratamiento de datos personales recolectados por ElectroHuila S.A. E.S.P.',
            content: (
                <div className="space-y-4">
                    <p className="text-gray-700">La información que en el desarrollo de las actividades de los distintos procesos que integran a ElectroHuila S.A. E.S.P., que sea proporcionada o recaudada por el titular, será incorporada en las Bases de Datos correspondientes, y su uso estará destinado a los objetivos específicos que se determinan en la Política de Privacidad, Tratamiento y Protección de Datos Personales.</p>
                    
                    <h4 className="text-lg font-semibold text-gray-900">A nivel general:</h4>
                    <p className="text-gray-700">ElectroHuila S.A E.S.P., efectuará el tratamiento de los datos personales, almacenando los mismos en Bases de Datos digitales y físicas, reportadas del Registro Nacional de Bases de Datos, plataforma administrada por la SIC.</p>
                    
                    <p className="text-gray-700">El tratamiento de los Datos Personales allí almacenados se hará conforme a las siguientes finalidades:</p>
                    
                    <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                            <div><strong>SIEC:</strong> Prestación de servicios públicos - Base de datos de los clientes que se les cobra el servicio de energía.</div>
                        </li>
                        <li className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                            <div><strong>SIMAD:</strong> Administra la gestión de comunicaciones tramitadas con nuestros grupos de interés (Colaboradores, Clientes, Proveedores, Órganos de Administración, Gobierno, Competencia, Comunidad); del mismo modo administra y gestiona los archivos de Gestión, Archivo Central y Archivo Histórico en línea.</div>
                        </li>
                        <li className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                            <div><strong>NÓMINA:</strong> Información de Empleados, gestión de la información de los empleados, exfuncionarios, pensionados.</div>
                        </li>
                        <li className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                            <div><strong>FINANCIERA ADMINISTRATIVA:</strong> Gestión contable, fiscal y administrativa – Gestión de proveedores y contratistas.</div>
                        </li>
                        <li className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                            <div><strong>CONTACT CENTER:</strong> Finalidades varias – Atención al ciudadano / Cliente (Gestión de PQR) Recepción y gestión de requerimientos internos o externos sobre productos o servicios. Atención de reporte de daños en las redes eléctricas, consultas comerciales.</div>
                        </li>
                        <li className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                            <div><strong>OMS (OUTAGE MANAGEMENT SYSTEM):</strong> Sistema de gestión de interrupciones. Gestión técnica y administrativa.</div>
                        </li>
                    </ul>
                    
                    <p className="text-gray-700">No obstante, en el giro ordinario de sus negocios podrá crear otras Bases de Datos con finalidades legales.</p>
                </div>
            )
        },
        {
            id: 'derechos',
            title: '¿Qué derechos tiene el titular del dato?',
            content: (
                <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <div>Conocer, actualizar y rectificar sus datos personales frente a los responsables del Tratamiento o Encargados del Tratamiento. Este derecho se podrá ejercer, entre otros frente a datos parciales, inexactos, incompletos, fraccionados, que induzcan a error, o aquellos cuyo Tratamiento esté expresamente prohibido o no haya sido autorizado.</div>
                    </li>
                    <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <div>Solicitar prueba de la autorización otorgada al responsable del Tratamiento salvo cuando expresamente se exceptúe como requisito para el Tratamiento.</div>
                    </li>
                    <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <div>Ser informado por el responsable del Tratamiento o el Encargado del Tratamiento, previa solicitud, respecto del uso que le ha dado a sus datos personales.</div>
                    </li>
                    <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <div>Presentar ante la Superintendencia de Industria y Comercio quejas por infracciones a lo dispuesto en ley 1581 DEL 2012.</div>
                    </li>
                    <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <div>Acceder en forma gratuita a sus datos personales que hayan sido objeto de Tratamiento.</div>
                    </li>
                </ul>
            )
        },
        {
            id: 'reclamos',
            title: '¿Quiénes pueden presentar reclamos y/o solicitudes en virtud del tratamiento de datos personales?',
            content: 'El titular, su representante o causahabientes que consideren que la información contenida en una base de datos, debe ser objeto de corrección, actualización o supresión, o cuando adviertan el presunto incumplimiento de cualquiera de los deberes contenidos en la Política de Privacidad Tratamiento y Protección de Datos Personales, los lineamientos dispuestos en la Ley 1581 de 2012 y/o normativa regulatoria, podrán presentar solicitud y/o reclamo ante ElectroHuila S.A. E.S.P.'
        },
        {
            id: 'canales',
            title: '¿Cuáles son los canales de atención a peticiones, consultas y reclamos?',
            content: (
                <div className="space-y-4">
                    <p className="text-gray-700">Los titulares del dato personal o ante su falta absoluta sus causahabientes, podrán solicitar la consulta o reclamo sobre la información de carácter personal que tenga en custodia ElectroHuila S.A. E.S.P., para tal efecto, con el fin de brindar respuesta oportuna y congruente a las mismas, se han dispuesto canales de atención y recepción digitales y físicos:</p>
                    
                    <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-3">Canales Digitales:</h4>
                        <ul className="space-y-2 text-gray-700">
                            <li><strong>Email:</strong> <a href="mailto:servicioalclienteeh@electrohuila.co" className="text-blue-600 hover:text-blue-700">servicioalclienteeh@electrohuila.co</a></li>
                            <li><strong>Sitio Web:</strong> Electrohuila en Línea</li>
                            <li><strong>Ventanilla electrónica:</strong> <a href="mailto:radicacion@electrohuila.co" className="text-blue-600 hover:text-blue-700">radicacion@electrohuila.co</a></li>
                        </ul>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-3">Ventanillas de Radicación Física:</h4>
                        <ul className="space-y-3 text-gray-700">
                            <li><strong>Sede Neiva:</strong> Servicio de Atención Integral y Recaudo Empresarial Edificio el SAIRE, Carrera 18 calle 9 Esquina, Barrio Calixto Leiva.</li>
                            <li><strong>Sede Garzón:</strong> Oficina Zona Centro, Calle 8 No.7-54 Barrio Centro.</li>
                            <li><strong>Sede La Plata:</strong> Oficina Zona Occidente, Calle 10 No. 5- 25 Barrio San Rafael.</li>
                            <li><strong>Sede Pitalito:</strong> Oficina Zona Sur, Calle 19 Sur No.3-05 Barrio Solarte.</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'consulta',
            title: '¿Qué información debe contener la consulta / reclamo?',
            content: (
                <div className="space-y-6">
                    <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Para el caso de las consultas:</h4>
                        <ul className="space-y-2 text-gray-700">
                            <li className="flex items-start space-x-3">
                                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                                <div>Nombres y apellidos del Titular, y/o su representante, y/o causahabientes</div>
                            </li>
                            <li className="flex items-start space-x-3">
                                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                                <div>El objeto de la consulta</div>
                            </li>
                            <li className="flex items-start space-x-3">
                                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                                <div>Dirección física, electrónica y teléfono de contacto del Titular y/o sus causahabientes o representantes</div>
                            </li>
                            <li className="flex items-start space-x-3">
                                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                                <div>Firma, número de identificación o procedimiento de validación correspondiente</div>
                            </li>
                            <li className="flex items-start space-x-3">
                                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                                <div>La persona interesada en ejercer este derecho deberá en todo caso, utilizar uno de los canales de atención habilitados para tal fin, que permita acreditar el envío y la recepción del reclamo</div>
                            </li>
                        </ul>
                    </div>
                    
                    <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Para el caso de los reclamos:</h4>
                        <ul className="space-y-2 text-gray-700">
                            <li className="flex items-start space-x-3">
                                <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                                <div>Nombres y apellidos del Titular y/o su representante y/o causahabientes</div>
                            </li>
                            <li className="flex items-start space-x-3">
                                <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                                <div>Descripción de los hechos que dan lugar al reclamo</div>
                            </li>
                            <li className="flex items-start space-x-3">
                                <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                                <div>Dirección física, electrónica y teléfono de contacto del Titular y/o sus causahabientes o representantes</div>
                            </li>
                            <li className="flex items-start space-x-3">
                                <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                                <div>Anexar los documentos que se quieran hacer valer</div>
                            </li>
                            <li className="flex items-start space-x-3">
                                <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                                <div>La persona interesada en ejercer este derecho deberá en todo caso, utilizar uno de los canales de atención habilitados para tal fin, que permita acreditar el envío y la recepción del reclamo</div>
                            </li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'proteger',
            title: '¿Cómo proteger mis datos personales?',
            content: (
                <div className="space-y-4">
                    <p className="text-gray-700">En cumplimiento y desarrollo de los principios normativos de finalidad y libertad, todo dato personal que sea utilizado por ElectroHuila S.A E.S.P., debe contar con una autorización previa la cual será ser obtenida a más tardar en el momento de la recolección del mismo, y deberá estar debidamente informada, la misma podrá otorgase de forma:</p>
                    
                    <ul className="space-y-2 text-gray-700 mb-4">
                        <li className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                            <div>(a) oral</div>
                        </li>
                        <li className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                            <div>(b) escrita</div>
                        </li>
                        <li className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                            <div>(c) mediante conductas del titular del dato que permitan concluir de forma razonable que otorgó la autorización</div>
                        </li>
                        <li className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                            <div>(d) mediante el diligenciamiento del FORMATO DE AUTORIZACIÓN DE TRATAMIENTO DE DATOS PERSONALES</div>
                        </li>
                    </ul>
                    
                    <p className="text-gray-700">De manera excepcional, esta autorización no será requerida en los siguientes casos:</p>
                    
                    <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                            <div>Cuando sea requerida por entidad pública o administrativa en cumplimiento de sus funciones legales como es el caso de ElectroHuila S.A. E.S.P., para el desarrollo de su objeto social, o por orden judicial.</div>
                        </li>
                        <li className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                            <div>Cuando se trate de datos de naturaleza pública.</div>
                        </li>
                        <li className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                            <div>En casos de emergencia médica o sanitaria.</div>
                        </li>
                        <li className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                            <div>Cuando sea tratamiento de información autorizado por la ley para fines históricos, estadísticos o científicos.</div>
                        </li>
                        <li className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                            <div>Cuando se trate de datos personales relacionados con el registro civil de las personas.</div>
                        </li>
                    </ul>
                </div>
            )
        },
        {
            id: 'registro',
            title: 'Registro Nacional de bases de datos',
            content: 'ElectroHuila S.A. E.S.P., en calidad de su rol de Responsable de los Datos de carácter personal obtenidos, recolectados y almacenados en el desarrollo de su objeto social, inscribirá y actualizará ante la Superintendencia de Industria y Comercio, mediante la Plataforma tecnológica del Registro Nacional de Bases de Datos (RNBD), cada una de las bases de datos personales contenidas en sus sistemas de información y demás archivos de ElectroHuila S.A. E.S.P., obligación que será efectuada en cumplimiento de la ley 1581 del 2012, y las disposiciones contempladas en el capítulo 26 del Decreto Único 1074 de 2015.'
        }
    ];

    const documentos = [
        {
            titulo: 'Marco normativo',
            url: '/documentos/protecion-datos/marco-normativo-pdp.pdf',
            descripcion: 'Fundamentos legales que rigen la protección de datos',
            tamaño: '2.4 MB'
        },
        {
            titulo: 'Política de privacidad, tratamiento y protección de datos personales',
            url: '/documentos/protecion-datos/POLITICA_DE_PRI_20230515_114541167-1.pdf',
            descripcion: 'Documento completo de políticas de privacidad',
            tamaño: '3.1 MB'
        },
        {
            titulo: 'Formato autorización tratamiento de datos personales',
            url: '/documentos/protecion-datos/formato-autorizacion-tratamiento-datos-personales.pdf',
            descripcion: 'Formulario para autorizar el tratamiento de datos',
            tamaño: '1.2 MB'
        },
        {
            titulo: 'Política de seguridad de la información',
            url: '/documentos/protecion-datos/Politica-de-Seguridad-de-la-Informacion.pdf',
            descripción: 'Medidas de seguridad para protección de información',
            tamaño: '2.8 MB'
        }
    ];

    const estadisticas = [
        { numero: '100%', descripcion: 'Cumplimiento normativo' },
        { numero: '24/7', descripcion: 'Protección activa' },
        { numero: '15', descripcion: 'Días máx. respuesta' },
        { numero: '4', descripcion: 'Canales de atención' }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header empresarial */}
            <div className="bg-white border-b border-gray-200">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    {/* Breadcrumbs */}
                    <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-6">
                        <Link href="/" className="hover:text-blue-600 transition-colors">
                            Inicio
                        </Link>
                        <span>/</span>
                        <span className="text-gray-900 font-medium">Protección de Datos Personales</span>
                    </nav>

                    <div className="max-w-3xl">
                        <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                            Protección de Datos Personales
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            Garantizamos la protección, privacidad y seguridad de sus datos personales conforme a la normativa vigente colombiana.
                        </p>
                    </div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Estadísticas */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                    {estadisticas.map((stat, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center">
                            <div className="text-2xl lg:text-3xl font-bold text-blue-600 mb-2">
                                {stat.numero}
                            </div>
                            <p className="text-gray-600 text-sm">{stat.descripcion}</p>
                        </div>
                    ))}
                </div>

                {/* Información institucional */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-16">
                    <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                        </div>
                        <div>
                            <h2 className="text-xl font-bold text-gray-900 mb-4">ELECTROHUILA S.A. E.S.P.</h2>
                            <div className="grid md:grid-cols-2 gap-4 text-gray-700">
                                <div>
                                    <span className="font-medium">NIT:</span> 891.180.001-1
                                </div>
                                <div>
                                    <span className="font-medium">Teléfono:</span>{' '}
                                    <a href="tel:6088664600" className="text-blue-600 hover:text-blue-700">
                                        (608) 8664600 Ext. 1000
                                    </a>
                                </div>
                                <div className="md:col-span-2">
                                    <span className="font-medium">Dirección:</span> Complejo Ecológico el Bote, Km 1 Vía Palermo
                                </div>
                                <div>
                                    <span className="font-medium">Email:</span>{' '}
                                    <a href="mailto:servicioalclienteeh@electrohuila.co" className="text-blue-600 hover:text-blue-700">
                                        servicioalclienteeh@electrohuila.co
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="mt-8 pt-8 border-t border-gray-200">
                        <p className="text-gray-700 leading-relaxed">
                            Se permite informar a todos sus clientes y a la comunidad en general, que en virtud de lo previsto 
                            por la normatividad aplicable en la materia, todas las personas naturales, titulares de datos personales 
                            tienen el derecho de conocer, actualizar y rectificar los datos personales que se encuentren almacenados 
                            en las bases de datos de nuestra Empresa y solicitar la supresión de los mismos cuando consideren que en 
                            su tratamiento no se respetan los principios, los derechos y las garantías constitucionales y legales.
                        </p>
                    </div>
                </div>

                {/* Preguntas frecuentes */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-16">
                    <div className="p-8 border-b border-gray-200">
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">Preguntas Frecuentes</h2>
                        <p className="text-gray-600">Información detallada sobre el manejo de datos personales</p>
                    </div>

                    <div className="divide-y divide-gray-200">
                        {accordionItems.map((item) => (
                            <div key={item.id}>
                                <button 
                                    className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                                    onClick={() => toggleItem(item.id)}
                                >
                                    <h3 className="text-lg font-medium text-gray-900 pr-8">{item.title}</h3>
                                    <div className={`transform transition-transform duration-200 ${
                                        isExpanded(item.id) ? 'rotate-180' : ''
                                    }`}>
                                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </button>
                                
                                {isExpanded(item.id) && (
                                    <div className="px-8 pb-6 bg-gray-50">
                                        <div className="border-l-4 border-blue-600 pl-6">
                                            {typeof item.content === 'string' ? (
                                                <p className="text-gray-700 leading-relaxed">{item.content}</p>
                                            ) : (
                                                <div className="text-gray-700 leading-relaxed">{item.content}</div>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Documentos */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                    <div className="p-8 border-b border-gray-200">
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">Documentos Oficiales</h2>
                        <p className="text-gray-600">
                            Acceda a los documentos oficiales que regulan el tratamiento y protección de datos personales
                        </p>
                    </div>
                    
                    <div className="p-8">
                        <div className="space-y-4">
                            {documentos.map((doc, index) => (
                                <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                                    <div className="flex items-center space-x-4">
                                        <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        
                                        <div>
                                            <h3 className="font-medium text-gray-900 mb-1">{doc.titulo}</h3>
                                            <div className="flex items-center space-x-4 text-sm text-gray-500">
                                                <span>PDF</span>
                                                <span>{doc.tamaño}</span>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <a 
                                        href={doc.url} 
                                        className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors"
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                    >
                                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                        </svg>
                                        Descargar
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}