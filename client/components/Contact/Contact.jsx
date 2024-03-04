import React from 'react';
import "./Contact.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIceCream } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
    return (
        <div className="contact-link-container">
    <h1 className="contact-link-text">Get tails wagging today!</h1>
    <div className="contact-link-wrapper">
        <a href="/contact" className="contact-link">
            Enquire <FontAwesomeIcon icon={faIceCream} size="3x" className="faicecream"/>
        </a>
    </div>
</div>
    );
}

export default Contact