import MainLayout from '../layout/MainLayout';
import { Navigate } from 'react-router-dom';

const UserRoutes = [
  {
    path: '/account',
    element: <MainLayout />,
    children: [
      {
        path: '/account',
        element: <Navigate to={'/account/profile'} />
      },
      {
        path: '/account/profile',
        element: <div>user profile</div>
      },
      {
        path: '/account/settings',
        element: <div>user settings</div>
      }
    ]
  }
];

export default UserRoutes;
