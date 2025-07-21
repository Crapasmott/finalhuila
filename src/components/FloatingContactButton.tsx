"use client";
import React, { useState, useRef, useEffect } from 'react';

interface ContactOption {
  id: string;
  text: string;
  url: string;
}

export default function FloatingContactButton() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Limpiar timeout al desmontar el componente
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // Manejar entrada del mouse con delay
  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsOpen(true);
  };

  // Manejar salida del mouse con delay para permitir clics
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 300); // 300ms de delay antes de cerrar
  };

  // Cancelar el cierre cuando el mouse entra al menú
  const handleMenuMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  // Programar cierre cuando el mouse sale del menú
  const handleMenuMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 200);
  };

  const contactOptions: ContactOption[] = [
    { id: 'atencion', text: 'Atención al Cliente', url: '/contactenos' },
    { id: 'factura', text: 'Trámites de Usuarios', url: '/institucional/tramites-usuarios' },
    { id: 'puntos', text: 'Puntos de Atención', url: '/puntos-de-atencion' },
    { id: 'pqrs', text: 'PQRS', url: 'https://enlinea.electrohuila.com.co/home/' }
  ];

  return (
    <div 
      className="floating-contact-container" 
      ref={containerRef}
      style={{
        position: 'fixed',
        right: 0,
        top: '40%',
        transform: 'translateY(-50%)',
        zIndex: 998,
        fontFamily: 'inherit'
      }}>
      
      {/* Menú desplegado */}
      <div 
        onMouseEnter={handleMenuMouseEnter}
        onMouseLeave={handleMenuMouseLeave}
        style={{
          position: 'absolute',
          right: isOpen ? '60px' : '10px',
          top: '0',
          backgroundColor: 'white',
          borderRadius: '10px 0 0 10px',
          boxShadow: '0 5px 20px rgba(0,0,0,0.2)',
          overflow: 'hidden',
          width: '250px',
          transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
          opacity: isOpen ? 1 : 0,
          transform: `translateX(${isOpen ? '0' : '20px'})`,
          pointerEvents: isOpen ? 'auto' : 'none',
          visibility: isOpen ? 'visible' : 'hidden'
        }}
      >
        <div 
          style={{
            backgroundColor: '#0A3A89',
            color: 'white',
            padding: '15px',
            fontWeight: 'bold',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <span>Contáctenos</span>
          <button 
            onClick={() => {
              if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
              }
              setIsOpen(false);
            }}
            style={{
              background: 'none',
              border: 'none',
              color: 'white',
              fontSize: '18px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '24px',
              height: '24px',
              borderRadius: '50%',
              transition: 'background-color 0.2s'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.2)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
          >
            ×
          </button>
        </div>
        
        <div style={{ padding: '10px' }}>
          {contactOptions.map((option, index) => (
            <a 
              key={option.id}
              href={option.url}
              target={option.url.startsWith('http') ? '_blank' : '_self'}
              rel={option.url.startsWith('http') ? 'noopener noreferrer' : undefined}
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '12px 15px',
                color: '#333',
                textDecoration: 'none',
                borderBottom: index < contactOptions.length - 1 ? '1px solid #eee' : 'none',
                transition: 'all 0.2s ease',
                borderRadius: '6px',
                margin: '2px 0'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = '#f8f9fa';
                e.currentTarget.style.paddingLeft = '20px';
                e.currentTarget.style.color = '#0A3A89';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.paddingLeft = '15px';
                e.currentTarget.style.color = '#333';
              }}
            >
              <span style={{ fontSize: '14px', fontWeight: '500' }}>
                {option.text}
              </span>
              {option.url.startsWith('http') && (
                <svg 
                  width="12" 
                  height="12" 
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                  style={{ marginLeft: 'auto', opacity: 0.6 }}
                >
                  <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" />
                </svg>
              )}
            </a>
          ))}
        </div>
      </div>

      {/* Botón principal */}
      <div 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ display: 'flex', flexDirection: 'column' }}
      >
        <button
          style={{
            backgroundColor: '#0A3A89',
            color: 'white',
            border: 'none',
            width: '60px',
            height: '60px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            borderRadius: '10px 0 0 10px',
            boxShadow: '0 4px 12px rgba(10, 58, 137, 0.3)',
            position: 'relative',
            overflow: 'hidden'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = '#0C4AA3';
            e.currentTarget.style.transform = 'scale(1.05)';
            e.currentTarget.style.boxShadow = '0 6px 16px rgba(10, 58, 137, 0.4)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = '#0A3A89';
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(10, 58, 137, 0.3)';
          }}
        >
          {/* Efecto de ripple/ondas */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
              animation: isOpen ? 'pulse 2s infinite' : 'none'
            }}
          />
          
          {/* Icono de soporte con auriculares */}
          <svg width="48" height="48" viewBox="0 0 48 48" fill="white">
            <g transform="translate(10, 8)">
              <circle cx="14" cy="8" r="4"/>
              <path d="M14 16c-4 0-6 2-6 4v4h12v-4c0-2-2-4-6-4z"/>
              {/* Auriculares */}
              <path d="M8 12c0-3.3 2.7-6 6-6s6 2.7 6 6v4h-2v-4c0-2.2-1.8-4-4-4s-4 1.8-4 4v4h-2v-4z"/>
              <rect x="6" y="14" width="3" height="4" rx="1"/>
              <rect x="19" y="14" width="3" height="4" rx="1"/>
            </g>
          </svg>
          
          {/* Indicador de que es interactivo */}
          <div
            style={{
              position: 'absolute',
              bottom: '8px',
              right: '8px',
              width: '8px',
              height: '8px',
              backgroundColor: '#10B981',
              borderRadius: '50%',
              animation: 'blink 2s infinite'
            }}
          />
        </button>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0% { opacity: 0.6; }
          50% { opacity: 1; }
          100% { opacity: 0.6; }
        }
        
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0.3; }
        }
      `}</style>
    </div>
  );
}