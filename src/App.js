import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import logo from './logo.svg';
import "./App.css";
import HomePage from "./components/HomePage";
import DonatePage from "./components/DonatePage";
import LogInPage from "./components/userPages/LogInPage";
import SignUpPage from "./components/userPages/SignUpPage";
import LogOutPage from "./components/userPages/LogOutPage";
import NotFoundPage from "./components/NotFoundPage";
import UserContext from "./components/context";
import FirebaseContext from "./components/Firebase/context";

import * as ROUTES from "./constants/routers";


function App() {
  const [content, setContent] = useState({ email: "" });
  const firebase = useContext(FirebaseContext);

  useEffect(() => {
    // console.log('firebase',firebase);
    const unsubscribe = firebase.auth.onAuthStateChanged(function (user) {
      if (user) {
        setContent((prev) => ({
          ...prev,
          email: user.email,
        }));
      } else {
        setContent((prev) => ({
          ...prev,
          email: "",
        }));
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);



  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <UserContext.Provider value={{ email: content.email }}>
        <Switch>
          <Route exact path={ROUTES.LANDING} component={HomePage} />
          <Route exact path={ROUTES.DONATE} component={DonatePage} />
          <Route exact path={ROUTES.LOG_IN} component={LogInPage} />
          <Route exact path={ROUTES.SIGN_UP} component={SignUpPage} />
          <Route exact path={ROUTES.LOG_OUT} component={LogOutPage} />
          <Route exact path="" component={NotFoundPage} />
        </Switch>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
