import { useState, useEffect, useRef, Suspense } from 'react';
import PropTypes from 'prop-types';
import api from 'service/serviceAPI';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import noPhoto from '../../images/no-poster-available.jpg';
import {  HiOutlineArrowNarrowLeft } from "react-icons/hi";
import Loader from 'components/Loader/Loader';
import {
  SubList,
  SubPage,
  Item,
  Box,
  MovieInfo,
  Img,
  MovieTitle,
  Score,
  UserScore,
  Descr,
  GoBack
} from 'pages/MoviesDetails/MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const backLinlRef = useRef(location.state?.from ?? '/movies');
  useEffect(() => {
    const getSingleMovie = async () => {
      try {
        await api.fetchMovieById(movieId).then(data => setMovie(data));
      } catch (error) {
        console.log(error.message);
      }
    };
    getSingleMovie(movieId);
  }, [movieId]);

  return (
    movie && (
      <main>
        <GoBack to={backLinlRef.current}>< HiOutlineArrowNarrowLeft/>Go back</GoBack>
        <Box>
          {movie.poster_path !== null ? (
            <Img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              width={250}
              height={350}
            />
          ) : (
            <Img src={noPhoto} alt={movie.title} width="250px" height="350px" />
          )}

          <MovieInfo>
            <MovieTitle>
              {movie.title} ({movie.release_date.slice(0, 4)})
            </MovieTitle>
            <UserScore>
              User Score: <Score>{(movie.vote_average * 10).toFixed(0)}%</Score>
            </UserScore>
            <h3>Overview</h3>
            <Descr>{movie.overview}</Descr>
            <h4>Genres</h4>
            <ul>
              {movie.genres.map(({ name }, id) => (
                <Item key={id}>{name}</Item>
              ))}
            </ul>
            <SubList>
              <li>
                <SubPage to="cast">Cast</SubPage>
              </li>
              <li>
                <SubPage to="reviews">Reviews</SubPage>
              </li>
            </SubList>
          </MovieInfo>
        </Box>
        <Suspense fallback={<Loader />}>
        <Outlet />
        </Suspense>
      </main>
    )
  );
};

export default MovieDetails;

MovieDetails.propTypes = {
  vote_average: PropTypes.number,
  poster_path: PropTypes.string,
  title: PropTypes.string,
  release_date: PropTypes.string,
  overview: PropTypes.string,
};
