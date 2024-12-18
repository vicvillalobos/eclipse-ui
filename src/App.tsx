import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';
import { defaultTheme } from './config/theme/Default.theme';
import { Router } from './Router';

export default function App() {
  return (
    <MantineProvider theme={defaultTheme}>
      <Router />
    </MantineProvider>
  );
}
