import {reducer, placeCards} from "./data.js";

const city = `Amsterdam`;

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    offers: placeCards,
    offersOfTown: placeCards.filter((place) => place.townName === city),
  });
});
