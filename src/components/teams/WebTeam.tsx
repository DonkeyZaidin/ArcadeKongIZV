
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const WebTeam = () => {
  return (
    <Card className="bg-dk-red border-4 border-dk-yellow pixel-border">
      <CardHeader className="border-b-4 border-dk-yellow pb-2">
        <CardTitle className="text-dk-yellow text-lg">EQUIPO DE PÁGINA WEB</CardTitle>
      </CardHeader>
      <CardContent className="pt-3">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h3 className="text-base font-press-start mb-2 text-white">TECNOLOGÍAS</h3>
            <div className="space-y-2 font-vt323 text-lg">
              <div className="bg-black/60 p-2 border-l-4 border-dk-yellow">
                <h4 className="text-dk-yellow">Diseño</h4>
                <p className="text-white/80 text-sm">HTML5, CSS3, React</p>
              </div>
              <div className="bg-black/60 p-2 border-l-4 border-dk-green">
                <h4 className="text-dk-green">Animaciones</h4>
                <p className="text-white/80 text-sm">CSS Animations</p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-base font-press-start mb-2 text-white">TAREAS</h3>
            <ul className="space-y-2 font-vt323 text-lg">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-dk-yellow mr-2 mt-2"></div>
                <div>
                  <span className="text-dk-green">Maquetación</span>
                  <p className="text-white/80 text-sm">Diseño responsive</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-dk-yellow mr-2 mt-2"></div>
                <div>
                  <span className="text-dk-green">Estilo Visual</span>
                  <p className="text-white/80 text-sm">Paleta de colores retro</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Elementos decorativos de videojuego */}
        <div className="mt-3 flex justify-center">
          <div className="flex space-x-4">
            {[1, 2, 3].map((i) => (
              <div 
                key={i} 
                className="w-4 h-4 bg-dk-yellow border-2 border-dk-black"
              ></div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default WebTeam;
