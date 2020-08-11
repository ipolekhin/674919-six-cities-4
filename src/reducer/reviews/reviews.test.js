import {reducer} from "./reviews.js";

describe(`Reducer Reviews Test`, () => {
  it(`Reducer Reviews without additional parameters should return initial state`, () => {
    expect(reducer(void 0, {})).toEqual({
      reviews: [],
      isFormBlocked: false,
    });
  });
});
