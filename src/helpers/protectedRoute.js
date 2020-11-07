import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../components/contexts/AuthState';

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { isAuthenticated } = useContext(AuthContext);
  return (
    <Route {...rest} render={props => {
      if (isAuthenticated) {
        return <Component {...props} />
      }
      else {
        return <Redirect to={{
          pathname: '/',
          state: {
            from: props.location
          }
        }} />
      }
    }}
    />
  )
}