import { ReactNode } from 'react';

export function Badge({ children, tone = 'default' }: { children: ReactNode; tone?: 'default' | 'success' | 'warning' | 'info' }) {
  const tones: Record<string, string> = {
    default: 'bg-slate-800 text-slate-200 border-slate-700',
    success: 'bg-emerald-900/60 text-emerald-200 border-emerald-700',
    warning: 'bg-amber-900/60 text-amber-100 border-amber-700',
    info: 'bg-blue-900/60 text-blue-100 border-blue-700',
  };
  return <span className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold ${tones[tone]}`}>{children}</span>;
}
