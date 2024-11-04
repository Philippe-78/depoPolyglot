import React,{ useContext} from 'react';
import {UserContext} from '../../providers/UserProvider';
import './Header.css';


 const Header: React.FC=()=>{
    const userContext=useContext(UserContext);

    if (!userContext){
        throw new Error("Header must be used within a UserProvider");
    }

    const {user}=userContext;

    return (
        <header className='header'>
            <img src="/logo-transparent.png" alt="Logo de l'application" />
            <h1>Polyglot</h1>
            <div className='userHeader'>
           {user ? ( 
            <div>
            <p> welcome, {user.firstName} </p><br></br>
            <p> has Dictionary : {user.hasDictionary ? 'yes' : 'no'}</p><br></br>
            <p> avec {user.numberWords} mots</p><br></br>
            </div>
            ):( <p> welcome , guest </p>
            )}
            </div>
          
        
        </header> 
    );
};
export default Header
