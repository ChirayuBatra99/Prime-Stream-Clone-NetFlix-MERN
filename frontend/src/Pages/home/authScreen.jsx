import { useState } from "react";
import { Link } from "react-router-dom";
import React from 'react'
import { ChevronRight } from "lucide-react";

function AuthScreen() {
    return (
        <div className="hero-bg relative">
            <header className='flex items-center justify-between p-4 max-w-6xl mx-auto pb-10'>
                <img src="/netflix-logo.png" className='w-32 md:w-52' />
                <Link to={"/login"} className="text-white">
                    Sign In
                </Link>
            </header>

           

            <div className="text-white flex flex-col items-center justify-center text-center max-w-6xl mx-auto py-40 ">
                <h1 className="text-4xl font-bold mb-4 md:text-6xl">Unlimited movies, TV shows, and more</h1>
                <p className="text-lg mb-4">Watch anywhere. Cancel anytime.</p>
                <p className="mb-4">Ready to watch? Enter your email to create or restart your membership.</p>
                <form className="flex md:flex-row gap-4 w-1/2">
                    <input
                        placeholder="Email address"
                        className="p-2 rounded flex-1 bg-black border-gray-700"
                    />
                    <button className="bg-red-600 text-xl lg:text-2xl px-2 lg:px-6 py-1 md:py-2 rounded flex justify-center items-center">
                        Get started
                        <ChevronRight className='size-8 md:size-10' />

                    </button>
                </form>
            </div>















			<div className='h- w-full bg-[#232323]' aria-hidden='true' />


            {/* 1st section */}
			<div className='py-10 bg-black text-white'>
				<div className='flex flex-row'>
					{/* left side */}
                        <div>
                            <h2>Enjoy your TV</h2>
                            <p>Watch on Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
                        </div>
					{/* right side */}
                        <div>
                        <img src='/tv.png' alt='Tv image' className='mt-4 z-20 relative' />

                            <video
                                className="absolute"
                                autoPlay={true}
                                muted
                                loop
                            >
                                <source src="hero-vid.m4v" type="mp4/video"/>
                            </video>
                        </div>
				</div>
			</div>
            





        </div>
    )
}

export default AuthScreen
