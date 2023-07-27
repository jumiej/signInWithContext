import React from 'react';
import { useContext} from 'react';
import { SignInContext } from '../Contexts/SignInContext';
import { Link, useNavigate } from 'react-router-dom';

export const SignIn = () => {
  const {setUserName,Username, setShowProfile} = useContext(SignInContext);
  const navigate = useNavigate()
  return (
    <>
    <input type="text"
    placeholder='Username...'
    onChange={(event) => {
      setUserName(event.target.value);
    }}
    />

    <input type="text" placeholder="Password..." />

    <button onClick={()=> {
      if(Username){
        navigate('/profile')
      }
    }}>
      LOGIN
    </button>

   
    </>
  )
}
