import React from "react";
const VideoPlayer = ({ posterText = "Cargando Vídeo", videoTitle = "Vídeo sobre Pastelería Moderna" }) => {
    // Definición de los URLs de vídeo de demostración (dominios públicos)
    const webmSrc = "/videos/8626673-uhd_3840_2160_25fps.webm";
    const mp4Src = "/videos/videoplayback.mp4";


    return (
        <div className="w-full">
            <h4 className="text-xl font-semibold mb-3 text-gray-800">{videoTitle}</h4>

            <div className="relative w-full shadow-2xl rounded-xl overflow-hidden" style={{ paddingBottom: '56.25%', height: 0 }}>
                <video
                    className="absolute top-0 left-0 w-full h-full rounded-xl border border-gray-300 bg-black"
                    controls
                    preload="metadata" 
                    loading="lazy"   
                    muted={true} 
                    playsInline={true}
                >
                    {/* 1. Formato WebM (Preferido por eficiencia) */}
                    <source 
                        src={webmSrc} 
                        type="video/webm" 
                    />
                    

                    {/* 2. Formato MP4 (Gran compatibilidad, esencial para Safari) */}
                    <source 
                        src={mp4Src} 
                        type="video/mp4" 
                    />

                    {/* Mensaje de Fallback */}
                    <p className="p-4 text-white text-center">
                        Tu navegador no soporta la reproducción de vídeo.
                    </p>
                </video>
            </div>
        </div>
    );
};
export default VideoPlayer;
