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

interface RegisterResponse {
  id: string;
  username: string;
}

const Register = () => {
  const [formFields, setFormFields] = useState<RegisterFormFields | null>(null);
  const [userData, setUserData] = useState<RegisterResponse | null>(null);
  const [errorMsg, setErrorMsg] = useState<string>('');
  const [errorStatus, setErrorStatus] = useState<number>(0);
  const [errorDialog, setErrorDialog] = useState<boolean>(false);
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(false);

  useEffect(() => {
    if (!formFields) {
      return;
    }

    setButtonDisabled(true);

    axios
      .post<RegisterResponse>(
        'http://localhost:8000/api/users/create',
        formFields
      )
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

  return (
    <Layout>
      <RegisterForm
        setFormFields={setFormFields}
        buttonDisabled={buttonDisabled}
      />

      {buttonDisabled && <LinearProgress />}

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

export default Register;
