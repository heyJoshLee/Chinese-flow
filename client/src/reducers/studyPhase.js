import { ADVANCE_PHASE, START_OVER } from '../types';


export default (phase = 0, action ) => {
  switch (action.type) {
    case ADVANCE_PHASE:
      return action.payload;
    case START_OVER:
      return 0;
    default:
      return phase;
  }
}