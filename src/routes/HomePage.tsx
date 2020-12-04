import { Button, makeStyles, Paper, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

import Layout from './components/shared/Layout';
import useSharedStyles from './components/shared/styles';

const useStyles = makeStyles({
  header: {
    margin: '.5em 0'
  },
  paperContainer: {
    padding: '2em',
    width: '60%',
    margin: 'auto'
  },
  paperHeader: {
    marginBottom: '.5em'
  },
  btnPadding: {
    margin: '.5em 1em'
  }
});

const HomePage = () => {
  const sharedStyles = useSharedStyles();
  const styles = useStyles();

  return (
    <Layout className={sharedStyles.centeredText}>
      <Typography className={styles.header} variant="h1">
        Ask and be asked
      </Typography>
      <Paper className={styles.paperContainer}>
        <Typography className={styles.paperHeader} variant="h4">
          K&amp;A - Kuestion and Answer
        </Typography>
        <Typography>A Q&amp;A site for you and your friends!</Typography>
        <Button
          className={styles.btnPadding}
          color="primary"
          variant="contained"
          component={Link}
          to="/register"
        >
          Register
        </Button>
        <Button className={styles.btnPadding} component={Link} to="/login">
          Login
        </Button>
      </Paper>
    </Layout>
  );
};

export default HomePage;
