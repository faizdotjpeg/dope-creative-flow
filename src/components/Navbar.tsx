
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ThemeToggle } from '@/components/ThemeToggle';
import { useIsMobile } from "@/hooks/use-mobile";
import { Menu, X, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'py-2 bg-background/80 backdrop-blur-xl border-b border-primary/10' : 'py-3 md:py-5'}`}>
      <div className="container mx-auto flex justify-between items-center px-4">
        <a href="/" className="text-xl font-mono font-bold glitch-intense" data-text="faiz.jpeg" onMouseEnter={e => {
          e.currentTarget.style.animation = 'none';
          e.currentTarget.offsetHeight; // Trigger reflow
          e.currentTarget.style.animation = '';
        }}>
          faiz.jpeg
        </a>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#home" className="font-mono hover:text-primary transition-all duration-200 hover:-translate-y-0.5">{"> "}root.access</a>
          <a href="#work" className="font-mono hover:text-primary transition-all duration-200 hover:-translate-y-0.5">projects.log</a>
          
          {/* Services Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="font-mono hover:text-primary transition-all duration-200 hover:-translate-y-0.5 p-0 h-auto bg-transparent">
                services.exec
                <ChevronDown className="ml-1 h-3 w-3" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="bg-background border-primary/20 min-w-[220px]">
              <DropdownMenuItem asChild className="font-mono text-sm">
                <a href="/services/brand-photography" className="w-full cursor-pointer hover:text-primary transition-colors">
                  brand.photography
                  <span className="text-xs text-muted-foreground ml-auto">// OC</span>
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="font-mono text-sm">
                <a href="#contact" className="w-full cursor-pointer hover:text-primary transition-colors">
                  creative.direction
                  <span className="text-xs text-muted-foreground ml-auto">// strategy</span>
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="font-mono text-sm">
                <a href="#contact" className="w-full cursor-pointer hover:text-primary transition-colors">
                  visual.identity
                  <span className="text-xs text-muted-foreground ml-auto">// brands</span>
                </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <a href="#about" className="font-mono hover:text-primary transition-all duration-200 hover:-translate-y-0.5">whoami</a>
          <a href="#contact" className="font-mono hover:text-primary transition-all duration-200 hover:-translate-y-0.5">connect.protocol</a>
          <ThemeToggle />
        </div>
        
        <div className="md:hidden flex items-center">
          <ThemeToggle />
          <Button 
            variant="ghost" 
            size="icon" 
            className="ml-2 text-foreground" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>
      
      {mobileMenuOpen && (
        <div className="md:hidden fixed top-[56px] left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-border/50 animate-fade-in z-50">
          <div className="container mx-auto py-4 px-4 flex flex-col space-y-4">
            <a href="#home" className="hover:text-primary transition-colors py-2 font-mono text-sm" onClick={closeMenu}>{"> "}root.access</a>
            <a href="#work" className="hover:text-primary transition-colors py-2 font-mono text-sm" onClick={closeMenu}>projects.log</a>
            
            {/* Mobile Services Menu */}
            <div className="py-2">
              <div className="text-primary font-mono text-sm mb-2">services.exec:</div>
              <div className="ml-4 space-y-2">
                <a href="/services/brand-photography" className="block hover:text-primary transition-colors font-mono text-xs" onClick={closeMenu}>
                  → brand.photography // OC
                </a>
                <a href="#contact" className="block hover:text-primary transition-colors font-mono text-xs" onClick={closeMenu}>
                  → creative.direction // strategy  
                </a>
                <a href="#contact" className="block hover:text-primary transition-colors font-mono text-xs" onClick={closeMenu}>
                  → visual.identity // brands
                </a>
              </div>
            </div>
            
            <a href="#about" className="hover:text-primary transition-colors py-2 font-mono text-sm" onClick={closeMenu}>whoami</a>
            <a href="#contact" className="hover:text-primary transition-colors py-2 font-mono text-sm" onClick={closeMenu}>connect.protocol</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
