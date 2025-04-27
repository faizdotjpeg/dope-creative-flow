
import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface SkillSetProps {
  skills: string[];
}

const SkillSet = ({ skills }: SkillSetProps) => {
  return (
    <div className="pt-4">
      <h3 className="text-xl font-mono mb-4 text-primary">[SKILL.SET]</h3>
      <div className="grid grid-cols-2 gap-3">
        {skills.map((skill, index) => (
          <motion.div 
            key={index} 
            className="flex items-center font-mono"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
          >
            <div className="bg-primary/20 p-1 rounded-full mr-2">
              <Check className="h-4 w-4 text-primary" />
            </div>
            <span>{skill}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SkillSet;
