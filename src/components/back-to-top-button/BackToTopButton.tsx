import React from 'react';
import { Box, Fab, Fade, useScrollTrigger } from '@mui/material';
import { KeyboardArrowUp as KeyboardArrowUpIcon } from '@mui/icons-material';

export const BackToTopButton = () => {
  const trigger = useScrollTrigger({
    disableHysteresis: false,
    threshold: 100
  });

  const handleClick = (_event: React.MouseEvent<HTMLDivElement>) => {
    window.scrollTo(0, 0);
  };

  return (
    <Fade in={trigger}>
      <Box onClick={handleClick} role="presentation" sx={{ position: 'fixed', bottom: 16, right: 16 }}>
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </Box>
    </Fade>
  );
};
