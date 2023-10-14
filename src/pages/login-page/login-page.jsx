import { Typography, Box, Container, TextField, Button } from '@mui/material';
import { login } from '../../api/auth';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  return (
    <>
      <Typography variant="h3" sx={{ textAlign: 'center', my: 6 }}>
        Login
      </Typography>
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
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { mb: 1, width: '100%' },
          }}
          noValidate
          autoComplete="off"
          onSubmit={async (e) => {
            e.preventDefault();
            await login({ email, password });
            navigate('/');
          }}
        >
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
            size="small"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </Box>
        <Button variant="contained" color="primary">
          Login
        </Button>
      </Container>
    </>
  );
};

export default LoginPage;
