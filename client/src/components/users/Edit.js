import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateLoggedInUser } from '../../actions/users';
import { useHistory } from "react-router-dom";

const Edit = () => {
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const history = useHistory();
  const [formData, setFormData] = useState({
    email: auth.user.email,
    characterType: auth.user.characterTyep,
    currentList : auth.user.currentList
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateLoggedInUser(formData));
    history.push('/signout');
  }
   
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1 className="text-cener">Account</h1>
        <hr />
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input 
          value={formData.email}
          onChange={(e) => {setFormData({...formData, email: e.target.value})}} 
          type="text" name="email" id="email" className="form-control"/>
        </div>
        <div className="form-group">
          <label htmlFor="character-select">Character Type</label>
          <select value={formData.characterType}
          onChange={(e) => setFormData({...formData, characterType: e.target.value})} className="form-control" id="character-select">
            <option value="simplified">Simplified</option>
            <option value="traditional">Traditional</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="list-select">Current List</label>
          <select value={formData.currentList}
          onChange={(e) => setFormData({...formData, currentList: e.target.value})} className="form-control" id="list-select">
            <option value="hsk1">HSK 1</option>
            <option value="hsk2">HSK 2</option>
            <option value="hsk3">HSK 3</option>
            <option value="hsk4">HSK 4</option>
            <option value="hsk5">HSK 5</option>
            <option value="hsk6">HSK 6</option>
          </select>
        </div>
        <div className="form-group">
          <input type="submit" value="Save" className="btn btn-block btn-primary"/>
        </div>
      </form>
    </div>
  )
}

export default Edit;
