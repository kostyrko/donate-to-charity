import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routers";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";
import { withFirebase } from "../Firebase";
import emailValidation from "../../constants/emailValidation";
import NavLogin from '../layout/navs/NavLogin'
import NavMain from '../layout/navs/NavMain'

const INITIAL_STATE = {
  email: "",
  password: "",
  error: null,
};

const LogInFormBase = (props) => {
  const [content, setContent] = useState({ ...INITIAL_STATE });

  const onSubmit = (event) => {
    const { email, password } = content;
    props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        setContent({ ...INITIAL_STATE });
        props.history.push(ROUTES.LANDING);
      })
      .catch((error) => {
        setContent({ error });
      });

    event.preventDefault();
  };

  const onChange = (event) => {
    setContent({ ...content, [event.target.name]: event.target.value });
  };

  const { email, password, error } = content;

  const isInvalid = password.length < 6 || !emailValidation.test(email);

  return (
    <form onSubmit={onSubmit}>
      <div className="form-container">
        <label htmlFor="email">Email</label>
        <input
          name="email"
          value={email}
          onChange={onChange}
          type="text"
          
        />
        <label htmlFor="password">Hasło</label>
        <input
          name="password"
          value={password}
          onChange={onChange}
          type="password"
          
        />
      </div>
      <div className="buttons">
        <Link to={ROUTES.SIGN_UP}>Załóż Konto</Link>
        <button disabled={isInvalid} type="submit">
          Zaloguj się
        </button>
      </div>

      {error && <p>{error.message}</p>}
    </form>
  );
};

const LogInForm = compose(withRouter, withFirebase)(LogInFormBase);

const LogInPage = () => (
  <>
    <nav className="nav--centered">
      <div className="container">
        <NavLogin />
        <NavMain />
      </div>
    </nav>
    <main className="logIn">
      <div className="container">
        <div className="logIn__form form">
          <h2>Zaloguj się</h2>
          <div className="decoration"></div>
          <LogInForm />
        </div>
      </div>
    </main>
  </>
);

export default LogInPage;
