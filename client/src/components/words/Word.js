import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CheckCircleFill, XCircleFill } from 'react-bootstrap-icons';
import { getWord } from '../../actions/words';
import { Pencil } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

const Word = (props) => {
  const dispatch = useDispatch();
  const wordId = props.match.params.id;
  const word = useSelector(state => state.word)
  useEffect(() => {
      dispatch(getWord(wordId));
    }, [])

  if (!word) {
    return <div>Loading...</div>
  }

  const renderCircle = () => {
    if (true) {
      return <CheckCircleFill color="green" />
    } else {
      return <XCircleFill color="red"/>;
    }
  }

  if (!word) {
    return <div>Loading...</div>
  }

  const renderCollections = () => {
    return word.collections.join(', ')
  }
  
  return (
    <div className="text-center">
      <h2>
        {renderCircle()}
        <span className="ml-3">
          <Link to={`/words/${word._id}/edit`}>
            <Pencil size={32} />
          </Link>
        </span>
      </h2>
      <br/>
      <h1 className="text-center">{word.simplified} / {word.traditional}</h1>
      <h2>{word.pinyin}</h2>
      <h3>{word.english}</h3>
      <p>{word.simplifiedSentence} / {word.traditionalSentence}</p>
      <p>{word.english}</p>
      <img src={word.image}/>
      <p className="mt-3"><strong>Groups:</strong>{renderCollections()}</p>
    </div>
  )
}

export default Word;