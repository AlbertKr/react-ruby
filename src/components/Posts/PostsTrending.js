import React, { Component } from 'react';

class PostsTrending extends Component {

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


    render() {
        if( this.state.articles !== undefined ){
            return (
                <div> Blog :
                         {Object.keys(this.state.articles).map(carID => (
                    <div>
                        <h2>{this.state.articles[carID].title}</h2>
                            {/*<p>{this.state.articles[carID].user.email}</p>*/}
                        <div>
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