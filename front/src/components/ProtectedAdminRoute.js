import React from "react";
import { Route, Link } from "react-router-dom";

const ProtectedAdminRoute = ({
  component: Component,
  isAuthenticated,
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Link to="/login" /> // Redirect to login if not authenticated
      )
    }
  />
);

export default ProtectedAdminRoute;
