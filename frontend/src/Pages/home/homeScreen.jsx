import {React, useState} from 'react'
import {Link} from "react-router-dom";
import {MOVIE_CATEGORIES, TV_CATEGORIES} from "../../utils/constants.js";
import {useContentStore} from "../../store/content.js"
import useGetTrendingContent from '../../hooks/useGetTrendingContent.jsx';
import Navbar from "../../components/Navbar.jsx"
import {Info , Play} from "lucide-react";
import MovieSlider from '../../components/movieSlider.jsx';

function homeScreen() {
  const {trendingContent} = useGetTrendingContent();
  const {contentType} = useContentStore();
  
  if(!trendingContent)
      return (
        <div>
          <Navbar/>
        </div>
      );
      
      
  return (
    <div>
      <Navbar/>

      <div>
        <h1>
          {trendingContent['Title'] }
        </h1>
        <p>
          {trendingContent['Released']}
        </p>
      </div>

      <div>
        <Play className='size-6 mr-2 fill-black' />
        <Info className='size-6 mr-2' />
      </div>

      <h1>hiu</h1>
      <div className=''>
        {contentType === "movie"
          ? MOVIE_CATEGORIES.map((category) => <MovieSlider key={category} category={category} />)
          : TV_CATEGORIES.map((category) => <MovieSlider key={category} category={category} />)
        }
      </div>

    </div>
  )
}

export default homeScreen
