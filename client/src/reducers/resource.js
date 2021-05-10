import { GET_RESOURCE, UPDATE_RESOURCE, ADD_WORD_TO_RESOURCE, REMOVE_WORD_FROM_RESOURCE } from '../types/index';

export default (resource = null, action) => {
  switch (action.type) {
    case GET_RESOURCE:
    case UPDATE_RESOURCE:
    case ADD_WORD_TO_RESOURCE:
    case REMOVE_WORD_FROM_RESOURCE:
      return action.payload;
    default:
      return resource;
  }
}