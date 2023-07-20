import React, { useContext, useEffect, useReducer, useState } from 'react';
// import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { handleTextChange, setCookie } from '../../common/utils';
import formReducer from '../../reducers/form-reducer';
import type { LoginRequest } from '../../common/types';
import { useAppSelector, useFetch } from '../../hooks';
import { HttpMethod, JWT_LOCAL_STORAGE_KEY } from '../../common/constants';
import { axiosInstance } from '../../common/axios.config';
import { AuthContext } from '../../context';
// import { toast } from 'react-toastify';

const initialLoginFormState = {
  email: '',
  password: ''
};

export const LoginPage = () => {
  const [isCheckboxSelected, setIsCheckboxSelected] = useState(false);
  const [formState, dispatch] = useReducer(formReducer, initialLoginFormState);
  const authState = useAppSelector((state) => state.auth);
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    error,
    isLoading,
    data,
    dataFetcher: sendRequest
  } = useFetch<{ accessToken: string }, LoginRequest>({
    url: '/auth/login',
    method: HttpMethod.POST,
    data: {}
  });

  useEffect(() => {
    if (error === null && !isLoading && data !== null) {
      console.log(data);
      setCookie(JWT_LOCAL_STORAGE_KEY, data.accessToken);
      axiosInstance
        .get('/auth/current', {
          headers: {
            Authorization: `Bearer ${data.accessToken}`
          }
        })
        .then((response) => {
          console.log(response.data);
          authCtx.login(response.data);
          navigate('/');
        })
        .catch((err) => {
          console.log(err);
          authCtx.logout();
        });
    }
  }, [error, isLoading, data]);

  useEffect(() => {
    console.log(authState);
  }, [authState]);

  const handleCheckbox = () => {
    setIsCheckboxSelected((prevState) => !prevState);
  };

  const textChangeHandler = () => {
    return (e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      handleTextChange(dispatch, e);
    };
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    sendRequest({
      email: formState.email,
      password: formState.password
    })
      .then((response) => {
        console.log(data);
        console.log(response);
      })
      .catch((err) => {
        console.log(err.message);
      })
      .finally(() => {
        console.log('finally');
        console.log(formState);
      });
  };

  return (
    <Container component="div" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <Avatar sx={{ m: 1, bgColor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={textChangeHandler()}
            value={formState.email}
            data-cy="input-login-email"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type={isCheckboxSelected ? 'text' : 'password'}
            id="password"
            autoComplete="current-password"
            onChange={textChangeHandler()}
            value={formState.password}
            data-cy="input-login-password"
          />
          <FormControlLabel
            control={<Checkbox defaultChecked={false} onChange={handleCheckbox} value="remember" color="primary" />}
            label="Show password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            disabled={isLoading}
            data-cy="button-login"
          >
            Sign In
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link to="/auth/register">
                <Typography variant="body2">{"Don't have an account? Sign Up"}</Typography>
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};
