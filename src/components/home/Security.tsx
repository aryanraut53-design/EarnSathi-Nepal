import { Shield, ShieldAlert, CheckCircle2, Lock, Smartphone, ExternalLink, ShieldCheck } from 'lucide-react';
import { useState } from 'react';

export default function Security() {
  const [faqOpen, setFaqOpen] = useState(false);

  const trustBadges = [
    { icon: <Lock className="w-5 h-5" />, label: "SSL Secured" },
    { icon: <ShieldAlert className="w-5 h-5" />, label: "Anti-Fraud Checks" },
    { icon: <Smartphone className="w-5 h-5" />, label: "No Hidden Permissions" },
    { icon: <CheckCircle2 className="w-5 h-5" />, label: "Real-time Audits" },
  ];

  return (
    <section id="security" className="py-20 bg-slate-50 dark:bg-slate-900 border-t border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center max-w-2xl mx-auto mb-16 px-4">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-6">
            <Shield className="w-8 h-8 text-blue-600 dark:text-blue-400" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight leading-tight">
            Security & Trust
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Your privacy and safety are our top priority. We verify every release.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto">
          
          <div className="lg:col-span-7 space-y-6">
            {/* VirusTotal Scanning Report */}
            <div className="bg-white dark:bg-slate-800 p-6 md:p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-[0_4px_20px_rgba(0,0,0,0.03)] dark:shadow-none flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left transition-colors">
              <div className="w-20 h-20 shrink-0 bg-emerald-50 dark:bg-emerald-900/20 rounded-full flex items-center justify-center border-4 border-white dark:border-slate-800 shadow-sm ring-1 ring-emerald-100 dark:ring-emerald-700">
                <ShieldCheck className="w-10 h-10 text-emerald-600 dark:text-emerald-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">100% Safe & Verified</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 leading-relaxed">
                  Every EarnSathi build is scanned by 60+ antivirus engines including BitDefender, Kaspersky, and Google Safe Browsing via VirusTotal.
                </p>
                <a 
                  href="https://www.virustotal.com/gui/file-analysis/NGU4NDY5Y2JkOTNmYjM0YjQ5MjE5YmM0NGIzYmVhMWI6MTc3NzI4NTgxOQ==" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-brand-600 dark:text-brand-400 font-bold text-sm hover:underline transition-all group"
                >
                  View Scan Report
                  <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>

            {/* Security Protocol */}
            <div className="bg-white dark:bg-slate-800 p-6 md:p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-[0_4px_20px_rgba(0,0,0,0.03)] dark:shadow-none flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left transition-colors">
              <div className="w-20 h-20 shrink-0 bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center border-4 border-white dark:border-slate-800 shadow-sm ring-1 ring-slate-100 dark:ring-slate-700">
                <CheckCircle2 className="w-10 h-10 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Verified & Secure</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 leading-relaxed">
                  EarnSathi uses enterprise-grade server-side architecture to secure all real-time operations, ensuring your wallet balance is always protected and verified.
                </p>
                <div className="inline-flex items-center gap-2 bg-slate-50 dark:bg-slate-900/50 text-slate-600 dark:text-slate-300 text-xs font-semibold px-4 py-2 rounded-full border border-slate-200 dark:border-slate-700">
                  <ShieldAlert className="w-4 h-4" />
                  Anti-Fraud System Active
                </div>
              </div>
            </div>

            {/* Direct Download FAQ */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-[0_4px_20px_rgba(0,0,0,0.03)] dark:shadow-none overflow-hidden transition-colors">
              <button 
                onClick={() => setFaqOpen(!faqOpen)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors group"
              >
                <span className="font-bold text-lg text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">Why direct download instead of Play Store?</span>
                <span className={`transform transition-transform duration-300 text-slate-400 dark:text-slate-500 group-hover:text-brand-600 dark:group-hover:text-brand-400 ${faqOpen ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>
              {faqOpen && (
                <div className="px-6 pb-6 pt-2 text-slate-600 dark:text-slate-400 text-sm space-y-4 border-t border-slate-100 dark:border-slate-700 leading-relaxed mt-2 animate-in slide-in-from-top-2 duration-300 fade-in">
                  <p>
                    EarnSathi offers direct cash rewards that often conflict with Google Play's strict regional policies for digital rewards in Nepal. By offering a direct download, we can pass 100% of the rewards to you without heavy platform fees.
                  </p>
                  <div>
                    <strong className="text-slate-900 dark:text-slate-300">How to install (Android 8+):</strong>
                    <ul className="list-decimal pl-5 mt-2 space-y-2 text-slate-500 dark:text-slate-400">
                      <li>Download the official APK file from this site.</li>
                      <li>Tap the downloaded file to open it.</li>
                      <li>If prompted, tap "Settings" and toggle on "Allow from this source".</li>
                      <li>Tap "Install" and start earning secure rewards.</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            {/* Trust Badges */}
            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm grid grid-cols-2 gap-4 transition-colors">
              {trustBadges.map((badge, i) => (
                <div key={i} className="flex flex-col items-center text-center p-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 hover:bg-brand-50 dark:hover:bg-brand-900/20 group transition-colors duration-300">
                  <div className="text-slate-700 dark:text-slate-300 mb-2 group-hover:scale-110 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-all duration-300">{badge.icon}</div>
                  <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 group-hover:text-brand-700 dark:group-hover:text-brand-300 transition-colors">{badge.label}</span>
                </div>
              ))}
            </div>

            {/* Permissions Card */}
            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm transition-colors">
              <h4 className="font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <ShieldAlert className="w-5 h-5 text-slate-500 dark:text-slate-400" />
                Transparent Permissions
              </h4>
              <ul className="space-y-3 text-sm">
                <li className="flex gap-3">
                  <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-700 dark:text-slate-300">Internet Access:</span>
                    <p className="text-slate-500 dark:text-slate-400 text-xs mt-0.5">Required to sync your Unified Wallet with our secure servers.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-700 dark:text-slate-300">Storage (Optional):</span>
                    <p className="text-slate-500 dark:text-slate-400 text-xs mt-0.5">Only needed if you save receipts or screenshots for payouts.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-700 dark:text-slate-300">Server-Side Safety Protocol:</span>
                    <p className="text-slate-500 dark:text-slate-400 text-xs mt-0.5">Comprehensive Firestore rules to secure real-time operations and verify all earning actions.</p>
                  </div>
                </li>
              </ul>
              <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-700 text-xs font-semibold text-green-600 dark:text-green-400 flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4" />
                No contacts, no camera, no location tracking.
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
