import { Card, CardContent, CardHeader } from '../../../components/ui/card';
import { Stat } from '../../../components/ui/stat';
import { Badge } from '../../../components/ui/badge';
import { mockXPState } from '../../../lib/mockData';
import { XPEvent } from '../../../lib/types';

const rewardMap: Record<XPEvent, number> = {
  daily_check_in: 5,
  practice_attendance: 10,
  literacy_completion: 20,
  leadership_action: 10,
  combine_improvement: 50,
};

export default function XPPage() {
  return (
    <div className="grid gap-4 lg:grid-cols-[1fr_320px]">
      <Card>
        <CardHeader title="XP + Rank" />
        <CardContent>
          <div className="grid grid-cols-2 gap-3">
            <Stat label="XP" value={mockXPState.xp} />
            <Stat label="Rank" value={mockXPState.rank} />
            <Stat label="Streak" value={`${mockXPState.streak_count} days`} />
            <Stat label="Badges" value={mockXPState.badges.length} />
          </div>
          <div className="mt-6 space-y-2">
            <p className="text-xs uppercase tracking-wide text-slate-400">Badges</p>
            <div className="flex flex-wrap gap-2">
              {mockXPState.badges.map((badge) => (
                <Badge key={badge} tone="success">{badge}</Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader title="Gamification Rules" />
        <CardContent>
          <ul className="space-y-2 text-sm text-slate-200">
            {Object.entries(rewardMap).map(([event, reward]) => (
              <li key={event} className="rounded-xl border border-slate-800 bg-slate-900/60 px-3 py-2">
                <div className="flex items-center justify-between">
                  <span className="font-semibold capitalize">{event.replace('_', ' ')}</span>
                  <Badge tone="info">+{reward} XP</Badge>
                </div>
                {event === 'daily_check_in' && <p className="text-xs text-slate-400">Streak bonus: streak_count × 2</p>}
              </li>
            ))}
          </ul>
          <div className="mt-4 space-y-1 text-sm text-slate-300">
            <p className="font-semibold">Ranks</p>
            <p>Rookie (0–199 XP) • Starter (200–499 XP) • Captain (500–999 XP) • Ace (1000–1499 XP) • GodSpeed Elite (1500+ XP)</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
