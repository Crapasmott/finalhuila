'use client';

import { useState } from 'react';
import Link from 'next/link';

// Interfaces TypeScript
interface Sede {
  id: number;
  nombre: string;
  direccion: string;
  telefono: string;
  horario: string;
  lat: number;
  lng: number;
  googleMapsUrl: string;
}

export default function PuntosDeAtencionPage(): React.JSX.Element {
  const [showSedes, setShowSedes] = useState<boolean>(true);
  const [selectedSede, setSelectedSede] = useState<number>(1);
  
  // Datos de las sedes con URLs de Google Maps
  const sedesData: Sede[] = [
    { 
      id: 1, 
      nombre: "Sede Principal Neiva", 
      direccion: "Cra. 18 #8-1", 
      telefono: "608 8664600", 
      horario: "Lunes a viernes: 7:00 am - 4:00 pm", 
      lat: 2.9273, 
      lng: -75.2882,
      googleMapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.5963520881583!2d-75.28292411635059!3d2.931740746848429!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3b746e96c67353%3A0xcd394f1f42dc834c!2sCra.%2018%20%238-1%2C%20Neiva%2C%20Huila!5e0!3m2!1ses-419!2sco!4v1753152880329!5m2!1ses-419!2sco"
    },
    { 
      id: 2, 
      nombre: "Sede Pitalito", 
      direccion: "Calle 19 sur # 3-05", 
      telefono: "608 8360022", 
      horario: "Lunes a viernes: 7:30 am - 12:00 m y 2:00 pm - 5:30 pm", 
      lat: 1.8532, 
      lng: -76.0529,
      googleMapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.746287954982!2d-76.06672952432208!3d1.8466225597762638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e250b5d0a66f931%3A0xb6e564682adb8786!2sElectrohuila!5e0!3m2!1ses-419!2sco!4v1753153053327!5m2!1ses-419!2sco"
    },
    { 
      id: 3, 
      nombre: "Sede Garzón", 
      direccion: "Calle 8 # 7-54", 
      telefono: "608 8332533", 
      horario: "Lunes a viernes: 7:30 am - 12:00 m y 2:00 pm - 5:30 pm", 
      lat: 2.1978, 
      lng: -75.6276,
      googleMapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3986.8862255783506!2d-75.63095771635899!3d2.196729952572604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e24d9003d92b401%3A0x7fcac779b97c0d10!2sElectrohuila%20Garz%C3%B3n!5e0!3m2!1ses-419!2sco!4v1753153136410!5m2!1ses-419!2sco"
    },
    { 
      id: 4, 
      nombre: "Sede La Plata", 
      direccion: "Cl. 10 #5a-2", 
      telefono: "608 8370017", 
      horario: "Lunes a viernes: 7:30 am - 12:00 m y 2:00 pm - 5:30 pm", 
      lat: 2.3929, 
      lng: -75.8917,
      googleMapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3986.3344116368135!2d-75.89349672432319!3d2.394561857326135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3ad2afa1a51577%3A0x2cf2b2a92b207346!2sElectroHuila%20S.A%20E.S.P!5e0!3m2!1ses-419!2sco!4v1753153183213!5m2!1ses-419!2sco"
    }
  ];

  // Función para cambiar la sede seleccionada
  const selectSede = (sedeId: number): void => {
    setSelectedSede(sedeId);
  };

  // Función para manejar el hover de botones
  const handleButtonMouseEnter = (e: React.MouseEvent<HTMLButtonElement>): void => {
    const target = e.target as HTMLButtonElement;
    const sedeId = parseInt(target.dataset.sedeId || '0');
    if (selectedSede !== sedeId) {
      target.style.backgroundColor = '#e5e7eb';
    }
  };

  const handleButtonMouseLeave = (e: React.MouseEvent<HTMLButtonElement>): void => {
    const target = e.target as HTMLButtonElement;
    const sedeId = parseInt(target.dataset.sedeId || '0');
    if (selectedSede !== sedeId) {
      target.style.backgroundColor = '#f3f4f6';
    }
  };

  // Obtener la sede actualmente seleccionada
  const currentSede = sedesData.find(sede => sede.id === selectedSede) || sedesData[0];
  
  return (
    <div style={{ backgroundColor: 'white', minHeight: '100vh' }}>
      {/* Encabezado */}
      <div style={{ 
        borderBottom: '1px solid #e5e7eb',
        backgroundColor: 'white',
        padding: '16px 0'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h1 style={{ fontSize: '32px', fontWeight: 'bold', color: '#333' }}>
            Puntos de <span style={{ color: '#1797D5' }}>Atención</span>
          </h1>
          <div>
            <Link href="/" style={{ color: '#1797D5', marginRight: '12px', textDecoration: 'none' }}>Inicio</Link>
            <span style={{ color: '#6B7280' }}>| Puntos de Atención</span>
          </div>
        </div>
      </div>
      
      {/* Contenido principal */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '24px' }}>
        
        {/* Mapa con Google Maps */}
        <div style={{ marginBottom: '32px' }}>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            marginBottom: '16px',
            flexWrap: 'wrap',
            gap: '16px'
          }}>
            <h2 style={{ fontSize: '24px', color: '#333', margin: 0 }}>
              Ubicación: {currentSede.nombre}
            </h2>
            
            {/* Selector de sedes */}
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {sedesData.map((sede) => (
                <button
                  key={sede.id}
                  data-sede-id={sede.id}
                  onClick={() => selectSede(sede.id)}
                  onMouseEnter={handleButtonMouseEnter}
                  onMouseLeave={handleButtonMouseLeave}
                  style={{
                    backgroundColor: selectedSede === sede.id ? '#1797D5' : '#f3f4f6',
                    color: selectedSede === sede.id ? 'white' : '#4B5563',
                    border: 'none',
                    borderRadius: '6px',
                    padding: '8px 16px',
                    fontSize: '14px',
                    fontWeight: '500',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {sede.nombre.replace('Sede ', '')}
                </button>
              ))}
            </div>
          </div>

          {/* Contenedor del mapa */}
          <div style={{ 
            position: 'relative', 
            height: '400px', 
            borderRadius: '8px', 
            overflow: 'hidden', 
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            backgroundColor: 'white'
          }}>
            <iframe 
              src={currentSede.googleMapsUrl}
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true}
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title={`Ubicación de ${currentSede.nombre}`}
            />
          </div>
          
          {/* Información de la sede seleccionada */}
          <div style={{ 
            backgroundColor: '#f8fafc', 
            border: '1px solid #e2e8f0',
            borderRadius: '8px', 
            padding: '16px',
            marginTop: '16px'
          }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '18px' }}>📍</span>
                <span><strong>Dirección:</strong> {currentSede.direccion}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '18px' }}>📞</span>
                <span><strong>Teléfono:</strong> {currentSede.telefono}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '18px' }}>🕒</span>
                <span><strong>Horario:</strong> {currentSede.horario}</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Lista de todas las sedes */}
        <div>
          <h2 style={{ fontSize: '24px', color: '#333', marginBottom: '16px' }}>
            Todas Nuestras Sedes ({sedesData.length})
          </h2>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', 
            gap: '24px'
          }}>
            {sedesData.map((sede: Sede) => (
              <div 
                key={sede.id}
                style={{ 
                  border: selectedSede === sede.id ? '2px solid #1797D5' : '1px solid #e5e7eb', 
                  borderRadius: '8px',
                  overflow: 'hidden',
                  boxShadow: selectedSede === sede.id ? '0 4px 12px rgba(23, 151, 213, 0.15)' : '0 1px 3px rgba(0,0,0,0.1)',
                  backgroundColor: 'white',
                  transition: 'all 0.2s ease'
                }}
              >
                <div style={{ 
                  padding: '16px', 
                  borderBottom: '1px solid #e5e7eb',
                  backgroundColor: selectedSede === sede.id ? '#1797D5' : '#1A6192',
                  color: 'white'
                }}>
                  <h3 style={{ fontSize: '18px', fontWeight: 'bold', margin: '0' }}>
                    {sede.nombre}
                  </h3>
                </div>
                
                <div style={{ padding: '16px' }}>
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'flex-start', 
                    marginBottom: '12px'
                  }}>
                    <span style={{ fontSize: '18px', marginRight: '8px', marginTop: '2px' }}>📍</span>
                    <span><strong>Dirección:</strong> {sede.direccion}</span>
                  </div>
                  
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'flex-start', 
                    marginBottom: '12px'
                  }}>
                    <span style={{ fontSize: '18px', marginRight: '8px', marginTop: '2px' }}>📞</span>
                    <span><strong>Teléfono:</strong> {sede.telefono}</span>
                  </div>
                  
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'flex-start', 
                    marginBottom: '16px'
                  }}>
                    <span style={{ fontSize: '18px', marginRight: '8px', marginTop: '2px' }}>🕒</span>
                    <span><strong>Horario:</strong> {sede.horario}</span>
                  </div>
                  
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button
                      onClick={() => selectSede(sede.id)}
                      style={{ 
                        backgroundColor: selectedSede === sede.id ? '#10b981' : '#1797D5',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        padding: '8px 16px',
                        flex: 1,
                        cursor: 'pointer',
                        fontWeight: '500',
                        fontSize: '14px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '6px'
                      }}
                    >
                      {selectedSede === sede.id ? '✅ Seleccionada' : '🗺️ Ver en mapa'}
                    </button>
                    
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${sede.lat},${sede.lng}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ 
                        backgroundColor: '#6b7280',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        padding: '8px 12px',
                        textDecoration: 'none',
                        fontSize: '14px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      🔗
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Información de contacto */}
        <div style={{ 
          backgroundColor: '#f3f4f6', 
          padding: '24px', 
          borderRadius: '8px',
          marginTop: '32px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px'
        }}>
          <div>
            <h3 style={{ fontSize: '20px', marginBottom: '16px', color: '#333', display: 'flex', alignItems: 'center', gap: '8px' }}>
              📞 Líneas de atención
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '16px' }}>🌐</span>
                <span><strong>Línea Nacional:</strong> 018000 952 115</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '16px' }}>📞</span>
                <span><strong>PBX:</strong> 608 8664600 - 608 8664646</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 style={{ fontSize: '20px', marginBottom: '16px', color: '#333', display: 'flex', alignItems: 'center', gap: '8px' }}>
              ✉️ Correo electrónico
            </h3>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '16px' }}>📧</span>
              <span><strong>Email:</strong> contactenos@electrohuila.com.co</span>
            </div>
          </div>

          <div>
            <h3 style={{ fontSize: '20px', marginBottom: '16px', color: '#333', display: 'flex', alignItems: 'center', gap: '8px' }}>
              ⚡ Emergencias
            </h3>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '16px' }}>🚨</span>
              <span><strong>Línea de emergencias:</strong> 115</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}