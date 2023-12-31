import React from 'react';
import emailjs from 'emailjs-com';
import Header3 from "../components/Header3"
import Footer1 from "../components/Footer1"

const ContactForm = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_oszipqt', 'template_ld6a9x9', e.target, 'WPx-d-ZIqdhlKip7O')
      .then((result) => {
        console.log(result.text);
        // Handle success or show a success message
      }, (error) => {
        console.log(error.text);
        // Handle error or show an error message
      });
  };

  return (
    <body id="home" className="contactformContainer">
      <Header3 />
      <h1 id="title" >Contact Me</h1>
      <form id='form' onSubmit={sendEmail}>
        <input className="inputField" type="text" name="name" placeholder="Name" />
        <input className="inputField" type="email" name="email" placeholder="Email Address" />
        <input className="inputField" type="text" name="subject" placeholder="Subject" />
        <textarea className="inputField" name="message" placeholder="Message" />
        <br></br>
        <button className="submitButton" type="submit">Send</button>
      </form>
      <Footer1 />
    </body>
    );
};

export default ContactForm;
