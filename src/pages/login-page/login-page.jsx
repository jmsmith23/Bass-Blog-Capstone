import Typography from '@mui/material/Typography';
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
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          await login({ email, password });
          navigate('/');
        }}
      >
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button>Submit</button>
      </form>
    </>
  );
};

export default LoginPage;
