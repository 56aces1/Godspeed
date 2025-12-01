import { mockNotifications } from '../../lib/mockData';
import { Card, CardContent, CardHeader } from '../ui/card';
import { Badge } from '../ui/badge';

export function NotificationList() {
  return (
    <Card>
      <CardHeader title="Notifications" />
      <CardContent>
        <div className="space-y-3">
          {mockNotifications.map((n) => (
            <div key={n.id} className="rounded-xl border border-slate-800 bg-slate-900/70 p-3">
              <div className="flex items-center justify-between">
                <p className="font-semibold">{n.title}</p>
                <Badge tone="info">{n.type}</Badge>
              </div>
              <p className="text-sm text-slate-300">{n.message}</p>
              <p className="text-xs text-slate-500">{n.created_at}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
