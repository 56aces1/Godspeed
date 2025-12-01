import { Card, CardContent, CardHeader } from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';

const pendingUsers = [
  { id: 'u1', name: 'Parent - Sarah Lee', role: 'parent', email: 'sarah@example.com' },
  { id: 'u2', name: 'Coach - Mike Davis', role: 'coach', email: 'mike@example.com' },
];

export default function ApproveUsers() {
  return (
    <Card>
      <CardHeader title="Approve Users" />
      <CardContent>
        <div className="space-y-3 text-sm text-slate-200">
          {pendingUsers.map((user) => (
            <div key={user.id} className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-900/60 px-3 py-2">
              <div>
                <p className="font-semibold">{user.name}</p>
                <p className="text-xs text-slate-400">{user.email} • {user.role}</p>
              </div>
              <div className="flex gap-2">
                <Button size="sm">Approve</Button>
                <Button size="sm" variant="secondary">Reject</Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
