// src/App.js
/*
import React, {Component} from 'react';
import Contacts from './components/contacts';

class App extends Component {
  render () {
    return (
      <Contacts contacts={this.state.contacts} />
    );
  }

  state = {
    contacts: []
  }

  componentDidMount() {
    fetch('http://localhost:3001/users/authenticate', {
      method: 'POST',
      headers: {
        // 'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: 'ffffofo@ff.com',
        password: 'yoyo',
      })
    })
  }

}

export default App;
*/
import React, { Component } from 'react';  
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';  
  
/** Layouts **/  
import LoginLayoutRoute from "./LoginLayout";  
import DashboardLayoutRoute from "./DashboardLayout";  
  
/** Components **/  
import UserPage from './components/UserPage';  
import LoginPage from './components/LoginPage'  
  
/* 
   App 
 */  
class App extends Component {  
  render() {  
    return (  
      <Router>  
        <Switch>  
          <Route exact path="/">  
            <Redirect to="/connexion" />  
          </Route>  
          <LoginLayoutRoute path="/connexion" component={LoginPage} />  
          <DashboardLayoutRoute path="/accueil" component={UserPage} />  
        </Switch>  
      </Router>  
    );  
  }  
}  
  
export default App;