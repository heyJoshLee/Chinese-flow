import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getWord} from '../../actions/words';
import AddWordToListButton from './AddWordToListButton';
import RemoveWordFromListButton from './RemoveWordFromListButton';

const WordButton = ({ word }) => {
  const knownWords = useSelector(state => state.knownWords)
  const [fullWord, setFullWord] = useState(null);
  const dispatch = useDispatch();

  useEffect(async () => {
    setFullWord(await dispatch(getWord(word.characterId)));
  }, [])

  if (!fullWord ) {
    return <> </>
  }

  const wordIsKnown = () => {
    return knownWords.some(knownWord => {
      return knownWord._id === word.characterId
    })
  }
  
  if (wordIsKnown()) {
    return <RemoveWordFromListButton fullWord={fullWord} />
  } else {
    return <AddWordToListButton fullWord={fullWord} />
  }

  
}

export default WordButton;