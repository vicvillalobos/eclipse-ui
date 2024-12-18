import classes from './AppShell.module.scss';
import { Outlet } from 'react-router';
import { Navbar } from '@/components/Shell/Navbar';

export const AppShell = (): React.ReactElement => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};
