import React, { useState, useContext } from "react";
import { Link, withRouter } from "react-router-dom";
import { compose } from "recompose";
import { withFirebase } from "../../components/Firebase";
import * as ROUTES from "../../constants/routers";
import emailValidation from "../../constants/emailValidation";
import NavLogin from "../layout/navs/NavLogin";
import NavMain from "../layout/navs/NavMain";

const INITIAL_STATE = {
  email: "",
  passwordOne: "",
  passwordTwo: "",
  error: null,
};

const SignUpFormBase = ({ firebase, history }) => {
  const [content, setContent] = useState({ ...INITIAL_STATE });

  const onSubmit = (e) => {
    const { email, passwordOne } = content;
    firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then((authUser) => {
        setContent({ ...INITIAL_STATE });
        history.push(ROUTES.LANDING);
      })
      .catch((error) => {
        setContent({ error });
      });

    e.preventDefault();
  };

  console.log("signUp-> content", content);

  const onChange = (e) => {
    setContent({ ...content, [e.target.name]: e.target.value });
  };

  const { username, email, passwordOne, passwordTwo, error } = content;

  const isInvalid =
    passwordOne.length < 6 ||
    passwordOne !== passwordTwo ||
    passwordOne === "" ||
    !emailValidation.test(email);

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-container">
          <label htmlFor="email">Email</label>
          <input name="email" value={email} onChange={onChange} type="text" />
          <label htmlFor="passwordOne">Hasło</label>
          <input
            name="passwordOne"
            value={passwordOne}
            onChange={onChange}
            type="password"
            placeholder="min. 6 znaków"
          />
          <label htmlFor="passwordTwo">Powtórz hasło</label>
          <input
            name="passwordTwo"
            value={passwordTwo}
            onChange={onChange}
            type="password"
          />
        </div>

        <div className="buttons">
          <Link to={ROUTES.LOG_IN}>Zaloguj się</Link>

          <button disabled={isInvalid} type="submit">
            Załóż konto
          </button>
        </div>
        {error && <p>{error.message}</p>}
      </form>
    </div>
  );
};

const SignUpForm = compose(withRouter, withFirebase)(SignUpFormBase);

const SignUpPage = () => (
  <>
    <nav className="nav--centered">
      <div className="container">
        <NavLogin />
        <NavMain />
      </div>
    </nav>
    <main className="signUp">
      <div className="container">
        <div className="signUp__form form">
          <h2>Załóż konto</h2>
          <div className="decoration"></div>
          <SignUpForm />
        </div>
      </div>
    </main>
  </>
);

export default SignUpPage;

export { SignUpForm };
