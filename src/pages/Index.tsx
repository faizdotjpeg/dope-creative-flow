
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WorkGrid from "@/components/WorkGrid";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useEffect } from "react";

const Index = () => {
  // Handle hash navigation with smooth scrolling
  useEffect(() => {
    // Check if URL has a hash on initial page load
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 500); // Slight delay to allow page to render fully
      }
    }
  }, []);

  return (
    <motion.div 
      className="min-h-screen flex flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Navbar />
      <main className="flex-grow">
        <section id="home">
          <Hero />
        </section>
        <section id="work" className="scroll-mt-16 md:scroll-mt-24">
          <WorkGrid />
        </section>
        <section id="about" className="scroll-mt-16 md:scroll-mt-24">
          <About />
        </section>
        <Testimonials />
        <section id="contact" className="scroll-mt-16 md:scroll-mt-24">
          <Contact />
        </section>
      </main>
      <Footer />
    </motion.div>
  );
};

export default Index;
