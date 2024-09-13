import  { useState, useEffect } from 'react';
import { useSearchParams, } from 'react-router-dom';
import axios from 'axios';
import MovieList from '../components/MovieList/MovieList';

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') || '';
  
  

  const handleSearch = (e) => {
    e.preventDefault();
    const form = e.target;
    const searchQuery = form.elements.query.value.trim();
    if(searchQuery){
      setSearchParams({ query: searchQuery });
    } else {
      setSearchParams({});
    }
    
  };

  useEffect(() => {
    if (query === '') return;

    const searchMovies = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${query}`, {
          headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYThhMWI2ZDA4MzZmYWJhNTc3YjdiNzkwZDI3NzgyZCIsIm5iZiI6MTcyNjE2Mjk3NC4zNzM4OTIsInN1YiI6IjY2ZTMyNjkwMjgwNDhkOTJkZWY5MTQzMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5oNYe0IhjKjxs5uBTXuhgWhxS_1Fq-QvM-cFBdmQSmc'
          }
        });
        setMovies(response.data.results);
      } catch (error) {
        console.error('Error searching movies:', error);
      } finally {
        setIsLoading(false); 
      }
    };

    searchMovies();
  }, [query]);
 


  return (
    <div>
      <h1>Search for a movie</h1>
      <form onSubmit={handleSearch}>
        <input
        name="query"
          type="text"
          defaultValue={query}
          placeholder="Enter movie title"
        />
        <button type="submit">Search</button>
      </form>
      
      {isLoading && <p>Loading...</p>}
      {!isLoading && query && movies.length === 0 && <p>No movies found</p>}
      {!isLoading && movies.length > 0 && <MovieList movies={movies} />}
      
    </div> 
  );
};
