import React, { Component } from 'react';
import UserContext from '../Users/UserContext';

class LoginProvider extends Component {


    state = {
        login :{
            email : {},
            password: {}
        }

    };




    formSubmitted = e => {
        this.setState({ isLoadingDisplayed: true });
        e.preventDefault();

        fetch('http://localhost:3001/users/authenticate', {
            method: 'POST',
            headers: {
                // 'Accept': 'application/x-www-form-urlencoded',
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({
                email: this.state.login.email,
                password: this.state.login.password,
            })
        })
            .then(res => res.json());

        console.log("formsubmited");


    };

    inputValueChanged = e => {

        console.log("inputValueChanged");
        const { name, value } = e.target;
        this.setState(prevState => ({
            login: {
                ...prevState.login,
                [name]: value
            }
        }));
        console.log("inputValueChanged");
    };



// fetch here

    // state = {
    //     login :{
    //         email : {},
    //         password: {}
    //     }
    //
    // };
    //
    //
    // updateState(value){
    //     this.setState({
    //         email: value.email,
    //         password: value.password,
    //     });
    //
    //
    //     fetch('http://localhost:3001/users/authenticate', {
    //         method: 'POST',
    //         headers: {
    //             // 'Accept': 'application/x-www-form-urlencoded',
    //             'Content-Type': 'application/x-www-form-urlencoded',
    //         },
    //         body: JSON.stringify({
    //             email: this.state.login.email,
    //             password: this.state.login.password,
    //         })
    //     })
    // }

 
}

export default LoginProvider;