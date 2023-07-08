import React from 'react';
import { List, Paper, useTheme } from '@mui/material';
import { Flight, Home, Mail, MedicalServices, QuestionMarkOutlined } from '@mui/icons-material';

import { NavMenuItem } from './NavMenuItem';

const navMenuItems = [
  {
    icon: <Home />,
    label: 'Home'
  },
  {
    icon: <Flight />,
    label: 'Airports'
  },
  {
    icon: <MedicalServices />,
    label: 'Medical Services'
  },
  {
    icon: <QuestionMarkOutlined />,
    label: 'About'
  },
  {
    icon: <Mail />,
    label: 'Contact'
  }
];

export const NavMenu = () => {
  const theme = useTheme();

  return (
    <Paper
      component="nav"
      elevation={0}
      sx={{
        minHeight: '100vh',
        height: '100%',
        overflow: 'hidden',
        borderRadius: 0,
        transition: theme.transitions.create('background-color', {
          easing: 'ease-in-out',
          duration: '250ms'
        })
      }}
    >
      <List component="ul">
        {navMenuItems.map((item, index) => {
          return <NavMenuItem key={index} icon={item.icon} label={item.label} />;
        })}
      </List>
    </Paper>
  );
};
