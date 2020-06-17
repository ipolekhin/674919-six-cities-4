import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import PlaceCards from "./place-cards";

const placeCards = [
  {
    id: `1`,
    image: `img/apartment-01.jpg`,
    premiumPlace: true,
    price: 100,
    cardName: `Wood and stone place`,
    cardType: `Room`,
    cardRating: `80%`,
  },
  {
    id: `2`,
    image: `img/apartment-01.jpg`,
    premiumPlace: true,
    price: 120,
    cardName: `Wood and stone place`,
    cardType: `Room`,
    cardRating: `60%`,
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
