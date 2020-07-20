import React from "react";
import PropTypes from "prop-types";

const CitiesItem = (props) => {
  const {currentCity, city, onCityClick} = props;
  const activeCityClass = currentCity === city ? `tabs__item--active` : ``;

  return (
    <li className="locations__item">
      <a
        className={`locations__item-link tabs__item ${activeCityClass}`}
        href="#"
        onClick={(event) => {
          event.preventDefault();
          onCityClick(city);
        }}
      >
        <span>{city}</span>
      </a>
    </li>
  );
};

CitiesItem.propTypes = {
  city: PropTypes.string,
  currentCity: PropTypes.string,
  onCityClick: PropTypes.func
};

export default CitiesItem;
