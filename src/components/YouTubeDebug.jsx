// ARCHIVO: components/YouTubeDebug.jsx
// Componente para debuggear la API de YouTube

"use client";

import React, { useState, useEffect } from 'react';

export default function YouTubeDebug() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [apiResponse, setApiResponse] = useState(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        setLoading(true);
        console.log('🔍 Fetching YouTube videos...');
        
        const response = await fetch('/api/youtube');
        const data = await response.json();
        
        console.log('📊 API Response:', data);
        setApiResponse(data);
        
        if (data.success) {
          setVideos(data.videos);
          console.log(`✅ Videos cargados: ${data.videos.length}`);
        } else {
          setError(data.error || 'Error desconocido');
          console.error('❌ Error en API:', data.error);
        }
      } catch (err) {
        setError(err.message);
        console.error('❌ Error fetch:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  if (loading) {
    return (
      <div className="p-6 bg-blue-50 rounded-lg">
        <h2 className="text-xl font-bold mb-4">🔍 YouTube Debug - Cargando...</h2>
        <div className="animate-pulse">
          <div className="h-4 bg-blue-200 rounded w-1/2 mb-2"></div>
          <div className="h-4 bg-blue-200 rounded w-3/4"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">🔍 YouTube API Debug</h2>
      
      {/* Estado de la API */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">📊 Estado de la API:</h3>
        <div className={`p-3 rounded ${apiResponse?.success ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
          {apiResponse?.success ? '✅ API funcionando' : '❌ API con errores'}
        </div>
      </div>

      {/* Respuesta cruda de la API */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">📋 Respuesta de la API:</h3>
        <pre className="bg-gray-100 p-3 rounded text-sm overflow-auto max-h-60">
          {JSON.stringify(apiResponse, null, 2)}
        </pre>
      </div>

      {/* Error */}
      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded">
          <h3 className="text-lg font-semibold text-red-800 mb-2">❌ Error:</h3>
          <p className="text-red-700">{error}</p>
        </div>
      )}

      {/* Videos */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">📺 Videos encontrados: {videos.length}</h3>
        
        {videos.length === 0 ? (
          <div className="p-4 bg-yellow-50 border border-yellow-200 rounded">
            <p className="text-yellow-800">⚠️ No se encontraron videos</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {videos.map((video, index) => (
              <div key={video.id} className="border rounded-lg p-4 bg-gray-50">
                <div className="mb-2">
                  <span className="text-sm font-medium text-gray-600">#{index + 1}</span>
                </div>
                
                {video.thumbnail && (
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-32 object-cover rounded mb-2"
                  />
                )}
                
                <h4 className="font-medium text-sm mb-1 line-clamp-2">
                  {video.title}
                </h4>
                
                <p className="text-xs text-gray-600 mb-2">
                  📅 {new Date(video.publishedAt).toLocaleDateString()}
                </p>
                
                <div className="flex space-x-2">
                  <a 
                    href={video.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xs bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                  >
                    Ver en YouTube
                  </a>
                  <button 
                    onClick={() => console.log('Video data:', video)}
                    className="text-xs bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
                  >
                    Log Data
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Información del canal */}
      {apiResponse?.channelInfo && (
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">📺 Información del canal:</h3>
          <div className="bg-gray-50 p-3 rounded">
            <p><strong>Nombre:</strong> {apiResponse.channelInfo.title}</p>
            <p><strong>ID:</strong> {apiResponse.channelInfo.id}</p>
          </div>
        </div>
      )}

      {/* Botón para recargar */}
      <div className="text-center">
        <button 
          onClick={() => window.location.reload()}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          🔄 Recargar Debug
        </button>
      </div>
    </div>
  );
}