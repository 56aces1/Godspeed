import { mockSchedule } from '../../lib/mockData';
import { Card, CardContent, CardHeader } from '../ui/card';
import { Badge } from '../ui/badge';

export function ScheduleList() {
  return (
    <Card>
      <CardHeader title="Practice & Events" />
      <CardContent>
        <div className="space-y-2">
          {mockSchedule.map((event) => (
            <div key={event.id} className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-900/70 px-3 py-2">
              <div>
                <p className="font-semibold">{event.location}</p>
                <p className="text-xs text-slate-400">{event.notes}</p>
              </div>
              <div className="text-right">
                <Badge tone="info">{event.event_type}</Badge>
                <p className="text-xs text-slate-400">{event.date}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
