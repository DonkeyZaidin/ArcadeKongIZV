
import React from 'react';
import Header from '@/components/Header';
import Teams from '@/components/Teams';
import Gallery from '@/components/Gallery';
import Video from '@/components/Video';
import Footer from '@/components/Footer';

const Index = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col scanlines">
      <Header scrollToSection={scrollToSection} />
      
      <section className="bg-dk-blue min-h-[calc(100vh-220px)] flex items-center justify-center relative py-8">
        <div className="container mx-auto px-4 z-10">
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="font-press-start text-dk-yellow text-2xl md:text-3xl lg:text-4xl mb-6">
              KONG QUEST<br />ARCADE PROJECT
            </h1>
            <p className="font-vt323 text-white text-lg md:text-xl mb-6">
              Proceso de diseño y construcción de una máquina arcade inspirada en Donkey Kong de 1981.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <button 
                onClick={() => scrollToSection('equipos')}
                className="arcade-btn"
              >
                EQUIPOS
              </button>
              <button
                onClick={() => scrollToSection('galeria')}
                className="arcade-btn"
              >
                GALERÍA
              </button>
            </div>
          </div>
        </div>

        <div className="absolute left-0 w-full bottom-0 h-4 platform"></div>
        <div className="absolute left-10 w-1/3 bottom-24 h-4 platform"></div>
        <div className="absolute right-10 w-1/3 bottom-48 h-4 platform"></div>
        
        {[1, 2, 3].map((i) => (
          <div 
            key={i}
            className="absolute w-6 h-6 bg-dk-yellow rounded border border-dk-red"
            style={{
              left: `${20 + i * 15}%`,
              bottom: `${20 + i * 14}%`,
              transform: `rotate(${i * 45}deg)`,
              animation: `barrel-roll ${2 + i * 0.5}s linear infinite`
            }}
          ></div>
        ))}
      </section>
      
      <Teams />
      <Gallery />
      <Video />
      <Footer />
    </div>
  );
};

export default Index;
