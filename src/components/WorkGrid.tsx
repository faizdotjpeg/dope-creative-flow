
import { useState } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

// Sample portfolio items (replace with your actual projects)
const portfolioItems = [{
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

const WorkGrid = () => {
  const [filter, setFilter] = useState("all");
  const filteredItems = filter === "all" ? portfolioItems : portfolioItems.filter(item => item.category === filter);
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
  return <section 
    id="work" 
    className="py-24 px-4 bg-muted/10 dark:bg-background/30 transition-colors duration-300 relative overflow-hidden"
  >
    <div 
      className="absolute inset-0 dark:bg-gradient-to-b dark:from-secondary/20 dark:to-transparent dark:opacity-50 pointer-events-none"
      style={{
        backgroundImage: 'linear-gradient(to bottom, rgba(139, 92, 246, 0.15), transparent)',
        zIndex: 1
      }}
    >
      {/* Floating orbs with increased visibility */}
      <div className="absolute inset-0 mix-blend-overlay opacity-60">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full blur-3xl"
            style={{
              width: `${Math.random() * 400 + 200}px`,
              height: `${Math.random() * 400 + 200}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: i % 2 === 0 ? 
                'radial-gradient(circle, rgba(0, 255, 128, 0.3) 0%, transparent 70%)' : 
                'radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, transparent 70%)',
              animation: `float ${10 + i * 2}s ease-in-out infinite`,
              animationDelay: `${i * -2}s`,
            }}
          />
        ))}
      </div>
    </div>
    
    <div className="container mx-auto relative z-10">
      <h2 className="text-4xl font-serif font-bold mb-4 text-center animate-fade-in md:text-xl">
        Featured <span data-text="Work" className="text-gradient glitch text-3xl">Work</span>
      </h2>
      <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto font-sans">
        A selection of my projects across creative direction, photography, and design.
      </p>
      
      <Tabs defaultValue="all" className="mb-12">
        <TabsList className="grid grid-cols-4 max-w-md mx-auto">
          <TabsTrigger value="all" onClick={() => setFilter("all")}>All</TabsTrigger>
          <TabsTrigger value="direction" onClick={() => setFilter("direction")}>Direction</TabsTrigger>
          <TabsTrigger value="photography" onClick={() => setFilter("photography")}>Photography</TabsTrigger>
          <TabsTrigger value="design" onClick={() => setFilter("design")}>Design</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="mt-8">
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" variants={containerVariants} initial="hidden" animate="show">
            {filteredItems.map(item => <PortfolioItem key={item.id} item={item} variants={itemVariants} />)}
          </motion.div>
        </TabsContent>
        
        <TabsContent value="direction" className="mt-8">
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" variants={containerVariants} initial="hidden" animate="show">
            {filteredItems.map(item => <PortfolioItem key={item.id} item={item} variants={itemVariants} />)}
          </motion.div>
        </TabsContent>
        
        <TabsContent value="photography" className="mt-8">
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" variants={containerVariants} initial="hidden" animate="show">
            {filteredItems.map(item => <PortfolioItem key={item.id} item={item} variants={itemVariants} />)}
          </motion.div>
        </TabsContent>
        
        <TabsContent value="design" className="mt-8">
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" variants={containerVariants} initial="hidden" animate="show">
            {filteredItems.map(item => <PortfolioItem key={item.id} item={item} variants={itemVariants} />)}
          </motion.div>
        </TabsContent>
      </Tabs>
    </div>
  </section>;
};

interface PortfolioItemProps {
  item: {
    id: number;
    title: string;
    category: string;
    image: string;
    description: string;
  };
  variants: any;
}

const PortfolioItem = ({ item, variants }: PortfolioItemProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      className="portfolio-item rounded-none overflow-hidden group"
      variants={variants}
      whileHover={{
        y: -4,
        transition: { duration: 0.2 }
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-square relative">
        <motion.img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
          animate={{
            scale: isHovered ? 1.05 : 1
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/95 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm flex flex-col justify-end p-6">
          <h3 className="font-mono text-xl font-bold text-foreground mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            {item.title}
          </h3>
          <p className="text-primary uppercase tracking-wider text-sm mb-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
            {item.category}
          </p>
          <p className="text-muted-foreground text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100 font-mono">
            {item.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default WorkGrid;
