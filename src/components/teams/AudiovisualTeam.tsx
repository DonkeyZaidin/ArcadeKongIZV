
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const AudiovisualTeam = () => {
  return (
    <Card className="bg-black border-4 border-dk-yellow overflow-hidden relative pixel-border">
      <CardHeader className="border-b-4 border-dk-yellow pb-2">
        <CardTitle className="text-dk-yellow text-lg">EQUIPO DE AUDIOVISUALES</CardTitle>
      </CardHeader>
      <CardContent className="pt-3 relative z-10">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h3 className="text-base font-press-start mb-2 text-white">HERRAMIENTAS</h3>
            <ul className="space-y-2 font-vt323 text-lg">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-dk-yellow mr-2 mt-2"></div>
                <div>
                  <span className="text-dk-green">GoPro Hero 9</span>
                  <p className="text-white/80 text-sm">Grabación del montaje</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-dk-yellow mr-2 mt-2"></div>
                <div>
                  <span className="text-dk-green">Canon EOS 80D</span>
                  <p className="text-white/80 text-sm">Fotografías</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-dk-yellow mr-2 mt-2"></div>
                <div>
                  <span className="text-dk-green">Adobe Premiere</span>
                  <p className="text-white/80 text-sm">Edición de vídeo</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="flex items-center justify-center">
            <div className="w-full max-w-md aspect-video bg-black flex items-center justify-center border-4 border-dk-green pixel-border">
              <Button className="arcade-btn text-xs" onClick={() => document.getElementById('video')?.scrollIntoView({ behavior: 'smooth' })}>
                VER MAKING-OF
              </Button>
              <div className="absolute inset-0 opacity-20" style={{
                background: 'repeating-radial-gradient(#fff, #000 1px)',
                backgroundSize: '3px 3px'
              }}></div>
            </div>
          </div>
        </div>
      </CardContent>
      <div className="absolute inset-0 opacity-10" style={{
        background: 'repeating-radial-gradient(#fff, #000 1px)',
        backgroundSize: '3px 3px'
      }}></div>
    </Card>
  );
};

export default AudiovisualTeam;
