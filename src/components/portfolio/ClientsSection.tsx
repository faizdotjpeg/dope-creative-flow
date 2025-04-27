
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
      <div className="py-16 md:py-20 overflow-hidden border-t border-b border-primary/20 bg-background/30 backdrop-blur-sm">
        <div className="flex justify-center space-x-12 md:space-x-20 px-6">
          {[1, 2, 3, 4].map((i) => (
            <Skeleton key={i} className="w-32 h-20 md:w-40 md:h-24 rounded-sm flex-shrink-0" />
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
      className="py-16 md:py-20 overflow-hidden border-t border-b border-primary/20 bg-background/30 backdrop-blur-sm"
    >
      <div className="relative w-full max-w-7xl mx-auto px-6">
        <motion.div 
          className="flex space-x-12 md:space-x-20" 
          animate={{
            x: [0, isMobile ? -1600 : -2400]
          }} 
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: isMobile ? 40 : 50,
              ease: "linear"
            }
          }}
        >
          {[...clientLogos, ...clientLogos].map((client, index) => (
            <motion.div 
              key={`${client.name}-${index}`} 
              className="relative grayscale hover:grayscale-0 transition-all duration-300 flex-shrink-0" 
              whileHover={{
                scale: 1.05,
                rotate: 2
              }}
            >
              <div className="w-32 h-20 md:w-40 md:h-24 rounded-sm overflow-hidden flex items-center justify-center bg-background/50 backdrop-blur-sm p-4 hover:border-primary transition-colors duration-300 hover:bg-background/70">
                <img 
                  src={client.logo} 
                  alt={client.name} 
                  className="w-full h-full object-contain filter contrast-125" 
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

