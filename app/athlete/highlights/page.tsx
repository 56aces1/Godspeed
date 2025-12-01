import { Card, CardContent, CardHeader } from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';

export default function HighlightsPage() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader title="Upload Highlights" />
        <CardContent>
          <div className="flex flex-col gap-3 text-sm text-slate-200">
            <input type="file" className="input" />
            <input className="input" placeholder="Title" />
            <textarea className="input min-h-[120px]" placeholder="Description and tags" />
            <Button>Upload Media</Button>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader title="Recent Highlights" />
        <CardContent>
          <div className="grid gap-3 md:grid-cols-3">
            {[1, 2, 3].map((n) => (
              <div key={n} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-3">
                <div className="h-32 rounded-xl bg-gradient-to-br from-blue-700/40 to-emerald-600/30" />
                <p className="mt-2 font-semibold">Highlight #{n}</p>
                <p className="text-xs text-slate-400">Coach-approved clip</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
