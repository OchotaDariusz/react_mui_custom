import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { setCookie } from '../../common/utils';
import { THEME_MODE_LOCAL_STORAGE_KEY } from '../../common/constants';
import type { ThemeMode } from '../../common/types';

const initialState: { mode: ThemeMode } = {
  mode: 'light'
};

const themeSlice = createSlice({
  name: THEME_MODE_LOCAL_STORAGE_KEY,
  initialState,
  reducers: {
    toggleTheme: (state, action: PayloadAction<ThemeMode>) => {
      const themeMode = action.payload;
      setCookie(THEME_MODE_LOCAL_STORAGE_KEY, themeMode);
      state.mode = themeMode;
    }
  }
});

export const { toggleTheme } = themeSlice.actions;
export const { reducer }: { reducer: typeof themeSlice.reducer } = themeSlice;
