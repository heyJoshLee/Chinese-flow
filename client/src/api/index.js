import axios from 'axios';

let token = JSON.parse(localStorage.getItem('auth'))?.token;
let configFromLocalStorage = null;
if (token) {
  configFromLocalStorage = { 
    headers: { 
      "x-auth-token": token
    }
  }
} 

const BASEURL = 'http://localhost:5000';
const RESOURCES_URL = `${BASEURL}/resources`;
const WORDS_URL = `${BASEURL}/words`;
const LOGIN_URL = `${BASEURL}/auth/login`;
const USERS_URL = `${BASEURL}/users`;
const CARDS_URL = `${BASEURL}/cards`;

// Users

export const logIn = (logInParams) => axios.post(LOGIN_URL, logInParams);

export const updateUser = (userId, userParams, config = configFromLocalStorage) => axios.patch(`${USERS_URL}/${userId}`, userParams, config)

export const createUser = (userParams) => axios.post(USERS_URL, userParams);


//TODO GET USER ID TO PASS TO PARAMS
export const getWordsForLoggedInUser = (userToken = token) => {
  return axios.get(`${BASEURL}/words`, {
    headers: { 
      "x-auth-token": userToken
    }
  });
}

// resources 
export const getResources = (userToken = token) => {
  return axios.get(RESOURCES_URL, {
    headers: { 
      "x-auth-token": userToken
    }
  });
}

export const createResource = (newResource, userToken = token) => {
  return axios.post(RESOURCES_URL, newResource, {
    headers: { 
      "x-auth-token": userToken
    }
  });
}

export const getResource = (resourceId, userToken = token) => {
  return axios.get(`${RESOURCES_URL}/${resourceId}`, {
    headers: { 
      "x-auth-token": userToken
    }
  });
}

export const deleteResource = (resourceId, userToken = token) => {
  return axios.delete(`${RESOURCES_URL}/${resourceId}`, {
    headers: { 
      "x-auth-token": userToken
    }
  });
}

export const updateResource = (resourceId, resourceParams, userToken = token) => {
  console.log(`${RESOURCES_URL}/${resourceId}`)
  return axios.patch(`${RESOURCES_URL}/${resourceId}`, resourceParams);
}

// Words

export const createWord = (newWord, userToken = token) => {
  return axios.post(WORDS_URL, newWord, {
    headers: { 
      "x-auth-token": userToken
    }
  });
}


export const getWord = (wordId, userToken = token) => {
  return axios.get(`${WORDS_URL}/${wordId}`,  {
    headers: { 
      "x-auth-token": userToken
    }
  });
}

export const getWords = (userToken = token) => {
  return axios.get(`${WORDS_URL}`,  {
    headers: { 
      "x-auth-token": userToken
    }
  });
}

export const deleteWord = (wordId, userToken = token) => {
  return axios.delete(`${WORDS_URL}/${wordId}`, {
    headers: { 
      "x-auth-token": userToken
    }
  });
}

export const updateWord = (wordId, wordParams, userToken = token) => {
  return axios.patch(`${WORDS_URL}/${wordId}`, wordParams);
}

export const getWordBySimplified = (character, userToken = token) => {
  return axios.get(`${WORDS_URL}/getWordBySimplified/${character}`, {
    headers: { 
      "x-auth-token": userToken
    }
  });
}

export const getWordsForResource = (resourceId, userToken = token) => {
  return axios.get(`${RESOURCES_URL}/${resourceId}/words`, {
    headers: { 
      "x-auth-token": userToken
    }
  });
}

export const addWordToResource = (resourceId, wordId, userToken = token) => {
  return axios.post(`${RESOURCES_URL}/${resourceId}/addWord`, {characterId: wordId}, {
    headers: { 
      "x-auth-token": userToken
    }
  });
}

export const getUniqueWords = (text, userToken = token ) => {
  return axios.post(`${WORDS_URL}/getUniqueWords`, text,  {
    headers: { 
      "x-auth-token": userToken
    }
  });
}

export const removeWordFromResource = (resourceId, wordId, userToken = token) => {
  return axios.delete(`${RESOURCES_URL}/${resourceId}/words/${wordId}`, {
    headers: { 
      "x-auth-token": userToken
    }
  })
}

export const addCardToUser = (wordId, userToken = token) => {
  return axios.post(`${CARDS_URL}/add`, {wordId}, {
    headers: { 
      "x-auth-token": userToken
    }
  });
}