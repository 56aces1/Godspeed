'use client';

import Link from 'next/link';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

const roleLinks = [
  { role: 'Athlete', href: '/athlete/dashboard', desc: 'Track XP, metrics, literacy, and game film.' },
  { role: 'Parent', href: '/parent/dashboard', desc: 'Monitor attendance, literacy progress, and behavior notes.' },
  { role: 'Coach', href: '/coach/dashboard', desc: 'Manage rosters, evaluations, and practice plans.' },
  { role: 'Admin', href: '/admin/teams', desc: 'Approve users, manage tournaments, and announcements.' },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-16">
        <header className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-blue-200">GodSpeed Academy</p>
            <h1 className="text-4xl font-black leading-tight lg:text-5xl">
              Youth Football + Literacy + Leadership Platform
            </h1>
            <p className="max-w-3xl text-lg text-slate-300">
              Unified dashboards for athletes, parents, coaches, and admins. Track combine metrics, literacy streaks, XP, and
              leadership to keep every athlete on a GodSpeed trajectory.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <Link href="/login">Launch App</Link>
              </Button>
              <Button variant="secondary" asChild>
                <Link href="/parent/dashboard">View Parent Portal</Link>
              </Button>
            </div>
          </div>
          <div className="grid w-full max-w-lg grid-cols-2 gap-3 rounded-3xl border border-slate-800 bg-slate-900/60 p-4">
            <MiniStat label="Athletes" value="220" hint="across 8 teams" />
            <MiniStat label="Avg Streak" value="12 days" hint="literacy + attendance" />
            <MiniStat label="XP awarded" value="184k" hint="last 30 days" />
            <MiniStat label="Tournaments" value="6" hint="scheduled this season" />
          </div>
        </header>

        <section className="grid gap-4 lg:grid-cols-4">
          {roleLinks.map((role) => (
            <Card key={role.role}>
              <CardContent>
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold">{role.role}</h3>
                  <span className="rounded-full bg-blue-500/20 px-3 py-1 text-xs font-semibold text-blue-200">Role</span>
                </div>
                <p className="mt-2 text-sm text-slate-300">{role.desc}</p>
                <Button className="mt-4 w-full" variant="secondary" asChild>
                  <Link href={role.href}>Open</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </section>
      </div>
    </div>
  );
}

function MiniStat({ label, value, hint }: { label: string; value: string; hint?: string }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-3">
      <p className="text-xs uppercase tracking-wide text-slate-400">{label}</p>
      <p className="text-2xl font-bold">{value}</p>
      {hint && <p className="text-xs text-slate-400">{hint}</p>}
    </div>
  );
}
