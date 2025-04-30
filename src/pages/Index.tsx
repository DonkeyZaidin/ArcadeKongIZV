
import React, { useRef } from 'react';
import Header from '@/components/Header';
import Teams from '@/components/Teams';
import Gallery from '@/components/Gallery';
import Video from '@/components/Video';
import Footer from '@/components/Footer';

const Index = () => {
  // Function to scroll to a section when navigation is clicked
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col scanlines">
      {/* Header with navigation */}
      <Header scrollToSection={scrollToSection} />
      
      {/* Hero section */}
      <section className="bg-dk-blue min-h-[calc(100vh-220px)] flex items-center justify-center relative py-10">
        <div className="container mx-auto px-4 z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-press-start text-dk-yellow text-3xl md:text-4xl lg:text-5xl mb-8">
              KONG QUEST<br />ARCADE PROJECT
            </h1>
            <p className="font-vt323 text-white text-xl md:text-2xl mb-8">
              Documentación completa del proceso de diseño y construcción de una máquina arcade física inspirada en el clásico Donkey Kong de 1981.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <button 
                onClick={() => scrollToSection('equipos')}
                className="arcade-btn"
              >
                VER EQUIPOS
              </button>
              <button
                onClick={() => scrollToSection('galeria')}
                className="arcade-btn"
              >
                EXPLORAR GALERÍA
              </button>
            </div>
          </div>
        </div>

        {/* Decorative platform elements */}
        <div className="absolute left-0 w-full bottom-0 h-6 platform"></div>
        <div className="absolute left-10 w-1/3 bottom-32 h-6 platform"></div>
        <div className="absolute right-10 w-1/3 bottom-64 h-6 platform"></div>
        <div className="absolute left-20 w-1/4 bottom-96 h-6 platform"></div>
        
        {/* Barrels decoration - position absolute */}
        {[1, 2, 3, 4, 5].map((i) => (
          <div 
            key={i}
            className="absolute w-10 h-10 bg-dk-yellow rounded border-2 border-dk-red"
            style={{
              left: `${20 + i * 15}%`,
              bottom: `${20 + i * 14}%`,
              transform: `rotate(${i * 45}deg)`,
              animation: `barrel-roll ${2 + i * 0.5}s linear infinite`
            }}
          ></div>
        ))}
      </section>
      
      {/* Main content sections */}
      <Teams />
      <Gallery />
      <Video />
      <Footer />
    </div>
  );
};

export default Index;
