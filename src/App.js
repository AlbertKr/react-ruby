// src/App.js

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