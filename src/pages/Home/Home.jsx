import { useState, useEffect } from 'react';
import api from 'service/serviceAPI';
import MovieList from 'components/MovieList/MovieList';
import {Heading} from './Home.styled'

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    try {
      const movies = await api.fetchTrendingMovies();
      setMovies([...movies]);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <main>
      <Heading>Movies which are trending today</Heading>
      <MovieList movies={movies} />
    </main>
  );
};

export default Home;
