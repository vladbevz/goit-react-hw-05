import React, { useState, useEffect } from 'react';
import { Link, useLocation  } from 'react-router-dom';
import axios from 'axios';

export default function  HomePage() {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const response = await axios.get('https://api.themoviedb.org/3/trending/movie/day', {
          headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYThhMWI2ZDA4MzZmYWJhNTc3YjdiNzkwZDI3NzgyZCIsIm5iZiI6MTcyNjE2Mjk3NC4zNzM4OTIsInN1YiI6IjY2ZTMyNjkwMjgwNDhkOTJkZWY5MTQzMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5oNYe0IhjKjxs5uBTXuhgWhxS_1Fq-QvM-cFBdmQSmc'
          }
        });
        setMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching trending movies:', error);
      }
    };

    fetchTrendingMovies();
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      <ul>
        {movies.map(movie => (
        //   <li key={movie.id}>{movie.title}</li>
            <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>{movie.title} </Link>
      </li>
        ))}
      </ul>
    </div>
  );
};
