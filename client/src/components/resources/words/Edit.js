import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getResource, getWordsForResource } from '../../../actions/resources';
import { getWordBySimplified } from '../../../actions/words';
import WordsResourceHas from './WordsResourceHas';
import WordsToCheckContainer from './WordsToCheckContainer';

const Edit = (props) => {
  const resourceId = props.match.params.id;
  const dispatch = useDispatch();
  const [words, setWords] = useState([]);
  const resource = useSelector(state => state.resource)
  

  useEffect( async() => {
    dispatch(getResource(resourceId));
  }, []);

  if (!resource || !words) {return <div>Loading...</div>}

  return (
    <div>
      <h1 className="text-center">Edit Words for {resource.title} </h1>
      <Link to={`/resources/${resourceId}/edit`}>{`< Back to resource`}</Link>
      <div className="row">
          <div className="col-12">
            <h2 className="text-center">Current Words</h2> 
            <WordsResourceHas resource={resource} words={resource.words} />
          </div>
      </div>
      <hr/>
      <WordsToCheckContainer resource={resource} />
    </div>
  )
}

export default Edit;
