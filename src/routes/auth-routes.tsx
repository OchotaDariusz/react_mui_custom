import { Navigate } from 'react-router-dom';
import { LoginPage, RegisterPage } from '../pages';
import MainLayout from '../layout/MainLayout';

const AuthRoutes = [
  {
    path: '/auth',
    element: <MainLayout />,
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
