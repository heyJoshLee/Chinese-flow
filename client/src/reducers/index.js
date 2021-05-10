import { combineReducers } from 'redux';
import resource from './resource';
import resources from './resources';
import word from './word';
import searchResult from './searchResult';
import flashMessages from './flashMessages';
import auth from './auth';
import studyPhase from './studyPhase';
import knownWords from './knownWords';

export default combineReducers({
  resource,
  resources,
  word,
  searchResult,
  flashMessages,
  auth,
  studyPhase,
  knownWords
});