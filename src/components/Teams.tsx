
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Teams = () => {
  return (
    <section className="py-20 container mx-auto px-4" id="equipos">
      <h2 className="text-3xl md:text-4xl font-press-start text-dk-yellow mb-10 text-center">
        LOS CONSTRUCTORES
      </h2>
      
      <Tabs defaultValue="carpinteria" className="w-full">
        <TabsList className="w-full flex flex-wrap mb-8 bg-transparent border-b-2 border-dk-yellow">
          <TabsTrigger value="carpinteria" id="carpinteria" className="flex-1 text-lg font-press-start text-dk-gray data-[state=active]:text-dk-yellow data-[state=active]:shadow-[inset_0_-2px_0_0_#FFFF00]">
            CARPINTERÍA
          </TabsTrigger>
          <TabsTrigger value="pintura" id="pintura" className="flex-1 text-lg font-press-start text-dk-gray data-[state=active]:text-dk-yellow data-[state=active]:shadow-[inset_0_-2px_0_0_#FFFF00]">
            PINTURA
          </TabsTrigger>
          <TabsTrigger value="audiovisuales" id="audiovisuales" className="flex-1 text-lg font-press-start text-dk-gray data-[state=active]:text-dk-yellow data-[state=active]:shadow-[inset_0_-2px_0_0_#FFFF00]">
            AUDIOVISUALES
          </TabsTrigger>
          <TabsTrigger value="it" id="it" className="flex-1 text-lg font-press-start text-dk-gray data-[state=active]:text-dk-yellow data-[state=active]:shadow-[inset_0_-2px_0_0_#FFFF00]">
            IT & WEB
          </TabsTrigger>
        </TabsList>
        
        <div className="relative mt-10">
          {/* Carpintería Tab */}
          <TabsContent value="carpinteria" className="relative">
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
          </TabsContent>
          
          {/* Pintura Tab */}
          <TabsContent value="pintura">
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
          </TabsContent>
          
          {/* Audiovisuales Tab */}
          <TabsContent value="audiovisuales">
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
          </TabsContent>
          
          {/* IT & Web Tab */}
          <TabsContent value="it">
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
          </TabsContent>
        </div>
      </Tabs>
    </section>
  );
};

export default Teams;
