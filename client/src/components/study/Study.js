import React from 'react';
import { useSelector } from 'react-redux';
import TimeSelect from './TimeSelect';
import PronunciationTest from './PronunciationTest';
import DefinitionTest from './DefinitionTest';
import ShowPinYin from './ShowPinYin';
import ShowDefinition from './ShowDefinition';
import ShowAnswer from './ShowAnswer';

const Study = () => {
  const studyPhase = useSelector(state => state.studyPhase)

  const renderStudySession = () => {
    switch (studyPhase) {
      case 0: 
        return <TimeSelect/>;
      case 1: 
        return <PronunciationTest/>;
      case 2:
        return <ShowPinYin/>;
      case 3: 
        return  <DefinitionTest />
      case 4:
        return <ShowDefinition />;
      default:
        return <ShowAnswer />;
    }
  }

  return (
    <div className="mt-4">
      {renderStudySession()}
    </div>
  )
}

export default Study;
