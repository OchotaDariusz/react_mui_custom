import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { setCookie } from '../../utils';

const initialState: { mode: 'dark' | 'light' } = {
  mode: 'light'
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state, action: PayloadAction<'dark' | 'light'>) => {
      const themeMode = action.payload;
      setCookie('theme', themeMode);
      state.mode = themeMode;
    }
  }
});

export const { toggleTheme } = themeSlice.actions;
export const { reducer }: { reducer: typeof themeSlice.reducer } = themeSlice;
