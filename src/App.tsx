import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Potions from "./pages/Potions";
import PotionDetail from "./pages/PotionDetail";
import Packs from "./pages/Packs";
import Contact from "./pages/Contact";
import Realisations from "./pages/Realisations";
import Blog from "./pages/Blog";
import BlogArticle from "./pages/BlogArticle";
import Carriere from "./pages/Carriere";
import NotFound from "./pages/NotFound";
import Devis from "./pages/Devis";
import MentionsLegales from "./pages/MentionsLegales";
import CGU from "./pages/CGU";
import CGS from "./pages/CGS";
import PolitiqueConfidentialite from "./pages/PolitiqueConfidentialite";
import { potions } from "./data/site";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner position="top-center" theme="light" />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/potions" element={<Potions />} />
          {potions.map((p) => (
            <Route key={p.slug} path={`/potions/${p.slug}`} element={<PotionDetail slug={p.slug} />} />
          ))}
          <Route path="/packs" element={<Packs />} />
          <Route path="/realisations" element={<Realisations />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogArticle />} />
          <Route path="/carriere" element={<Carriere />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/devis" element={<Devis />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          <Route path="/cgu" element={<CGU />} />
          <Route path="/cgs" element={<CGS />} />
          <Route path="/politique-confidentialite" element={<PolitiqueConfidentialite />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
