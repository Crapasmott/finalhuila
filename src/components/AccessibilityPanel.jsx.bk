"use client";
import React, { useState, useEffect } from 'react';

export default function AccessibilityPanel() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [activeOptions, setActiveOptions] = useState({
    contrast: false,
    links: false,
    fontSize: 0, // 0: normal, 1: grande, 2: muy grande
    spacing: false,
    animations: false,
    hideImages: false,
    dyslexia: false,
    cursor: false,
    lineHeight: 0, // 0: normal, 1: medio, 2: grande
    textAlign: false, // false: izquierda, true: centrado
    saturation: false,
  });

  // Detectar tamaño de pantalla con más precisión
  useEffect(() => {
    const checkDeviceSize = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 640); // sm breakpoint
      setIsTablet(width > 640 && width <= 1024); // md-lg breakpoint
    };
    
    checkDeviceSize();
    window.addEventListener('resize', checkDeviceSize);
    
    return () => {
      window.removeEventListener('resize', checkDeviceSize);
    };
  }, []);

  // Aplicar cambios de accesibilidad
  useEffect(() => {
    const applyAccessibilityChanges = () => {
      // Contraste
      if (activeOptions.contrast) {
        document.body.classList.add('high-contrast');
      } else {
        document.body.classList.remove('high-contrast');
      }

      // Enlaces destacados
      if (activeOptions.links) {
        document.body.classList.add('highlight-links');
      } else {
        document.body.classList.remove('highlight-links');
      }

      // Tamaño de texto
      document.body.classList.remove('font-size-large', 'font-size-x-large');
      if (activeOptions.fontSize === 1) {
        document.body.classList.add('font-size-large');
      } else if (activeOptions.fontSize === 2) {
        document.body.classList.add('font-size-x-large');
      }

      // Espaciado
      if (activeOptions.spacing) {
        document.body.classList.add('increased-spacing');
      } else {
        document.body.classList.remove('increased-spacing');
      }

      // Animaciones
      if (activeOptions.animations) {
        document.body.classList.add('stop-animations');
      } else {
        document.body.classList.remove('stop-animations');
      }

      // Ocultar imágenes
      if (activeOptions.hideImages) {
        document.body.classList.add('hide-images');
      } else {
        document.body.classList.remove('hide-images');
      }

      // Fuente para dislexia
      if (activeOptions.dyslexia) {
        document.body.classList.add('dyslexia-friendly');
      } else {
        document.body.classList.remove('dyslexia-friendly');
      }

      // Cursor grande
      if (activeOptions.cursor) {
        document.body.classList.add('large-cursor');
      } else {
        document.body.classList.remove('large-cursor');
      }

      // Altura de línea
      document.body.classList.remove('line-height-medium', 'line-height-large');
      if (activeOptions.lineHeight === 1) {
        document.body.classList.add('line-height-medium');
      } else if (activeOptions.lineHeight === 2) {
        document.body.classList.add('line-height-large');
      }

      // Alineación de texto
      if (activeOptions.textAlign) {
        document.body.classList.add('text-center');
      } else {
        document.body.classList.remove('text-center');
      }

      // Saturación
      if (activeOptions.saturation) {
        document.body.classList.add('saturated');
      } else {
        document.body.classList.remove('saturated');
      }
    };

    applyAccessibilityChanges();
  }, [activeOptions]);

  // Manejar clic en una opción
  const handleOptionClick = (option) => {
    switch (option) {
      case 'contrast':
      case 'links':
      case 'spacing':
      case 'animations':
      case 'hideImages':
      case 'dyslexia':
      case 'cursor':
      case 'textAlign':
      case 'saturation':
        setActiveOptions({
          ...activeOptions,
          [option]: !activeOptions[option]
        });
        break;
      case 'fontSize':
        setActiveOptions({
          ...activeOptions,
          fontSize: (activeOptions.fontSize + 1) % 3
        });
        break;
      case 'lineHeight':
        setActiveOptions({
          ...activeOptions,
          lineHeight: (activeOptions.lineHeight + 1) % 3
        });
        break;
      default:
        break;
    }
  };

  // Resetear todas las opciones
  const handleReset = () => {
    setActiveOptions({
      contrast: false,
      links: false,
      fontSize: 0,
      spacing: false,
      animations: false,
      hideImages: false,
      dyslexia: false,
      cursor: false,
      lineHeight: 0,
      textAlign: false,
      saturation: false,
    });
  };

  // Lista de opciones de accesibilidad
  const accessibilityOptions = [
    {
      id: 'contrast',
      title: 'Contraste Alto',
      icon: (
        <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
          <path fill="currentColor" d="M12 2a10 10 0 0 0 0 20V2z"/>
        </svg>
      )
    },
    {
      id: 'links',
      title: 'Enlaces',
      icon: (
        <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
          <rect x="3" y="10" width="7" height="4" rx="2" stroke="currentColor" strokeWidth="2"/>
          <rect x="14" y="10" width="7" height="4" rx="2" stroke="currentColor" strokeWidth="2"/>
          <line x1="10" y1="12" x2="14" y2="12" stroke="currentColor" strokeWidth="2"/>
        </svg>
      )
    },
    {
      id: 'fontSize',
      title: 'Texto',
      icon: (
        <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
          <text x="4" y="16" fontSize="12" fontWeight="bold" fill="currentColor">A</text>
          <text x="14" y="18" fontSize="16" fontWeight="bold" fill="currentColor">A</text>
        </svg>
      )
    },
    {
      id: 'spacing',
      title: 'Espaciado',
      icon: (
        <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
          <path d="M9 8L5 12L9 16" stroke="currentColor" strokeWidth="2"/>
          <path d="M15 8L19 12L15 16" stroke="currentColor" strokeWidth="2"/>
          <line x1="9" y1="12" x2="15" y2="12" stroke="currentColor" strokeWidth="2"/>
        </svg>
      )
    },
    {
      id: 'animations',
      title: 'Sin Animación',
      icon: (
        <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
          <line x1="15" y1="9" x2="9" y2="15" stroke="currentColor" strokeWidth="2"/>
        </svg>
      )
    },
    {
      id: 'hideImages',
      title: 'Sin Imágenes',
      icon: (
        <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
          <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
          <line x1="3" y1="21" x2="21" y2="3" stroke="currentColor" strokeWidth="2"/>
        </svg>
      )
    },
    {
      id: 'dyslexia',
      title: 'Dislexia',
      icon: (
        <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
          <text x="6" y="16" fontSize="14" fontWeight="bold" fill="currentColor">Dd</text>
        </svg>
      )
    },
    {
      id: 'cursor',
      title: 'Cursor',
      icon: (
        <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
          <path d="M7 4L17 12L10 14L8 20L7 4Z" stroke="currentColor" fill="none" strokeWidth="2"/>
        </svg>
      )
    },
    {
      id: 'lineHeight',
      title: 'Líneas',
      icon: (
        <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
          <line x1="4" y1="6" x2="20" y2="6" stroke="currentColor" strokeWidth="2"/>
          <line x1="4" y1="12" x2="20" y2="12" stroke="currentColor" strokeWidth="2"/>
          <line x1="4" y1="18" x2="20" y2="18" stroke="currentColor" strokeWidth="2"/>
        </svg>
      )
    },
    {
      id: 'textAlign',
      title: 'Centrado',
      icon: (
        <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
          <line x1="6" y1="6" x2="18" y2="6" stroke="currentColor" strokeWidth="2"/>
          <line x1="4" y1="12" x2="20" y2="12" stroke="currentColor" strokeWidth="2"/>
          <line x1="6" y1="18" x2="18" y2="18" stroke="currentColor" strokeWidth="2"/>
        </svg>
      )
    },
    {
      id: 'saturation',
      title: 'Saturación',
      icon: (
        <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 2C10 8 10 16 12 22" fill="currentColor"/>
        </svg>
      )
    }
  ];

  // Configuración responsive del panel
  const getPanelConfig = () => {
    if (isMobile) {
      return {
        width: '100%',
        maxWidth: 'calc(100vw - 32px)',
        gridCols: 2,
        buttonSize: '56px',
        position: { bottom: '20px', left: '16px', right: '16px' },
        padding: '24px',
        gap: '16px',
        buttonHeight: '90px'
      };
    } else if (isTablet) {
      return {
        width: '340px',
        maxWidth: '85vw',
        gridCols: 3,
        buttonSize: '55px',
        position: { bottom: '20px', left: '20px' },
        padding: '20px',
        gap: '12px',
        buttonHeight: '80px'
      };
    } else {
      return {
        width: '360px',
        maxWidth: '400px',
        gridCols: 3,
        buttonSize: '50px',
        position: { bottom: '24px', left: '24px' },
        padding: '16px',
        gap: '10px',
        buttonHeight: '70px'
      };
    }
  };

  const config = getPanelConfig();

  return (
    <>
      {/* Estilos CSS para efectos de accesibilidad */}
      <style jsx global>{`
        /* Responsive accessibility classes */
        .high-contrast {
          filter: contrast(150%) brightness(1.2);
          background-color: #000 !important;
          color: #fff !important;
        }
        .high-contrast * {
          background-color: #000 !important;
          color: #fff !important;
          border-color: #fff !important;
        }
        
        .highlight-links a {
          text-decoration: underline !important;
          color: #0078d7 !important;
          font-weight: bold !important;
          border: 2px solid #0078d7 !important;
          padding: 2px 4px !important;
          border-radius: 4px !important;
        }
        
        .font-size-large * {
          font-size: 120% !important;
          line-height: 1.6 !important;
        }
        
        .font-size-x-large * {
          font-size: 150% !important;
          line-height: 1.7 !important;
        }
        
        .increased-spacing * {
          letter-spacing: 1.5px !important;
          word-spacing: 3px !important;
          margin: 0.5em 0 !important;
        }
        
        .stop-animations *,
        .stop-animations *:before,
        .stop-animations *:after {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
          scroll-behavior: auto !important;
        }
        
        .hide-images img,
        .hide-images svg:not(.accessibility-icon),
        .hide-images video {
          opacity: 0.1 !important;
          filter: grayscale(100%) !important;
        }
        
        .dyslexia-friendly * {
          font-family: 'OpenDyslexic', 'Comic Sans MS', 'Arial', sans-serif !important;
          line-height: 1.8 !important;
          font-weight: 500 !important;
        }
        
        .large-cursor,
        .large-cursor * {
          cursor: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24'%3E%3Cpath d='M7 4L17 12L10 14L8 20L7 4Z' stroke='black' fill='white' stroke-width='2'/%3E%3C/svg%3E") 16 16, auto !important;
        }
        
        .line-height-medium * {
          line-height: 1.8 !important;
        }
        
        .line-height-large * {
          line-height: 2.4 !important;
        }
        
        .text-center *:not(.accessibility-panel *) {
          text-align: center !important;
        }
        
        .saturated {
          filter: saturate(200%) brightness(1.1) !important;
        }

        /* Mobile optimizations */
        @media (max-width: 640px) {
          .accessibility-panel-container {
            position: fixed !important;
            bottom: 20px !important;
            left: 16px !important;
            right: 16px !important;
            z-index: 999 !important;
            width: auto !important;
          }
          
          .font-size-large * {
            font-size: 130% !important;
          }
          
          .font-size-x-large * {
            font-size: 160% !important;
          }
        }

        /* Tablet optimizations */
        @media (min-width: 641px) and (max-width: 1024px) {
          .font-size-large * {
            font-size: 125% !important;
          }
          
          .font-size-x-large * {
            font-size: 155% !important;
          }
        }
      `}</style>

      {/* Panel de accesibilidad */}
      <div 
        className="accessibility-panel-container" 
        style={{
          position: 'fixed',
          bottom: config.position.bottom,
          left: config.position.left,
          right: isMobile ? config.position.right : 'auto',
          zIndex: 999,
          display: 'flex',
          flexDirection: 'column',
          alignItems: isMobile ? 'center' : 'flex-start',
          width: isMobile ? 'auto' : 'auto'
        }}
      >
        {/* Panel expandido con opciones */}
        {isOpen && (
          <div style={{
            backgroundColor: 'white',
            borderRadius: isMobile ? '20px' : '12px',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)',
            padding: config.padding,
            marginBottom: '20px',
            width: config.width,
            maxWidth: config.maxWidth,
            border: '1px solid #e5e7eb',
            animation: 'fadeInUp 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
            ...(isMobile && {
              position: 'relative',
              left: 0,
              right: 0
            })
          }}>
            {/* Header del panel */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: isMobile ? '20px' : '16px',
              paddingBottom: '12px',
              borderBottom: '1px solid #f3f4f6'
            }}>
              <h3 style={{ 
                margin: 0, 
                fontSize: isMobile ? '18px' : '16px', 
                fontWeight: '600',
                color: '#1f2937'
              }}>
                Accesibilidad
              </h3>
              <div style={{ display: 'flex', gap: '8px' }}>
                <button
                  onClick={handleReset}
                  style={{
                    background: '#f3f4f6',
                    border: 'none',
                    borderRadius: '6px',
                    padding: '6px 10px',
                    fontSize: '12px',
                    cursor: 'pointer',
                    color: '#6b7280',
                    fontWeight: '500'
                  }}
                  title="Resetear todo"
                >
                  Reset
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  style={{
                    background: 'none',
                    border: 'none',
                    fontSize: '24px',
                    cursor: 'pointer',
                    color: '#6b7280',
                    padding: '0 8px',
                    borderRadius: '4px'
                  }}
                  aria-label="Cerrar panel"
                >
                  ×
                </button>
              </div>
            </div>
            
            {/* Grid de opciones */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: `repeat(${config.gridCols}, 1fr)`,
              gap: config.gap,
              width: '100%'
            }}>
              {accessibilityOptions.map(option => {
                const isActive = 
                  (option.id === 'fontSize' && activeOptions.fontSize > 0) ||
                  (option.id === 'lineHeight' && activeOptions.lineHeight > 0) ||
                  (option.id !== 'fontSize' && option.id !== 'lineHeight' && activeOptions[option.id]);

                return (
                  <button
                    key={option.id}
                    onClick={() => handleOptionClick(option.id)}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: isMobile ? '20px 12px' : '12px 8px',
                      backgroundColor: isActive ? '#dbeafe' : '#f9fafb',
                      border: isActive ? '2px solid #3b82f6' : '1px solid #e5e7eb',
                      borderRadius: isMobile ? '16px' : '8px',
                      cursor: 'pointer',
                      textAlign: 'center',
                      transition: 'all 0.2s ease',
                      minHeight: config.buttonHeight,
                      width: '100%',
                      boxSizing: 'border-box'
                    }}
                    onMouseOver={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.backgroundColor = '#f3f4f6';
                        e.currentTarget.style.borderColor = '#d1d5db';
                      }
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.backgroundColor = isActive ? '#dbeafe' : '#f9fafb';
                      e.currentTarget.style.borderColor = isActive ? '#3b82f6' : '#e5e7eb';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                    aria-pressed={isActive}
                    aria-label={option.title}
                  >
                    <div style={{ 
                      marginBottom: isMobile ? '12px' : '6px', 
                      color: isActive ? '#3b82f6' : '#6b7280'
                    }}>
                      {React.cloneElement(option.icon, { 
                        width: isMobile ? "24" : "20", 
                        height: isMobile ? "24" : "20" 
                      })}
                    </div>
                    <span style={{ 
                      fontSize: isMobile ? '14px' : '11px', 
                      fontWeight: '600', 
                      color: isActive ? '#1d4ed8' : '#374151',
                      lineHeight: '1.3',
                      textAlign: 'center',
                      wordBreak: 'break-word',
                      hyphens: 'auto'
                    }}>
                      {option.title}
                    </span>
                    {/* Indicador de estado para opciones con múltiples niveles */}
                    {((option.id === 'fontSize' && activeOptions.fontSize > 0) ||
                      (option.id === 'lineHeight' && activeOptions.lineHeight > 0)) && (
                      <div style={{
                        display: 'flex',
                        gap: '2px',
                        marginTop: '4px'
                      }}>
                        {[1, 2].map(level => (
                          <div
                            key={level}
                            style={{
                              width: '6px',
                              height: '6px',
                              borderRadius: '50%',
                              backgroundColor: 
                                (option.id === 'fontSize' && activeOptions.fontSize >= level) ||
                                (option.id === 'lineHeight' && activeOptions.lineHeight >= level)
                                  ? '#3b82f6' : '#d1d5db'
                            }}
                          />
                        ))}
                      </div>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Información adicional para móviles */}
            {isMobile && (
              <div style={{
                marginTop: '16px',
                padding: '12px',
                backgroundColor: '#f0f9ff',
                borderRadius: '8px',
                border: '1px solid #e0f2fe'
              }}>
                <p style={{
                  margin: 0,
                  fontSize: '12px',
                  color: '#0369a1',
                  textAlign: 'center',
                  lineHeight: '1.4'
                }}>
                  💡 Toca las opciones para activar/desactivar las ayudas de accesibilidad
                </p>
              </div>
            )}
          </div>
        )}

        {/* Botón para abrir/cerrar el panel */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{
            backgroundColor: '#0078d7',
            color: 'white',
            border: 'none',
            borderRadius: '50%',
            width: config.buttonSize,
            height: config.buttonSize,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 12px rgba(0, 120, 215, 0.4)',
            cursor: 'pointer',
            transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
            position: 'relative',
            overflow: 'hidden'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = '#106ebe';
            e.currentTarget.style.transform = 'scale(1.1)';
            e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 120, 215, 0.5)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = '#0078d7';
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 120, 215, 0.4)';
          }}
          onTouchStart={(e) => {
            e.currentTarget.style.transform = 'scale(0.95)';
          }}
          onTouchEnd={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
          }}
          aria-label="Opciones de accesibilidad"
          aria-expanded={isOpen}
        >
          {/* Indicador de actividad */}
          {Object.values(activeOptions).some(option => option !== false && option !== 0) && (
            <div style={{
              position: 'absolute',
              top: '6px',
              right: '6px',
              width: '8px',
              height: '8px',
              backgroundColor: '#10b981',
              borderRadius: '50%',
              border: '2px solid white',
              animation: 'pulse 2s infinite'
            }} />
          )}
          
          {/* Icono principal */}
          <svg 
            width={isMobile ? "26" : "24"} 
            height={isMobile ? "26" : "24"} 
            fill="none" 
            viewBox="0 0 24 24"
            className="accessibility-icon"
          >
            <circle cx="12" cy="8" r="2" fill="white"/>
            <path d="M12 14L8 18H16L12 14Z" fill="white"/>
            <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="1.5"/>
          </svg>
        </button>
      </div>

      {/* Animaciones CSS */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse {
          0%, 100% { 
            opacity: 1; 
            transform: scale(1);
          }
          50% { 
            opacity: 0.7;
            transform: scale(1.1);
          }
        }

        /* Mejoras para dispositivos táctiles */
        @media (hover: none) and (pointer: coarse) {
          .accessibility-panel-container button {
            min-height: 44px !important;
            min-width: 44px !important;
          }
        }
      `}</style>
    </>
  );
}