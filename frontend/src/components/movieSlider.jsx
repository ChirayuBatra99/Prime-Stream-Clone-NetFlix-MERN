import { React, useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useContentStore } from '../store/content';



const MovieSlider = ({ category }) => {
  const { contentType } = useContentStore();
  const [content, setContent] = useState([]);

  useEffect(() => {
    const getContent = async () => {
      const res = await axios.get('/api/v1/movies/14/trailer');
      setContent(res.data.message);
      console.log(res.data.message);
    };
    getContent();
  }, [contentType, category]);


  
  return (
    <div>
      <p>{category}</p>
      <Link>

        <div>
          <img
            alt="IMG"
          />
        </div>
        <p>{content['Title']}</p>


      </Link>
    </div>
  )
}

export default MovieSlider;