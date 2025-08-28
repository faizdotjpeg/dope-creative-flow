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

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center py-16 md:py-20 px-4 overflow-hidden bg-gradient-to-b from-background via-background/95 to-background">
      {/* Elegant floating elements inspired by Jenny's design */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-20 left-10 md:left-20 w-40 md:w-60 h-40 md:h-60 rounded-full bg-primary/30 blur-3xl animate-parallax-float" style={{
          transform: `translateY(-${scrollY * 0.05}px)`
        }}></div>
        <div className="absolute bottom-20 right-10 md:right-20 w-60 md:w-80 h-60 md:h-80 rounded-full bg-secondary/20 blur-3xl" style={{
          transform: `translateY(-${scrollY * 0.08}px)`
        }}></div>
      </div>
      
      <div 
        style={{
          transform: `translateY(${scrollY * 0.08}px)`
        }} 
        className="container mx-auto relative z-10 text-center"
      >
        {/* Restored brand identity */}
        <div className="mb-8">
          <p className="glitch-intense mb-6 bg-clip-text font-mono text-sm tracking-wider md:text-base uppercase" data-text="CREATIVE DIRECTOR • PHOTOGRAPHER • DESIGNER">
            CREATIVE DIRECTOR • PHOTOGRAPHER • COPYWRITER • DESIGNER
          </p>
        </div>

        {/* Main headline with original brand voice */}
        <div className="space-y-8 max-w-2xl mx-auto mb-12">
          <div className="inline-block bg-primary/10 px-4 py-2 rounded-sm">
            <div className="text-primary/90 font-mono text-sm md:text-base tracking-widest">[ SYSTEM ONLINE ]</div>
          </div>
          
          <div className="space-y-6">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-mono text-foreground/90 tracking-tight">[I AM]
              <span className="block mt-2">faiz [feyz] :: pronounced like 'phase'</span>
            </h1>
          
            <div className="space-y-3 text-base md:text-lg text-muted-foreground/80 font-sans leading-relaxed">
              <p className="max-w-xl mx-auto">creative systems // visual signals // narrative code</p>
              <p className="max-w-xl mx-auto">origin: california // codebase: immigrant // directive: build the future</p>
            </div>
          </div>
        </div>
        
        {/* Original CTA style with conversion optimization */}
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <a href="#contact" className="w-full sm:w-auto">
            <Button size={isMobile ? "default" : "lg"} className="w-full sm:w-auto px-6 md:px-8 relative overflow-hidden group bg-gradient-to-r from-primary to-primary/80 hover:from-primary hover:to-primary transition-all duration-300">
              <span className="relative z-10">ping://connect</span>
              <span className="absolute inset-0 bg-foreground/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </Button>
          </a>
          <a href="#work" className="w-full sm:w-auto">
            <Button variant="outline" size={isMobile ? "default" : "lg"} className="w-full sm:w-auto px-6 md:px-8 border-2 hover:bg-primary/10">access://portfolio</Button>
          </a>
        </div>

        {/* Trust signals and social proof */}
        <div className="space-y-6">
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-xs md:text-sm tracking-wider text-muted-foreground/60 uppercase font-mono">
            <span className="hover:text-primary transition-colors cursor-default">Brand Strategy</span>
            <span className="hover:text-primary transition-colors cursor-default">Art Direction</span>
            <span className="hover:text-primary transition-colors cursor-default">Visual Identity</span>
            <span className="hover:text-primary transition-colors cursor-default">Campaign Development</span>
          </div>
          
          <div className="flex justify-center items-center space-x-8 text-xs text-muted-foreground/50 font-mono">
            <span>★ 50+ Successful Projects</span>
            <span>★ Award-Winning Creative</span>
            <span>★ 10+ Years Experience</span>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <a href="#work" className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-muted-foreground/60 hover:text-foreground transition-colors group">
        <span className="text-xs tracking-wider mb-2 font-mono uppercase">Explore Work</span>
        <ArrowDown className="h-4 w-4 animate-bounce group-hover:translate-y-1 transition-transform" />
      </a>
    </main>
  );
};
export default Hero;