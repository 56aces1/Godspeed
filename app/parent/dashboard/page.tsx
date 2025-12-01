import { Card, CardContent, CardHeader } from '../../../components/ui/card';
import { Stat } from '../../../components/ui/stat';
import { ScheduleList } from '../../../components/sections/ScheduleList';
import { NotificationList } from '../../../components/sections/NotificationList';
import { Button } from '../../../components/ui/button';

export default function ParentDashboard() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 lg:grid-cols-3">
        <Card>
          <CardHeader title="Attendance" />
          <CardContent>
            <Stat label="Current Month" value="95%" hint="Practice + literacy" />
            <Button className="mt-3" variant="secondary" href="/parent/attendance" asChild><a>View Logs</a></Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader title="Behavior" />
          <CardContent>
            <Stat label="Flags" value="0" />
            <p className="text-sm text-slate-300">Coach feedback: great focus.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader title="Literacy" />
          <CardContent>
            <Stat label="Streak" value="12 days" />
            <Button className="mt-3" variant="secondary" href="/parent/academic" asChild><a>Academic Tracker</a></Button>
          </CardContent>
        </Card>
      </div>
      <ScheduleList />
      <NotificationList />
    </div>
  );
}
