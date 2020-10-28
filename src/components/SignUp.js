import React, { useState, useContext } from "react";
import { Link, withRouter } from "react-router-dom";
import { compose } from "recompose";
// import { FirebaseContext } from './Firebase';
import { withFirebase } from "../components/Firebase";
import UserContext from "./context";
import * as ROUTES from "../constants/routers";
import emailValidation from '../constants/emailValidation'
import NavLogin from './Nav/NavLogin'
import NavMain from './Nav/NavMain'

const INITIAL_STATE = {
  username: "",
  email: "",
  passwordOne: "",
  passwordTwo: "",
  error: null,
};

const SignUpFormBase = ({ firebase, history }) => {
  const [content, setContent] = useState({ ...INITIAL_STATE });
  const { set } = useContext(UserContext);



  const onSubmit = (e) => {
    const { email, passwordOne } = content;
    set({ email: email });
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
    !emailValidation.test(email) ||
    username === "";

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-container">
        <input
          name="username"
          value={username}
          onChange={onChange}
          type="text"
          placeholder="Full Name"
        />
        <input
          name="email"
          value={email}
          onChange={onChange}
          type="text"
          placeholder="Email Address"
        />
        <input
          name="passwordOne"
          value={passwordOne}
          onChange={onChange}
          type="password"
          placeholder="Password"
        />
        <input
          name="passwordTwo"
          value={passwordTwo}
          onChange={onChange}
          type="password"
          placeholder="Confirm Password"
        />
        </div>
        <button disabled={isInvalid} type="submit">
          Sign Up
        </button>
        {error && <p>{error.message}</p>}
      </form>

    </div>
  );
};

const SignUpForm = compose(withRouter, withFirebase)(SignUpFormBase);

const SignUp = () => (
  <>
    <nav className="nav--centered">
      <div className="container">
        <NavLogin/>
        <NavMain/>
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

export default SignUp;

export { SignUpForm };
