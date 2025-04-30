
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ITWebTeam = () => {
  return (
    <Card className="bg-dk-blue border-4 border-dk-yellow overflow-hidden relative">
      <CardHeader className="border-b-4 border-dk-yellow">
        <CardTitle className="text-dk-yellow">EQUIPO IT & WEB</CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-press-start mb-4 text-white">STACK TECNOLÓGICO</h3>
            <div className="space-y-4 font-vt323 text-xl">
              <div className="bg-black/60 p-4 border-l-4 border-dk-green">
                <h4 className="text-dk-green mb-2">Frontend</h4>
                <p>HTML5, CSS3, TailwindCSS, React</p>
              </div>
              <div className="bg-black/60 p-4 border-l-4 border-dk-yellow">
                <h4 className="text-dk-yellow mb-2">Backend</h4>
                <p>Raspberry Pi 4, RetroPie, EmulationStation</p>
              </div>
              <div className="bg-black/60 p-4 border-l-4 border-dk-red">
                <h4 className="text-dk-red mb-2">Hardware</h4>
                <p>Arduino, Joysticks Sanwa, Botones LED</p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-press-start mb-4 text-white">CÓDIGO</h3>
            <div className="h-64 overflow-y-auto bg-black/80 p-4 font-vt323 text-green-400 text-lg border-2 border-dk-green">
              <pre>{`
// Configuración de botones arcade
const setupButtons = () => {
  // Configuración de pines GPIO
  const PIN_BTN_START = 5;
  const PIN_BTN_SELECT = 6;
  const PIN_BTN_A = 12;
  const PIN_BTN_B = 13;
  
  // Inicialización
  gpio.setup(PIN_BTN_START, gpio.DIR_IN);
  gpio.setup(PIN_BTN_SELECT, gpio.DIR_IN);
  gpio.setup(PIN_BTN_A, gpio.DIR_IN);
  gpio.setup(PIN_BTN_B, gpio.DIR_IN);
  
  // Eventos de botones
  gpio.on('change', (channel, value) => {
    switch(channel) {
      case PIN_BTN_START:
        console.log('START pressed');
        game.start();
        break;
      case PIN_BTN_A:
        console.log('A pressed');
        player.jump();
        break;
      // Y muchos más...
    }
  });
};

// ¡Mario salva a Pauline!
`}</pre>
            </div>
            <div className="mt-4 flex justify-center">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="arcade-btn">
                VER CÓDIGO FUENTE
              </a>
            </div>
          </div>
        </div>
      </CardContent>
      {/* Binary code background effect */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        {Array(20).fill(0).map((_, i) => (
          <div key={i} className="text-dk-green text-xs font-mono whitespace-nowrap" style={{
            position: 'absolute',
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `scroll ${5 + Math.random() * 10}s linear infinite`
          }}>
            {Array(30).fill(0).map(() => Math.round(Math.random())).join('')}
          </div>
        ))}
      </div>
    </Card>
  );
};

export default ITWebTeam;
