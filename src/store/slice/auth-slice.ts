import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import type { AuthState } from '../../common/types';

export const initialState: AuthState = {
  id: '',
  email: '',
  firstName: '',
  lastName: '',
  roles: [],
  sex: ''
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<AuthState>) => {
      return { ...state, ...action.payload };
    },
    logout: (state) => {
      return { ...state, ...initialState };
    }
  }
});

export const { login, logout } = authSlice.actions;
export const { reducer }: { reducer: typeof authSlice.reducer } = authSlice;
