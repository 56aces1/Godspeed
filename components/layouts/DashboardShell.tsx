'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';
import { navByRole } from '../../lib/navigation';
import { Role } from '../../lib/types';
import { Button } from '../ui/button';

export function DashboardShell({ role, children }: { role: Role; children: ReactNode }) {
  const pathname = usePathname();
  const items = navByRole[role];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900">
      <header className="border-b border-slate-800/80 bg-slate-900/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-500 to-emerald-500" />
            <div>
              <p className="text-xs uppercase tracking-widest text-blue-200">GodSpeed Academy</p>
              <p className="text-lg font-black">{role.charAt(0).toUpperCase() + role.slice(1)} Portal</p>
            </div>
          </div>
          <div className="ml-auto flex gap-2">
            <Button variant="ghost" size="sm">Notifications</Button>
            <Button variant="secondary" size="sm">Profile</Button>
          </div>
        </div>
      </header>
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-4 py-8 lg:grid-cols-[240px_1fr]">
        <aside className="space-y-2 rounded-2xl border border-slate-800 bg-slate-900/50 p-4">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`block rounded-xl px-3 py-2 text-sm font-semibold transition-colors ${
                pathname === item.href ? 'bg-blue-600 text-white' : 'text-slate-200 hover:bg-slate-800'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </aside>
        <main className="space-y-6">{children}</main>
      </div>
    </div>
  );
}
