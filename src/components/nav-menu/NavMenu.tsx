import React from 'react';
import { List, Paper, useTheme } from '@mui/material';
import { Home, LockPerson, Mail, SettingsApplications, QuestionMarkOutlined } from '@mui/icons-material';

import { NavMenuItem } from './NavMenuItem';

const navMenuItems = [
  {
    icon: <Home />,
    label: 'Dashboard',
    route: '/'
  },
  {
    icon: <LockPerson />,
    label: 'Auth',
    route: '/auth'
  },
  {
    icon: <SettingsApplications />,
    label: 'Medical Services',
    route: '/account/settings'
  },
  {
    icon: <QuestionMarkOutlined />,
    label: 'About',
    route: '/about'
  },
  {
    icon: <Mail />,
    label: 'Contact',
    route: '/contact'
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
          return <NavMenuItem key={index} icon={item.icon} label={item.label} routePath={item.route} />;
        })}
      </List>
    </Paper>
  );
};
