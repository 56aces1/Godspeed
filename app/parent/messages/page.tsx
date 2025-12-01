import { Card, CardContent, CardHeader } from '../../../components/ui/card';
import { mockMessages } from '../../../lib/mockData';
import { Button } from '../../../components/ui/button';

export default function MessagesPage() {
  return (
    <Card>
      <CardHeader title="Coach Messages" />
      <CardContent>
        <div className="space-y-3">
          {mockMessages.map((msg) => (
            <div key={msg.id} className="rounded-xl border border-slate-800 bg-slate-900/60 p-3">
              <div className="flex items-center justify-between text-sm">
                <p className="font-semibold">{msg.sender}</p>
                <span className="text-xs text-slate-400">{msg.date}</span>
              </div>
              <p className="text-sm text-slate-200">{msg.body}</p>
            </div>
          ))}
          <div className="space-y-2">
            <textarea className="input min-h-[120px]" placeholder="Message coach" />
            <Button>Send</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
