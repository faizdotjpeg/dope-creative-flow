import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const skills = ["Creative Direction", "Brand Strategy", "Photography", "Visual Identity Design", "Editorial Design", "Typography", "Art Direction", "Digital Design"];

const About = () => {
  return <section id="about" className="py-24 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{
          opacity: 0,
          x: -50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }}>
            <h2 className="text-4xl font-mono font-bold mb-6 md:text-xl">
              <span className="text-gradient glitch relative inline-block" data-text="origin.story">origin.story</span>
            </h2>
            
            <p className="text-lg mb-6 text-foreground dark:text-gray-300">
              I'm a multidisciplinary creative with over 8 years of experience across creative direction,
              photography, and graphic design. My work is driven by a passion for visual storytelling
              and crafting meaningful brand experiences.
            </p>
            
            <p className="text-lg mb-6 text-foreground dark:text-gray-300">
              Working with clients ranging from startups to established brands, I bring strategic thinking
              and creative execution to every project. My approach combines conceptual thinking with
              technical expertise to create work that resonates and engages.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              {skills.map((skill, index) => <div key={index} className="flex items-center font-mono">
                  <div className="bg-primary/20 p-1 rounded-full mr-3">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span>{skill}</span>
                </div>)}
            </div>
          </motion.div>
          
          <div className="relative">
            <motion.div initial={{
            opacity: 0,
            scale: 0.9
          }} whileInView={{
            opacity: 1,
            scale: 1
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="relative z-10">
              <img src="https://images.unsplash.com/photo-1587613864521-9ef8dfe617cc?auto=format&fit=crop&w=800&q=80" alt="About me" className="w-full rounded-lg shadow-xl" />
            </motion.div>
            
            <div className="absolute top-0 right-0 transform translate-x-8 -translate-y-8 w-full h-full border-2 border-primary rounded-lg -z-10"></div>
          </div>
        </div>
        
        <div className="mt-24">
          <h3 className="text-2xl font-mono font-bold mb-12 text-center md:text-xl">
            function <span className="text-gradient glitch glitch-intense" data-text="witness.logs">witness.logs</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[{
            title: "Creative Direction",
            description: "Guiding visual direction for campaigns and branding projects from concept to execution."
          }, {
            title: "Photography",
            description: "Editorial, commercial and narrative photography with a focus on mood and storytelling."
          }, {
            title: "Graphic Design",
            description: "Brand identity, editorial design, digital products, and visual systems."
          }].map((service, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6,
            delay: index * 0.1
          }}>
                <Card className="h-full bg-secondary border-none shadow-lg">
                  <CardContent className="p-6">
                    <h4 className="text-xl font-mono font-bold mb-3">{service.title}</h4>
                    <p className="text-foreground dark:text-gray-300">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>)}
          </div>
        </div>
      </div>
    </section>;
};

export default About;
