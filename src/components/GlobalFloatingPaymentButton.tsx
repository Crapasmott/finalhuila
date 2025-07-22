'use client';

import React, { useState, useEffect } from 'react';

export default function GlobalFloatingPaymentButton(): React.JSX.Element {
  const [showPaymentButton, setShowPaymentButton] = useState<boolean>(true);
  const [isScrolling, setIsScrolling] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  // Detectar scroll para ocultar temporalmente el botón
  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = (): void => {
      setIsScrolling(true);
      
      // Limpiar timeout anterior
      clearTimeout(scrollTimeout);
      
      // Mostrar el botón después de que pare el scroll
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 150);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  // Mostrar el botón después de un pequeño delay cuando se carga la página
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000); // Aparece después de 2 segundos

    return () => clearTimeout(timer);
  }, []);

  // Verificar si el usuario ya cerró el botón en esta sesión
  useEffect(() => {
    const buttonClosed = sessionStorage.getItem('electrohuila_payment_button_closed');
    if (buttonClosed === 'true') {
      setShowPaymentButton(false);
    }
  }, []);

  // Función para cerrar el botón
  const closePaymentButton = (e: React.MouseEvent): void => {
    e.preventDefault();
    e.stopPropagation();
    setShowPaymentButton(false);
    // Recordar que el usuario cerró el botón en esta sesión
    sessionStorage.setItem('electrohuila_payment_button_closed', 'true');
  };

  // No mostrar si está cerrado, scrolleando, o aún no es visible
  if (!showPaymentButton || isScrolling || !isVisible) {
    return <></>;
  }

  return (
    <>
      {/* Botón flotante para pago de facturas */}
      <div className="floating-payment-button">
        <a 
          href="https://pagos.electrohuila.com.co/" 
          className="payment-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="button-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
              <path d="M0 0h24v24H0V0z" fill="none"/>
              <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/>
            </svg>
          </div>
          <span className="button-text">Paga tu Factura</span>
        </a>
        <button 
          className="close-payment-button" 
          onClick={closePaymentButton}
          aria-label="Cerrar botón de pago"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
          </svg>
        </button>
      </div>

      {/* Estilos CSS */}
      <style jsx>{`
        .floating-payment-button {
          position: fixed;
          bottom: 80px;
          left: 20px;
          z-index: 999;
          display: flex;
          align-items: center;
          animation: slideInLeft 0.5s ease-out;
        }

        .payment-button {
          background: linear-gradient(135deg, #1a6192 0%, #2980b9 100%);
          color: white;
          text-decoration: none;
          padding: 12px 20px;
          border-radius: 50px;
          display: flex;
          align-items: center;
          gap: 10px;
          box-shadow: 0 4px 15px rgba(26, 97, 146, 0.3);
          transition: all 0.3s ease;
          font-weight: 600;
          font-size: 14px;
          border: none;
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }

        .payment-button:hover {
          background: linear-gradient(135deg, #2980b9 0%, #3498db 100%);
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(26, 97, 146, 0.4);
        }

        .payment-button:active {
          transform: translateY(0px);
        }

        .button-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 24px;
          height: 24px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          padding: 4px;
        }

        .button-text {
          font-family: inherit;
          white-space: nowrap;
        }

        .close-payment-button {
          background: rgba(0, 0, 0, 0.6);
          color: white;
          border: none;
          border-radius: 50%;
          width: 28px;
          height: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          margin-left: 8px;
          transition: all 0.2s ease;
          backdrop-filter: blur(10px);
        }

        .close-payment-button:hover {
          background: rgba(0, 0, 0, 0.8);
          transform: scale(1.1);
        }

        /* Animación de entrada */
        @keyframes slideInLeft {
          from {
            transform: translateX(-100px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        /* Animación de pulso sutil */
        .payment-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.2) 0%, transparent 100%);
          border-radius: 50px;
          animation: pulse 3s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 0.7;
          }
          50% {
            opacity: 1;
          }
        }

        /* Responsive */
        @media (max-width: 768px) {
          .floating-payment-button {
            bottom: 140px;
            left: 15px;
          }
          
          .payment-button {
            padding: 10px 16px;
            font-size: 13px;
          }
          
          .button-text {
            display: none;
          }
          
          .payment-button {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            justify-content: center;
            padding: 0;
          }
          
          .button-icon {
            margin: 0;
          }
          
          .close-payment-button {
            width: 24px;
            height: 24px;
            margin-left: 6px;
          }
        }

        /* Efecto de brillo ocasional */
        @keyframes shine {
          0% {
            background-position: -200px 0;
          }
          100% {
            background-position: 200px 0;
          }
        }

        .payment-button::after {
          content: '';
          position: absolute;
          top: 0;
          left: -100px;
          width: 100px;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
          animation: shine 3s ease-in-out infinite;
          animation-delay: 2s;
        }

        /* Estados de hover mejorados */
        .floating-payment-button:hover .payment-button {
          animation-play-state: paused;
        }

        .floating-payment-button:hover .payment-button::before {
          animation-play-state: paused;
        }

        /* Mejora de accesibilidad */
        @media (prefers-reduced-motion: reduce) {
          .floating-payment-button,
          .payment-button,
          .close-payment-button {
            animation: none;
            transition: none;
          }
          
          .payment-button::before,
          .payment-button::after {
            animation: none;
          }
        }

        /* Para usuarios que prefieren modo oscuro */
        @media (prefers-color-scheme: dark) {
          .payment-button {
            box-shadow: 0 4px 15px rgba(26, 97, 146, 0.5);
          }
          
          .close-payment-button {
            background: rgba(255, 255, 255, 0.2);
            color: white;
          }
          
          .close-payment-button:hover {
            background: rgba(255, 255, 255, 0.3);
          }
        }
      `}</style>
    </>
  );
}