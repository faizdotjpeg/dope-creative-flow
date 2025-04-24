
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Sample testimonials (replace with your actual client testimonials)
const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "Marketing Director, TechGlobal",
    quote: "Working with this creative team was transformative for our brand. Their vision elevated our identity far beyond expectations.",
    avatar: "https://randomuser.me/api/portraits/women/32.jpg"
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "CEO, Artisanal Studios",
    quote: "The attention to detail and creative direction brought our campaign to a completely new level. Truly remarkable work.",
    avatar: "https://randomuser.me/api/portraits/men/26.jpg"
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    position: "Brand Manager, Luxe Fashion",
    quote: "Their photography captured the essence of our collection in ways we never imagined possible. The results speak for themselves.",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    
    return () => clearTimeout(timer);
  }, [currentIndex]);
  
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Parallax background elements */}
      <div 
        className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"
        style={{ transform: `translate(50%, -50%) translateY(-${scrollY * 0.1}px)` }}
      ></div>
      <div 
        className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"
        style={{ transform: `translate(-30%, 50%) translateY(-${scrollY * 0.05}px)` }}
      ></div>
      
      <div className="container mx-auto relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12">
            Client <span className="text-gradient">Testimonials</span>
          </h2>
          
          <div className="relative h-80">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={testimonial.id}
                className="absolute top-0 left-0 w-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: index === currentIndex ? 1 : 0,
                  y: index === currentIndex ? 0 : 20,
                }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full overflow-hidden mb-6 border-2 border-primary">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <blockquote className="mb-6 relative text-xl font-sans">
                    <span className="absolute -top-6 -left-2 text-6xl text-primary/20">"</span>
                    <p className="relative z-10">{testimonial.quote}</p>
                    <span className="absolute -bottom-12 -right-2 text-6xl text-primary/20">"</span>
                  </blockquote>
                  
                  <div>
                    <h4 className="text-lg font-serif font-medium">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground font-sans">{testimonial.position}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${index === currentIndex ? 'bg-primary' : 'bg-muted'}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
