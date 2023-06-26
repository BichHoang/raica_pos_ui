import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import logo from './images/logo.jpg';
import './stylesheets/login.css';

async function loginUser(credentials) {
  return fetch(`${process.env.REACT_APP_API_HOST}/api/auth/login`, {
    method: 'POST',
    headers: {
     'Content-Type': 'application/json',
     'Accept': 'application/json',
    },
    body: JSON.stringify(credentials)
  })
   .then(data => data.json())
}

function Login({ setToken }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      email,
      password
    });
    setToken(token);
  }

  return (
    <div className="Login">
      <section className="Login-content">
        <Paper elevation={2} sx={{ padding: '32px 40px',  }}>
          <img src={logo} className="Login-logo" alt="logo" />
          <Box
            component="form"
            sx={{
              display: 'flex',
              'flex-direction': 'column',
              '& .MuiTextField-root': { m: 1, width: '20ch' },
            }}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <TextField
              required
              id="email"
              label="Email"
              onChange={e => setEmail(e.target.value)}
            />
            <TextField
              required
              id="password"
              label="Password"
              type="password"
              onChange={e => setPassword(e.target.value)}
            />
            <div className="Login-button">
              <Button
                onClick={handleSubmit}
                variant="contained"
                type="submit"
                sx={{
                  boxShadow: 'none',
                  backgroundColor: 'rgb(35, 173, 78)',
                  width: '120px',
                  padding: '8px 16px',
                  '&:hover': { backgroundColor: '#187936' },
                }}
              >
                Log In
              </Button>
            </div>
          </Box>
        </Paper>
      </section>
    </div>
  );
}

export default Login;
