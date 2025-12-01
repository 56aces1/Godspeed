import Image from 'next/image';
import { Card, CardContent, CardHeader } from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';
import { mockMetrics, mockAthletes } from '../../../lib/mockData';

const athlete = mockAthletes[0];
const metric = mockMetrics[0];

export default function PlayerCardPage() {
  return (
    <div className="grid gap-4 lg:grid-cols-[320px_1fr]">
      <Card>
        <CardHeader title="Player Card" />
        <CardContent>
          <div className="flex flex-col items-center gap-3 text-center">
            <div className="relative h-32 w-32 overflow-hidden rounded-2xl border border-slate-800">
              <Image src="https://placehold.co/300x300" alt="player" fill className="object-cover" />
            </div>
            <div>
              <p className="text-lg font-black">{athlete.name}</p>
              <p className="text-sm text-slate-400">{athlete.position} • {athlete.team}</p>
            </div>
            <Button className="w-full">Download Card</Button>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader title="Vitals & Combine" />
        <CardContent>
          <div className="grid grid-cols-3 gap-3 text-sm">
            <Stat label="40 yd" value={`${metric.forty_time}s`} />
            <Stat label="Vertical" value={`${metric.vertical}"`} />
            <Stat label="Shuttle" value={`${metric.shuttle}s`} />
            <Stat label="Snap Attack" value={`${metric.snap_attack_catches}`} />
            <Stat label="Pushups" value={`${metric.pushups}`} />
            <Stat label="Situps" value={`${metric.situps}`} />
          </div>
          <div className="mt-4 flex flex-wrap gap-2 text-sm text-slate-200">
            <Badge tone="info">Leadership {athlete.leadership}</Badge>
            <Badge tone="success">Literacy {athlete.literacy}</Badge>
            <Badge tone="warning">Streak {athlete.streak}d</Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-3">
      <p className="text-xs uppercase tracking-wide text-slate-400">{label}</p>
      <p className="text-lg font-semibold">{value}</p>
    </div>
  );
}

function Badge({ children, tone = 'default' }: { children: React.ReactNode; tone?: 'default' | 'info' | 'success' | 'warning' }) {
  const tones: Record<string, string> = {
    default: 'bg-slate-800 text-slate-200 border-slate-700',
    info: 'bg-blue-900/60 text-blue-100 border-blue-700',
    success: 'bg-emerald-900/60 text-emerald-200 border-emerald-700',
    warning: 'bg-amber-900/60 text-amber-100 border-amber-700',
  };
  return <span className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold ${tones[tone]}`}>{children}</span>;
}
