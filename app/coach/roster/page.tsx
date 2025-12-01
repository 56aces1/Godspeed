import { Card, CardContent, CardHeader } from '../../../components/ui/card';
import { mockAthletes } from '../../../lib/mockData';
import { Button } from '../../../components/ui/button';

export default function RosterPage() {
  return (
    <Card>
      <CardHeader title="Team Roster" />
      <CardContent>
        <div className="space-y-3 text-sm text-slate-200">
          {mockAthletes.map((ath) => (
            <div key={ath.id} className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-900/60 px-3 py-2">
              <div>
                <p className="font-semibold">{ath.name}</p>
                <p className="text-xs text-slate-400">{ath.position} • {ath.team}</p>
              </div>
              <div className="flex gap-2">
                <Button size="sm" variant="secondary">Eval</Button>
                <Button size="sm" variant="secondary">Message</Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
