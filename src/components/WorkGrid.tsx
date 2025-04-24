
import { useState } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

// Sample portfolio items (replace with your actual projects)
const portfolioItems = [
  {
    id: 1,
    title: "Urban Perspective",
    category: "photography",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
    description: "Urban architecture photography series"
  },
  {
    id: 2,
    title: "Brand Redesign",
    category: "design",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80",
    description: "Complete visual identity for tech startup"
  },
  {
    id: 3,
    title: "Fashion Campaign",
    category: "direction",
    image: "https://images.unsplash.com/photo-1605310537282-96e590498a5e?auto=format&fit=crop&w=800&q=80",
    description: "Creative direction for seasonal campaign"
  },
  {
    id: 4,
    title: "Product Series",
    category: "photography",
    image: "https://images.unsplash.com/photo-1502982720700-bfff97f2ecac?auto=format&fit=crop&w=800&q=80",
    description: "Minimalist product photography"
  },
  {
    id: 5,
    title: "Editorial Layout",
    category: "design",
    image: "https://images.unsplash.com/photo-1616628188524-413f8a0a8789?auto=format&fit=crop&w=800&q=80",
    description: "Magazine layout and typography design"
  },
  {
    id: 6,
    title: "Music Video",
    category: "direction",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=800&q=80",
    description: "Creative direction for indie band"
  },
];

const WorkGrid = () => {
  const [filter, setFilter] = useState("all");
  
  const filteredItems = filter === "all" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter);

  return (
    <section id="work" className="py-24 px-4 bg-secondary">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-center">
          Featured <span className="text-gradient">Work</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A selection of my projects across creative direction, photography, and design.
        </p>
        
        <Tabs defaultValue="all" className="mb-12">
          <TabsList className="grid grid-cols-4 max-w-md mx-auto">
            <TabsTrigger value="all" onClick={() => setFilter("all")}>All</TabsTrigger>
            <TabsTrigger value="direction" onClick={() => setFilter("direction")}>Direction</TabsTrigger>
            <TabsTrigger value="photography" onClick={() => setFilter("photography")}>Photography</TabsTrigger>
            <TabsTrigger value="design" onClick={() => setFilter("design")}>Design</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item) => (
                <PortfolioItem key={item.id} item={item} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="direction" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item) => (
                <PortfolioItem key={item.id} item={item} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="photography" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item) => (
                <PortfolioItem key={item.id} item={item} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="design" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item) => (
                <PortfolioItem key={item.id} item={item} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

interface PortfolioItemProps {
  item: {
    id: number;
    title: string;
    category: string;
    image: string;
    description: string;
  };
}

const PortfolioItem = ({ item }: PortfolioItemProps) => {
  return (
    <motion.div 
      className="portfolio-item rounded-lg overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="aspect-square relative">
        <img 
          src={item.image} 
          alt={item.title} 
          className="w-full h-full object-cover"
        />
        <div className="portfolio-item-overlay">
          <h3 className="text-2xl font-serif font-bold text-white mb-2">{item.title}</h3>
          <p className="text-primary uppercase tracking-wider text-sm mb-3">{item.category}</p>
          <p className="text-white/80 text-sm">{item.description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default WorkGrid;
</lov-add-dependency>framer-motion@latest</lov-add-dependency>

<lov-write file_path="src/components/About.tsx">
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const skills = [
  "Creative Direction",
  "Brand Strategy",
  "Photography",
  "Visual Identity Design",
  "Editorial Design",
  "Typography",
  "Art Direction",
  "Digital Design"
];

const About = () => {
  return (
    <section id="about" className="py-24 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              About <span className="text-gradient">Me</span>
            </h2>
            
            <p className="text-lg mb-6 text-muted-foreground">
              I'm a multidisciplinary creative with over 8 years of experience across creative direction,
              photography, and graphic design. My work is driven by a passion for visual storytelling
              and crafting meaningful brand experiences.
            </p>
            
            <p className="text-lg mb-6 text-muted-foreground">
              Working with clients ranging from startups to established brands, I bring strategic thinking
              and creative execution to every project. My approach combines conceptual thinking with
              technical expertise to create work that resonates and engages.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              {skills.map((skill, index) => (
                <div key={index} className="flex items-center">
                  <div className="bg-primary/20 p-1 rounded-full mr-3">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </motion.div>
          
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative z-10"
            >
              <img 
                src="https://images.unsplash.com/photo-1587613864521-9ef8dfe617cc?auto=format&fit=crop&w=800&q=80" 
                alt="About me" 
                className="w-full rounded-lg shadow-xl"
              />
            </motion.div>
            
            <div className="absolute top-0 right-0 transform translate-x-8 -translate-y-8 w-full h-full border-2 border-primary rounded-lg -z-10"></div>
          </div>
        </div>
        
        <div className="mt-24">
          <h3 className="text-2xl md:text-3xl font-serif font-bold mb-12 text-center">
            What I <span className="text-gradient">Offer</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Creative Direction",
                description: "Guiding visual direction for campaigns and branding projects from concept to execution."
              },
              {
                title: "Photography",
                description: "Editorial, commercial and narrative photography with a focus on mood and storytelling."
              },
              {
                title: "Graphic Design",
                description: "Brand identity, editorial design, digital products, and visual systems."
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full bg-secondary border-none shadow-lg">
                  <CardContent className="p-6">
                    <h4 className="text-xl font-serif font-bold mb-3">{service.title}</h4>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
