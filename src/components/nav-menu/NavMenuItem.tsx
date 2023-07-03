import React from 'react';
import { Box, ListItem, ListItemButton, type Theme, Typography } from '@mui/material';

export const NavMenuItem = (props: { icon: JSX.Element; label: string }) => {
  return (
    <ListItem component="li" disablePadding>
      <ListItemButton
        sx={{
          margin: '.25em .5em .25em .5em',
          borderRadius: (theme: Theme) => theme.shape.borderRadius
        }}
      >
        <Box sx={{ marginRight: 1, display: 'flex', flex: 1, justifyContent: 'flex-start' }}>{props.icon}</Box>
        <Box sx={{ display: 'flex', flex: 1, justifyContent: 'flex-end' }}>
          <Typography variant="subtitle2" component="span" sx={{ p: 2 }}>
            {props.label}
          </Typography>
        </Box>
      </ListItemButton>
    </ListItem>
  );
};
