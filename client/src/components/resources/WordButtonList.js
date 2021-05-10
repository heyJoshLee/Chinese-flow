import React from 'react';
import WordButtonContainer from './WordButtonContainer';
const WordButtonList = ({ words }) => {


  const renderWords = () => {
    return words.map(word => {
      return <WordButtonContainer word={word} />
    })
  }

  return (
    <div>
      {renderWords()}
    </div>
  )
}

export default WordButtonList;
