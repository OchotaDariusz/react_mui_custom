import MainLayout from '../layout/MainLayout';
import Dashboard from '../pages/dashboard/Dashboard';
import { Navigate } from 'react-router-dom';
import { LoginPage, RegisterPage } from '../pages';
import { reverseAuthLoader as loader } from '../common/loaders';

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
      },
      {
        path: '/auth',
        loader,
        children: [
          {
            path: '/auth',
            element: <Navigate to="/auth/login" />
          },
          {
            path: '/auth/login',
            element: <LoginPage />
          },
          {
            path: '/auth/register',
            element: <RegisterPage />
          }
        ]
      }
    ]
  }
];

export default PublicRoutes;
