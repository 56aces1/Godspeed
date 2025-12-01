import { Role } from './types';

export type NavItem = { href: string; label: string };

export const navByRole: Record<Role, NavItem[]> = {
  athlete: [
    { href: '/athlete/dashboard', label: 'Dashboard' },
    { href: '/athlete/check-in', label: 'Daily Check-In' },
    { href: '/athlete/xp', label: 'XP & Rank' },
    { href: '/athlete/metrics', label: 'Metrics Tracker' },
    { href: '/athlete/literacy', label: 'Literacy' },
    { href: '/athlete/leadership', label: 'Leadership' },
    { href: '/athlete/schedule', label: 'Schedule' },
    { href: '/athlete/player-card', label: 'Player Card' },
    { href: '/athlete/highlights', label: 'Highlights' },
    { href: '/athlete/notifications', label: 'Notifications' },
  ],
  parent: [
    { href: '/parent/dashboard', label: 'Dashboard' },
    { href: '/parent/academic', label: 'Academic & Literacy' },
    { href: '/parent/behavior', label: 'Behavior Notes' },
    { href: '/parent/reports', label: 'Weekly Reports' },
    { href: '/parent/messages', label: 'Coach Messages' },
    { href: '/parent/tournaments', label: 'Tournament Info' },
    { href: '/parent/attendance', label: 'Attendance' },
  ],
  coach: [
    { href: '/coach/dashboard', label: 'Dashboard' },
    { href: '/coach/roster', label: 'Team Roster' },
    { href: '/coach/evaluations', label: 'Evaluations' },
    { href: '/coach/attendance', label: 'Attendance Logs' },
    { href: '/coach/practice-plans', label: 'Practice Plans' },
    { href: '/coach/metrics', label: 'Metric Input' },
    { href: '/coach/leadership', label: 'Leadership Notes' },
    { href: '/coach/media', label: 'Media Upload' },
    { href: '/coach/notifications', label: 'Notifications' },
  ],
  admin: [
    { href: '/admin/teams', label: 'All Teams' },
    { href: '/admin/athletes', label: 'All Athletes' },
    { href: '/admin/approve-users', label: 'Approve Users' },
    { href: '/admin/import', label: 'Bulk Import' },
    { href: '/admin/tournaments', label: 'Tournament Mgmt' },
    { href: '/admin/sponsors', label: 'Sponsors' },
    { href: '/admin/announcements', label: 'Announcements' },
  ],
};
