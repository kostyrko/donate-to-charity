import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { NavLink } from "react-router-dom";

const NavMain = () => {
  return (
    <nav className="nav-main">
      <NavLink exact to='/'>
        <Link
          className="nav-link"
          activeClass="active"
          to="home-header"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          Start
        </Link>
      </NavLink>
      <NavLink exact to='/'>
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
      </NavLink>

      <NavLink exact to='/'>
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
      </NavLink>

      <NavLink exact to='/'>
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
      </NavLink>

      <NavLink exact to='/'>
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
      </NavLink>
    </nav>
  );
};

export default NavMain;
