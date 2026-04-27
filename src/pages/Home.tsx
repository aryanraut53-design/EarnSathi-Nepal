import { Helmet } from 'react-helmet-async';
import { Heart } from 'lucide-react';
import Hero from '../components/home/Hero';
import PayoutsTicker from '../components/home/PayoutsTicker';
import HowItWorks from '../components/home/HowItWorks';
import Features from '../components/home/Features';
import Security from '../components/home/Security';
import InstallGuide from '../components/home/InstallGuide';
import Testimonials from '../components/home/Testimonials';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>EarnSathi – Earn Points & Redeem via eSewa/Khalti | Nepal's #1 Rewards App</title>
        <meta name="description" content="Download EarnSathi APK – Nepal's trusted rewards app. Complete tasks, earn points, and instantly redeem via eSewa or Khalti. Safe, free, no Play Store needed." />
        <link rel="canonical" href="https://earnsathi.com" />
      </Helmet>

      <div className="pt-20 lg:pt-24 min-h-screen">
        {/* Made in Nepal Top Banner */}
        <div className="bg-brand-600 py-2.5 overflow-hidden relative">
          <div className="container mx-auto px-4 flex justify-center items-center gap-4 text-white text-[10px] sm:text-xs font-black uppercase tracking-[0.3em] whitespace-nowrap animate-pulse">
            <span className="flex items-center gap-1.5"><Heart className="w-3 h-3 fill-white" /> Proudly Made in Sarlahi, Nepal</span>
            <span className="opacity-30">•</span>
            <span className="flex items-center gap-1.5 text-brand-200">The Sathi for every Nepali earner</span>
            <span className="opacity-30 hidden sm:inline">•</span>
            <span className="items-center gap-1.5 hidden sm:flex"><Heart className="w-3 h-3 fill-white" /> Proudly Made in Sarlahi, Nepal</span>
          </div>
        </div>

        <Hero />
        <PayoutsTicker />
        <HowItWorks />
        <Features />
        <Security />
        <InstallGuide />
        <Testimonials />
      </div>
    </>
  );
}
