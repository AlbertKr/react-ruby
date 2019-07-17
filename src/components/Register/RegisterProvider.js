import React, { Component } from 'react';
import UserContext from '../Users/UserContext';

class RegisterProvider extends Component {
    
    state = {
        register : {

        }
    };
    
    render() {
        
        if( this.state.register !== undefined ){
            return (
                <UserContext.Provider
                    value={{
                        register: this.state.register
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

export default RegisterProvider;