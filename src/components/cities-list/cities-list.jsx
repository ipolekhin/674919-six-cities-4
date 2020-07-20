import React from "react";
import CitiesItem from "../city-item/cities-item.jsx";
import {currentCityType, functionClickType} from "../../types/types";
import {TOWN_NAMES} from "../../const";

const CitiesList = (props) => {
  const {currentCity, onCityClick} = props;

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {TOWN_NAMES.map((cityName) => (
            <CitiesItem
              key = {cityName}
              city = {cityName}
              currentCity={currentCity}
              onCityClick = {onCityClick}
            />
          ))}
        </ul>
      </section>
    </div>
  );
};

CitiesList.propTypes = {
  currentCity: currentCityType,
  onCityClick: functionClickType,
};

export default CitiesList;
