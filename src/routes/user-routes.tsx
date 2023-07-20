import { Navigate } from 'react-router-dom';

import MainLayout from '../layout/MainLayout';
import loader from '../common/loaders';

const UserRoutes = [
  {
    path: '/account',
    element: <MainLayout />,
    loader,
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
