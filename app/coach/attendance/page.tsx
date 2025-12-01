import { Card, CardContent, CardHeader } from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';

const attendance = [
  { date: '2024-06-10', athlete: 'Anthony Bethel', status: 'Present' },
  { date: '2024-06-10', athlete: 'Jasmine Lee', status: 'Present' },
];

export default function CoachAttendance() {
  return (
    <Card>
      <CardHeader title="Attendance Logs" />
      <CardContent>
        <div className="flex gap-2 mb-3">
          <Button size="sm">Mark Practice</Button>
          <Button size="sm" variant="secondary">Export</Button>
        </div>
        <table className="min-w-full text-sm">
          <thead className="text-left text-slate-400">
            <tr className="border-b border-slate-800">
              <th className="py-2 pr-3">Date</th>
              <th className="py-2 pr-3">Athlete</th>
              <th className="py-2 pr-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {attendance.map((row) => (
              <tr key={`${row.date}-${row.athlete}`} className="border-b border-slate-800/60 text-white">
                <td className="py-2 pr-3">{row.date}</td>
                <td className="py-2 pr-3">{row.athlete}</td>
                <td className="py-2 pr-3">{row.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </CardContent>
    </Card>
  );
}
