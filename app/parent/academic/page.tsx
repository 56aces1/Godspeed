import { Card, CardContent, CardHeader } from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';

export default function AcademicPage() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader title="Academic & Literacy Tracker" />
        <CardContent>
          <div className="grid gap-3 md:grid-cols-2">
            <label className="space-y-1 text-sm">
              <span>Reading Log</span>
              <textarea className="input min-h-[120px]" defaultValue="Finished chapter 3 of Mindset." />
            </label>
            <label className="space-y-1 text-sm">
              <span>Vocabulary Words</span>
              <textarea className="input min-h-[120px]" placeholder="List words here" />
            </label>
            <label className="space-y-1 text-sm">
              <span>Homework Completion</span>
              <input className="input" placeholder="% complete" />
            </label>
            <label className="space-y-1 text-sm">
              <span>Coach Feedback</span>
              <textarea className="input min-h-[120px]" placeholder="Coach comments" />
            </label>
          </div>
          <Button className="mt-4">Save</Button>
        </CardContent>
      </Card>
    </div>
  );
}
