import React, { useState } from "react";

const API = "https://fer-api.coderslab.pl/v1/portfolio/contact";

const ContactForm = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const [errorsArr, setErrorsArr] = useState(null);

  const { name, email, message } = data;

  const handleChange = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    console.log('clicked - 1');
    event.preventDefault();
    if (validate()) {
      // setIsSubmitted(true);
      fetch(API, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (response.ok) {
            console.log('response', response);
            return response.json();
          } else {
            throw new Error("Something went wrong");
          }
        })
        .then((data) => {
          console.log("data", data);
          setIsSubmitted(true);
          setError(null);
        })
        .catch((error) => {
          setError(error.message);
        });
        
      setTimeout(function () {
        setIsSubmitted(false);
      }, 2000);
    } else {
      console.log('not valid');
      setIsSubmitted(false);
    }
  };
  
  const validate = () => {
    const errorsArr = [];
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!name || name.length < 2 || name.indexOf(" ") >= 0) {
      errorsArr.push("Imię powinno posiadać przynajmniej 2 znaki");
    }
    if (
      !email ||
      !re.test(email)
    ) {
      errorsArr.push("Email powinien być poprawny");
    }
    if (message.length < 50) {
      errorsArr.push("Wiadomość powinna mieć przynajmniej 120 znaków");
    }
    if (errorsArr.length !== 0) {
      setErrorsArr(() => errorsArr);
      return false;
    } 
    else {
      setErrorsArr(null);
      return true;
    }
  };

  return (
    <form className="contact-form" action="">
      <h4>Skontaktuj się z nami</h4>
      <div className="decoration"></div>
      <div className="basic-info">
        <div className="name">
          <label htmlFor="name">Wpisz swoje imię</label>
          <input
            type="text"
            name="name"
            value={name}
            id=""
            placeholder="Mikolaj"
            onChange={handleChange}
          />
        </div>
        <div className="email">
          <label htmlFor="email">Wpisz swój email</label>
          <input
            type="email"
            name="email"
            id=""
            value={email}
            placeholder="mk@mk.pl"
            onChange={handleChange}
          />
        </div>
      </div>
      <label className="message-label " htmlFor="message">
        Wpisz swoją wiadomość
      </label>
      <textarea
        className="message"
        type="text"
        name="message"
        id=""
        value={message}
        placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ullam tempore molestias aspernatur quos blanditiis eos eveniet exercitationem repellendus voluptates."
        onChange={handleChange}
      />
      <button className="submit-btn" onClick={(e) => handleSubmit(e)}>
        Wyślij
      </button>
      {isSubmitted && (
        <h3 style={{ color: "white", backgroundColor: "green", padding: 10 }}>
          Wiadomość została wysłana!
        </h3>
      )}
      {error && <h3>Error: {error}</h3>}
      {errorsArr && (
        <ul>
          {errorsArr.map((error, i) => (
            <li key={i}>{error}</li>
          ))}
        </ul>
      )}
    </form>
  );
};

export default ContactForm;

