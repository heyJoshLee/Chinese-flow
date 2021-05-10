import React from 'react';
import { useDispatch } from 'react-redux';
import { removeWordFromResource } from '../../../actions/resources';

const RemoveWordButton = ({ word, resource }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    console.log("REMOVING")
    dispatch(removeWordFromResource(resource._id, word.characterId))
  }

  return (
    <div onClick={handleClick} className="mt-2 mr-1 ml-1 badge badge-primary hover">{word.simplified}</div>
  )
}

export default RemoveWordButton;