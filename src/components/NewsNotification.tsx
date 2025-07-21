'use client';

import React, { useState, useEffect } from 'react';

interface NewsNotificationProps {
  image: string;
  title: string;
  description: string;
  link?: string;
  buttonText?: string;
  autoHide?: boolean;
  duration?: number;
  category?: string;
  isVisible?: boolean;
  onClose?: () => void;
}

const NewsNotification: React.FC<NewsNotificationProps> = ({
  image,
  title,
  description,
  link = '#',
  buttonText = 'Leer más',
  autoHide = false,
  duration = 10000,
  category = 'Noticia',
  isVisible: externalVisible,
  onClose
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (externalVisible !== undefined) {
      setIsVisible(externalVisible);
      return;
    }

    const showTimer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(showTimer);
  }, [externalVisible]);

  // Separar el auto-hide en su propio useEffect
  useEffect(() => {
    if (!isVisible || !autoHide) return;

    const hideTimer = setTimeout(() => {
      handleClose();
    }, duration);

    return () => clearTimeout(hideTimer);
  }, [isVisible, autoHide, duration]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsVisible(false);
      setIsClosing(false);
      onClose?.();
    }, 400);
  };

  const handleClick = () => {
    if (link && link !== '#') {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  };

  const handleButtonClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    handleClick();
  };

  if (!isVisible) return null;

  return (
    <>
      <div 
        className={`news-notification ${isClosing ? 'closing' : ''}`}
        onClick={handleClick}
      >
        {/* Imagen de fondo con overlay */}
        <div className="image-container">
          <img 
            src={image} 
            alt={title}
            className="background-image"
          />
          <div className="image-overlay"></div>
        </div>

        {/* Botón de cerrar */}
        <button 
          className="close-button" 
          onClick={(e) => {
            e.stopPropagation();
            handleClose();
          }}
          aria-label="Cerrar notificación"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        {/* Badge de categoría */}
        <div className="category-badge">
          {category}
        </div>

        {/* Contenido de texto */}
        <div className="content-area">
          <div className="text-content">
            <h3 className="notification-title">{title}</h3>
            <p className="notification-description">{description}</p>
          </div>

          {/* Botón de acción */}
          <button 
            className="action-button"
            onClick={handleButtonClick}
          >
            <span>{buttonText}</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7,7 17,7 17,17"></polyline>
            </svg>
          </button>
        </div>

        {/* Barra de progreso (solo si autoHide está activo) */}
        {autoHide && (
          <div className="progress-bar">
            <div className="progress-fill"></div>
          </div>
        )}
      </div>

      <style jsx>{`
        .news-notification {
          position: fixed;
          left: 20px;
          top: 160px;
          width: 380px;
          height: auto; /* ✅ CAMBIO: altura automática */
          min-height: 280px; /* Altura mínima para mantener diseño */
          max-height: 350px; /* Evita que crezca demasiado */
          max-width: calc(100vw - 40px);
          border-radius: 16px;
          overflow: hidden;
          cursor: pointer;
          z-index: 9999;
          animation: slideInLeft 0.6s cubic-bezier(0.25, 0.8, 0.25, 1) forwards;
          box-shadow: 
            0 20px 40px rgba(0, 0, 0, 0.15),
            0 4px 8px rgba(0, 0, 0, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: #ffffff;
          transform: translateX(-100%);
          transition: transform 0.3s ease;
          display: flex;
          flex-direction: column; /* Para que el contenido se organice verticalmente */
        }

        .news-notification:hover {
          transform: translateX(0) translateY(-2px);
          box-shadow: 
            0 25px 50px rgba(0, 0, 0, 0.2),
            0 8px 16px rgba(0, 0, 0, 0.15);
        }

        .news-notification.closing {
          animation: slideOutLeft 0.4s cubic-bezier(0.55, 0.085, 0.68, 0.53) forwards;
        }

        /* IMAGEN CORREGIDA - SOLUCIÓN DEFINITIVA */
        .image-container {
          position: relative;
          width: 100%;
          height: auto; /* ✅ CAMBIO: altura automática */
          min-height: 140px; /* Altura mínima para mantener diseño */
          max-height: 180px; /* Altura máxima para no ocupar todo */
          overflow: visible; /* ✅ CAMBIO: permite que la imagen se vea completa */
          background: #f8f9fa;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .background-image {
          width: 100%;
          height: auto; /* ✅ CAMBIO: altura automática */
          max-height: 180px; /* Limita pero no corta */
          object-fit: contain;
          transition: transform 0.3s ease;
          background: #ffffff;
        }

        /* Opción alternativa: si prefieres que la imagen llene más espacio pero sin cortar */
        /*
        .background-image {
          width: 100%;
          height: 100%;
          object-fit: scale-down;
          transition: transform 0.3s ease;
        }
        */

        /* Otra opción: ajuste personalizado para tu imagen específica */
        /*
        .background-image {
          width: 100%;
          max-height: 100%;
          object-fit: contain;
          object-position: center;
        }
        */

        .news-notification:hover .background-image {
          transform: scale(1.02); /* Reducido para evitar overflow */
        }

        .image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0.05) 0%,
            rgba(0, 0, 0, 0.15) 70%,
            rgba(0, 0, 0, 0.35) 100%
          );
          /* Overlay más suave para no ocultar detalles de la imagen */
        }

        /* Botón de cerrar */
        .close-button {
          position: absolute;
          top: 12px;
          right: 12px;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(10px);
          color: white;
          border: none;
          cursor: pointer;
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
          opacity: 0.8;
        }

        .close-button:hover {
          background: rgba(0, 0, 0, 0.7);
          opacity: 1;
          transform: scale(1.1);
        }

        /* Badge de categoría */
        .category-badge {
          position: absolute;
          top: 12px;
          left: 12px;
          background: #00a651;
          color: white;
          padding: 6px 12px;
          border-radius: 12px;
          font-size: 11px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          z-index: 5;
          box-shadow: 0 2px 8px rgba(0, 166, 81, 0.3);
        }

        /* Área de contenido - Altura flexible */
        .content-area {
          position: relative;
          padding: 24px 20px 20px 20px;
          flex: 1; /* ✅ CAMBIO: ocupa el espacio restante */
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          background: white;
          min-height: 112px;
        }

        .text-content {
          flex: 1;
        }

        .notification-title {
          font-size: 17px;
          font-weight: 700;
          color: #1a1a1a;
          margin: 0 0 10px 0;
          line-height: 1.3;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .notification-description {
          font-size: 14px;
          color: #666;
          margin: 0;
          line-height: 1.4;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        /* Botón de acción - Mejorar visibilidad */
        .action-button {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: #00a651;
          color: white;
          border: none;
          padding: 14px 18px;
          border-radius: 10px;
          font-size: 14px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s ease;
          margin-top: 16px;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          box-shadow: 0 2px 8px rgba(0, 166, 81, 0.2);
          min-height: 44px;
          gap: 8px;
        }

        .action-button:hover {
          background: #008a44;
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(0, 166, 81, 0.3);
        }

        .action-button svg {
          transition: transform 0.2s ease;
        }

        .action-button:hover svg {
          transform: translate(2px, -2px);
        }

        /* Barra de progreso */
        .progress-bar {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: rgba(0, 0, 0, 0.1);
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #00a651, #00d564);
          width: 100%;
          transform: translateX(-100%);
          animation: progressBar ${duration}ms linear forwards;
        }

        /* Animaciones */
        @keyframes slideInLeft {
          0% {
            transform: translateX(-100%);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes slideOutLeft {
          0% {
            transform: translateX(0);
            opacity: 1;
          }
          100% {
            transform: translateX(-100%);
            opacity: 0;
          }
        }

        @keyframes progressBar {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(0); }
        }

        /* Responsive - Ajustes para altura automática */
        @media (max-width: 768px) {
          .news-notification {
            width: calc(100vw - 20px);
            min-height: 260px;
            max-height: 320px;
            left: 10px;
            top: 80px;
          }
          
          .image-container {
            max-height: 160px;
          }
          
          .content-area {
            padding: 16px;
          }
          
          .notification-title {
            font-size: 15px;
          }
          
          .notification-description {
            font-size: 12px;
          }

          .action-button {
            padding: 12px 16px;
            font-size: 13px;
            min-height: 40px;
          }
        }

        @media (max-width: 480px) {
          .news-notification {
            width: calc(100vw - 10px);
            left: 5px;
            top: 70px;
            min-height: 240px;
            max-height: 300px;
          }

          .image-container {
            max-height: 140px;
          }
        }
      `}</style>
    </>
  );
};

export default NewsNotification;