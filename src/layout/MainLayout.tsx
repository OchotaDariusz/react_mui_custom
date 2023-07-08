import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Box, Container } from '@mui/material';
import { styled } from '@mui/material/styles';

import Header from './header/Header';
import SideNavigation from './side-navigation/SideNavigation';

const MainContainer = styled(Box)(() => ({
  display: 'flex',
  boxShadow: 'inset 0 0 5em 0 rgba(0,0,0,0.2)'
}));

const MainContent = () => {
  return (
    <Box
      component="section"
      sx={{
        flexGrow: 1,
        p: 3,
        marginTop: '64px',
        justifyContent: 'center'
      }}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          minWidth: '100%'
        }}
      >
        <Outlet />
      </Container>
    </Box>
  );
};

const MainLayout = () => {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <MainContainer component="main">
      <Header open={open} onClick={toggleOpen} />
      <SideNavigation open={open} onClick={toggleOpen} />
      <MainContent />
    </MainContainer>
  );
};

export default MainLayout;
