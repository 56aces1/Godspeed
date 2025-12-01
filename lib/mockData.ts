import { LeadershipState, LiteracyState, XPState } from './types';

export const mockAthletes = [
  {
    id: 'ath-1',
    name: 'Anthony Bethel',
    position: 'WR/DB',
    team: '14U Elite',
    grade: 9,
    xp: 640,
    rank: 'Captain',
    forty: 4.5,
    vertical: 33,
    streak: 6,
    literacy: 12,
    leadership: 42,
  },
  {
    id: 'ath-2',
    name: 'Jasmine Lee',
    position: 'RB',
    team: '14U Elite',
    grade: 9,
    xp: 1200,
    rank: 'Ace',
    forty: 4.6,
    vertical: 29,
    streak: 10,
    literacy: 18,
    leadership: 60,
  },
];

export const mockXPState: XPState = {
  xp: 720,
  rank: 'Captain',
  badges: ['Streak Keeper', 'Speedster'],
  streak_count: 6,
};

export const mockLiteracy: LiteracyState = {
  reading_streak: 14,
  journal_entries: 22,
  vocabulary_mastery: 78,
  weekly_assignment: 'Read chapter 4 of "Mindset" and submit a 200-word reflection.',
  coach_notes: 'Great consistency. Push for richer vocab in reflections.',
};

export const mockLeadership: LeadershipState = {
  leadership_points: 120,
  attendance_score: 96,
  discipline_flags: 0,
  character_notes: 'Encourages teammates, leads stretches, and sets tempo.',
};

export const mockNotifications = [
  { id: 'n1', title: 'Practice Tonight', message: 'Full pads at 6pm. Hydrate!', type: 'practice', created_at: '2024-06-10' },
  { id: 'n2', title: 'Literacy Streak', message: '+5 day streak. Keep it up!', type: 'streak', created_at: '2024-06-09' },
  { id: 'n3', title: 'Coach Note', message: 'Work on top-end speed transition.', type: 'coaching', created_at: '2024-06-08' },
];

export const mockSchedule = [
  { id: 'e1', event_type: 'practice', date: '2024-06-12', location: 'Field 4', notes: 'Tempo run focus' },
  { id: 'e2', event_type: 'tournament', date: '2024-06-20', location: 'Orlando - 7v7', notes: 'Arrive 7am' },
  { id: 'e3', event_type: 'meeting', date: '2024-06-15', location: 'Film Room', notes: 'Install concepts' },
];

export const mockMetrics = [
  {
    athlete_id: 'ath-1',
    forty_time: 4.48,
    shuttle: 4.2,
    vertical: 33.4,
    pushups: 45,
    situps: 50,
    snap_attack_catches: 120,
    speed_score: 92,
    strength_score: 80,
    updated_at: '2024-06-10',
  },
];

export const mockMessages = [
  { id: 'm1', sender: 'Coach Davis', body: 'Great work on leadership drill.', date: '2024-06-09' },
  { id: 'm2', sender: 'Coach Davis', body: 'Reminder: submit literacy journal.', date: '2024-06-08' },
];

export const mockLeaderboards = {
  xp: mockAthletes.sort((a, b) => b.xp - a.xp),
  speed: mockAthletes.sort((a, b) => a.forty - b.forty),
  literacy: mockAthletes.sort((a, b) => b.literacy - a.literacy),
};
