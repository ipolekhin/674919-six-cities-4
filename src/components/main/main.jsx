import React from "react";
import CitiesList from "../cities-list/cities-list.jsx";
import Map from "../map/map.jsx";
import MainEmpty from "../main-empty/main-empty.jsx";
import PlaceCards from "../place-cards/place-cards.jsx";
import PlacesSorting from "../places-sorting/places-sorting.jsx";
import withActiveItem from "../../hocs/with-active-item/with-active-item.js";
import withSort from "../../hocs/with-sort/with-sort.js";
import {
  activeOfferIdType,
  currentCityType,
  functionClickType,
  placeCardsType,
  sortNameType,
} from "../../types/types";
import {OfferCardsClassesType} from "../../const";

const PlacesSortingWrapped = withSort(PlacesSorting);
const CitiesListWrapped = withActiveItem(CitiesList);

const Main = (props) => {
  const {
    activeOfferId,
    currentCity,
    onActiveItemChange,
    onSortClick,
    placeCards,
    sortByName
  } = props;
  const emptyCityClass = !placeCards.length ? `page__main--index-empty` : ``;
  console.log(`Main`);
  // console.log(sortByName);

  return (
    <React.Fragment>
      <main className={`page__main page__main--index ${emptyCityClass}`}>
        <h1 className="visually-hidden">Cities</h1>

        <CitiesListWrapped/>

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
                      onActiveItemChange = {onActiveItemChange}
                    /> }
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
              <MainEmpty/>
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
  onActiveItemChange: functionClickType,
  onSortClick: functionClickType,
  placeCards: placeCardsType,
  sortByName: sortNameType,
};

export default Main;
