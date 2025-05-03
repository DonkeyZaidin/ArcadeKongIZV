
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const PaintingTeam = () => {
  return (
    <Card className="bg-gradient-to-r from-dk-red/80 to-dk-blue/80 border-2 border-dk-yellow">
      <CardHeader className="border-b-2 border-dk-yellow pb-3">
        <CardTitle className="text-dk-yellow text-xl">EQUIPO DE PINTURA Y DISEÑO</CardTitle>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-press-start mb-3 text-white">PALETA DE COLORES</h3>
            <div className="grid grid-cols-3 gap-2">
              <div className="aspect-square bg-dk-red relative">
                <span className="absolute bottom-1 right-1 text-white font-vt323 text-xs">#FF0000</span>
              </div>
              <div className="aspect-square bg-dk-yellow relative">
                <span className="absolute bottom-1 right-1 text-dk-black font-vt323 text-xs">#FFFF00</span>
              </div>
              <div className="aspect-square bg-dk-blue relative">
                <span className="absolute bottom-1 right-1 text-white font-vt323 text-xs">#1E1E3B</span>
              </div>
              <div className="aspect-square bg-dk-green relative">
                <span className="absolute bottom-1 right-1 text-dk-black font-vt323 text-xs">#00FF00</span>
              </div>
              <div className="aspect-square bg-dk-gray relative">
                <span className="absolute bottom-1 right-1 text-white font-vt323 text-xs">#808080</span>
              </div>
              <div className="aspect-square bg-dk-black relative">
                <span className="absolute bottom-1 right-1 text-white font-vt323 text-xs">#000000</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-press-start mb-3 text-white">DISEÑO</h3>
            <div className="border-2 border-dk-yellow p-2 bg-black/60">
              <div className="aspect-video bg-gradient-to-br from-dk-blue to-black mb-2 p-1 flex items-center justify-center">
                <div className="text-center font-press-start text-dk-yellow text-sm">
                  BOCETO INICIAL
                </div>
              </div>
              <div className="aspect-video bg-gradient-to-br from-dk-blue to-black p-1 flex items-center justify-center">
                <div className="text-center font-press-start text-dk-green text-sm">
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
