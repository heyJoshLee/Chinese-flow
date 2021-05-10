import { GET_RESOURCES,} from '../types/index';

export default (resources = null, action) => {
  switch (action.type) {
    case GET_RESOURCES:
      return action.payload;
    default:
      return resources;
  }
}