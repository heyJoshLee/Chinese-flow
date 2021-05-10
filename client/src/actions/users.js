import * as api from '../api';
import { CREATE_USER, GET_WORDS_FOR_LOGGED_IN_USER, UPDATE_USER } from '../types/index';
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


export const updateLoggedInUser = (userParams) => async (dispatch) => {
  try {
    const { data } = await api.updateLoggedInUser(userParams);
    console.log(data);
    dispatch({
      type: UPDATE_USER,
      payload: data
    });
    addFlashMessage("Successfully updated account.", dispatch);
    addFlashMessage("Please log in again.", dispatch);
  } catch (error) {
    console.log(error)
  }
}