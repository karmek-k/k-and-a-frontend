import { Link, Typography } from '@material-ui/core';
import React, { useContext, useEffect } from 'react';
import { UserContext } from '../utils/UserContext';
import Layout from './components/shared/Layout';
import axios from 'axios';
import useSharedStyles from './components/shared/styles';
import { Link as RouterLink } from 'react-router-dom';

interface LogoutResponse {
  msg: string;
}

const Logout: React.FC = () => {
  const sharedStyles = useSharedStyles();
  const { setUser } = useContext(UserContext);

  useEffect(() => {
    axios
      .post<LogoutResponse>('/api/users/logout')
      .then(() => setUser(null))
      .catch(() => setUser(null));
  }, []);

  return (
    <Layout className={sharedStyles.centeredText}>
      <Typography variant="h3">Logged out successfully.</Typography>
      <Typography>
        <Link component={RouterLink} to="/login">
          Click here to go to the login page.
        </Link>
      </Typography>
    </Layout>
  );
};

export default Logout;
