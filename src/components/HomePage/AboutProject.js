import React from "react";
import { NavLink } from "react-router-dom";

const AboutProject = (props) => {
  return (
    <section id="about-project" className="about-project">
      <div className="container">
        {props.children}
        <div className="instructions">
          <div className="instructions__header">
            <h3>Wystarczą cztery 4 kroki</h3>
            <div className="decoration"></div>
          </div>
          <ul className="instruction__list">
            <li className="list__item">
              <div className="svg icon-1"></div>
              <h4 className="heading">Wybierz rzeczy</h4>
              <div className="decoration-2"></div>
              <p>ubrania, zabawki, sprzęt i inne</p>
            </li>

            <li className="list__item">
              <div className="svg icon-2"></div>
              <h4 className="heading">Spakuj je</h4>
              <div className="decoration-2"></div>
              <p>skorzystaj z worków na śmieci</p>
            </li>
            <li className="list__item">
              <div className="svg icon-3"></div>
              <h4 className="heading">Zdecyduj komu chcesz pomóc</h4>
              <div className="decoration-2"></div>
              <p>wybierz zaufane miejsce</p>
            </li>

            <li className="list__item">
              <div className="svg icon-4"></div>
              <h4 className="heading">Zamów kuriera</h4>
              <div className="decoration-2"></div>
              <p>kurier przyjedzie w dogodnym terminie</p>
            </li>
          </ul>
          <div className="instructions__link">
            <NavLink className="header__link" exact to={props.link}>
              Oddaj rzeczy
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutProject;
