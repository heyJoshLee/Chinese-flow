import { GET_WORDS_FOR_LOGGED_IN_USER, ADD_CARD } from '../types/index';

export default (knownWords = [], action) => {
  switch (action.type) {
    case GET_WORDS_FOR_LOGGED_IN_USER :
      return action.payload;
    case ADD_CARD:
      return [...knownWords]
    default:
      return knownWords;
  }
}