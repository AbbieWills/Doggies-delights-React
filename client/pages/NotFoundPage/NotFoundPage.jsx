import React from 'react';
import './NotFoundPage.css';
import lost from './lost.png';

const NotFound = () => {
  return (
    <div>
      <h1 className='notFoundTitle'>404 - Page not found.</h1>
      <p className='notFound'>Definitely nothing to do with a dog running riot in the server room. Definitely not that. <br />
       The page you were looking for doesn't exist, why not go back home?
      <button className='homeButton' onClick={() => window.location.replace('/')}>Go Home</button>
</p>
      <img className='lost' src={lost}></img>

    </div>
  );
};

export default NotFound;
