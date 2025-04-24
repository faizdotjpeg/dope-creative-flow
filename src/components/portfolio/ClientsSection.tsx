
import { motion } from "framer-motion";

interface ClientLogosProps {
  clientLogos: Array<{
    name: string;
    logo: string;
  }>;
}

export const ClientsSection = ({
  clientLogos
}: ClientLogosProps) => {
  return <motion.div 
    initial={{
      opacity: 0,
      y: 20
    }} 
    whileInView={{
      opacity: 1,
      y: 0
    }} 
    transition={{
      duration: 0.5
    }} 
    viewport={{
      once: true,
      amount: 0.3
    }} 
    className="py-16 overflow-hidden border-t border-b border-primary/20 bg-background/30 backdrop-blur-sm"
  >
    <div className="relative w-full">
      <motion.div 
        className="flex space-x-16" 
        animate={{
          x: [0, -1000]
        }} 
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
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
            <div className="w-24 h-24 rounded-full border-2 border-primary/30 overflow-hidden flex items-center justify-center bg-background/50 backdrop-blur-sm p-2 hover:border-primary transition-colors duration-300">
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
  </motion.div>;
};
