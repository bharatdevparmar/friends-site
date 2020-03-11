import {GET_FRIENDS} from '../action/actionTypes';
const initialState = {
  friends: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_FRIENDS: {
      return {
        friends: action.payload
      };
    }
    default: return state;
  }
};
