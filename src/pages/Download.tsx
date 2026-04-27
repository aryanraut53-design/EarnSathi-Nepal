import { Helmet } from 'react-helmet-async';
import { DownloadCloud, ArrowLeft, RefreshCw, ShieldCheck, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export default function Download() {
  const [downloading, setDownloading] = useState(false);

  // Replace this with your ACTUAL MediaFire direct download link
  const MEDIAFIRE_DIRECT_LINK = "https://download1350.mediafire.com/nyvv2ghx1q8g2UKt1esLLe4BQmGjrBD5Cos30_vAwlzoF7U4OdwTOsCKmU7IoxvVy-FmcfccND9_j2WUVPYSfyjGruNJ_QzcR_2T1Qr1-oihXCi5RwVl0eAyZA7BM5s0j_CW5h8gdEQkohPCBFqLxdHz3rgPJYV4FZRkrLGsGmlF/gr23jxrcfmgnrz8/EarnSathi+%28v1.0.0%29.apk"; 

  const startDownload = () => {
    setDownloading(true);
    
    if (MEDIAFIRE_DIRECT_LINK && (MEDIAFIRE_DIRECT_LINK as string) !== "#") {
      const link = document.createElement('a');
      link.href = MEDIAFIRE_DIRECT_LINK;
      link.setAttribute('download', 'EarnSathi_v1.0.0.apk');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      startDownload();
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Helmet>
        <title>Download EarnSathi APK - Free Rewards App Nepal</title>
      </Helmet>
      
      <div className="pt-24 pb-20 min-h-[80vh] flex items-center justify-center bg-slate-50 dark:bg-slate-950 transition-colors">
        <div className="container mx-auto px-4 max-w-lg text-center w-full">
          
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white dark:bg-slate-900 p-6 sm:p-12 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-800 transition-colors relative overflow-hidden"
          >
            
            <motion.div 
              whileHover={{ scale: 1.1 }}
              className="w-20 h-20 bg-brand-100 dark:bg-brand-900/30 rounded-full flex items-center justify-center mx-auto mb-6 shrink-0 relative transition-colors z-10"
            >
              {downloading ? (
                <RefreshCw className="w-10 h-10 text-brand-600 dark:text-brand-400 animate-spin" />
              ) : (
                <DownloadCloud className="w-10 h-10 text-brand-600 dark:text-brand-400 animate-bounce" />
              )}
            </motion.div>

            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Your Download is Starting...
            </h1>
            
            <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-sm mx-auto text-sm sm:text-base">
              EarnSathi v1.0.0 (Size: 63 MB). Ensure you have allowed "Install from Unknown Sources" in your settings.
            </p>

            <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700/50 rounded-xl mb-8 text-xs sm:text-sm text-yellow-800 dark:text-yellow-400 text-left flex gap-3 transition-colors">
              <span className="font-bold text-xl pt-0.5">!</span>
              <p>
                <strong className="dark:text-yellow-300">Security Notice:</strong> Your browser might show a standard warning for APK files. EarnSathi is 100% safe and checked by VirusTotal.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <button 
                onClick={startDownload}
                className="w-full bg-brand-600 dark:bg-brand-500 hover:bg-brand-700 dark:hover:bg-brand-400 text-white font-bold py-4 px-6 rounded-2xl shadow-xl shadow-brand-600/20 dark:shadow-none transition-all flex flex-col sm:flex-row items-center justify-center gap-2 group"
              >
                <DownloadCloud className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="text-sm sm:text-base">Click here if it didn't start</span>
              </button>

              <div className="flex flex-col items-center gap-2 mt-4">
                <div className="flex items-center gap-2 text-[10px] sm:text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Verified Safe by VirusTotal</span>
                </div>
                <a 
                  href="https://www.virustotal.com/gui/file-analysis/NGU4NDY5Y2JkOTNmYjM0YjQ5MjE5YmM0NGIzYmVhMWI6MTc3NzI4NTgxOQ==" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[10px] text-slate-400 hover:text-brand-500 transition-colors underline underline-offset-4"
                >
                  View Detailed Scan Report
                </a>
              </div>

              <div className="mt-8 pt-8 border-t border-slate-100 dark:border-slate-800">
                <div className="flex items-center justify-center gap-2 mb-6">
                  <Heart className="w-4 h-4 text-brand-500 fill-brand-500" />
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em]">Made in Nepal</span>
                </div>
                
                <Link to="/" className="inline-flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 font-medium transition-colors text-sm">
                  <ArrowLeft className="w-4 h-4" />
                  Return to Home
                </Link>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </>
  );
}
