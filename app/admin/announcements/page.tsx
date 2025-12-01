import { Card, CardContent, CardHeader } from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';

const announcements = [
  { id: 'a1', title: 'New hydration policy', body: 'Bring labeled water jug to all events.' },
  { id: 'a2', title: 'Literacy challenge', body: 'Read 20 minutes per day for bonus XP.' },
];

export default function AnnouncementsPage() {
  return (
    <Card>
      <CardHeader title="App Announcements" />
      <CardContent>
        <div className="space-y-3 text-sm text-slate-200">
          {announcements.map((a) => (
            <div key={a.id} className="rounded-xl border border-slate-800 bg-slate-900/60 p-3">
              <p className="font-semibold">{a.title}</p>
              <p className="text-xs text-slate-400">{a.body}</p>
            </div>
          ))}
          <div className="space-y-2">
            <input className="input" placeholder="Title" />
            <textarea className="input min-h-[120px]" placeholder="Message" />
            <Button>Publish</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
