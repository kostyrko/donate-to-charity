import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import Donate from './components/Donate'
import LogIn from './components/LogIn'
import Registration from './components/Registration'
import LogOut from './components/LogOut'
import NotFound from './components/NotFound'

import * as ROUTES from './constants/routers'

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path={ROUTES.LANDING} component={Home}/>
        <Route exact path={ROUTES.DONATE} component={Donate}/>
        <Route exact path={ROUTES.LOG_IN} component={LogIn}/>
        <Route exact path={ROUTES.REGISTER} component={Registration}/>
        <Route exact path={ROUTES.LOG_OUT} component={LogOut}/>
        <Route exact path='' component={NotFound}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
