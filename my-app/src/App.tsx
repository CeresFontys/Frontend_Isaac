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

class App extends Component {

 
  render() {
       return (
      <Router>
       <Header /> 

        <Switch>
          <Route path="/login">
            <Login/>
          </Route>
        </Switch>
      </Router>
       );
  }
}
 
export default App;








 // constructor(props) {
  //   super(props);
  //   this.userLoaded = this.userLoaded.bind(this); 
  //   this.userUnLoaded = this.userUnLoaded.bind(this);
 
  //   this.state = { user: undefined };
  // }  
 
  // userLoaded(user) {
  //   if (user)
  //     this.setState({ "user": user });
  // } 
  
  // userUnLoaded() {
  //   this.setState({ "user": undefined });
  // } 
 
  // NotAuthenticated() {
  //   return <div>You are not authenticated, please click here to authenticate.</div>;
  // }
