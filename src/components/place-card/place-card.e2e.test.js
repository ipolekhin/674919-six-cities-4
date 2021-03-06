import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import PlaceCard from "./place-card.jsx";

const authorizationStatus = false;
const className = `page`;
const placeCard = {
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
};

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`PlaceCard e2e test`, () => {
  it(`Should mouse on card and get cardID`, () => {
    const onOptionHover = jest.fn((placeCardId) => placeCardId);
    const onFavoriteClick = jest.fn();
    const placeCardComponent = shallow(
        <PlaceCard
          authorizationStatus={authorizationStatus}
          className={className}
          onFavoriteClick={onFavoriteClick}
          onOptionHover={onOptionHover}
          placeCard={placeCard}
        />
    );

    const titleLink = placeCardComponent.find(`.place-card`);
    titleLink.simulate(`mouseover`, {preventDefault() {}});

    expect(onOptionHover.mock.calls[0][0]).toBe(placeCard.id);
  });
});
