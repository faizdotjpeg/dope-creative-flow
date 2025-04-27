import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Trophy, Award, FileChartLine } from "lucide-react";
import { PortfolioItem } from "./portfolio/PortfolioItem";
import { ClientsSection } from "./portfolio/ClientsSection";
import { AwardsSection } from "./portfolio/AwardsSection";
import { useIsMobile } from "@/hooks/use-mobile";

// Sample portfolio items
export const portfolioItems = [{
  id: 1,
  title: "Urban Perspective",
  category: "photography",
  image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
  description: "Urban architecture photography series"
}, {
  id: 2,
  title: "Brand Redesign",
  category: "design",
  image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80",
  description: "Complete visual identity for tech startup"
}, {
  id: 3,
  title: "Fashion Campaign",
  category: "direction",
  image: "https://images.unsplash.com/photo-1605310537282-96e590498a5e?auto=format&fit=crop&w=800&q=80",
  description: "Creative direction for seasonal campaign"
}, {
  id: 4,
  title: "Product Series",
  category: "photography",
  image: "https://images.unsplash.com/photo-1502982720700-bfff97f2ecac?auto=format&fit=crop&w=800&q=80",
  description: "Minimalist product photography"
}, {
  id: 5,
  title: "Editorial Layout",
  category: "design",
  image: "https://images.unsplash.com/photo-1616628188524-413f8a0a8789?auto=format&fit=crop&w=800&q=80",
  description: "Magazine layout and typography design"
}, {
  id: 6,
  title: "Music Video",
  category: "direction",
  image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=800&q=80",
  description: "Creative direction for indie band"
}];

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
  return <section className="py-20 md:py-32 px-4 bg-muted/10 dark:bg-background/30 transition-colors duration-300 relative overflow-hidden">
      <div className="absolute inset-0 dark:bg-gradient-to-b dark:from-secondary/20 dark:to-transparent dark:opacity-50 pointer-events-none" />
      
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
            <span className="text-gradient glitch relative" data-text="highlight.reel" style={{
            textShadow: '0 0 10px rgba(147, 39, 143, 0.7)',
            animation: 'rgb-split 0.5s infinite alternate-reverse, glitch-text 1.5s infinite'
          }}>
              highlight.reel
            </span>
          </motion.h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto font-sans">compiled signals from creative direction, visual storytelling, and design architecture.</p>
        </div>

        <ClientsSection clientLogos={clientLogos} />

        <Tabs defaultValue="all" className="mb-8 md:mb-16">
          <TabsList className={`grid ${isMobile ? 'grid-cols-2 gap-2 mb-2' : 'grid-cols-4'} max-w-md mx-auto`}>
            <TabsTrigger value="all" onClick={() => setFilter("all")}>All</TabsTrigger>
            <TabsTrigger value="direction" onClick={() => setFilter("direction")}>Copywriting
          </TabsTrigger>
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