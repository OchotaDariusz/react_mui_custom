import React from 'react';
import { createHashRouter, RouterProvider } from 'react-router-dom';

import PublicRoutes from './routes/public-routes';
import ProtectedRoutes from './routes/protected-routes';

const router = createHashRouter([...PublicRoutes, ...ProtectedRoutes]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
