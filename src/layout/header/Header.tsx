import React, { useState } from 'react';
import {
  AppBar as MuiAppBar,
  type AppBarProps as MuiAppBarProps,
  Badge,
  IconButton,
  Menu,
  MenuItem,
  type Theme,
  Toolbar
} from '@mui/material';
import {
  AccountCircle,
  Mail as MailIcon,
  Menu as MenuIcon,
  Notifications as NotificationsIcon
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';

import { BackToTopButton, SearchBox } from '../../components';
import { AccountControl } from '../../components/account-control/AccountControl';
import { Link } from 'react-router-dom';

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open'
})<AppBarProps>(({ theme, open }) => ({
  ...(open === true && {
    marginLeft: 240,
    width: `calc(100% - ${240}px)`,
    transition: theme.transitions.create(['box-shadow', 'width', 'margin', 'z-index'], {
      easing: theme.transitions.easing.easeIn,
      duration: theme.transitions.duration.short
    }),
    zIndex: theme.zIndex.drawer - 1
  })
}));

const DrawerButton = (props: { onClick: () => void; open: boolean }) => {
  return (
    <IconButton
      edge="start"
      color="inherit"
      aria-label={`${props.open ? 'open' : 'closed'} drawer`}
      onClick={props.onClick}
      sx={{
        marginRight: '.5em',
        marginLeft: '-.5em',
        padding: '.5em',
        color: (theme: Theme) => theme.palette.text.primary
      }}
    >
      <MenuIcon />
    </IconButton>
  );
};

const Header = (props: { open: boolean; onClick: () => void }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
      sx={{ marginTop: '40px' }}
    >
      <MenuItem onClick={handleMenuClose}>
        <Link to="/account/profile">Profile</Link>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <Link to="/account">My account</Link>
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton size="large" aria-label="show 17 new notifications" color="inherit">
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <Link to="/account/profile">
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
        </Link>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <>
      <AppBar position="fixed" open={props.open}>
        <Toolbar
          sx={{
            pr: '24px',
            background: (theme) => theme.palette.background.default
          }}
        >
          <DrawerButton onClick={props.onClick} open={props.open} />
          <SearchBox />
          <AccountControl
            ariaControls={menuId}
            onClick={handleProfileMenuOpen}
            ariaMobileControls={mobileMenuId}
            onMobileClick={handleMobileMenuOpen}
          />
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
      <BackToTopButton />
    </>
  );
};

export default Header;
