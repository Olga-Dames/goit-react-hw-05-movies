import React from 'react';
import pageNotFound from '../../images/404.webp'


const NotFound = () => {

  return (
    <div>
        <img src={pageNotFound} alt='Oops, page not found' />
    </div>
  );
};

export default NotFound;
