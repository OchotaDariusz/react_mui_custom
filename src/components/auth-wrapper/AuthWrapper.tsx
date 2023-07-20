import React, { useCallback, useEffect, useState } from 'react';

import { AuthContext } from '../../context';
import { useAppDispatch } from '../../hooks';
import { axiosInstance } from '../../common/axios.config';
import { setCookie } from '../../common/utils';
import { login, logout } from '../../store/slice/auth-slice';
import type { AuthState } from '../../common/types';
import { JWT_LOCAL_STORAGE_KEY } from '../../common/constants';

export const AuthWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const appDispatch = useAppDispatch();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const ctxLogin = useCallback((state: AuthState) => {
    appDispatch(login(state));
    setIsLoggedIn(true);
  }, []);
  const ctxLogout = useCallback(() => {
    setCookie(JWT_LOCAL_STORAGE_KEY, '');
    appDispatch(logout());
    setIsLoggedIn(false);
  }, []);

  useEffect(() => {
    axiosInstance
      .get('/auth/current')
      .then((response) => {
        ctxLogin(response.data as AuthState);
      })
      .catch((_err) => {
        ctxLogout();
      });
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, login: ctxLogin, logout: ctxLogout }}>{children}</AuthContext.Provider>
  );
};
