import * as api from '../api';
import { CREATE_USER, GET_WORDS_FOR_LOGGED_IN_USER } from '../types/index';
import { addFlashMessage } from './helpers.js'; 

export const createUser = (userParams) => async (dispatch) => {
  try {
    const { data } = api.createUser(userParams);
    dispatch({
      type: CREATE_USER,
      payload: data
    });
    addFlashMessage("Successfully created account.", dispatch);
  } catch (error) {
    console.log(error);
  }
}

export const getWordsForLoggedInUser = () => async (dispatch) => {
  try {
    const { data } = await api.getWordsForLoggedInUser();
    console.log(data);
    dispatch({
      type: GET_WORDS_FOR_LOGGED_IN_USER,
      payload: data
    });
  } catch (error) {
    console.log(error);
  }
}