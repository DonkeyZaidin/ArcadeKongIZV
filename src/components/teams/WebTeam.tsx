
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const WebTeam = () => {
  return (
    <Card className="bg-dk-red border-4 border-dk-yellow overflow-hidden relative">
      <CardHeader className="border-b-4 border-dk-yellow">
        <CardTitle className="text-dk-yellow">EQUIPO DE PÁGINA WEB</CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-press-start mb-4 text-white">TECNOLOGÍAS FRONTEND</h3>
            <div className="space-y-4 font-vt323 text-xl">
              <div className="bg-black/60 p-4 border-l-4 border-dk-yellow">
                <h4 className="text-dk-yellow mb-2">Diseño</h4>
                <p>HTML5, CSS3, TailwindCSS, React</p>
              </div>
              <div className="bg-black/60 p-4 border-l-4 border-dk-green">
                <h4 className="text-dk-green mb-2">Animaciones</h4>
                <p>Framer Motion, GSAP, CSS Animations</p>
              </div>
              <div className="bg-black/60 p-4 border-l-4 border-dk-yellow">
                <h4 className="text-dk-yellow mb-2">UI/UX</h4>
                <p>Figma, Adobe XD, Photoshop</p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-press-start mb-4 text-white">RESPONSABILIDADES</h3>
            <ul className="space-y-4 font-vt323 text-xl">
              <li className="flex items-start">
                <div className="w-3 h-3 bg-dk-yellow mr-2 mt-2"></div>
                <div>
                  <span className="text-dk-green">Maquetación</span>
                  <p className="text-white/80">Estructura y diseño responsive</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-3 h-3 bg-dk-yellow mr-2 mt-2"></div>
                <div>
                  <span className="text-dk-green">Estilo Visual</span>
                  <p className="text-white/80">Paleta de colores y efectos retro</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-3 h-3 bg-dk-yellow mr-2 mt-2"></div>
                <div>
                  <span className="text-dk-green">Documentación</span>
                  <p className="text-white/80">README y guía de estilos</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-3 h-3 bg-dk-yellow mr-2 mt-2"></div>
                <div>
                  <span className="text-dk-green">SEO</span>
                  <p className="text-white/80">Optimización para buscadores</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </CardContent>
      
      {/* Plataformas estilo DK como decoración */}
      <div className="absolute top-1/4 left-0 w-1/4 h-3 bg-dk-yellow z-0"></div>
      <div className="absolute top-2/4 right-0 w-1/4 h-3 bg-dk-yellow z-0"></div>
      <div className="absolute bottom-1/4 left-1/3 w-1/3 h-3 bg-dk-yellow z-0"></div>
    </Card>
  );
};

export default WebTeam;
