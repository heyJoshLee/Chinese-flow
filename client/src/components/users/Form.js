import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createUser } from '../../actions/users';

const New = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    dispatch(createUser(formData));
  }
  return (
    <div>
      <form onSubmit={ handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Email</label>
          <input onChange={(e) => setFormData({...formData, email: e.target.value})} className="form-control" name="email" type="email" id="name"/>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input onChange={(e) => setFormData({...formData, password: e.target.value})} className="form-control" name="password" type="password" id="password"/>
        </div>
        <div className="form-group">
          <input type="submit" className="btn btn-block btn-primary" value="Sign Up" />
        </div>
      </form>

    </div>
  )
}

export default New;
