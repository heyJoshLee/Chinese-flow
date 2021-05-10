import React from 'react';
import RecentWordItem from './RecentWordItem';

const RecentWordsList = ({ words }) => {

  const renderWords = () => {
    return words.map(word => {
      return <RecentWordItem word={word} />
    })
  }

  return (
    <ul className="recent-words-list">
     {renderWords()}
    </ul>
  )
}

export default RecentWordsList;
