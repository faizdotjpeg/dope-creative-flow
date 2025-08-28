import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Trophy, Award, FileChartLine } from "lucide-react";
import { PortfolioItem } from "./portfolio/PortfolioItem";
import { ClientsSection } from "./portfolio/ClientsSection";
import { AwardsSection } from "./portfolio/AwardsSection";
import { useIsMobile } from "@/hooks/use-mobile";

// Enhanced portfolio items with brand voice
export const portfolioItems = [
  {
    id: 1,
    title: "neural.networks",
    category: "direction",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80",
    description: "ai-driven creative systems // merging human intuition with machine learning",
    fullDescription: "breakthrough creative direction protocol that fused artificial intelligence with human creativity architecture. this campaign deconstructed conventional marketing frameworks by integrating neural network visualizations into brand narrative code.",
    client: "TechNova.AI",
    year: "2024",
    role: "creative.director",
    gallery: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=800&q=80"
    ],
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 2,
    title: "quantum.brand",
    category: "design",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80",
    description: "visual identity systems // quantum computing translated into design language",
    fullDescription: "comprehensive brand architecture that rendered complex quantum computing concepts through minimalist design protocols. project scope: logo.design + brand.guidelines + digital.assets // all optimized for multi-dimensional brand expression.",
    client: "Quantum.Labs",
    year: "2023",
    role: "brand.architect",
    gallery: [
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=800&q=80"
    ],
    video: null
  },
  {
    id: 3,
    title: "urban.futures",
    category: "photography",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=800&q=80",
    description: "architectural documentation // where digital innovation reshapes physical space",
    fullDescription: "documentary photography protocol capturing the intersection of technology and urban architecture. this visual series explores how digital innovation rewrites the physical space syntax of modern cities // building new visual languages for tomorrow's landscapes.",
    client: "Architecture.Weekly",
    year: "2024",
    role: "visual.documentarian",
    gallery: [
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1590767187812-ee0c2b31e9de?auto=format&fit=crop&w=800&q=80"
    ],
    video: null
  },
  {
    id: 4,
    title: "digital.nomad",
    category: "direction",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
    description: "campaign architecture // remote work culture translated into brand signals",
    fullDescription: "comprehensive creative direction framework targeting digital nomads and remote work ecosystems. project included: brand.positioning + content.strategy + multi-platform.execution // all designed to resonate with location-independent creative communities.",
    client: "RemoteHub.co",
    year: "2023",
    role: "campaign.architect",
    gallery: [
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=800&q=80"
    ],
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 5,
    title: "neon.typography",
    category: "design",
    image: "https://images.unsplash.com/photo-1616628188524-413f8a0a8789?auto=format&fit=crop&w=800&q=80",
    description: "experimental typeface development // cyberpunk aesthetics meets functional design",
    fullDescription: "custom typeface family development inspired by cyberpunk design language. this project pushed digital typography boundaries with experimental letterforms and dynamic character variations // building tomorrow's visual communication tools today.",
    client: "Future.Fonts",
    year: "2024",
    role: "type.developer",
    gallery: [
      "https://images.unsplash.com/photo-1616628188524-413f8a0a8789?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?auto=format&fit=crop&w=800&q=80"
    ],
    video: null
  },
  {
    id: 6,
    title: "sound.waves",
    category: "photography",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=800&q=80",
    description: "music industry documentation // visual storytelling meets audio culture",
    fullDescription: "comprehensive visual documentation of emerging artists and studio culture. this series combines portrait.photography + environmental.storytelling to capture the creative process algorithms that drive music production // translating sound into visual narrative.",
    client: "Independent.Artists.Collective",
    year: "2023",
    role: "visual.chronicler",
    gallery: [
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1598387181353-d3f34d5bcdd6?auto=format&fit=crop&w=800&q=80"
    ],
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  }
];

// Sample client logos
const clientLogos = [{
  name: "Komono",
  logo: "/lovable-uploads/6944ed31-f320-418f-bb79-36c9e5aa17ab.png"
}, {
  name: "MVMT",
  logo: "/lovable-uploads/b23aafe5-5905-4cbd-9214-3d6ae8a7eebc.png"
}, {
  name: "Tomorrows Laundry",
  logo: "/lovable-uploads/c4a93c2a-1fdb-491a-91a7-8a1323d8a543.png"
}, {
  name: "Starry",
  logo: "/lovable-uploads/ca04cbc1-d087-4430-b56e-956c0a343405.png"
}, {
  name: "Puma",
  logo: "/lovable-uploads/1a197f38-6f81-4ab7-8087-25edce89550b.png"
}, {
  name: "Filling Pieces",
  logo: "/lovable-uploads/3b8866e5-7d3f-4573-a888-acf1a9f5c693.png"
}, {
  name: "Pink Dolphin",
  logo: "/lovable-uploads/b864d84b-6be9-4f35-b8a1-9f9bb6220472.png"
}, {
  name: "Nike",
  logo: "/lovable-uploads/accd413c-0011-4e48-b309-b6c4e6a709ed.png"
}, {
  name: "Kodak",
  logo: "/lovable-uploads/9e4a567d-aad1-4a77-8cba-2e4634e63411.png"
}];

// Sample awards
const awards = [{
  title: "Best Campaign 2024",
  organization: "Advertising Awards",
  icon: Trophy
}, {
  title: "Creative Excellence",
  organization: "Design Institute",
  icon: Award
}];
const WorkGrid = () => {
  const [filter, setFilter] = useState("all");
  const [scrollY, setScrollY] = useState(0);
  const filteredItems = filter === "all" ? portfolioItems : portfolioItems.filter(item => item.category === filter);
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
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };
  return <section className="py-20 md:py-32 px-4 bg-muted/10 dark:bg-gradient-to-b dark:from-secondary/5 dark:to-background transition-colors duration-300 relative overflow-hidden">
      <div className="absolute inset-0 dark:bg-gradient-to-br dark:from-primary/3 dark:via-transparent dark:to-accent/2 pointer-events-none" />
      
      <div className="container mx-auto relative z-10 space-y-16 md:space-y-24">
        <div className="text-center space-y-6">
          <motion.h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-center" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true,
          amount: 0.3
        }} transition={{
          duration: 0.6,
          type: "spring",
          damping: 12
        }}>
             <span className="text-gradient glitch relative" data-text="project.archive" style={{
            textShadow: '0 0 10px rgba(147, 39, 143, 0.7)',
            animation: 'rgb-split 0.5s infinite alternate-reverse, glitch-text 1.5s infinite'
          }}>project.archive</span>
          </motion.h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto font-mono">compiled.signals from creative.direction + visual.storytelling + design.architecture // building tomorrow's brand experiences today</p>
        </div>

        <ClientsSection clientLogos={clientLogos} />

        <Tabs defaultValue="all" className="mb-8 md:mb-16">
          <TabsList className={`grid ${isMobile ? 'grid-cols-2 gap-2 mb-2' : 'grid-cols-4'} max-w-md mx-auto`}>
            <TabsTrigger value="all" onClick={() => setFilter("all")}>All Work</TabsTrigger>
            <TabsTrigger value="direction" onClick={() => setFilter("direction")}>Direction</TabsTrigger>
            <TabsTrigger value="photography" onClick={() => setFilter("photography")}>Photography</TabsTrigger>
            <TabsTrigger value="design" onClick={() => setFilter("design")}>Design</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-8 md:mt-12">
            <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8" variants={containerVariants} initial="hidden" whileInView="show" viewport={{
            once: true,
            amount: 0.1
          }}>
              {filteredItems.map(item => <PortfolioItem key={item.id} item={item} variants={itemVariants} />)}
            </motion.div>
          </TabsContent>
          
          <TabsContent value="direction" className="mt-8 md:mt-12">
            <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8" variants={containerVariants} initial="hidden" whileInView="show" viewport={{
            once: true,
            amount: 0.1
          }}>
              {filteredItems.map(item => <PortfolioItem key={item.id} item={item} variants={itemVariants} />)}
            </motion.div>
          </TabsContent>
          
          <TabsContent value="photography" className="mt-8 md:mt-12">
            <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8" variants={containerVariants} initial="hidden" whileInView="show" viewport={{
            once: true,
            amount: 0.1
          }}>
              {filteredItems.map(item => <PortfolioItem key={item.id} item={item} variants={itemVariants} />)}
            </motion.div>
          </TabsContent>
          
          <TabsContent value="design" className="mt-8 md:mt-12">
            <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8" variants={containerVariants} initial="hidden" whileInView="show" viewport={{
            once: true,
            amount: 0.1
          }}>
              {filteredItems.map(item => <PortfolioItem key={item.id} item={item} variants={itemVariants} />)}
            </motion.div>
          </TabsContent>
        </Tabs>

        <AwardsSection awards={awards} />
      </div>
    </section>;
};
export default WorkGrid;