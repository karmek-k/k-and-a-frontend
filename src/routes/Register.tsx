import {
  Dialog,
  DialogTitle,
  LinearProgress,
  Typography
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

import RegisterForm, {
  RegisterFormFields
} from './components/Register/RegisterForm';
import Layout from './components/shared/Layout';
import useSharedStyles from './components/shared/styles';
import { Redirect } from 'react-router-dom';

interface RegisterResponse {
  id: string;
  username: string;
}

const Register: React.FC = () => {
  const [formFields, setFormFields] = useState<RegisterFormFields | null>(null);
  const [userData, setUserData] = useState<RegisterResponse | null>(null);
  const [errorMsg, setErrorMsg] = useState<string>('');
  const [errorStatus, setErrorStatus] = useState<number>(0);
  const [errorDialog, setErrorDialog] = useState<boolean>(false);
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(false);

  const sharedStyles = useSharedStyles();

  useEffect(() => {
    if (!formFields) {
      return;
    }

    setButtonDisabled(true);

    axios
      .post<RegisterResponse>('/api/users/create', formFields)
      .then(res => {
        setUserData(res.data);
      })
      .catch(e => {
        setErrorMsg(e.response.data.msg);
        setErrorStatus(e.response.status);
        setButtonDisabled(false);
        setErrorDialog(true);
      });
  }, [formFields]);

  if (userData) {
    return <Redirect to="/register-success" from="/" />;
  }

  return (
    <Layout>
      <div className={sharedStyles.centered}>
        <Typography className={sharedStyles.formHeader} variant="h3">
          Register
        </Typography>
        <RegisterForm
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
        <Typography className={sharedStyles.dialogText}>{errorMsg}</Typography>
      </Dialog>
    </Layout>
  );
};

export default Register;
