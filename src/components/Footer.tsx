
import React from 'react';
import { Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dk-black border-t-4 border-dk-yellow relative overflow-hidden" id="contacto">
      {/* Game Over text */}
      <div className="py-8">
        <h2 className="text-4xl md:text-6xl font-press-start text-dk-red text-center animate-pulse">
          GAME OVER
        </h2>
      </div>
      
      {/* Main footer content */}
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
          {/* Social */}
          <div className="text-center">
            <h3 className="font-press-start text-dk-yellow mb-4">SÍGUENOS</h3>
            <div className="flex justify-center space-x-4">
              <a href="#" className="bg-dk-blue p-3 rounded-full hover:bg-dk-red transition-colors">
                <Twitter className="h-6 w-6 text-dk-yellow" />
              </a>
              <a href="#" className="bg-dk-blue p-3 rounded-full hover:bg-dk-red transition-colors">
                <Instagram className="h-6 w-6 text-dk-yellow" />
              </a>
              <a href="#" className="bg-dk-blue p-3 rounded-full hover:bg-dk-red transition-colors">
                <Youtube className="h-6 w-6 text-dk-yellow" />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Credits with infinite scroll */}
      <div className="bg-black py-3 overflow-hidden">
        <div className="animate-scroll whitespace-nowrap">
          <span className="font-vt323 text-dk-yellow text-lg inline-block mx-4">
            © 2024 | Proyecto ARCADE DK | Música: 8-bit remix de DK Theme
          </span>
          <span className="font-vt323 text-dk-yellow text-lg inline-block mx-4">
            Diseño inspirado en el clásico Donkey Kong (1981)
          </span>
          <span className="font-vt323 text-dk-yellow text-lg inline-block mx-4">
            PRESS START TO PLAY AGAIN
          </span>
        </div>
      </div>
      
      {/* Return to top */}
      <a 
        href="#" 
        className="absolute bottom-20 right-6 bg-dk-red p-2 rounded-full hover:bg-dk-yellow transition-colors"
        title="Volver arriba"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
          <path d="m18 15-6-6-6 6"/>
        </svg>
      </a>
      
      {/* Decorative crack effect */}
      <div className="absolute bottom-0 left-0 w-full h-2 bg-dk-gray">
        <div className="absolute top-0 left-1/4 w-1/2 h-full bg-dk-black"></div>
        <div className="absolute top-0 right-1/5 w-1/4 h-full bg-dk-black"></div>
      </div>
    </footer>
  );
};

export default Footer;
