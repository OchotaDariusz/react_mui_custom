import React, { useState } from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

import Header from './header/Header';
import SideNavigation from './side-navigation/SideNavigation';
import MainContent from './main-content/MainContent';

const MainContainer = styled(Box)(() => ({
  display: 'flex',
  boxShadow: 'inset 0 0 5em 0 rgba(0,0,0,0.2)'
}));

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
