import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HomePage from './routes/HomePage';
import Login from './routes/Login';
import NotFound from './routes/NotFound';
import Register from './routes/Register';
import RegisterSuccess from './routes/RegisterSuccess';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/register" component={Register} />
        <Route path="/register-success" component={RegisterSuccess} />
        <Route path="/login" component={Login} />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
