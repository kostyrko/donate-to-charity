import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
// import UserContext from "../context";

const NavLogin = () => {
  return (
    <nav className="nav-login">
      <NavLink exact to="/logowanie">
        Zaloguj
      </NavLink>
      <NavLink className="nav-register" exact to="/rejestracja">
        Załóż konto
      </NavLink>
    </nav>
  );
};

export default NavLogin;
