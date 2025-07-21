// ARCHIVO: app/api/youtube/route.js
// API Route COMPATIBLE con output: 'export'

import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const API_KEY = process.env.YOUTUBE_API_KEY;
    const CHANNEL_ID = process.env.YOUTUBE_CHANNEL_ID;
    const MAX_RESULTS = 20;

    // Verificar que las variables estén configuradas
    if (!API_KEY || !CHANNEL_ID) {
      return NextResponse.json({
        success: false,
        error: 'YouTube API Key o Channel ID no configurados',
        debug: {
          hasApiKey: !!API_KEY,
          hasChannelId: !!CHANNEL_ID,
          apiKey: API_KEY ? `${API_KEY.substring(0, 10)}...` : 'NO_CONFIGURADO',
          channelId: CHANNEL_ID || 'NO_CONFIGURADO'
        }
      }, { status: 500 });
    }

    // Fechas específicas: Mayo y Junio 2025
    const publishedAfter = '2025-05-01T00:00:00Z';
    const publishedBefore = '2025-06-30T23:59:59Z';

    console.log('📅 Buscando videos de mayo-junio 2025');

    // URL para obtener videos de mayo y junio 2025
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&maxResults=50&order=date&type=video&publishedAfter=${publishedAfter}&publishedBefore=${publishedBefore}&key=${API_KEY}`;

    console.log('🎯 Fetching YouTube API:', url);

    const response = await fetch(url);
    const data = await response.json();

    console.log('📊 YouTube API Response:', {
      status: response.status,
      totalResults: data.pageInfo?.totalResults,
      itemsLength: data.items?.length
    });

    if (!response.ok) {
      console.error('❌ YouTube API Error:', data.error);
      return NextResponse.json({
        success: false,
        error: 'Error en YouTube API',
        details: data.error?.message || 'Error desconocido',
        status: response.status,
        debug: { url: url.replace(API_KEY, 'HIDDEN_API_KEY') }
      }, { status: response.status });
    }

    if (!data.items || data.items.length === 0) {
      console.log('⚠️ No se encontraron videos en el rango de fechas');
      
      // Fallback: buscar videos más recientes sin filtro de fecha
      const fallbackUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&maxResults=20&order=date&type=video&key=${API_KEY}`;
      
      console.log('🔄 Intentando búsqueda sin filtro de fecha...');
      
      const fallbackResponse = await fetch(fallbackUrl);
      const fallbackData = await fallbackResponse.json();
      
      if (fallbackResponse.ok && fallbackData.items && fallbackData.items.length > 0) {
        console.log(`✅ Encontrados ${fallbackData.items.length} videos sin filtro de fecha`);
        
        const fallbackVideos = fallbackData.items
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
          
        return NextResponse.json({
          success: true,
          videos: fallbackVideos,
          totalResults: fallbackData.pageInfo.totalResults,
          totalReturned: fallbackVideos.length,
          channelInfo: {
            title: fallbackVideos[0]?.channelTitle || 'ElectroHuila',
            id: CHANNEL_ID
          },
          mensaje: 'Videos obtenidos sin filtro de fecha (mayo-junio 2025 sin resultados)',
          lastUpdated: new Date().toISOString()
        });
      }
      
      return NextResponse.json({
        success: false,
        error: 'No se encontraron videos',
        totalResults: data.pageInfo?.totalResults || 0,
        debug: { 
          channelId: CHANNEL_ID,
          dateRange: `${publishedAfter} - ${publishedBefore}`
        }
      });
    }

    // Procesar videos encontrados en el rango de fechas
    const videos = data.items
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

    console.log(`✅ Procesados ${videos.length} videos del canal`);

    return NextResponse.json({
      success: true,
      videos,
      totalResults: data.pageInfo.totalResults,
      totalReturned: videos.length,
      channelInfo: {
        title: videos[0]?.channelTitle || 'ElectroHuila',
        id: CHANNEL_ID
      },
      lastUpdated: new Date().toISOString()
    });

  } catch (error) {
    console.error('❌ Error en YouTube API:', error);
    return NextResponse.json({
      success: false,
      error: 'Error interno del servidor',
      details: error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    }, { status: 500 });
  }
}