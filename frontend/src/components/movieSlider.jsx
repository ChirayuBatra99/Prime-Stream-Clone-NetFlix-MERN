import { React, useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useContentStore } from '../store/content';
import { validMovieIds } from '../utils/constants';
// import CustomArrow from './customArrow';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const MovieSlider = ({ category }) => {
  const { contentType } = useContentStore();
  const [movies, setMovies] = useState([]);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
  };

  useEffect(() => {
    const getContent = async () => {
      try {
        // Create an array of promises for fetching 10 movies
        const promises = Array.from({ length: 10 }, () => {
          const randomId = validMovieIds[Math.floor(Math.random() * validMovieIds.length)];
          return axios.get(`/api/v1/movies/${randomId}/trailer`);
        });

        // Wait for all promises to resolve
        const responses = await Promise.all(promises);

        // Extract movie data from responses and update the state
        const movieData = responses.map(res => res.data.message);
        setMovies(movieData);

        console.log(movieData);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    getContent();
  }, [contentType, category]);

  return (
    <div className='bg-stoen-800'>
    <div className='flex flex-col p-5 bg-stone-800 '>
      <p className=' font-bold mb-2 mt-4 text-white text-3xl'>{category}</p>
      <Slider {...settings}>

      {/* <div className='flex flex-row space-x-4 overflow-x-scroll scrollbar-hide '> */}
        {movies.map((movie, index) => (
          <Link key={index}>
            <div className='w-[150px] h-[225px] rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform transform'>
              <img
                src={movie['Poster']}
                alt="IMG"
                className='w-full h-full object-cover'
              />
            </div>
            <p className='mt-2 text-sm font-medium text-center text-white'
            >{movie['Title']}</p>
          </Link>
        ))}
      {/* </div> */}

      </Slider>

    </div>
    </div>
  );
};

export default MovieSlider;




