
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ITWebTeam = () => {
  return (
    <Card className="bg-dk-blue border-4 border-dk-yellow overflow-hidden relative pixel-border">
      <CardHeader className="border-b-4 border-dk-yellow pb-2">
        <CardTitle className="text-dk-yellow text-lg">EQUIPO DE IT</CardTitle>
      </CardHeader>
      <CardContent className="pt-3">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h3 className="text-base font-press-start mb-2 text-white">INFRAESTRUCTURA</h3>
            <div className="space-y-3 font-vt323 text-lg">
              <div className="bg-black/60 p-2 border-l-4 border-dk-green">
                <h4 className="text-dk-green mb-1">Hardware</h4>
                <p className="text-sm">Raspberry Pi 4, Arduino, Componentes electrónicos</p>
              </div>
              <div className="bg-black/60 p-2 border-l-4 border-dk-yellow">
                <h4 className="text-dk-yellow mb-1">Software</h4>
                <p className="text-sm">RetroPie, EmulationStation, Linux</p>
              </div>
              <div className="bg-black/60 p-2 border-l-4 border-dk-red">
                <h4 className="text-dk-red mb-1">Redes</h4>
                <p className="text-sm">WiFi, Bluetooth, Conectividad</p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-base font-press-start mb-2 text-white">CÓDIGO</h3>
            <div className="h-48 overflow-y-auto bg-black/80 p-2 font-vt323 text-green-400 text-sm border-4 border-dk-green pixel-border">
              <pre className="pixelated">{`
// Configuración de botones arcade
const setupButtons = () => {
  // Pines GPIO
  const PIN_BTN_START = 5;
  const PIN_BTN_SELECT = 6;
  const PIN_BTN_A = 12;
  const PIN_BTN_B = 13;
  
  // Inicialización
  gpio.setup(PIN_BTN_START);
  gpio.setup(PIN_BTN_SELECT);
  gpio.setup(PIN_BTN_A);
  gpio.setup(PIN_BTN_B);
  
  // Eventos
  gpio.on('change', (channel) => {
    switch(channel) {
      case PIN_BTN_START:
        console.log('START');
        game.start();
        break;
      case PIN_BTN_A:
        console.log('JUMP');
        player.jump();
        break;
    }
  });
};

// ¡Mario salva a Pauline!
`}</pre>
            </div>
            <div className="mt-3 flex justify-center">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="arcade-btn">
                VER CÓDIGO FUENTE
              </a>
            </div>
          </div>
        </div>
      </CardContent>
      {/* Binary code background effect */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        {Array(10).fill(0).map((_, i) => (
          <div key={i} className="text-dk-green text-xs font-mono whitespace-nowrap" style={{
            position: 'absolute',
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `barrel-roll ${5 + Math.random() * 10}s linear infinite`
          }}>
            {Array(20).fill(0).map(() => Math.round(Math.random())).join('')}
          </div>
        ))}
      </div>
    </Card>
  );
};

export default ITWebTeam;
