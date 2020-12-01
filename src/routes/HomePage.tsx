import { Button, makeStyles, Paper, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

import Layout from './components/shared/Layout';

const useStyles = makeStyles({
  centeredText: {
    textAlign: 'center'
  }
});

const HomePage = () => {
  const styles = useStyles();

  return (
    <Layout>
      <div className={styles.centeredText}>
        <Typography variant="h1">Ask and be asked</Typography>
        <Paper>
          <Typography variant="h4">K&amp;A - Kuestion and Answer</Typography>
          <Typography>A Q&amp;A site for you and your friends!</Typography>
          <Link to="/register">
            <Button>Register</Button>
          </Link>
          <Link to="/login">
            <Button>Login</Button>
          </Link>
        </Paper>
      </div>
    </Layout>
  );
};

export default HomePage;
