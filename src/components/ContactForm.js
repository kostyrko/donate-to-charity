import React from 'react';

const ContactForm = () => {
  return (
    <form className="contact-form" action="">
      <h4>Skontaktuj się z nami</h4>
      <div className="decoration"></div>
      <div className="basic-info">
        <div className="name">
          <label htmlFor="name">Wpisz swoje imię</label>
          <input type="text" name="" id="" placeholder="Mikolaj"/>
        </div>
        <div className="email">
          <label htmlFor="email">Wpisz swój email</label>
          <input type="email" name="email" id="" placeholder="mk@mk.pl"/>
        </div>
      </div>
      <label className="message-label "htmlFor="message">Wpisz swoją wiadomość</label>
      <textarea className="message" type="text" name="message" id="" placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ullam tempore molestias aspernatur quos blanditiis eos eveniet exercitationem repellendus voluptates."/>
      <button className="submit-btn">Wyślij</button>
    </form>
  );
}

export default ContactForm;
