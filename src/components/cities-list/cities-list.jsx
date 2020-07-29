import React from "react";
import CitiesItem from "../city-item/cities-item.jsx";
import {currentCityType, functionClickType} from "../../types/types";
import {TOWN_NAMES} from "../../const";

const CitiesList = (props) => {
  const {activeItem, onCityClick, onActiveItemChange} = props;

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {TOWN_NAMES.map((cityName) => (
            <CitiesItem
              key = {cityName}
              city = {cityName}
              currentCity = {activeItem || TOWN_NAMES[0]}
              onCityClick = {onCityClick}
              onActiveItemChange = {onActiveItemChange}
            />
          ))}
        </ul>
      </section>
    </div>
  );
};

CitiesList.propTypes = {
  activeItem: currentCityType,
  onActiveItemChange: functionClickType,
  onCityClick: functionClickType,
};

export default CitiesList;
