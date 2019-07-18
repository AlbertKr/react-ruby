import React, { Component } from 'react';

class PostsTrending extends Component {

    // state = {
    //     articles: {
    //         article1: {
    //             user: {
    //                 email: 'albert.test@gg.com',
    //                 pseudo: 'Alberto'
    //             },
    //             content: "J'ai finis le React !",
    //             id: 1
    //         },
    //         article2: {
    //             user: {
    //                 email: 'joris.test@gg.com',
    //                 pseudo: 'Jojo'
    //             },
    //             content: "J'ai finis le Ruby !",
    //             id: 2
    //         },
    //         article3: {
    //             user: {
    //                 email: 'louis.test@gg.com',
    //                 pseudo: 'Loulou'
    //             },
    //             content: "J'ai finis le Node !",
    //             id: 3
    //         }
    //     }
    // };
    state = {
        articles: []


    };

    componentDidMount() {
        fetch('http://localhost:3001/articles', {
            method: 'GET',
            headers: {
                'Content-Type': "application/json"
            }
        })
            .then(res => res.json())
            .then((data) => {
                this.setState({ articles: data.articles });
            })
            .then(() => this.setState({redirect: true}))
            .catch(err => console.error('Caught error: ', err));
    };

    handleDelete(id_article){
        fetch('http://localhost:3001/articles/delete', {
            method: 'POST',
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify({
                id_article: id_article
            })
        })
            .then(() => this.setState({ redirect: true }))
            .catch(err => console.error('Caught error: ', err));
    }

    render() {
        if( this.state.articles !== undefined ){
            return (
                <div> Blog :
                         {Object.keys(this.state.articles).map(carID => (
                    <div>
                        <h2>{this.state.articles[carID].title}</h2>
                            {/*<p>{this.state.articles[carID].user.email}</p>*/}
                        <div>
                            <p> Contenu de l'article : </p>
                            <p>{this.state.articles[carID].content}</p>
                            {/* <img src={ require("../../img/" + this.state.articles[carID].image)}/> */}
                        </div>
                        <button onClick={() => this.handleDelete(this.state.articles[carID].id)}> Supprimer l'article </button>
                    </div>
                ))}
                </div>
            ); 
        }else{
            return (
                <div>Y'a rien !</div>
            );
        }
    }
}

export default PostsTrending;