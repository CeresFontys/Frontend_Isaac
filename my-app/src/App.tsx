import React, { Component } from 'react';
// import Greet from './components/Greet'
// import Welcome from './components/Welcome'
// import Authenticate from 'react-openidconnect';
import OidcSettings from './oidcsettings';

import './App.css';

class App extends Component {
 
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
 
  render() {
       return (
         <body>
           Home page
         </body>
       );
  }
}
 
export default App;
