import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {getFavoriteOffers, getSortedFavoriteOffers} from "../../reducer/data/selectors.js";
import {Operation as DataOperation} from "../../reducer/data/data.js";
import {functionType, isBoolType, isStringType, placeCardsType, sortedFavoritesOffersType} from "../../types/types.js";
import Header from "../header/header.jsx";
import PlaceCards from "../place-cards/place-cards.jsx";
import {OfferCardsClassesType} from "../../const.js";
import {AppRoute} from "../../const.js";

class Favorites extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {loadFavoriteOffers} = this.props;
    loadFavoriteOffers();
  }

  render() {
    const {authorizationStatus, favoritesOffers, sortedFavoritesOffers, user} = this.props;
    console.log(sortedFavoritesOffers);

    return (
      <React.Fragment>
        <div className="page">
          <Header
            authorizationStatus={authorizationStatus}
            user={user}
          />
          {favoritesOffers.length
            ? (<main className="page__main page__main--favorites">
              <div className="page__favorites-container container">
                <section className="favorites">
                  <h1 className="favorites__title">Saved listing</h1>
                  <ul className="favorites__list">
                    {sortedFavoritesOffers.map((it) =>
                      it.offers.length ? (
                        <li className="favorites__locations-items" key={it.town}>
                          <div className="favorites__locations locations locations--current">
                            <div className="locations__item">
                              <a className="locations__item-link" href="#">
                                <span>{it.town}</span>
                              </a>
                            </div>
                          </div>
                          <div className="favorites__places">
                            <PlaceCards
                              className={OfferCardsClassesType.FAVORITES_CONTAINER}
                              placeCards={it.offers}
                            />
                          </div>
                        </li>
                      ) : ``
                    )}
                  </ul>
                </section>
              </div>
            </main>)
            : (<main className="page__main page__main--favorites page__main--favorites-empty">
              <div className="page__favorites-container container">
                <section className="favorites favorites--empty">
                  <h1 className="visually-hidden">Favorites (empty)</h1>
                  <div className="favorites__status-wrapper">
                    <b className="favorites__status">Nothing yet saved.</b>
                    <p className="favorites__status-description">Save properties to narrow down search or plan yor
                      future trips.</p>
                  </div>
                </section>
              </div>
            </main>)
          }
          <footer className="footer container">
            <Link className="footer__logo-link" to={AppRoute.ROOT}>
              <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
            </Link>
          </footer>
        </div>
      </React.Fragment>
    );
  }
}

Favorites.propTypes = {
  authorizationStatus: isBoolType,
  favoritesOffers: placeCardsType,
  sortedFavoritesOffers: sortedFavoritesOffersType,
  loadFavoriteOffers: functionType,
  user: isStringType,
};

const mapStateToProps = (state) => {
  return ({
    favoritesOffers: getFavoriteOffers(state),
    sortedFavoritesOffers: getSortedFavoriteOffers(state),
  });
};

const mapDispatchToProps = (dispatch) => ({
  loadFavoriteOffers() {
    dispatch(DataOperation.loadFavoritesOffers());
  },
});

export {Favorites};
export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
