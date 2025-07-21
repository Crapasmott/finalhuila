// ARCHIVO: hooks/useYouTubeVideos.js
// Hook para obtener videos de YouTube desde el cliente

import { useState, useEffect } from 'react';

export function useYouTubeVideos() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchYouTubeVideos = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Configuración - puedes mover esto a variables de entorno públicas
      const API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
      const CHANNEL_ID = process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_ID;
      const MAX_RESULTS = 20;
      
      if (!API_KEY || !CHANNEL_ID) {
        throw new Error('YouTube API Key o Channel ID no configurados');
      }
      
      // Fechas específicas: Mayo y Junio 2025
      const publishedAfter = '2025-05-01T00:00:00Z';
      const publishedBefore = '2025-06-30T23:59:59Z';
      
      console.log('📅 Buscando videos de YouTube mayo-junio 2025...');
      
      const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&maxResults=50&order=date&type=video&publishedAfter=${publishedAfter}&publishedBefore=${publishedBefore}&key=${API_KEY}`;
      
      const response = await fetch(url);
      const data = await response.json();
      
      console.log('📊 YouTube API Response:', {
        status: response.status,
        totalResults: data.pageInfo?.totalResults,
        itemsLength: data.items?.length
      });
      
      if (!response.ok) {
        throw new Error(data.error?.message || 'Error en YouTube API');
      }
      
      if (!data.items || data.items.length === 0) {
        console.log('⚠️ No se encontraron videos en YouTube');
        setVideos([]);
        return;
      }
      
      // Procesar videos y filtrar en vivo
      const processedVideos = data.items
        .filter(item => {
          const title = item.snippet.title.toLowerCase();
          const description = item.snippet.description.toLowerCase();
          
          // Excluir videos en vivo
          const isLive = title.includes('en vivo') || 
                        title.includes('live') ||
                        title.includes('está en vivo') ||
                        description.includes('en vivo') ||
                        description.includes('live') ||
                        item.snippet.liveBroadcastContent === 'live' ||
                        item.snippet.liveBroadcastContent === 'upcoming';
          
          return !isLive;
        })
        .slice(0, MAX_RESULTS)
        .map(item => ({
          id: item.id.videoId,
          title: item.snippet.title,
          description: item.snippet.description,
          thumbnail: item.snippet.thumbnails.medium?.url || item.snippet.thumbnails.default?.url,
          publishedAt: item.snippet.publishedAt,
          url: `https://www.youtube.com/watch?v=${item.id.videoId}`,
          embedUrl: `https://www.youtube.com/embed/${item.id.videoId}`,
          channelTitle: item.snippet.channelTitle
        }));
      
      console.log(`✅ Procesados ${processedVideos.length} videos de YouTube`);
      setVideos(processedVideos);
      
    } catch (err) {
      setError(err.message);
      console.error('❌ Error obteniendo videos de YouTube:', err);
      
      // Datos fallback si no se puede conectar
      const fallbackVideos = [
        {
          id: 'demo1',
          title: 'Video Demo 1 - ElectroHuila',
          description: 'Video de demostración de ElectroHuila',
          thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/mqdefault.jpg',
          publishedAt: '2025-05-15T10:00:00Z',
          url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
          embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
          channelTitle: 'ElectroHuila'
        },
        {
          id: 'demo2',
          title: 'Video Demo 2 - ElectroHuila',
          description: 'Segundo video de demostración',
          thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/mqdefault.jpg',
          publishedAt: '2025-05-20T14:30:00Z',
          url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
          embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
          channelTitle: 'ElectroHuila'
        }
      ];
      
      setVideos(fallbackVideos);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchYouTubeVideos();
  }, []);

  return {
    videos,
    loading,
    error,
    refetch: fetchYouTubeVideos
  };
}

// Hook alternativo para uso en Server Components (build time)
export async function getYouTubeVideosStatic() {
  try {
    const API_KEY = process.env.YOUTUBE_API_KEY;
    const CHANNEL_ID = process.env.YOUTUBE_CHANNEL_ID;
    
    if (!API_KEY || !CHANNEL_ID) {
      console.warn('⚠️ YouTube API Key o Channel ID no configurados para build estático');
      return [];
    }
    
    const publishedAfter = '2025-05-01T00:00:00Z';
    const publishedBefore = '2025-06-30T23:59:59Z';
    
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&maxResults=50&order=date&type=video&publishedAfter=${publishedAfter}&publishedBefore=${publishedBefore}&key=${API_KEY}`;
    
    const response = await fetch(url);
    const data = await response.json();
    
    if (!response.ok || !data.items) {
      console.warn('⚠️ No se pudieron obtener videos de YouTube para build estático');
      return [];
    }
    
    return data.items
      .filter(item => {
        const title = item.snippet.title.toLowerCase();
        const isLive = title.includes('en vivo') || title.includes('live');
        return !isLive;
      })
      .slice(0, 20)
      .map(item => ({
        id: item.id.videoId,
        title: item.snippet.title,
        description: item.snippet.description,
        thumbnail: item.snippet.thumbnails.medium?.url || item.snippet.thumbnails.default?.url,
        publishedAt: item.snippet.publishedAt,
        url: `https://www.youtube.com/watch?v=${item.id.videoId}`,
        embedUrl: `https://www.youtube.com/embed/${item.id.videoId}`,
        channelTitle: item.snippet.channelTitle
      }));
      
  } catch (error) {
    console.error('❌ Error en getYouTubeVideosStatic:', error);
    return [];
  }
}