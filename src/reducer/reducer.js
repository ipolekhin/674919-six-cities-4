import {combineReducers} from "redux";
import {reducer as data} from './data/data.js';
import {reducer as reviews} from './reviews/reviews.js';
import {reducer as site} from './site/site.js';
import {reducer as user} from './user/user.js';
import NameSpace from './name-space.js';

export default combineReducers({
  [NameSpace.DATA]: data,
  [NameSpace.REVIEWS]: reviews,
  [NameSpace.SITE]: site,
  [NameSpace.USER]: user,
});
