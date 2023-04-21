import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from 'service/serviceAPI';
import Moment from 'react-moment';
import {
  Content,
  ReviewList,
  ReviewItem,
  ReviewTitle,
  Time,
} from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getReviewInfo = async () => {
      try {
        await api.fetchReviews(movieId).then(data => setReviews(data.results));
      } catch (error) {
        console.log(error.message);
      }
    };
    getReviewInfo(movieId);
  }, [movieId]);

  return (
    <ReviewList>
      {reviews.length > 0 ? (
        reviews.map(({ author, content, id, created_at }) => {
          return (
            <ReviewItem key={id}>
              <ReviewTitle>Author: {author}</ReviewTitle>
              <Time>
                <Moment format="YYYY/MM/DD">{created_at}</Moment>
              </Time>
              <Content>{content}</Content>
            </ReviewItem>
          );
        })
      ) : (
        <p>Sorry, there is no reviews for this movie yet </p>
      )}
    </ReviewList>
  );
};

export default Reviews;



Reviews.propTypes = {
  id: PropTypes.number.isRequired,
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  created_at: PropTypes.string.isRequired,
};