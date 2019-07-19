import React, { Component } from 'react';

class PostsTrending extends Component {

    state = {
        articles: []
    };

    componentDidMount() {
        fetch('http://localhost:3002/api/v1/articles', {
            method: 'GET',
            headers: {
                'Content-Type': "application/json"
            }
        })
            .then(res => res.json())
            .then((data) => {
                console.log(data)
                this.setState({ articles: data });
            })
            .then(() => this.setState({redirect: true}))
            .catch(err => console.error('Caught error: ', err));
    };

    handleDelete(id_article){
        fetch('http://localhost:3002/api/v1/articles/delete', {
            method: 'POST',
            headers: {
                'Content-Type': "application/json"
            },
            body:  id_article
            
        })
            .then(() => this.setState({ redirect: true }))
            .catch(err => console.error('Caught error: ', err));
    }

    render() {

        if( this.state.articles !== undefined ){

     

            return (
                <section class="ftco-section">
                <div class="container">

                    <div className="form-group">
                        <button id="add" className="btn btn-primary">Ajouter un article</button>
                    </div>
                     <p>___________</p>
                    <div class="row">
                        <div class="col-lg-12">                
                

                         {Object.keys(this.state.articles).map(carID => (

                    <div>
                        <h2>{this.state.articles[carID].title}</h2>
                            {/*<p>{this.state.articles[carID].user.email}</p>*/}
                        <div>
                            <p> {this.state.articles[carID].content}</p>
                            <p> publié par {this.state.articles[carID].user.name} le {this.state.articles[carID].date.substring(0, 10)}  </p>
                            <p>
                            <button className="mt-2 btn btn-white submit" onClick={() => this.handleDelete(this.state.articles[carID].id)}>Supprimer l'article </button>
                            </p>
                            <br>
                            </br>

                            <div className="separateur" >_______________</div> 
                        </div>
                    </div>
                ))}
                </div>
            </div>
                </div>

            </section>
            ); 
        }else{
            return (
                <div>Y'a rien !</div>
            );
        }
    }
}

export default PostsTrending;