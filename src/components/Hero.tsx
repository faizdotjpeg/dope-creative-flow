
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const textRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    const textElement = textRef.current;
    if (!textElement) return;
    
    textElement.classList.add('animate-fade-in');
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center py-20 px-4">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-20 left-20 w-40 h-40 rounded-full bg-primary/30 blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 rounded-full bg-primary/20 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto relative z-10 text-center">
        <p className="text-primary font-mono tracking-wide mb-4">CREATIVE DIRECTOR • PHOTOGRAPHER • DESIGNER</p>
        
        <h1 ref={textRef} className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 max-w-4xl mx-auto opacity-0">
          Turning <span className="text-gradient">Creative Vision</span> Into Reality
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
          I craft compelling visual stories through creative direction, photography, and design. 
          Let's create something extraordinary together.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <Button size="lg" className="px-8">
            View My Work
          </Button>
          <Button variant="outline" size="lg" className="px-8">
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
