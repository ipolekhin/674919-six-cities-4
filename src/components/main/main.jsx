import React from "react";
import CitiesList from "../cities-list/cities-list.jsx";
import Map from "../map/map.jsx";
import PlaceCards from "../place-cards/place-cards.jsx";
import PlacesSorting from "../places-sorting/places-sorting.jsx";
import {currentCityType, functionClickType, placeCardsType} from "../../types/types";
import {OfferCardsClassesType} from "../../const";

const Main = (props) => {
  const {currentCity, onCityClick, onTitleClick, placeCards, onSortClick, sortByName} = props;
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

                  <PlacesSorting
                    onSortClick = {onSortClick}
                    sortByName = {sortByName}
                  />
                  {/*<form className="places__sorting" action="#" method="get">*/}
                  {/*  <span className="places__sorting-caption">Sort by</span>*/}

                  {/*  <span className="places__sorting-type" tabIndex="0">*/}
                  {/*    Popular*/}
                  {/*    <svg className="places__sorting-arrow" width="7" height="4">*/}
                  {/*      <use xlinkHref="#icon-arrow-select"></use>*/}
                  {/*    </svg>*/}
                  {/*  </span>*/}
                  {/*  */}
                  {/*  <ul className="places__options places__options--custom places__options--opened">*/}
                  {/*    <li className="places__option places__option--active" tabIndex="0">Popular</li>*/}

                  {/*    <li className="places__option" tabIndex="0">Price: low to high</li>*/}

                  {/*    <li className="places__option" tabIndex="0">Price: high to low</li>*/}

                  {/*    <li className="places__option" tabIndex="0">Top rated first</li>*/}
                  {/*  </ul>*/}
                  {/*</form>*/}

                  <div className="cities__places-list places__list tabs__content">
                    { <PlaceCards
                      className = {OfferCardsClassesType.MAIN_CONTAINER}
                      placeCards = {placeCards}
                      onTitleClick = {onTitleClick} /> }
                  </div>
                </section>

                <Map
                  currentCity = {currentCity}
                  key={currentCity}
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
  currentCity: currentCityType,
  placeCards: placeCardsType,
  onTitleClick: functionClickType,
  onCityClick: functionClickType,
};

export default Main;
