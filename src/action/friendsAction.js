import {GET_FRIENDS} from './actionTypes';
import data from '../data.json';

export const getFriends = () => {
  return {
    type: GET_FRIENDS,
    payload: data.friends
  };
};
