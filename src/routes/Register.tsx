import { Button, Paper, TextField } from '@material-ui/core';
import React from 'react';
import { useForm } from 'react-hook-form';
import Layout from './components/shared/Layout';

interface RegisterFormFields {
  username: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

const onSubmit = (data: RegisterFormFields) => {
  console.log(data);
};

const Register = () => {
  const { register, handleSubmit, errors } = useForm<RegisterFormFields>();

  return (
    <Layout>
      <Paper>
        <form method="post" onSubmit={handleSubmit(onSubmit)}>
          <TextField
            label="Username"
            name="username"
            inputRef={register({ required: true, minLength: 3, maxLength: 20 })}
          />
          <br />
          <TextField
            label="Email"
            name="email"
            type="email"
            inputRef={register({ required: true })}
          />
          <br />
          <TextField
            label="Password"
            name="password"
            type="password"
            inputRef={register({ required: true, minLength: 6, maxLength: 64 })}
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
