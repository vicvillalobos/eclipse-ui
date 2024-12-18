import classes from './Navbar.module.scss';
import { IconHome, IconSettings } from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import { Stack } from '@mantine/core';

export const Navbar = (): React.ReactElement => {
  return (
    <nav className={classes.nav}>
      <Stack gap="xs">
        <Link to="/">
          <IconHome size={24} />
        </Link>
        <Link to="/settings">
          <IconSettings size={24} />
        </Link>
      </Stack>
    </nav>
  );
};
