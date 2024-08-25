import { React, useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useContentStore } from '../store/content';
import { validMovieIds } from '../utils/constants';

const MovieSlider = ({ category }) => {
  const { contentType } = useContentStore();
  const [movies, setMovies] = useState([]);

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
    <div className='flex flex-col'>
      <p>{category}</p>
      <div className='flex flex-row'>
        {movies.map((movie, index) => (
        <Link key={index}>
          <div>
            <img
              src={movie['Poster']}
              alt="IMG"
            />
          </div>
          <p>{movie['Title']}</p>
        </Link>
      ))}
      </div>
    </div>
  );
};

export default MovieSlider;











// import { React, useEffect, useState } from 'react'
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import { useContentStore } from '../store/content';
// import cookieParser from 'cookie-parser';
// import { validMovieIds } from '../utils/constants';

// const MovieSlider = ({ category }) => {
//   const { contentType } = useContentStore();
//   const [content, setContent] = useState([]);

//   useEffect(() => {
//     const getContent = async () => {
      
//       const res = await axios.get(`/api/v1/movies/${keyId}/trailer`);
//       setContent(res.data.message);
//       console.log(res.data.message);
      
//     };
//     getContent();
//   }, [contentType, category]);



//   return (
//     <div className='flex flex-row'>
//       <p>{category}</p>

//       <Link>
//         <div>
//           <img
//           src={content['Poster']}
//             alt="IMG"
//           />
//         </div>
//         <p>{content['Title']}</p>
//       </Link>


//     </div>
//   )
// }

// export default MovieSlider;