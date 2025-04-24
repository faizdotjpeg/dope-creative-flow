
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Mail, Instagram, Twitter, Linkedin } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent",
        description: "Thank you for your message. I'll get back to you soon!",
      });
      
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-4 bg-secondary">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-mono font-bold mb-4">
            Let's <span className="text-gradient glitch-intense relative inline-block" data-text="Connect">Connect</span>
          </h2>
          <p className="text-muted-foreground">
            Interested in working together? I'm always open to discussing new projects, 
            creative ideas or opportunities to be part of your vision.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-serif font-bold mb-6">
              Get in Touch
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-1">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message"
                  rows={5}
                  required
                />
              </div>
              
              <Button type="submit" size="lg" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card p-8 rounded-lg"
          >
            <h3 className="text-2xl font-serif font-bold mb-6">
              Contact Information
            </h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-primary text-lg font-medium mb-2">Location</h4>
                <p className="text-muted-foreground">New York, NY</p>
              </div>
              
              <div>
                <h4 className="text-primary text-lg font-medium mb-2">Email Me</h4>
                <a href="mailto:hello@creative-portfolio.com" className="text-foreground hover:text-primary transition-colors">hello@creative-portfolio.com</a>
              </div>
              
              <div>
                <h4 className="text-primary text-lg font-medium mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  <a href="#" className="bg-background hover:bg-primary/20 transition-colors p-2 rounded-full">
                    <Instagram className="h-6 w-6" />
                  </a>
                  <a href="#" className="bg-background hover:bg-primary/20 transition-colors p-2 rounded-full">
                    <Twitter className="h-6 w-6" />
                  </a>
                  <a href="#" className="bg-background hover:bg-primary/20 transition-colors p-2 rounded-full">
                    <Linkedin className="h-6 w-6" />
                  </a>
                  <a href="#" className="bg-background hover:bg-primary/20 transition-colors p-2 rounded-full">
                    <Mail className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-4 border border-border rounded-lg bg-secondary">
              <h4 className="text-lg font-medium mb-2">Working Hours</h4>
              <p className="text-muted-foreground">Monday - Friday: 9am - 6pm</p>
              <p className="text-muted-foreground">Weekend: By appointment</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
