import { GET_WORD, UPDATE_WORD } from '../types/index';

export default (word = null, action) => {
  switch (action.type) {
    case GET_WORD:
    case UPDATE_WORD:
      return action.payload;
    default:
      return word;
  }
}