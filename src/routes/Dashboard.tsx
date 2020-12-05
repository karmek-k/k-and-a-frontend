import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import QuestionFeed from './components/Dashboard/QuestionFeed';
import Layout from './components/shared/Layout';

const Dashboard: React.FC = () => {
  return (
    <Layout>
      <Typography variant="h2">Welcome</Typography>
      <Grid container spacing={4}>
        <Grid item md={4}>
          <QuestionFeed />
        </Grid>
        <Grid item md={8}>
          <QuestionFeed />
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Dashboard;
