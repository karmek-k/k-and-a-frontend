import React, { useContext } from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { UserContext } from './UserContext';

const ProtectedRoute: React.FC<RouteProps> = ({
  component,
  ...rest
}: RouteProps) => {
  const { user } = useContext(UserContext);

  if (!user) {
    return <Redirect to="/login" />;
  }

  return <Route {...rest} component={component} />;
};

export default ProtectedRoute;
