import React from 'react';
import { InputBase } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import { styled, alpha } from '@mui/material/styles';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  flexGrow: 1,
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.mode === 'dark' ? theme.palette.common.white : theme.palette.common.black, 0.15),
  '&:hover': {
    backgroundColor: alpha(
      theme.palette.mode === 'dark' ? theme.palette.common.white : theme.palette.common.black,
      0.25
    )
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
    display: 'block'
  },
  [theme.breakpoints.down('sm')]: {
    display: 'none'
  }
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.text.secondary
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    flexGrow: 1,
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create(['width', 'color', 'background-color', 'padding'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.shortest
    }),
    color: theme.palette.text.secondary,
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch'
      }
    }
  }
}));

export const SearchBox = () => {
  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} fullWidth />
    </Search>
  );
};
