import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUniqueWords } from '../../../actions/words';
import AddWordSection from './AddWordsSection';

const WordsToCheckContainer = ({resource}) => {

  const [loading, setloading ] = useState(false)

  const [textToCheck, setTextToCheck ] = useState({
    text: ""
  });

  const [wordsToAdd, setWordsToAdd ] = useState([]);

  const dispatch = useDispatch();

  const handleClick = async () => { 
    setloading(true);
    let response = await dispatch(getUniqueWords(textToCheck));
    setWordsToAdd(response); 
    setloading(false)
  }

  const renderAddWordSection = () => {
    if (loading) {
      return <div>Checking words. Please wait...</div>
    } else {
      return <AddWordSection resource={resource} words={wordsToAdd}/>

    }
  }

  return (
    <div>
      <h2 className="text-center">Paste Words To Check</h2>
      <textarea value={textToCheck.text} onChange={(e) => setTextToCheck({text: e.target.value})} className="form-control">
     </textarea>
     <button className="mt-4 btn btn-primary btn-block" onClick={handleClick}>Search Words</button>
      {renderAddWordSection()}
    </div>

  )
}

export default WordsToCheckContainer;
