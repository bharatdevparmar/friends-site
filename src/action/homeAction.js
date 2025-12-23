import {GET_ARTICLES} from './actionTypes';
import data from '../data.json';

export const getArticles = () => {
  return {
    type: GET_ARTICLES,
    payload: data.articles
  };
};
