import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";

import { AuthContext } from "../Context/AuthContext";

export function PrivateRoute({ component: Component, ...rest }) {
  const { user } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={(renderProps) => {
        if (user) {
          return <Component {...renderProps} />;
        }

        return <Redirect to="/login" />;
      }}
    />
  );
}
