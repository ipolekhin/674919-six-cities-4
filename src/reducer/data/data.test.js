import {reducer, ActionType, Operation} from "./data.js";
import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../api.js";
import {adapterOffers} from "../../adapters/offers.js";

const api = createAPI(() => {});
const offersOfTown = [
  {
    adults: 3,
    townName: `Amsterdam`,
    bedrooms: 2,
    cardName: `Wood and stone place`,
    cardRating: 4.6,
    cardRatingStars: `92%`,
    cardType: `Room`,
    coordinatesItem: [52.3909553943508, 4.85309666406198],
    description: `Text text....`,
    id: 1,
    image: `img/apartment-01.jpg`,
    images: [`img/apartment-01.jpg`, `img/apartment-02.jpg`],
    insideItems: [`wi-fi`, `bathroom`],
    premiumPlace: true,
    price: 100,
    reviews: [
      {
        date: new Date(2020, 7, 17),
        id: 1,
        rating: 4,
        text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
        userAvatar: `img/avatar-max.jpg`,
        userName: `John`,
      }
    ],
    user: {
      name: `Angelina`,
      avatar: `img/avatar-angelina.jpg`,
      pro: true,
    },
  },
  {
    adults: 2,
    townName: `Dusseldorf`,
    bedrooms: 1,
    cardName: `Wood and stone place`,
    cardRating: 3.6,
    cardRatingStars: `92%`,
    cardType: `Room`,
    coordinatesItem: [52.369553943508, 4.85309666406198],
    description: `Text text....`,
    id: 2,
    image: `img/apartment-01.jpg`,
    images: [`img/apartment-01.jpg`, `img/apartment-02.jpg`],
    insideItems: [`bathroom`],
    premiumPlace: true,
    price: 120,
    reviews: [
      {
        date: new Date(2020, 7, 15),
        id: 1,
        rating: 4,
        text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
        userAvatar: `img/avatar-max.jpg`,
        userName: `John`,
      }
    ],
    user: {
      name: `Angelina`,
      avatar: `img/avatar-angelina.jpg`,
      pro: true,
    },
  },
];

const offerRaw = [
  {
    city: {},
    location: {},
    host: {},
  }
];

describe(`Reducer Data Test`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(void 0, {})).toEqual({
      city: ``,
      offers: [],
    });
  });

  it(`Reducer should load offers`, () => {
    expect(reducer({
      city: ``,
      offers: [],
    }, {
      type: ActionType.OFFERS_LIST,
      payload: offersOfTown,
    })).toEqual({
      city: ``,
      offers: offersOfTown,
    });
  });

  it(`Reducer should change city name by a given value`, () => {
    expect(reducer({
      city: ``,
      offersOfTown,
    }, {
      type: ActionType.CHANGE_CITY,
      payload: `Dusseldorf`,
    })).toEqual({
      city: `Dusseldorf`,
      offersOfTown,
    });
  });

  it(`Should make a correct API call to /hotels`, function () {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const offersList = Operation.getOffersList();
    apiMock
      .onGet(`/hotels`)
      .reply(200, offerRaw);

    return offersList(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.OFFERS_LIST,
          payload: adapterOffers(offerRaw),
        });
      });
  });
});
