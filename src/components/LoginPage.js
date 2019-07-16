import React from 'react';  
const LoginPage = ({  classes }) => {  
    return (  
      <div className="col-md-6 col-md-offset-3">  
                <h2>Connexion</h2>  
                <form name="form">  
                    <div className="form-group" >  
                        <label>Identifiant</label>  
                        <input type="text" className="form-control" />  
                    </div>  
                    <div className="form-group" >  
                        <label>Mot de Passe</label>  
                        <input type="password" className="form-control" />  
                    </div>                      
                        <div className="form-group">  
                        <button type="submit" className="btn btn-primary">Connexion</button>  
                    </div>  
                </form>  
            </div>  
    );  
  };  
  
  export default LoginPage  