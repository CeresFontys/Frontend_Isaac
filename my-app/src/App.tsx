import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Login from './Views/Account/Login';
import './App.css';
import Header from './Components/Header'
import Navigation from './Components/Navigation';
import FloorsPage from './Views/Floors/Floors';
import AccessControlPage from './Views/AccessControl/AccessControl';
import ErrorLogPage from './Views/ErrorLog/ErrorLog';
import Heatmap from './Views/Heatmap/Heatmap';

class App extends Component {

  render() {
       return (
      <Router>
       <Header /> 
        <Heatmap/>
        
         <Switch>
         
         <Route exact path="/login" component={Login}/>
         <div id="SideBar">
         <Navigation/>
          <Route exact path="/" component={FloorsPage}/>
          <Route exact path="/access-control" component={AccessControlPage}/>
          <Route exact path="/errorlog" component={ErrorLogPage}/>

          </div>
        </Switch>
         
      </Router>
       );
  }
}
export default App;
