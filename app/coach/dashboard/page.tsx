import { Card, CardContent, CardHeader } from '../../../components/ui/card';
import { ScheduleList } from '../../../components/sections/ScheduleList';
import { Leaderboards } from '../../../components/sections/Leaderboards';
import { Button } from '../../../components/ui/button';

export default function CoachDashboard() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 lg:grid-cols-3">
        <Card>
          <CardHeader title="Team Health" />
          <CardContent>
            <p className="text-sm text-slate-300">Roster: 24 athletes • Attendance: 94%</p>
            <Button className="mt-3" variant="secondary" href="/coach/attendance" asChild><a>Attendance Logs</a></Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader title="Evaluations" />
          <CardContent>
            <p className="text-sm text-slate-300">Pending: 3 athlete evals</p>
            <Button className="mt-3" variant="secondary" href="/coach/evaluations" asChild><a>Open Evaluations</a></Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader title="Practice Plan" />
          <CardContent>
            <p className="text-sm text-slate-300">Tonight: tempo run + 7v7 install</p>
            <Button className="mt-3" variant="secondary" href="/coach/practice-plans" asChild><a>Edit Plan</a></Button>
          </CardContent>
        </Card>
      </div>
      <ScheduleList />
      <Leaderboards />
    </div>
  );
}
