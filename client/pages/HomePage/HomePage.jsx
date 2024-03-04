import React from 'react';
import './homepage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIceCream, faPaw, faCircleCheck, faHeart  } from '@fortawesome/free-solid-svg-icons';
import Carousel from '../../components/Carousel/carousel.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import icecreamtitle from './photos/icecreamtitle.png';
import cowphoto from './photos/cowphoto.png';
import tearoom from './photos/tearooms.png';
import busters from './photos/busters.png';
import sophies from './photos/sophies.png';
import farmshop from './photos/farmshop.png';
import poshpaws from './photos/poshpaws.png';
import micropig from './photos/micropig.png';
import bakery from './photos/bakery.png';
import slingsbys from './photos/slingsbys.png';
import pjs from './photos/pjs.png';
import ohmydog from './photos/ohmydog.png';
import wortley from './photos/wortley.png';
import warley from './photos/warley.png';
import ContactLink from '../../components/Contact Link/contact.jsx';



const HomePage = () => {
  return (
    <>
      <div className="row intro-explain-container">
            <div className='col-lg-6 col-md-12 col-sm-12'>
          <h1 className='intro'>Lactose and Fat-Free <br /> Dog Ice Cream </h1>
          <h2 className='flavours'>Now available in Peanut Butter, Banana, and Vanilla flavour!
          <a href="/contact" className="shop-button">
          <h1 className="enquire"> Enquire <FontAwesomeIcon icon={faIceCream} size="3x" className="faicecream"/></h1>
            </a>
          </h2>
           
            </div>
      <div className='col-lg-6 col-md-12 col-sm-12'>
        <div className='intro-image'>
          <img className='intro-image-img' src={icecreamtitle} alt='ice cream'></img>
        </div>
        </div>
          <div className='explain'>
            <h2>Tail Waggingly Tasty</h2>
            <div className='row'>
            <div className='col-lg-9'>
              <div className='about-info'>
            <p> Doggie's delights is a handmade dog-friendly frozen treat for your furry friend, made with fat-free yoghurt from cows that are free to roam the fields for a whopping 150 days a year. 
    Our ingredients are tailored to your dog’s dietary needs.<br></br><br></br>
     We have made our fat-free, lactose-free and gluten-free formula taste tail-waggingly tasty, 
     the best part is with no artificial flavours or preservatives; your dog can enjoy this tantalisingly tasty treat with no worry whatsoever <FontAwesomeIcon icon={faIceCream} size="3x" className="faicecream"/>
          </p>

            </div>
            </div>
            <div className="col-lg-3">
              <img className='cowphoto' src={cowphoto} alt='ice cream'></img>
            </div>
            </div>
          </div>

          <div className='features'>
          <div className="row">
    <div className="feature-box col-lg-4">
    <FontAwesomeIcon icon={faCircleCheck} size="3x" className="check"/>
    <h3>Free-from.</h3>
    <p>Lactose, fat, gluten and additives.</p>
    </div>

    <div className="feature-box col-lg-4">
    <FontAwesomeIcon icon={faPaw} size="3x" className="paw"/>    <h3>Natural.</h3>
    <p>Using fresh bananas and 100% peanut butter.</p>
    </div>

    <div className="feature-box col-lg-4">
    <FontAwesomeIcon icon={faHeart} size="3x" className="heart"/>    <h3>Low-calorie.</h3>
    <p>From only 59 calories per pot!</p>
    </div>
</div>
</div>

<div className='testimonials'>
  <Carousel/>
</div>

<div className='press'>
<h3> In stock now at:</h3>
    <div class="container-fluid">
    <img class="press-logoCircle" src={pjs} alt="pjsLogo"></img>
      <a href='https://thatdogshop.co.uk/' target='_blank'>
    <img class="press-logoCircle" src={ohmydog} alt="OhMyDog"></img>
      </a>
      <a href='https://www.bustersqualityices.co.uk/' target='_blank'>
    <img class="press-logoCircle" src={busters} alt="PawfectlyRaw"></img>
      </a>
      <a href='https://www.facebook.com/p/Posh-Paws-Hull-100064249983037/' target='_blank'>
    <img class="press-logo" src={poshpaws} alt="PoshPawsLogo"></img>
      </a>
      <a href='https://www.facebook.com/micropiglongriston/' target='_blank'>
    <img class="press-logo" src={micropig} alt="MicropigLogo"></img>
      </a>
      <a href='https://www.thefarmshopyorkshire.co.uk/' target='_blank'>
    <img class="press-logo" src={farmshop} alt="FarmshopSkirlaugh"></img>
      </a>
      <a href='https://thedogsbakery.co.uk/' target='_blank'>
    <img class="press-logo" src={bakery} alt="BakeryLogo"></img>
      </a>
      <a href='https://www.facebook.com/slingsbys/' target='_blank'>
    <img class="press-logo" src={slingsbys} alt="SlingsLogo"></img>
      </a>
      <a href='https://www.sophiesbedandbreakfast.co.uk/cornershop' target='_blank'>
    <img class="press-logo" src={sophies} alt="SophiesLogo"></img>
      </a>
      <a href='https://www.facebook.com/people/The-Old-Post-Office-and-Tearooms/100093574080618/' target='_blank'>
    <img class="press-logo" src={tearoom} alt="TearoomLogo"></img>
      </a>
      <a href='https://www.facebook.com/WortleyFarmShop' target='_blank'>
    <img class="press-logo" src={wortley} alt="WortleyFarmShopLogo"></img>
      </a>
      <a href='https://www.warleycrosskennels.co.uk/' target='_blank'>
    <img class="press-logo" src={warley} alt="WarleyCrossLogo"></img>
      </a>
</div>
<ContactLink/>

</div>
      </div>

    </>
  )
}

export default HomePage