import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import Worship from "./pages/Worship";
import Visit from "./pages/Visit";
import History from "./pages/History";

import SupportUs from "./pages/SupportUs";
import Contact from "./pages/Contact";
import ChurchInterior from "./pages/ChurchInterior";
import TheOrgan from "./pages/TheOrgan";
import HistoricRotherhithe from "./pages/HistoricRotherhithe";
import TheMayflower from "./pages/TheMayflower";
import PrinceLeeBoo from "./pages/PrinceLeeBoo";
import ManorOfRotherhithe from "./pages/ManorOfRotherhithe";
import TheParish from "./pages/TheParish";
import SeafarersMaritimeHeritage from "./pages/SeafarersMaritimeHeritage";
import Community from "./pages/Community";
import Safeguarding from "./pages/Safeguarding";
import CommunityLinks from "./pages/CommunityLinks";
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
          <Route path="/visit" element={<Visit />} />
          <Route path="/visit/the-church-interior" element={<ChurchInterior />} />
          <Route path="/visit/the-organ" element={<TheOrgan />} />
          <Route path="/history" element={<History />} />
          <Route path="/history/historic-rotherhithe" element={<HistoricRotherhithe />} />
          <Route path="/history/the-mayflower" element={<TheMayflower />} />
          <Route path="/history/prince-lee-boo" element={<PrinceLeeBoo />} />
          <Route path="/history/the-manor-of-rotherhithe" element={<ManorOfRotherhithe />} />
          <Route path="/history/the-parish" element={<TheParish />} />
          <Route path="/history/seafarers-maritime-heritage" element={<SeafarersMaritimeHeritage />} />
          
          <Route path="/community" element={<Community />} />
          <Route path="/community/safeguarding" element={<Safeguarding />} />
          <Route path="/community/community-links" element={<CommunityLinks />} />
          <Route path="/support-us" element={<SupportUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
