"use client";
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, Mail, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

// SearchComponent simple como fallback
function SearchComponent(): React.JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobile, setIsMobile] = useState(false);

  // Detectar móvil
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log('Buscando:', searchQuery);
      window.location.href = `/buscar?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  // En móvil, usar un estilo diferente que no tape el logo
  if (isMobile) {
    return (
      <div className="w-full">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 bg-white hover:bg-gray-50 transition-colors"
          aria-label="Buscar"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.35-4.35"></path>
          </svg>
        </button>

        {isOpen && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-start justify-center pt-4">
            <div className="bg-white rounded-lg mx-4 w-full max-w-md p-4 shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Buscar en ElectroHuila</h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X size={20} />
                </button>
              </div>
              
              <form onSubmit={handleSearch} className="space-y-4">
                <input
                  type="text"
                  placeholder="¿Qué buscas? (factura, cortes, oficinas...)"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  autoFocus
                />
                <div className="flex gap-2">
                  <button
                    type="submit"
                    className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Buscar
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Cancelar
                  </button>
                </div>
              </form>
              
              <div className="mt-4 text-xs text-gray-500 text-center">
                💡 Tip: Puedes escribir como quieras, ¡te entenderé!
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // Para desktop, mantener el comportamiento original
  return (
    <div style={{ position: 'relative' }}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          background: 'none',
          border: '1px solid #ccc',
          borderRadius: '50%',
          width: '40px',
          height: '40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer'
        }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="8"></circle>
          <path d="m21 21-4.35-4.35"></path>
        </svg>
      </button>

      {isOpen && (
        <div style={{
          position: 'absolute',
          top: '45px',
          right: 0,
          backgroundColor: 'white',
          border: '1px solid #ccc',
          borderRadius: '4px',
          padding: '10px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
          zIndex: 1000,
          minWidth: '250px'
        }}>
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Buscar..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '8px',
                border: '1px solid #ccc',
                borderRadius: '4px',
                marginBottom: '8px'
              }}
              autoFocus
            />
            <button
              type="submit"
              style={{
                width: '100%',
                padding: '8px',
                backgroundColor: '#1a6192',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              Buscar
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default function Header(): React.JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Detectar móvil
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const toggleMobileMenu = (): void => {
    setIsMenuOpen(prevState => !prevState);
  };

  useEffect(() => {
    const handleScroll = (): void => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
  }, [isMenuOpen]);

  useEffect(() => {
    const handleResize = (): void => {
      if (window.innerWidth > 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);

  const menuItems = [
    { title: 'Inicio', path: '/', video: '/videos/1.mp4' },
    { title: 'Nuestra Empresa', path: '/institucional', video: '/videos/2.mp4' },
    { title: 'Servicios', path: '/servicios', video: '/videos/6.mp4' },
    { title: 'Proveedores', path: '/proveedores-contratistas', video: '/videos/5.mp4' },
    { title: 'Transparencia', path: '/ley-de-transparencia', video: '/videos/3.mp4' },
    { title: 'Contáctenos', path: '/contactenos', video: '/videos/4.mp4' }
  ];

  const handleSocialMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>): void => {
    const target = e.target as HTMLAnchorElement;
    target.style.opacity = '0.7';
  };

  const handleSocialMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>): void => {
    const target = e.target as HTMLAnchorElement;
    target.style.opacity = '1';
  };

  return (
    <header className={scrolled ? 'header-scrolled' : ''}>
      {/* Parte superior del header */}
      <div className="top-header" style={{ backgroundColor: '#1a6192' }}>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          padding: '8px 15px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '10px'
        }}>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: isMobile ? '10px' : '20px', 
            flexWrap: 'wrap',
            fontSize: isMobile ? '12px' : '14px'
          }}>
            <span style={{ 
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              gap: '5px'
            }}>
              <Phone size={isMobile ? 14 : 16} />
              <span className={isMobile ? 'hidden sm:inline' : ''}>Línea de Atención: </span>
              <span>018000 911 247</span>
            </span>
            {!isMobile && (
              <span style={{ 
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                gap: '5px'
              }}>
                <Mail size={16} />
                contacto@electrohuila.com.co
              </span>
            )}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <a 
              href="https://www.facebook.com/electrohuila" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ color: 'white', transition: 'opacity 0.3s ease' }}
              onMouseEnter={handleSocialMouseEnter}
              onMouseLeave={handleSocialMouseLeave}
            >
              <Facebook size={isMobile ? 16 : 18} />
            </a>
            <a 
              href="https://twitter.com/electrohuila" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ color: 'white', transition: 'opacity 0.3s ease' }}
              onMouseEnter={handleSocialMouseEnter}
              onMouseLeave={handleSocialMouseLeave}
            >
              <Twitter size={isMobile ? 16 : 18} />
            </a>
            <a 
              href="https://www.instagram.com/electrohuila" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ color: 'white', transition: 'opacity 0.3s ease' }}
              onMouseEnter={handleSocialMouseEnter}
              onMouseLeave={handleSocialMouseLeave}
            >
              <Instagram size={isMobile ? 16 : 18} />
            </a>
            <a 
              href="https://www.youtube.com/@ElectrificadoraDelHuila" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ color: 'white', transition: 'opacity 0.3s ease' }}
              onMouseEnter={handleSocialMouseEnter}
              onMouseLeave={handleSocialMouseLeave}
            >
              <Youtube size={isMobile ? 16 : 18} />
            </a>
          </div>
        </div>
      </div>

      {/* Parte principal del header */}
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '15px', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        backgroundColor: 'white',
        position: 'relative'
      }}>
        {/* Logo */}
        <div style={{ flexShrink: 0 }}>
          <Link href="/">
            <img 
              src="/images/LOGO-normal.png" 
              alt="Logo Electrohuila" 
              style={{ 
                height: isMobile ? '70px' : '90px',
                width: 'auto'
              }} 
            />
          </Link>
        </div>

        {/* Área de navegación y botones */}
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '15px',
          marginLeft: 'auto'
        }}>
          {/* Menú de navegación para escritorio */}
          {!isMobile && (
            <nav style={{ display: 'flex', position: 'relative' }}>
              <ul style={{ 
                display: 'flex', 
                listStyle: 'none', 
                margin: 0, 
                padding: 0, 
                gap: '20px' 
              }}>
                {menuItems.map((item, index) => (
                  <li
                    key={index}
                    onMouseEnter={() => setActiveVideo(item.video)}
                    onMouseLeave={() => setActiveVideo(null)}
                    style={{ position: 'relative' }}
                  >
                    <Link href={item.path} style={{ color: '#333', textDecoration: 'none', fontWeight: '500' }}>
                      {item.title}
                    </Link>
                    {/* Video al hacer hover */}
                    {activeVideo === item.video && (
                      <div style={{
                        position: 'absolute',
                        top: '40px',
                        left: 0,
                        zIndex: 2000,
                        width: '200px',
                        height: '112px',
                        background: '#000',
                        borderRadius: '8px',
                        overflow: 'hidden',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
                      }}>
                        <video
                          src={item.video}
                          width="200"
                          height="112"
                          autoPlay
                          loop
                          muted
                          style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          )}
          
          {/* Buscador */}
          <SearchComponent />
          
          {/* Botón de menú móvil */}
          {isMobile && (
            <button 
              ref={buttonRef}
              onClick={toggleMobileMenu} 
              style={{ 
                background: 'none', 
                border: 'none', 
                cursor: 'pointer', 
                padding: '10px',
                touchAction: 'manipulation',
                WebkitTapHighlightColor: 'transparent'
              }}
              aria-label="Menú"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          )}
        </div>

        {/* Menú para móvil */}
        {isMenuOpen && (
          <div 
            ref={mobileMenuRef}
            style={{ 
              position: 'fixed', 
              top: 0, 
              right: 0, 
              width: '100%', 
              height: '100%', 
              backgroundColor: 'white',
              zIndex: 1000,
              paddingTop: '60px',
              overflowY: 'auto'
            }}
          >
            <button 
              onClick={toggleMobileMenu}
              style={{
                position: 'absolute',
                top: '15px',
                right: '15px',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '10px',
                touchAction: 'manipulation'
              }}
            >
              <X size={24} />
            </button>
            
            <ul style={{ 
              listStyle: 'none', 
              padding: '0 20px', 
              margin: 0 
            }}>
              {menuItems.map((item, index) => (
                <li key={index} style={{ 
                  marginBottom: '15px', 
                  borderBottom: '1px solid #eee', 
                  paddingBottom: '15px' 
                }}>
                  <Link 
                    href={item.path} 
                    onClick={toggleMobileMenu}
                    style={{ 
                      color: '#333', 
                      textDecoration: 'none', 
                      fontSize: '18px', 
                      display: 'block', 
                      padding: '10px 0',
                      touchAction: 'manipulation'
                    }}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Redes sociales en menú móvil */}
            <div style={{ 
              padding: '20px', 
              borderTop: '1px solid #eee', 
              marginTop: '20px' 
            }}>
              <h4 style={{ 
                marginBottom: '15px', 
                color: '#333', 
                fontSize: '16px' 
              }}>
                Síguenos en:
              </h4>
              <div style={{ 
                display: 'flex', 
                gap: '20px', 
                justifyContent: 'center' 
              }}>
                <a 
                  href="https://es-la.facebook.com/ElectroHuilaOficial" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={{ color: '#1a6192' }}
                >
                  <Facebook size={24} />
                </a>
                <a 
                  href="https://x.com/Electrohuila" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={{ color: '#1a6192' }}
                >
                  <Twitter size={24} />
                </a>
                <a 
                  href="https://www.instagram.com/electrohuila/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={{ color: '#1a6192' }}
                >
                  <Instagram size={24} />
                </a>
                <a 
                  href="https://www.youtube.com/@ElectrificadoraDelHuila" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={{ color: '#1a6192' }}
                >
                  <Youtube size={24} />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}