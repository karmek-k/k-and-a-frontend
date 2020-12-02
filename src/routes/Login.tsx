import { LinearProgress } from '@material-ui/core';
import React, { useState } from 'react';
import LoginForm, { LoginFormFields } from './components/Login/LoginForm';
import Layout from './components/shared/Layout';

const Login = () => {
  const [formFields, setFormFields] = useState<LoginFormFields | null>(null);
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(false);

  return (
    <Layout>
      <LoginForm
        setFormFields={setFormFields}
        buttonDisabled={buttonDisabled}
      />
      <LinearProgress color="secondary" />
    </Layout>
  );
};

export default Login;
