
import React, { useState, useEffect } from 'react';
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
    <header className="bg-dk-blue py-4 relative scanlines border-b-8 border-dk-yellow">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div 
            className="flex items-center gap-2 cursor-pointer" 
            onClick={handleLogoClick}
          >
            <div className="w-12 h-12 bg-dk-red rounded-lg flex items-center justify-center border-2 border-dk-yellow animate-pulse">
              <span className="font-press-start text-xl text-dk-yellow">DK</span>
            </div>
            <h1 className="font-press-start text-dk-yellow text-sm md:text-lg">
              ARCADE PROJECT
            </h1>
          </div>
          
          {/* Mobile menu button */}
          <Button 
            variant="outline" 
            size="icon" 
            className="md:hidden"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          >
            <Menu className="h-6 w-6" />
          </Button>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="arcade-btn">EQUIPOS</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-dk-blue border border-dk-yellow">
                <DropdownMenuItem onClick={() => scrollToSection('carpinteria')} className="text-dk-yellow hover:bg-dk-red">
                  Carpintería
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => scrollToSection('pintura')} className="text-dk-yellow hover:bg-dk-red">
                  Pintura y Diseño
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => scrollToSection('audiovisuales')} className="text-dk-yellow hover:bg-dk-red">
                  Audiovisuales
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => scrollToSection('it')} className="text-dk-yellow hover:bg-dk-red">
                  IT y Web
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button className="arcade-btn" onClick={() => scrollToSection('galeria')}>GALERÍA</Button>
            <Button className="arcade-btn" onClick={() => scrollToSection('video')}>VIDEO</Button>
            <Button className="arcade-btn" onClick={() => scrollToSection('contacto')}>CONTACTO</Button>
          </nav>
          
          {/* Social Icons */}
          <div className="hidden md:flex gap-4">
            <a href="#" className="text-dk-yellow hover:text-dk-red">
              <Twitter className="h-6 w-6 animate-barrel-roll" />
            </a>
            <a href="#" className="text-dk-yellow hover:text-dk-red">
              <Instagram className="h-6 w-6 animate-barrel-roll" />
            </a>
            <a href="#" className="text-dk-yellow hover:text-dk-red">
              <Youtube className="h-6 w-6 animate-barrel-roll" />
            </a>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        <nav className={cn(
          "md:hidden bg-dk-blue w-full absolute left-0 z-50 transition-all duration-300 overflow-hidden border-t-4 border-dk-yellow",
          showMobileMenu ? "max-h-[300px] py-4" : "max-h-0"
        )}>
          <div className="flex flex-col gap-2 px-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="arcade-btn w-full">EQUIPOS</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-dk-blue border border-dk-yellow">
                <DropdownMenuItem onClick={() => {
                  scrollToSection('carpinteria');
                  setShowMobileMenu(false);
                }} className="text-dk-yellow hover:bg-dk-red">
                  Carpintería
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => {
                  scrollToSection('pintura');
                  setShowMobileMenu(false);
                }} className="text-dk-yellow hover:bg-dk-red">
                  Pintura y Diseño
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => {
                  scrollToSection('audiovisuales');
                  setShowMobileMenu(false);
                }} className="text-dk-yellow hover:bg-dk-red">
                  Audiovisuales
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => {
                  scrollToSection('it');
                  setShowMobileMenu(false);
                }} className="text-dk-yellow hover:bg-dk-red">
                  IT y Web
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button className="arcade-btn w-full" onClick={() => {
              scrollToSection('galeria');
              setShowMobileMenu(false);
            }}>GALERÍA</Button>
            <Button className="arcade-btn w-full" onClick={() => {
              scrollToSection('video');
              setShowMobileMenu(false);
            }}>VIDEO</Button>
            <Button className="arcade-btn w-full" onClick={() => {
              scrollToSection('contacto');
              setShowMobileMenu(false);
            }}>CONTACTO</Button>
            
            {/* Social Icons for Mobile */}
            <div className="flex justify-center gap-6 mt-4">
              <a href="#" className="text-dk-yellow hover:text-dk-red">
                <Twitter className="h-6 w-6 animate-barrel-roll" />
              </a>
              <a href="#" className="text-dk-yellow hover:text-dk-red">
                <Instagram className="h-6 w-6 animate-barrel-roll" />
              </a>
              <a href="#" className="text-dk-yellow hover:text-dk-red">
                <Youtube className="h-6 w-6 animate-barrel-roll" />
              </a>
            </div>
          </div>
        </nav>
      </div>
      
      {/* Insert Coin Banner */}
      <div className="bg-black py-1 mt-4">
        <p className="font-press-start text-dk-yellow text-center animate-blink">
          INSERT COIN TO CONTINUE
        </p>
      </div>
    </header>
  );
};

export default Header;
