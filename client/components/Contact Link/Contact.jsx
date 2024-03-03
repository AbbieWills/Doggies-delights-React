

import React from 'react';
import './contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIceCream } from '@fortawesome/free-solid-svg-icons';

const ContactLink = () => {
    return (
    <>
        <h1 className='contact-link-text'>Get tails wagging today!</h1>
        <a href="/contact" className="contact">
        <h1 className="contact-link"> Enquire <FontAwesomeIcon icon={faIceCream} size="3x" className="faicecream"/></h1>
        </a>
    </>
)

}

export default ContactLink