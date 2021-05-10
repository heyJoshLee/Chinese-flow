import React from 'react';

const RemoveWordFromListButton = ({ fullWord }) => {
  return (
    <>
    <button type="button" className="btn btn-success badge badge-pill mr-2 ml-2" data-toggle="modal" data-target={`#${fullWord.simplified}`}>
      {fullWord.simplified}
    </button>

    <div className="modal fade" id={`${fullWord.simplified}`} tabindex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">{fullWord.simplified}</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <p>{fullWord.pinyin}</p>
            <p>{fullWord.english}</p>
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

export default RemoveWordFromListButton;
