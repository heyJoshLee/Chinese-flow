import * as api from '../api';
import { GET_WORDS, 
  GET_WORD, 
  CREATE_WORD, 
  DELETE_WORD, 
  UPDATE_WORD, 
  SEARCH_WORD} from '../types/index';

export const createWord = (wordParams) => async (dispatch) => {
  try {
    const { data } = await api.createWord(wordParams);
    dispatch({
      type: CREATE_WORD,
      payload: data
    });
  } catch (error) {
    console.log(error);
  }
}

export const getWord = (wordId) => async (dispatch) => {
  try {
    const { data } = await api.getWord(wordId);
    dispatch({
      type: GET_WORD,
      payload: data
    })
    return data;
  } catch (error) {
    console.log(error);
  }
}

export const getWords = () => async (dispatch) => {
  try {
    const { data } = await api.getWords();
    dispatch({
      type: GET_WORD,
      payload: data
    })
    return data;
  } catch (error) {
    console.log(error);
  }
}

export const updateWord = (wordId, wordParams) => async (dispatch) => {
  try {
    const { data } = await api.updateWord(wordId, wordParams); 
    dispatch({
      type: UPDATE_WORD,
      payload: data
    });
  } catch (error) {
    console.log(error);
  }
}

export const deleteWord = (wordId) => async (dispatch) => {
  const { data } = await api.deleteWord(wordId);
  dispatch({
    type: DELETE_WORD,
    payload: data
  });
}

export const getWordBySimplified = (character) => async (dispatch) => {
  const { data } = await api.getWordBySimplified(character);
  dispatch({
    type: SEARCH_WORD,
    payload: data
  })
}

export const getUniqueWords = (text) => async (dispatch) => {
  const { data } = await api.getUniqueWords(text);
  return data 
}