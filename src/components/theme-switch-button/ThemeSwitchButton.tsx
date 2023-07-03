import React from 'react';
import { IconButton, type Theme } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';

export const ThemeSwitchButton = (props: { theme: Theme; onToggle: () => void }) => {
  return (
    <IconButton
      onClick={props.onToggle}
      sx={{
        flexGrow: 1,
        borderRadius: (theme: Theme) => theme.shape.borderRadius
      }}
      color="inherit"
    >
      {props.theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
    </IconButton>
  );
};
