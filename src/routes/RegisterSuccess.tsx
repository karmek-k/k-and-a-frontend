import { Link, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Layout from './components/shared/Layout';

const useStyles = makeStyles({
  centeredText: {
    textAlign: 'center'
  }
});

const RegisterSuccess = () => {
  const styles = useStyles();

  return (
    <Layout className={styles.centeredText}>
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
