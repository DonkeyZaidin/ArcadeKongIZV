
import React, { useState } from 'react';
import { Menu, Twitter, Instagram, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';

interface HeaderProps {
  scrollToSection: (id: string) => void;
}

const Header: React.FC<HeaderProps> = ({ scrollToSection }) => {
  const [clickCount, setClickCount] = useState(0);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleLogoClick = () => {
    setClickCount(prevCount => {
      const newCount = prevCount + 1;
      if (newCount === 10) {
        console.log("Mario salva a Pauline");
        alert("¡Has desbloqueado el modo secreto! Código: JUMPMAN1981");
        return 0;
      }
      return newCount;
    });
  };

  return (
    <header className="bg-dk-blue py-3 relative scanlines border-b-4 border-dk-yellow">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div 
            className="flex items-center gap-2 cursor-pointer" 
            onClick={handleLogoClick}
          >
            <div className="w-8 h-8 md:w-10 md:h-10 bg-dk-red rounded-md flex items-center justify-center border border-dk-yellow animate-pulse">
              <span className="font-press-start text-base md:text-lg text-dk-yellow">DK</span>
            </div>
            <h1 className="font-press-start text-dk-yellow text-xs md:text-sm">
              ARCADE PROJECT
            </h1>
          </div>
          
          <Button 
            variant="outline" 
            size="icon" 
            className="md:hidden"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          >
            <Menu className="h-5 w-5" />
          </Button>
          
          <nav className="hidden md:flex items-center gap-3">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="arcade-btn text-xs md:text-sm py-1 px-3">EQUIPOS</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-dk-blue border border-dk-yellow">
                <DropdownMenuItem onClick={() => scrollToSection('carpinteria')} className="text-dk-yellow hover:bg-dk-red text-xs">
                  Carpintería
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => scrollToSection('pintura')} className="text-dk-yellow hover:bg-dk-red text-xs">
                  Pintura
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => scrollToSection('audiovisuales')} className="text-dk-yellow hover:bg-dk-red text-xs">
                  Audiovisuales
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => scrollToSection('web')} className="text-dk-yellow hover:bg-dk-red text-xs">
                  Web
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => scrollToSection('it')} className="text-dk-yellow hover:bg-dk-red text-xs">
                  IT
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button className="arcade-btn text-xs md:text-sm py-1 px-3" onClick={() => scrollToSection('galeria')}>GALERÍA</Button>
            <Button className="arcade-btn text-xs md:text-sm py-1 px-3" onClick={() => scrollToSection('video')}>VIDEO</Button>
            <Button className="arcade-btn text-xs md:text-sm py-1 px-3" onClick={() => scrollToSection('contacto')}>CONTACTO</Button>
          </nav>
          
          <div className="hidden md:flex gap-3">
            <a href="#" className="text-dk-yellow hover:text-dk-red">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-dk-yellow hover:text-dk-red">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-dk-yellow hover:text-dk-red">
              <Youtube className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <nav className={cn(
          "md:hidden bg-dk-blue w-full absolute left-0 z-50 transition-all duration-300 overflow-hidden border-t-2 border-dk-yellow",
          showMobileMenu ? "max-h-[250px] py-2" : "max-h-0"
        )}>
          <div className="flex flex-col gap-1 px-3">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="arcade-btn w-full text-xs py-1">EQUIPOS</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-dk-blue border border-dk-yellow">
                <DropdownMenuItem onClick={() => {
                  scrollToSection('carpinteria');
                  setShowMobileMenu(false);
                }} className="text-dk-yellow hover:bg-dk-red text-xs">
                  Carpintería
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => {
                  scrollToSection('pintura');
                  setShowMobileMenu(false);
                }} className="text-dk-yellow hover:bg-dk-red text-xs">
                  Pintura
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => {
                  scrollToSection('audiovisuales');
                  setShowMobileMenu(false);
                }} className="text-dk-yellow hover:bg-dk-red text-xs">
                  Audiovisuales
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => {
                  scrollToSection('web');
                  setShowMobileMenu(false);
                }} className="text-dk-yellow hover:bg-dk-red text-xs">
                  Web
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => {
                  scrollToSection('it');
                  setShowMobileMenu(false);
                }} className="text-dk-yellow hover:bg-dk-red text-xs">
                  IT
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button className="arcade-btn w-full text-xs py-1" onClick={() => {
              scrollToSection('galeria');
              setShowMobileMenu(false);
            }}>GALERÍA</Button>
            <Button className="arcade-btn w-full text-xs py-1" onClick={() => {
              scrollToSection('video');
              setShowMobileMenu(false);
            }}>VIDEO</Button>
            <Button className="arcade-btn w-full text-xs py-1" onClick={() => {
              scrollToSection('contacto');
              setShowMobileMenu(false);
            }}>CONTACTO</Button>
            
            <div className="flex justify-center gap-4 mt-2">
              <a href="#" className="text-dk-yellow hover:text-dk-red">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="text-dk-yellow hover:text-dk-red">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="text-dk-yellow hover:text-dk-red">
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>
        </nav>
      </div>
      
      <div className="bg-black py-1 mt-2">
        <p className="font-press-start text-dk-yellow text-center text-xs animate-blink">
          INSERT COIN
        </p>
      </div>
    </header>
  );
};

export default Header;
