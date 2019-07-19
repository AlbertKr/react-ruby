import React from 'react';
import { BrowserRouter as Redirect } from 'react-router-dom';

class Register extends React.Component {
    state = {
        regiser: {
            nam: {},
            email: {},
            password: {}
        },
        redirect: false

    };

    formSubmitted = e => {
        // this.setState({isLoadingDisplayed: true});
        e.preventDefault();

        fetch('http://localhost:3002/api/v1/users/register', {
            method: 'POST',
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify({
                name:this.state.regiser.name ,
                email: this.state.regiser.email,
                password: this.state.regiser.password,
                token:'...'
            })
        })
            .then(() => this.setState({ redirect: true }))
            .catch(err => console.error('Caught error: ', err));
    };

    inputValueChanged = e => {

        const { name, value } = e.target;
        this.setState(prevState => ({
            regiser: {
                ...prevState.regiser,
                [name]: value
            }
        }));
    };

    render() {

        const { redirect } = this.state;
        if (redirect) {
            //return <Redirect to='/accueil' />;
            window.location.replace("http://localhost:3001/connexion");

        }
        return (
            <section class="ftco-section contact-section">
      
      <div class="container">
        <div class="row d-flex mb-5 contact-info">
          <div class="col-md-12 mb-4">
        
            <div className="col-md-6 col-md-offset-3">                
            <h2>Inscription</h2>
                <form name="form" method="POST" onSubmit={this.formSubmitted}>
                    <div className="form-group">
                            <label>Pseudo</label>
                            <input name="name" onChange={this.inputValueChanged} type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input name="email" onChange={this.inputValueChanged} type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Mot de Passe</label>
                        <input name="password" onChange={this.inputValueChanged} type="password"
                            className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Confirmer le Mot de Passe</label>
                        <input name="confirmPassword" onChange={this.inputValueChanged} type="password"
                            className="form-control" />
                    </div>
                    <div className="form-group">
                        <button type="submit" id="signup" className="btn btn-primary">S'inscrire</button>
                    </div>
                </form>

                <br/>
                <br/>
                <p> <a className="info" href="http://localhost:3001/connexion" >J'ai un compte</a> </p>
            </div>
            </div>
            </div>
            </div>

            </section>
        );
    }

};

export default Register