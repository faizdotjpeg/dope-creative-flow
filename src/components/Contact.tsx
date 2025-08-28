import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Instagram, Twitter, Linkedin } from "lucide-react";
import { z } from "zod";
import { useState } from "react";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(10, "Message must be at least 10 characters")
});

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    toast
  } = useToast();

  const validateField = (name: string, value: string) => {
    try {
      contactSchema.shape[name as keyof typeof contactSchema.shape].parse(value);
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    } catch (error) {
      if (error instanceof z.ZodError) {
        setErrors(prev => ({
          ...prev,
          [name]: error.errors[0].message
        }));
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    validateField(name, value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const validatedData = contactSchema.parse(formData);

      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      toast({
        title: "Message Sent",
        description: "Thank you for your message. I'll get back to you soon!"
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      setErrors({});
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.errors.forEach(err => {
          if (err.path[0]) {
            newErrors[err.path[0].toString()] = err.message;
          }
        });
        setErrors(newErrors);
        toast({
          title: "Error",
          description: "Please check the form for errors.",
          variant: "destructive"
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return <section id="contact" className="py-24 px-4 bg-primary/10">
      <div className="container mx-auto">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }} className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-mono font-bold mb-6 text-primary">
            [ ready.to.build.tomorrow? ]
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground/90 mb-4 leading-relaxed font-mono">
            let's.create.something.extraordinary // I partner with ambitious.brands to develop strategic creative.direction that drives measurable.results
          </p>
          <div className="flex justify-center space-x-8 text-sm text-primary font-mono">
            <span>✓ free.strategy.session</span>
            <span>✓ 48hr.response.time</span>
            <span>✓ project.based | retainer.available</span>
          </div>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div initial={{
          opacity: 0,
          x: -30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }}>
            <h3 className="text-2xl font-mono font-bold mb-6 text-primary">
              [ initiate.connection ]
            </h3>
            <p className="text-muted-foreground mb-6 font-mono">
              complete.form.below // I'll respond within 24hrs with personalized strategy.framework for your.brand
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Name
                  </label>
                  <Input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Your name" className={errors.name ? "border-destructive" : ""} required />
                  {errors.name && <p className="text-sm text-destructive mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Your email" className={errors.email ? "border-destructive" : ""} required />
                  {errors.email && <p className="text-sm text-destructive mt-1">{errors.email}</p>}
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-1 font-mono">
                  project.type://
                </label>
                <Input id="subject" name="subject" value={formData.subject} onChange={handleChange} placeholder="e.g., brand.strategy | campaign.development | visual.identity" className={errors.subject ? "border-destructive" : ""} required />
                {errors.subject && <p className="text-sm text-destructive mt-1">{errors.subject}</p>}
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1 font-mono">
                  project.details://
                </label>
                <Textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="tell.me.about your.brand + goals + timeline + budget.range // more.details = better.strategy.output" rows={5} className={errors.message ? "border-destructive" : ""} required />
                {errors.message && <p className="text-sm text-destructive mt-1">{errors.message}</p>}
              </div>
              
              <Button type="submit" size="lg" disabled={isSubmitting} className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-base font-medium py-4 font-mono glow-primary">
                {isSubmitting ? "transmitting.message..." : "execute://free.strategy.session"}
              </Button>
              <p className="text-xs text-muted-foreground mt-2 text-center font-mono">
                secure.transmission // your.data is.encrypted and.protected
              </p>
            </form>
          </motion.div>
          
          <motion.div initial={{
          opacity: 0,
          x: 30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }} className="bg-card p-8 rounded-lg border border-primary/20 glow-primary">
            <h3 className="text-2xl font-mono font-bold mb-6 text-primary">
              [ why.collaborate.with.faiz? ]
            </h3>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <p className="text-sm text-muted-foreground font-mono">
                  <strong className="text-primary">strategic.approach:</strong> every.project begins with deep brand.analysis + market.research protocols
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <p className="text-sm text-muted-foreground font-mono">
                  <strong className="text-primary">proven.results:</strong> 50+ successful.campaigns with measurable ROI.improvements
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <p className="text-sm text-muted-foreground font-mono">
                  <strong className="text-primary">full.partnership:</strong> from strategy.phase to execution.deployment // I'm.with.you at.every.step
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-primary text-lg font-medium mb-2">Location</h4>
                <p className="text-muted-foreground">New York, NY</p>
              </div>
              
              <div>
                <h4 className="text-primary text-lg font-medium mb-2 font-mono">direct.contact://</h4>
                <a href="mailto:hello@faiz-creative.com" className="text-foreground hover:text-primary transition-colors font-mono">hello@faiz-creative.com</a>
                <p className="text-sm text-muted-foreground mt-1 font-mono">response.time: under.24hrs</p>
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
            
            <div className="mt-8 p-6 border border-primary/30 rounded-lg bg-primary/10 glow-primary">
              <h4 className="text-lg font-medium mb-3 text-primary font-mono">[ status: accepting.new.projects ]</h4>
              <p className="text-muted-foreground text-sm mb-2 font-mono">next.availability: january.2025</p>
              <p className="text-muted-foreground text-sm font-mono">project.minimums: start.at.$10K</p>
              <div className="mt-4 flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span className="text-xs text-primary font-mono">taking.bookings.now</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};

export default Contact;
