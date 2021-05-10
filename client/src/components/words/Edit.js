import React, { useEffect } from 'react';
import Form from './EditForm';
import { useDispatch, useSelector } from 'react-redux';
import { getWord } from '../../actions/words';

const Edit = (props) => {

  const dispatch = useDispatch();
  const wordId = props.match.params.id;
  const word = useSelector(state => state.word)
  useEffect(() => {
      dispatch(getWord(wordId));
    }, [])


  if (!word) { return <div>Loading...</div>}
  return (
    <div>
      <h1>Editing</h1>
      <Form word={word} />
    </div>
  )
}

export default Edit;