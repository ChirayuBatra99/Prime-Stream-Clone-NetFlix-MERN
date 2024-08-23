import React from 'react'
import { useAuthStore } from '../../store/authUser.js'
import HomeScreen from './homeScreen.jsx';
import AuthScreen from './authScreen.jsx';

function HomePage() {

  const {user}= useAuthStore();

  return (
    <div>{user? <HomeScreen/> : <AuthScreen/>}</div>
  )
}

export default HomePage
