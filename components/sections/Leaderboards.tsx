import { mockLeaderboards } from '../../lib/mockData';
import { Card, CardContent, CardHeader } from '../ui/card';

export function Leaderboards() {
  return (
    <div className="grid gap-4 lg:grid-cols-3">
      {Object.entries(mockLeaderboards).map(([key, list]) => (
        <Card key={key}>
          <CardHeader title={`${key.toUpperCase()} Leaderboard`} />
          <CardContent>
            <ul className="space-y-2 text-sm">
              {list.map((athlete, idx) => (
                <li
                  key={athlete.id}
                  className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-900/70 px-3 py-2"
                >
                  <div>
                    <p className="font-semibold">#{idx + 1} {athlete.name}</p>
                    <p className="text-xs text-slate-400">{athlete.position} • {athlete.team}</p>
                  </div>
                  <p className="text-lg font-bold text-blue-200">
                    {key === 'speed' ? `${athlete.forty}s` : key === 'literacy' ? `${athlete.literacy}` : `${athlete.xp} XP`}
                  </p>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
