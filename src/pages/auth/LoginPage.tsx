import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
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
// import { toast } from 'react-toastify';

// const initialLoginFormState = {
//   email: '',
//   password: ''
// };

export const LoginPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isCheckboxSelected, setIsCheckboxSelected] = useState(false);
  // const [formState, dispatch] = useReducer(signFormReducer, initialLoginFormState);
  // const authDispatch = useDispatch();
  // const navigate = useNavigate();

  const handleCheckbox = () => {
    setIsCheckboxSelected((prevState) => !prevState);
  };

  const textChangeHandler = () => {
    return (_e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      console.log('textChangeHandler');
    };
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // const loginRequest: LoginRequest = {
    //   username: formState.email,
    //   password: formState.password,
    // };
    setIsLoading(true);
    // const toastId = toast.loading('Wait...');
    // fetchData
    //   .post('/api/auth/login', loginRequest)
    //   .then(async (response) => {
    //     if (JWT_LOCAL_STORAGE_KEY in response.data) {
    //       localStorage.setItem(
    //         JWT_LOCAL_STORAGE_KEY,
    //         response.data.access_token
    //       );
    //     } else {
    //       throw new Error('Login failed.');
    //     }
    //     try {
    //       // const user: AxiosResponse<User> = await fetchData.get(
    //       //   '/api/auth/current'
    //       // );
    //       // authDispatch(login(user.data));
    //       navigate('/');
    //       toast.update(toastId, {
    //         render: 'Logged in.',
    //         type: 'success',
    //         isLoading: false,
    //         closeOnClick: true,
    //         autoClose: 3000,
    //         closeButton: true,
    //       });
    //     } catch (_err) {
    //       throw new Error("There's no such user.");
    //     }
    //   })
    //   .catch((err) => {
    //     toast.update(toastId, {
    //       render: 'Something went wrong!',
    //       type: 'error',
    //       isLoading: false,
    //       closeOnClick: true,
    //       autoClose: 3000,
    //       closeButton: true,
    //     });
    //     toast.error(err.message);
    //   })
    //   .finally(() => {
    //     setIsLoading(false);
    //   });
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
            // value={formState.email}
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
            // value={formState.password}
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
