import { createContext } from 'react';

import type { AuthState } from '../../common/types';

export const AuthContext = createContext({
  login: (state: AuthState) => {},
  logout: () => {},
  isLoggedIn: false
});
