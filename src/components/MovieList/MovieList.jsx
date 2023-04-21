import React from 'react';
import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom';
import noPhoto from '../../images/no-poster-available.jpg';
import { List, Item, Poster, MovieTitle, MovieLink } from './MovieList.styled';

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <List>
      {movies.map(movie => (
        <Item key={movie.id}>
          <MovieLink to={`/movies/${movie.id}`} state={{ from: location }}>
            {movie.poster_path !== null ? (
              <Poster
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                width={250}
                height={350}
              />
            ) : (
              <Poster
                src={noPhoto}
                alt={movie.title}
                width="250px"
                height="350px"
              />
            )}
            <MovieTitle>{movie.name ? movie.name : movie.title}</MovieTitle>
          </MovieLink>
        </Item>
      ))}
    </List>
  );
};

export default MovieList;

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      poster_path: PropTypes.string,
      title: PropTypes.string,
      name: PropTypes.string,
    }).isRequired
  ).isRequired,
};
