import { Outlet, Navigate } from 'react-router-dom';
import { LoginPage, RegisterPage } from '../pages';

const AuthRoutes = [
  {
    path: '/auth',
    element: <Outlet />,
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
];

export default AuthRoutes;
