import React from "react";
import {isBoolType} from "../../types/types";

const Header = (props) => {
  const {isMain = false} = props;
  const getLogoElement = () => {
    return (
      isMain
        ? <a className="header__logo-link header__logo-link--active">
          <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
        </a>
        : <a className="header__logo-link" href="main.html">
          <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
        </a>
    );
  };

  return (
    <React.Fragment>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              {getLogoElement()}
            </div>

            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};

Header.propTypes = {
  isMain: isBoolType,
};

export default Header;
