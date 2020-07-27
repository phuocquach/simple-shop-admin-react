import * as React from "react";
import { Route, Switch } from "react-router-dom";
import { Callback } from "../pages/auth/callback";
import { Logout } from "../pages/auth/logout";
import { LogoutCallback } from "../pages/auth/logoutCallback";
import { PrivateRoute } from "./privateRoute";
import { SilentRenew } from "../pages/auth/silentRenew";
import {AccessToken} from "../pages/auth/accesstokenCallback"
export const Routes = (
    <Switch>
        <Route exact={true} path="/signin-oidc" component={Callback} />
        <Route exact={true} path="/logout" component={Logout} />
        <Route exact={true} path="/logout/callback" component={LogoutCallback} />
        <Route exact={true} path="/silentrenew" component={SilentRenew} />
        <Route exact={true} path="/access-token" component={AccessToken} />
    </Switch>
);