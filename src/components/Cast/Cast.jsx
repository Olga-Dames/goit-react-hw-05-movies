import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from 'service/serviceAPI';
import noPhoto from '../../images/no-poster-available.jpg';
import { CastItem, CastList, CastTitle, Content, Poster, Name } from './Cast.styled';

  const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    api.fetchCast(movieId).then(data => setCast(data.cast));
  }, [movieId]);
  console.log(cast);

  return (
    cast && (
      <div>
        <CastTitle>Additional information</CastTitle>
        <CastList>
          {cast.map(({ profile_path, character, name, id }) => (
            <CastItem key={id}>
              {profile_path !== null ? (
                <Poster
                  src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                  alt={character}
                  width="200px"
                  height="300px"
                />
              ) : (
                <Poster
                  src={noPhoto}
                  alt={character}
                  width="200px"
                  height="300px"
                />
              )}
              <Name>{name}</Name>
              <Content>Character: {character}</Content>
            </CastItem>
          ))}
        </CastList>
      </div>
    )
  );
};

export default Cast;


Cast.propTypes = {
  id: PropTypes.number.isRequired,
  profile_path: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};