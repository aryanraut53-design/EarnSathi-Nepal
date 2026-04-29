import { Link } from 'react-router-dom';
import { Download, Moon, Sun, Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';
import { useEffect, useState } from 'react';
import { useTheme } from './ThemeProvider';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = `/#${id}`;
    }
  };

  return (
    <header
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300 border-b',
        scrolled || mobileMenuOpen
          ? 'bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border-slate-200 dark:border-slate-800 shadow-sm py-3'
          : 'bg-transparent border-transparent py-5'
      )}
    >
      <div className="container mx-auto px-4 max-w-7xl flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group" onClick={() => setMobileMenuOpen(false)}>
          <img src="/logo.png" alt="EarnSathi Logo" className="w-10 h-10 rounded-[10px] object-cover shadow-[0_2px_10px_rgba(0,0,0,0.08)] bg-white" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextElementSibling!.style.display = 'flex'; }} />
          <div className="hidden w-10 h-10 bg-brand-600 rounded-[10px] items-center justify-center text-white font-bold text-xl group-hover:bg-brand-700 transition-colors">
            E
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
            EarnSathi
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600 dark:text-slate-300">
          <Link to="/about" className="group relative py-1 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
            About
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-brand-600 dark:bg-brand-400 transition-all duration-300 group-hover:w-full rounded-full"></span>
          </Link>
          <button onClick={() => scrollToSection('how-it-works')} className="group relative py-1 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
            How it Works
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-brand-600 dark:bg-brand-400 transition-all duration-300 group-hover:w-full rounded-full"></span>
          </button>
          <button onClick={() => scrollToSection('security')} className="group relative py-1 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
            Security
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-brand-600 dark:bg-brand-400 transition-all duration-300 group-hover:w-full rounded-full"></span>
          </button>
          <button onClick={() => scrollToSection('testimonials')} className="group relative py-1 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
            Reviews
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-brand-600 dark:bg-brand-400 transition-all duration-300 group-hover:w-full rounded-full"></span>
          </button>
        </nav>

        <div className="flex items-center gap-2 sm:gap-4">
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 hover:scale-105 active:scale-95 transition-all duration-200"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          
          <Link
            to="/download"
            className="hidden sm:flex items-center gap-2 bg-slate-900 dark:bg-brand-600 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-slate-800 dark:hover:bg-brand-500 hover:-translate-y-0.5 active:scale-95 transition-all duration-200 shrink-0 shadow-sm hover:shadow-md"
          >
            <span>Install Guide &rarr;</span>
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-200"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Content */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-slate-950/95 backdrop-blur-lg border-t border-slate-200 dark:border-slate-800 absolute top-full left-0 w-full p-6 flex flex-col gap-6 shadow-xl animate-in slide-in-from-top-4 duration-300">
          <nav className="flex flex-col gap-4 text-lg font-semibold text-slate-900 dark:text-white">
            <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="hover:text-brand-600 dark:hover:text-brand-400">About</Link>
            <button onClick={() => scrollToSection('how-it-works')} className="text-left hover:text-brand-600 dark:hover:text-brand-400">How it Works</button>
            <button onClick={() => scrollToSection('security')} className="text-left hover:text-brand-600 dark:hover:text-brand-400">Security</button>
            <button onClick={() => scrollToSection('testimonials')} className="text-left hover:text-brand-600 dark:hover:text-brand-400">Reviews</button>
            <Link to="/privacy" onClick={() => setMobileMenuOpen(false)} className="hover:text-brand-600 dark:hover:text-brand-400">Privacy Policy</Link>
          </nav>
          <Link
            to="/download"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-center gap-2 bg-brand-600 text-white px-8 py-4 rounded-2xl text-base font-bold shadow-lg shadow-brand-600/20 active:scale-95 transition-all"
          >
            <Download className="w-5 h-5" />
            <span>Download EarnSathi APK</span>
          </Link>
        </div>
      )}
    </header>
  );
}
