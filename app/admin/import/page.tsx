import { Card, CardContent, CardHeader } from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';

export default function BulkImport() {
  return (
    <Card>
      <CardHeader title="Bulk Data Import" />
      <CardContent>
        <div className="space-y-3 text-sm text-slate-200">
          <input type="file" className="input" />
          <p className="text-xs text-slate-400">Upload CSV for athletes, metrics, or events.</p>
          <Button>Upload</Button>
        </div>
      </CardContent>
    </Card>
  );
}
