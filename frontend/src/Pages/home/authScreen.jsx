import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import React from 'react'
import { ChevronRight } from "lucide-react";
import { Navigate } from "react-router-dom";

function AuthScreen() {

    const navigate= useNavigate();
    const [email, setEmail] = useState("");

    const handleSubmit =(e)=>{
        e.preventDefault();
        navigate("/signup?email="+email);
    }

    return (
        <div className="hero-bg relative">
            <header className='flex items-center justify-between p-4 max-w-6xl mx-auto pb-10'>
                <img src="/prime-stream-logo.png" className='w-32 md:w-52' />
                <Link to={"/login"} className="text-white">
                    Sign In
                </Link>
            </header>


            <div className="text-white flex flex-col items-center justify-center text-center max-w-6xl mx-auto py-40 ">
                <h1 className="text-4xl font-bold mb-4 md:text-6xl">Unlimited movies, TV shows, and more</h1>
                <p className="text-lg mb-4">Watch anywhere. Cancel anytime.</p>
                <p className="mb-4">Ready to watch? Enter your email to create or restart your membership.</p>
                <form className="flex md:flex-row gap-4 w-1/2" onSubmit={ handleSubmit}>
                    <input
                        type='email'
                        placeholder="Email address"
                        value= {email}
                        onChange={(e)=> setEmail(e.target.value)}

                        className="p-2 rounded flex-1 bg-black border-gray-700"
                    />
                    <button className="bg-red-600 text-xl lg:text-2xl px-2 lg:px-6 py-1 md:py-2 rounded flex justify-center items-center">
                        Get started
                        <ChevronRight className='size-8 md:size-10' />

                    </button>
                </form>
            </div>

            {/* seperation  */}
            <div className='h- w-full bg-[#232323]' aria-hidden='true' />


            {/* 1st section */}
            <div className='py-10 bg-black text-white'>
                <div className='flex max-w-6xl mx-auto items-center justify-center md:flex-row flex-col px-4 md:px-2'>
                    {/* left side */}
                    <div className="flex-1 text-center md:text-left">
                        <h2 className='text-4xl md:text-5xl font-extrabold mb-4'>Enjoy your TV</h2>
                        <p className="text-lg md:text-xl">Watch on Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
                    </div>
                    {/* right side */}
                    <div className="flex-1 relative">
                        <img src='/tv.png' alt='Tv image' className='mt-4 z-20 relative' />
                        <video
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-1/2 z-10"
                            playsInline
                            autoPlay={true}
                            muted
                            loop
                        >
                            <source src="/hero-vid.m4v" type="video/mp4" />
                        </video>
                    </div>
                </div>
            </div>

            {/* seperation  */}
            <div className='h- w-full bg-[#232323]' aria-hidden='true' />




            {/* 2nd section */}
            <div className='py-10 bg-black text-white'>
                <div className='flex max-w-6xl mx-auto items-center justify-center md:flex-row flex-col px-4 md:px-2'>
                    {/* left side */}
                    <div className="flex-1 relative">
                        <div className="relative">
                            <img
                                src='/stranger-things-lg.png'
                                alt='img not found'
                                className="mt-4"
                            />
                            <div className="flex  items-center absolute gap-2 left-1/2 bg-black -translate-x-1/2 w-3/4 bottom-5 
                                            lg:w-1/2 h-24 border border-slate-500 rounded-md px-2">
                                <img
                                    src='/stranger-things-sm.png'
                                    alt='image'
                                    className="h-full"
                                />
                                <div className="flex justify-between items-center w-full">
                                    <div className="flex flex-col gap-0">
                                        <span className="text-md lg:text-lg font-bold">Stranger Things</span>
                                        <span className="text-sm text-blue-500">Downloading...</span>
                                    </div>
                                    <img src='/download-icon.gif' alt='' className="h-12" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* right side */}
                    <div className="flex-1 text-center md:text-left">
                        <h2 className='text-4xl md:text-5xl font-extrabold mb-4'>Download your shows to watch offline.</h2>
                        <p className="text-lg md:text-xl">Save your favorites easily and always have something to watch.</p>
                    </div>
                </div>
            </div>

            {/* seperation  */}
            <div className='h- w-full bg-[#232323]' aria-hidden='true' />






            {/* 3rd section */}
            <div className='py-10 bg-black text-white'>
                <div className='flex max-w-6xl mx-auto items-center justify-center md:flex-row flex-col px-4 md:px-2'>
                    {/* left side */}
                    <div className="flex-1 text-center md:text-left">
                        <h2 className='text-4xl md:text-5xl font-extrabold mb-4'>Watch everywhere</h2>
                        <p className="text-lg md:text-xl">Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
                    </div>
                    {/* right side */}
                    <div className="flex-1 relative overflow-hidden">
                        <img src='/device-pile.png' alt='Tv image' className='mt-4 z-20 relative' />
                        <video
                            className="absolute top-2 left-1/2 -translate-x-1/2 h-4/6 z-10 max-w-[63%]"
                            playsInline
                            autoPlay={true}
                            muted
                            loop
                        >
                            <source src="/video-devices.m4v" type="video/mp4" />
                        </video>
                    </div>
                </div>
            </div>


            {/* seperation */}
            <div className='h-2 w-full bg-[#232323]' aria-hidden='true' />




            {/* 4th section */}
            




        </div>
    )
}

export default AuthScreen
