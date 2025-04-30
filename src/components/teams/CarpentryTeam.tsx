
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const CarpentryTeam = () => {
  return (
    <Card className="bg-[#5e4032] border-4 border-dk-yellow">
      <CardHeader className="border-b-4 border-dk-yellow">
        <CardTitle className="text-dk-yellow">EQUIPO DE CARPINTERÍA</CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-press-start mb-4 text-white">MATERIALES RECICLADOS</h3>
            <ul className="space-y-2 font-vt323 text-xl">
              <li className="flex items-center">
                <div className="w-3 h-3 bg-dk-yellow mr-2"></div>
                <span>Palets de madera recuperados</span>
              </li>
              <li className="flex items-center">
                <div className="w-3 h-3 bg-dk-yellow mr-2"></div>
                <span>Tornillos y tuercas reutilizados</span>
              </li>
              <li className="flex items-center">
                <div className="w-3 h-3 bg-dk-yellow mr-2"></div>
                <span>Planchas de madera contrachapada</span>
              </li>
              <li className="flex items-center">
                <div className="w-3 h-3 bg-dk-yellow mr-2"></div>
                <span>Metacrilato reciclado para pantalla</span>
              </li>
              <li className="flex items-center">
                <div className="w-3 h-3 bg-dk-yellow mr-2"></div>
                <span>Bisagras y cierres metálicos</span>
              </li>
            </ul>
          </div>
          
          <div className="relative">
            <h3 className="text-xl font-press-start mb-4 text-white">ESTRUCTURA DE LA MÁQUINA</h3>
            <div className="aspect-square bg-dk-blue/60 border-2 border-dk-yellow p-4 flex items-center justify-center">
              <svg width="100%" height="100%" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
                {/* Simple arcade machine SVG */}
                <rect x="100" y="50" width="200" height="150" fill="#333" stroke="#FFFF00" strokeWidth="4" />
                <rect x="120" y="70" width="160" height="110" fill="#000" stroke="#FFFF00" strokeWidth="2" />
                <rect x="130" y="220" width="140" height="150" fill="#333" stroke="#FFFF00" strokeWidth="4" />
                <rect x="100" y="370" width="200" height="20" fill="#333" stroke="#FFFF00" strokeWidth="4" />
                <circle cx="160" cy="280" r="15" fill="#FF0000" stroke="#FFFF00" strokeWidth="2" />
                <circle cx="240" cy="280" r="15" fill="#FF0000" stroke="#FFFF00" strokeWidth="2" />
                <rect x="180" cy="315" width="40" height="10" fill="#00FF00" stroke="#FFFF00" strokeWidth="2" />
              </svg>
              <div className="absolute inset-0 scanlines"></div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CarpentryTeam;
