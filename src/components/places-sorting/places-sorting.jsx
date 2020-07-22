import React from "react";
import {SORT_NAMES} from "../../const";
import {functionClickType, sortNameType} from "../../types/types";

class PlacesSorting extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {isOpen: false};
    this._handleClick = this._handleClick.bind(this);
  }

  render() {
    const {isOpen} = this.state;
    const {onSortClick, sortByName} = this.props;

    return (
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by</span>

        <span className="places__sorting-type" tabIndex="0" onClick={this._handleClick}>
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
                  this.setState(() => ({isOpen: !this.state.isOpen}));
                }}
              >
                {sortName}
              </li>
            ))}
        </ul>
      </form>
    );
  }

  _handleClick() {
    this.setState(() => ({isOpen: !this.state.isOpen}));
  }
}

PlacesSorting.propTypes = {
  sortByName: sortNameType,
  onSortClick: functionClickType,
};

export default PlacesSorting;
