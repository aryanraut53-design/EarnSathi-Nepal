import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { AlertTriangle, CheckCircle2, ShieldAlert, Zap } from 'lucide-react';

export default function SafetyRegulations() {
  const rules = [
    {
      title: "Fair Play Policy",
      content: "Users must interact with the app manually. Any automated interactions, accessibility service abuse, or clicker apps will lead to immediate account ban.",
      icon: <Zap className="w-6 h-6 text-yellow-600" />
    },
    {
      title: "Single Account Policy",
      content: "One user, one device, one account. Creating multiple accounts to farm points is strictly prohibited.",
      icon: <CheckCircle2 className="w-6 h-6 text-brand-600" />
    },
    {
      title: "VPN & Proxy Restrictions",
      content: "EarnSathi is designed for users in Nepal. Using VPNs or Proxies to spoof location is a violation of our safety regulations.",
      icon: <ShieldAlert className="w-6 h-6 text-red-600" />
    },
    {
      title: "Withdrawal Integrity",
      content: "We verify the authenticity of points before processing every withdrawal. Fraudulent points will be deducted and accounts audited.",
      icon: <AlertTriangle className="w-6 h-6 text-orange-600" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>App Safety Regulations – EarnSathi Nepal | Fair Play & Anti-Fraud Policy</title>
        <meta name="description" content="Review EarnSathi's app safety regulations. Fair play policy, single account enforcement, VPN restrictions, and withdrawal integrity checks. Zero tolerance for fraud to protect honest Nepali users." />
        <meta name="keywords" content="EarnSathi safety rules, fair play policy Nepal, anti-fraud Nepal app, VPN restriction rewards, account safety EarnSathi, withdrawal verification, single account policy, Nepal rewards regulations" />
        <meta name="robots" content="index, follow" />
        <meta property="og:site_name" content="EarnSathi Nepal" />
        <meta property="og:title" content="EarnSathi Safety Regulations – Fair Play & Anti-Fraud" />
        <meta property="og:description" content="Ensuring a fair and secure rewards ecosystem for all Nepali users. Zero tolerance for fraud." />
        <meta property="og:url" content="https://earn-sathi-nepal.vercel.app/safety-regulations" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="EarnSathi Safety Regulations" />
        <meta name="twitter:description" content="Fair play policy and anti-fraud measures for Nepal's rewards ecosystem." />
        <link rel="canonical" href="https://earn-sathi-nepal.vercel.app/safety-regulations" />
      </Helmet>
      
      <div className="pt-24 pb-20 bg-slate-50 dark:bg-slate-950 min-h-screen transition-colors">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-slate-900 p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-800 transition-colors"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-2xl flex items-center justify-center">
                <ShieldAlert className="w-8 h-8 text-red-600 dark:text-red-400" />
              </div>
              <div>
                <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">App Safety Regulations</h1>
                <p className="text-slate-500 dark:text-slate-400 text-sm">Ensuring a fair ecosystem for every Nepali user</p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 mb-12">
              {rules.map((rule, i) => (
                <div key={i} className="p-6 bg-slate-50 dark:bg-slate-800 border-l-4 border-brand-500 rounded-r-2xl transition-all hover:bg-slate-100 dark:hover:bg-slate-800/80">
                  <div className="flex items-center gap-3 mb-3">
                    {rule.icon}
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">{rule.title}</h3>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed pl-9">
                    {rule.content}
                  </p>
                </div>
              ))}
            </div>

            <div className="p-8 bg-slate-900 dark:bg-slate-800 rounded-3xl text-white">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-brand-400">
                <AlertTriangle className="w-5 h-5 text-yellow-500" /> 
                Zero Tolerance Policy
              </h3>
              <p className="text-sm opacity-80 leading-relaxed mb-6">
                Our automated systems monitor for irregular patterns. We do not issue warnings for serious safety violations. Fraud attempts compromise the rewards pool for honest users, and we take active measures to prevent it.
              </p>
              <div className="text-xs font-bold uppercase tracking-widest text-slate-400 border-t border-slate-700 pt-6">
                By using the app, you acknowledge these safety rules.
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
