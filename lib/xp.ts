import { Rank, XPEvent, XPState } from './types';

const XP_REWARDS: Record<XPEvent, number> = {
  daily_check_in: 5,
  practice_attendance: 10,
  literacy_completion: 20,
  leadership_action: 10,
  combine_improvement: 50,
};

export function getRank(xp: number): Rank {
  if (xp >= 1500) return 'GodSpeed Elite';
  if (xp >= 1000) return 'Ace';
  if (xp >= 500) return 'Captain';
  if (xp >= 200) return 'Starter';
  return 'Rookie';
}

export function awardXP(current: XPState, event: XPEvent): XPState {
  const base = XP_REWARDS[event];
  const streakBonus = current.streak_count * 2;
  const total = current.xp + base + streakBonus;
  const rank = getRank(total);
  const badges = [...current.badges];

  if (event === 'combine_improvement' && !badges.includes('Combine Crusher')) {
    badges.push('Combine Crusher');
  }
  if (total >= 1000 && !badges.includes('Top Performer')) badges.push('Top Performer');

  return {
    ...current,
    xp: total,
    rank,
    badges,
  };
}
