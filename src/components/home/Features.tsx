import { Gift, HelpCircle, Medal, PlaySquare, Ticket, Focus } from 'lucide-react';
import { motion } from 'motion/react';

export default function Features() {
const FortuneWheelIcon = () => (
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className="w-8 h-8 group-hover:animate-[spin_3s_linear_infinite] transition-transform duration-500"
    >
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1" className="text-indigo-200 dark:text-indigo-800" />
      <path d="M12 2V12L17.5 4.5" fill="#6366f1" opacity="0.9" />
      <path d="M12 2V12L6.5 4.5" fill="#818cf8" opacity="0.8" />
      <path d="M12 22V12L17.5 19.5" fill="#4f46e5" opacity="0.9" />
      <path d="M12 22V12L6.5 19.5" fill="#6366f1" opacity="0.8" />
      <path d="M22 12H12L19.5 6.5" fill="#818cf8" opacity="0.9" />
      <path d="M22 12H12L19.5 17.5" fill="#4f46e5" opacity="0.8" />
      <path d="M2 12H12L4.5 6.5" fill="#6366f1" opacity="0.9" />
      <path d="M2 12H12L4.5 17.5" fill="#818cf8" opacity="0.8" />
      <circle cx="12" cy="12" r="2" fill="white" className="dark:fill-slate-900" stroke="currentColor" strokeWidth="1" />
      <path d="M12 2L10 4H14L12 2Z" fill="#f43f5e" transform="translate(0, -1)" />
    </svg>
  );

  const features = [
    {
      icon: <HelpCircle className="w-7 h-7 text-indigo-600 dark:text-indigo-400" />,
      title: "Daily Quiz",
      description: "Test your knowledge and earn points for every correct answer across various categories.",
      color: "bg-indigo-50 dark:bg-indigo-950/40"
    },
    {
      icon: <FortuneWheelIcon />,
      title: "Spin Wheel",
      description: "Fortune-based points distribution with intelligent server-side cooling-off periods.",
      color: "bg-indigo-50 dark:bg-indigo-950/40"
    },
    {
      icon: <Ticket className="w-7 h-7 text-indigo-600 dark:text-indigo-400" />,
      title: "Scratch Cards",
      description: "Reveal interactive surprise rewards instantly. Client-side throttling ensures fair play.",
      color: "bg-indigo-50 dark:bg-indigo-950/40"
    },
    {
      icon: <PlaySquare className="w-7 h-7 text-indigo-600 dark:text-indigo-400" />,
      title: "Watch Ads",
      description: "Integrated video rewards for consistent points generation seamlessly integrated into your feed.",
      color: "bg-indigo-50 dark:bg-indigo-950/40"
    },
    {
      icon: <Gift className="w-7 h-7 text-indigo-600 dark:text-indigo-400" />,
      title: "Mystery Box",
      description: "Claim your daily high-value variable rewards. Transparent empty/claimed state design.",
      color: "bg-indigo-50 dark:bg-indigo-950/40"
    },
    {
      icon: <Medal className="w-7 h-7 text-indigo-600 dark:text-indigo-400" />,
      title: "Achievements",
      description: "Earn beautiful emoji-based badges and bonus points for high lifetime activity.",
      color: "bg-indigo-50 dark:bg-indigo-950/40"
    }
  ];

  return (
    <section id="features" className="py-24 md:py-32 bg-white dark:bg-slate-950 relative transition-colors">
      {/* Decorative gradient */}
      <div className="absolute top-0 right-0 w-1/2 h-[500px] bg-gradient-to-l from-indigo-50/50 dark:from-indigo-900/10 to-transparent pointer-events-none transition-colors" />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20 flex flex-col items-center">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 bg-slate-900 dark:bg-slate-800 text-white text-[10px] sm:text-[11px] font-bold uppercase tracking-widest mb-6 rounded-full shadow-md">
            The Earning Action Grid
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 tracking-tight leading-[1.1] px-2 sm:px-0">
            Gamified <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">Engagement</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-base sm:text-lg leading-relaxed max-w-lg px-2 sm:px-0">
            Say goodbye to boring surveys. Earn money by playing games, scratching cards, and spinning the fortune wheel in an elegant UI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white dark:bg-slate-900 p-8 rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] hover:shadow-[0_20px_40px_rgb(99,102,241,0.08)] dark:hover:shadow-[0_20px_40px_rgb(99,102,241,0.05)] hover:-translate-y-1 transition-all duration-300 group flex flex-col items-start gap-6"
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 ${feature.color} border border-indigo-100 dark:border-indigo-900/50 shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white mb-3 text-xl">{feature.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
