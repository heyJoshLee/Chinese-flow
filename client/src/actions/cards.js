import * as api from '../api';
import { ADD_CARD } from '../types/index';

export const addCardToUser = (wordId) => async (dispatch) => {
  const { data } =  api.addCardToUser(wordId);
  console.log(data)
  dispatch({
    type: ADD_CARD,
    payload: data
  });
}