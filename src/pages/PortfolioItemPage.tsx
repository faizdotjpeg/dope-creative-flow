import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FileText, GalleryHorizontal, Video } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Navbar from '@/components/Navbar';

// Import portfolio items from WorkGrid to maintain single source of truth
import { portfolioItems } from '@/components/WorkGrid';

const PortfolioItemPage = () => {
  const { id } = useParams();
  const item = portfolioItems.find(item => item.id.toString() === id);

  if (!item) {
    return (
      <>
        <Navbar />
        <div className="container mx-auto py-20 px-4">
          <h1 className="text-2xl">Project not found</h1>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="container mx-auto py-20 px-4"
      >
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-4xl md:text-5xl font-serif mb-8"
        >
          {item.title}
        </motion.h1>

        <Tabs defaultValue="photos" className="w-full">
          <TabsList className="mb-8">
            <TabsTrigger value="photos">
              <GalleryHorizontal className="w-4 h-4 mr-2" />
              Photos
            </TabsTrigger>
            <TabsTrigger value="video">
              <Video className="w-4 h-4 mr-2" />
              Video
            </TabsTrigger>
            <TabsTrigger value="details">
              <FileText className="w-4 h-4 mr-2" />
              Details
            </TabsTrigger>
          </TabsList>

          <TabsContent value="photos" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {item.gallery?.map((imageUrl, index) => (
                <motion.div
                  key={index}
                  className="aspect-square bg-muted/20 rounded-lg overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <img
                    src={imageUrl}
                    alt={`${item.title} - Image ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.currentTarget.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Crect width='400' height='400' fill='%23${Math.random().toString(16).substr(2,6)}'/%3E%3Ctext x='200' y='200' text-anchor='middle' dy='0.3em' font-family='monospace' font-size='14' fill='white'%3E${item.title} - ${index + 1}%3C/text%3E%3C/svg%3E`;
                    }}
                  />
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="video" className="space-y-6">
            {item.video ? (
              <div className="aspect-video bg-muted/20 rounded-lg overflow-hidden">
                <iframe
                  src={item.video}
                  title={`${item.title} Video`}
                  className="w-full h-full"
                  allowFullScreen
                />
              </div>
            ) : (
              <div className="min-h-[400px] flex items-center justify-center bg-muted/20 rounded-lg">
                <div className="text-center">
                  <Video className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                  <p className="text-muted-foreground">Video content coming soon</p>
                </div>
              </div>
            )}
          </TabsContent>

          <TabsContent value="details" className="max-w-3xl space-y-8">
            <div className="space-y-6">
              <h2 className="text-3xl font-mono text-gradient-primary">[{item.title}]</h2>
              <p className="text-lg text-muted-foreground leading-relaxed font-mono">{item.fullDescription}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 bg-card rounded-lg border border-primary/20">
              <div>
                <h3 className="font-mono text-primary text-sm uppercase tracking-wider mb-2">client://</h3>
                <p className="font-mono font-semibold">{item.client}</p>
              </div>
              <div>
                <h3 className="font-mono text-primary text-sm uppercase tracking-wider mb-2">year://</h3>
                <p className="font-mono font-semibold">{item.year}</p>
              </div>
              <div>
                <h3 className="font-mono text-primary text-sm uppercase tracking-wider mb-2">role://</h3>
                <p className="font-mono font-semibold">{item.role}</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-mono">[ project.scope ]</h3>
              <p className="text-muted-foreground leading-relaxed font-mono">
                this.project challenged conventional.approaches by integrating cutting-edge creative.direction with strategic brand.positioning // 
                result: comprehensive creative.solution that elevated brand.perception and drove measurable engagement.metrics across all digital.platforms
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </motion.div>
    </>
  );
};

export default PortfolioItemPage;
