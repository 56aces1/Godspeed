import { Card, CardContent, CardHeader } from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';

const tournaments = [
  { id: 't1', name: 'Orlando 7v7', status: 'Scheduled', teams: 12 },
  { id: 't2', name: 'Sunshine Bowl', status: 'Planning', teams: 8 },
];

export default function AdminTournaments() {
  return (
    <Card>
      <CardHeader title="Tournament Management" />
      <CardContent>
        <div className="space-y-3 text-sm text-slate-200">
          {tournaments.map((t) => (
            <div key={t.id} className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-900/60 px-3 py-2">
              <div>
                <p className="font-semibold">{t.name}</p>
                <p className="text-xs text-slate-400">{t.status} • {t.teams} teams</p>
              </div>
              <Button size="sm" variant="secondary">Edit</Button>
            </div>
          ))}
          <Button>Create Tournament</Button>
        </div>
      </CardContent>
    </Card>
  );
}
