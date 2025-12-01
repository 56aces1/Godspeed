import { Card, CardContent, CardHeader } from '../../../components/ui/card';

export default function ReportsPage() {
  return (
    <Card>
      <CardHeader title="Weekly Reports" />
      <CardContent>
        <div className="space-y-3 text-sm text-slate-200">
          {[1, 2, 3].map((week) => (
            <div key={week} className="rounded-xl border border-slate-800 bg-slate-900/60 p-3">
              <p className="font-semibold">Week {week}</p>
              <p className="text-xs text-slate-400">XP +30 • Attendance 100% • Literacy streak +4</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
