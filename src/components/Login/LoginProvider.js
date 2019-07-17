import React, { Component } from 'react';
import MyContext from '../../MyContext';

class LoginProvider extends Component {
    
    state = {
        login : {

        }
    };
    
    render() {
        
        if( this.state.login !== undefined ){
            return (
                <MyContext.Provider
                    value={{
                        login: this.state.login
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

export default LoginProvider;