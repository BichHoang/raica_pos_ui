import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import logo from './images/logo.svg';
import './stylesheets/Login.css';

function Login() {
  return (
    <div className="Login">
      <section className="Login-content">
        <Paper elevation={2} sx={{ padding: ' 32px 20px' }}>
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
          >
            <TextField
              required
              id="email"
              label="Email"
            />
            <TextField
              required
              id="password"
              label="Password"
              type="password"
            />
            <div className="Login-button">
              <Button
                variant="contained"
                sx={{ boxShadow: 'none', backgroundColor: 'rgb(0, 30, 60)' }}
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
