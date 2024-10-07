import React, {useEffect} from 'react'
import { useAuthStore } from '../../store/authUser.js'
import HomeScreen from './homeScreen.jsx';
import AuthScreen from './authScreen.jsx';

function HomePage() {

  const {user}= useAuthStore();

  
  return (
    <div>{!user? <AuthScreen/> : <HomeScreen/>}</div>
  )
}

export default HomePage
