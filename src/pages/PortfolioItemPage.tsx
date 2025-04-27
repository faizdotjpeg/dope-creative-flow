
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FileText, GalleryHorizontal, Video } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Import portfolio items from WorkGrid to maintain single source of truth
import { portfolioItems } from '@/components/WorkGrid';

const PortfolioItemPage = () => {
  const { id } = useParams();
  const item = portfolioItems.find(item => item.id.toString() === id);

  if (!item) {
    return (
      <div className="container mx-auto py-20 px-4">
        <h1 className="text-2xl">Project not found</h1>
      </div>
    );
  }

  return (
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

        <TabsContent value="photos" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.img
              src={item.image}
              alt={item.title}
              className="w-full aspect-square object-cover rounded-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            />
            {/* Placeholder for more photos */}
          </div>
        </TabsContent>

        <TabsContent value="video" className="min-h-[400px] flex items-center justify-center bg-muted/30">
          <p className="text-muted-foreground">Video content coming soon</p>
        </TabsContent>

        <TabsContent value="details" className="max-w-2xl space-y-4">
          <h2 className="text-2xl font-serif">{item.title}</h2>
          <p className="text-muted-foreground">{item.description}</p>
          <div className="border-t pt-4 mt-8">
            <h3 className="font-medium mb-2">Project Details</h3>
            <p className="text-sm text-muted-foreground">Category: {item.category}</p>
          </div>
        </TabsContent>
      </Tabs>
    </motion.div>
  );
};

export default PortfolioItemPage;
