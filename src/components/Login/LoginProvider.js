import React, { Component } from 'react';
import UserContext from '../Users/UserContext';

class LoginProvider extends Component {
    
    state = {
        login : {

        }
    };
    
    render() {
        
        if( this.state.login !== undefined ){
            return (
                <UserContext.Provider
                    value={{
                        login: this.state.login
                        }
                    }
                >   
                    {this.props.children}
                </UserContext.Provider>
            );
        }else{
            return (
                <div>Y'a rien !</div>
            );
        }
    }
}

export default LoginProvider;