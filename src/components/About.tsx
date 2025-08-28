
import { motion } from "framer-motion";
import SkillSet from "./SkillSet";
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

            <SkillSet skills={skills} />
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
              <img src="/assets/images/f27a3cb1-127f-486c-9779-9ef5dee4f040.png" alt="About me" className="w-full rounded-lg shadow-xl object-cover" />
            </motion.div>
            
            <div className="absolute top-0 right-0 transform translate-x-8 -translate-y-8 w-full h-full border-2 border-primary rounded-lg -z-10"></div>
          </div>
        </div>
      </div>
    </section>;
};

export default About;
