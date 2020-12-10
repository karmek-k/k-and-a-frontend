import React, { useContext } from 'react';
import { Route, RouteProps } from 'react-router-dom';
import Login from '../routes/Login';
import { UserContext } from './UserContext';

const ProtectedRoute: React.FC<RouteProps> = ({
  component,
  ...rest
}: RouteProps) => {
  const { user } = useContext(UserContext);

  if (!user) {
    return <Route {...rest} component={Login} />;
  }

  return <Route {...rest} component={component} />;
};

export default ProtectedRoute;
