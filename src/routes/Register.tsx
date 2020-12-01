import { Button, Paper, TextField } from '@material-ui/core';
import React from 'react';
import Layout from './components/shared/Layout';

const Register = () => {
  return (
    <Layout>
      <Paper>
        <form method="post" onSubmit={e => e.preventDefault()}>
          <TextField label="Username" name="username" />
          <br />
          <TextField label="Email" name="email" type="email" />
          <br />
          <TextField label="Password" name="password" type="password" />
          <br />
          <TextField
            label="Confirm password"
            name="passwordConfirmation"
            type="password"
          />
          <br />
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </form>
      </Paper>
    </Layout>
  );
};

export default Register;
