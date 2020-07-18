import {reducer, ActionType} from "./reducer.js";

const offers = {};
const city = `Amsterdam`;

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    city,
    offers,
  });
});

it(`Reducer should change city by a given value`, () => {
  expect(reducer({
    city: `Amsterdam`
  }, {
    type: ActionType.CHANGE_CITY,
    payload: `Paris`,
  })).toEqual({
    city: `Paris`,
  });

  expect(reducer({
    city: `Amsterdam`
  }, {
    type: ActionType.CHANGE_CITY,
    payload: `Amsterdam`,
  })).toEqual({
    city: `Amsterdam`,
  });
});
