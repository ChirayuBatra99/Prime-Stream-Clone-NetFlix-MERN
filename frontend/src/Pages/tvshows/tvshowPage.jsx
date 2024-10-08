import React, {useEffect} from 'react'
import { useAuthStore } from '../../store/authUser.js'
import AuthScreen from '../home/authScreen.jsx';
import TvshowScreen from './tvshowScreen.jsx';

function TvshowPage() {

  const {user}= useAuthStore();

  
  return (
    <div>{!user? <AuthScreen/> : <TvshowScreen/>}</div>
  )
}

export default TvshowPage
