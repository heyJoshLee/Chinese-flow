import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { advancePhase } from '../../actions/study';

const ShowAnswer = () => {
  const dispatch = useDispatch();
  const studyPhase = useSelector(state => state.studyPhase)
  
  const reset = () => {
    dispatch(advancePhase(1))
  }



  return (
    <div className="text-center">
    <h1>洗手間</h1>
    <h3>xǐ shǒu jiān</h3>
    <h3>bathroom, restroom, toliet, WC</h3>
    <div className="row fixed-bottom"> 
      <div onClick={reset} className="btn btn-lg btn-block btn-primary">I've learned it</div>
    </div>
  </div>
  )
}

export default ShowAnswer;
