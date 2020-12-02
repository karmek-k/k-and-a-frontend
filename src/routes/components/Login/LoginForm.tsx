import { Button, Paper, TextField } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import React from 'react';

export interface LoginFormFields {
  username: string;
  password: string;
}

interface Props {
  setFormFields: React.Dispatch<React.SetStateAction<LoginFormFields | null>>;
  buttonDisabled: boolean;
}

const LoginForm = (props: Props) => {
  const { errors, register, handleSubmit } = useForm<LoginFormFields>();

  const onSubmit = (data: LoginFormFields) => {
    props.setFormFields(data);
  };

  return (
    <Paper>
      <form method="post" onSubmit={handleSubmit(onSubmit)}>
        <TextField
          autoFocus
          label="Username"
          name="username"
          inputRef={register({ required: true, minLength: 3, maxLength: 20 })}
          error={Boolean(errors.username)}
          helperText={errors.username && 'Must be between 3-20 characters'}
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
        <Button
          type="submit"
          color="secondary"
          variant="contained"
          disabled={props.buttonDisabled}
        >
          Log in
        </Button>
      </form>
    </Paper>
  );
};

export default LoginForm;
