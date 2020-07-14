import React from "react";
import renderer from "react-test-renderer";
import Map from "./map.jsx";
import {TownCoordinates, TownType} from "../../__mocks__/const";

const placeCards = [
  {
    adults: 3,
    bedrooms: 2,
    cardName: `Wood and stone place`,
    cardRating: 4.6,
    cardRatingStars: `92%`,
    cardType: `Room`,
    coordinatesItem: [52.3909553943508, 4.85309666406198],
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
    coordinatesItem: [52.369553943508, 4.85309666406198],
    description: `Text text....`,
    id: `2`,
    image: `img/apartment-01.jpg`,
    images: [`img/apartment-01.jpg`, `img/apartment-02.jpg`],
    insideItems: [`bathroom`],
    premiumPlace: true,
    price: 120,
    user: {
      name: `Angelina`,
      avatar: `img/avatar-angelina.jpg`,
      pro: true,
    },
  },
];

const cityCoordinate = TownCoordinates[TownType.AMSTERDAM];

it(`Render Map`, () => {
  const tree = renderer
    .create(<Map
      placeCards = {placeCards}
      cityCoordinate = {cityCoordinate}
    />, {
      createNodeMock: () => {
        return {};
      }
    })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
