import React, { Component, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./Views/Account/login.component";
import "./App.css";
import Header from "./Components/Header";
import Navigation from "./Components/Navigation";
// import FloorsPage from "./Views/Floors/Floors";
import AccessControlPage from "./Views/AccessControl/AccessControl";
import ErrorLogPage from "./Views/ErrorLog/ErrorLog";
import Heatmap from "./Views/Heatmap/Heatmap";
import NotGuardedRoute from "../src/Routes/NotGuardedRoute";
import FloorsPage from "./Views/Floors/Floors";
import GuardedRoute from "./Routes/GuardedRoute";

function App() {
    return (
      <BrowserRouter>
        <Header />
        <Heatmap />
        <Switch>
          <NotGuardedRoute
            path="/login"
            isAuthenticated={localStorage.getItem("user")}
            exact
            component={Login}
          />
          <div id="SideBar">
            <Navigation />
            <NotGuardedRoute
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
            <NotGuardedRoute
              exact
              path="/errorlog"
              isAuthenticated={localStorage.getItem("user")}
              component={ErrorLogPage}
            />
          </div>
        </Switch>
      </BrowserRouter>
    );
  }
export default App;
