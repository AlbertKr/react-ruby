import React, { Component } from 'react';

class PostAdd extends Component {
    
    state = {
        posts: {
            post1: {
                user: {
                    email: 'albert.test@gg.com',
                    pseudo: 'Alberto'
                },
                content: "J'ai finis le React !"
            },
            post2: {
                user: {
                    email: 'joris.test@gg.com',
                    pseudo: 'Jojo'
                },
                content: "J'ai finis le Ruby !"
            },
            post3: {
                user: {
                    email: 'louis.test@gg.com',
                    pseudo: 'Loulou'
                },
                content: "J'ai finis le Node !"
            }
        }
    };
    
    render() {
        
        if( this.state.posts !== undefined ){
            return (
                <div> Blog : 
                {Object.keys(this.state.posts).map(carID => (
                    <div>
                        <h2>@{this.state.posts[carID].user.pseudo}</h2> 
                            <p>{this.state.posts[carID].user.email}</p>
                        <div>
                            <p> Contenu du Post : </p>
                            <p>{this.state.posts[carID].content}</p>
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

export default PostAdd;