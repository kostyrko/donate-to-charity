import React from 'react';

const ContactSection = (props) => {
  const {footer, contactForm} = props;
  return (
    <section id="contact" className="contact-section">
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

export default ContactSection;
