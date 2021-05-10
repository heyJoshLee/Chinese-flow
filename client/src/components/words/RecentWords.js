import React, { useState } from 'react';
import RecentWordsList from './RecentWordsList';
import { useSelector } from 'react-redux';

const RecentWords = () => {
  

  const knownWords = useSelector(state => state.knownWords)

  if (!knownWords) { return <div>Loading...</div>}
  console.log(knownWords)
  return (
    <div>
        <h2 className="text-center">Recently Learned Words</h2>
        <div className="jumbotron">
          <RecentWordsList words={knownWords} />
        </div>
    </div>
  )
}

export default RecentWords;
