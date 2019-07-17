import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import UserProvider from './components/Users/UserProvider';
import UsersList from './components/Users/UsersList';
import LoginPage from './components/LoginPage';

class App extends Component {
  render() {
      return (
        <Router>
          <Switch>
            <Route exact path="/">  
              <Redirect to="/connexion" />  
            </Route> 
            <Route path="/listUsers" render={() => 
              (<UserProvider>
                <div className="App">
                    <UsersList />
                </div>
            </UserProvider>)
            }/>
            <LoginPage path="/connexion"/>  
          </Switch>
        </Router>
      );
  }
}

export default App;