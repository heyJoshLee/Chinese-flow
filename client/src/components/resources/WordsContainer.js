import React from 'react';
import WordButtonList from './WordButtonList';

const WordsContainer = ({ words }) => {
  return (
    <div id="accordion">
      <div className="card">
        <div className="card-header" id="headingOne">
          <h5 className="mb-0">
            <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Characters in this RESOURCE
            </button>
          </h5>
        </div>
        <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
      <div className="card-body">
        <WordButtonList words={words} />
      </div>
    </div>
  </div>
  </div>


  )
}

export default WordsContainer
