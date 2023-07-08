import React from 'react';
import { Box, Container } from '@mui/material';
import { Outlet } from 'react-router-dom';

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

export default MainContent;
