import { Card, CardContent, CardHeader } from '../../../components/ui/card';
import { Stat } from '../../../components/ui/stat';
import { Button } from '../../../components/ui/button';
import { mockLiteracy } from '../../../lib/mockData';

export default function LiteracyPage() {
  return (
    <div className="grid gap-4 lg:grid-cols-[1fr_320px]">
      <Card>
        <CardHeader title="Literacy Tracker" />
        <CardContent>
          <div className="grid grid-cols-2 gap-3">
            <Stat label="Reading Streak" value={`${mockLiteracy.reading_streak} days`} />
            <Stat label="Journal Entries" value={mockLiteracy.journal_entries} />
            <Stat label="Vocabulary Mastery" value={`${mockLiteracy.vocabulary_mastery}%`} />
            <Stat label="Coach Notes" value={mockLiteracy.coach_notes.slice(0, 22) + '…'} />
          </div>
          <div className="mt-6 space-y-3">
            <label className="space-y-1 text-sm">
              <span>Submit Reading Log</span>
              <textarea className="input min-h-[140px]" placeholder="What did you read today?" />
            </label>
            <div className="flex gap-2">
              <Button>Submit</Button>
              <Button variant="secondary">Mark Complete (+20 XP)</Button>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader title="Weekly Assignment" />
        <CardContent>
          <p className="text-sm text-slate-200">{mockLiteracy.weekly_assignment}</p>
          <div className="mt-4 space-y-2 text-sm">
            <p className="font-semibold">Checklist</p>
            <ul className="space-y-1 text-slate-300">
              <li>• Read 20 minutes/day</li>
              <li>• Journal reflection 3x/week</li>
              <li>• Add 5 vocab words</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
