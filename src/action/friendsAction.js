import {GET_FRIENDS} from './actionTypes';
import * as data from '../data';

export const getFriends = () => {
  return {
    type: GET_FRIENDS,
    payload: data.friends
  };
};
