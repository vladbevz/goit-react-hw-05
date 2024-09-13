import React from 'react';
import { Link } from 'react-router-dom';

export default function MovieList({ movies, isLoading }) {
  if(isLoading) {
    return <p>Loading movies...</p>
  }
  if (movies.length === 0) {
    return <p>No movies found</p>; // Відображаємо повідомлення, якщо немає фільмів
  }

  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`}>{movie.title}</Link> {/* посилання на сторінку фільму */}
        </li>
      ))}
    </ul>
  );
};