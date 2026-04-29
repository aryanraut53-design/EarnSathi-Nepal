import { Star, CheckCircle2, ThumbsUp, Clock } from 'lucide-react';
import { motion, useAnimationControls } from 'motion/react';
import { useState, useEffect } from 'react';

interface Review {
  initials: string;
  name: string;
  location: string;
  role: string;
  quote: string;
  rating: number;
  color: string;
  avatar: string;
  earnedAmount: string;
  timeOnPlatform: string;
  payoutMethod: 'eSewa' | 'Khalti';
  isVerified: boolean;
  date: string;
}

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
          duration: 50,
          repeat: Infinity,
          ease: "linear",
        }
      });
    }
  }, [isPaused, controls]);

  const reviews: Review[] = [
    {
      initials: "SR",
      name: "Sita Rai",
      location: "Kathmandu",
      role: "College Student",
      quote: "I was honestly skeptical at first — another \"earn money\" app, right? But my roommate showed me her eSewa balance and I had to try it. Been using it for 3 weeks now, already withdrew Rs. 450. The spin wheel is addictive ngl 😅",
      rating: 5,
      color: "bg-gradient-to-br from-indigo-500 to-purple-600 text-white",
      avatar: "https://i.pravatar.cc/96?u=sita-rai-ktm",
      earnedAmount: "Rs. 1,280",
      timeOnPlatform: "3 weeks",
      payoutMethod: "eSewa",
      isVerified: true,
      date: "2 days ago"
    },
    {
      initials: "BT",
      name: "Bikash Thapa",
      location: "Pokhara",
      role: "Freelancer",
      quote: "Finally an app that actually pays in Nepal. I've tried like 5-6 other apps before and they all had some catch or minimum withdrawal that's impossible to reach. EarnSathi let me withdraw to Khalti within my first week. The quiz section is fun too, feels like KBC 😂",
      rating: 5,
      color: "bg-gradient-to-br from-blue-500 to-indigo-600 text-white",
      avatar: "https://i.pravatar.cc/96?u=bikash-thapa-pkr",
      earnedAmount: "Rs. 3,750",
      timeOnPlatform: "2 months",
      payoutMethod: "Khalti",
      isVerified: true,
      date: "5 days ago"
    },
    {
      initials: "PS",
      name: "Pooja Sharma",
      location: "Biratnagar",
      role: "Housewife",
      quote: "My husband didn't believe me when I showed him the Khalti notification 😂 \"Kasle pathayo?\" he said. Now he also has the app installed. I do the scratch cards while watching TV in the evening. Easy pocket money for someone who stays home.",
      rating: 5,
      color: "bg-gradient-to-br from-rose-400 to-orange-500 text-white",
      avatar: "https://i.pravatar.cc/96?u=pooja-sharma-brt",
      earnedAmount: "Rs. 2,100",
      timeOnPlatform: "1 month",
      payoutMethod: "Khalti",
      isVerified: true,
      date: "1 week ago"
    },
    {
      initials: "NK",
      name: "Nabin Karki",
      location: "Butwal",
      role: "SLC Student",
      quote: "Bro this app is actually legit. My friends thought it was fake but I showed them my eSewa transaction history. The daily streak bonus is smart — missed one day and lost my 12-day streak tho, that hurt 💀 But still the best earning app I've found.",
      rating: 4,
      color: "bg-gradient-to-br from-emerald-400 to-teal-500 text-white",
      avatar: "https://i.pravatar.cc/96?u=nabin-karki-btl",
      earnedAmount: "Rs. 890",
      timeOnPlatform: "3 weeks",
      payoutMethod: "eSewa",
      isVerified: true,
      date: "3 days ago"
    },
    {
      initials: "AG",
      name: "Anita Gurung",
      location: "Chitwan",
      role: "Shop Owner",
      quote: "I run a small cosmetics shop and use this app during free time. It's not going to make you rich, but Rs 200-300 extra per week for doing quizzes and spinning the wheel? That's my tea and momo money sorted 😄 Withdrawal was instant to eSewa.",
      rating: 5,
      color: "bg-gradient-to-br from-amber-400 to-orange-500 text-white",
      avatar: "https://i.pravatar.cc/96?u=anita-gurung-ctw",
      earnedAmount: "Rs. 1,650",
      timeOnPlatform: "6 weeks",
      payoutMethod: "eSewa",
      isVerified: true,
      date: "4 days ago"
    },
    {
      initials: "RD",
      name: "Rajan Dangol",
      location: "Lalitpur",
      role: "IT Student",
      quote: "What I appreciate most is the transparency. You can literally see the audit logs for every point you earn. No shady stuff. I checked the APK on VirusTotal myself before installing — 0 detections. These guys are doing it properly. Respect 🙏",
      rating: 5,
      color: "bg-gradient-to-br from-cyan-500 to-blue-600 text-white",
      avatar: "https://i.pravatar.cc/96?u=rajan-dangol-ltp",
      earnedAmount: "Rs. 4,200",
      timeOnPlatform: "3 months",
      payoutMethod: "Khalti",
      isVerified: true,
      date: "1 day ago"
    },
    {
      initials: "SM",
      name: "Sunita Magar",
      location: "Dharan",
      role: "Nurse",
      quote: "Night shift maa boring huncha so I started using EarnSathi. The mystery box is so exciting — got 500 bonus points once! Khalti withdrawal came in literally 2 minutes. My colleagues are all downloading it now after seeing mine 😊",
      rating: 5,
      color: "bg-gradient-to-br from-pink-500 to-rose-600 text-white",
      avatar: "https://i.pravatar.cc/96?u=sunita-magar-dhr",
      earnedAmount: "Rs. 2,800",
      timeOnPlatform: "2 months",
      payoutMethod: "Khalti",
      isVerified: true,
      date: "6 days ago"
    },
    {
      initials: "DP",
      name: "Dipesh Poudel",
      location: "Hetauda",
      role: "Teacher",
      quote: "I teach in a government school and the salary... you know how it is. This app genuinely helps. I do the daily quiz during lunch break — the questions are actually interesting, not just random spam. Withdrew Rs. 600 last week to eSewa, no issues at all.",
      rating: 4,
      color: "bg-gradient-to-br from-violet-500 to-purple-600 text-white",
      avatar: "https://i.pravatar.cc/96?u=dipesh-poudel-htd",
      earnedAmount: "Rs. 1,950",
      timeOnPlatform: "5 weeks",
      payoutMethod: "eSewa",
      isVerified: true,
      date: "2 days ago"
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
            Real Users, Real Payouts
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed transition-colors">
            Don't just take our word for it. Here's what Nepali users are saying about their EarnSathi experience.
          </p>
          <div className="flex items-center justify-center gap-6 mt-6 text-xs text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Verified Reviews</span>
            <span className="flex items-center gap-1.5"><ThumbsUp className="w-3.5 h-3.5 text-blue-500" /> 4.7 Avg Rating</span>
            <span className="flex items-center gap-1.5"><Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" /> 1,240+ Reviews</span>
          </div>
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
                  whileHover={{ y: -8, scale: 1.01 }}
                  className="w-[320px] sm:w-[380px] flex-shrink-0 bg-white dark:bg-white/5 backdrop-blur-md p-7 rounded-[2rem] border border-slate-200 dark:border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-2xl flex flex-col hover:bg-slate-50 dark:hover:bg-white/[0.07] hover:border-slate-300 dark:hover:border-white/20 transition-all duration-300 cursor-pointer group"
                >
                  {/* Header: Stars + Date */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, j) => (
                        <Star 
                          key={j}
                          className={`w-4 h-4 ${j < review.rating ? 'fill-yellow-400 text-yellow-400' : 'fill-slate-200 dark:fill-slate-700 text-slate-200 dark:text-slate-700'}`} 
                        />
                      ))}
                    </div>
                    <span className="flex items-center gap-1 text-[10px] text-slate-400 dark:text-slate-500">
                      <Clock className="w-3 h-3" />
                      {review.date}
                    </span>
                  </div>

                  {/* Quote */}
                  <p className="text-slate-600 dark:text-slate-300 text-[13px] leading-relaxed mb-6 flex-1 group-hover:text-slate-800 dark:group-hover:text-white transition-colors">
                    "{review.quote}"
                  </p>

                  {/* Payout badge */}
                  <div className="flex items-center gap-2 mb-5">
                    <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[10px] font-bold ${
                      review.payoutMethod === 'eSewa' 
                        ? 'bg-[#60bb46]/10 text-[#60bb46] border border-[#60bb46]/20' 
                        : 'bg-[#5c2d91]/10 text-[#5c2d91] dark:text-[#844ece] border border-[#5c2d91]/20 dark:border-[#844ece]/20'
                    }`}>
                      <CheckCircle2 className="w-3 h-3" />
                      Paid via {review.payoutMethod}
                    </div>
                    <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400">
                      {review.earnedAmount} earned
                    </span>
                  </div>

                  {/* User info */}
                  <div className="flex items-center gap-3 pt-5 border-t border-slate-100 dark:border-white/10">
                    <img 
                      src={review.avatar} 
                      alt={`${review.name} from ${review.location}`}
                      className="w-11 h-11 rounded-2xl object-cover shadow-sm border-2 border-white dark:border-slate-800"
                      loading="lazy"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5">
                        <h4 className="text-slate-900 dark:text-white font-bold text-sm leading-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors truncate">
                          {review.name}
                        </h4>
                        {review.isVerified && (
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                        )}
                      </div>
                      <span className="text-slate-500 dark:text-slate-400 text-[11px] leading-tight">
                        {review.role} · {review.location}
                      </span>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="text-[9px] font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider block">Active</span>
                      <span className="text-[10px] font-bold text-slate-600 dark:text-slate-300">{review.timeOnPlatform}</span>
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
