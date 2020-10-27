import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import UserContext from "../context";


const NavLogged = () => {
  const { email,set } = useContext(UserContext);
  console.log(useContext(UserContext));
  const handleClick = () => {
    console.log("NavLogin-> email",email)
    set({ email: "" });
  };
  console.log("NavLogin-> user", email);
  // console.log("NavLogin-> loggedUser", loggedUser);

  return (
    <nav className="nav__donate">
      <p className="welcome">Cześć {email}!</p>
      <NavLink exact to="/oddaj-rzeczy">
        Oddaj rzeczy
      </NavLink>
      <NavLink
        className="nav__log-out"
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
