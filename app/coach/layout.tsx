import { ReactNode } from 'react';
import { DashboardShell } from '../../components/layouts/DashboardShell';

export default function CoachLayout({ children }: { children: ReactNode }) {
  return <DashboardShell role="coach">{children}</DashboardShell>;
}
