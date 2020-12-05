import { Grid, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

import QuestionFeed from './components/Dashboard/QuestionFeed';
import Layout from './components/shared/Layout';

export interface Question {
  _id: string;
  tags?: string[];
  title: string;
  description?: string;
  datePosted: Date;
  posterId: string;
  recipientId: string;
}

const Dashboard: React.FC = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    axios.get<Question[]>('/api/questions/latest').then(res => {
      setQuestions(res.data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <Layout>
        <Typography variant="h2">Loading...</Typography>
      </Layout>
    );
  }

  return (
    <Layout>
      <Typography variant="h2">Welcome</Typography>
      <Grid container spacing={4}>
        <Grid item md={4}>
          <QuestionFeed questions={questions} />
        </Grid>
        <Grid item md={8}>
          <QuestionFeed questions={questions} />
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Dashboard;
