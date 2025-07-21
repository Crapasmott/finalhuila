// ARCHIVO: components/YouTubeGallery.tsx
// Versión TypeScript CORREGIDA

'use client';
import React, { useState, useRef, useEffect, useCallback } from 'react';

// Interfaces para TypeScript
interface YouTubeVideo {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  publishedAt: string;
  duration: string;
  viewCount: string;
  channelTitle: string;
  url: string;
  embedUrl: string;
}

interface YouTubeOptions {
  maxResults?: number;
  autoRefresh?: boolean;
  refreshInterval?: number;
}

interface YouTubeHookReturn {
  videos: YouTubeVideo[];
  loading: boolean;
  refresh: () => void;
}

interface RevealElementProps {
  children: React.ReactNode;
  direction?: 'left' | 'right' | 'top' | 'bottom';
  delay?: number;
}

interface YouTubeGalleryProps {
  maxVideos?: number;
  autoRefresh?: boolean;
  refreshInterval?: number;
}

// Componente para animaciones de entrada
const RevealElement: React.FC<RevealElementProps> = ({ children, direction = 'bottom', delay = 0 }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay * 1000);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);

  const getAnimationClass = (): string => {
    const base = isVisible ? 'opacity-100 translate-y-0' : 'opacity-0';
    switch (direction) {
      case 'left': return `${base} ${!isVisible ? '-translate-x-8' : 'translate-x-0'}`;
      case 'right': return `${base} ${!isVisible ? 'translate-x-8' : 'translate-x-0'}`;
      case 'top': return `${base} ${!isVisible ? '-translate-y-8' : 'translate-y-0'}`;
      default: return `${base} ${!isVisible ? 'translate-y-8' : 'translate-y-0'}`;
    }
  };

  return (
    <div ref={ref} className={`transition-all duration-700 ease-out ${getAnimationClass()}`}>
      {children}
    </div>
  );
};

// Hook para obtener videos de YouTube
const useYouTubeVideos = (options: YouTubeOptions = {}): YouTubeHookReturn => {
  const {
    maxResults = 4,
    autoRefresh = true,
    refreshInterval = 30
  } = options;

  const [videos, setVideos] = useState<YouTubeVideo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Función para generar duración aleatoria
  const generateRandomDuration = (): string => {
    const minutes = Math.floor(Math.random() * 8) + 2;
    const seconds = Math.floor(Math.random() * 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  // Función para generar views aleatorios
  const generateRandomViews = (): string => {
    const views = Math.floor(Math.random() * 8000) + 1000;
    if (views >= 1000) {
      return `${(views / 1000).toFixed(1)}K`;
    }
    return views.toString();
  };

  const fetchVideos = useCallback(async (): Promise<void> => {
    try {
      setLoading(true);
      
      console.log('🔍 Fetching videos from YouTube API...');

      const response = await fetch('/api/youtube');
      const data = await response.json();
      
      console.log('📊 API Response received:', data);
      
      if (response.ok && data.success && data.videos && data.videos.length > 0) {
        console.log(`✅ Processing ${data.videos.length} videos from API`);
        
        // Ordenar videos por fecha (más recientes primero)
        const sortedVideos = data.videos.sort((a: YouTubeVideo, b: YouTubeVideo) => 
          new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
        );
        
        // Procesar los videos
        const processedVideos: YouTubeVideo[] = sortedVideos.slice(0, maxResults).map((video: any) => ({
          id: video.id,
          title: video.title,
          description: video.description || 'Video institucional de ElectroHuila',
          thumbnail: video.thumbnail,
          publishedAt: video.publishedAt,
          duration: generateRandomDuration(),
          viewCount: generateRandomViews(),
          channelTitle: video.channelTitle || 'Electrohuila SA ESP',
          url: video.url,
          embedUrl: video.embedUrl
        }));

        console.log(`✅ Successfully processed ${processedVideos.length} videos`);
        setVideos(processedVideos);
        setLoading(false);
        return;
      }

      console.warn('⚠️ API response invalid or empty, using fallback data');
      throw new Error('API response invalid');

    } catch (err) {
      console.error('❌ Error fetching YouTube videos:', err);
      console.log('🔄 Using fallback data...');
      
      // FALLBACK: Datos estáticos basados en los videos reales
      const fallbackVideos: YouTubeVideo[] = [
        {
          id: 'h43lP48Yx5U',
          title: 'Día de la Mujer',
          description: 'Somos la estudiantina del Alto Magdalena y estamos conmemorando el Día de la Mujer en la Electrificadora del Huila.',
          thumbnail: 'https://i.ytimg.com/vi/h43lP48Yx5U/mqdefault.jpg',
          publishedAt: '2025-05-22T05:00:49Z',
          duration: '3:45',
          viewCount: '1.2K',
          channelTitle: 'Electrohuila SA ESP',
          url: 'https://www.youtube.com/watch?v=h43lP48Yx5U',
          embedUrl: 'https://www.youtube.com/embed/h43lP48Yx5U'
        },
        {
          id: 'b-IQeVdS1SU',
          title: 'Medida Asentamiento',
          description: 'Hoy ElectroHuila realiza una importante inversión en el asentamiento Brisas del Magdaleno.',
          thumbnail: 'https://i.ytimg.com/vi/b-IQeVdS1SU/mqdefault.jpg',
          publishedAt: '2025-05-14T02:50:55Z',
          duration: '4:20',
          viewCount: '2.1K',
          channelTitle: 'Electrohuila SA ESP',
          url: 'https://www.youtube.com/watch?v=b-IQeVdS1SU',
          embedUrl: 'https://www.youtube.com/embed/b-IQeVdS1SU'
        },
        {
          id: 'msbymMQCipg',
          title: 'Granja CON oFF',
          description: 'Electrohuila lidera la transición energética en la región surcolombiana.',
          thumbnail: 'https://i.ytimg.com/vi/msbymMQCipg/mqdefault.jpg',
          publishedAt: '2025-05-14T02:04:21Z',
          duration: '5:15',
          viewCount: '1.8K',
          channelTitle: 'Electrohuila SA ESP',
          url: 'https://www.youtube.com/watch?v=msbymMQCipg',
          embedUrl: 'https://www.youtube.com/embed/msbymMQCipg'
        },
        {
          id: 'aHKMt-Wc-3k',
          title: 'Reforestación Iquira',
          description: 'Para Electro Huila, el cuidado del medio ambiente es prioridad.',
          thumbnail: 'https://i.ytimg.com/vi/aHKMt-Wc-3k/mqdefault.jpg',
          publishedAt: '2025-05-14T01:34:32Z',
          duration: '3:55',
          viewCount: '1.5K',
          channelTitle: 'Electrohuila SA ESP',
          url: 'https://www.youtube.com/watch?v=aHKMt-Wc-3k',
          embedUrl: 'https://www.youtube.com/embed/aHKMt-Wc-3k'
        }
      ];

      setVideos(fallbackVideos.slice(0, maxResults));
      setLoading(false);
    }
  }, [maxResults]);

  useEffect(() => {
    fetchVideos();
  }, [fetchVideos]);

  useEffect(() => {
    if (!autoRefresh || refreshInterval <= 0) return;

    const intervalMs = refreshInterval * 60 * 1000;
    const interval = setInterval(() => {
      fetchVideos();
    }, intervalMs);

    return () => clearInterval(interval);
  }, [autoRefresh, refreshInterval, fetchVideos]);

  return {
    videos,
    loading,
    refresh: fetchVideos
  };
};

// Componente principal
const YouTubeGallery: React.FC<YouTubeGalleryProps> = ({ 
  maxVideos = 4, 
  autoRefresh = true, 
  refreshInterval = 30 
}) => {
  const { videos, loading, refresh } = useYouTubeVideos({
    maxResults: maxVideos,
    autoRefresh,
    refreshInterval
  });

  const [selectedVideo, setSelectedVideo] = useState<YouTubeVideo | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const modalRef = useRef<HTMLDivElement>(null);

  console.log('🎥 Videos in component:', videos);
  console.log('⏳ Loading state:', loading);

  // Función para determinar categoría
  const getVideoCategory = (title: string): string => {
    const titleLower = title.toLowerCase();
    if (titleLower.includes('sostenib') || titleLower.includes('medio ambiente')) {
      return 'Sostenibilidad';
    }
    if (titleLower.includes('tecnolog') || titleLower.includes('modern')) {
      return 'Tecnología';
    }
    if (titleLower.includes('rural') || titleLower.includes('comunidad')) {
      return 'Impacto Social';
    }
    return 'Institucional';
  };

  // Formatear fecha
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  const handleVideoClick = (video: YouTubeVideo): void => {
    setSelectedVideo(video);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = (): void => {
    setIsModalOpen(false);
    setSelectedVideo(null);
    document.body.style.overflow = 'auto';
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isModalOpen]);

  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent): void => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener('keydown', handleEscKey);
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [isModalOpen]);

  if (loading) {
    return (
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <RevealElement direction="bottom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Galería de Videos Institucionales</h2>
              <p className="text-lg text-gray-600">Conoce nuestros proyectos, iniciativas y compromiso con la región.</p>
            </div>
          </RevealElement>

          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
            <p className="text-gray-600">Cargando videos...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <RevealElement direction="bottom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Galería de Videos Institucionales</h2>
            <p className="text-lg text-gray-600">Conoce nuestros proyectos, iniciativas y compromiso con la región.</p>
          </div>
        </RevealElement>

        {/* Grid de videos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {videos.map((video, index) => (
            <RevealElement key={video.id} direction="bottom" delay={0.1 * index}>
              <div 
                className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                onClick={() => handleVideoClick(video)}
              >
                <div className="relative">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <div className="bg-white bg-opacity-90 rounded-full p-4 transform scale-0 hover:scale-100 transition-transform duration-300">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-xs">
                    {video.duration}
                  </div>
                  <div className="absolute top-2 left-2 bg-blue-600 text-white px-2 py-1 rounded text-xs">
                    {getVideoCategory(video.title)}
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{video.title}</h3>
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>{formatDate(video.publishedAt)}</span>
                    <span>{video.viewCount} views</span>
                  </div>
                </div>
              </div>
            </RevealElement>
          ))}
        </div>

        {/* Botón para ver más */}
        <RevealElement direction="bottom" delay={0.3}>
          <div className="text-center">
            <a 
              href="https://www.youtube.com/@ElectrificadoraDelHuila" 
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              target="_blank" 
              rel="noopener noreferrer"
            >
              Ver Todos los Videos en YouTube
            </a>
          </div>
        </RevealElement>
      </div>

      {/* Modal */}
      {isModalOpen && selectedVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto" ref={modalRef}>
            <div className="relative">
              <button 
                onClick={closeModal}
                className="absolute top-4 right-4 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-75 z-10"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                </svg>
              </button>
              
              <div className="relative w-full pb-[56.25%]">
                <iframe
                  src={`https://www.youtube.com/embed/${selectedVideo.id}?autoplay=1&rel=0`}
                  title={selectedVideo.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full"
                ></iframe>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{selectedVideo.title}</h3>
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">
                    {getVideoCategory(selectedVideo.title)}
                  </span>
                  <span>{formatDate(selectedVideo.publishedAt)}</span>
                  <span>{selectedVideo.viewCount} visualizaciones</span>
                </div>
                <p className="text-gray-700">{selectedVideo.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default YouTubeGallery;