import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { FileText, ChevronRight } from 'lucide-react';

export default function Terms() {
  const sections = [
    { title: "Acceptance of Terms", content: "By downloading and using EarnSathi, you agree to comply with these terms. If you do not agree, please uninstall the application immediately." },
    { title: "Eligibility", content: "You must be a resident of Nepal and at least 13 years of age to use this platform. Some rewards may require valid identification for withdrawal." },
    { title: "User Conduct", content: "Users are prohibited from using scripts, bots, multiple accounts, or VPNs to manipulate the reward system. Any such activity will result in permanent suspension." },
    { title: "Point Conversion", content: "Points in the EarnSathi wallet have no inherent cash value until redeemed through our official payout partners (eSewa/Khalti). Conversion rates may fluctuate." },
    { title: "Account Termination", content: "We reserve the right to terminate accounts that violate our safety regulations or engage in fraudulent activities without prior notice." }
  ];

  return (
    <>
      <Helmet>
        <title>Terms & Conditions – EarnSathi Nepal | Usage Policies & Guidelines</title>
        <meta name="description" content="Review EarnSathi's Terms and Conditions. Understand our policies on eligibility, user conduct, point conversion, eSewa/Khalti payouts, and account management for Nepal's rewards platform." />
        <meta name="keywords" content="EarnSathi terms, EarnSathi conditions, Nepal rewards app rules, eSewa Khalti payout terms, EarnSathi eligibility, user conduct policy, point conversion Nepal" />
        <meta name="robots" content="index, follow" />
        <meta property="og:site_name" content="EarnSathi Nepal" />
        <meta property="og:title" content="EarnSathi Terms & Conditions – Usage Policies" />
        <meta property="og:description" content="Rules and guidelines for using Nepal's favorite rewards app. Fair play, eligibility, and payout policies." />
        <meta property="og:url" content="https://earn-sathi-nepal.vercel.app/terms" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="EarnSathi Terms & Conditions" />
        <meta name="twitter:description" content="Usage policies and guidelines for Nepal's #1 rewards app." />
        <link rel="canonical" href="https://earn-sathi-nepal.vercel.app/terms" />
      </Helmet>
      
      <div className="pt-24 pb-20 bg-slate-50 dark:bg-slate-950 min-h-screen transition-colors">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-slate-900 p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-800 transition-colors"
          >
            <div className="flex items-center gap-4 mb-8 pb-8 border-b border-slate-100 dark:border-slate-800">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center">
                <FileText className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">Terms & Conditions</h1>
                <p className="text-slate-500 dark:text-slate-400 text-sm">Last Updated: April 2024</p>
              </div>
            </div>

            <div className="space-y-8">
              {sections.map((section, i) => (
                <div key={i} className="group">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-6 h-6 rounded bg-brand-100 dark:bg-brand-900/40 flex items-center justify-center text-brand-600 dark:text-brand-400 font-bold text-xs">
                      {i + 1}
                    </div>
                    <h2 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">{section.title}</h2>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed pl-9">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700">
              <p className="text-xs text-slate-500 dark:text-slate-400 italic">
                Note: These terms are subject to change. We will notify users of major updates through app notifications. If you have questions, contact legal@earnsathi.com
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
