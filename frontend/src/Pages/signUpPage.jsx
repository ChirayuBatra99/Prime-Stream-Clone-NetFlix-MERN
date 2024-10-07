import React from 'react'
import {Link} from "react-router-dom";
import { useState } from 'react';
import { useAuthStore } from '../store/authUser.js';
// import { sign } from 'jsonwebtoken';

function SignUpPage() {
    const {searchParams}= new URL(document.location)
    const emailValue= searchParams.get("email")
    const [email, setEamil]= useState(emailValue || "");
    const [username, setUsername]= useState("");
    const [password, setPassword] = useState(""); 
    const {signup, isSigningUp} = useAuthStore();
    

    const handleClick = (e) =>{
        e.preventDefault();
        console.log("ji");
        
        signup({ email, username, password});
        console.log("hi");
        navigate("/home");
        
    }

  return (
    <div className='hero-bg h-screen w-full'>
        <header className='flex items-center justify-between p-4 max-w-6xl mx-auto'>
            <Link to={"/"}>
                <img src="/prime-stream-logo.png" className='w-52' />
            </Link>
        </header>

      <div className='flex justify-center align-center mt-20 mx-3'>
        <div className='w-full max-w-md p-8 space-y-6 bg-black/60 rounded-lg shadow-md'>
            <h1 className='text-center font-bold text-2xl text-white mb-4'>Sign Up</h1>
            <form className='space-y-4' onSubmit={handleClick}>
                <div>
                    {/* the below block in CSS is a useful thing. */}
                    <label className='text-sm font-medium text-gray-300 block'>
                        Email
                    </label>
                    <input
                        className='w-full px-3 py-2 mt-1 border border-gray-700 rounded-md text-black focus:outline-none focus:ring'
                        placeholder='Enter email'     
                        value={email}
                        onChange={(e)=> setEamil(e.target.value)}
                    />
                </div>
                <div>
                <label className='text-sm font-medium text-gray-300 block'>
                      Username
                    </label>
                    <input
                        className='w-full px-3 py-2 mt-1 border border-gray-700 rounded-md text-black focus:outline-none focus:ring'
                        placeholder='Enter username'  
                        value={username}
                        onChange={(e)=> setUsername(e.target.value)}   
                    />
                </div>
                <div>
                <label className='text-sm font-medium text-gray-300 block'>
                Password
                    </label>
                    <input
                        className='w-full px-3 py-2 mt-1 border border-gray-700 rounded-md text-black focus:outline-none focus:ring'
                        placeholder='Enter password'  
                        value={password}
                        onChange={(e)=> setPassword(e.target.value)}      
                    />
                </div>
                <button className='text-center text-gray-400' >
                    SignUpButton
                </button>
            </form>
            <div className='text-center text-gray-400'>
                    Already a member?
                    <Link to={"/login"}>
                        Sign in
                    </Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default SignUpPage
