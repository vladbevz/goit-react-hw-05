import React from 'react';
import { Link } from 'react-router-dom';

export default function MovieList({ movies}) {
  // if(isLoading) {
  //   return <p>Loading movies...</p>
  // }
  // if (isLoading && !movies.length) {
  //   return <p>No movies found</p>; 
  // }

  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`}>{movie.title}</Link> 
        </li>
      ))}
    </ul>
  );
};