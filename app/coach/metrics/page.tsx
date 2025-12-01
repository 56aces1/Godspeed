import { MetricTable } from '../../../components/sections/MetricTable';
import { Card, CardContent, CardHeader } from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';

export default function CoachMetrics() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader title="Metric Input" />
        <CardContent>
          <div className="grid gap-3 md:grid-cols-3">
            <input className="input" placeholder="Athlete ID" />
            <input className="input" placeholder="40 yd" />
            <input className="input" placeholder="Vertical" />
            <input className="input" placeholder="Shuttle" />
            <input className="input" placeholder="Pushups" />
            <input className="input" placeholder="Snap Attack" />
          </div>
          <Button className="mt-4">Save Metric</Button>
        </CardContent>
      </Card>
      <MetricTable />
    </div>
  );
}
