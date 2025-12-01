import { Card, CardContent, CardHeader } from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';

export default function CoachMedia() {
  return (
    <Card>
      <CardHeader title="Media Upload" />
      <CardContent>
        <div className="space-y-3 text-sm text-slate-200">
          <input type="file" className="input" />
          <input className="input" placeholder="Title" />
          <textarea className="input min-h-[120px]" placeholder="Notes for athletes" />
          <Button>Upload</Button>
        </div>
      </CardContent>
    </Card>
  );
}
