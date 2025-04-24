
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface AwardsProps {
  awards: Array<{
    title: string;
    organization: string;
    icon: LucideIcon;
  }>;
}

export const AwardsSection = ({ awards }: AwardsProps) => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="py-16"
    >
      <motion.h3 
        className="text-2xl font-serif text-center mb-12"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ 
          opacity: 1, 
          x: 0,
          transition: {
            type: "spring",
            stiffness: 200,
            damping: 20
          }
        }}
      >
        <span 
          className="text-gradient" 
          data-text="cert.unlocked"
          style={{ 
            textShadow: '0 0 10px rgba(148, 39, 234, 0.7)', 
            animation: 'flicker 1.5s linear infinite' 
          }}
        >
          cert.unlocked
        </span>
      </motion.h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {awards.map((award, index) => (
          <motion.div
            key={award.title}
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.2,
              type: "spring",
              stiffness: 100
            }}
            whileHover={{
              scale: 1.02,
              transition: { type: "spring", stiffness: 400 }
            }}
            className="glass-card p-6"
          >
            <div className="flex items-center gap-4">
              <award.icon className="w-8 h-8 text-primary" />
              <div>
                <h4 className="font-serif text-lg">{award.title}</h4>
                <p className="text-sm text-muted-foreground">{award.organization}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};
