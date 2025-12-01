import { mockMetrics } from '../../lib/mockData';
import { Card, CardContent, CardHeader } from '../ui/card';

export function MetricTable() {
  return (
    <Card>
      <CardHeader title="Combine Metrics" />
      <CardContent>
        <div className="overflow-auto">
          <table className="min-w-full text-sm">
            <thead className="text-left text-slate-400">
              <tr className="border-b border-slate-800">
                <th className="py-2 pr-3">40 yd</th>
                <th className="py-2 pr-3">Shuttle</th>
                <th className="py-2 pr-3">Vertical</th>
                <th className="py-2 pr-3">Pushups</th>
                <th className="py-2 pr-3">Situps</th>
                <th className="py-2 pr-3">Snap Attack</th>
                <th className="py-2 pr-3">Speed Score</th>
                <th className="py-2 pr-3">Strength Score</th>
                <th className="py-2 pr-3">Updated</th>
              </tr>
            </thead>
            <tbody>
              {mockMetrics.map((metric) => (
                <tr key={metric.athlete_id} className="border-b border-slate-800/70 text-white">
                  <td className="py-2 pr-3">{metric.forty_time}s</td>
                  <td className="py-2 pr-3">{metric.shuttle}s</td>
                  <td className="py-2 pr-3">{metric.vertical}"</td>
                  <td className="py-2 pr-3">{metric.pushups}</td>
                  <td className="py-2 pr-3">{metric.situps}</td>
                  <td className="py-2 pr-3">{metric.snap_attack_catches}</td>
                  <td className="py-2 pr-3">{metric.speed_score}</td>
                  <td className="py-2 pr-3">{metric.strength_score}</td>
                  <td className="py-2 pr-3 text-slate-400">{metric.updated_at}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}
