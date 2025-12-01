'use client';

import { useState } from 'react';
import { Button } from '../../../components/ui/button';
import { Card, CardContent, CardHeader } from '../../../components/ui/card';
import { Stat } from '../../../components/ui/stat';
import { mockXPState } from '../../../lib/mockData';
import { awardXP } from '../../../lib/xp';

export default function DailyCheckIn() {
  const [xpState, setXpState] = useState(mockXPState);
  const [message, setMessage] = useState('');

  const handleCheckIn = () => {
    const next = awardXP({ ...xpState, streak_count: xpState.streak_count + 1 }, 'daily_check_in');
    setXpState(next);
    setMessage(`Awarded +5 XP with streak bonus. New XP: ${next.xp}`);
  };

  return (
    <div className="grid gap-4 lg:grid-cols-3">
      <Card className="lg:col-span-2">
        <CardHeader title="Daily Check-In" />
        <CardContent>
          <p className="text-sm text-slate-300">Confirm attendance, hydration, and mindset to earn XP.</p>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <Button onClick={handleCheckIn}>Complete Check-In</Button>
            {message && <span className="text-sm text-emerald-300">{message}</span>}
          </div>
          <div className="mt-6 grid grid-cols-2 gap-3">
            <label className="space-y-1 text-sm">
              <span>Hydration</span>
              <input className="input" placeholder="Water intake (oz)" />
            </label>
            <label className="space-y-1 text-sm">
              <span>Sleep</span>
              <input className="input" placeholder="Hours slept" />
            </label>
            <label className="col-span-full space-y-1 text-sm">
              <span>Mindset Notes</span>
              <textarea className="input min-h-[120px]" placeholder="Write a 2-sentence summary" />
            </label>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader title="XP Snapshot" />
        <CardContent>
          <Stat label="XP" value={xpState.xp} />
          <Stat label="Rank" value={xpState.rank} />
          <Stat label="Streak" value={`${xpState.streak_count} days`} />
        </CardContent>
      </Card>
    </div>
  );
}
