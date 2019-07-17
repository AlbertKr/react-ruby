import React from 'react';

//context consumer
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


class Login extends React.Component {
    state = {
        login: {
            email: {},
            password: {}
        }

    };


    formSubmitted = e => {
        console.log(this.state.login.email);
        console.log(this.state.login.password);
        // this.setState({isLoadingDisplayed: true});
        e.preventDefault();

        fetch('http://localhost:3001/users/authenticate', {
            method: 'POST',
            headers: {
                // 'Accept': 'application/x-www-form-urlencoded',
                // 'Content-Type': 'application/x-www-form-urlencoded',
                'Content-Type': "application/json"
            },
            body: JSON.stringify({
                email: this.state.login.email,
                password: this.state.login.password,
            })
        })

            .then(res => res.json())
            
            .catch(err => console.error('Caught error: ', err));
        console.log(this.state);



    };

    inputValueChanged = e => {

        console.log("inputValueChanged");
        const {name, value} = e.target;
        this.setState(prevState => ({
            login: {
                ...prevState.login,
                [name]: value
            }
        }));
    };




        render(){
            return (
                <div className="col-md-6 col-md-offset-3">
                    <h2>Connexion</h2>
                    <form name="form" method="POST" onSubmit={this.formSubmitted}>
                        <div className="form-group">
                            <label>email</label>
                            <input name="email" onChange={this.inputValueChanged} type="text" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label>Mot de Passe</label>
                            <input name="password" onChange={this.inputValueChanged} type="password"
                                   className="form-control"/>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary">Connexion</button>
                        </div>
                    </form>
                </div>
                );

        }

    };

  export default Login