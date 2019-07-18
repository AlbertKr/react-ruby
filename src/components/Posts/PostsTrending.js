import React, { Component } from 'react';

class PostsTrending extends Component {

    // state = {
    //     articles: {
    //         article1: {
    //             user: {
    //                 email: 'albert.test@gg.com',
    //                 pseudo: 'Alberto'
    //             },
    //             content: "J'ai finis le React !"
    //         },
    //         article2: {
    //             user: {
    //                 email: 'joris.test@gg.com',
    //                 pseudo: 'Jojo'
    //             },
    //             content: "J'ai finis le Ruby !"
    //         },
    //         article3: {
    //             user: {
    //                 email: 'louis.test@gg.com',
    //                 pseudo: 'Loulou'
    //             },
    //             content: "J'ai finis le Node !"
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
                this.setState({ articles: data });
            })
            .then(() => this.setState({redirect: true}))
            .catch(err => console.error('Caught error: ', err));
    };


    render() {

        if( this.state.articles !== undefined ){
            console.log(this.state.articles);
            console.log(Object.keys(this.state.articles));
            console.log(this.state.articles.articles);
            return (
                <div> Blog :
                    {this.state.map(carID => (
                        // {Object.keys(this.state.articles).map(carID => (
                    <div>
                        {/*<h2>@{this.state.articles[carID].user.pseudo}</h2> */}
                            {/*<p>{this.state.articles[carID].user.email}</p>*/}
                        <div>
                            <p> Contenu de l'article : </p>
                            <p>{this.state.articles[carID].content}</p>
                        </div>
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