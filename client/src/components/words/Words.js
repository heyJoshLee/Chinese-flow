import React, { useEffect, useState } from 'react';
import { getWords } from '../../actions/words';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const Words = () => {
  const dispatch = useDispatch();
  const [words, setWords] = useState(null)

  useEffect( async () => {
    let response = await dispatch(getWords());
    setWords(response);
  }, [])

  const renderWords = () => {
    return words.map(word => {
      return (
        <tr>
            <td>
              <Link to={`/words/${word._id}`}>
                {word.simplified}
              </Link>
            </td>
          <td>{word.traditional}</td>
          <td>{word.english}</td>
        </tr>
      )
    });
  }

  if (!words) { return <div>Loading...</div> }
  console.log(words)
  return (
    <div>
      <h1 className="text-center">Words</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Simplified</th>
            <th scope="col">Traditional</th>
            <th scope="col">English</th>
          </tr>
        </thead>
        <tbody>
        {renderWords()}
        </tbody>
      </table>
    </div>
  )
}

export default Words
