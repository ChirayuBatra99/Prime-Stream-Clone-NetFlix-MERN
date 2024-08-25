import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import './index.css'
import {Route, Routes} from "react-router-dom";
import HomePage from './Pages/home/homePage';
import SignUpPage from './Pages/signUpPage';
import LoginPage from './Pages/loginPage';
import AuthScreen from './Pages/home/authScreen';
import HomeScreen from './Pages/home/homeScreen';
import UseGetTrendingContent from './hooks/useGetTrendingContent';
import Navbar from './components/Navbar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/"  element={<HomePage/>}/>
        <Route path="/signup" element={<SignUpPage/>} />       
        <Route path="/login" element={<LoginPage/>} />        
        <Route path="/content" element={<UseGetTrendingContent/>} />        
        <Route path="/nav" element={<Navbar/>} />        

        <Route path="/auth" element={<AuthScreen/>} />
        
      </Routes>
    </>
  )
}

export default App
