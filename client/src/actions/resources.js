import * as api from '../api';
import { errorFlashMessage, addFlashMessage } from './helpers.js'; 
import { GET_RESOURCES, 
  GET_RESOURCE, 
  CREATE_RESOURCE, 
  DELETE_RESOURCE, 
  UPDATE_RESOURCE, 
  ADD_WORD_TO_RESOURCE,
  REMOVE_WORD_FROM_RESOURCE } from '../types/index';

export const createResource = (resourceParams) => async (dispatch) => {
  try {
    const { data } = await api.createResource(resourceParams);
    dispatch({
      type: CREATE_RESOURCE,
      payload: data
    });
    addFlashMessage("Resource successfully created.", dispatch);
  } catch (error) {
    console.log(error);
    errorFlashMessage(error, dispatch, "danger")
  }
}

export const getResource = (resourceId) => async (dispatch) => {
  try {
    const { data } = await api.getResource(resourceId);
    dispatch({
      type: GET_RESOURCE,
      payload: data
    })
  } catch (error) {
    console.log(error);
    errorFlashMessage(error, dispatch, "danger")
  }
}

export const getResources = () => async (dispatch) => {
  try {
    const { data } = await api.getResources();
    console.log(data);
    dispatch({
      type: GET_RESOURCES,
      payload: data
    })
  } catch (error) {
    console.log(error);
    errorFlashMessage(error, dispatch, "danger")
  }
}

export const updateResource = (resourceId, resourceParams) => async (dispatch) => {
  try {
    const { data } = await api.updateResource(resourceId, resourceParams); 
    console.log("DATA")
    console.log(data)
    dispatch({
      type: UPDATE_RESOURCE,
      payload: data
    });
  } catch (error) {
    console.log(error);
    errorFlashMessage(error, dispatch, "danger")
  }
}

export const deleteResource = (resourceId) => async (dispatch) => {
  const { data } = await api.deleteResource(resourceId);
  dispatch({
    type: DELETE_RESOURCE,
    payload: data
  });
}

export const getWordsForResource = (resourceId) => async (dispatch) => {
  const { data } = await api.getWordsForResource(resourceId);
  return data;
}

export const addWordToResource = (resourceId, wordId) => async (dispatch) => {
  const { data } = await api.addWordToResource(resourceId, wordId);
  dispatch({
    type: ADD_WORD_TO_RESOURCE,
    payload: data
  });
  return data;
}

export const removeWordFromResource = (resourceId, wordId) => async (dispatch) => {
  const { data } = await api.removeWordFromResource(resourceId, wordId);
  dispatch({
    type: REMOVE_WORD_FROM_RESOURCE,
    payload: data
  });
}