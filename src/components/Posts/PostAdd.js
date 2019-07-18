import React, { Component } from 'react';
import { BrowserRouter as Redirect } from 'react-router-dom';

class PostAdd extends Component {
    
    // state = {
    //     posts: {
    //         post1: {
    //             user: {
    //                 email: 'albert.test@gg.com',
    //                 pseudo: 'Alberto'
    //             },
    //             content: "J'ai finis le React !"
    //         },
    //         post2: {
    //             user: {
    //                 email: 'joris.test@gg.com',
    //                 pseudo: 'Jojo'
    //             },
    //             content: "J'ai finis le Ruby !"
    //         },
    //         post3: {
    //             user: {
    //                 email: 'louis.test@gg.com',
    //                 pseudo: 'Loulou'
    //             },
    //             content: "J'ai finis le Node !"
    //         }
    //     }
    // };
    //
    // render() {
    //
    //     if( this.state.posts !== undefined ){
    //         return (
    //             <div> Blog :
    //             {Object.keys(this.state.posts).map(carID => (
    //                 <div>
    //                     <h2>@{this.state.posts[carID].user.pseudo}</h2>
    //                         <p>{this.state.posts[carID].user.email}</p>
    //                     <div>
    //                         <p> Contenu du Post : </p>
    //                         <p>{this.state.posts[carID].content}</p>
    //                     </div>
    //                 </div>
    //             ))}
    //             </div>
    //         );
    //     }else{
    //         return (
    //             <div>Y'a rien !</div>
    //         );
    //     }
    // }

















    state = {
        article: {
            title: {},
            content: {},
            image: {},
            user_id: {}
        },
        redirect: false

    };

    formSubmitted = e => {
// TODO: récup userID quand auth ok


        let img = "" + this.state.article.image;
        img = img.split("\\").pop();
        console.log(img);
        console.log(this.state);

        e.preventDefault();

        fetch('http://localhost:3001/articles/create', {
            method: 'POST',
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify({
                title: this.state.article.title,
                image: img,
                user_id: "5d308785e27c2e2a6c609d13",
                content: this.state.article.content,
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

    inputValueChangedFile = e => {
        if (e.target.files[0]) {
            console.log(e.target.files[0]);
        }
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
        return (
            <div className="col-md-6 col-md-offset-3">
                <h2>Connexion</h2>
                <form name="form" method="POST" onSubmit={this.formSubmitted}>
                    <div className="form-group">
                        <label>Titre</label>
                        <input name="title" onChange={this.inputValueChanged} type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Image</label>
                        <br/>
                        <input name="image" onChange={this.inputValueChangedFile} type="file"/>
                    </div>
                    <div className="form-group">
                        <label>content</label>
                        <input name="content" onChange={this.inputValueChanged} type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        {/*<input name="user_id" onChange={this.inputValueChanged} type="hidden" className="form-control" />*/}
                        <input name="user_id" value="5d308785e27c2e2a6c609d13" type="hidden" className="form-control" />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">Connexion</button>
                    </div>
                </form>
            </div>
        );
    }

}




export default PostAdd;