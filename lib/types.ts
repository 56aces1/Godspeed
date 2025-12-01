export type Role = 'athlete' | 'parent' | 'coach' | 'admin';

export type XPEvent =
  | 'daily_check_in'
  | 'practice_attendance'
  | 'literacy_completion'
  | 'leadership_action'
  | 'combine_improvement';

export type Rank = 'Rookie' | 'Starter' | 'Captain' | 'Ace' | 'GodSpeed Elite';

export interface MetricRow {
  athlete_id: string;
  forty_time: number;
  shuttle: number;
  vertical: number;
  pushups: number;
  situps: number;
  snap_attack_catches: number;
  speed_score: number;
  strength_score: number;
  updated_at: string;
}

export interface XPState {
  xp: number;
  rank: Rank;
  badges: string[];
  streak_count: number;
}

export interface LiteracyState {
  reading_streak: number;
  journal_entries: number;
  vocabulary_mastery: number;
  weekly_assignment: string;
  coach_notes: string;
}

export interface LeadershipState {
  leadership_points: number;
  attendance_score: number;
  discipline_flags: number;
  character_notes: string;
}
