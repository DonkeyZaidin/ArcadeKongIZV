
import React from 'react';

const galleryImages = [
  { id: 1, title: 'Ensamblaje del mueble', category: 'carpintería' },
  { id: 2, title: 'Corte de piezas', category: 'carpintería' },
  { id: 3, title: 'Primeras capas de pintura', category: 'pintura' },
  { id: 4, title: 'Detallado artístico', category: 'pintura' },
  { id: 5, title: 'Colocación de controles', category: 'montaje' },
  { id: 6, title: 'Instalación de hardware', category: 'it' },
  { id: 7, title: 'Testeo de juegos', category: 'it' },
  { id: 8, title: 'Presentación en feria', category: 'eventos' },
  { id: 9, title: 'Diseño de vinilos', category: 'pintura' },
  { id: 10, title: 'Conexiones internas', category: 'montaje' },
  { id: 11, title: 'Programación de la interfaz', category: 'it' },
  { id: 12, title: 'Máquina terminada', category: 'eventos' },
];

const Gallery = () => {
  return (
    <section className="py-20 bg-dk-black relative overflow-hidden" id="galeria">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-press-start text-dk-yellow mb-10 text-center">
          PANTALLA DE BONUS
        </h2>
        
        {/* Decorative platforms */}
        <div className="absolute left-0 right-0 -top-4 platform"></div>
        <div className="absolute left-0 w-1/3 top-1/4 platform"></div>
        <div className="absolute right-0 w-1/3 top-2/4 platform"></div>
        <div className="absolute left-0 right-0 -bottom-4 platform"></div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 relative z-10">
          {galleryImages.map((image) => (
            <div key={image.id} className="group relative aspect-square">
              <div className="absolute inset-0 bg-gradient-to-br from-dk-blue to-dk-black border-2 border-dk-yellow overflow-hidden transition-all duration-300 transform group-hover:scale-105 group-hover:border-dk-red">
                {/* This would normally be an actual image */}
                <div className="w-full h-full flex flex-col items-center justify-center p-2">
                  <div className={`w-16 h-16 mb-2 ${
                    image.category === 'carpintería' ? 'bg-[#5e4032]' : 
                    image.category === 'pintura' ? 'bg-dk-red' : 
                    image.category === 'montaje' ? 'bg-dk-gray' : 
                    image.category === 'it' ? 'bg-dk-green' : 'bg-dk-yellow'
                  } rounded-full`}></div>
                  <p className="text-center font-vt323 text-dk-yellow text-sm md:text-base">
                    {image.title}
                  </p>
                  <p className="text-center font-vt323 text-white/60 text-xs md:text-sm">
                    {image.category}
                  </p>
                </div>
              </div>
              {/* Heart icon that appears on hover */}
              <div className="absolute -top-3 -right-3 w-8 h-8 bg-dk-red opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center transform rotate-12">
                <span className="text-white font-bold">♥</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Barrels animation */}
      <div className="overflow-hidden absolute w-full h-12 bottom-0 left-0">
        <div className="animate-scroll whitespace-nowrap">
          {Array(20).fill(0).map((_, i) => (
            <div key={i} className="inline-block mx-4 w-8 h-8 bg-dk-yellow rounded-full border-2 border-dk-red"></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
