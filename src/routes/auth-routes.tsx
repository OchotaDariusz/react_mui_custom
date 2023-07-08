import { Outlet, Navigate } from 'react-router-dom';

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
        element: <div>login</div>
      },
      {
        path: '/auth/register',
        element: <div>registration</div>
      }
    ]
  }
];

export default AuthRoutes;
