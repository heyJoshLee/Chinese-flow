import * as api from '../api';
import { LOG_IN, LOG_OUT } from '../types/index';
import { errorFlashMessage } from './helpers.js'; 

export const logIn = (logInData) => async (dispatch) => {
  try {
    const { data } = await api.logIn(logInData);
    localStorage.setItem('auth', JSON.stringify(data))
    dispatch({
      type: LOG_IN,
      payload: data
    });
  } catch (error) {
    errorFlashMessage(error, dispatch, "danger")
  }
}

export const logOut = () => async (dispatch) => {
  localStorage.removeItem('auth');
  dispatch({
    type: LOG_OUT
  });
}