import { useEffect } from 'react';
import { logout } from '../../api/auth.js';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const LogoutPage = ({ setCurrentUser }) => {
  const navigate = useNavigate();

  useEffect(() => {
    logout();
    navigate('/');
    setCurrentUser(null);
  }, [navigate, setCurrentUser]);
  return <></>;
};

LogoutPage.propTypes = {
  setCurrentUser: PropTypes.func,
};

export default LogoutPage;
