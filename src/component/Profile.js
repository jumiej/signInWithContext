import React from 'react'
import { useContext } from 'react';
import { SignInContext } from '../Contexts/SignInContext';

const Profile = () => {
  const {Username} = useContext(SignInContext)
  return (
    <>
      <h1>Profile</h1>
      <h2>Username: {Username}</h2>
    </>
  )
}

export default Profile;
