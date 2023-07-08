import React, { useEffect } from 'react';
import { TextField } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import { styled, alpha } from '@mui/material/styles';
import Autocomplete from '@mui/material/Autocomplete';
import { useNavigate } from 'react-router-dom';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  flex: 11,
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
    width: '100%',
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

const StyledInputBase = styled(TextField)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-root': {
    backgroundColor: 'transparent',
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%'
  },
  '& .MuiInputBase-input': {
    color: theme.palette.text.secondary,
    transition: theme.transitions.create(['width', 'color', 'background-color', 'padding'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.shortest
    }),
    '&::placeholder': {
      marginLeft: theme.spacing(1)
    },
    '&::-webkit-search-cancel-button': {
      display: 'none'
    }
  }
}));

interface RouteOption {
  label: string;
  value: string;
  route: string;
}

const autocompleteOptions: RouteOption[] = [
  { label: 'Dashboard', value: 'dashboard home main', route: '' },
  { label: 'Login Account', value: 'authentication login page signin account', route: 'auth/login' },
  { label: 'Register Account', value: 'authentication register page signup account', route: 'auth/register' },
  { label: 'Profile', value: 'profile user page auth avatar account', route: 'account/profile' },
  {
    label: 'Settings',
    value: 'settings user page preferences configure auth email account',
    route: 'account/settings'
  },
  { label: 'About', value: 'about', route: 'about' },
  { label: 'Contact Page', value: 'contact', route: 'contact' }
];

export const SearchBox = () => {
  const [value, setValue] = React.useState<RouteOption | null>(null);
  const [inputValue, setInputValue] = React.useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (value !== null) {
      navigate(`/${value.route}`);
    }
  }, [value, inputValue]);

  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <Autocomplete
        disablePortal
        options={autocompleteOptions}
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue as RouteOption);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        renderInput={(params) => {
          return (
            <StyledInputBase {...params} placeholder="Search…" InputProps={{ ...params.InputProps, type: 'search' }} />
          );
        }}
        filterOptions={(options, state) => {
          const inputValue = state.inputValue.toLowerCase();
          return options.filter((option) => {
            const optionLabel = option.value.toLowerCase();
            return optionLabel.includes(inputValue);
          });
        }}
        getOptionLabel={(option) => option.label}
        fullWidth
      />
    </Search>
  );
};
