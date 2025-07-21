import { useState, useEffect, useCallback, useReducer } from 'react';

// Interfaces TypeScript
interface Documento {
    id: string;
    titulo: string;
    contenido?: string;
    fechaCreacion: string;
    fechaActualizacion?: string;
    publicado: boolean;
    tipo?: string;
    autor?: string;
    categoria?: string;
    tags?: string[];
    url?: string;
    tamaño?: string;
    [key: string]: any;
}

interface Paginacion {
    pagina: number;
    limite: number;
    total: number;
}

interface Filtros {
    [key: string]: any;
}

interface Estado {
    documentos: Documento[];
    cargando: boolean;
    error: string | null;
    filtros: Filtros;
    paginacion: Paginacion;
}

interface OpcionesIniciales {
    filtrosIniciales?: Filtros;
    limite?: number;
    cargarAutomaticamente?: boolean;
}

interface RespuestaAPI {
    items?: Documento[];
    documentos?: Documento[];
    total?: number;
}

interface AccionState {
    type: string;
    payload?: any;
}

// Estado inicial
const estadoInicial: Estado = {
    documentos: [],
    cargando: false,
    error: null,
    filtros: {},
    paginacion: {
        pagina: 1,
        limite: 10,
        total: 0
    }
};

// Acciones
const TIPOS_ACCION = {
    INICIAR_CARGA: 'INICIAR_CARGA',
    CARGAR_EXITO: 'CARGAR_EXITO',
    CARGAR_ERROR: 'CARGAR_ERROR',
    ACTUALIZAR_FILTROS: 'ACTUALIZAR_FILTROS',
    CAMBIAR_PAGINA: 'CAMBIAR_PAGINA',
    CAMBIAR_LIMITE: 'CAMBIAR_LIMITE',
    AGREGAR_DOCUMENTO: 'AGREGAR_DOCUMENTO',
    ACTUALIZAR_DOCUMENTO: 'ACTUALIZAR_DOCUMENTO',
    ELIMINAR_DOCUMENTO: 'ELIMINAR_DOCUMENTO',
    PUBLICAR_DOCUMENTO: 'PUBLICAR_DOCUMENTO'
} as const;

// Reducer para manejar el estado
const documentosReducer = (state: Estado, action: AccionState): Estado => {
    switch (action.type) {
        case TIPOS_ACCION.INICIAR_CARGA:
            return {
                ...state,
                cargando: true,
                error: null
            };

        case TIPOS_ACCION.CARGAR_EXITO:
            return {
                ...state,
                documentos: action.payload.documentos || [],
                paginacion: {
                    ...state.paginacion,
                    total: action.payload.total || action.payload.documentos?.length || 0
                },
                cargando: false,
                error: null
            };

        case TIPOS_ACCION.CARGAR_ERROR:
            return {
                ...state,
                cargando: false,
                error: action.payload || 'Error desconocido'
            };

        case TIPOS_ACCION.ACTUALIZAR_FILTROS:
            return {
                ...state,
                filtros: {
                    ...state.filtros,
                    ...action.payload
                },
                paginacion: {
                    ...state.paginacion,
                    pagina: 1 // Resetear a primera página cuando cambian filtros
                }
            };

        case TIPOS_ACCION.CAMBIAR_PAGINA:
            return {
                ...state,
                paginacion: {
                    ...state.paginacion,
                    pagina: action.payload
                }
            };

        case TIPOS_ACCION.CAMBIAR_LIMITE:
            return {
                ...state,
                paginacion: {
                    ...state.paginacion,
                    limite: action.payload,
                    pagina: 1 // Resetear a primera página cuando cambia el límite
                }
            };

        case TIPOS_ACCION.AGREGAR_DOCUMENTO:
            return {
                ...state,
                documentos: [action.payload, ...state.documentos],
                paginacion: {
                    ...state.paginacion,
                    total: state.paginacion.total + 1
                }
            };

        case TIPOS_ACCION.ACTUALIZAR_DOCUMENTO:
            return {
                ...state,
                documentos: state.documentos.map((doc: Documento) =>
                    doc.id === action.payload.id ? { ...doc, ...action.payload } : doc
                )
            };

        case TIPOS_ACCION.ELIMINAR_DOCUMENTO:
            return {
                ...state,
                documentos: state.documentos.filter((doc: Documento) => doc.id !== action.payload),
                paginacion: {
                    ...state.paginacion,
                    total: state.paginacion.total - 1
                }
            };

        case TIPOS_ACCION.PUBLICAR_DOCUMENTO:
            return {
                ...state,
                documentos: state.documentos.map((doc: Documento) =>
                    doc.id === action.payload.id ? { ...doc, publicado: action.payload.publicado } : doc
                )
            };

        default:
            return state;
    }
};

/**
 * Hook personalizado para la gestión de documentos
 * @param opcionesIniciales - Opciones iniciales para el gestor
 * @returns Estado y métodos para gestionar documentos
 */
export function useGestorDocumentos(opcionesIniciales: OpcionesIniciales = {}) {
    const [state, dispatch] = useReducer(documentosReducer, {
        ...estadoInicial,
        filtros: opcionesIniciales.filtrosIniciales || {},
        paginacion: {
            ...estadoInicial.paginacion,
            limite: opcionesIniciales.limite || 10
        }
    });

    const { documentos, cargando, error, filtros, paginacion } = state;

    // Obtener documentos desde la API
    const obtenerDocumentos = useCallback(async (filtrosAdicionales: Filtros = {}): Promise<RespuestaAPI> => {
        dispatch({ type: TIPOS_ACCION.INICIAR_CARGA });

        try {
            const params = new URLSearchParams();

            // Agregar filtros actuales
            Object.entries({ ...filtros, ...filtrosAdicionales }).forEach(([clave, valor]) => {
                if (valor !== undefined && valor !== null && valor !== '') {
                    params.append(clave, String(valor));
                }
            });

            // Agregar paginación
            params.append('pagina', String(paginacion.pagina));
            params.append('limite', String(paginacion.limite));

            const respuesta = await fetch(`/api/documentos?${params}`);

            if (!respuesta.ok) {
                throw new Error(`Error al obtener documentos: ${respuesta.status}`);
            }

            const datos: RespuestaAPI = await respuesta.json();

            dispatch({
                type: TIPOS_ACCION.CARGAR_EXITO,
                payload: {
                    documentos: datos.items || datos.documentos || [],
                    total: datos.total || 0
                }
            });

            return datos;
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'Error desconocido';
            dispatch({ type: TIPOS_ACCION.CARGAR_ERROR, payload: errorMessage });
            throw err;
        }
    }, [filtros, paginacion.pagina, paginacion.limite]);

    // Actualizar filtros
    const actualizarFiltros = useCallback((nuevosFiltros: Filtros): void => {
        dispatch({ type: TIPOS_ACCION.ACTUALIZAR_FILTROS, payload: nuevosFiltros });
    }, []);

    // Cambiar página
    const cambiarPagina = useCallback((nuevaPagina: number): void => {
        dispatch({ type: TIPOS_ACCION.CAMBIAR_PAGINA, payload: nuevaPagina });
    }, []);

    // Cambiar límite de elementos por página
    const cambiarLimite = useCallback((nuevoLimite: number): void => {
        dispatch({ type: TIPOS_ACCION.CAMBIAR_LIMITE, payload: nuevoLimite });
    }, []);

    // Crear un nuevo documento
    const crearDocumento = useCallback(async (nuevoDocumento: Partial<Documento>): Promise<Documento> => {
        try {
            const respuesta = await fetch('/api/documentos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(nuevoDocumento)
            });

            if (!respuesta.ok) {
                throw new Error(`Error al crear documento: ${respuesta.status}`);
            }

            const documentoCreado: Documento = await respuesta.json();

            dispatch({ type: TIPOS_ACCION.AGREGAR_DOCUMENTO, payload: documentoCreado });

            return documentoCreado;
        } catch (err) {
            console.error('Error al crear documento:', err);
            throw err;
        }
    }, []);

    // Actualizar un documento
    const actualizarDocumento = useCallback(async (id: string, cambios: Partial<Documento>): Promise<Documento> => {
        try {
            const respuesta = await fetch(`/api/documentos/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(cambios)
            });

            if (!respuesta.ok) {
                throw new Error(`Error al actualizar documento: ${respuesta.status}`);
            }

            const documentoActualizado: Documento = await respuesta.json();

            dispatch({
                type: TIPOS_ACCION.ACTUALIZAR_DOCUMENTO,
                payload: documentoActualizado
            });

            return documentoActualizado;
        } catch (err) {
            console.error('Error al actualizar documento:', err);
            throw err;
        }
    }, []);

    // Eliminar un documento
    const eliminarDocumento = useCallback(async (id: string): Promise<boolean> => {
        try {
            const respuesta = await fetch(`/api/documentos/${id}`, {
                method: 'DELETE'
            });

            if (!respuesta.ok) {
                throw new Error(`Error al eliminar documento: ${respuesta.status}`);
            }

            dispatch({ type: TIPOS_ACCION.ELIMINAR_DOCUMENTO, payload: id });

            return true;
        } catch (err) {
            console.error('Error al eliminar documento:', err);
            throw err;
        }
    }, []);

    // Publicar o despublicar un documento
    const cambiarEstadoPublicacion = useCallback(async (id: string, publicado: boolean): Promise<boolean> => {
        try {
            const respuesta = await fetch(`/api/documentos/${id}/publicar`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ publicado })
            });

            if (!respuesta.ok) {
                throw new Error(`Error al cambiar estado de publicación: ${respuesta.status}`);
            }

            dispatch({
                type: TIPOS_ACCION.PUBLICAR_DOCUMENTO,
                payload: { id, publicado }
            });

            return true;
        } catch (err) {
            console.error('Error al cambiar estado de publicación:', err);
            throw err;
        }
    }, []);

    // Cargar documentos al cambiar la página, límite o filtros
    useEffect(() => {
        if (opcionesIniciales.cargarAutomaticamente !== false) {
            obtenerDocumentos().catch(error => {
                console.error('Error al cargar documentos automáticamente:', error);
            });
        }
    }, [paginacion.pagina, paginacion.limite, filtros, obtenerDocumentos, opcionesIniciales.cargarAutomaticamente]);

    // Métodos auxiliares
    const limpiarFiltros = useCallback((): void => {
        dispatch({ type: TIPOS_ACCION.ACTUALIZAR_FILTROS, payload: {} });
    }, []);

    const recargarDocumentos = useCallback((): Promise<RespuestaAPI> => {
        return obtenerDocumentos();
    }, [obtenerDocumentos]);

    const obtenerDocumentoPorId = useCallback((id: string): Documento | undefined => {
        return documentos.find(doc => doc.id === id);
    }, [documentos]);

    const contarDocumentosPublicados = useCallback((): number => {
        return documentos.filter(doc => doc.publicado).length;
    }, [documentos]);

    const obtenerDocumentosPorTipo = useCallback((tipo: string): Documento[] => {
        return documentos.filter(doc => doc.tipo === tipo);
    }, [documentos]);

    const buscarDocumentos = useCallback((termino: string): Documento[] => {
        const terminoLower = termino.toLowerCase();
        return documentos.filter(doc => 
            doc.titulo.toLowerCase().includes(terminoLower) ||
            doc.contenido?.toLowerCase().includes(terminoLower) ||
            doc.autor?.toLowerCase().includes(terminoLower) ||
            doc.categoria?.toLowerCase().includes(terminoLower)
        );
    }, [documentos]);

    // Estadísticas útiles
    const estadisticas = {
        total: documentos.length,
        publicados: contarDocumentosPublicados(),
        borradores: documentos.length - contarDocumentosPublicados(),
        tiposUnicos: [...new Set(documentos.map(doc => doc.tipo).filter(Boolean))],
        categoriasUnicas: [...new Set(documentos.map(doc => doc.categoria).filter(Boolean))],
        autoresUnicos: [...new Set(documentos.map(doc => doc.autor).filter(Boolean))]
    };

    return {
        // Estado
        documentos,
        cargando,
        error,
        filtros,
        paginacion,
        estadisticas,
        
        // Métodos principales
        obtenerDocumentos,
        actualizarFiltros,
        cambiarPagina,
        cambiarLimite,
        crearDocumento,
        actualizarDocumento,
        eliminarDocumento,
        cambiarEstadoPublicacion,
        
        // Métodos auxiliares
        limpiarFiltros,
        recargarDocumentos,
        obtenerDocumentoPorId,
        contarDocumentosPublicados,
        obtenerDocumentosPorTipo,
        buscarDocumentos
    };
}

// Hook tipado específico para casos de uso comunes
export function useGestorDocumentosBasico() {
    return useGestorDocumentos({
        limite: 20,
        cargarAutomaticamente: true
    });
}

// Hook tipado para documentos con filtros específicos
export function useGestorDocumentosConFiltros(filtrosIniciales: Filtros) {
    return useGestorDocumentos({
        filtrosIniciales,
        limite: 15,
        cargarAutomaticamente: true
    });
}

// Hook tipado para documentos con paginación personalizada
export function useGestorDocumentosConPaginacion(limite: number = 10) {
    return useGestorDocumentos({
        limite,
        cargarAutomaticamente: true
    });
}

// Hook tipado para gestión manual (sin carga automática)
export function useGestorDocumentosManual(opcionesIniciales: OpcionesIniciales = {}) {
    return useGestorDocumentos({
        ...opcionesIniciales,
        cargarAutomaticamente: false
    });
}

// Exportar tipos para uso externo
export type { 
    Documento, 
    Filtros, 
    Paginacion, 
    OpcionesIniciales, 
    RespuestaAPI,
    Estado 
};