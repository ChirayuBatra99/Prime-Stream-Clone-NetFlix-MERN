import React from 'react'
import {Link} from "react-router-dom";

function LoginPage() {
  return (
    <div className='hero-bg h-screen w-full'>
    <header className='flex items-center justify-between p-4 max-w-6xl mx-auto'>
        <Link to={"/"}>
            <img src="/netflix-logo.png" className='w-52' />
        </Link>
    </header>

  <div className='flex justify-center align-center mt-20 mx-3'>
    <div className='w-full max-w-md p-8 space-y-6 bg-black/60 rounded-lg shadow-md'>
        <h1 className='text-center font-bold text-2xl text-white mb-4'>Log In</h1>
        <form className='space-y-4'>
            <div>
                {/* the below block in CSS is a useful thing. */}
                <label className='text-sm font-medium text-gray-300 block'>
                    Email
                </label>
                <input
                    className='w-full px-3 py-2 mt-1 border border-gray-700 rounded-md text-white focus:outline-none focus:ring'
                    placeholder='Enter email'     
                />
            </div>
          
            <div>
            <label className='text-sm font-medium text-gray-300 block'>
            Password
                </label>
                <input
                    className='w-full px-3 py-2 mt-1 border border-gray-700 rounded-md text-white focus:outline-none focus:ring'
                    placeholder='Enter password'     
                />
            </div>
            <button className='text-center text-gray-400'>
                SignInButton
            </button>
        </form>
        <div className='text-center text-gray-400'>
                New here?
                <Link to={"/login"}>
                    Sign up
                </Link>
        </div>
    </div>
  </div>
</div>
  )
}

export default LoginPage
