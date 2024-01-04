import React, { useState } from 'react';
import './ContactPage.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    business: '',
    location: '',
    email: '',
    subject: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const composeMailTo = () => {
    const { firstname, lastname, business, location, email, subject } = formData;

    // Compose the mailto URL
    const mailto = `mailto:sales@ddicecream.co.uk?subject=${encodeURIComponent("New Ice Cream Enquiry")}&body=
    First Name: ${encodeURIComponent(firstname)}
    Last Name: ${encodeURIComponent(lastname)}
    Business: ${encodeURIComponent(business)}
    Location: ${encodeURIComponent(location)}
    Email: ${encodeURIComponent(email)}
    Subject: ${encodeURIComponent(subject)}
    `;

    // Open the user's email client
    window.location.href = mailto;
  };

  return (
    <div className="contact-form">
      <h1 className="address">Get in touch</h1>
      <div>
      <p className="address">
        Originating from the charming town of Harrogate, we are thrilled to announce our expansion across the picturesque landscapes of East Yorkshire, UK.
        </p>
      <p className='popping'>
        Doggie's Delights is now popping up in various locations throughout the region, bringing joy and wholesome treats to our furry friends.
        </p>
      <p className="delivery">
        To indulge in our delectable ice cream and secure a spot on our delivery route around Yorkshire simply get in touch with us.
        We have exciting news for you - there is no minimum order requirement! </p>
      <p className="dates">
        Whether you're seeking a single tub or a grand feast for your four-legged companions, we are here to cater to your needs. 
        To streamline the delivery process and ensure a seamless experience, kindly specify a selection of dates and times during which you will be available to accept the order. This allows us to coordinate the delivery with utmost precision and deliver your delightful package right to your dogs bowl.
        </p>
        <p className="email">
        sales@ddicecream.co.uk
      </p>
      </div>
      <form className='form' onSubmit={composeMailTo}>
        <div className="row">
          <div className="col-md-6">
            <label htmlFor="fname">First Name</label>
            <input type="text" id="fname" name="firstname" placeholder="Your name.." required onChange={handleInputChange} value={formData.firstname} />
          </div>
          <div className="col-md-6">
            <label htmlFor="lname">Last Name</label>
            <input type="text" id="lname" name="lastname" placeholder="Your last name.." required onChange={handleInputChange} value={formData.lastname} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <label htmlFor="business">Business</label>
            <input type="text" id="business" name="business" placeholder="Your business name (optional).." onChange={handleInputChange} value={formData.business} />
          </div>
          <div className="col-md-6">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Your email.." required onChange={handleInputChange} value={formData.email} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
        <label htmlFor="subject">Subject</label>
        <textarea id="subject" name="subject" placeholder="Write here.." required onChange={handleInputChange} value={formData.subject}></textarea>
        </div>
        </div>
        <button id="submit" className="submit" type="submit" value="Submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;


// import React, { useState } from 'react';
// import './ContactPage.css';
// import axios from 'axios';


// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     firstname: '',
//     lastname: '',
//     business: '',
//     location: '',
//     email: '',
//     phone: '',
//     subject: '',
//     brand: '',
//     type: '',
//     quantity: '',
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post('/send-email', formData, {
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });
//       console.log('Axios request successfull');
//       if (response.data.success) {
//         alert('Email sent successfully.');
//         setFormData({
//           firstname: '',
//           lastname: '',
//           business: '',
//           location: '',
//           email: '',
//           phone: '',
//           subject: '',
//           brand: '',
//           type: '',
//           quantity: '',
//         });
//       } else {
//         alert('Failed to send email. Please try again later.');
//       }
//     } catch (error) {
//       console.error('Axios Error:', error);
//       alert('An error occurred while sending the email. Please try again later.');
//       if (error.response) {
//         console.error('Response Data:', error.response.data);
//         console.error('Response Status:', error.response.status);
//         console.error('Response Headers:', error.response.headers);
//       }
//     }
//   };

//   return (
//     <div className="contact-form">
//       <h1 className="address">Bookings Information</h1>
//       <p className="address">
//         Located in Hull East Yorkshire, UK. <br /> Contact now to book a collection slot (30 mile radius) or delivery (rest of UK). <br /> <br />
//         info@kempsmps.com <br /> <br/>
//       </p>
//       <form className='form' onSubmit={handleSubmit}>
//         <h2 className="address">Contact Form</h2>
//         <div className="row">
//         <div className="col-md-6">
//           <label htmlFor="name">First Name</label>
//           <input type="text" id="fname" name="firstname" placeholder="Your name.." required />
//           </div>
//         <div className="col-md-6">
//           <label htmlFor="business">Last Name</label>
//           <input type="text" id="lname" name="lastname" placeholder="Your last name.." required />
//           </div>
//           </div>
//         <div className="row">
//         <div className="col-md-6">
//           <label htmlFor="name">Business</label>
//           <input type="text" id="business" name="business" placeholder="Your business name (optional).." />
//           </div>
//         <div className="col-md-6">
//           <label htmlFor="business">Location</label>
//           <input type="text" id="location" name="location" placeholder="Your address.." required />
//           </div>
//           </div>
//         <div className="row">
//         <div className="col-md-6">
//           <label htmlFor="email">Email</label>
//           <input type="email" id="email" name="email" placeholder="Your email.." required />
//           </div>
//         <div className="col-md-6">
//           <label htmlFor="location">Phone</label>
//           <input type="number" id="phone" name="phone" placeholder="Your phone number.." required />
//           </div>
//           </div>
//         <label htmlFor="subject">Subject</label>
//           <textarea id="subject" name="subject" placeholder="Write here.." required></textarea>
//           <label htmlFor="life-jacket-brand">Brand of life jacket</label>
//           <input type="text" id="life-jacket-brand" name="brand" placeholder="Enter brand.." required />
//         <div className="row">
//         <div className="col-md-6">
//           <label htmlFor="life-jacket-type">Type of life jacket</label>
//           <select id="life-jacket-type" name="type" required value={formData.type} onChange={handleInputChange}>
//             <option value="" disabled>
//               Select a type
//             </option>
//             <option value="solas">Solas</option>
//             <option value="non-solas">Non-Solas (ISO)</option>
//           </select>
//           </div>
//         <div className="col-md-6">
//           <label htmlFor="quantity">Quantity of life jackets</label>
//           <input type="number" id="quantity" name="quantity" placeholder="Enter quantity.." required />
//           <br />
//           </div>
//           </div>          
//              <button id="submit" className="submit" type="submit" value="Submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default ContactForm;
