import React from 'react';
import { useState, useContext} from 'react';
import { SignInContext } from '../Contexts/SignInContext';

export const SignIn = () => {
  const {setUserName, setShowProfile} = useContext(SignInContext);
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
      setShowProfile(true)
    }}>
      LOGIN
    </button>

   
    </>
  )
}
