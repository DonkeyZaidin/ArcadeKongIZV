
import React from 'react';

const Video = () => {
  return (
    <section className="py-20 bg-dk-black relative" id="video">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-press-start text-dk-yellow mb-10 text-center">
          CUTSCENE FINAL
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="crt-frame bg-black p-2 border-4 border-dk-gray">
            <div className="relative aspect-video w-full">
              {/* YouTube iframe would go here in a real implementation */}
              <div className="absolute inset-0 bg-black flex flex-col items-center justify-center p-4">
                <div className="w-20 h-20 bg-dk-red rounded-full flex items-center justify-center mb-6">
                  <div className="w-0 h-0 border-y-8 border-y-transparent border-l-16 border-l-white ml-2"></div>
                </div>
                <p className="text-dk-yellow font-press-start text-center mb-4">
                  VIDEO DEMOSTRATIVO
                </p>
                <p className="text-white/70 font-vt323 text-center text-lg">
                  Este vídeo muestra el proceso completo de construcción de la máquina arcade, desde los primeros bocetos hasta las pruebas finales.
                </p>
              </div>
            </div>
          </div>
          
          {/* Subtitles */}
          <div className="mt-6 bg-black/50 p-4 font-vt323 text-dk-yellow border-l-4 border-dk-red">
            <p className="text-center">
              "La visión era crear una máquina que no solo fuera funcional, sino que también capturara la esencia de los arcades clásicos como Donkey Kong."
            </p>
            <p className="text-center text-white/60 mt-2">
              - Director del Proyecto
            </p>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute left-0 top-0 w-4 h-full brick"></div>
        <div className="absolute right-0 top-0 w-4 h-full brick"></div>
      </div>
    </section>
  );
};

export default Video;
