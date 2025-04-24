
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center py-20 px-4 overflow-hidden">
      {/* Background pattern with enhanced parallax */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div 
          className="absolute top-20 left-20 w-60 h-60 rounded-full bg-primary/40 blur-3xl animate-parallax-float"
          style={{ transform: `translateY(-${scrollY * 0.05}px)` }}
        ></div>
        <div 
          className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-secondary/30 blur-3xl"
          style={{ transform: `translateY(-${scrollY * 0.08}px)` }}
        ></div>
        <div 
          className="absolute top-1/3 right-1/4 w-40 h-40 rounded-full bg-secondary/20 blur-3xl animate-parallax-float"
          style={{ transform: `translateY(-${scrollY * 0.06}px)`, animationDelay: "1.5s" }}
        ></div>
      </div>
      
      <div 
        className="container mx-auto relative z-10 text-center"
        style={{ transform: `translateY(${scrollY * 0.08}px)` }}
      >
        <p className="glitch-intense mb-4 bg-clip-text" data-text="CREATIVE DIRECTOR • PHOTOGRAPHER • DESIGNER">
          CREATIVE DIRECTOR • PHOTOGRAPHER • DESIGNER
        </p>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 font-sans leading-relaxed">
          I craft compelling visual stories through creative direction, photography, and design. 
          Let's create something extraordinary together.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <Button size="lg" className="px-8 relative overflow-hidden group bg-gradient-to-r from-primary to-primary/80 hover:from-primary hover:to-primary transition-all duration-300">
            <span className="relative z-10">View My Work</span>
            <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </Button>
          <Button variant="outline" size="lg" className="px-8 border-2 hover:bg-primary/10">
            Get In Touch
          </Button>
        </div>
      </div>
      
      <a 
        href="#work" 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-muted-foreground hover:text-primary transition-colors"
      >
        <span className="text-sm mb-2">Scroll Down</span>
        <ArrowDown className="h-6 w-6 animate-bounce" />
      </a>
    </section>
  );
};

export default Hero;
