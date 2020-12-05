import { Link, Typography } from '@material-ui/core';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import Layout from './components/shared/Layout';
import useSharedStyles from './components/shared/styles';

const NotFound: React.FC = () => {
  const sharedStyles = useSharedStyles();

  return (
    <Layout className={sharedStyles.centeredText}>
      <Typography variant="h2">Page not found</Typography>
      <Typography>
        <Link component={RouterLink} to="/">
          Go to the main page.
        </Link>
      </Typography>
    </Layout>
  );
};

export default NotFound;
