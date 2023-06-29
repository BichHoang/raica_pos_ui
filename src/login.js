import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { isEmpty } from 'lodash';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import ErrorIcon from '@mui/icons-material/Error';
import logo from './images/logo.jpg';
import './stylesheets/login.css';

function Login({ setToken }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    if (!isEmpty(email) || !isEmpty(password)) {
      setIsError(false);
      setError();
    }
  }, [email, password, setIsError, setError]);

  const handleSubmit = async e => {
    e.preventDefault();

    if (isEmpty(email) || isEmpty(password)) {
      setIsError(true);
      return false;
    }

    await axios.post(`${process.env.REACT_APP_API_HOST}/api/auth/login`,
      {
        email,
        password,
      },
      {
        headers: {
         'Content-Type': 'application/json',
         'Accept': 'application/json',
        },
      })
      .then(resp => {
        if (resp.status === 200) {
          setToken(resp.data);
        }
      })
      .catch(err => setError("Invalid username or password"))
  }

  return (
    <div className="Login">
      <section className="Login-content">
        <Paper elevation={0} sx={{ padding: '32px 40px',  }}>
          <img src={logo} className="Login-logo" alt="logo" />
          <Box
            component="form"
            className="Login-form"
            sx={{
              display: 'flex',
              'flex-direction': 'column',
            }}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <FormControl sx={{ mb: 2 }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">Email</InputLabel>
              <OutlinedInput
                required
                error={isError}
                id="email"
                label="Email"
                onChange={e => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
              <OutlinedInput
                required
                error={isError}
                id="password"
                label="Password"
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                onChange={e => setPassword(e.target.value)}
              />
            </FormControl>
            <div className="Login-button">
              <Button
                onClick={handleSubmit}
                variant="contained"
                type="submit"
                sx={{
                  boxShadow: 'none',
                  backgroundColor: '#23ad4e',
                  width: '100%',
                  padding: '12px 16px',
                  '&:hover': { backgroundColor: '#187936' },
                }}
              >
                Log In
              </Button>
            </div>
            {error && (
              <div className="Login-error">
                <ErrorIcon sx={{ color: '#ff9800', marginRight: '6px', width: '20px' }} />
                {`${error}`}
              </div>
            )}
          </Box>
        </Paper>
      </section>
    </div>
  );
}

export default Login;
