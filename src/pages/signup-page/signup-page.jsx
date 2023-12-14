import { Typography, Box, Container, TextField, Button } from '@mui/material';
import { signup } from '../../api/auth';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const SignupPage = ({ currentUser, setCurrentUser }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(password);
    if (password.length < 8) {
      setError('Password must be at least 8 characters');
      return;
    }

    try {
      const user = await signup({ username, email, password });
      setCurrentUser(user);
      navigate('/');
    } catch (error) {
      // TODO: Set an error state
      // TODO: Render the error state down there v
      setError(error.message);
    }
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
              Sign Up
            </Typography>
          </Box>
          <TextField
            required
            variant="standard"
            helperText=" "
            id="demo-helper-text-aligned-no-helper"
            label="Username"
            size="small"
            type="username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
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
          {error && <div style={{ color: '#ef5350' }}>{error}</div>}
          <Button
            type="submit"
            variant="contained"
            color="secondary"
            value="submit"
            size="large"
            sx={{ width: '100%', mt: 3 }}
          >
            Sign Up
          </Button>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography
            component="div"
            variant="body1"
            sx={{
              my: 10,
            }}
          >
            Already a member?{' '}
            <Link style={{ color: '#ef5350' }} to={'/login'}>
              Click here
            </Link>{' '}
            to log in.
          </Typography>
        </Box>
      </Container>
    </>
  );
};

SignupPage.propTypes = {
  setCurrentUser: PropTypes.func,
  currentUser: PropTypes.object,
};

export default SignupPage;
