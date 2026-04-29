import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { Heart, Globe, Users, ShieldCheck } from 'lucide-react';

export default function About() {
  return (
    <>
      <Helmet>
        <title>About EarnSathi Nepal – Our Mission to Empower Nepali Youth Through Digital Rewards</title>
        <meta name="description" content="Discover the story behind EarnSathi – Nepal's premium gamified rewards platform built in Sarlahi. Learn about our mission to empower Nepali youth through digital rewards, eSewa & Khalti payouts." />
        <meta name="keywords" content="about EarnSathi, EarnSathi Nepal team, Nepal rewards company, digital earning Nepal, Nepali startup, Sarlahi Nepal, earn money app story, eSewa Khalti platform" />
        <meta name="robots" content="index, follow" />
        <meta property="og:site_name" content="EarnSathi Nepal" />
        <meta property="og:title" content="About EarnSathi - Nepal's #1 Gamified Rewards Platform" />
        <meta property="og:description" content="Empowering Nepal through digital rewards. Learn about our mission to give every Nepali youth a fair earning opportunity." />
        <meta property="og:url" content="https://earn-sathi-nepal.vercel.app/about" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About EarnSathi Nepal – Empowering Nepali Youth" />
        <meta name="twitter:description" content="Nepal's premium gamified reward ecosystem. Learn our story and mission." />
        <link rel="canonical" href="https://earn-sathi-nepal.vercel.app/about" />
      </Helmet>
      
      <div className="pt-24 pb-20 bg-slate-50 dark:bg-slate-950 min-h-screen transition-colors">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-slate-900 p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-800 transition-colors"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-brand-100 dark:bg-brand-900/30 rounded-2xl flex items-center justify-center">
                <Globe className="w-8 h-8 text-brand-600 dark:text-brand-400" />
              </div>
              <div>
                <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">About EarnSathi</h1>
                <p className="text-brand-600 dark:text-brand-400 font-bold flex items-center gap-2">
                  <Heart className="w-4 h-4 fill-brand-600" /> Made with Pride in Nepal
                </p>
              </div>
            </div>

            <div className="prose prose-slate dark:prose-invert max-w-none space-y-6 text-slate-600 dark:text-slate-400 leading-relaxed">
              <p className="text-lg text-slate-900 dark:text-slate-200 font-medium">
                EarnSathi is Nepal's first premium gamified reward ecosystem, designed to bridge the gap between digital engagement and real-world financial incentives.
              </p>
              
              <p>
                Our mission is to provide a transparent, secure, and fun platform for Nepali users to earn rewards through their daily digital interactions. Whether it's playing games, testing new apps, or participating in quizzes, we believe your time should be rewarded.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
                <div className="p-6 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700">
                  <Users className="w-8 h-8 text-brand-600 mb-4" />
                  <h3 className="text-lg font-bold mb-2">Community Driven</h3>
                  <p className="text-sm line-clamp-3">We build for the Nepali community, ensuring local payment integration like eSewa and Khalti.</p>
                </div>
                <div className="p-6 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700">
                  <ShieldCheck className="w-8 h-8 text-emerald-600 mb-4" />
                  <h3 className="text-lg font-bold mb-2">Security First</h3>
                  <p className="text-sm line-clamp-3">Every build is verified and scanned. We maintain the highest standards of data integrity.</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4 tracking-tight">Our Vision</h2>
              <p>
                We envision a future where every Nepali youth can utilize their digital skills and time to generate supplemental income through a trusted and locally-optimized platform. EarnSathi isn't just an app; it's a movement towards digital empowerment in Nepal.
              </p>

              <div className="mt-12 p-8 bg-brand-600 rounded-3xl text-white text-center shadow-xl shadow-brand-600/20">
                <h3 className="text-xl sm:text-2xl font-bold mb-4 italic">"Transforming Screen Time into Growth Time"</h3>
                <p className="opacity-90">Launched in 2026 &middot; Sarlahi, Nepal</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
