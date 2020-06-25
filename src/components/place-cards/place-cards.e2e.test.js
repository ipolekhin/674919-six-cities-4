import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import PlaceCards from "./place-cards";

const placeCards = [
  {
    adults: 3,
    bedrooms: 2,
    cardName: `Wood and stone place`,
    cardRating: 4.6,
    cardRatingStars: `92%`,
    cardType: `Room`,
    description: `Text text....`,
    id: `1`,
    image: `img/apartment-01.jpg`,
    images: [`img/apartment-01.jpg`, `img/apartment-02.jpg`],
    insideItems: [`wi-fi`, `bathroom`],
    premiumPlace: true,
    price: 100,
    user: {
      name: `Angelina`,
      avatar: `img/avatar-angelina.jpg`,
      pro: true,
    },
  },
  {
    adults: 2,
    bedrooms: 1,
    cardName: `Wood and stone place`,
    cardRating: 3.6,
    cardRatingStars: `92%`,
    cardType: `Room`,
    description: `Text text....`,
    id: `2`,
    image: `img/apartment-01.jpg`,
    images: [`img/apartment-01.jpg`, `img/apartment-02.jpg`],
    insideItems: [`wi-fi`, `bathroom`],
    premiumPlace: true,
    price: 120,
    user: {
      name: `Angelina`,
      avatar: `img/avatar-angelina.jpg`,
      pro: true,
    },
  },
];

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`TitleLink`, () => {
  it(`Should title click handler be pressed`, () => {
    const titleClickHandler = jest.fn();
    const placeCardsComponent = shallow(
        <PlaceCards
          placeCards = {placeCards}
          titleClickHandler = {titleClickHandler}
        />
    );

    const titleLinkBefore = placeCardsComponent.find(`.place-card__name a`);

    titleLinkBefore.forEach((link) => {
      link.props().onClick();
    });

    expect(titleClickHandler.mock.calls.length).toBe(titleLinkBefore.length);
  });
});
