import React from 'react';
import { NavLink } from "react-router-dom";

const NavLogin = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink exact to='/logowanie'>Zaloguj</NavLink>
        </li>
        <li>
          <NavLink exact to='/rejestracja'>Załóż konto</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavLogin;
