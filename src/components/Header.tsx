import { Link } from 'react-router-dom';
import { Download, Moon, Sun } from 'lucide-react';
import { cn } from '../lib/utils';
import { useEffect, useState } from 'react';
import { useTheme } from './ThemeProvider';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
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
        scrolled
          ? 'bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-slate-200 dark:border-slate-800 shadow-sm py-3'
          : 'bg-transparent border-transparent py-5'
      )}
    >
      <div className="container mx-auto px-4 max-w-7xl flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <img src="/logo.png" alt="EarnSathi Logo" className="w-10 h-10 rounded-[10px] object-cover shadow-[0_2px_10px_rgba(0,0,0,0.08)] bg-white" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextElementSibling!.style.display = 'flex'; }} />
          <div className="hidden w-10 h-10 bg-brand-600 rounded-[10px] items-center justify-center text-white font-bold text-xl group-hover:bg-brand-700 transition-colors">
            E
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
            EarnSathi
          </span>
        </Link>

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

        <div className="flex items-center gap-3 sm:gap-4">
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 hover:scale-105 active:scale-95 transition-all duration-200"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <Link
            to="/download"
            className="flex items-center gap-2 bg-slate-900 dark:bg-brand-600 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-slate-800 dark:hover:bg-brand-500 hover:-translate-y-0.5 active:scale-95 transition-all duration-200 shrink-0 shadow-sm hover:shadow-md"
          >
            <span>Install Guide &rarr;</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
