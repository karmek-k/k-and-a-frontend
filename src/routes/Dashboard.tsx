import { Grid, Typography } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';

import QuestionFeed from './components/Dashboard/QuestionFeed';
import Layout from './components/shared/Layout';
import { Redirect } from 'react-router-dom';
import { UserContext } from '../utils/UserContext';

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
  const { user } = useContext(UserContext);

  useEffect(() => {
    axios
      .get<Question[]>('/api/questions/latest')
      .then(res => {
        setQuestions(res.data);
        setLoading(false);
      })
      .catch(() => {
        console.error('An error occurred while loading the page');
      });
  }, []);

  if (!user) {
    return <Redirect to="/login" />;
  }

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
