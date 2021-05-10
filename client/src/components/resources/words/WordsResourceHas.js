import React, { useEffect } from 'react';
import RemoveWordButton from './RemoveWordButton';
import { useSelector } from 'react-redux';

const WordsResourceHas = ({ resource, words }) => {


  if (!words ) { return <div>Loading...</div>}
  console.log(resource)
  const renderWords = () => {
    if (words.length === 0 ) { return <div> No words </div> }
    return words.map(word => {
      if (!word) { return <span></span>}
      return <RemoveWordButton resource={resource} word={word} />
    })
  }

  return (
    <div className="row">
      {renderWords()}
    </div>
  )
}

export default WordsResourceHas;
