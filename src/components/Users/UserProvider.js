import React, { Component } from 'react';
import MyContext from '../../MyContext';

class UserProvider extends Component {
    
    state = {
        cars: {
            car001: { name: 'Honda', price: 100 },
            car002: { name: 'BMW', price: 150 },
            car003: { name: 'Mercedes', price: 200 }
        }
    };

    state = {
        users: {

        }
    }
    
    componentDidMount() {
      fetch('http://localhost:3001/users')
        .then(res => res.json())
        .then((data) => {
            this.setState({ users: data.data });
        })
        .catch(console.log);
    }
    
    render() {
        if( this.state.users.users !== undefined ){
            return (
                <MyContext.Provider
                    value={{
                        cars: this.state.users.users
                        }
                    }
                >
                    {this.props.children}
                </MyContext.Provider>
            );
        }else{
            return (
                <div>Y'a rien !</div>
            );
        }
    }
}

export default UserProvider;