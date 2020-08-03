import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {PlaceCards} from "./place-cards";

const placeCards = [
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
        userName: `Max`,
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
    townName: `Amsterdam`,
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
    insideItems: [`wi-fi`, `bathroom`],
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

const className = `page`;
const onOptionHover = () => {};

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`PlaceCards e2e test`, () => {
  it(`Should title click handler be pressed`, () => {
    const onActiveItemChange = jest.fn();
    const placeCardsComponent = shallow(
        <PlaceCards
          className = {className}
          onOptionHover = {onOptionHover}
          onActiveItemChange = {onActiveItemChange}
          placeCards = {placeCards}
        />
    );

    const titleLinkBefore = placeCardsComponent.find(`.place-card__name a`);

    titleLinkBefore.forEach((link) => {
      link.props().onClick();
    });

    expect(onActiveItemChange.mock.calls.length).toBe(titleLinkBefore.length);
  });
});
