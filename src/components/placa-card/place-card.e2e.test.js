import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import PlaceCard from "./place-card";

const placeCard = {
  id: `1`,
  image: `img/apartment-01.jpg`,
  premiumPlace: true,
  price: 100,
  cardName: `Wood and stone place`,
  cardType: `Room`,
  cardRating: `80%`,
};

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`TitleLink`, () => {
  it(`Should mouse on card and get cardID`, () => {
    const handleHover = jest.fn((placeCardId) => placeCardId);
    const titleClickHandler = jest.fn();
    const placeCardComponent = shallow(
        <PlaceCard
          placeCard = {placeCard}
          titleClickHandler = {titleClickHandler}
          handleHover = {handleHover}
        />
    );

    const titleLink = placeCardComponent.find(`.place-card`);
    titleLink.simulate(`mouseover`, {preventDefault() {}});

    expect(handleHover.mock.calls[0][0]).toBe(placeCard.id);
  });
});
