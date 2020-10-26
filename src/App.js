import React, {useState} from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import Donate from './components/Donate'
import LogIn from './components/LogIn'
import SignUp from './components/SignUp'
import LogOut from './components/LogOut'
import NotFound from './components/NotFound'
import UserContext from "./components/context";

import * as ROUTES from './constants/routers'

const INITIAL_STATE = {
  email: "",
  password: "",
  error: null,
};

function App() {

  const [content, setContent] = useState({ email: '' });
  const set = (value) => {
    setContent({...value})
  }
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <UserContext.Provider value={{email:content.email, set}}>
      <Switch>
        <Route exact path={ROUTES.LANDING} component={Home}/>
        <Route exact path={ROUTES.DONATE} component={Donate}/>
        <Route exact path={ROUTES.LOG_IN} component={LogIn}/>
        <Route exact path={ROUTES.SIGN_UP} component={SignUp}/>
        <Route exact path={ROUTES.LOG_OUT} component={LogOut}/>
        <Route exact path='' component={NotFound}/>
      </Switch>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
