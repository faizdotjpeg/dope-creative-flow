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
            
            <p className="text-lg mb-6 text-foreground dark:text-gray-300">[ SYSTEM ONLINE ] [I AM] faiz [feyz] :: pronounced like 'phase' ↳ creative director | designer | photographer ↳ forged in CA, refined in NY ↳ immigrant-coded, future-loaded ⸻ [ORIGIN.PROTOCOL] init: capture() • Began with a lens in hand, building 10+ years of imaging brand stories with precision and soul. init: wordsmith() • Sharpened my craft as an Arts/Entertainment journalist at [Daily Bruin], evolving into a strategic copywriter across platforms. deploy: brand.architecture • Transitioned into tech at [Snap Inc.], leading global product narratives through a hybrid of visual and written fluency. execute: campaign.sprints • Photographed campaigns for world brands — [PUMA], [Foot Locker], [MVMT], [Komono] — merging high-performance visuals with cultural resonance. scale: creative.command • As Creative Director at [Asteroid Technologies], architected the brand ecosystem — from iOS product launch to digital presence. expand: multi-channel.strategy • Crossed into traditional advertising as a creative producer and digital strategist, driving multi-platform activations across industries. level-up: art.direction • Trained in advanced visual systems through [ELVTR] (Ogilvy cohort) and continued design architecture studies at [Parsons School of Design]. current.version • Operating as Associate Creative Director at a boutique multicultural agency, engineering creative that fuses narrative, visual architecture, and performance.</p>
            
            <p className="text-lg mb-6 text-foreground dark:text-gray-300">[I ENGINEER]
• Radical [Creative + Art Direction]
• End-to-end [Brand Systems & Content Deployment]
• Scaled [Production Architectures]

[I EMPOWER]
↳ brands to materialize identities that resonate, disrupt, and convert.
↳ forging content pipelines that aren’t just seen — they’re felt.

[ trust the signal ]</p>
            
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
              <img src="/lovable-uploads/f27a3cb1-127f-486c-9779-9ef5dee4f040.png" alt="About me" className="w-full rounded-lg shadow-xl object-cover" />
            </motion.div>
            
            <div className="absolute top-0 right-0 transform translate-x-8 -translate-y-8 w-full h-full border-2 border-primary rounded-lg -z-10"></div>
          </div>
        </div>
        
        <div className="mt-24">
          <h3 className="text-2xl font-mono font-bold mb-12 text-center md:text-xl">
            <span className="text-gradient glitch glitch-intense" data-text="witness.logs">function set [] </span>
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