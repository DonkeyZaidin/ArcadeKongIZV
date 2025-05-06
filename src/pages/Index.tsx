
import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Teams from '@/components/Teams';
import Gallery from '@/components/Gallery';
import Video from '@/components/Video';
import Footer from '@/components/Footer';

const Index = () => {
  const [barrels, setBarrels] = useState([
    { id: 1, left: '20%', bottom: '20%', rotation: 0 },
    { id: 2, left: '40%', bottom: '35%', rotation: 0 },
    { id: 3, left: '70%', bottom: '25%', rotation: 0 }
  ]);
  
  const [jumpman, setJumpman] = useState({
    left: '10%',
    bottom: '5%',
    isJumping: false
  });
  
  useEffect(() => {
    const barrelInterval = setInterval(() => {
      setBarrels(prevBarrels => 
        prevBarrels.map(barrel => ({
          ...barrel,
          rotation: barrel.rotation + 15,
          left: `${(parseFloat(barrel.left) + 2) % 100}%`,
          bottom: `${Math.max(5, parseFloat(barrel.bottom) - 1)}%`
        }))
      );
    }, 150);
    
    return () => clearInterval(barrelInterval);
  }, []);
  
  const handleJump = () => {
    if (!jumpman.isJumping) {
      setJumpman({...jumpman, isJumping: true});
      setTimeout(() => {
        setJumpman(prev => ({...prev, isJumping: false}));
      }, 500);
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col scanlines bg-dk-blue">
      <Header scrollToSection={scrollToSection} />
      
      <section className="bg-dk-blue min-h-[calc(100vh-220px)] flex items-center justify-center relative py-8">
        <div className="container mx-auto px-4 z-10">
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="font-press-start text-dk-yellow text-xl md:text-2xl lg:text-3xl mb-6 animate-pulse">
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

        {/* Plataformas estilo Donkey Kong */}
        <div className="absolute left-0 w-full bottom-0 h-4 bg-dk-yellow border-t-2 border-dk-black"></div>
        <div className="absolute left-10 w-1/3 bottom-24 h-4 bg-dk-yellow border-t-2 border-dk-black"></div>
        <div className="absolute right-10 w-1/3 bottom-48 h-4 bg-dk-yellow border-t-2 border-dk-black"></div>
        
        {/* Ladders */}
        <div className="absolute left-1/3 bottom-0 w-6 h-24 ladder"></div>
        <div className="absolute right-1/3 bottom-24 w-6 h-24 ladder"></div>
        
        {/* Barrels */}
        {barrels.map(barrel => (
          <div 
            key={barrel.id}
            className="absolute w-6 h-6 dk-barrel"
            style={{
              left: barrel.left,
              bottom: barrel.bottom,
              transform: `rotate(${barrel.rotation}deg)`,
            }}
          ></div>
        ))}
        
        {/* Jumpman (Mario) */}
        <div 
          className={`absolute w-8 h-8 bg-dk-red ${jumpman.isJumping ? 'animate-jump' : ''}`}
          style={{
            left: jumpman.left,
            bottom: jumpman.bottom
          }}
          onClick={handleJump}
        >
          <div className="w-8 h-4 bg-dk-blue absolute -top-4"></div> {/* Cap */}
          <div className="w-6 h-2 bg-dk-red absolute top-0 left-1"></div> {/* Face */}
          <div className="w-4 h-2 bg-dk-yellow absolute bottom-0 left-2"></div> {/* Boots */}
        </div>
      </section>
      
      <Teams />
      <Gallery />
      <Video />
      <Footer />
    </div>
  );
};

export default Index;
