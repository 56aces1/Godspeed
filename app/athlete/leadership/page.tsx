import { Card, CardContent, CardHeader } from '../../../components/ui/card';
import { Stat } from '../../../components/ui/stat';
import { mockLeadership } from '../../../lib/mockData';
import { Button } from '../../../components/ui/button';

export default function LeadershipPage() {
  return (
    <div className="grid gap-4 lg:grid-cols-[1fr_320px]">
      <Card>
        <CardHeader title="Leadership Tracker" />
        <CardContent>
          <div className="grid grid-cols-2 gap-3">
            <Stat label="Leadership Points" value={mockLeadership.leadership_points} />
            <Stat label="Attendance" value={`${mockLeadership.attendance_score}%`} />
            <Stat label="Discipline Flags" value={mockLeadership.discipline_flags} />
            <Stat label="Character" value={mockLeadership.character_notes.slice(0, 24) + '…'} />
          </div>
          <div className="mt-6 space-y-3">
            <label className="space-y-1 text-sm">
              <span>Leadership Action</span>
              <input className="input" placeholder="Describe a leadership moment" />
            </label>
            <Button>Log Action (+10 XP)</Button>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader title="Coach Rubric" />
        <CardContent>
          <ul className="space-y-2 text-sm text-slate-200">
            <li>• Leads dynamic warmup</li>
            <li>• Encourages teammates</li>
            <li>• Handles discipline constructively</li>
            <li>• Communicates play calls clearly</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
