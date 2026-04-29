import { DownloadCloud, Settings, Wallet } from 'lucide-react';
import { motion } from 'motion/react';

export default function HowItWorks() {
  const steps = [
    {
      icon: <DownloadCloud className="w-8 h-8 text-indigo-600 dark:text-indigo-400 relative z-10 group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300" />,
      title: "Download Free",
      description: "Direct APK download. Bypassing heavy platform fees to pass 100% of rewards to you.",
      number: "01"
    },
    {
      icon: <Settings className="w-8 h-8 text-indigo-600 dark:text-indigo-400 relative z-10 group-hover:scale-110 group-hover:rotate-90 transition-all duration-500" />,
      title: "Play & Engage",
      description: "Complete daily quizzes, spin the fortune wheel, and unlock mystery boxes.",
      number: "02"
    },
    {
      icon: <Wallet className="w-8 h-8 text-indigo-600 dark:text-indigo-400 relative z-10 group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300" />,
      title: "Unified Wallet",
      description: "Real-time NPR conversion based on dynamic rates, with transparent audit logs.",
      number: "03"
    }
  ];

  return (
    <section id="how-it-works" className="py-24 md:py-32 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 relative overflow-hidden text-center sm:text-left transition-colors">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="max-w-2xl mx-auto sm:mx-0 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-widest mb-4 rounded-full shadow-sm border border-slate-100 dark:border-slate-700">
            Activation Flow
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">
            How The Ecosystem Works
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
            A frictionless onboarding experience. Start engaging with our high-fidelity micro-tasks and watch your wallet balance grow in real-time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-[50px] left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-transparent via-indigo-200 dark:via-indigo-900 to-transparent -z-10"></div>

          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="flex flex-col items-center sm:items-start group relative"
            >
              {/* Background Number Watermark */}
              <div className="absolute -top-6 sm:-top-10 left-1/2 -translate-x-1/2 sm:left-[-1.5rem] sm:translate-x-0 text-[80px] sm:text-[120px] font-black text-slate-900/5 dark:text-white/5 select-none -z-10 transition-transform group-hover:-translate-y-2 group-hover:text-indigo-900/5 dark:group-hover:text-indigo-100/5 duration-500">
                {step.number}
              </div>

              <div className="w-24 h-24 bg-white dark:bg-slate-800 rounded-3xl flex items-center justify-center mb-8 border border-slate-100 dark:border-slate-700 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none group-hover:shadow-[0_8px_30px_rgb(99,102,241,0.12)] transition-all duration-500 group-hover:-translate-y-1">
                {step.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">{step.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed max-w-sm sm:max-w-none">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
