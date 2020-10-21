import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { NavLink } from "react-router-dom";

const NavMain = () => {
  return (
    <nav className="nav-main">
      <NavLink className="nav-link" exact to="/">
        Start
      </NavLink>

      <Link
        className="nav-link"
        activeClass="active"
        to="about-project"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
      >
        O co chodzi?
      </Link>

      <Link
        className="nav-link"
        activeClass="active"
        to="about-us"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
      >
        O nas
      </Link>

      <Link
        className="nav-link"
        activeClass="active"
        to="organizations"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
      >
        Fundacje i organizacje
      </Link>

      <Link
        className="nav-link"
        activeClass="active"
        to="contact"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
      >
        Kontakt
      </Link>
    </nav>
  );
};

export default NavMain;
