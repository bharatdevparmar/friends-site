import {combineReducers} from 'redux';

import homeReducer from './homeReducer';
import friendsReducer from './friendsReducer';

const allReducers = combineReducers({
  articles: homeReducer,
  friendsList: friendsReducer
});

export default (state, action) => {
  return allReducers(state, action);
};
