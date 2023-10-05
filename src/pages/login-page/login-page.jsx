import Typography from '@mui/material/Typography';
import { login } from '../../api/auth';

const LoginPage = () => {
  return (
    <>
      <Typography variant="h3" sx={{ textAlign: 'center', my: 6 }}>
        Login
      </Typography>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          // TODO: Pass in the user data
          await login();
        }}
      ></form>
    </>
  );
};

export default LoginPage;
