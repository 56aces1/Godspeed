import { ReactNode } from 'react';
import { DashboardShell } from '../../components/layouts/DashboardShell';

export default function ParentLayout({ children }: { children: ReactNode }) {
  return <DashboardShell role="parent">{children}</DashboardShell>;
}
