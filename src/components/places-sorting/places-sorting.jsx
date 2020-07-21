import React from "react";
import {PLACES_SORTING_NAMES} from "../../const";

const PlacesSorting = (props) => {
  const {sortByName, onSortClick} = props;

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>

      <span className="places__sorting-type" tabIndex="0">
        {sortByName}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>

      <ul className="places__options places__options--custom places__options--opened">
        {
          PLACES_SORTING_NAMES.map((sortName) => (
            <li
              className={`places__option ${sortByName === sortName ? `places__option--active` : ``}`}
              key={sortName}
              tabIndex="0"
              onClick={(event) => {
                event.preventDefault();
                onSortClick(sortName);
              }}
            >
              {sortName}
            </li>
          ))}
        {/*<li className="places__option places__option--active" tabIndex="0">Popular</li>*/}

        {/*<li className="places__option" tabIndex="0">Price: low to high</li>*/}

        {/*<li className="places__option" tabIndex="0">Price: high to low</li>*/}

        {/*<li className="places__option" tabIndex="0">Top rated first</li>*/}
      </ul>
    </form>
  );
};

export default PlacesSorting;
