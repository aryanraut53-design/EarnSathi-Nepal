import { Star } from 'lucide-react';
import { motion, useAnimationControls } from 'motion/react';
import { useState, useEffect } from 'react';

export default function Testimonials() {
  const [isPaused, setIsPaused] = useState(false);
  const controls = useAnimationControls();

  useEffect(() => {
    if (isPaused) {
      controls.stop();
    } else {
      controls.start({
        x: ["0%", "-50%"],
        transition: {
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }
      });
    }
  }, [isPaused, controls]);
  const reviews = [
    {
      initials: "SR",
      name: "Sita R.",
      role: "Verified User",
      quote: "The unified wallet is fantastic. Everything is tracked in real-time, and my payouts to eSewa were processed automatically.",
      rating: 5,
      color: "bg-gradient-to-br from-indigo-500 to-purple-600 text-white"
    },
    {
      initials: "BT",
      name: "Bikash T.",
      role: "Platform Member",
      quote: "Unlike other survey platforms, the gamification here is actually engaging. Smooth UI and no aggressive popup ads.",
      rating: 5,
      color: "bg-gradient-to-br from-blue-500 to-indigo-600 text-white"
    },
    {
      initials: "PS",
      name: "Pooja S.",
      role: "Verified User",
      quote: "Redeemed my first Khalti voucher yesterday. The transparency in the audit logs gave me a lot of confidence in the platform's security.",
      rating: 5,
      color: "bg-gradient-to-br from-rose-400 to-orange-500 text-white"
    },
    {
      initials: "NK",
      name: "Nabin K.",
      role: "Platform Member",
      quote: "The micro-tasks load instantly, and the daily streak system keeps me coming back. Best reward ecosystem available right now.",
      rating: 5,
      color: "bg-gradient-to-br from-emerald-400 to-teal-500 text-white"
    }
  ];

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 relative overflow-hidden transition-colors">
      {/* Background glow */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20 px-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-widest mb-4 rounded-full transition-colors">
            Community Trust
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 tracking-tight transition-colors">
            Loved by Users
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed transition-colors">
            Join thousands who are experiencing a transparent, rewarding ecosystem.
          </p>
        </div>

        <div className="relative py-10 -mx-6 px-6">
          {/* Edge gradients for smooth fading */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-50 dark:from-slate-900 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-50 dark:from-slate-900 to-transparent z-10 pointer-events-none" />
          
          <div className="overflow-hidden">
            <motion.div 
              className="flex gap-8 w-max"
            animate={controls}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onClick={() => setIsPaused(!isPaused)}
            style={{ display: 'flex' }}
          >
            {/* Double the list for infinite effect */}
            {[...reviews, ...reviews].map((review, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10, scale: 1.02 }}
                className="w-[300px] sm:w-[350px] flex-shrink-0 bg-white dark:bg-white/5 backdrop-blur-md p-8 rounded-[2rem] border border-slate-200 dark:border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-2xl flex flex-col hover:bg-slate-50 dark:hover:bg-white/[0.07] hover:border-slate-300 dark:hover:border-white/20 transition-colors cursor-pointer group h-full"
              >
                <div className="flex gap-1.5 mb-6">
                  {[...Array(5)].map((_, j) => (
                    <Star 
                      key={j}
                      className={`w-4 h-4 ${j < review.rating ? 'fill-yellow-400 text-yellow-400' : 'fill-slate-300 dark:fill-slate-600 text-slate-300 dark:text-slate-600'}`} 
                    />
                  ))}
                </div>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-8 flex-1 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                  "{review.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-sm shadow-inner ${review.color}`}>
                    {review.initials}
                  </div>
                  <div>
                    <h4 className="text-slate-900 dark:text-white font-bold text-sm leading-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-200 transition-colors">{review.name}</h4>
                    <span className="text-indigo-600 dark:text-indigo-400 text-xs font-medium transition-colors">{review.role}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);
}
