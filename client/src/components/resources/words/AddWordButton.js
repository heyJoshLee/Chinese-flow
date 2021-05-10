import React from 'react';
import { useDispatch } from 'react-redux';
import { addWordToResource } from '../../../actions/resources';

const AddWordButton = ({ word, resource }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(addWordToResource(resource._id, word._id));
  }

  return (
    <div onClick={handleClick} className="mt-2 mr-2 word-to-add btn btn-primary">{word.simplified}</div>
  )
}

export default AddWordButton;
