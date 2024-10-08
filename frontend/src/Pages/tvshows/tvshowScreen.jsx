import { React, useState } from 'react'
import { Link } from "react-router-dom";
import { MOVIE_CATEGORIES, TV_CATEGORIES, validMovieIds } from "../../utils/constants.js";
import { useContentStore } from "../../store/content.js"
import useGetTrendingContent from '../../hooks/useGetTrendingContent.jsx';
import Navbar from "../../components/Navbar.jsx"
import { Info, Play } from "lucide-react";
import MovieSlider from '../../components/movieSlider.jsx';
import Hero from "../../../public/a.png"

function TvshowScreen() {
  const { trendingContent } = useGetTrendingContent();
  const { contentType } = useContentStore();

  if (!trendingContent)
    return (
      <div>
        <Navbar />
      </div>
    );

  return (
    <div>
      <div className='relative h-screen text-white '>
        <Navbar />

        <img
          className='absolute h-full w-full'
          src={Hero}
          alt="img Misising"
        />

        {/* <div className='absolute top-0 left-0 w-full h-full bg-black/50 -z-50' aria-hidden='true' /> */}

        <div className='absolute left-0 flex flex-col px-8 md:px-16 lg:px-32 h-full w-full top-0  mt-8 justify-center'>

          <div className='max-w-2xl'>
            <h1 className='mt-4 text-6xl font-extrabold text-balance'>
              {trendingContent['Title']}
            </h1>
            <p className='mt-4 text-lg'>
              {trendingContent['Plot']}
            </p>
          </div>

          <div className='flex mt-8'>
            <Link
            	  className='bg-white hover:bg-white/80 text-black font-bold py-2 px-4 rounded mr-4 flex'>
                <Play className='size-6 mr-2 fill-black' />
            </Link>
            <Link
                className='bg-white hover:bg-white/80 text-black font-black py-2 px-4 rounded mr04 flex'>
                <Info className='size-6 mr-2' />
            </Link>
          </div>
        </div>
      </div>



      {/* Second portion */}
      <div className=''>
        {contentType === "movie"
          ?
          MOVIE_CATEGORIES.map((category) =>
            <MovieSlider key={category} category={category} />
          )

          : TV_CATEGORIES.map((category) => <MovieSlider key={category} category={category} />)
        }
      </div>

    </div>
  )
}

export default TvshowScreen
