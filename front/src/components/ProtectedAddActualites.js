import React from "react";
import { Route, Link } from "react-router-dom";

const ProtectedAddActualites = ({
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
        <Link to="/admin/addarticles" /> // Redirect to addactualites if not authenticated
      )
    }
  />
);

export default ProtectedAddActualites;
