"use client";
import React, { useState, useRef, useEffect } from 'react';
import { Search, X, ChevronRight, Clock, Lightbulb, FileText, Phone, MapPin, Calculator, CreditCard, AlertCircle, User, Building, Zap, Home, Settings } from 'lucide-react';
import { useRouter } from 'next/navigation';

// 🚀 BASE DE DATOS MEGA COMPLETA CON INTELIGENCIA ARTIFICIAL
const SITE_CONTENT = [
  // ============ PAGOS Y FACTURACIÓN ============
  { 
    id: 'factura-pago', 
    text: 'Pagar factura de electricidad', 
    url: '/servicios/pagar-factura',
    category: 'Pagos',
    icon: <CreditCard size={16} />,
    priority: 10,
    description: 'Paga tu factura de energía eléctrica en línea con PSE, tarjeta de crédito o débito',
    keywords: [
      // BÁSICOS - PAGAR
      'pagar', 'pago', 'pagos', 'cancelar', 'cancela', 'abonar', 'abono', 'saldar', 'liquidar',
      // BÁSICOS - FACTURA  
      'factura', 'facturas', 'cuenta', 'cuentas', 'recibo', 'recibos', 'bill', 'facturacion',
      // DINERO Y MÉTODOS
      'dinero', 'plata', 'efectivo', 'tarjeta', 'debito', 'credito', 'bancolombia', 'davivienda',
      // PSE Y BANCOS
      'pse', 'banco', 'bancos', 'online', 'linea', 'virtual', 'internet', 'web', 'portal',
      // URGENCIA
      'urgente', 'rapido', 'ahora', 'inmediato', 'ya', 'hoy', 'cortan', 'suspension',
      // ERRORES COMUNES
      'faktura', 'paktura', 'pagar faktura', 'como pago', 'donde pago', 'pago factura',
      'fatura', 'payar', 'pagarfactura', 'pagofactura', 'pago luz', 'pagar luz',
      // FRASES COMPLETAS
      'como pagar la factura', 'donde puedo pagar', 'pagar factura electrohuila',
      'metodos de pago', 'formas de pagar', 'pago en linea', 'pago electronico',
      // DESESPERACIÓN
      'me van a cortar', 'van a suspender', 'como evitar corte', 'pago urgente',
      'no puedo pagar', 'ayuda pagar', 'facilidades pago', 'acuerdo pago'
    ]
  },
  { 
    id: 'consulta-factura', 
    text: 'Consultar estado de factura', 
    url: '/servicios/consulta-facturas',
    category: 'Pagos',
    icon: <FileText size={16} />,
    priority: 9,
    description: 'Consulta el valor de tu factura, fecha de vencimiento y estado de pagos',
    keywords: [
      'consultar', 'consulta', 'ver', 'revisar', 'mirar', 'buscar', 'encontrar', 'saber',
      'factura', 'facturas', 'cuenta', 'cuentas', 'recibo', 'recibos', 'estado',
      'valor', 'cuanto', 'debo', 'debe', 'saldo', 'deuda', 'pendiente', 'vencida',
      'historial', 'historico', 'anterior', 'anteriores', 'mes', 'meses',
      'consultar factura', 'ver factura', 'estado cuenta', 'mi factura',
      'cuanto debo', 'valor factura', 'cuando vence', 'fecha vencimiento',
      'numero de cuenta', 'codigo', 'referencia', 'cedula', 'nit',
      'mis facturas', 'facturas pendientes', 'facturas pagadas'
    ]
  },
  { 
    id: 'duplicado-factura', 
    text: 'Duplicado de factura', 
    url: '/servicios/duplicado-factura',
    category: 'Pagos',
    icon: <FileText size={16} />,
    priority: 7,
    description: 'Obtén una copia de tu factura si la perdiste o se dañó',
    keywords: [
      'duplicado', 'copia', 'nueva', 'otro', 'otra', 'segundo', 'reimpresion',
      'perdida', 'perdi', 'perdio', 'extravie', 'extraviada', 'perdio',
      'dañada', 'rota', 'maltratada', 'no tengo', 'sin factura', 'falta',
      'reimprimir', 'imprimir', 'generar', 'descargar', 'solicitar',
      'no me llego', 'no llego', 'donde esta', 'perdio correo'
    ]
  },

  // ============ TARIFAS Y PRECIOS ============
  { 
    id: 'tarifas-energia', 
    text: 'Tarifas y precios de energía eléctrica', 
    url: '/tarifas',
    category: 'Tarifas',
    icon: <Calculator size={16} />,
    priority: 8,
    description: 'Conoce las tarifas vigentes de energía por estrato y tipo de usuario',
    keywords: [
      'tarifas', 'tarifa', 'precios', 'precio', 'costo', 'costos', 'valor', 'valores', 'cobro',
      'kwh', 'kw', 'kilowatio', 'kilowatios', 'energia', 'electricidad', 'luz', 'servicio',
      'estrato', 'estratos', '1', '2', '3', '4', '5', '6', 'uno', 'dos', 'tres',
      'residencial', 'comercial', 'industrial', 'oficial', 'publico',
      'cuanto cuesta', 'cuanto vale', 'que precio', 'cobran', 'cargo',
      'tarifa energia', 'precio luz', 'costo electricidad', 'valor kwh',
      'tabla tarifas', 'tarifario', 'lista precios',
      // ERRORES COMUNES
      'tarfas', 'tariffa', 'precios luz', 'valor energia', 'tarfias',
      // PREGUNTAS FRECUENTES
      'porque sube', 'porque aumenta', 'subsidio', 'contribucion',
      'cargo fijo', 'cargo variable', 'alumbrado publico'
    ]
  },
  { 
    id: 'calculadora-consumo', 
    text: 'Calculadora de consumo eléctrico', 
    url: '/servicios/calculadora-consumo',
    category: 'Tarifas',
    icon: <Calculator size={16} />,
    priority: 6,
    description: 'Calcula cuánto consumen tus electrodomésticos y simula tu factura',
    keywords: [
      'calculadora', 'calcular', 'calculos', 'calculo', 'simulador', 'simular', 'estimar',
      'consumo', 'gasto', 'gastos', 'cuanto', 'gastare', 'consumire', 'usare',
      'electrodomesticos', 'nevera', 'televisor', 'aire', 'plancha', 'lavadora',
      'kwh', 'energia', 'electricidad', 'luz', 'factura', 'aparatos',
      'calculadora consumo', 'calcular gasto', 'simular factura', 'medir consumo',
      'ahorrar', 'ahorro', 'eficiencia', 'tips', 'consejos', 'reducir'
    ]
  },

  // ============ SERVICIOS TÉCNICOS ============
  { 
    id: 'cortes-programados', 
    text: 'Suspensiones y cortes programados', 
    url: '/suspensiones-programadas',
    category: 'Servicios',
    icon: <AlertCircle size={16} />,
    priority: 9,
    description: 'Consulta las suspensiones programadas del servicio por mantenimiento',
    keywords: [
      'cortes', 'corte', 'suspension', 'suspensiones', 'suspender', 'programado',
      'programados', 'programado', 'programadas', 'mantenimiento', 'reparacion',
      'sin luz', 'no hay luz', 'apagon', 'apagones', 'interrupcion', 'falla',
      'cuando', 'donde', 'que horas', 'horario', 'hora', 'tiempo', 'duracion',
      'barrio', 'sector', 'zona', 'comuna', 'vereda', 'residencial',
      // UBICACIONES ESPECÍFICAS
      'neiva', 'garzon', 'pitalito', 'la plata', 'huila', 'sur', 'norte',
      'centro', 'oriente', 'occidente', 'timanco', 'caguán', 'macarena',
      'cortes programados', 'mantenimiento luz', 'suspension energia',
      'cortes hoy', 'cortes mañana', 'esta semana', 'cronograma',
      // EMERGENCIAS
      'urgente', 'emergencia', 'ahora', 'ya', 'inmediato'
    ]
  },
  { 
    id: 'reportar-dano', 
    text: 'Reportar daños y emergencias eléctricas', 
    url: '/servicios/reportar-dano',
    category: 'Servicios',
    icon: <AlertCircle size={16} />,
    priority: 10,
    description: 'Reporta daños en el sistema eléctrico, cables caídos o emergencias',
    keywords: [
      'reportar', 'reporto', 'informar', 'avisar', 'denunciar', 'notificar',
      'daño', 'daños', 'dano', 'problema', 'problemas', 'falla', 'fallas',
      'averia', 'averias', 'emergencia', 'urgente', 'peligro', 'riesgo',
      'sin luz', 'no hay luz', 'se fue', 'apagon', 'oscuro', 'oscuridad',
      'poste', 'cable', 'transformador', 'medidor', 'contador', 'acometida',
      'chispa', 'chispas', 'corto', 'quemado', 'humo', 'fuego', 'incendio',
      'reportar daño', 'sin energia', 'emergencia luz', 'cable caido',
      'poste caido', 'transformador dañado', 'corto circuito',
      'llamar emergencia', 'numero emergencia', '115', 'linea emergencia'
    ]
  },
  { 
    id: 'nueva-conexion', 
    text: 'Nueva conexión del servicio eléctrico', 
    url: '/servicios/nueva-conexion',
    category: 'Servicios',
    icon: <Zap size={16} />,
    priority: 7,
    description: 'Solicita conexión de energía eléctrica para tu casa, local o negocio',
    keywords: [
      'nueva', 'nuevo', 'conexion', 'conectar', 'instalar', 'instalacion',
      'acometida', 'servicio', 'luz', 'energia', 'electricidad', 'enganche',
      'casa', 'local', 'negocio', 'apartamento', 'finca', 'predio',
      'solicitar', 'pedir', 'tramitar', 'como', 'requisitos', 'documentos',
      'nueva conexion', 'instalar luz', 'pedir energia', 'contratar',
      'formulario', 'solicitud', 'tramite', 'proceso', 'pasos',
      'construccion', 'obra', 'urbanizacion', 'conjunto'
    ]
  },
  { 
    id: 'reconexion', 
    text: 'Reconexión del servicio suspendido', 
    url: '/servicios/reconexion',
    category: 'Servicios',
    icon: <Zap size={16} />,
    priority: 8,
    description: 'Reactiva tu servicio si fue suspendido por falta de pago',
    keywords: [
      'reconexion', 'reconectar', 'reconeccion', 'activar', 'reactivar', 'restablecer',
      'suspendido', 'cortado', 'desconectado', 'bloqueado', 'cancelado',
      'pagar', 'pagando', 'pague', 'cancelar', 'deuda', 'pendiente',
      'volver', 'conectar', 'servicio', 'luz', 'energia', 'normalizar',
      'me cortaron', 'no tengo luz', 'suspendieron', 'bloquearon',
      'como reconectar', 'volver luz', 'activar servicio'
    ]
  },

  // ============ UBICACIONES Y PUNTOS ============
  { 
    id: 'puntos-pago', 
    text: 'Puntos de pago y oficinas', 
    url: '/puntos-de-pago',
    category: 'Pagos',
    icon: <MapPin size={16} />,
    priority: 8,
    description: 'Encuentra dónde pagar tu factura: bancos, corresponsales y oficinas',
    keywords: [
      'puntos', 'donde', 'ubicacion', 'lugares', 'sitios', 'locales',
      'pago', 'pagar', 'pagos', 'cancelar', 'oficinas', 'sedes',
      'bancos', 'banco', 'corresponsales', 'cajeros', 'red',
      'efecty', 'baloto', 'supergiros', 'western', 'union', 'gana',
      'drogas', 'farmacias', 'tiendas', 'almacenes', 'supermercados',
      // UBICACIONES ESPECÍFICAS
      'neiva', 'garzon', 'pitalito', 'la plata', 'cerca', 'cercano',
      'centro', 'sur', 'norte', 'occidente', 'oriente',
      'donde pagar', 'puntos pago', 'oficinas pago', 'bancos cerca',
      'corresponsal cerca', 'efecty cerca', 'baloto cerca'
    ]
  },
  { 
    id: 'puntos-atencion', 
    text: 'Puntos de atención al cliente', 
    url: '/puntos-de-atencion',
    category: 'Contacto',
    icon: <MapPin size={16} />,
    priority: 7,
    description: 'Oficinas de atención presencial para trámites y consultas',
    keywords: [
      'puntos', 'oficinas', 'sedes', 'atencion', 'servicio', 'cliente',
      'donde', 'ubicacion', 'direccion', 'direcciones', 'como llegar',
      'presencial', 'personalmente', 'ir', 'visitar', 'acercarse',
      'neiva', 'garzon', 'pitalito', 'la plata', 'huila', 'centro',
      'horarios', 'horario', 'abierto', 'cerrado', 'funciona', 'atiende',
      'puntos atencion', 'oficinas electrohuila', 'sedes electrohuila',
      'atencion presencial', 'tramites presenciales'
    ]
  },

  // ============ CONTACTO Y SOPORTE ============
  { 
    id: 'contactenos', 
    text: 'Contáctenos - Atención al cliente', 
    url: '/contactenos',
    category: 'Contacto',
    icon: <Phone size={16} />,
    priority: 9,
    description: 'Números telefónicos, email y canales de atención al cliente',
    keywords: [
      'contacto', 'contactar', 'contactenos', 'comunicarse', 'hablar',
      'telefono', 'telefonos', 'celular', 'llamar', 'llamada', 'numero',
      'email', 'correo', 'mail', 'escribir', 'enviar', 'mensaje',
      'whatsapp', 'chat', 'mensaje', 'mensajes', 'texto',
      'pqr', 'pqrs', 'peticion', 'queja', 'reclamo', 'sugerencia',
      'ayuda', 'soporte', 'atencion', 'servicio', 'cliente',
      // NÚMEROS ESPECÍFICOS
      '115', 'emergencia', 'urgente', 'linea', 'gratuita',
      'como contactar', 'telefono electrohuila', 'numero electrohuila',
      'atencion cliente', 'servicio cliente', 'linea atencion',
      'emergencias', 'fallas', 'daños', 'averias'
    ]
  },
  { 
    id: 'pqrs', 
    text: 'PQRS - Peticiones, quejas y reclamos', 
    url: '/servicios/pqrs',
    category: 'Contacto',
    icon: <FileText size={16} />,
    priority: 6,
    description: 'Sistema de peticiones, quejas, reclamos y sugerencias',
    keywords: [
      'pqr', 'pqrs', 'peticion', 'peticiones', 'queja', 'quejas',
      'reclamo', 'reclamos', 'sugerencia', 'sugerencias', 'felicitacion',
      'formulario', 'radicar', 'radicacion', 'derecho', 'derechos',
      'consumidor', 'usuario', 'cliente', 'atencion', 'respuesta',
      'inconformidad', 'problema', 'solucion', 'ayuda', 'apoyo'
    ]
  },

  // ============ TRÁMITES Y CERTIFICADOS ============
  { 
    id: 'tramites-usuarios', 
    text: 'Trámites de usuarios', 
    url: '/institucional/tramites-usuarios',
    category: 'Trámites',
    icon: <FileText size={16} />,
    priority: 6,
    description: 'Todos los trámites disponibles para usuarios del servicio',
    keywords: [
      'tramites', 'tramite', 'solicitudes', 'solicitud', 'peticion',
      'certificados', 'certificado', 'constancia', 'documento', 'carta',
      'formularios', 'formulario', 'formato', 'papeles', 'documentacion',
      'gestiones', 'gestion', 'procesos', 'proceso', 'procedimiento',
      'como', 'requisitos', 'documentos', 'necesito', 'pasos',
      'certificacion', 'paz y salvo', 'servicio', 'conexion',
      'cambio', 'nombre', 'propietario', 'usuario', 'tarifa'
    ]
  },
  { 
    id: 'certificados', 
    text: 'Certificados y constancias', 
    url: '/servicios/certificados',
    category: 'Trámites',
    icon: <FileText size={16} />,
    priority: 5,
    description: 'Solicita certificados de paz y salvo, conexión y otros',
    keywords: [
      'certificado', 'certificados', 'constancia', 'constancias',
      'paz y salvo', 'conexion', 'servicio', 'usuario', 'cliente',
      'documento', 'carta', 'comprobante', 'validacion',
      'solicitar', 'pedir', 'tramitar', 'generar', 'expedir'
    ]
  },

  // ============ USUARIOS Y CUENTA ============
  { 
    id: 'crear-cuenta', 
    text: 'Crear cuenta de usuario', 
    url: '/servicios/crear-cuenta',
    category: 'Usuario',
    icon: <User size={16} />,
    priority: 5,
    description: 'Regístrate en el portal web para gestionar tu servicio en línea',
    keywords: [
      'crear', 'registro', 'registrarse', 'cuenta', 'usuario', 'perfil',
      'inscribirse', 'nueva', 'abrir', 'portal', 'online', 'web',
      'electrohuila linea', 'virtual', 'internet', 'acceso',
      'contraseña', 'password', 'login', 'ingresar', 'entrar'
    ]
  },
  { 
    id: 'portal-usuarios', 
    text: 'Portal de usuarios en línea', 
    url: 'https://enlinea.electrohuila.com.co',
    category: 'Usuario',
    icon: <Settings size={16} />,
    priority: 7,
    description: 'Accede al portal web para gestionar tu servicio eléctrico',
    keywords: [
      'portal', 'linea', 'online', 'web', 'internet', 'virtual',
      'usuario', 'usuarios', 'cliente', 'clientes', 'acceso',
      'electrohuila linea', 'en linea', 'ingresar', 'entrar',
      'login', 'sesion', 'cuenta', 'perfil', 'gestion'
    ]
  },

  // ============ EMPRESA E INSTITUCIONAL ============
  { 
    id: 'quienes-somos', 
    text: 'Quiénes somos - Información institucional', 
    url: '/institucional/quienes-somos',
    category: 'Empresa',
    icon: <Building size={16} />,
    priority: 3,
    description: 'Conoce la historia, misión, visión y valores de ElectroHuila',
    keywords: [
      'quienes', 'somos', 'empresa', 'electrohuila', 'historia',
      'mision', 'vision', 'valores', 'objetivos', 'metas',
      'nosotros', 'acerca', 'informacion', 'corporativo',
      'electrificadora', 'huila', 'neiva', 'energia', 'esp'
    ]
  },
  { 
    id: 'boletines-comunicados', 
    text: 'Boletines y comunicados de prensa', 
    url: '/boletines-comunicados',
    category: 'Noticias',
    icon: <FileText size={16} />,
    priority: 4,
    description: 'Lee los últimos comunicados, noticias y boletines de prensa',
    keywords: [
      'boletines', 'boletin', 'comunicados', 'comunicado',
      'noticias', 'noticia', 'informes', 'informe', 'novedades',
      'avisos', 'aviso', 'anuncios', 'anuncio', 'publicacion',
      'prensa', 'medios', 'informacion', 'actualizacion'
    ]
  },

  // ============ NAVEGACIÓN GENERAL ============
  { 
    id: 'inicio', 
    text: 'Página de inicio', 
    url: '/',
    category: 'Navegación',
    icon: <Home size={16} />,
    priority: 5,
    description: 'Vuelve a la página principal de ElectroHuila',
    keywords: [
      'inicio', 'home', 'principal', 'portada', 'electrohuila',
      'pagina', 'website', 'sitio', 'web', 'main', 'index'
    ]
  }
];

// 🧠 INTELIGENCIA ARTIFICIAL PARA BÚSQUEDA
const AI_SEARCH_ENGINE = {
  // Sinónimos y equivalencias inteligentes
  synonyms: {
    'pagar': ['cancelar', 'abonar', 'saldar', 'liquidar', 'pago', 'pagos'],
    'factura': ['cuenta', 'recibo', 'bill', 'fatura', 'faktura'],
    'luz': ['energia', 'electricidad', 'servicio', 'corriente'],
    'sin luz': ['apagon', 'corte', 'suspension', 'no hay luz', 'se fue luz'],
    'donde': ['ubicacion', 'sitio', 'lugar', 'direccion'],
    'cuanto': ['valor', 'precio', 'costo', 'tarifa'],
    'ayuda': ['soporte', 'asistencia', 'apoyo', 'atencion'],
    'problema': ['inconveniente', 'falla', 'averia', 'daño'],
    'telefono': ['numero', 'celular', 'contacto', 'llamar'],
    'corte': ['suspension', 'desconexion', 'interrupcion']
  },

  // Corrección de errores de escritura más común
  corrections: {
    'faktura': 'factura',
    'fatura': 'factura',
    'paktura': 'factura',
    'elektrihuila': 'electrohuila',
    'elektrohuila': 'electrohuila',
    'tarfas': 'tarifas',
    'tariffa': 'tarifas',
    'reconeccion': 'reconexion',
    'coneccion': 'conexion',
    'conexcion': 'conexion',
    'suspención': 'suspension',
    'reporto': 'reportar',
    'pagarfactura': 'pagar factura',
    'pagofactura': 'pago factura',
    'sinluz': 'sin luz',
    'nohayluz': 'no hay luz'
  },

  // Patrones de intención
  intentPatterns: {
    payment: ['pagar', 'pago', 'cancelar', 'dinero', 'banco', 'pse'],
    billing: ['factura', 'cuenta', 'recibo', 'valor', 'cuanto debo'],
    technical: ['sin luz', 'corte', 'daño', 'falla', 'problema', 'reportar'],
    location: ['donde', 'ubicacion', 'oficina', 'punto', 'direccion'],
    contact: ['telefono', 'contacto', 'ayuda', 'numero', 'llamar'],
    emergency: ['emergencia', 'urgente', 'rapido', 'ya', 'ahora']
  },

  // Contexto regional
  regionalContext: {
    'huila': ['neiva', 'garzon', 'pitalito', 'la plata'],
    'barrios': ['centro', 'sur', 'norte', 'timanco', 'caguán'],
    'servicios': ['residencial', 'comercial', 'industrial']
  }
};

export default function SearchComponent(): React.JSX.Element {
  const [query, setQuery] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [filteredSuggestions, setFilteredSuggestions] = useState<any[]>([]);
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [searchHistory, setSearchHistory] = useState<string[]>([]);
  
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  // Detectar tamaño de pantalla
  useEffect(() => {
    const checkMobile = (): void => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  // Cargar búsquedas recientes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedSearches = localStorage.getItem('electrohuila_recent_searches');
      const storedHistory = localStorage.getItem('electrohuila_search_history');
      
      if (storedSearches) {
        try {
          setRecentSearches(JSON.parse(storedSearches));
        } catch (e) {
          console.error('Error parsing recent searches:', e);
        }
      }
      
      if (storedHistory) {
        try {
          setSearchHistory(JSON.parse(storedHistory));
        } catch (e) {
          console.error('Error parsing search history:', e);
        }
      }
    }
  }, []);

  // 🤖 FUNCIÓN DE BÚSQUEDA CON INTELIGENCIA ARTIFICIAL
  const intelligentSearch = (searchQuery: string) => {
    if (!searchQuery.trim()) return [];
    
    // 1. NORMALIZACIÓN AVANZADA
    const normalizeText = (text: string): string => {
      return text
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '') // Quitar acentos
        .replace(/[^\w\s]/g, ' ') // Reemplazar caracteres especiales con espacios
        .replace(/\s+/g, ' ') // Espacios múltiples a uno
        .trim();
    };

    let processedQuery = normalizeText(searchQuery);

    // 2. CORRECCIÓN AUTOMÁTICA DE ERRORES
    Object.entries(AI_SEARCH_ENGINE.corrections).forEach(([wrong, correct]) => {
      const regex = new RegExp(`\\b${wrong}\\b`, 'gi');
      processedQuery = processedQuery.replace(regex, correct);
    });

    // 3. EXPANSIÓN CON SINÓNIMOS
    const expandWithSynonyms = (text: string): string[] => {
      const words = text.split(' ');
      const expandedQueries = [text];
      
      words.forEach(word => {
        if (AI_SEARCH_ENGINE.synonyms[word]) {
          AI_SEARCH_ENGINE.synonyms[word].forEach(synonym => {
            const newQuery = text.replace(new RegExp(`\\b${word}\\b`, 'gi'), synonym);
            if (!expandedQueries.includes(newQuery)) {
              expandedQueries.push(newQuery);
            }
          });
        }
      });
      
      return expandedQueries;
    };

    const queryVariations = expandWithSynonyms(processedQuery);
    const words = processedQuery.split(' ').filter(word => word.length > 0);

    // 4. DETECCIÓN DE INTENCIÓN
    const detectIntent = (query: string): string[] => {
      const intents: string[] = [];
      
      Object.entries(AI_SEARCH_ENGINE.intentPatterns).forEach(([intent, patterns]) => {
        patterns.forEach(pattern => {
          if (query.includes(pattern)) {
            intents.push(intent);
          }
        });
      });
      
      return intents;
    };

    const detectedIntents = detectIntent(processedQuery);

    // 5. BÚSQUEDA CON PUNTUACIÓN INTELIGENTE
    const results = SITE_CONTENT.map(item => {
      let score = 0;
      let reasons: string[] = [];
      
      const titleNormalized = normalizeText(item.text);
      const categoryNormalized = normalizeText(item.category);
      const keywordsNormalized = item.keywords?.map(k => normalizeText(k)) || [];
      const descriptionNormalized = normalizeText(item.description || '');

      // 🎯 BÚSQUEDA EXACTA COMPLETA (peso máximo)
      queryVariations.forEach(variation => {
        if (titleNormalized.includes(variation)) {
          score += 2000;
          reasons.push('Coincidencia exacta en título');
        }
        if (descriptionNormalized.includes(variation)) {
          score += 1500;
          reasons.push('Coincidencia en descripción');
        }
      });

      // 🎯 BÚSQUEDA EN TÍTULO POR PALABRAS
      words.forEach(word => {
        if (word.length > 1) {
          if (titleNormalized.includes(word)) {
            score += 800;
            reasons.push(`"${word}" en título`);
          }
          if (titleNormalized.split(' ').some(titleWord => 
            titleWord.startsWith(word) || word.startsWith(titleWord)
          )) {
            score += 600;
            reasons.push(`"${word}" similar en título`);
          }
        }
      });

      // 🎯 BÚSQUEDA AVANZADA EN KEYWORDS
      if (item.keywords) {
        keywordsNormalized.forEach(keyword => {
          queryVariations.forEach(variation => {
            // Coincidencia exacta
            if (keyword === variation) {
              score += 1200;
              reasons.push('Keyword exacta');
            }
            // Keyword contiene query
            else if (keyword.includes(variation)) {
              score += 800;
              reasons.push('Keyword contiene búsqueda');
            }
            // Query contiene keyword
            else if (variation.includes(keyword) && keyword.length > 2) {
              score += 600;
              reasons.push('Búsqueda contiene keyword');
            }
          });

          // Búsqueda por palabras individuales
          words.forEach(word => {
            if (word.length > 1) {
              if (keyword.includes(word)) {
                score += 400;
                reasons.push(`"${word}" en keywords`);
              }
              
              // Búsqueda fuzzy mejorada
              if (word.length > 2) {
                const keywordWords = keyword.split(' ');
                keywordWords.forEach(kw => {
                  // Coincidencias parciales inteligentes
                  if (kw.length > 2 && (kw.includes(word) || word.includes(kw))) {
                    score += 200;
                  }
                  // Coincidencias por inicio de palabra
                  if (kw.startsWith(word) || word.startsWith(kw)) {
                    score += 300;
                  }
                });
              }
            }
          });
        });
      }

      // 🎯 BÚSQUEDA EN CATEGORÍA
      words.forEach(word => {
        if (word.length > 1 && categoryNormalized.includes(word)) {
          score += 300;
          reasons.push(`"${word}" en categoría`);
        }
      });

      // 🎯 BONIFICACIÓN POR INTENCIÓN
      detectedIntents.forEach(intent => {
        if (intent === 'payment' && item.category === 'Pagos') {
          score += 500;
          reasons.push('Intención de pago detectada');
        }
        if (intent === 'technical' && item.category === 'Servicios') {
          score += 500;
          reasons.push('Intención técnica detectada');
        }
        if (intent === 'emergency' && item.id.includes('reportar')) {
          score += 800;
          reasons.push('Emergencia detectada');
        }
        if (intent === 'location' && item.category === 'Contacto') {
          score += 400;
          reasons.push('Búsqueda de ubicación');
        }
      });

      // 🎯 BONIFICACIÓN POR PRIORIDAD
      score += (item.priority || 1) * 100;

      // 🎯 BÚSQUEDA FONÉTICA AVANZADA
      const phoneticMatch = (str1: string, str2: string): boolean => {
        const replacements = {
          'c': 'k', 'k': 'c', 'z': 's', 's': 'z', 'y': 'i', 'i': 'y',
          'b': 'v', 'v': 'b', 'g': 'j', 'j': 'g', 'll': 'y', 'h': ''
        };
        
        let phoneticStr1 = str1;
        let phoneticStr2 = str2;
        
        Object.entries(replacements).forEach(([from, to]) => {
          phoneticStr1 = phoneticStr1.replace(new RegExp(from, 'g'), to);
          phoneticStr2 = phoneticStr2.replace(new RegExp(from, 'g'), to);
        });
        
        return phoneticStr1.includes(phoneticStr2) || phoneticStr2.includes(phoneticStr1);
      };

      // Aplicar búsqueda fonética
      words.forEach(word => {
        if (word.length > 2) {
          keywordsNormalized.forEach(keyword => {
            if (phoneticMatch(keyword, word)) {
              score += 150;
              reasons.push(`"${word}" fonéticamente similar`);
            }
          });
        }
      });

      // 🎯 BÚSQUEDA POR CONTEXTO REGIONAL
      Object.entries(AI_SEARCH_ENGINE.regionalContext).forEach(([context, terms]) => {
        terms.forEach(term => {
          if (processedQuery.includes(term)) {
            if (item.keywords?.some(k => normalizeText(k).includes(term))) {
              score += 300;
              reasons.push(`Contexto regional: ${term}`);
            }
          }
        });
      });

      // 🎯 PENALIZACIÓN POR LONGITUD DE QUERY vs RESULTADO
      const queryLength = processedQuery.length;
      const titleLength = titleNormalized.length;
      if (Math.abs(queryLength - titleLength) > 20) {
        score *= 0.9; // Pequeña penalización por diferencia de longitud
      }

      return { 
        ...item, 
        score: Math.round(score), 
        matchReasons: reasons,
        matchedQuery: processedQuery 
      };
    })
    .filter(item => item.score > 50) // Umbral mínimo más inteligente
    .sort((a, b) => b.score - a.score);

    // 6. SI NO HAY RESULTADOS, BÚSQUEDA INDIVIDUAL POR PALABRAS
    if (results.length === 0 && words.length > 1) {
      const wordResults: any[] = [];
      words.forEach(word => {
        if (word.length > 2) {
          const singleWordResults = intelligentSearch(word);
          wordResults.push(...singleWordResults.slice(0, 2));
        }
      });
      
      // Eliminar duplicados y devolver
      const uniqueResults = wordResults.filter((item, index, self) => 
        index === self.findIndex(i => i.id === item.id)
      );
      
      return uniqueResults.slice(0, 6);
    }

    // 7. APRENDE DE LAS BÚSQUEDAS (para mejorar futuras búsquedas)
    if (results.length > 0 && typeof window !== 'undefined') {
      const searchPattern = {
        query: searchQuery,
        correctedQuery: processedQuery,
        topResult: results[0]?.id,
        intent: detectedIntents,
        timestamp: Date.now()
      };
      
      const learningData = JSON.parse(
        localStorage.getItem('electrohuila_search_learning') || '[]'
      );
      learningData.push(searchPattern);
      
      // Mantener solo los últimos 100 patrones
      if (learningData.length > 100) {
        learningData.splice(0, learningData.length - 100);
      }
      
      localStorage.setItem('electrohuila_search_learning', JSON.stringify(learningData));
    }

    return results.slice(0, 8);
  };

  // Guardar búsqueda reciente
  const saveRecentSearch = (search: string): void => {
    if (!search.trim()) return;
    
    const updatedSearches = [
      search, 
      ...recentSearches.filter(s => s !== search)
    ].slice(0, 5);
    
    const updatedHistory = [
      search,
      ...searchHistory.filter(s => s !== search)
    ].slice(0, 20);
    
    setRecentSearches(updatedSearches);
    setSearchHistory(updatedHistory);
    
    if (typeof window !== 'undefined') {
      localStorage.setItem('electrohuila_recent_searches', JSON.stringify(updatedSearches));
      localStorage.setItem('electrohuila_search_history', JSON.stringify(updatedHistory));
    }
  };

  // Filtrar sugerencias basado en la consulta
  useEffect(() => {
    if (query.trim()) {
      const results = intelligentSearch(query);
      setFilteredSuggestions(results);
    } else {
      setFilteredSuggestions([]);
    }
    setSelectedIndex(-1);
  }, [query]);

  // Cerrar panel al hacer clic fuera
  useEffect(() => {
    function handleClickOutside(event: MouseEvent): void {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsExpanded(false);
        setTimeout(() => {
          if (!isFocused) setIsOpen(false);
        }, 200);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isFocused]);

  // Navegación por teclado
  const handleKeyDown = (e: React.KeyboardEvent): void => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => 
        prev < filteredSuggestions.length - 1 ? prev + 1 : prev
      );
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => (prev > 0 ? prev - 1 : 0));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (selectedIndex >= 0 && filteredSuggestions[selectedIndex]) {
        const selected = filteredSuggestions[selectedIndex];
        handleSuggestionClick(selected);
      } else if (query.trim()) {
        handleSearch();
      }
    } else if (e.key === 'Escape') {
      setIsExpanded(false);
      inputRef.current?.blur();
      setTimeout(() => setIsOpen(false), 200);
    }
  };

  // Abrir búsqueda
  const openSearch = (): void => {
    setIsOpen(true);
    setTimeout(() => {
      setIsExpanded(true);
      setTimeout(() => {
        if (inputRef.current) {
          inputRef.current.focus();
        }
      }, 150);
    }, 10);
  };

  // Manejar envío del formulario
  const handleSearch = (): void => {
    if (query.trim()) {
      saveRecentSearch(query);
      router.push(`/busqueda?q=${encodeURIComponent(query)}`);
      setIsOpen(false);
      setIsExpanded(false);
      setQuery('');
    }
  };

  // Manejar clic en sugerencia
  const handleSuggestionClick = (suggestion: any): void => {
    saveRecentSearch(suggestion.text);
    router.push(suggestion.url);
    setIsOpen(false);
    setIsExpanded(false);
    setQuery('');
  };

  // Sugerencias inteligentes basadas en popularidad
  const getSmartSuggestions = (): any[] => {
    if (typeof window !== 'undefined') {
      const learningData = JSON.parse(
        localStorage.getItem('electrohuila_search_learning') || '[]'
      );
      
      // Analizar patrones de búsqueda para sugerencias personalizadas
      const popularIds = learningData
        .map((item: any) => item.topResult)
        .filter((id: string) => id)
        .reduce((acc: any, id: string) => {
          acc[id] = (acc[id] || 0) + 1;
          return acc;
        }, {});
        
      const sortedPopular = Object.entries(popularIds)
        .sort(([,a], [,b]) => (b as number) - (a as number))
        .slice(0, 3)
        .map(([id]) => id);
        
      const personalizedSuggestions = SITE_CONTENT.filter(item => 
        sortedPopular.includes(item.id)
      );
      
      if (personalizedSuggestions.length > 0) {
        return personalizedSuggestions;
      }
    }
    
    // Fallback a sugerencias por prioridad
    return SITE_CONTENT
      .sort((a, b) => (b.priority || 0) - (a.priority || 0))
      .slice(0, 5);
  };

  const searchWidth = isMobile ? 'w-80' : 'w-96';

  return (
    <div className={`${isMobile ? 'relative' : 'absolute right-4 top-1/2 transform -translate-y-1/2'} z-30`}>
      <div ref={searchRef} className="relative z-20">
        {/* Botón de búsqueda */}
        {!isOpen ? (
          <button 
            onClick={openSearch}
            className="flex items-center justify-center h-9 w-9 rounded-full bg-blue-600 text-white border-none shadow-md cursor-pointer transition-all duration-200 hover:bg-blue-700 hover:scale-105"
            aria-label="Buscar en ElectroHuila"
          >
            <Search size={18} />
          </button>
        ) : (
          <div 
            className={`absolute right-0 top-0 flex items-center rounded-full shadow-md bg-white border border-gray-300 transition-all duration-300 ease-out overflow-hidden ${
              isExpanded ? searchWidth : 'w-9'
            } h-9`}
          >
            {/* Icono de búsqueda */}
            <div className="flex items-center justify-center min-w-9 h-9 text-gray-500">
              <Search size={18} className={`transition-opacity duration-200 ${isExpanded ? 'opacity-100' : 'opacity-0'}`} />
            </div>
            
            {/* Campo de búsqueda */}
            {isOpen && (
              <div 
                className={`flex-1 overflow-hidden transition-all duration-300 ${
                  isExpanded ? 'w-full opacity-100' : 'w-0 opacity-0'
                }`}
              >
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={handleKeyDown}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  placeholder="🤖 Escribe cualquier cosa..."
                  className="w-full h-9 bg-transparent border-none outline-none text-gray-800 pr-2 text-sm"
                />
              </div>
            )}
            
            {/* Botón cerrar/limpiar */}
            {isExpanded && (
              <button 
                onClick={() => {
                  if (query) {
                    setQuery('');
                  } else {
                    setIsExpanded(false);
                    setTimeout(() => setIsOpen(false), 200);
                  }
                }}
                className="flex items-center justify-center h-9 w-9 bg-transparent border-none cursor-pointer text-gray-500 transition-colors duration-200 hover:text-gray-800"
                aria-label={query ? "Limpiar búsqueda" : "Cerrar búsqueda"}
              >
                <X size={16} />
              </button>
            )}
          </div>
        )}

        {/* Panel de sugerencias */}
        {isOpen && isExpanded && (
          <div 
            className={`absolute right-0 top-11 ${searchWidth} bg-white rounded-lg shadow-lg border border-gray-300 overflow-hidden max-h-96 transition-all duration-300 ${
              isExpanded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
            } z-30`}
          >
            {/* Resultados */}
            {query.trim() ? (
              <div className="py-2">
                <div className="px-3 py-1 text-xs text-gray-500 font-medium">
                  {filteredSuggestions.length > 0 ? 
                    `🤖 ${filteredSuggestions.length} resultado${filteredSuggestions.length > 1 ? 's' : ''} inteligente${filteredSuggestions.length > 1 ? 's' : ''}` : 
                    '🔍 Analizando...'
                  }
                </div>
                
                {filteredSuggestions.length > 0 ? (
                  <div>
                    {filteredSuggestions.map((suggestion, index) => (
                      <button 
                        key={suggestion.id}
                        onClick={() => handleSuggestionClick(suggestion)}
                        className={`w-full p-3 cursor-pointer flex items-start gap-2 transition-colors duration-150 hover:bg-blue-50 ${
                          selectedIndex === index ? 'bg-blue-50' : ''
                        }`}
                      >
                        <div className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 flex-shrink-0 mt-1">
                          {suggestion.icon || <Search size={14} />}
                        </div>
                        <div className="flex-1 min-w-0 text-left">
                          <div className="font-medium text-gray-800 text-sm leading-tight mb-1">
                            {suggestion.text}
                          </div>
                          <div className="text-xs text-gray-500 line-clamp-2">
                            {suggestion.description}
                          </div>
                          <div className="flex items-center gap-1 mt-1">
                            <span className="text-xs bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded-full">
                              {suggestion.category}
                            </span>
                            {suggestion.score && (
                              <span className="text-xs bg-green-100 text-green-700 px-1.5 py-0.5 rounded-full">
                                {suggestion.score}% match
                              </span>
                            )}
                          </div>
                        </div>
                        <ChevronRight size={14} className="text-gray-400 flex-shrink-0 mt-2" />
                      </button>
                    ))}
                    
                    <div className="p-3 mt-1 border-t border-gray-100">
                      <button 
                        onClick={handleSearch}
                        className="w-full py-2 flex items-center justify-center gap-2 bg-transparent border-none cursor-pointer text-sm text-blue-600 font-medium transition-colors duration-200 hover:text-blue-800"
                      >
                        <span>🚀 Ver todos los resultados para "{query}"</span>
                        <ChevronRight size={14} />
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="py-6 px-4 text-center">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-yellow-100 mx-auto mb-3">
                      <Search size={20} className="text-yellow-600" />
                    </div>
                    <div className="text-gray-700 mb-2 text-sm font-medium">
                      🤔 No encontré exactamente "{query}"
                    </div>
                    <div className="text-xs text-gray-500 mb-3">
                      ¡Pero mi IA está aprendiendo! Intenta con:
                    </div>
                    <div className="flex flex-wrap gap-1 justify-center">
                      {['pagar factura', 'sin luz', 'cortes programados', 'puntos pago', 'contacto'].map(suggestion => (
                        <button
                          key={suggestion}
                          onClick={() => {
                            setQuery(suggestion);
                            inputRef.current?.focus();
                          }}
                          className="px-2 py-1 text-xs bg-blue-100 text-blue-700 rounded-full hover:bg-blue-200 transition-colors"
                        >
                          {suggestion}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : recentSearches.length > 0 ? (
              <div className="py-2">
                <div className="px-3 py-1 text-xs text-gray-500 font-medium flex items-center gap-1">
                  <Clock size={12} />
                  Búsquedas recientes
                </div>
                
                {recentSearches.map((search, index) => (
                  <div 
                    key={`recent-${index}`}
                    className="px-3 py-2 cursor-pointer flex items-center gap-2 transition-colors duration-150 hover:bg-blue-50"
                  >
                    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 flex-shrink-0">
                      <Clock size={14} />
                    </div>
                    <div 
                      className="flex-1 text-gray-600 truncate text-sm"
                      onClick={() => {
                        setQuery(search);
                        inputRef.current?.focus();
                      }}
                    >
                      {search}
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        const updated = recentSearches.filter(s => s !== search);
                        setRecentSearches(updated);
                        if (typeof window !== 'undefined') {
                          localStorage.setItem('electrohuila_recent_searches', JSON.stringify(updated));
                        }
                      }}
                      className="text-gray-400 hover:text-gray-600 cursor-pointer flex-shrink-0"
                    >
                      <X size={14} />
                    </button>
                  </div>
                ))}
                
                <div className="px-3 py-2 border-t border-gray-100">
                  <button 
                    onClick={() => {
                      setRecentSearches([]);
                      if (typeof window !== 'undefined') {
                        localStorage.removeItem('electrohuila_recent_searches');
                      }
                    }}
                    className="w-full py-1 bg-transparent border-none cursor-pointer text-xs text-gray-500 transition-colors duration-200 hover:text-gray-700"
                  >
                    🗑️ Borrar historial
                  </button>
                </div>
              </div>
            ) : (
              <div className="py-2">
                <div className="px-3 py-1 text-xs text-gray-500 font-medium flex items-center gap-1">
                  <Lightbulb size={12} />
                  Sugerencias inteligentes
                </div>
                
                <div className="py-2">
                  {getSmartSuggestions().map((suggestion) => (
                    <button
                      key={suggestion.id}
                      onClick={() => handleSuggestionClick(suggestion)}
                      className="w-full px-3 py-2 cursor-pointer flex items-center gap-2 transition-colors duration-150 hover:bg-blue-50"
                    >
                      <div className="w-7 h-7 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 flex-shrink-0">
                        {suggestion.icon}
                      </div>
                      <div className="text-sm text-gray-600 font-medium">
                        {suggestion.text}
                      </div>
                    </button>
                  ))}
                </div>
                
                <div className="px-3 py-3 border-t border-gray-100">
                  <div className="text-xs text-gray-400 text-center">
                    🤖 IA Avanzada: "faktura", "sinluz", "cuanto devo"
                  </div>
                  <div className="text-xs text-green-600 text-center mt-1 font-medium">
                    ¡Entiendo errores de escritura y sinónimos! 🧠
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}