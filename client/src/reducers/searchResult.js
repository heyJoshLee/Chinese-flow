import { SEARCH_WORD } from '../types/index';

export default (word = null, action) => {
  switch (action.type) {
    case SEARCH_WORD:
      return action.payload;
    default:
      return word;
  }
}