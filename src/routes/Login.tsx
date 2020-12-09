import {
  Dialog,
  DialogTitle,
  LinearProgress,
  Typography
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LoginForm, { LoginFormFields } from './components/Login/LoginForm';
import Layout from './components/shared/Layout';
import { Redirect } from 'react-router-dom';
import useSharedStyles from './components/shared/styles';

interface LoginResponse {
  token: string;
}

interface RequestError {
  msg: string;
  status: number;
}

const Login: React.FC = () => {
  const [formFields, setFormFields] = useState<LoginFormFields | null>(null);
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(false);
  const [authenticated, setAuthenticated] = useState<boolean>();
  const [dialog, setDialog] = useState<boolean>(false);
  const [error, setError] = useState<RequestError>({
    msg: '',
    status: 0
  });

  useEffect(() => {
    if (!formFields) {
      return;
    }

    setButtonDisabled(true);

    axios
      .post<LoginResponse>('/api/users/login', formFields)
      .then(res => {
        axios.defaults.headers.common = {
          Authorization: `Bearer ${res.data.token}`
        };

        setAuthenticated(true);
      })
      .catch(e => {
        setButtonDisabled(false);
        setDialog(true);
        setError({
          msg: e.response.data.msg,
          status: e.response.status
        });
      });
  }, [formFields]);

  const sharedStyles = useSharedStyles();

  if (authenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Layout>
      <div className={sharedStyles.centered}>
        <Typography className={sharedStyles.formHeader} variant="h3">
          Login
        </Typography>
        <LoginForm
          setFormFields={setFormFields}
          buttonDisabled={buttonDisabled}
        />
      </div>
      {buttonDisabled && <LinearProgress color="secondary" />}

      <Dialog
        onClose={() => setDialog(false)}
        aria-labelledby="error dialog"
        open={dialog}
      >
        <DialogTitle>Error {error.status}</DialogTitle>
        <Typography>{error.msg}</Typography>
      </Dialog>
    </Layout>
  );
};

export default Login;
