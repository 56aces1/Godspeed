import { Card, CardContent, CardHeader } from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';
import { mockAthletes } from '../../../lib/mockData';

export default function CoachLeadership() {
  return (
    <Card>
      <CardHeader title="Leadership Notes" />
      <CardContent>
        <div className="space-y-3 text-sm text-slate-200">
          {mockAthletes.map((ath) => (
            <div key={ath.id} className="space-y-2 rounded-xl border border-slate-800 bg-slate-900/60 p-3">
              <p className="font-semibold">{ath.name}</p>
              <textarea className="input min-h-[100px]" placeholder="Leadership note" />
              <Button size="sm">Save</Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
