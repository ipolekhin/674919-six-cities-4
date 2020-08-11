import React from "react";
import CityItem from "../city-item/city-item.jsx";
import {connect} from "react-redux";
import {citiesType, currentCityType, functionClickType} from "../../types/types";
import {ActionCreator} from "../../reducer/data/data.js";
import {getCities} from "../../reducer/data/selectors.js";

const CitiesList = (props) => {
  const {
    activeItem,
    cities,
    onActiveItemChange,
    onCityClick,
  } = props;

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((cityName) => (
            <CityItem
              key = {cityName}
              city = {cityName}
              currentCity = {activeItem || cities[0]}
              onCityClick = {onCityClick}
              onActiveItemChange = {onActiveItemChange}
            />
          ))}
        </ul>
      </section>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cities: getCities(state),
});

const mapDispatchToProps = (dispatch) => ({
  onCityClick(city) {
    dispatch(ActionCreator.changeCity(city));
    // dispatch(ActionCreator.getOffersList(city));
  },
});

CitiesList.propTypes = {
  activeItem: currentCityType,
  cities: citiesType,
  onActiveItemChange: functionClickType,
  onCityClick: functionClickType,
};

export {CitiesList};
export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);
