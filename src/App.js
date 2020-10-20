import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import CharityForm from './components/CharityForm'
import Login from './components/Login'
import Registration from './components/Registration'
import Logout from './components/Logout'
import NotFound from './components/NotFound'

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/oddaj-rzeczy' component={CharityForm}/>
        <Route exact path='/logowanie' component={Login}/>
        <Route exact path='/rejestracja' component={Registration}/>
        <Route exact path='/logowanie' component={Logout}/>
        <Route exact path='' component={NotFound}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
