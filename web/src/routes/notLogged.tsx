import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";
import AuthService from "../services/AuthService";

function NotLoggedRoute({ component: Component, ...rest }: any) {
  return (
    <Route
      {...rest}
      render={(props) =>
        AuthService.isAuthenticated() ? (
          <Redirect
            to={{
              pathname: "/",
              state: { from: props.location },
            }}
          />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
}

function NotLoggedRoutes() {
  return (
    <Switch>
      <NotLoggedRoute path="/login" exact component={Login} />
      <NotLoggedRoute path="/register" exact component={Register} />
    </Switch>
  );
}

export default NotLoggedRoutes;