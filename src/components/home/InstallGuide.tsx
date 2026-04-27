import { Download, Settings, Smartphone } from 'lucide-react';

export default function InstallGuide() {
  return (
    <section id="install-guide" className="py-20 bg-white dark:bg-slate-950 transition-colors">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
            How to Install the APK
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            Follow these 3 easy steps to start earning on your Android device.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-slate-50 dark:bg-slate-900 p-6 md:p-8 rounded-3xl border border-slate-100 dark:border-slate-800 flex flex-col relative text-center items-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:hover:shadow-brand-900/10 group">
            <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center font-bold text-xl text-slate-900 dark:text-white absolute -top-6 border-4 border-white dark:border-slate-950 shadow-sm transition-colors group-hover:scale-110 group-hover:bg-brand-50 dark:group-hover:bg-brand-900 duration-300">1</div>
            <div className="p-4 bg-brand-100 dark:bg-brand-900/40 rounded-2xl mb-6 mt-4 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1">
              <Download className="w-8 h-8 text-brand-600 dark:text-brand-400 group-hover:animate-bounce" />
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-2">Download File</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              Click the download button and confirm saving the <code className="dark:text-slate-200 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">.apk</code> file to your downloads folder.
            </p>
          </div>

          <div className="bg-slate-50 dark:bg-slate-900 p-6 md:p-8 rounded-3xl border border-slate-100 dark:border-slate-800 flex flex-col relative text-center items-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:hover:shadow-blue-900/10 group">
            <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center font-bold text-xl text-slate-900 dark:text-white absolute -top-6 border-4 border-white dark:border-slate-950 shadow-sm transition-colors group-hover:scale-110 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/50 duration-300">2</div>
            <div className="p-4 bg-blue-100 dark:bg-blue-900/40 rounded-2xl mb-6 mt-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
              <Settings className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-2">Allow Unknown</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              When opening the file, your phone may ask for permission. Go to Settings and tap <strong className="dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">"Allow from this source"</strong>.
            </p>
          </div>

          <div className="bg-slate-50 dark:bg-slate-900 p-6 md:p-8 rounded-3xl border border-slate-100 dark:border-slate-800 flex flex-col relative text-center items-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:hover:shadow-purple-900/10 group">
            <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center font-bold text-xl text-slate-900 dark:text-white absolute -top-6 border-4 border-white dark:border-slate-950 shadow-sm transition-colors group-hover:scale-110 group-hover:bg-purple-50 dark:group-hover:bg-purple-900/50 duration-300">3</div>
            <div className="p-4 bg-purple-100 dark:bg-purple-900/40 rounded-2xl mb-6 mt-4 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1">
              <Smartphone className="w-8 h-8 text-purple-600 dark:text-purple-400 group-hover:animate-pulse" />
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-2">Install & Earn</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              Tap Install. Once finished, open EarnSathi, create an account, and start earning your first points <strong className="font-medium group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">instantly.</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
