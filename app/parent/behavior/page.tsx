import { Card, CardContent, CardHeader } from '../../../components/ui/card';

export default function BehaviorPage() {
  return (
    <Card>
      <CardHeader title="Behavior Notes" />
      <CardContent>
        <ul className="space-y-2 text-sm text-slate-200">
          <li className="rounded-xl border border-slate-800 bg-slate-900/60 px-3 py-2">No discipline issues. Great energy in drills.</li>
          <li className="rounded-xl border border-slate-800 bg-slate-900/60 px-3 py-2">Helps younger athletes with warmups.</li>
        </ul>
      </CardContent>
    </Card>
  );
}
