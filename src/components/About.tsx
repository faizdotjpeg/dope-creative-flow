import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const skills = [
  "Creative Direction",
  "Brand Strategy", 
  "Copywriting",
  "Photography", 
  "Visual Identity Design", 
  "Editorial Design", 
  "Typography", 
  "Art Direction", 
  "Digital Design"
];

const About = () => {
  return <section id="about" className="py-24 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
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
        }} className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-mono font-bold md:text-xl">
                <span className="text-gradient glitch relative inline-block" data-text="origin.story">[origin.protocol]</span>
              </h2>
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-mono text-primary">
                  </h3>
                  <div className="space-y-1">
                    <p className="text-lg font-mono">
                    </p>
                    <ul className="list-none space-y-1 font-mono text-base">
                      <li>
                      </li>
                      <li>↳ forged in CA, refined in NY</li>
                      <li>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-mono text-primary">
                  </h3>
                  <ul className="list-none space-y-2 text-base">
                    <li className="space-y-1">
                      <span className="font-mono text-primary/80">init: capture()</span>
                      <p>Began with a lens in hand, building 10+ years of imaging brand stories with precision and soul.</p>
                    </li>
                    <li className="space-y-1">
                      <span className="font-mono text-primary/80">init: wordsmith()</span>
                      <p>Sharpened my craft as an Arts/Entertainment journalist at [Daily Bruin], evolving into a strategic copywriter across platforms.</p>
                    </li>
                    <li className="space-y-1">
                      <span className="font-mono text-primary/80">deploy: brand.architecture</span>
                      <p>Transitioned into tech at [Snap Inc.], leading global product narratives through a hybrid of visual and written fluency.</p>
                    </li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-mono text-primary">[I ENGINEER]</h3>
                  <ul className="list-none space-y-1 font-mono text-base">
                    <li>• Radical [Creative + Art Direction]</li>
                    <li>• End-to-end [Brand Systems & Content Deployment]</li>
                    <li>• Scaled [Production Architectures]</li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-mono text-primary">[I EMPOWER]</h3>
                  <ul className="list-none space-y-1 text-base">
                    <li>↳ brands to materialize identities that resonate, disrupt, and convert.</li>
                    <li>↳ forging content pipelines that aren't just seen — they're felt.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <h3 className="text-xl font-mono mb-4 text-primary">[SKILL.SET]</h3>
              <div className="grid grid-cols-2 gap-3">
                {skills.map((skill, index) => <div key={index} className="flex items-center font-mono">
                    <div className="bg-primary/20 p-1 rounded-full mr-2">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <span>{skill}</span>
                  </div>)}
              </div>
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
              <img src="/lovable-uploads/f27a3cb1-127f-486c-9779-9ef5dee4f040.png" alt="About me" className="w-full rounded-lg shadow-xl object-cover" />
            </motion.div>
            
            <div className="absolute top-0 right-0 transform translate-x-8 -translate-y-8 w-full h-full border-2 border-primary rounded-lg -z-10"></div>
          </div>
        </div>
        
        <div className="mt-24">
          <h3 className="text-2xl font-mono font-bold mb-12 text-center md:text-xl">
            <span className="text-gradient glitch glitch-intense" data-text="witness.logs">
              function set []
            </span>
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
