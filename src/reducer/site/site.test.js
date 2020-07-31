import {reducer, ActionCreator, ActionType} from "./site.js";
import {SortType, TOWN_NAMES} from "../const";

const city = `Amsterdam`;
const cities = TOWN_NAMES;

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    activeOfferId: null,
    cities,
    city,
    sortByName: SortType.POPULAR,
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

describe(`Action creators work correctly`, () => {
  it(`Action creator for incrementing step returns correct action`, () => {
    expect(ActionCreator.changeCity(`Amsterdam`)).toEqual({
      type: ActionType.CHANGE_CITY,
      payload: `Amsterdam`,
    });
  });
});
