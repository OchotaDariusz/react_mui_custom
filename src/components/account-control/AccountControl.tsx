import React, { useContext } from 'react';
import { Badge, Box, IconButton, type Theme } from '@mui/material';
import {
  AccountCircle,
  Mail as MailIcon,
  MoreVert as MoreIcon,
  Notifications as NotificationsIcon
} from '@mui/icons-material';
import { AuthContext } from '../../context';

export const AccountControl = (props: {
  ariaControls: string;
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
  ariaMobileControls: string;
  onMobileClick: (event: React.MouseEvent<HTMLElement>) => void;
}) => {
  const authCtx = useContext(AuthContext);

  return (
    <>
      <Box
        sx={{
          display: { xs: 'none', md: 'flex' },
          marginLeft: '.5em',
          marginRight: '-.5em',
          background: (theme) => theme.palette.background.default,
          color: (theme: Theme) => theme.palette.text.primary
        }}
      >
        {authCtx.isLoggedIn && (
          <>
            <IconButton size="large" color="inherit">
              <Badge badgeContent={4} aria-label="messages" color="error">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton size="large" aria-label="notifications" color="inherit">
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </>
        )}
        <IconButton
          size="large"
          edge="end"
          aria-label="account of current user"
          aria-controls={props.ariaControls}
          aria-haspopup="true"
          onClick={props.onClick}
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
      </Box>
      <Box sx={{ display: { xs: 'flex', md: 'none' }, justifyContent: 'flex-end', width: '100%', flex: 1 }}>
        <IconButton
          size="large"
          aria-label="show more"
          aria-controls={props.ariaMobileControls}
          aria-haspopup="true"
          onClick={props.onMobileClick}
          color="inherit"
        >
          <MoreIcon
            sx={{
              marginLeft: '.5em',
              marginRight: '-.5em',
              color: 'text.primary'
            }}
          />
        </IconButton>
      </Box>
    </>
  );
};
