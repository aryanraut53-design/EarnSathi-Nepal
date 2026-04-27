import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, ReactNode } from 'react';
import Lenis from 'lenis';
import Home from './pages/Home';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Download from './pages/Download';
import About from './pages/About';
import DataSafety from './pages/DataSafety';
import SafetyRegulations from './pages/SafetyRegulations';
import Header from './components/Header';
import Footer from './components/Footer';
import { ThemeProvider } from './components/ThemeProvider';
import { HelmetProvider } from 'react-helmet-async';
import { AnimatePresence, motion } from 'motion/react';
import ScrollToTop from './components/common/ScrollToTop';

const PageTransition = ({ children }: { children: ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.3, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

export default function App() {
  const location = useLocation();

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <HelmetProvider>
      <ThemeProvider defaultTheme="light" storageKey="earnsathi-theme">
        <ScrollToTop />
        <div className="min-h-screen flex flex-col font-sans dark:bg-slate-950 dark:text-slate-50 transition-colors duration-300">
          <Header />
          <main className="flex-1">
            <AnimatePresence mode="wait">
              <div key={location.pathname}>
                <Routes location={location}>
                  <Route path="/" element={<PageTransition><Home /></PageTransition>} />
                  <Route path="/privacy" element={<PageTransition><Privacy /></PageTransition>} />
                  <Route path="/terms" element={<PageTransition><Terms /></PageTransition>} />
                  <Route path="/download" element={<PageTransition><Download /></PageTransition>} />
                  <Route path="/about" element={<PageTransition><About /></PageTransition>} />
                  <Route path="/data-safety" element={<PageTransition><DataSafety /></PageTransition>} />
                  <Route path="/safety-regulations" element={<PageTransition><SafetyRegulations /></PageTransition>} />
                </Routes>
              </div>
            </AnimatePresence>
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    </HelmetProvider>
  );
}
