import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, makeStyles, Paper, TextField } from '@material-ui/core';

import useSharedStyles from '../shared/styles';

export interface RegisterFormFields {
  username: string;
  email: string;
  password: string;
}

interface Props {
  setFormFields: React.Dispatch<
    React.SetStateAction<RegisterFormFields | null>
  >;
  buttonDisabled: boolean;
}

const useStyles = makeStyles({
  btnSubmit: {
    marginTop: '2em'
  }
});

const RegisterForm: React.FC<Props> = (props: Props) => {
  const { register, handleSubmit, errors } = useForm<RegisterFormFields>();

  const onSubmit = (data: RegisterFormFields) => {
    props.setFormFields(data);
  };

  const styles = useStyles();
  const sharedStyles = useSharedStyles();

  return (
    <Paper className={sharedStyles.paperFormContainer}>
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
        <Button
          className={styles.btnSubmit}
          size="large"
          variant="contained"
          color="secondary"
          type="submit"
          disabled={props.buttonDisabled}
        >
          Submit
        </Button>
      </form>
    </Paper>
  );
};

export default RegisterForm;
