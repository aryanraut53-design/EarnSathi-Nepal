import { Heart } from 'lucide-react';

export default function MadeInNepal() {
  return (
    <div className="flex items-center gap-2 px-4 py-2 bg-brand-50 dark:bg-brand-900/20 border border-brand-100 dark:border-brand-800 rounded-full w-fit">
      <span className="text-[10px] font-extrabold text-brand-600 dark:text-brand-400 uppercase tracking-[0.2em] flex items-center gap-2">
        Made with <Heart className="w-3 h-3 fill-brand-600 animate-pulse" /> in Sarlahi, Nepal
      </span>
    </div>
  );
}
