import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
// import UserContext from "../context";

const NavLogged = ({user}) => {
  //const loggedUser = useContext(UserContext);

  console.log("NavLogin-> user", user.email);
  // console.log("NavLogin-> loggedUser", loggedUser);

  return (
    <nav className="nav__donate">
      <p className="welcome">Cześć {user.email}!</p>
      <NavLink exact to="/oddaj-rzeczy">
        Oddaj rzeczy
      </NavLink>
      <NavLink className="nav__log-out" exact to="/wylogowano">
        Wyloguj
      </NavLink>
    </nav>
  );
};

export default NavLogged;