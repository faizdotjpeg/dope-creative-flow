
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";
import { useState, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";

interface ClientLogosProps {
  clientLogos: Array<{
    name: string;
    logo: string;
  }>;
}

export const ClientsSection = ({
  clientLogos
}: ClientLogosProps) => {
  const isMobile = useIsMobile();
  const [imagesLoaded, setImagesLoaded] = useState(false);
  
  useEffect(() => {
    // Preload all images before starting animation
    const imagePromises = clientLogos.map(client => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = client.logo;
        img.onload = resolve;
        img.onerror = reject;
      });
    });

    Promise.all(imagePromises)
      .then(() => setImagesLoaded(true))
      .catch(error => console.error('Error loading images:', error));
  }, [clientLogos]);

  if (!imagesLoaded) {
    return (
      <div className="py-12 md:py-16 overflow-hidden border-t border-b border-primary/20 bg-background/30 backdrop-blur-sm">
        <div className="flex space-x-8 md:space-x-16 px-4">
          {[1, 2, 3].map((i) => (
            <Skeleton key={i} className="w-16 h-16 md:w-24 md:h-24 rounded-full flex-shrink-0" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-12 md:py-16 overflow-hidden border-t border-b border-primary/20 bg-background/30 backdrop-blur-sm"
    >
      <div className="relative w-full max-w-7xl mx-auto px-4">
        <motion.div 
          className="flex space-x-8 md:space-x-16" 
          animate={{
            x: [0, isMobile ? -800 : -1000]
          }} 
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: isMobile ? 25 : 30,
              ease: "linear"
            }
          }}
        >
          {[...clientLogos, ...clientLogos].map((client, index) => (
            <motion.div 
              key={`${client.name}-${index}`} 
              className="relative grayscale hover:grayscale-0 transition-all duration-300 flex-shrink-0" 
              whileHover={{
                scale: 1.1,
                rotate: 5
              }}
            >
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-primary/30 overflow-hidden flex items-center justify-center bg-background/50 backdrop-blur-sm p-3 hover:border-primary transition-colors duration-300">
                <img 
                  src={client.logo} 
                  alt={client.name} 
                  className="w-full h-full object-contain" 
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

