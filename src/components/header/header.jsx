import React from "react";
import {Link} from "react-router-dom";
import {isBoolType, userType} from "../../types/types.js";
import {AppRoute} from "../../const.js";

const Header = (props) => {
  const {authorizationStatus, isMain = false, user} = props;
  const getLogoElement = () => {
    return (
      isMain
        ? <a className="header__logo-link header__logo-link--active">
          <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
        </a>
        : <Link className="header__logo-link" to={AppRoute.ROOT}>
          <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
        </Link>
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
                  <Link className="header__nav-link header__nav-link--profile" to={!authorizationStatus ? AppRoute.SIGN_IN : AppRoute.FAVORITES}>
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    {
                      !authorizationStatus && (
                        <span className="header__login">Sign in</span>
                      ) || (
                        <span className="header__user-name user__name">{user}</span>
                      )
                    }
                  </Link>
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
  authorizationStatus: isBoolType,
  isMain: isBoolType,
  user: userType,
};

export default Header;
