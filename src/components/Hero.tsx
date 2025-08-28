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
        {/* Inspired by Jenny's "EST 2017" branding - clean and professional */}
        <div className="mb-8">
          <p className="text-sm md:text-base tracking-[0.3em] text-muted-foreground/80 uppercase font-mono">
            EST. CALIFORNIA
          </p>
        </div>

        {/* Main headline with SEO-optimized H1 */}
        <div className="space-y-6 mb-12">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-serif font-light tracking-wide text-foreground leading-tight">
            Creative Director
            <br />
            <span className="font-light italic">& Brand Strategist</span>
          </h1>
          
          {/* Value proposition with clear benefits */}
          <div className="max-w-3xl mx-auto space-y-4">
            <p className="text-lg md:text-xl font-serif font-light text-muted-foreground/90 italic tracking-wide">
              Award-winning <em className="text-primary">creative direction</em> that drives <em className="text-primary">brand growth</em> and <em className="text-primary">market impact</em>
            </p>
            <p className="text-base md:text-lg text-muted-foreground/70 max-w-xl mx-auto leading-relaxed">
              I help innovative brands tell their story through strategic vision and authentic storytelling that converts audiences into advocates.
            </p>
          </div>
        </div>

        {/* High-converting CTA buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 mb-16">
          <a href="#contact" className="w-full sm:w-auto">
            <Button 
              size={isMobile ? "default" : "lg"} 
              className="w-full px-8 py-4 font-mono text-sm tracking-wider uppercase bg-primary text-background hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Start Your Project
            </Button>
          </a>
          <a href="#work" className="w-full sm:w-auto">
            <Button 
              variant="ghost" 
              size={isMobile ? "default" : "lg"} 
              className="w-full px-8 py-3 font-mono text-sm tracking-wider uppercase border border-foreground/20 hover:border-primary hover:bg-primary/5 hover:text-primary"
            >
              View Portfolio
            </Button>
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