import { Button, Paper, TextField } from '@material-ui/core';
import React from 'react';
import { useForm } from 'react-hook-form';
import Layout from './components/shared/Layout';

interface RegisterFormFields {
  username: string;
  email: string;
  password: string;
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
            error={Boolean(errors.username)}
            helperText={errors.username && 'Must be between 3-20 characters'}
          />
          <br />
          <TextField
            label="Email"
            name="email"
            type="email"
            inputRef={register({ required: true })}
            error={Boolean(errors.email)}
            helperText={errors.email && 'Email is required'}
          />
          <br />
          <TextField
            label="Password"
            name="password"
            type="password"
            inputRef={register({ required: true, minLength: 6, maxLength: 64 })}
            error={Boolean(errors.password)}
            helperText={errors.password && 'Must be between 6-64 characters'}
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
