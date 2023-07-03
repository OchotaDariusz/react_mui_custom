import React, { useCallback, useMemo, useState } from 'react';
import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { ThemeContext } from '../../context';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { toggleTheme } from '../../store/slice/theme-slice';
import themeConfig from '../../theme/index';

export const ThemeWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const appDispatch = useAppDispatch();
  const themeSlice = useAppSelector((state) => state.theme);
  const [mode, setMode] = useState(themeSlice.mode);
  const toggleMode = useCallback(() => {
    setMode((prevMode) => {
      const themeMode = prevMode === 'light' ? 'dark' : 'light';
      appDispatch(toggleTheme(themeMode));
      return themeMode;
    });
  }, []);
  const theme = useMemo(() => {
    return createTheme({ ...themeConfig(mode) });
  }, [mode]);

  return (
    <ThemeContext.Provider value={{ mode, toggleMode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
