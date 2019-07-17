import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

/** Users */
import UserProvider from './components/Users/UserProvider';
import UsersList from './components/Users/UsersList';

/** Posts */
import PostProvider from './components/Posts/PostProvider';
import PostsList from './components/Posts/PostsList';

/** Connexion */
import LoginProvider from './components//Login/LoginProvider';
import Login from './components//Login/Login';

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
            <Route path="/accueil" render={() => 
              (<PostProvider>
                <div className="App">
                    <PostsList />
                </div>
            </PostProvider>)
            }/>
            <Route path="/connexion" render={() => 
              (<LoginProvider>
                <div className="App">
                    <Login />
                </div>
            </LoginProvider>)
            }/> 
          </Switch>
        </Router>
      );
  }
}

export default App;