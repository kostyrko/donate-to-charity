import React from 'react';

const HomeContact = (props) => {
  let {footer, contactForm} = props;
  return (
    <section id="contact" className="home-contact">
      <div className="container">
        <div className="image"></div>
        <div className="form-container">
          {contactForm}
        </div>
      </div>
      {footer}
    </section>
  );
}

export default HomeContact;
