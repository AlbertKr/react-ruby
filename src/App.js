import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

/** Users */
import UserProvider from './components/Users/UserProvider';
import UserProfile from './components/Users/UserProfile';

/** Posts */
import PostsTrending from './components/Posts/PostsTrending';

/** Connexion */
import Login from './components//Login/Login';

/** Register */
import RegisterProvider from './components//Register/RegisterProvider';
import Register from './components//Register/Register';

class App extends Component {
  render() {
      return (
        <Router>
          <Switch>
            <Route exact path="/">  
              <Redirect to="/connexion" />  
            </Route> 
            <Route path="/utilisateur" render={() => 
              (<UserProvider>
                <div className="App">
                    <UserProfile />
                </div>
            </UserProvider>)
            }/>
            <Route path="/accueil" render={() => 
              (<PostsTrending />)
            }/>
            <Route path="/connexion" render={() => 
              (<Login/>)
            }/> 
            <Route path="/inscription" render={() => 
              (<RegisterProvider>
                <div className="App">
                    <Register />
                </div>
            </RegisterProvider>)
            }/> 
          </Switch>
        </Router>
      );
  }
}

export default App;