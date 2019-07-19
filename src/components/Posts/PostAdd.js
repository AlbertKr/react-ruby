import React, { Component } from 'react';
import { BrowserRouter as Redirect } from 'react-router-dom';

class PostAdd extends Component {
    



    state = {
        article: {
            title: {},
            content: {},
            user_id: {}
        },
        redirect: false

    };

    formSubmitted = e => {
// TODO: récup userID quand auth ok

        
        e.preventDefault();

        fetch('http://localhost:3002/api/v1/articles/create', {
            method: 'POST',
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify({
                title: this.state.article.title,
                users_id: localStorage.getItem("id"),
                content: this.state.article.content,
                image:"...",
                slug:"..."
            })
        })
            .then(() => this.setState({ redirect: true }))
            .catch(err => console.error('Caught error: ', err));
    };

    inputValueChanged = e => {

        const { name, value } = e.target;
        this.setState(prevState => ({
            article: {
                ...prevState.article,
                [name]: value
            }
        }));


    };


    render() {

        const { redirect } = this.state;
        if (redirect) {
            return <Redirect to='/accueil' />;
        }
        const divStyle = {
            width: 700
          };
        return (
            <section class="ftco-section contact-section">
            <br/>
            <br/>
            <br/>
            <br/>

            <div class="container">
            <div class="row d-flex mb-5 contact-info">
              <div class="col-md-12 mb-4">
                
                 <div className="col-md-6 col-md-offset-3">
                <h2>Publier un article </h2>
                <form name="form" method="POST" onSubmit={this.formSubmitted} style={divStyle}>
                    <div className="form-group">
                        <label>Titre de votre article</label>
                        <input name="title" onChange={this.inputValueChanged} type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Contenu de article</label>
                        <textarea name="content" onChange={this.inputValueChanged}  cols={40} rows={10}  className="form-control" />
                    </div>
                    <div className="form-group">
                        {/*<input name="user_id" onChange={this.inputValueChanged} type="hidden" className="form-control" />*/}
                        <input name="user_id" value="5d308785e27c2e2a6c609d13" type="hidden" className="form-control" />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">Je publie</button>
                    </div>
                </form>
            </div>
            </div>
            </div>
            </div>
            </section>
        );
    }

}




export default PostAdd;