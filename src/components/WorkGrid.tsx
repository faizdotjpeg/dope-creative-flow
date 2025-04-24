import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Trophy, Award, FileChartLine } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

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

// Sample client logos
const clientLogos = [{
  name: "Client 1",
  logo: "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?w=100&h=100&fit=crop"
}, {
  name: "Client 2",
  logo: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=100&h=100&fit=crop"
}, {
  name: "Client 3",
  logo: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=100&h=100&fit=crop"
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
  return <section className="py-32 px-4 bg-muted/10 dark:bg-background/30 transition-colors duration-300 relative overflow-hidden">
      <div className="absolute inset-0 dark:bg-gradient-to-b dark:from-secondary/20 dark:to-transparent dark:opacity-50 pointer-events-none" />
      
      <div className="container mx-auto relative z-10 space-y-24">
        <div className="text-center space-y-6">
          <h2 className="text-4xl font-serif font-bold mb-4 text-center animate-fade-in">highlight.reel</h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto font-sans">
            A curated selection of projects spanning creative direction, photography, and design.
          </p>
        </div>

        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5
      }} className="py-16 overflow-hidden">
          <h3 className="text-2xl font-serif text-center mb-12">auth.past_clients</h3>
          <div className="relative w-full">
            <motion.div className="flex space-x-16" animate={{
            x: [0, -1000]
          }} transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear"
            }
          }}>
              {[...clientLogos, ...clientLogos].map((client, index) => <motion.div key={`${client.name}-${index}`} className="relative grayscale hover:grayscale-0 transition-all duration-300 flex-shrink-0">
                  <img src={client.logo} alt={client.name} className="w-24 h-24 object-contain rounded-full" />
                </motion.div>)}
            </motion.div>
          </div>
        </motion.div>

        <Tabs defaultValue="all" className="mb-16">
          <TabsList className="grid grid-cols-4 max-w-md mx-auto">
            <TabsTrigger value="all" onClick={() => setFilter("all")}>All</TabsTrigger>
            <TabsTrigger value="direction" onClick={() => setFilter("direction")}>Direction</TabsTrigger>
            <TabsTrigger value="photography" onClick={() => setFilter("photography")}>Photography</TabsTrigger>
            <TabsTrigger value="design" onClick={() => setFilter("design")}>Design</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-12">
            <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" variants={containerVariants} initial="hidden" animate="show">
              {filteredItems.map(item => <PortfolioItem key={item.id} item={item} variants={itemVariants} />)}
            </motion.div>
          </TabsContent>
          
          <TabsContent value="direction" className="mt-12">
            <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" variants={containerVariants} initial="hidden" animate="show">
              {filteredItems.map(item => <PortfolioItem key={item.id} item={item} variants={itemVariants} />)}
            </motion.div>
          </TabsContent>
          
          <TabsContent value="photography" className="mt-12">
            <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" variants={containerVariants} initial="hidden" animate="show">
              {filteredItems.map(item => <PortfolioItem key={item.id} item={item} variants={itemVariants} />)}
            </motion.div>
          </TabsContent>
          
          <TabsContent value="design" className="mt-12">
            <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" variants={containerVariants} initial="hidden" animate="show">
              {filteredItems.map(item => <PortfolioItem key={item.id} item={item} variants={itemVariants} />)}
            </motion.div>
          </TabsContent>
        </Tabs>

        <motion.section initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5
      }} className="py-16">
          <h3 className="text-2xl font-serif text-center mb-12">cert.unlocked</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {awards.map((award, index) => <motion.div key={award.title} whileHover={{
            scale: 1.02
          }} initial={{
            opacity: 0,
            x: index % 2 === 0 ? -20 : 20
          }} whileInView={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.5,
            delay: index * 0.2
          }} className="glass-card p-6">
                <div className="flex items-center gap-4">
                  <award.icon className="w-8 h-8 text-primary" />
                  <div>
                    <h4 className="font-serif text-lg">{award.title}</h4>
                    <p className="text-sm text-muted-foreground">{award.organization}</p>
                  </div>
                </div>
              </motion.div>)}
          </div>
        </motion.section>
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
const PortfolioItem = ({
  item,
  variants
}: PortfolioItemProps) => {
  const [isHovered, setIsHovered] = useState(false);
  return <motion.div className="portfolio-item rounded-none overflow-hidden group" variants={variants} whileHover={{
    y: -8,
    transition: {
      duration: 0.2
    }
  }} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <div className="aspect-square relative">
        <motion.img src={item.image} alt={item.title} className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500" animate={{
        scale: isHovered ? 1.05 : 1
      }} />
        <div className="absolute inset-0 bg-gradient-to-t from-background/95 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm flex flex-col justify-end p-6">
          <h3 className="font-mono text-xl font-bold text-foreground mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            {item.title}
          </h3>
          <p className="text-primary uppercase tracking-wider text-sm mb-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
            {item.category}
          </p>
          
          <div className="grid grid-cols-2 gap-4 mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
            <div className="text-center">
              <FileChartLine className="w-5 h-5 mx-auto mb-2 text-primary" />
              <span className="text-xs text-muted-foreground block">Engagement</span>
              <span className="text-sm font-bold">+45%</span>
            </div>
            <div className="text-center">
              <Trophy className="w-5 h-5 mx-auto mb-2 text-primary" />
              <span className="text-xs text-muted-foreground block">Awards</span>
              <span className="text-sm font-bold">2</span>
            </div>
          </div>

          <p className="text-muted-foreground text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-150 font-mono">
            {item.description}
          </p>
        </div>
      </div>
    </motion.div>;
};
export default WorkGrid;