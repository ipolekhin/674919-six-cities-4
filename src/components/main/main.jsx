import React from "react";
import CitiesList from "../cities-list/cities-list.jsx";
import Map from "../map/map.jsx";
import PlaceCards from "../place-cards/place-cards.jsx";
import PlacesSorting from "../places-sorting/places-sorting.jsx";
import withSort from "../../hocs/with-sort/with-sort";
import {activeOfferIdType, currentCityType, functionClickType, placeCardsType, sortNameType} from "../../types/types";
import {OfferCardsClassesType} from "../../const";

const PlacesSortingWrapped = withSort(PlacesSorting);

const Main = (props) => {
  const {activeOfferId, currentCity, onCityClick, onTitleClick, onSortClick, placeCards, sortByName} = props;
  const emptyCityClass = !placeCards.length ? `page__main--index-empty` : ``;


  return (
    <React.Fragment>
      <main className={`page__main page__main--index ${emptyCityClass}`}>
        <h1 className="visually-hidden">Cities</h1>

        <CitiesList
          currentCity = {currentCity}
          onCityClick = {onCityClick}
        />

        <div className="cities">
          {
            placeCards.length && (
              <div className="cities__places-container container">
                <section className="cities__places places">
                  <h2 className="visually-hidden">Places</h2>

                  <b className="places__found">{placeCards.length} places to stay in {currentCity}</b>

                  <PlacesSortingWrapped
                    onSortClick = {onSortClick}
                    sortByName = {sortByName}
                  />

                  <div className="cities__places-list places__list tabs__content">
                    { <PlaceCards
                      className = {OfferCardsClassesType.MAIN_CONTAINER}
                      placeCards = {placeCards}
                      onTitleClick = {onTitleClick} /> }
                  </div>
                </section>

                <Map
                  key={currentCity}
                  currentCity = {currentCity}
                  activeOfferId = {activeOfferId}
                  placeCards = {placeCards}
                  renderMap = {(mapRef) => (
                    <div className="cities__right-section">
                      <section className="cities__map map" ref={mapRef}></section>
                    </div>
                  )}
                />
              </div>
            ) || !placeCards.length && (
              <div className="cities__places-container cities__places-container--empty container">
                <section className="cities__no-places">
                  <div className="cities__status-wrapper tabs__content">
                    <b className="cities__status">No places to stay available</b>
                    <p className="cities__status-description">We could not find any property availbale at the moment in
                      Dusseldorf</p>
                  </div>
                </section>
                <div className="cities__right-section"></div>
              </div>
            )
          }
        </div>
      </main>
    </React.Fragment>
  );
};

Main.propTypes = {
  activeOfferId: activeOfferIdType,
  currentCity: currentCityType,
  onTitleClick: functionClickType,
  onCityClick: functionClickType,
  onSortClick: functionClickType,
  placeCards: placeCardsType,
  sortByName: sortNameType,
};

export default Main;
