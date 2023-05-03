import React, { useState } from "react";
import '../contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';


function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
    // Send form data to a server or API endpoint here
    setName('');
    setEmail('');
    setMessage('');
    setFormSubmitted(true);
  };

  return (
    <div className="contactmecontent" id='contactmepart'>
      <form id='submitform' onSubmit={handleSubmit}>
        <div >
          <label class ='forminput' htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
        </div>
        <div>
          <label class ='forminput' htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>
        <div>
          <label class ='forminput' htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            required
          />
        </div>
        <button  type="submit">Send</button>
        {formSubmitted && <p>Your message has been sent!</p>}
      </form>
      <div id='myinformation'>
        <p><FontAwesomeIcon icon={faPhone} /> <a href="tel:123-456-7890">(206)-484-0151</a></p>
        <p><FontAwesomeIcon icon={faEnvelope} /> <a href="mailto:kenghoufong1@gmail.com">kenghoufong1@gmail.com</a></p>
        <p><FontAwesomeIcon icon={faMapMarkerAlt} /> <a href="https://www.google.com/maps?q=Main+Seattle+Washington+USA"> Seattle, WA, USA</a></p>
      </div>
    </div>
  );
}

export default ContactForm;
