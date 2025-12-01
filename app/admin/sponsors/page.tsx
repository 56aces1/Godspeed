import { Card, CardContent, CardHeader } from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';

const sponsors = [
  { id: 's1', name: 'Nike', status: 'Active' },
  { id: 's2', name: 'Gatorade', status: 'Prospect' },
];

export default function SponsorsPage() {
  return (
    <Card>
      <CardHeader title="Sponsor Integrations" />
      <CardContent>
        <div className="space-y-3 text-sm text-slate-200">
          {sponsors.map((s) => (
            <div key={s.id} className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-900/60 px-3 py-2">
              <div>
                <p className="font-semibold">{s.name}</p>
                <p className="text-xs text-slate-400">Status: {s.status}</p>
              </div>
              <Button size="sm" variant="secondary">Configure</Button>
            </div>
          ))}
          <Button>Add Sponsor</Button>
        </div>
      </CardContent>
    </Card>
  );
}
