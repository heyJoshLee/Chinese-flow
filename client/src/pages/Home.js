import React, { useEffect } from 'react';
import Recent from '../components/resources/Recent';
import RecentWords from '../components/words/RecentWords';
import { useDispatch, useSelector } from 'react-redux';
import { getWordsForLoggedInUser } from '../actions/users';

const Home = () => {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth)
  const knownWords = useSelector(state => state.knownWords)

  useEffect(async () => {
    dispatch(getWordsForLoggedInUser());
  }, []);

  return (
    <div className="home-page mt-4">
      <p className="text-center">You know {knownWords.length} words.</p>
      <RecentWords />
    </div>
  )
}

export default Home
