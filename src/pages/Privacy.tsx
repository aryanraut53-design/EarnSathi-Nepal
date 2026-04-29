import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { Shield, Lock, Eye, Trash2 } from 'lucide-react';

export default function Privacy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy – EarnSathi Nepal | How We Protect Your Data</title>
        <meta name="description" content="Read EarnSathi's privacy policy. Learn how we collect, use, and protect your data with AES-256 encryption. We never sell your personal information. Request data deletion anytime." />
        <meta name="keywords" content="EarnSathi privacy policy, data protection Nepal, EarnSathi data safety, user privacy Nepal rewards app, eSewa Khalti data security, Nepal app privacy" />
        <meta name="robots" content="index, follow" />
        <meta property="og:site_name" content="EarnSathi Nepal" />
        <meta property="og:title" content="EarnSathi Privacy Policy – Transparent Data Practices" />
        <meta property="og:description" content="Our commitment to your data privacy and security. AES-256 encryption, no third-party data sales." />
        <meta property="og:url" content="https://earn-sathi-nepal.vercel.app/privacy" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="EarnSathi Privacy Policy" />
        <meta name="twitter:description" content="How EarnSathi protects your data. Transparent, encrypted, and secure." />
        <link rel="canonical" href="https://earn-sathi-nepal.vercel.app/privacy" />
      </Helmet>
      
      <div className="pt-24 pb-20 bg-slate-50 dark:bg-slate-950 min-h-screen transition-colors">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-slate-900 p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-800 transition-colors"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-2xl flex items-center justify-center">
                <Shield className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
              </div>
              <div>
                <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">Privacy Policy</h1>
                <p className="text-slate-500 dark:text-slate-400 text-sm">Transparency in Data Management</p>
              </div>
            </div>

            <div className="prose prose-slate dark:prose-invert max-w-none space-y-8 text-slate-600 dark:text-slate-400 leading-relaxed">
              <section>
                <div className="flex items-center gap-2 text-slate-900 dark:text-white mb-3">
                  <Eye className="w-5 h-5 text-brand-600" />
                  <h2 className="text-xl font-bold m-0 p-0 tracking-tight">What We Collect</h2>
                </div>
                <p>We collect minimal information required to provide our services, including your phone number (for OTP verification), your name, and your payment IDs (eSewa/Khalti) when you request a payout.</p>
              </section>

              <section>
                <div className="flex items-center gap-2 text-slate-900 dark:text-white mb-3">
                  <Lock className="w-5 h-5 text-brand-600" />
                  <h2 className="text-xl font-bold m-0 p-0 tracking-tight">How We Use Data</h2>
                </div>
                <ul className="list-disc pl-5 space-y-2">
                  <li>To verify your identity and prevent fraud.</li>
                  <li>To process your payout requests instantly.</li>
                  <li>To personalize your gamified experience.</li>
                  <li>To improve app security and performance.</li>
                </ul>
              </section>

              <section className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2 text-slate-900 dark:text-white mb-3">
                  <Trash2 className="w-5 h-5 text-red-500" />
                  <h2 className="text-xl font-bold m-0 p-0 tracking-tight">Data Deletion</h2>
                </div>
                <p>Users have the absolute right to be forgotten. You can request account and data deletion at any time through the support section or by emailing privacy@earnsathi.com. All data is purged within 30 days of request.</p>
              </section>

              <p className="text-sm border-t border-slate-100 dark:border-slate-800 pt-8">
                EarnSathi does not sell your personal data to third parties. We use industry-standard encryption to protect your information at rest and in transit.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
