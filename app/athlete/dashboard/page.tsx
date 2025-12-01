import { Card, CardContent, CardHeader } from '../../../components/ui/card';
import { Stat } from '../../../components/ui/stat';
import { Button } from '../../../components/ui/button';
import { Leaderboards } from '../../../components/sections/Leaderboards';
import { ScheduleList } from '../../../components/sections/ScheduleList';
import { mockXPState, mockLiteracy, mockLeadership } from '../../../lib/mockData';

export default function AthleteDashboard() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 lg:grid-cols-3">
        <Card>
          <CardHeader title="XP & Rank" action={<Button size="sm" variant="secondary" href="/athlete/xp" asChild><a>View</a></Button>} />
          <CardContent>
            <div className="grid grid-cols-2 gap-3">
              <Stat label="XP" value={`${mockXPState.xp}`} hint="Daily check-in, practice, literacy" />
              <Stat label="Rank" value={mockXPState.rank} hint={`Streak x${mockXPState.streak_count}`} />
              <Stat label="Badges" value={mockXPState.badges.length} />
              <Stat label="Streak" value={`${mockXPState.streak_count} days`} />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader title="Literacy" action={<Button size="sm" variant="secondary" href="/athlete/literacy" asChild><a>Track</a></Button>} />
          <CardContent>
            <div className="grid grid-cols-2 gap-3">
              <Stat label="Reading Streak" value={`${mockLiteracy.reading_streak} days`} />
              <Stat label="Journal Entries" value={mockLiteracy.journal_entries} />
              <Stat label="Vocab Mastery" value={`${mockLiteracy.vocabulary_mastery}%`} />
              <Stat label="Weekly Assignment" value={mockLiteracy.weekly_assignment.slice(0, 20) + '…'} />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader title="Leadership" action={<Button size="sm" variant="secondary" href="/athlete/leadership" asChild><a>Open</a></Button>} />
          <CardContent>
            <div className="grid grid-cols-2 gap-3">
              <Stat label="Leadership Points" value={mockLeadership.leadership_points} />
              <Stat label="Attendance" value={`${mockLeadership.attendance_score}%`} />
              <Stat label="Discipline" value={`${mockLeadership.discipline_flags} flags`} />
              <Stat label="Notes" value={mockLeadership.character_notes.slice(0, 16) + '…'} />
            </div>
          </CardContent>
        </Card>
      </div>

      <ScheduleList />
      <Leaderboards />
    </div>
  );
}
