import {GET_ARTICLES} from './actionTypes';
import * as data from '../data';

export const getArticles = () => {
  return {
    type: GET_ARTICLES,
    payload: data.articles
  };
};
