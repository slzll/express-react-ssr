import React, { Fragment } from "react";
import { Route, Redirect } from "react-router-dom";
import Home from "../views/Home";
import Login from "../views/Login";
import Register from "../views/Register";
import NoMatch from "../views/NoMatch";

export default (
  <Fragment>
    <Route path="/" exact component={Home} />
    <Route path="/login" exact component={Login} />
    <Route path="/register" exact component={Register} />
    <Route path="/404" exact component={NoMatch} />
  </Fragment>
);
