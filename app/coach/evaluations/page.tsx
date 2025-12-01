import { Card, CardContent, CardHeader } from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';
import { mockAthletes } from '../../../lib/mockData';

export default function EvaluationsPage() {
  return (
    <Card>
      <CardHeader title="Athlete Evaluations" />
      <CardContent>
        <div className="space-y-3 text-sm text-slate-200">
          {mockAthletes.map((ath) => (
            <div key={ath.id} className="space-y-2 rounded-xl border border-slate-800 bg-slate-900/60 p-3">
              <div className="flex items-center justify-between">
                <p className="font-semibold">{ath.name}</p>
                <span className="text-xs text-slate-400">{ath.position}</span>
              </div>
              <div className="grid gap-2 md:grid-cols-3">
                <input className="input" placeholder="Speed grade" />
                <input className="input" placeholder="Technique grade" />
                <input className="input" placeholder="Effort grade" />
              </div>
              <textarea className="input min-h-[100px]" placeholder="Coach notes" />
              <Button size="sm">Save</Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
