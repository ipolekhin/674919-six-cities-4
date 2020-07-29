import React from "react";
import {SORT_NAMES} from "../../const";
import {functionClickType, isBoolType, sortNameType} from "../../types/types";
// import withSort from "../../hocs/with-sort/with-sort";

class PlacesSorting extends React.PureComponent {
  render() {
    const {isOpen, handleClick, onSortClick, sortByName} = this.props;

    return (
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by</span>

        <span className="places__sorting-type" tabIndex="0" onClick={handleClick}>
          {sortByName}
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select"></use>
          </svg>
        </span>

        <ul className={`places__options places__options--custom ${isOpen ? `places__options--opened` : ``}`}>
          {
            SORT_NAMES.map((sortName) => (
              <li
                className={`places__option ${sortByName === sortName ? `places__option--active` : ``}`}
                key={sortName}
                tabIndex="0"
                onClick={(event) => {
                  event.preventDefault();
                  onSortClick(sortName);
                  handleClick();
                }}
              >
                {sortName}
              </li>
            ))}
        </ul>
      </form>
    );
  }
}

PlacesSorting.propTypes = {
  handleClick: functionClickType,
  isOpen: isBoolType,
  onSortClick: functionClickType,
  sortByName: sortNameType,
};

export default PlacesSorting;
