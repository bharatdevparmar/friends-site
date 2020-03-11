import {GET_ARTICLES} from '../action/actionTypes';
const initialState = {
  articles: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ARTICLES: {
      return {
        articles: action.payload
      };
    }
    default: return state;
  }
};
