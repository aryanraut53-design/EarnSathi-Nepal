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
        <title>EarnSathi – Nepal's #1 Rewards App | Earn Points & Redeem via eSewa & Khalti</title>
        <meta name="description" content="EarnSathi is Nepal's most trusted rewards app. Download the free APK, play daily quizzes, spin wheels, scratch cards & mystery boxes. Earn points and instantly redeem via eSewa or Khalti. 100% safe, verified by VirusTotal." />
        <meta name="keywords" content="EarnSathi, earn money Nepal, rewards app Nepal, eSewa rewards, Khalti rewards, free APK download Nepal, online earning Nepal, paisa kamaaune app, quiz earn Nepal, spin earn, scratch card Nepal" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://earn-sathi-nepal.vercel.app" />
        <meta property="og:site_name" content="EarnSathi Nepal" />
        <meta property="og:title" content="EarnSathi – Nepal's #1 Rewards App | Earn & Redeem via eSewa/Khalti" />
        <meta property="og:description" content="Download EarnSathi free APK. Play quizzes, spin wheels & scratch cards. Earn points and redeem instantly to eSewa or Khalti. Trusted by 5,000+ users." />
        <meta property="og:url" content="https://earn-sathi-nepal.vercel.app" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="EarnSathi – Nepal's #1 Rewards App | Earn & Redeem via eSewa/Khalti" />
        <meta name="twitter:description" content="Download EarnSathi free APK. Play quizzes, spin wheels & scratch cards. Redeem instantly to eSewa or Khalti." />
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
