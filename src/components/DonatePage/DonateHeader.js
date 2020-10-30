import React from "react";
import { NavLink } from "react-router-dom";

const DonateHeader = (props) => {

  return (
    <header className="donate__header" id="donate-header">
      <div className="container">
        <div className="header__photo"></div>
        <div className="header__main">
          {props.children}
          <div className="header__intro">
            <div className="header__tag-line">
              <p>Oddaj rzeczy, których już nie chcesz</p>
              <p>Potrzebującym</p>
            </div>
            <div className="intro__decoration decoration"></div>
            <div className="header__steps">
              <p>Wystarczą 4 proste kroki:</p>
              <ol>
                <li><span>1</span>Wybierz rzeczy</li>
                <li><span>2</span>Spakuj je w worki</li>
                <li><span>3</span>Wybierz fundację</li>
                <li><span>4</span>Zamów kuriera</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DonateHeader;