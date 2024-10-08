import { useState, useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import './index.css'
import {Route, Routes, Navigate} from "react-router-dom";
import HomePage from './Pages/home/homePage';
import SignUpPage from './Pages/signUpPage';
import LoginPage from './Pages/loginPage';
import AuthScreen from './Pages/home/authScreen';
import HomeScreen from './Pages/home/homeScreen';
import UseGetTrendingContent from './hooks/useGetTrendingContent';
import Navbar from './components/Navbar';
import SearchHistoryPage from './Pages/searchHistoryPage';
import { useAuthStore } from './store/authUser';
import MoviePage from './Pages/movies/moviePage';
import TvshowPage from './Pages/tvshows/tvshowPage';

function App() {
  const [count, setCount] = useState(0)
  const {user, isCheckingAuth, authCheck} = useAuthStore();

  useEffect(() => {
		authCheck();
	}, [authCheck]);

	if (isCheckingAuth) {
		return (
			<div className='h-screen'>
				<div className='flex justify-center items-center bg-black h-full'>
					{/* <Loader className='animate-spin text-red-600 size-10' /> */}
				</div>
			</div>
		);
	}

  return (
    <div className='overflow-x-hidden overflow-y-hidden'>
      <Routes>
        <Route path="/"  element={<Navigate to="/auth" />}  />
        <Route path="/home"  element={<HomePage/>}/>
        <Route path="/signup" element={!user ? <SignUpPage/> : <Navigate to={"/home"}/> }/>       
        <Route path="/login" element={!user ? <LoginPage/>: <Navigate to={"/home"} /> }/>        
        <Route path="/content" element={<UseGetTrendingContent/>} />        
        <Route path="/nav" element={<Navbar/>} />        
        <Route path="/history" element={<SearchHistoryPage/>} />
        <Route path="/auth" element={<AuthScreen/>} />
        <Route path="/movie" element={<MoviePage/>} />
        <Route path="/tvshows" element={<TvshowPage/>} />

      </Routes>
    </div>
  )
}

export default App
