import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";

import { AuthContext } from "../Context/AuthContext";

export function PrivateRoute({ component: Component, ...rest }) {
  const { user } = useContext(AuthContext);

  console.log(Component);
  return (
    <Route
      {...rest}
      render={(renderProps) => {
        console.log("render");
        if (user) {
          console.log("valid");
          return <Component {...renderProps} />;
        }
        console.log("nope");
        return <Redirect to="/login" />;
      }}
    />
  );
}
