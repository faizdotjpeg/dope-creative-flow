
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/ThemeProvider";
import CustomCursor from "./components/CustomCursor";
import DigitalRain from "./components/DigitalRain";
import FilmGrain from "./components/FilmGrain";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PortfolioItemPage from "./pages/PortfolioItemPage";
import BrandPhotography from "./pages/BrandPhotography";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <CustomCursor />
        
        {/* Background Effects - Choose one: */}
        <DigitalRain intensity="light" opacity={0.12} />
        {/* <FilmGrain intensity="light" opacity={0.08} animated={true} /> */}
        
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/portfolio/:id" element={<PortfolioItemPage />} />
            <Route path="/services/brand-photography" element={<BrandPhotography />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
