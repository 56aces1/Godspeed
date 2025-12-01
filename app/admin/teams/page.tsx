import { Card, CardContent, CardHeader } from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';

const teams = [
  { id: 'team-1', name: '14U Elite', coach: 'Coach Davis', age: '14U' },
  { id: 'team-2', name: '12U Elite', coach: 'Coach Smith', age: '12U' },
];

export default function AdminTeams() {
  return (
    <Card>
      <CardHeader title="All Teams" />
      <CardContent>
        <div className="space-y-3 text-sm text-slate-200">
          {teams.map((team) => (
            <div key={team.id} className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-900/60 px-3 py-2">
              <div>
                <p className="font-semibold">{team.name}</p>
                <p className="text-xs text-slate-400">Coach {team.coach} • {team.age}</p>
              </div>
              <div className="flex gap-2">
                <Button size="sm" variant="secondary">Roster</Button>
                <Button size="sm" variant="secondary">Schedule</Button>
              </div>
            </div>
          ))}
          <Button>Add Team</Button>
        </div>
      </CardContent>
    </Card>
  );
}
