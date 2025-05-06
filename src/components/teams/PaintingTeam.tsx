
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const PaintingTeam = () => {
  return (
    <Card className="bg-gradient-to-r from-dk-red to-dk-blue border-4 border-dk-yellow pixel-border">
      <CardHeader className="border-b-4 border-dk-yellow pb-2">
        <CardTitle className="text-dk-yellow text-lg">EQUIPO DE PINTURA Y DISEÑO</CardTitle>
      </CardHeader>
      <CardContent className="pt-3">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h3 className="text-base font-press-start mb-2 text-white">PALETA DE COLORES</h3>
            <div className="grid grid-cols-3 gap-2">
              <div className="aspect-square bg-dk-red border-2 border-black relative">
                <span className="absolute bottom-0 right-0 text-white font-vt323 text-xs bg-black/50 px-1">#FF0000</span>
              </div>
              <div className="aspect-square bg-dk-yellow border-2 border-black relative">
                <span className="absolute bottom-0 right-0 text-dk-black font-vt323 text-xs bg-white/50 px-1">#FFFF00</span>
              </div>
              <div className="aspect-square bg-dk-blue border-2 border-black relative">
                <span className="absolute bottom-0 right-0 text-white font-vt323 text-xs bg-black/50 px-1">#1E1E3B</span>
              </div>
              <div className="aspect-square bg-dk-green border-2 border-black relative">
                <span className="absolute bottom-0 right-0 text-dk-black font-vt323 text-xs bg-white/50 px-1">#00FF00</span>
              </div>
              <div className="aspect-square bg-dk-gray border-2 border-black relative">
                <span className="absolute bottom-0 right-0 text-white font-vt323 text-xs bg-black/50 px-1">#808080</span>
              </div>
              <div className="aspect-square bg-dk-black border-2 border-white relative">
                <span className="absolute bottom-0 right-0 text-white font-vt323 text-xs bg-white/20 px-1">#000000</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-base font-press-start mb-2 text-white">DISEÑO</h3>
            <div className="border-4 border-dk-yellow p-2 bg-black pixel-border">
              <div className="aspect-video bg-gradient-to-br from-dk-blue to-black mb-2 p-1 flex items-center justify-center border-2 border-dk-yellow">
                <div className="text-center font-press-start text-dk-yellow text-xs">
                  BOCETO INICIAL
                </div>
              </div>
              <div className="aspect-video bg-gradient-to-br from-dk-blue to-black p-1 flex items-center justify-center border-2 border-dk-yellow">
                <div className="text-center font-press-start text-dk-green text-xs">
                  RESULTADO FINAL
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PaintingTeam;
