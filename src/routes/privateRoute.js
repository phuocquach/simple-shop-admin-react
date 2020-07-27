import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "./context";
import oidcUserManager from "../service/authService";
function PrivateRoute({ component: Component, ...rest }) {
  const authenticated = useAuth();
  return (
    <Route
      {...rest}
      render={props =>
        authenticated ? (
          <Component {...props} />
        ) : (
            oidcUserManager.signinRedirect()
        )
      }
    />
  );
}

export default PrivateRoute;