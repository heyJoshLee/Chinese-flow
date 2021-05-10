import React from 'react';
import { useDispatch } from 'react-redux';
import { addCardToUser } from '../../actions/cards';
import jQuery from 'jquery';


const AddWordToListButton = ({ fullWord }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    console.log(fullWord._id);
    dispatch(addCardToUser(fullWord._id));
    jQuery(`#${fullWord._id}-close-button`).click();
  }
  return (
    <>
    <button type="button" className="btn btn-warning badge badge-pill mr-2 ml-2" data-toggle="modal" data-target={`#${fullWord.simplified}`}>
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
                <button id={`${fullWord._id}-close-button`} type="button" class="btn btn-block btn-lg btn-secondary" data-dismiss="modal">Close</button>
              </div>
              <div className="col-6">
                <button onClick={handleClick} type="button" class="btn btn-block btn-lg btn-primary">Add word</button>
              </div>
            </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default AddWordToListButton;
