import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from 'react-router-dom';
import { AppShell } from './layouts/shell/AppShell';
import { HomePage } from './pages/Home.page';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<AppShell />}>
      <Route index element={<HomePage />} path="" />
    </Route>
  </Routes>
);

export function Router() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
