
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const WebTeam = () => {
  return (
    <Card className="bg-dk-red/80 border-2 border-dk-yellow">
      <CardHeader className="border-b-2 border-dk-yellow pb-3">
        <CardTitle className="text-dk-yellow text-xl">EQUIPO DE PÁGINA WEB</CardTitle>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-press-start mb-3 text-white">TECNOLOGÍAS</h3>
            <div className="space-y-2 font-vt323 text-lg">
              <div className="bg-black/60 p-2 border-l-2 border-dk-yellow">
                <h4 className="text-dk-yellow">Diseño</h4>
                <p className="text-white/80 text-sm">HTML5, CSS3, React</p>
              </div>
              <div className="bg-black/60 p-2 border-l-2 border-dk-green">
                <h4 className="text-dk-green">Animaciones</h4>
                <p className="text-white/80 text-sm">CSS Animations</p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-press-start mb-3 text-white">TAREAS</h3>
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
      </CardContent>
    </Card>
  );
};

export default WebTeam;
