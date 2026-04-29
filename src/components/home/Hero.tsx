import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Download, ShieldCheck, Star, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import MadeInNepal from '../common/MadeInNepal';

export default function Hero() {
  const [isLoading, setIsLoading] = useState(false);

  const handleDownloadClick = (e: React.MouseEvent) => {
    setIsLoading(true);
    // Simulate a brief loading state before starting the "download" (navigation)
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };

  const scrollToInstall = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById('install-guide');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative overflow-hidden bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 transition-colors">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-100/50 via-slate-50 to-slate-50 dark:from-brand-900/20 dark:via-slate-950 dark:to-slate-950 transition-colors" />
      
      <div className="container mx-auto px-4 max-w-7xl pt-16 pb-20 md:pt-24 md:pb-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-0 items-stretch bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-800 transition-colors relative">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="col-span-1 lg:col-span-7 flex flex-col justify-center p-6 sm:p-8 lg:p-12 relative"
          >
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="hidden md:flex absolute right-4 lg:right-0 top-1/2 -translate-y-1/2 z-20 flex-col items-center gap-4 p-4 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md rounded-2xl border border-slate-200 dark:border-slate-700 shadow-2xl"
            >
            </motion.div>

            <div className="flex flex-wrap items-center gap-3 mb-8 relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-brand-50 dark:bg-brand-900/10 text-brand-700 dark:text-brand-400 text-[10px] sm:text-xs font-bold uppercase tracking-wider rounded-full border border-brand-100 dark:border-brand-800 shadow-sm transition-all hover:bg-brand-100 dark:hover:bg-brand-900/20">
                <span className="flex h-2 w-2 rounded-full bg-brand-500 animate-pulse"></span>
                <span>Trusted by 5,000+ Users</span>
              </div>
              <MadeInNepal />
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-[1.05] mb-8 tracking-tight text-slate-900 dark:text-white">
              Earn Real Rewards <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-indigo-600 dark:from-brand-400 dark:to-indigo-400"> 
                in Nepal.
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-xl leading-relaxed">
              Experience the premium gamified reward platform. Spin, scratch, and quiz your way to rewards. Withdraw instantly to <span className="font-bold text-slate-900 dark:text-white underline decoration-brand-500/30">eSewa or Khalti</span>.
            </p>

            <div className="flex flex-col gap-4 mb-10">
              <div className="relative group w-full sm:w-max">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={isLoading ? "loading" : "idle"}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute -inset-1 bg-gradient-to-r from-brand-600 to-indigo-600 rounded-2xl blur opacity-25 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"
                  ></motion.div>
                </AnimatePresence>
                <Link
                  to={isLoading ? "#" : "/download"}
                  onClick={handleDownloadClick}
                  className={`relative w-full sm:w-max ${isLoading ? 'bg-brand-500' : 'bg-brand-600'} text-white text-lg sm:text-xl font-bold py-5 px-10 rounded-2xl shadow-xl shadow-brand-600/20 hover:bg-brand-700 active:scale-[0.98] transition-all duration-300 flex flex-col sm:flex-row items-center justify-center gap-3 overflow-hidden group`}
                >
                  <motion.div
                    className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out"
                    initial={false}
                  />
                  {isLoading ? (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex items-center gap-3"
                    >
                      <Loader2 className="w-6 h-6 animate-spin" />
                      <span>Preparing Download...</span>
                    </motion.div>
                  ) : (
                    <>
                      <Download className="w-6 h-6 group-hover:scale-110 transition-transform relative z-10" />
                      <span className="text-center relative z-10">
                        Download EarnSathi APK <span className="text-brand-300 font-normal text-xs sm:text-sm ml-1 block sm:inline">(v1.0.0 &middot; 24 MB)</span>
                      </span>
                    </>
                  )}
                </Link>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-400 font-medium ml-2">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span>Verified Safe & Sideloading Enabled</span>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Security Verified</span>
                <div className="flex items-center flex-wrap gap-4">
                  <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                    <span className="text-xs font-bold dark:text-slate-300">VirusTotal: 0/68</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700">
                    <span className="text-xs font-bold dark:text-slate-300">🔒 SSL Secured</span>
                  </div>
                </div>
              </div>
              <div className="hidden sm:block h-10 w-[1px] bg-slate-200 dark:bg-slate-700 mx-2"></div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Payout Partners</span>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5 font-extrabold text-[#60bb46] bg-[#60bb46]/10 px-3 py-1.5 rounded-lg border border-[#60bb46]/20 shadow-sm hover:shadow-md hover:bg-[#60bb46]/15 hover:border-[#60bb46]/30 transition-all hover:-translate-y-0.5 duration-300 cursor-default">
                    eSewa
                  </div>
                  <div className="flex items-center gap-1.5 font-extrabold text-[#5c2d91] dark:text-[#844ece] bg-[#5c2d91]/10 dark:bg-[#844ece]/10 px-3 py-1.5 rounded-lg border border-[#5c2d91]/20 dark:border-[#844ece]/20 shadow-sm hover:shadow-md hover:bg-[#5c2d91]/15 dark:hover:bg-[#844ece]/15 hover:border-[#5c2d91]/30 dark:hover:border-[#844ece]/30 transition-all hover:-translate-y-0.5 duration-300 cursor-default">
                    Khalti
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="col-span-1 lg:col-span-5 bg-brand-50 dark:bg-brand-950/20 relative flex items-center justify-center p-8 lg:p-12 border-t lg:border-t-0 lg:border-l border-brand-100 dark:border-brand-900/50 overflow-hidden"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] pb-[120%] bg-gradient-to-tr from-brand-200 dark:from-brand-800 to-indigo-100 dark:to-indigo-900 rounded-full blur-[80px] opacity-60 dark:opacity-40 z-0"></div>
            
            {/* Abstract Feature Composition */}
            <div className="relative z-10 w-full max-w-sm flex flex-col gap-6">
              
              {/* Feature Box 1: Unified Wallet */}
              <motion.div 
                animate={{
                  y: [0, -12, 0],
                  rotate: [0, 1, 0, -1, 0]
                }} 
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl p-6 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none border border-white dark:border-slate-700 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 opacity-5">
                  <ShieldCheck className="w-24 h-24 text-brand-900 dark:text-brand-100" />
                </div>
                <div className="flex items-center justify-between mb-4 relative z-10">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Unified Wallet</span>
                  <div className="flex gap-1">
                    <span className="w-2 h-2 rounded-full bg-green-500"></span>
                    <span className="w-2 h-2 rounded-full bg-slate-200 dark:bg-slate-700"></span>
                  </div>
                </div>
                <div className="flex items-baseline gap-2 mb-2 relative z-10">
                  <span className="text-4xl font-black text-slate-900 dark:text-white tracking-tight">12,450</span>
                  <span className="text-brand-500 font-bold text-sm tracking-wide">Points</span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium relative z-10 flex items-center gap-1">
                  <span className="text-green-500 font-bold">↑ Status: Encrypted & Synched</span>
                </p>
              </motion.div>

              <div className="flex gap-6 relative z-10">
                {/* Feature Box 2: Gamification */}
                <motion.div 
                  animate={{
                    y: [0, 12, 0],
                    rotate: [0, -1, 0, 1, 0]
                  }} 
                  transition={{
                    duration: 9,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                  className="bg-brand-50 dark:bg-slate-800/90 flex-1 p-5 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.12)] flex flex-col justify-between border border-brand-100 dark:border-slate-700 transition-colors"
                >
                  <div className="w-10 h-10 rounded-2xl bg-brand-100 dark:bg-brand-500/20 flex items-center justify-center mb-6 transition-colors">
                    <Star className="w-5 h-5 text-brand-600 dark:text-brand-400 transition-colors" />
                  </div>
                  <div>
                    <h4 className="text-slate-900 dark:text-white font-bold text-sm mb-1 transition-colors">Gamified Tasks</h4>
                    <p className="text-slate-600 dark:text-slate-400 text-[10px] font-medium leading-relaxed transition-colors">Spin, Scratch & Quiz</p>
                  </div>
                </motion.div>

                {/* Feature Box 3: Instant Payouts */}
                <motion.div 
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 1, 0, -1, 0]
                  }} 
                  transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1.2
                  }}
                  className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl flex-1 p-5 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none border border-white dark:border-slate-700 flex flex-col justify-between"
                >
                  <div className="w-10 h-10 rounded-2xl bg-green-50 dark:bg-green-900/30 flex items-center justify-center mb-6 border border-green-100 dark:border-green-800">
                    <span className="text-green-600 dark:text-green-400 font-bold text-lg">रु</span>
                  </div>
                  <div>
                    <h4 className="text-slate-900 dark:text-white font-bold text-sm mb-1">Instant Payout</h4>
                    <p className="text-slate-500 dark:text-slate-400 text-[10px] font-medium leading-relaxed">eSewa & Khalti</p>
                  </div>
                </motion.div>
              </div>
            </div>
            
            {/* Background floating blur element */}
            <div className="absolute top-10 right-10 w-20 h-20 bg-brand-400 rounded-full blur-3xl opacity-20"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
