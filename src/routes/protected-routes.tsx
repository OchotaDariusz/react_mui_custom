import AuthRoutes from './auth-routes';
import UserRoutes from './user-routes';

const ProtectedRoutes = [...AuthRoutes, ...UserRoutes];

export default ProtectedRoutes;
