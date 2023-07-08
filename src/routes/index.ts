import { useRoutes } from 'react-router-dom';

import PublicRoutes from './public-routes';
import ProtectedRoutes from './protected-routes';

export default function appRoutes() {
  return useRoutes([...PublicRoutes, ...ProtectedRoutes]);
}
