import { ScheduleList } from '../../../components/sections/ScheduleList';
import { NotificationList } from '../../../components/sections/NotificationList';

export default function SchedulePage() {
  return (
    <div className="space-y-6">
      <ScheduleList />
      <NotificationList />
    </div>
  );
}
