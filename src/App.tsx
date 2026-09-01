import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'sonner';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ScrollToTop } from '@/components/common/ScrollToTop';
import { BackToTopButton } from '@/components/common/BackToTopButton';
import { FloatingMobileCTA } from '@/components/common/FloatingMobileCTA';

// Pages
import { Home } from '@/pages/Home';
import { About } from '@/pages/About';
import { Training } from '@/pages/Training';
import { TrainingDetail } from '@/pages/TrainingDetail';
import { Services } from '@/pages/Services';
import { ServiceDetail } from '@/pages/ServiceDetail';
import { Security } from '@/pages/Security';
import { Credentials } from '@/pages/Credentials';
import { Gallery } from '@/pages/Gallery';
import { Contact } from '@/pages/Contact';
import { NotFound } from '@/pages/NotFound';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen selection:bg-brand-teal selection:text-white pb-16 md:pb-0">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/training" element={<Training />} />
            <Route path="/training/:slug" element={<TrainingDetail />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
            <Route path="/industries" element={<Navigate to="/services" replace />} />
            <Route path="/industries/:slug" element={<Navigate to="/services" replace />} />
            <Route path="/security" element={<Security />} />
            <Route path="/credentials" element={<Credentials />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <FloatingMobileCTA />
        <BackToTopButton />
      </div>
      <Toaster position="top-right" richColors />
    </BrowserRouter>
  );
};

export default App;
