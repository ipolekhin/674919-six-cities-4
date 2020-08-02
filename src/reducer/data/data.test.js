import {reducer, placeCards, ActionType, Operation} from "./data.js";
import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../api.js";

const api = createAPI(() => {});
const city = `Amsterdam`;

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    offers: placeCards,
    offersOfTown: placeCards.filter((place) => place.townName === city),
  });
});

it(`Should make a correct API call to /hotels`, function () {
  const apiMock = new MockAdapter(api);
  const dispatch = jest.fn();
  const offersList = Operation.getOffersList();

  apiMock
    .onGet(`/hotels`)
    .reply(200, [{fake: true}]);

  return offersList(dispatch, () => {}, api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(2);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.OFFERS_LIST,
        payload: [{fake: true}],
      });
    });
});
