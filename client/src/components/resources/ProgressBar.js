import React from 'react'; 

const ProgressBar = ({ resource, knownWords}) => {

  const percentKnown = (resource, knownWords) => {
    let wordsKnown = 0
    resource.words.forEach(word => {
      knownWords.forEach(knownWord => {
        let knowWord = knownWord._id === word.characterId;
        if (knowWord) { wordsKnown += 1 }
      })
    });
    return Math.floor(wordsKnown / resource.words.length * 100);
  }

  const renderPercentageBar = (percent) => {
    let barColor;
    if (percent >= 80) {
      barColor = 'success';
    } else if (percent >= 60) {
      barColor = 'warning';
    } else {
      barColor = 'danger';
    }
    return(
      <div className="mt-3 progress">
       <div className={`progress-bar bg-${barColor}`} role="progressbar" style={{width: `${percent}%`}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>{`${percent}%`}</div>
      </div>
     ) 
    }


  return (
    <>
      {renderPercentageBar(percentKnown(resource, knownWords))}
    </>
  )
}

export default ProgressBar;
