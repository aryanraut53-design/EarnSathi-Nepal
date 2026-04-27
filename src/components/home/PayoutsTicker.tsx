export default function PayoutsTicker() {
  const highlights = [
    "High-Fidelity Reward Platform",
    "Instant eSewa & Khalti Withdrawals",
    "Daily Gamified Missions",
    "Real-time NPR Conversion",
    "Transparent Audit Logs",
    "Advanced Security Protocol"
  ];

  return (
    <section className="h-14 bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800 flex items-center overflow-hidden w-full relative transition-colors">
      <h2 className="sr-only">Platform Highlights</h2>
      <div className="shrink-0 px-6 py-1 bg-white dark:bg-slate-900 font-semibold text-[10px] tracking-widest uppercase text-brand-600 dark:text-brand-400 h-full flex items-center z-10 shadow-[8px_0_16px_rgba(255,255,255,1)] dark:shadow-[8px_0_16px_rgba(15,23,42,1)] relative border-r border-slate-200 dark:border-slate-800 transition-colors">
        Ecosystem
      </div>
      <div className="animate-marquee flex gap-10 px-8 font-medium text-slate-600 dark:text-slate-300 text-xs whitespace-nowrap transition-colors">
        {/* Double array for infinite scroll effect */}
        {[...highlights, ...highlights, ...highlights].map((text, i) => (
          <div key={i} className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-500 shadow-[0_0_8px_rgba(99,102,241,0.4)] dark:shadow-[0_0_8px_rgba(99,102,241,0.8)] transition-shadow"></span>
            <span className="tracking-wide text-slate-600 dark:text-slate-300 transition-colors">{text}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

