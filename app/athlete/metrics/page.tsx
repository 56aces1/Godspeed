import { MetricTable } from '../../../components/sections/MetricTable';
import { Card, CardContent, CardHeader } from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';

export default function MetricsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center gap-3">
        <div>
          <h1 className="text-2xl font-black">Metrics Tracker</h1>
          <p className="text-sm text-slate-400">Speed, strength, Snap Attack reps, and combine data.</p>
        </div>
        <div className="ml-auto flex gap-2">
          <Button variant="secondary">Import CSV</Button>
          <Button>Log New Metric</Button>
        </div>
      </div>
      <MetricTable />
      <Card>
        <CardHeader title="Goals" />
        <CardContent>
          <ul className="grid gap-2 text-sm text-slate-200 md:grid-cols-2">
            <li className="rounded-xl border border-slate-800 bg-slate-900/60 px-3 py-2">Drop 40 time to 4.45s</li>
            <li className="rounded-xl border border-slate-800 bg-slate-900/60 px-3 py-2">Increase vertical to 35"</li>
            <li className="rounded-xl border border-slate-800 bg-slate-900/60 px-3 py-2">150 Snap Attack catches per session</li>
            <li className="rounded-xl border border-slate-800 bg-slate-900/60 px-3 py-2">PR 55 pushups in 2 minutes</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
