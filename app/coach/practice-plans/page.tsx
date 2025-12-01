import { Card, CardContent, CardHeader } from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';

export default function PracticePlans() {
  return (
    <Card>
      <CardHeader title="Practice Plans" />
      <CardContent>
        <div className="space-y-3 text-sm text-slate-200">
          <label className="space-y-1">
            <span>Focus</span>
            <input className="input" defaultValue="Tempo run + 7v7 install" />
          </label>
          <label className="space-y-1">
            <span>Drills</span>
            <textarea className="input min-h-[140px]" defaultValue="1) Warmup 2) Snap Attack 3) Route tree 4) 7v7" />
          </label>
          <label className="space-y-1">
            <span>Equipment</span>
            <input className="input" defaultValue="Chutes, bags, ladders" />
          </label>
          <Button>Save Plan</Button>
        </div>
      </CardContent>
    </Card>
  );
}
