
import React from 'react';

const galleryImages = [
  { id: 1, title: 'Ensamblaje', category: 'carpintería' },
  { id: 2, title: 'Corte', category: 'carpintería' },
  { id: 3, title: 'Pintura', category: 'pintura' },
  { id: 4, title: 'Detallado', category: 'pintura' },
  { id: 5, title: 'Controles', category: 'montaje' },
  { id: 6, title: 'Hardware', category: 'it' },
  { id: 7, title: 'Test', category: 'it' },
  { id: 8, title: 'Presentación', category: 'eventos' },
];

const Gallery = () => {
  return (
    <section className="py-12 bg-dk-black relative" id="galeria">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-press-start text-dk-yellow mb-6 text-center">
          PANTALLA DE BONUS
        </h2>
        
        <div className="absolute left-0 right-0 -top-2 platform"></div>
        <div className="absolute left-0 right-0 -bottom-2 platform"></div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 relative z-10">
          {galleryImages.map((image) => (
            <div key={image.id} className="group relative aspect-square">
              <div className="absolute inset-0 bg-gradient-to-br from-dk-blue to-dk-black border border-dk-yellow overflow-hidden transition-all duration-300 transform group-hover:scale-105 group-hover:border-dk-red">
                <div className="w-full h-full flex flex-col items-center justify-center p-2">
                  <div className={`w-12 h-12 mb-2 ${
                    image.category === 'carpintería' ? 'bg-[#5e4032]' : 
                    image.category === 'pintura' ? 'bg-dk-red' : 
                    image.category === 'montaje' ? 'bg-dk-gray' : 
                    image.category === 'it' ? 'bg-dk-green' : 'bg-dk-yellow'
                  } rounded-full`}></div>
                  <p className="text-center font-vt323 text-dk-yellow text-sm">
                    {image.title}
                  </p>
                  <p className="text-center font-vt323 text-white/60 text-xs">
                    {image.category}
                  </p>
                </div>
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-dk-red opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center transform rotate-12">
                <span className="text-white text-xs font-bold">♥</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="overflow-hidden absolute w-full h-6 bottom-0 left-0">
        <div className="animate-scroll whitespace-nowrap">
          {Array(10).fill(0).map((_, i) => (
            <div key={i} className="inline-block mx-3 w-4 h-4 bg-dk-yellow rounded-full border border-dk-red"></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
