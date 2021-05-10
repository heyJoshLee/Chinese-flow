import React, { useEffect } from 'react';
import Recent from '../components/resources/Recent';
import RecentWords from '../components/words/RecentWords';
import { useDispatch, useSelector } from 'react-redux';
import { getWordsForLoggedInUser } from '../actions/users';

const Home = () => {
  const dispatch = useDispatch();
  const knownWords = useSelector(state => state.knownWords)


  useEffect(() => {
    dispatch(getWordsForLoggedInUser());
  }, []);


  return (
    <div className="home-page mt-4">
      <p className="text-center">You know {knownWords.length} characters.</p>
      <div className="progress">
        <div className="progress-bar" role="progressbar" style={{width: `${10/3000}`}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>10</div>
      </div>
      <RecentWords />

      <div>
        <Recent />
      </div>
    </div>
  )
}

export default Home
