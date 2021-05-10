import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logIn } from '../actions/auth';

const SignIn = ({ history }) => {
  const auth = useSelector(state => state.auth)
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  useEffect(() => {
    if (auth) { history.push("/home") }
  }, [auth])

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(logIn(formData));
  }
  return (
    <div>
      <h1 className="text=-center">Sign In </h1>
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
          <input type="submit" className="btn btn-primary" value="Sign In" />
        </div>
      </form>

    </div>
  )
}

export default SignIn;
