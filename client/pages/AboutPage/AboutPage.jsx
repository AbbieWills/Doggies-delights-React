import React from 'react';
import './AboutPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faDog, faBowlFood, faHeart, faSnowflake } from "@fortawesome/free-solid-svg-icons";
import Contact from '../../components/Contact/Contact.jsx';

const AboutPage = () => {

  return (
<>
<div className='about'>
<h3 className="about-title">What's in the tub</h3>
  <div className="row">
  <div className="col-7 about-ingredients">
    <p className="about-ingredients">
      Indulge your furry friends with our exceptional ice cream, carefully crafted to prioritize their health and happiness. Our recipe revolves around fat-free yogurt, ensuring that each delightful scoop is as nutritious as can be, boasting a mere 59 calories per tub! We understand that dogs cannot digest lactose, which is why our formula is meticulously lactose-free, guaranteeing only happy tummies here! <FontAwesomeIcon icon={faDog}/>
      <br></br>
      <br></br>
      Prepare to treat your beloved companions to a tantalizing selection of flavours. Currently, we offer banana flavour, peanut butter flavour (both made with real bananas and peanuts) and now a new vanilla flavour! Rest assured, our ice cream is exclusively concocted from 100% natural ingredients, completely free from added preservatives, non-natrual sugars, or any nasties. We take pride in offering a guilt-free indulgence that radiates pure goodness. <FontAwesomeIcon icon={faHeart}/>
      <br></br>
      <br></br>
      For optimal taste and texture, we recommend storing the ice cream in its frozen state at a chilly -18°C and consume within 5 months of purchase for optimal taste. Once defrosted, please consume within 3 days and do not refreeze. <FontAwesomeIcon icon={faSnowflake}/>
      <br></br>
      <br></br>
      Please note that while the ice cream baseline is fat-free, peanut butter and bananas contain naturally occurring fats and sugars.  <FontAwesomeIcon icon={faBowlFood}/>
      </p>
      </div>


  <table className="ingredients">
  <div className="col-12 ingredients-table">
  <th colspan="3"><h5>Ingredients</h5></th>
  <tr>
      <td><h5>Banana Flavour</h5></td>
      <td><h5>Peanut Butter Flavour</h5></td>
      <td><h5>Vanilla Flavour</h5></td>
    </tr>
    <tr>
      <td>Fat-Free Yoghurt (Milk)</td>
      <td>Fat-Free Yoghurt (Milk)</td>
      <td>Fat-Free Yoghurt (Milk)</td>
    </tr>
    <tr>
      <td>Fresh bananas</td>
      <td>100% Peanut butter (Peanuts)</td>
      <td>Vanilla Essence</td>
    </tr>
    <tr>
      <td>Live cultures</td>
      <td>Live cultures</td>
      <td>Live cultures</td>
    </tr>
    <tr>
      <td>Lactase Enzyme</td>
      <td>Lactase Enzyme</td>
      <td>Lactase Enzyme</td>
    </tr>
    </div>
    
  </table>
  </div>

  <br></br>

  <table className="nutrition">
    <th colspan ="4"><h5>Each Tub Contains:</h5></th>
    <tr>
        <td><h5>Nutrition</h5></td>
        <td><h5>Banana Flavour</h5></td>
        <td><h5>Peanut Butter Flavour</h5></td>
        <td><h5>Vanilla Flavour</h5></td>
      </tr>
      <tr>
        <td>Energy</td>
        <td>79kcal</td>
        <td>85kcal</td>
        <td>59kcal</td>
      </tr>
      <tr>
        <td>Fat</td>
        <td>0g</td>
        <td>*1.9g</td>
        <td>0g</td>
      </tr>
      <tr>
        <td>Carbohydrates</td>
        <td>14.4g</td>
        <td>10.8g</td>
        <td>9.4g</td>
      </tr>
      <td>of which sugars</td>
      <td>*7.6g</td>
      <td>*5.9g</td>
      <td>3.3g</td>
      <tr>
        <td>Protein</td>
        <td>6.8g</td>
        <td>10.7g</td>
        <td>6.6g</td>
      </tr>
      <tr>
        <td>Fibre</td>
        <td>1.2g</td>
        <td>2g</td>
        <td>0.6g</td>
      </tr>
      <tr>
        <td>Salt</td>
        <td>0.18g</td>
        <td>0.18g</td>
        <td>0.18g</td>
      </tr>
      <tr>
        <td>Calcium</td>
        <td>0.16g</td>
        <td>0.16g</td>
        <td>0.16g</td>
      </tr>
    </table>
    <p className='fats'>*Peanuts and bananas contain natrually occuring sugars and/or fats</p>
</div>
    <Contact />
</>
  );
};

export default AboutPage;
