import React, { useEffect, useState } from 'react';
import Routes from './Routes';
import './globalStyle.css';
import axios from 'axios';
import { User, UserContext } from './utils/UserContext';

interface CsrfTokenResponse {
  csrfToken: string;
}

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    axios
      .get<CsrfTokenResponse>('/csrf-token')
      .then(res => {
        axios.defaults.headers.post['CSRF-Token'] = res.data.csrfToken;

        // check if the user is logged in
        // (has the jwt in a cookie)
        // if so, set user state
        axios.get<User>('/api/users/me').then(res => setUser(res.data));
      })
      .catch(e => console.error(e.response));
  });

  return (
    <UserContext.Provider value={user}>
      <Routes />
    </UserContext.Provider>
  );
};

export default App;
