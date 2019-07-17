import React, { Fragment } from 'react';
import MyContext from '../../MyContext';

const Posts = () => (
    
    <MyContext.Consumer>
        {context => (
            <Fragment>
                {Object.keys(context.posts).map(carID => (
                    <div>
                        <h2>@{context.posts[carID].user.pseudo}</h2> 
                            <p>{context.posts[carID].user.email}</p>
                        <div>
                            <p> Contenu du Post : </p>
                            <p>{context.posts[carID].content}</p>
                        </div>
                    </div>
                ))}
            </Fragment>
        )}
    </MyContext.Consumer>
);

export default Posts;