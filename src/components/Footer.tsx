
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Instagram, Twitter, Linkedin, FileText } from "lucide-react";
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  const socialLinks = [{
    icon: <Instagram className="h-5 w-5" />,
    href: "https://instagram.com/yourcreative",
    label: "Instagram"
  }, {
    icon: <Twitter className="h-5 w-5" />,
    href: "https://twitter.com/yourcreative",
    label: "Twitter"
  }, {
    icon: <Linkedin className="h-5 w-5" />,
    href: "https://linkedin.com/in/yourcreative",
    label: "LinkedIn"
  }];
  return <footer className="py-12 px-4 border-t border-border">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <motion.a href="#" className="glitch-intense inline-block" data-text="PORTFOLIO" whileHover={{
            scale: 1.05
          }} transition={{
            type: "spring",
            stiffness: 400,
            damping: 10
          }}>{"> "}INITIATE /portfolio</motion.a>
            <p className="text-muted-foreground mt-2">
              Creative Director • Photographer • Designer
            </p>
          </div>

          <div className="flex items-center space-x-4 mb-6 md:mb-0">
            {socialLinks.map(link => <motion.a key={link.label} href={link.href} className="p-2 rounded-full bg-background hover:bg-primary/10 transition-colors" whileHover={{
            scale: 1.1
          }} whileTap={{
            scale: 0.95
          }} target="_blank" rel="noopener noreferrer" aria-label={link.label}>
                {link.icon}
              </motion.a>)}
            <motion.a href="/resume.pdf" className="flex items-center space-x-2 px-4 py-2 rounded-full bg-secondary/10 hover:bg-secondary/20 transition-colors" whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }} download>
              <FileText className="h-5 w-5" />
              <span>Resume</span>
            </motion.a>
          </div>

          <motion.button whileHover={{
          scale: 1.1
        }} whileTap={{
          scale: 0.95
        }} className="rounded-full p-2 bg-primary/10 hover:bg-primary/20 transition-colors" onClick={scrollToTop} aria-label="Scroll to top">
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {new Date().getFullYear()} Creative Portfolio. All rights reserved.
          </p>
          
          <nav>
            <ul className="flex items-center space-x-6">
              <li>
                <motion.a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors" whileHover={{
                y: -2
              }}>
                  Privacy Policy
                </motion.a>
              </li>
              <li>
                <motion.a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors" whileHover={{
                y: -2
              }}>
                  Terms of Service
                </motion.a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>;
};
export default Footer;
