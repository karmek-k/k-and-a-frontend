import { Link, Typography } from '@material-ui/core';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Layout from './components/shared/Layout';

import useSharedStyles from './components/shared/styles';

const RegisterSuccess = () => {
  const sharedStyles = useSharedStyles();

  return (
    <Layout className={sharedStyles.centeredText}>
      <Typography variant="h2">Registration successful</Typography>
      <Typography>
        Now you are able to log in.
        <br />
        <Link component={RouterLink} to="/login">
          Click here to go to the login page.
        </Link>
      </Typography>
    </Layout>
  );
};

export default RegisterSuccess;
