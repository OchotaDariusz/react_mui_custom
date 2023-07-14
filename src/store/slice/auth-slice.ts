import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import type { AuthState } from '../../common/types';

export const initialState: AuthState = {
  isLoggedIn: false,
  id: '',
  email: '',
  firstName: '',
  lastName: '',
  roles: []
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<AuthState>) => {
      return { ...state, ...action.payload, isLoggedIn: true };
    },
    logout: (state) => {
      return { ...state, ...initialState };
    }
  }
});

export const { login, logout } = authSlice.actions;
export const { reducer }: { reducer: typeof authSlice.reducer } = authSlice;
