import React, { useEffect } from 'react';

import Routes from './Routes';
import './globalStyle.css';
import axios from 'axios';

interface CsrfTokenResponse {
  csrfToken: string;
}

const App = () => {
  useEffect(() => {
    axios
      .get<CsrfTokenResponse>('/csrf-token')
      .then(
        res => (axios.defaults.headers.post['CSRF-Token'] = res.data.csrfToken)
      )
      .catch(e => console.error(e.response));
  });

  return (
    <>
      <Routes />
    </>
  );
};

export default App;
