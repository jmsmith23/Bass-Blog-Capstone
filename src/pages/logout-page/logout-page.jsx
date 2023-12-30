import { useEffect } from 'react';
import { logout } from '../../api/auth.js';
import { useNavigate } from 'react-router-dom';

const LogoutPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    logout();
    navigate('/');
  }, [navigate]);
  return <></>;
};

export default LogoutPage;
