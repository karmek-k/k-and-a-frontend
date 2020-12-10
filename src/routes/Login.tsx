import {
  Dialog,
  DialogTitle,
  LinearProgress,
  Typography
} from '@material-ui/core';
import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import LoginForm, { LoginFormFields } from './components/Login/LoginForm';
import Layout from './components/shared/Layout';
import { Redirect } from 'react-router-dom';
import useSharedStyles from './components/shared/styles';
import { User, UserContext } from '../utils/UserContext';

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
  const [dialog, setDialog] = useState<boolean>(false);
  const [error, setError] = useState<RequestError>({
    msg: '',
    status: 0
  });
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    if (!formFields) {
      return;
    }

    setButtonDisabled(true);

    axios
      .post<LoginResponse>('/api/users/login', formFields)
      .then(() => {
        axios
          .get<User>('/api/users/me')
          .then(res => setUser(res.data))
          .catch(() => setUser(null));
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

  if (user) {
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
