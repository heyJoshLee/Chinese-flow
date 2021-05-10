import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { advancePhase } from '../../actions/study';

const TimeSelect = () => {
  const dispatch = useDispatch();
  const studyPhase = useSelector(state => state.studyPhase)
  const handleClick = () => {
    dispatch(advancePhase(studyPhase + 1))
  }

  return (
    <div>
      <h1 className="text-center mb-4">Pick study session time</h1>
      <div onClick={handleClick} className="mb-3 btn btn-block btn-primary">2 minutes</div>
      <div onClick={handleClick} className="mb-3 btn btn-block btn-primary">3 minutes</div>
      <div onClick={handleClick} className="mb-3 btn btn-block btn-primary">6 minutes</div>
      <div onClick={handleClick} className="mb-3 btn btn-block btn-primary">10 minutes</div>
      <div onClick={handleClick} className="mb-3 btn btn-block btn-primary">20 minutes</div>
    </div>
  )
}

export default TimeSelect
