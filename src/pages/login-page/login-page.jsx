import { Typography, Box, Container, TextField, Button } from '@mui/material';
import { login } from '../../api/auth';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login({ email, password });
    navigate('/');
  };

  return (
    <>
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          mb: 8,
        }}
        maxWidth="sm"
      >
        <Typography component="div" variant="body1" sx={{ my: 10 }}>
          Login or create your account to become part of our bass community!
        </Typography>
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { mb: 1, width: '100%' },
          }}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Typography variant="h4" sx={{ mb: 5 }}>
              Login
            </Typography>
          </Box>
          <TextField
            required
            variant="standard"
            helperText=" "
            id="demo-helper-text-aligned-no-helper"
            label="Email"
            size="small"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <TextField
            required
            variant="standard"
            helperText=" "
            id="demo-helper-text-aligned-no-helper"
            label="Password"
            size="large"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <Button
            variant="contained"
            color="secondary"
            value="submit"
            size="large"
            sx={{ width: '100%', mt: 3 }}
          >
            Login
          </Button>
          <Typography component="div" variant="body1" sx={{ my: 10 }}>
            Need to create an account?{' '}
            <Link style={{ color: '#ef5350' }} to={'/signup'}>
              Click here
            </Link>{' '}
            to create account.
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default LoginPage;
