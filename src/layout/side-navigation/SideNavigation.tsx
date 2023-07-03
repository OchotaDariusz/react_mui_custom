import React, { useContext } from 'react';
import { Drawer as MuiDrawer, Divider, Toolbar, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';

import { ThemeSwitchButton, NavMenu } from '../../components';
import { ThemeContext } from '../../context';

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
  '& .MuiPaper-root': {
    overflowY: 'hidden',
    boxShadow: '0px 65px 4px -1px rgba(0,0,0,0.2),0px 65px 5px 0px rgba(0,0,0,0.14),0px 65px 10px 0px rgba(0,0,0,0.12)'
  },
  '& .MuiDrawer-paper': {
    ...(open === false && {
      overflowX: 'hidden',
      transition: theme.transitions.create(['box-shadow', 'width', 'margin', 'z-index'], {
        easing: theme.transitions.easing.easeIn,
        duration: theme.transitions.duration.leavingScreen
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9)
      }
    })
  }
}));

const SideNavigation = (props: { open: boolean; onClick: () => void }) => {
  const theme = useTheme();
  const themeContext = useContext(ThemeContext);

  return (
    <Drawer variant="permanent" open={props.open}>
      <Toolbar
        sx={{
          background: (theme) => theme.palette.background.default,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          px: [1]
        }}
      >
        <ThemeSwitchButton onToggle={themeContext.toggleMode} theme={theme} />
      </Toolbar>
      <NavMenu />
      <Divider />
    </Drawer>
  );
};

export default SideNavigation;
