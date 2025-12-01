import { ReactNode } from 'react';

export function Card({ children }: { children: ReactNode }) {
  return <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 shadow-inner shadow-black/20">{children}</div>;
}

export function CardHeader({ title, action }: { title: string; action?: ReactNode }) {
  return (
    <div className="mb-3 flex items-center justify-between gap-2">
      <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-300">{title}</h3>
      {action}
    </div>
  );
}

export function CardContent({ children }: { children: ReactNode }) {
  return <div className="space-y-3">{children}</div>;
}
