import React from 'react';
import { NavLink } from "react-router-dom";

const HomeHeader = (props) => {
  return (
    <header className="home__header" id="home-header">
      <div className="header__photo"></div>
        <div className="header__main">
          {props.children}
          <div className="header__intro">
          <div className="header__tag-line">
            <p>Zacznij pomagać!</p>
            <p>Oddaj niechciane rzeczy w zaufane ręce</p>
          </div>
          <div className="intro__decoration"></div>
          <div className="header__links">
            <button className="header_btn">
              <NavLink exact to='/logowanie'>Oddaj rzeczy</NavLink>
            </button>
            <button className="header_btn">
              <NavLink exact to='/logowanie'>Zorganizuj zbiórkę</NavLink>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HomeHeader;
