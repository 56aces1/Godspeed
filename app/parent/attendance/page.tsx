import { Card, CardContent, CardHeader } from '../../../components/ui/card';

const attendance = [
  { date: '2024-06-10', status: 'Present', type: 'practice' },
  { date: '2024-06-09', status: 'Present', type: 'literacy' },
  { date: '2024-06-08', status: 'Absent', type: 'practice' },
];

export default function AttendancePage() {
  return (
    <Card>
      <CardHeader title="Attendance" />
      <CardContent>
        <table className="min-w-full text-sm">
          <thead className="text-left text-slate-400">
            <tr className="border-b border-slate-800">
              <th className="py-2 pr-3">Date</th>
              <th className="py-2 pr-3">Type</th>
              <th className="py-2 pr-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {attendance.map((row) => (
              <tr key={row.date} className="border-b border-slate-800/60 text-white">
                <td className="py-2 pr-3">{row.date}</td>
                <td className="py-2 pr-3">{row.type}</td>
                <td className="py-2 pr-3">{row.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </CardContent>
    </Card>
  );
}
