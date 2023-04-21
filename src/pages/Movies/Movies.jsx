import { useState, useEffect } from 'react';
import SearchBar from 'components/SearchBar/SearchBar';
import MovieList from 'components/MovieList/MovieList';
import api from 'service/serviceAPI';
import { useSearchParams } from 'react-router-dom';


const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (query) {
      getSearchedMovies(query);
    }
  }, [query]);

  const filterMovies = value => {
    setSearchParams(value !== '' ? { query: value } : {});
  };

  const getSearchedMovies = async searchQuery => {
    try {
      await api
        .fetchSearchedMovie(searchQuery)
        .then(data => setMovies(data.results));
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <main>
      <SearchBar onFormSubmit={filterMovies} />
      <MovieList movies={movies} />
    </main>
  );
};

export default Movies;
