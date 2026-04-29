import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { ShieldCheck, Database, HardDrive, Smartphone } from 'lucide-react';

export default function DataSafety() {
  const safetyFeatures = [
    {
      icon: <Database className="w-8 h-8 text-blue-600" />,
      title: "Encrypted Storage",
      description: "All sensitive data is stored using AES-256 encryption on secure Nepali cloud servers."
    },
    {
      icon: <HardDrive className="w-8 h-8 text-purple-600" />,
      title: "No Third-Party Access",
      description: "We never share your personal information with advertisers or third-party networks."
    },
    {
      icon: <Smartphone className="w-8 h-8 text-brand-600" />,
      title: "Device Security",
      description: "EarnSathi uses Root Detection and App Integrity checks to ensure your device is secure."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Data Safety & Security – EarnSathi Nepal | AES-256 Encrypted Rewards Platform</title>
        <meta name="description" content="Learn about EarnSathi's data safety practices. AES-256 encryption, no third-party data sharing, root detection, and 24/7 security monitoring on Nepali cloud servers. Your rewards data is protected." />
        <meta name="keywords" content="EarnSathi data safety, data security Nepal, encrypted rewards app, AES-256 Nepal app, secure earning platform, no third-party data, device security Nepal, app integrity check" />
        <meta name="robots" content="index, follow" />
        <meta property="og:site_name" content="EarnSathi Nepal" />
        <meta property="og:title" content="Data Safety at EarnSathi – AES-256 Encrypted Security" />
        <meta property="og:description" content="Transparent and secure data management practices. AES-256 encryption and 24/7 monitoring for Nepal's rewards app." />
        <meta property="og:url" content="https://earn-sathi-nepal.vercel.app/data-safety" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="EarnSathi Data Safety & Security" />
        <meta name="twitter:description" content="AES-256 encryption, no third-party data access. Your rewards are secure." />
        <link rel="canonical" href="https://earn-sathi-nepal.vercel.app/data-safety" />
      </Helmet>
      
      <div className="pt-24 pb-20 bg-slate-50 dark:bg-slate-950 min-h-screen transition-colors">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white dark:bg-slate-900 p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-800 transition-colors"
          >
            <div className="text-center mb-12">
              <div className="w-20 h-20 bg-brand-100 dark:bg-brand-900/40 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShieldCheck className="w-10 h-10 text-brand-600 dark:text-brand-400" />
              </div>
              <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">Data Safety</h1>
              <p className="text-slate-600 dark:text-slate-400 max-w-lg mx-auto">Understanding how EarnSathi protects your information across the platform.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {safetyFeatures.map((feature, i) => (
                <div key={i} className="p-6 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 text-center flex flex-col items-center">
                  <div className="mb-4 p-3 bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800">{feature.icon}</div>
                  <h3 className="font-bold text-slate-900 dark:text-white mb-2">{feature.title}</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>

            <div className="prose prose-slate dark:prose-invert max-w-none space-y-6 bg-brand-50 dark:bg-brand-900/10 p-8 rounded-3xl border border-brand-100 dark:border-brand-900/20">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white m-0">Transparency Report</h2>
              <p className="text-sm">We believe in radical transparency. Our systems are audited seasonally for vulnerabilities. EarnSathi employs real-time threat detection to prevent unauthorized access and data breaches.</p>
              <div className="flex items-center gap-4 text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest mt-4">
                <div className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4" /> 24/7 Monitoring</div>
                <div className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4" /> SSL Encrypted</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
