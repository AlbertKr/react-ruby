import React, { Component } from 'react';
import MyContext from '../../MyContext';

class PostProvider extends Component {
    
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
    
    // componentDidMount() {
    //   fetch('http://localhost:3001/users')
    //     .then(res => res.json())
    //     .then((data) => {
    //         this.setState({ users: data.data });
    //     })
    //     .catch(console.log);
    // }

    render() {
        
        if( this.state.posts !== undefined ){
            return (
                <MyContext.Provider
                    value={{
                        posts: this.state.posts
                        }
                    }
                >
                    {this.props.children}
                </MyContext.Provider>
            );
        }else{
            return (
                <div>Y'a rien !</div>
            );
        }
    }
}

export default PostProvider;