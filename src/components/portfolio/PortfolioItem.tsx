
import { useState } from "react";
import { motion } from "framer-motion";
import { FileChartLine, Trophy } from "lucide-react";

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

export const PortfolioItem = ({
  item,
  variants
}: PortfolioItemProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div 
      className="portfolio-item rounded-none overflow-hidden group" 
      variants={variants} 
      whileHover={{
        y: -8,
        transition: {
          duration: 0.2
        }
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
    </motion.div>
  );
};
