import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Camera, Users, Zap, Award, MapPin, Clock, DollarSign } from "lucide-react";
import { useEffect } from "react";

const BrandPhotography = () => {
  // SEO and structured data
  useEffect(() => {
    // Set page title and meta
    document.title = "Brand Photography Newport Beach | Corporate Headshots Orange County | Faiz Creative";
    
    // Add meta description
    const metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = 'Award-winning brand photographer serving Newport Beach, Irvine, and Orange County. Corporate headshots, executive portraits, and luxury brand photography for ambitious businesses and professionals.';
    document.head.appendChild(metaDescription);

    // Add structured data for local business
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Faiz Creative - Brand Photography",
      "description": "Professional brand photography and corporate headshots serving Orange County",
      "image": "https://dope-creative-flow.vercel.app/assets/images/f27a3cb1-127f-486c-9779-9ef5dee4f040.png",
      "telephone": "+1-555-FAIZ-PHOTO",
      "address": {
        "@type": "PostalAddress",
        "addressRegion": "CA",
        "addressLocality": "Orange County"
      },
      "areaServed": [
        "Newport Beach, CA",
        "Irvine, CA", 
        "Laguna Beach, CA",
        "Costa Mesa, CA",
        "Huntington Beach, CA"
      ],
      "serviceType": [
        "Brand Photography",
        "Corporate Headshots", 
        "Executive Portraits",
        "Business Photography",
        "Professional Photography"
      ],
      "priceRange": "$$$"
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(metaDescription);
      document.head.removeChild(script);
    };
  }, []);

  const services = [
    {
      icon: Camera,
      title: "executive.portraits",
      description: "premium headshots engineered for C-suite presence // optimized for LinkedIn authority + board-level credibility",
      features: ["4K image resolution", "Professional retouching", "Multiple outfit changes", "Same-day delivery"]
    },
    {
      icon: Users,
      title: "team.photography", 
      description: "corporate group dynamics captured with strategic precision // building visual cohesion across organizational hierarchies",
      features: ["Scalable team sessions", "Brand consistency protocols", "Multi-location coordination", "Custom formatting"]
    },
    {
      icon: Zap,
      title: "brand.content.systems",
      description: "visual asset libraries deployed for sustained marketing campaigns // content pipelines that scale with growth",
      features: ["Content calendar integration", "Multi-platform optimization", "Asset management system", "ROI tracking"]
    }
  ];

  const locations = [
    {
      name: "newport.beach",
      highlight: "luxury brand epicenter",
      venues: ["Fashion Island", "Balboa Island", "Corona del Mar", "Crystal Cove"]
    },
    {
      name: "irvine.business.district", 
      highlight: "corporate headquarters hub",
      venues: ["Irvine Spectrum", "UCI Research Park", "Business Complex", "Airport Area"]
    },
    {
      name: "laguna.beach",
      highlight: "creative executive retreat",
      venues: ["Main Beach", "Heisler Park", "Art District", "Coastal Cliffs"]
    }
  ];

  const portfolioHighlights = [
    "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 px-4 bg-gradient-to-br from-primary/5 via-background to-secondary/5 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-60 h-60 rounded-full bg-primary/20 blur-3xl animate-parallax-float"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-secondary/10 blur-3xl"></div>
        </div>

        <div className="container mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center space-y-8"
          >
            <div className="inline-block bg-primary/10 px-4 py-2 rounded-sm mb-6">
              <div className="text-primary font-mono text-sm tracking-widest">[ PHOTOGRAPHY.PROTOCOL.ACTIVE ]</div>
            </div>

            <h1 className="text-4xl md:text-6xl font-mono font-bold text-foreground mb-6">
              brand.photography
              <span className="block text-2xl md:text-3xl text-primary mt-2">
                [orange.county.deployment]
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-mono leading-relaxed">
              executive.presence.engineered // visual.authority.deployed // 
              <span className="text-primary">newport.beach → irvine.spectrum</span> // 
              corporate.storytelling.optimized
            </p>

            <div className="flex flex-wrap justify-center gap-4 text-sm font-mono">
              <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                <MapPin className="w-3 h-3 mr-1" />
                serving.oc.affluent.markets
              </Badge>
              <Badge variant="secondary" className="bg-secondary/20 text-secondary border-secondary/30">
                <Award className="w-3 h-3 mr-1" />
                10+.years.imaging.expertise
              </Badge>
              <Badge variant="secondary" className="bg-accent/20 text-accent border-accent/30">
                <Clock className="w-3 h-3 mr-1" />
                same.day.delivery.protocol
              </Badge>
            </div>

            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 pt-8">
              <a href="#contact" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto px-8 bg-primary hover:bg-primary/90 glow-primary">
                  execute://session.booking
                </Button>
              </a>
              <a href="#portfolio" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="w-full sm:w-auto px-8 border-primary/30 hover:bg-primary/10">
                  access://portfolio.archive
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-mono font-bold mb-6 text-primary">
              [ service.architecture ]
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-mono">
              systematic.approach to corporate.visual.identity // each.protocol.optimized for maximum.business.impact
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full bg-card border-primary/20 hover:border-primary/40 transition-all duration-300 glow-primary">
                  <CardContent className="p-6 space-y-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    
                    <h3 className="text-xl font-mono font-bold text-primary">
                      {service.title}
                    </h3>
                    
                    <p className="text-muted-foreground font-mono text-sm leading-relaxed">
                      {service.description}
                    </p>

                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Coverage */}
      <section className="py-24 px-4 bg-muted/20">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-mono font-bold mb-6 text-primary">
              [ geographic.deployment.zones ]
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-mono">
              strategic.coverage of orange.county's most.affluent.business.districts // premium.locations.optimized for executive.presence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <motion.div
                key={location.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="space-y-4"
              >
                <div className="text-center">
                  <h3 className="text-2xl font-mono font-bold text-foreground mb-2">
                    {location.name}
                  </h3>
                  <p className="text-primary font-mono text-sm tracking-wider">
                    // {location.highlight}
                  </p>
                </div>

                <div className="bg-card/50 rounded-lg p-6 border border-primary/20">
                  <h4 className="font-mono font-semibold text-sm text-muted-foreground mb-3 uppercase tracking-wider">
                    premium.venues:
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {location.venues.map((venue, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <div className="w-1 h-1 bg-primary rounded-full mr-2"></div>
                        <span className="text-muted-foreground">{venue}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-mono font-bold mb-6 text-primary">
              [ portfolio.samples ]
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-mono">
              visual.authority.delivered // executive.presence.optimized // brand.credibility.engineered
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {portfolioHighlights.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative aspect-square overflow-hidden rounded-lg border border-primary/20 hover:border-primary/40 transition-all duration-300"
              >
                <img
                  src={image}
                  alt={`Portfolio sample ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing & CTA */}
      <section className="py-24 px-4 bg-primary/10">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-mono font-bold text-primary">
              [ investment.parameters ]
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-card rounded-lg p-6 border border-primary/20">
                <div className="text-center space-y-3">
                  <DollarSign className="w-8 h-8 text-primary mx-auto" />
                  <h3 className="font-mono font-bold">executive.session</h3>
                  <p className="text-2xl font-mono text-primary">$850</p>
                  <p className="text-sm text-muted-foreground font-mono">individual.headshots + retouching</p>
                </div>
              </div>

              <div className="bg-card rounded-lg p-6 border border-primary/30 glow-primary">
                <div className="text-center space-y-3">
                  <Users className="w-8 h-8 text-primary mx-auto" />
                  <h3 className="font-mono font-bold">team.protocol</h3>
                  <p className="text-2xl font-mono text-primary">$2,500</p>
                  <p className="text-sm text-muted-foreground font-mono">up.to.10.executives + group.shots</p>
                </div>
              </div>

              <div className="bg-card rounded-lg p-6 border border-primary/20">
                <div className="text-center space-y-3">
                  <Zap className="w-8 h-8 text-primary mx-auto" />
                  <h3 className="font-mono font-bold">brand.system</h3>
                  <p className="text-2xl font-mono text-primary">$5,000+</p>
                  <p className="text-sm text-muted-foreground font-mono">comprehensive.content.library</p>
                </div>
              </div>
            </div>

            <div className="bg-card/80 rounded-lg p-8 border border-primary/30 glow-primary">
              <h3 className="text-2xl font-mono font-bold mb-4 text-primary">
                [ ready.to.optimize.your.executive.presence? ]
              </h3>
              <p className="text-muted-foreground mb-6 font-mono">
                strategic.consultation.included // same.day.turnaround.available // orange.county.premium.locations
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
                <a href="#contact" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full sm:w-auto px-8 bg-primary hover:bg-primary/90 glow-primary">
                    initialize://consultation
                  </Button>
                </a>
                <div className="text-center">
                  <p className="text-sm text-muted-foreground font-mono">
                    response.time: &lt;24.hours
                  </p>
                  <p className="text-xs text-primary font-mono">
                    serving.newport.beach → irvine.spectrum
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BrandPhotography;