import MainLayout from '../layout/MainLayout';
import Dashboard from '../pages/dashboard/Dashboard';

const PublicRoutes = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Dashboard />
      },
      {
        path: '/about',
        element: <div>About page</div>
      },
      {
        path: '/contact',
        element: <div>Contact</div>
      }
    ]
  }
];

export default PublicRoutes;
