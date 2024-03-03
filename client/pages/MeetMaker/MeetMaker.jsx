import React from 'react';
import './MeetMaker.css';
import vinny from './vinny.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faIceCream  } from '@fortawesome/free-solid-svg-icons';
import ContactLink from '../../components/Contact Link/contact';



const MeetMaker = () => {

  return (
<>
      <div className="maker">
      <h3 className="maker-title">About the Maker</h3>
        <div className="col-lg-13">
          <div className="column cta-heading"><p className='story'>
            Hello everyone! <br></br>
            Allow me to introduce myself - I'm Abbie Wills, the visionary behind Doggie's Delights! <br></br>
            Over the past six years, I've had the incredible opportunity to work closely with our beloved four-legged friends, and I must say, I've developed an unwavering adoration for everything about them!
            In 2021, I embarked on an educational journey and successfully completed my bachelor's degree in Bio-Veterinary Science, with a primary focus on canine nutrition. This enlightening experience further fueled my passion for providing our furry companions with a product that would not only be tasty but also easily digestible. <br></br> <br></br>
            During a delightful summer stroll in 2021, I stumbled upon a dog-friendly cafe and observed something rather intriguing. People were indulging their precious pups with scoops of human vanilla ice cream. Naturally, this piqued my curiosity and concern. After all, the consumption of human ice cream by dogs, coupled with their limited ability to digest lactose, cannot be a healthy combination. <br></br> <br></br>
            Driven by my love for canines and a desire to prioritize their well-being, I decided to take matters into my own hands. Thus, I set out to create a delectable solution: my very own batch of doggy ice cream. The first lucky recipient was my loyal Labrador companion, Pippa, who simply adored every lick. This heartwarming experience inspired me to share this joy with other cherished fur babies, which ultimately led you to this very moment. <FontAwesomeIcon icon={faIceCream} className="icecream-icon"/>  <br></br> Thank you for joining me on this delightful journey! - Abbie Wills</p></div>
           <div>
           <img className="vinny-photo" src={vinny} alt="vinnyPhoto"></img>
           <p className="vinny-info">Vinny <FontAwesomeIcon icon={faInstagram} className="insta-icon"/> <br></br>  @vinnytheharrogategolden</p> 
        </div>
        </div>
        </div>
        <ContactLink />

</>
  );
};


export default MeetMaker;
