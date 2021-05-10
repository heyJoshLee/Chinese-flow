import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AddWordButton from './AddWordButton';

const AddWordsSection = ({words, resource}) => {

  const renderWords = () => {
    return words.map(word => {
      let containsWord = resource.words.some(w => {
        return w.characterId === word._id;
      });
      if (containsWord) {
        return <button disabled className="ml-1 mr-1 btn btn-danger">{word.simplified}</button>
      } else {
        return (
          <AddWordButton resource={resource} word={word} />
        )
      }
    })
  }

  if (!words || !resource.words) { return <div>Search for words...</div>}

  return (
    <div className="mt-2">
      <h3 className="text-center">Unique Words in this Resource</h3>
      {renderWords()}
    </div>
  )
}

export default AddWordsSection;
