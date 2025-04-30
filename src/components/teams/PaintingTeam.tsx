
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const PaintingTeam = () => {
  return (
    <Card className="bg-gradient-to-r from-dk-red to-dk-blue border-4 border-dk-yellow">
      <CardHeader className="border-b-4 border-dk-yellow">
        <CardTitle className="text-dk-yellow">EQUIPO DE PINTURA Y DISEÑO</CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-press-start mb-4 text-white">PALETA DE COLORES</h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="aspect-square bg-dk-red relative">
                <span className="absolute bottom-2 right-2 text-white font-vt323">#FF0000</span>
              </div>
              <div className="aspect-square bg-dk-yellow relative">
                <span className="absolute bottom-2 right-2 text-dk-black font-vt323">#FFFF00</span>
              </div>
              <div className="aspect-square bg-dk-blue relative">
                <span className="absolute bottom-2 right-2 text-white font-vt323">#1E1E3B</span>
              </div>
              <div className="aspect-square bg-dk-green relative">
                <span className="absolute bottom-2 right-2 text-dk-black font-vt323">#00FF00</span>
              </div>
              <div className="aspect-square bg-dk-gray relative">
                <span className="absolute bottom-2 right-2 text-white font-vt323">#808080</span>
              </div>
              <div className="aspect-square bg-dk-black relative">
                <span className="absolute bottom-2 right-2 text-white font-vt323">#000000</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-press-start mb-4 text-white">DISEÑO</h3>
            <div className="border-4 border-dk-yellow p-4 bg-black/60">
              <div className="aspect-video bg-gradient-to-br from-dk-blue to-black mb-4 p-2 flex items-center justify-center">
                <div className="text-center font-press-start text-dk-yellow">
                  BOCETO INICIAL
                </div>
              </div>
              <div className="aspect-video bg-gradient-to-br from-dk-blue to-black p-2 flex items-center justify-center">
                <div className="text-center font-press-start text-dk-green">
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
