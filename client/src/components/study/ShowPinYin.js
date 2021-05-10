import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { advancePhase } from '../../actions/study';

const ShowPinYin = () => {
  const dispatch = useDispatch();
  const studyPhase = useSelector(state => state.studyPhase)

  const correctAnswer = () => {
    dispatch(advancePhase(studyPhase + 1))
  }

  const incorrectAnswer = () => {
    dispatch(advancePhase(5))
  }

  return (
    <div className="text-center">
      <h1>洗手間</h1>
      <h3>xǐ shǒu jiān</h3>
      <h3>Did you get it right?</h3>
      <div className="row fixed-bottom">
        <div className="col-6">
          <div onClick={incorrectAnswer} className="btn btn-lg btn-block btn-secondary">No</div>
        </div>
        <div className="col-6">
          <div onClick={correctAnswer} className="btn btn-lg btn-block btn-primary">Yes</div>
        </div>
      </div>
    </div>
  )
}

export default ShowPinYin;
