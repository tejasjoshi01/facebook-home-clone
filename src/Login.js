import React from 'react'
import './Login.css' 

import Button from '@material-ui/core/Button';

import {auth , provider} from './firebase';  
import {useStateValue} from './StateProvider';
import {actionTypes} from './reducer'

function Login () {
     
     const [state, dispatch] = useStateValue();
     const signIn = () => {
          // sign in .
          auth
               .signInWithPopup(provider)
               .then((result)=> {
                    dispatch({
                         type: actionTypes.SET_USER , 
                         user : result.user 
                    })
                    console.log(result)
               }).catch((error) => alert(error.message));
     }

     return (
     <div className="login">
          <div className='login__logo'>
               <img src="https://upload.wikimedia.org/wikipedia/commons/6/66/Facebookellinikilisi.png"
                alt="logo"/>
          </div> 
          <Button type='submit' onClick={signIn}>
               Sign In
          </Button>
     </div>
     );
} 

export default Login