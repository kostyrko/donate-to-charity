import React from "react";
import NavLogin from "./Nav/NavLogin";
import NavMain from "./Nav/NavMain";
import { NavLink } from "react-router-dom";

const Logout = () => {
  return (
    <>
      <nav className="nav--centered">
        <div className="container">
          <NavLogin />
          <NavMain />
        </div>
      </nav>

      <main className="logOut">
        <div className="container">
          <div className="logout-message">
            <h2>Wylogowanie nastąpiło pomyślnie</h2>
            <div className="decoration"></div>
            <NavLink className="header__link" exact to="/">
              Strona główna
            </NavLink>
          </div>
        </div>
      </main>
    </>
  );
};

export default Logout;
