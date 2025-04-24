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
  return <motion.div initial={{
    opacity: 0,
    y: 20
  }} whileInView={{
    opacity: 1,
    y: 0
  }} transition={{
    duration: 0.5
  }} viewport={{
    once: true,
    amount: 0.3
  }} className="py-16 overflow-hidden">
      <motion.h3 className="text-2xl font-serif text-center mb-12" initial={{
      opacity: 0,
      scale: 0.9
    }} whileInView={{
      opacity: 1,
      scale: 1
    }} viewport={{
      once: true,
      amount: 0.5
    }} transition={{
      duration: 0.5,
      type: "spring",
      bounce: 0.4
    }}>
        <span className="glitch-intense" data-text="turning creative vision into reality" style={{
        textShadow: '0 0 10px rgba(234, 172, 232, 0.7)',
        animation: 'glitch 250ms infinite, flicker 2s linear infinite'
      }}>render(vision) → launch(protocol)</span>
      </motion.h3>
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
          {[...clientLogos, ...clientLogos].map((client, index) => <motion.div key={`${client.name}-${index}`} className="relative grayscale hover:grayscale-0 transition-all duration-300 flex-shrink-0" whileHover={{
          scale: 1.1,
          rotate: 5
        }}>
              <img src={client.logo} alt={client.name} className="w-24 h-24 object-contain rounded-full" />
            </motion.div>)}
        </motion.div>
      </div>
    </motion.div>;
};