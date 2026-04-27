import { Link } from 'react-router-dom';
import { Mail, ShieldCheck, Smartphone, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-50 dark:bg-slate-950 text-slate-600 dark:text-slate-400 py-16 text-sm border-t border-slate-200 dark:border-slate-900 relative overflow-hidden transition-colors">
      {/* Decorative gradient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-brand-100/50 dark:bg-brand-900/20 blur-[100px] pointer-events-none transition-colors" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          <div className="col-span-1 md:col-span-12 lg:col-span-5 relative">
            <Link to="/" className="flex items-center gap-3 mb-6 group inline-flex">
              <img src="/logo.png" alt="EarnSathi Logo" className="w-10 h-10 rounded-[10px] object-cover bg-white shadow-sm" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextElementSibling!.style.display = 'flex'; }} />
              <div className="hidden w-10 h-10 bg-brand-600 rounded-[10px] items-center justify-center text-white font-bold text-lg group-hover:bg-brand-500 transition-colors">
                E
              </div>
              <span className="font-bold text-2xl tracking-tight text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-100 transition-colors">
                EarnSathi
              </span>
            </Link>
            <p className="max-w-sm mb-8 text-slate-600 dark:text-slate-400 leading-relaxed text-base transition-colors">
              The premium gamified reward ecosystem in Nepal. Turn your digital engagement into real-world financial incentives seamlessly.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
               <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest bg-brand-50 dark:bg-brand-950/50 border border-brand-200 dark:border-brand-900/50 px-3 py-1.5 rounded-full transition-colors whitespace-nowrap">
                 <ShieldCheck className="w-4 h-4" /> Validated Ecosystem
               </div>
               <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest bg-red-50 dark:bg-red-950/20 border border-red-100 dark:border-red-900/20 px-3 py-1.5 rounded-full">
                 <Heart className="w-3 h-3 text-red-500 fill-red-500" /> Made in Nepal
               </div>
            </div>
          </div>

          <div className="col-span-1 md:col-span-4 lg:col-span-2 lg:col-start-7">
            <h4 className="text-slate-900 dark:text-white font-bold mb-6 tracking-wide uppercase text-xs transition-colors">Platform</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="hover:text-brand-600 dark:hover:text-brand-400 hover:underline underline-offset-4 transition-colors flex items-center gap-2 group"><div className="w-1 h-1 bg-slate-400 dark:bg-slate-700 group-hover:bg-brand-600 dark:group-hover:bg-brand-400 rounded-full transition-colors" /> About Us</Link></li>
              <li><a href="/#how-it-works" className="hover:text-brand-600 dark:hover:text-brand-400 hover:underline underline-offset-4 transition-colors flex items-center gap-2 group"><div className="w-1 h-1 bg-slate-400 dark:bg-slate-700 group-hover:bg-brand-600 dark:group-hover:bg-brand-400 rounded-full transition-colors" /> How It Works</a></li>
              <li><a href="/#features" className="hover:text-brand-600 dark:hover:text-brand-400 hover:underline underline-offset-4 transition-colors flex items-center gap-2 group"><div className="w-1 h-1 bg-slate-400 dark:bg-slate-700 group-hover:bg-brand-600 dark:group-hover:bg-brand-400 rounded-full transition-colors" /> Features</a></li>
              <li><a href="/#security" className="hover:text-brand-600 dark:hover:text-brand-400 hover:underline underline-offset-4 transition-colors flex items-center gap-2 group"><div className="w-1 h-1 bg-slate-400 dark:bg-slate-700 group-hover:bg-brand-600 dark:group-hover:bg-brand-400 rounded-full transition-colors" /> Security</a></li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-4 lg:col-span-2">
            <h4 className="text-slate-900 dark:text-white font-bold mb-6 tracking-wide uppercase text-xs transition-colors">Resources</h4>
            <ul className="space-y-4">
              <li><a href="/#install-guide" className="hover:text-brand-600 dark:hover:text-brand-400 hover:underline underline-offset-4 transition-colors flex items-center gap-2 group"><Smartphone className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" /> APK Install Guide</a></li>
              <li><Link to="/download" className="hover:text-brand-600 dark:hover:text-brand-400 hover:underline underline-offset-4 transition-colors flex items-center gap-2">Direct Download</Link></li>
              <li><Link to="/safety-regulations" className="hover:text-brand-600 dark:hover:text-brand-400 hover:underline underline-offset-4 transition-colors inline-block">App Safety Rules</Link></li>
              <li><a href="mailto:shadowcoretechnology@gmail.com" className="hover:text-brand-600 dark:hover:text-brand-400 hover:underline underline-offset-4 transition-colors flex items-center gap-2 group"><Mail className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" /> Support</a></li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-4 lg:col-span-2">
            <h4 className="text-slate-900 dark:text-white font-bold mb-6 tracking-wide uppercase text-xs transition-colors">Legal</h4>
            <ul className="space-y-4">
              <li><Link to="/privacy" className="hover:text-brand-600 dark:hover:text-brand-400 hover:underline underline-offset-4 transition-colors inline-block">Privacy Policy</Link></li>
              <li><Link to="/data-safety" className="hover:text-brand-600 dark:hover:text-brand-400 hover:underline underline-offset-4 transition-colors inline-block">Data Safety</Link></li>
              <li><Link to="/terms" className="hover:text-brand-600 dark:hover:text-brand-400 hover:underline underline-offset-4 transition-colors inline-block">Terms Conditions</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 dark:border-slate-800/60 flex flex-col items-center justify-between gap-6 md:flex-row transition-colors">
          <p className="text-slate-500 text-sm">© {new Date().getFullYear()} EarnSathi App. All rights reserved.</p>
          <p className="text-[10px] text-slate-500 dark:text-slate-600 max-w-lg text-center md:text-right leading-relaxed transition-colors">
            Disclaimer: EarnSathi is not affiliated with, endorsed, or sponsored by eSewa or Khalti. All product and company names are trademarks of their respective holders. 
          </p>
        </div>
      </div>
    </footer>
  );
}
