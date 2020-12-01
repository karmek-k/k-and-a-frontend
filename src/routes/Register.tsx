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
  const [response, setResponse] = useState<RegisterResponse | null>(null);
  const [errorDialog, setErrorDialog] = useState<boolean>(false);

  useEffect(() => {
    if (!formFields) {
      return;
    }

    axios
      .post<RegisterResponse>(
        'http://localhost:8000/api/users/create',
        formFields
      )
      .then(res => setResponse(res.data))
      .catch(() => {
        setErrorDialog(true);
        setFormFields(null);
      });
  }, [formFields]);

  return (
    <Layout>
      <RegisterForm setFormFields={setFormFields} />

      {formFields && !response && <LinearProgress />}

      <Dialog
        onClose={() => setErrorDialog(false)}
        aria-labelledby="error dialog"
        open={errorDialog}
      >
        <DialogTitle>Error</DialogTitle>
        <Typography>Something went wrong.</Typography>
      </Dialog>
    </Layout>
  );
};

export default Register;
