import { ADVANCE_PHASE, START_OVER } from '../types/index';

export const advancePhase = (phaseNumber) => async (dispatch) =>{
  dispatch({
    type: ADVANCE_PHASE,
    payload: phaseNumber
  });
}
export const startOver = () => async (dispatch) => {
  dispatch({
    type: START_OVER
  });
}