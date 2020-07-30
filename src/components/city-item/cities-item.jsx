import React from "react";
import PropTypes from "prop-types";
import {currentCityType, functionClickType} from "../../types/types";

const CitiesItem = (props) => {
  const {city, currentCity, onActiveItemChange, onCityClick} = props;
  const activeCityClass = currentCity === city ? `tabs__item--active` : ``;

  return (
    <li className="locations__item">
      <a
        className={`locations__item-link tabs__item ${activeCityClass}`}
        href="#"
        onClick={(event) => {
          event.preventDefault();
          onCityClick(city);
          onActiveItemChange(city);
        }}
      >
        <span>{city}</span>
      </a>
    </li>
  );
};

CitiesItem.propTypes = {
  city: PropTypes.string,
  currentCity: currentCityType,
  onCityClick: functionClickType,
  onActiveItemChange: functionClickType,
};

export default CitiesItem;
