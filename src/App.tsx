import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Potions from "./pages/Potions";
import Packs from "./pages/Packs";
import Contact from "./pages/Contact";
import Realisations from "./pages/Realisations";
import Blog from "./pages/Blog";
import Carriere from "./pages/Carriere";
import Identite from "./pages/potions/Identite";
import Strategie from "./pages/potions/Strategie";
import Digital from "./pages/potions/Digital";
import Diagnostic from "./pages/potions/Diagnostic";
import NotFound from "./pages/NotFound";
import Devis from "./pages/Devis";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/potions" element={<Potions />} />
          <Route path="/potions/identite" element={<Identite />} />
          <Route path="/potions/strategie" element={<Strategie />} />
          <Route path="/potions/digital" element={<Digital />} />
          <Route path="/potions/diagnostic" element={<Diagnostic />} />
          <Route path="/packs" element={<Packs />} />
          <Route path="/realisations" element={<Realisations />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/carriere" element={<Carriere />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/devis" element={<Devis />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
