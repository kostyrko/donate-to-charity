import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import UserContext from "../context";
import FirebaseContext from "../Firebase/context";

const NavLogged = () => {
  const { email } = useContext(UserContext);
  const firebase = useContext(FirebaseContext);

  const handleClick = () => {
    firebase.doSignOut();
  };

  return (
    <nav className="nav__donate">
      <p className="welcome">Cześć {email}!</p>
      <NavLink exact to="/oddaj-rzeczy">
        Oddaj rzeczy
      </NavLink>
      <NavLink
        exact
        to="/wylogowano"
        onClick={handleClick}
      >
        Wyloguj
      </NavLink>
    </nav>
  );
};

export default NavLogged;
