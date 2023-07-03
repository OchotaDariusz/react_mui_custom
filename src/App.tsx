import React, { useContext, useEffect } from 'react';
import { useTheme } from '@mui/material';

import { ThemeContext } from './context';
import MainLayout from './layout/MainLayout';

import './App.css';

function App() {
  const themeContext = useContext(ThemeContext);
  const theme = useTheme();

  useEffect(() => {
    console.log(themeContext.mode);
    console.log(theme.palette.mode);
  }, [themeContext.mode, theme.palette.mode]);

  return (
    <div>
      <MainLayout />
    </div>
  );
}

export default App;
