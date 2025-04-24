
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ThemeToggle } from '@/components/ThemeToggle';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'py-3 bg-background/60 backdrop-blur-xl border-b border-primary/10' : 'py-5'}`}>
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
          <a href="#about" className="font-mono hover:text-primary transition-all duration-200 hover:-translate-y-0.5">whoami</a>
          <a href="#contact" className="font-mono hover:text-primary transition-all duration-200 hover:-translate-y-0.5">connect.protocol</a>
          <ThemeToggle />
        </div>
        
        <div className="md:hidden flex items-center">
          <ThemeToggle />
          <Button variant="ghost" className="ml-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <span className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-foreground mt-1.5 transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-foreground mt-1.5 transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </Button>
        </div>
      </div>
      
      {mobileMenuOpen && <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-border/50 animate-fade-in">
          <div className="container mx-auto py-4 px-4 flex flex-col space-y-4">
            <a href="#home" className="hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Home</a>
            <a href="#work" className="hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Work</a>
            <a href="#about" className="hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>About</a>
            <a href="#contact" className="hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Contact</a>
          </div>
        </div>}
    </nav>;
};

export default Navbar;
