import React from 'react';

const RecentWordItem = ({ word }) => {
  if (!word) { return <div>Loading...</div>}
  return (
    <>
    <button type="button" className="text-med mb-2 ml-2 btn btn-success badge badge-pill mr-2 ml-2" data-toggle="modal" data-target={`#${word.simplified}`}>
      {word.simplified}
    </button>

    <div className="modal fade" id={`${word.simplified}`} tabindex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">{word.simplified}</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <p>{word.pinyin}</p>
            <p>{word.english}</p>
          </div>
            <div className="row">
              <div className="col-6">
                <button type="button" class="btn btn-block btn-lg btn-secondary" data-dismiss="modal">Close</button>
              </div>
              <div className="col-6">
                <button type="button" class="btn btn-block btn-lg btn-primary">Remove word</button>
              </div>
            </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default RecentWordItem;
