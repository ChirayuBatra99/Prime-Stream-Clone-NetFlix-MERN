import React, {useEffect} from 'react'
import { useAuthStore } from '../../store/authUser.js'
import AuthScreen from '../home/authScreen.jsx';
import MovieScreen from './movieScreen.jsx';

function MoviePage() {

  const {user}= useAuthStore();

  
  return (
    <div>{!user? <AuthScreen/> : <MovieScreen/>}</div>
  )
}

export default MoviePage
