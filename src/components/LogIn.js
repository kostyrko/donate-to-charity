import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../constants/routers";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";
import { withFirebase } from "../components/Firebase";
import UserContext from "./context";

const INITIAL_STATE = {
  email: "",
  password: "",
  error: null,
};

const LogInFormBase = (props) => {
  const { set } = useContext(UserContext);
  const [content, setContent] = useState({ ...INITIAL_STATE });

  const onSubmit = (event) => {
    const { email, password } = content;
    set({ email: email })
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

  // console.log('lognIn-> content',content);

  const onChange = (event) => {
    setContent({ ...content, [event.target.name]: event.target.value });
  };

  const { email, password, error } = content;

  const isInvalid = password === "" || email === "";

  return (
    <form onSubmit={onSubmit}>
      <input
        name="email"
        value={email}
        onChange={onChange}
        type="text"
        placeholder="Email Address"
      />
      <input
        name="password"
        value={password}
        onChange={onChange}
        type="password"
        placeholder="Password"
      />
      <button disabled={isInvalid} type="submit">
        Sign In
      </button>

      {error && <p>{error.message}</p>}
    </form>
  );
};

const LogInForm = compose(withRouter, withFirebase)(LogInFormBase);

const LogIn = () => (
  <div>
    <h1>SignIn</h1>
    <LogInForm />
    <div>
      Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
    </div>
  </div>
);

export default LogIn;

// export { SignInForm };
