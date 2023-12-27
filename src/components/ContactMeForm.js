// import React from 'react';
// import { MDBInput, MDBCheckbox, MDBBtn, MDBTextArea } from 'mdb-react-ui-kit';
// import Header3 from "../pages/Header3"

// const ContactMeForm = () => {
//   return (
//     <body id="home">
      // <Header3 />
      // <form id='form' className='text-center' style={{ width: '100%', maxWidth: '300px' }}>
      //   <h2>Contact Me</h2>

      //   <MDBInput label='Name' v-model='name' wrapperClass='mb-4' />

      //   <MDBInput type='email' label='Email address' v-model='email' wrapperClass='mb-4' />

      //   <MDBInput label='Subject' v-model='subject' wrapperClass='mb-4' />

      //   <MDBTextArea wrapperClass='mb-4' label='Message' />

      //   <MDBCheckbox wrapperClass='d-flex justify-content-center' label='Send me copy' />

      //   <MDBBtn color='primary' block className='my-4'>
      //     Send
      //   </MDBBtn>
      // </form>
//     </body>
//   );
// }
// export default ContactMeForm

import React from 'react';
import emailjs from 'emailjs-com';
import Header3 from "../pages/Header3"

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
    <body id="home">
      <Header3 />
      <h1>Contact Me</h1>
      <form id='form' onSubmit={sendEmail}>
        <input type="text" name="name" placeholder="Name" />
        <input type="email" name="email" placeholder="Email Address" />
        <textarea name="message" placeholder="Message" />
        <button type="submit">Send</button>
      </form>
    </body>
    );
};

export default ContactForm;
