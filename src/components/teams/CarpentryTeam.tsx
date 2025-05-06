
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const CarpentryTeam = () => {
  return (
    <Card className="bg-[#5e4032] border-4 border-dk-yellow pixel-border">
      <CardHeader className="border-b-4 border-dk-yellow pb-2">
        <CardTitle className="text-dk-yellow text-lg">EQUIPO DE CARPINTERÍA</CardTitle>
      </CardHeader>
      <CardContent className="pt-3">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h3 className="text-base font-press-start mb-2 text-white">MATERIALES</h3>
            <ul className="space-y-1 font-vt323 text-lg">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-dk-yellow mr-2"></div>
                <span>Palets de madera recuperados</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-dk-yellow mr-2"></div>
                <span>Tornillos y tuercas reutilizados</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-dk-yellow mr-2"></div>
                <span>Planchas de madera contrachapada</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-dk-yellow mr-2"></div>
                <span>Metacrilato reciclado</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-base font-press-start mb-2 text-white">ESTRUCTURA</h3>
            <div className="aspect-square bg-dk-blue/60 border-4 border-dk-yellow p-2 flex items-center justify-center pixel-border">
              <svg width="100%" height="100%" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <rect x="50" y="25" width="100" height="75" fill="#333" stroke="#FFFF00" strokeWidth="4" />
                <rect x="60" y="35" width="80" height="55" fill="#000" stroke="#FFFF00" strokeWidth="2" />
                <rect x="65" y="110" width="70" height="75" fill="#333" stroke="#FFFF00" strokeWidth="4" />
                <rect x="50" y="185" width="100" height="10" fill="#333" stroke="#FFFF00" strokeWidth="4" />
                <circle cx="80" cy="140" r="8" fill="#FF0000" stroke="#FFFF00" strokeWidth="2" />
                <circle cx="120" cy="140" r="8" fill="#FF0000" stroke="#FFFF00" strokeWidth="2" />
                <rect x="90" cy="157" width="20" height="5" fill="#00FF00" stroke="#FFFF00" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CarpentryTeam;
