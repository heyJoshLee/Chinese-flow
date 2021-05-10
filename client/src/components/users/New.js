import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createUser } from '../../actions/users';
import Form from './Form';
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
      <h1 className="text-center">Create an account </h1>
      <div className="row">
        <div className="col-3"></div>
        <div className="col-6">
          <Form />
        </div>
      </div>

    </div>
  )
}

export default New;
