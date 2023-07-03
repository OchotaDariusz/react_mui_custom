import React from 'react';
import { Button, Card as MuiCard, CardActionArea, CardActions, CardContent, Divider, Typography } from '@mui/material';

export const Card: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <MuiCard
      sx={{
        boxShadow:
          'inset 0 -.5em 2.5em -5px rgba(0,0,0,0.03),0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)',
        p: 5,
        mx: 0,
        mt: 3,
        mb: 5,
        border: 'solid 1px rgba(0,0,0,0.15)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <CardActionArea sx={{ p: 4, m: 2 }}>
        <Typography variant="h4">Card</Typography>
      </CardActionArea>
      <Divider sx={{ width: '100%' }} />
      <CardContent>{children}</CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </MuiCard>
  );
};
