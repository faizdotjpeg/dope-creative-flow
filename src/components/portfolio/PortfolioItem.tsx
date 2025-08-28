import { useState } from "react";
import { motion } from "framer-motion";
import { FileChartLine, Trophy } from "lucide-react";
import { Link } from "react-router-dom";

interface PortfolioItemProps {
  item: {
    id: number;
    title: string;
    category: string;
    image: string;
    description: string;
    fullDescription: string;
    client: string;
    year: string;
    role: string;
    gallery: string[];
    video?: string | null;
  };
  variants: any;
}

export const PortfolioItem = ({
  item,
  variants
}: PortfolioItemProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <Link to={`/portfolio/${item.id}`}>
      <motion.div 
        className="portfolio-item rounded-none overflow-hidden group cursor-pointer" 
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
        <div className="aspect-square relative bg-muted/20">
          <motion.img 
            src={item.image} 
            alt={item.title} 
            className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500" 
            animate={{
              scale: isHovered ? 1.05 : 1
            }}
            onError={(e) => {
              e.currentTarget.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Crect width='400' height='400' fill='%23${Math.random().toString(16).substr(2,6)}'/%3E%3Ctext x='200' y='200' text-anchor='middle' dy='0.3em' font-family='monospace' font-size='16' fill='white'%3E${item.title}%3C/text%3E%3C/svg%3E`;
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
    </Link>
  );
};
