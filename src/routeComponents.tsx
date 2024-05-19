import React from 'react';
import { Navigate } from 'react-router-dom';

interface RouteProps {
  element: React.ReactElement;
  isAuthenticated: boolean;
}

const PrivateRoute: React.FC<RouteProps> = ({ element, isAuthenticated }) => {
  return isAuthenticated ? element : <Navigate to="/login" />;
};

const PublicRoute: React.FC<RouteProps> = ({ element, isAuthenticated }) => {
  return isAuthenticated ? <Navigate to="/home" /> : element;
};

export { PrivateRoute, PublicRoute };
