import React, { Component, useState } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Login from "./Views/Account/login.component";
import "./App.css";
import Header from "./Components/Header";
import Navigation from "./Components/Navigation";
// import FloorsPage from "./Views/Floors/Floors";
import AccessControlPage from "./Views/AccessControl/AccessControl";
import ErrorLogPage from "./Views/ErrorLog/ErrorLog";
import Heatmap from "./Views/Heatmap/Heatmap";
import NotGuardedRoute from "./Routes/NotGuardedRoute";
import FloorsPage from "./Views/Floors/Floors";
import GuardedRoute from "./Routes/GuardedRoute";
import Footer from "./Components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <NotGuardedRoute
          path="/login"
          isAuthenticated={localStorage.getItem("user")}
          exact
          component={Login}
        />
          <GuardedRoute
            exact
            path="/floors"
            isAuthenticated={localStorage.getItem("user")}
            component={FloorsPage}
          />
          <GuardedRoute
            exact
            path="/access-control"
            isAuthenticated={localStorage.getItem("user")}
            component={AccessControlPage}
          />
          <GuardedRoute
            exact
            path="/errorlog"
            isAuthenticated={localStorage.getItem("user")}
            component={ErrorLogPage}
          />
          <Redirect exact from="/" to="/floors" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
