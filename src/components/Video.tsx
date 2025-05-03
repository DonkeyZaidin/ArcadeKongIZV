
import React from 'react';

const Video = () => {
  return (
    <section className="py-12 bg-dk-black relative" id="video">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-press-start text-dk-yellow mb-6 text-center">
          CUTSCENE FINAL
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-black p-1 border-2 border-dk-gray">
            <div className="relative aspect-video w-full">
              <div className="absolute inset-0 bg-black flex flex-col items-center justify-center p-3">
                <div className="w-14 h-14 bg-dk-red rounded-full flex items-center justify-center mb-4">
                  <div className="w-0 h-0 border-y-6 border-y-transparent border-l-12 border-l-white ml-1"></div>
                </div>
                <p className="text-dk-yellow font-press-start text-sm text-center mb-2">
                  VIDEO DEMO
                </p>
                <p className="text-white/70 font-vt323 text-center">
                  Proceso de construcción de la máquina arcade
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-4 bg-black/50 p-3 font-vt323 text-dk-yellow border-l-2 border-dk-red">
            <p className="text-center text-sm">
              "La visión era crear una máquina que capturara la esencia de los arcades clásicos como Donkey Kong."
            </p>
            <p className="text-center text-white/60 text-xs mt-1">
              - Director del Proyecto
            </p>
          </div>
        </div>
        
        <div className="absolute left-0 top-0 w-2 h-full brick"></div>
        <div className="absolute right-0 top-0 w-2 h-full brick"></div>
      </div>
    </section>
  );
};

export default Video;
