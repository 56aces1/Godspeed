import { ReactNode } from 'react';
import { DashboardShell } from '../../components/layouts/DashboardShell';

export default function AthleteLayout({ children }: { children: ReactNode }) {
  return <DashboardShell role="athlete">{children}</DashboardShell>;
}
