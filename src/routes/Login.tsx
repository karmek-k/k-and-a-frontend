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

const Login: React.FC = () => {
  const [formFields, setFormFields] = useState<LoginFormFields | null>(null);
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(false);
  const [authenticated, setAuthenticated] = useState<boolean>();
  const [errorMsg, setErrorMsg] = useState<string>('');
  const [errorStatus, setErrorStatus] = useState<number>(0);
  const [errorDialog, setErrorDialog] = useState<boolean>(false);

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
        setErrorMsg(e.response.data.msg);
        setErrorStatus(e.response.status);
        setButtonDisabled(false);
        setErrorDialog(true);
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
        onClose={() => setErrorDialog(false)}
        aria-labelledby="error dialog"
        open={errorDialog}
      >
        <DialogTitle>Error {errorStatus}</DialogTitle>
        <Typography>{errorMsg}</Typography>
      </Dialog>
    </Layout>
  );
};

export default Login;
