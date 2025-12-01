import { ReactNode } from 'react';
import { DashboardShell } from '../../components/layouts/DashboardShell';

export default function AdminLayout({ children }: { children: ReactNode }) {
  return <DashboardShell role="admin">{children}</DashboardShell>;
}
