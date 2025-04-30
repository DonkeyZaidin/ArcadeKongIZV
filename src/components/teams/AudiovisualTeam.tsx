
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const AudiovisualTeam = () => {
  return (
    <Card className="bg-black border-4 border-dk-yellow overflow-hidden relative">
      <CardHeader className="border-b-4 border-dk-yellow relative z-10">
        <CardTitle className="text-dk-yellow">EQUIPO DE AUDIOVISUALES</CardTitle>
      </CardHeader>
      <CardContent className="pt-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-press-start mb-4 text-white">HERRAMIENTAS</h3>
            <ul className="space-y-4 font-vt323 text-xl">
              <li className="flex items-start">
                <div className="w-3 h-3 bg-dk-yellow mr-2 mt-2"></div>
                <div>
                  <span className="text-dk-green">GoPro Hero 9</span>
                  <p className="text-white/80">Grabación del proceso de montaje</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-3 h-3 bg-dk-yellow mr-2 mt-2"></div>
                <div>
                  <span className="text-dk-green">Canon EOS 80D</span>
                  <p className="text-white/80">Fotografías de alta calidad</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-3 h-3 bg-dk-yellow mr-2 mt-2"></div>
                <div>
                  <span className="text-dk-green">Adobe Premiere Pro</span>
                  <p className="text-white/80">Edición de vídeo</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-3 h-3 bg-dk-yellow mr-2 mt-2"></div>
                <div>
                  <span className="text-dk-green">Audacity</span>
                  <p className="text-white/80">Edición de sonido y efectos</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="flex items-center justify-center">
            <div className="crt-frame w-full max-w-md aspect-video bg-black flex items-center justify-center border-4 border-dk-green">
              <Button className="arcade-btn" onClick={() => document.getElementById('video')?.scrollIntoView({ behavior: 'smooth' })}>
                VER MAKING-OF
              </Button>
              {/* TV static effect */}
              <div className="absolute inset-0 opacity-20" style={{
                background: 'repeating-radial-gradient(#fff, #000 1px)',
                backgroundSize: '3px 3px',
                animation: 'noise 0.2s infinite'
              }}></div>
            </div>
          </div>
        </div>
      </CardContent>
      {/* Static TV background effect */}
      <div className="absolute inset-0 opacity-10" style={{
        background: 'repeating-radial-gradient(#fff, #000 1px)',
        backgroundSize: '3px 3px',
        animation: 'noise 0.2s infinite'
      }}></div>
    </Card>
  );
};

export default AudiovisualTeam;
