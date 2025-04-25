import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const isMobile = useIsMobile();
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, {
      passive: true
    });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return <section id="home" className="relative min-h-screen flex flex-col items-center justify-center py-16 md:py-20 px-4 overflow-hidden">
      {/* Background pattern with enhanced parallax */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-20 left-10 md:left-20 w-40 md:w-60 h-40 md:h-60 rounded-full bg-primary/40 blur-3xl animate-parallax-float" style={{
        transform: `translateY(-${scrollY * 0.05}px)`
      }}></div>
        <div className="absolute bottom-20 right-10 md:right-20 w-60 md:w-80 h-60 md:h-80 rounded-full bg-secondary/30 blur-3xl" style={{
        transform: `translateY(-${scrollY * 0.08}px)`
      }}></div>
        <div className="absolute top-1/3 right-1/4 w-40 h-40 rounded-full bg-secondary/20 blur-3xl animate-parallax-float" style={{
        transform: `translateY(-${scrollY * 0.06}px)`,
        animationDelay: "1.5s"
      }}></div>
      </div>
      
      <div style={{
      transform: `translateY(${scrollY * 0.08}px)`
    }} className="container mx-auto relative z-10 text-center">
        <p className="glitch-intense mb-4 bg-clip-text font-mono text-sm md:text-base" data-text="CREATIVE DIRECTOR • PHOTOGRAPHER • DESIGNER">CREATIVE DIRECTOR • PHOTOGRAPHER • COPYWRITER • DESIGNER</p>
        
        <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 md:mb-12 font-sans leading-relaxed">[ SYSTEM ONLINE ]

[I AM]

faiz [feyz] :: pronounced like 'phase'
↳ forged in CA, refined in NY
↳ immigrant-coded, future-loaded</p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <a href="#work">
            <Button size={isMobile ? "default" : "lg"} className="w-full sm:w-auto px-6 md:px-8 relative overflow-hidden group bg-gradient-to-r from-primary to-primary/80 hover:from-primary hover:to-primary transition-all duration-300">
              <span className="relative z-10">access://portfolio</span>
              <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </Button>
          </a>
          <a href="#contact">
            <Button variant="outline" size={isMobile ? "default" : "lg"} className="w-full sm:w-auto px-6 md:px-8 border-2 hover:bg-primary/10">ping://connect</Button>
          </a>
        </div>
      </div>
      
      <a href="#work" className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-muted-foreground hover:text-primary transition-colors">
        <span className="text-xs md:text-sm mb-2">Scroll Down</span>
        <ArrowDown className="h-4 w-4 md:h-6 md:w-6 animate-bounce" />
      </a>
    </section>;
};
export default Hero;