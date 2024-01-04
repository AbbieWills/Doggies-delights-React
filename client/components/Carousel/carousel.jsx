import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './carousel.css';
import rockyPhoto from './photos/rocky.png';
import lottie from './photos/lottie.png';
import sausage from './photos/sausage.png';
import springer from './photos/springer.png';
import jackrussel from './photos/jackrussel.png';
import blacklab from './photos/blacklab.png';
import blackspringer from './photos/blackspringer.png';


const TestimonialCarousel = () => {
  return (
    <div>
    <h1 className="testimonial-title">What the dogs are saying</h1>
    <Carousel>
      <Carousel.Item interval={3000}>
        <h2 className="comment">"I looooove it ❤️"</h2>
        <img className="testimonial-img" src={rockyPhoto} alt="rockyPhoto" />
        <p className="photo-desc">Rocky, Durham</p>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <h2 className='comment'>"Gorgeous girl Lottie is loving the banana!"</h2>
        <img className="testimonial-img" src={lottie} alt="lottie" />
        <p className="photo-desc">Lottie, Posh Paws - East Yorkshire</p>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
      <h2 className='comment'>"They both loved it!"</h2>
      <img className="testimonial-img" src={sausage} alt="" />
      <p className="photo-desc">North Yorkshire</p>
    </Carousel.Item>
    <Carousel.Item interval={3000}>
      <h2 className='comment'>"Soooo yummy!"</h2>
      <img className="testimonial-img" src={springer} alt="" />
      <p className="photo-desc">Paddy, East Yorkshire</p>
    </Carousel.Item>
    <Carousel.Item interval={3000}>
      <h2 className='comment'>"Happy doggies 😃"</h2>
      <img className="testimonial-img" src={jackrussel} alt="" />
      <p className="photo-desc">Skirlington Market, East Yorkshire</p>
    </Carousel.Item>
    <Carousel.Item interval={3000}>
      <h2 className='comment'>"Inca approved, the cat liked it too"</h2>
      <img className="testimonial-img" src={blacklab} alt="" />
      <p className="photo-desc">Inca, Harrogate, North Yorkshire</p>
    </Carousel.Item>
    <Carousel.Item interval={3000}>
      <h2 className='comment'>"Can't get enough!"</h2>
      <img className="testimonial-img" src={blackspringer} alt="" />
      <p className="photo-desc">East Yorkshire</p>
    </Carousel.Item>
    </Carousel>
    </div>
  );
};

export default TestimonialCarousel;
