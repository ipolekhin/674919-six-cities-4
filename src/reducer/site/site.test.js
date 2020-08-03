import {reducer, ActionCreator, ActionType} from "./site.js";
import {SortType} from "../../const.js";

const sortByName = `Popular`;
const activeOfferId = 1;

describe(`Reducer Site Test`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(void 0, {})).toEqual({
      activeOfferId: null,
      sortByName: SortType.POPULAR,
    });
  });

  it(`Action creator for set sort type`, () => {
    expect(ActionCreator.changeSortOptions(sortByName)).toEqual({
      type: ActionType.CHANGE_SORT_OPTIONS,
      payload: sortByName,
    });
  });

  it(`Action creator for set ative offer`, () => {
    expect(ActionCreator.setActiveOffer(activeOfferId)).toEqual({
      type: ActionType.SET_ACTIVE_OFFER,
      payload: activeOfferId,
    });
  });
});
