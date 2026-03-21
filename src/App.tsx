import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import Worship from "./pages/Worship";
import Visit from "./pages/Visit";
import History from "./pages/History";
import Community from "./pages/Community";
import SupportUs from "./pages/SupportUs";
import Contact from "./pages/Contact";
import BaptismsWeddingsFunerals from "./pages/BaptismsWeddingsFunerals";
import ChurchInterior from "./pages/ChurchInterior";
import TheOrgan from "./pages/TheOrgan";
import HistoricRotherhithe from "./pages/HistoricRotherhithe";
import TheMayflower from "./pages/TheMayflower";
import Donate from "./pages/Donate";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/worship" element={<Worship />} />
          <Route path="/worship/baptisms-weddings-funerals" element={<BaptismsWeddingsFunerals />} />
          <Route path="/visit" element={<Visit />} />
          <Route path="/visit/the-church-interior" element={<ChurchInterior />} />
          <Route path="/visit/the-organ" element={<TheOrgan />} />
          <Route path="/history" element={<History />} />
          <Route path="/history/historic-rotherhithe" element={<HistoricRotherhithe />} />
          <Route path="/history/the-mayflower" element={<TheMayflower />} />
          <Route path="/community" element={<Community />} />
          <Route path="/support-us" element={<SupportUs />} />
          <Route path="/support-us/donate" element={<Donate />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
