import { useEffect } from 'react';
import { logout } from '../../api/auth.js';

const LogoutPage = () => {
  // TODO:
  // - Perform the logout (send the request to the logout route)
  // - Navigate to the homepage
  useEffect(() => {
    logout();
  }, []);
  return <></>;
};

export default LogoutPage;
