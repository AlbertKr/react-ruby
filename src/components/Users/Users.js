import React, { Fragment } from 'react';
import MyContext from '../../MyContext';

const Users = () => (
    
    <MyContext.Consumer>
        {context => (
            <Fragment>
                {Object.keys(context.cars).map(carID => (
                    <div>
                        <div>
                            <p> Email : </p>
                            <p>{context.cars[carID].email}</p>
                        </div>
                        <div>
                            <p> Mot de passe : </p>
                            <p>{context.cars[carID].password}</p>
                        </div>
                    </div>
                ))}
            </Fragment>
        )}
    </MyContext.Consumer>
);

export default Users;