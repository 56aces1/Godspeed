import { Card, CardContent, CardHeader } from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';

const tournaments = [
  { id: 't1', name: 'Orlando 7v7', date: '2024-06-20', location: 'Orlando, FL', notes: 'Arrive 7am, bring both jerseys' },
  { id: 't2', name: 'Sunshine Bowl', date: '2024-07-05', location: 'Tampa, FL', notes: 'Hotel block released' },
];

export default function TournamentInfo() {
  return (
    <Card>
      <CardHeader title="Tournament Info" />
      <CardContent>
        <div className="space-y-3 text-sm text-slate-200">
          {tournaments.map((t) => (
            <div key={t.id} className="rounded-xl border border-slate-800 bg-slate-900/60 p-3">
              <div className="flex items-center justify-between">
                <p className="font-semibold">{t.name}</p>
                <span className="text-xs text-slate-400">{t.date}</span>
              </div>
              <p>{t.location}</p>
              <p className="text-xs text-slate-400">{t.notes}</p>
              <Button className="mt-2" variant="secondary">View Schedule</Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
