import {combineReducers} from "redux";
import {reducer as data} from './data/data.js';
import {reducer as site} from './site/site.js';
import NameSpace from './name-space.js';

export default combineReducers({
  [NameSpace.DATA]: data,
  [NameSpace.SITE]: site,
});
