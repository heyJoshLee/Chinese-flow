import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import FileBase from 'react-file-base64';
import { createResource } from '../../actions/resources';
import { useHistory } from 'react-router-dom';

const Form = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [formData, setFormData] = useState({
    title: "",
    link: "",
    image: "",
    description: "",
    type: "text",
    categories: "news",
    mediaType: "lesson",
    paid: "paid"
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    dispatch(createResource(formData));
  history.push('/resources');
  }



  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title"> Title </label>
          <input onChange={(e) => { setFormData({...formData, title: e.target.value})}} value={formData.title} placeholder="Title" name="title" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="link"> Link </label>
          <input onChange={(e) => { setFormData({...formData, link: e.target.value})}} value={formData.link} placeholder="Link" name="link" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="image"> Image </label><br />
          <FileBase type="file" multiple={false} onDone={({ base64 }) => setFormData({ ...formData, image: base64 })} />
        </div>
        <div className="form-group">
          <label htmlFor="title"> Description </label>
          <textarea onChange={(e) => { setFormData({...formData, description: e.target.value})}} value={formData.description} placeholder="Description" name="description" className="form-control" ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="type-select">Type</label>
          <select onChange={(e) => { setFormData({...formData, type: e.target.value})}} value={formData.type} className="form-control" id="type-select">
            <option value="text">Text</option>
            <option value="audio">Audio</option>
            <option value="video">Video</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="categories">Categories </label>
          <select onChange={(e) => { setFormData({...formData, categories: e.target.value})}} value={formData.categories} className="form-control" id="categories">
            <option value="news">News</option>
            <option value="sports">Sports</option>
            <option value="entertainment">Entertainment</option>
            <option value="fiction">Fiction</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="media-type">Media Type</label>
          <select onChange={(e) => { setFormData({...formData, mediaType: e.target.value})}} value={formData.mediaType} className="form-control" id="media-type">
            <option value="lesson">Lesson</option>
            <option value="media">Media</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="paid">Paid</label>
          <select onChange={(e) => { setFormData({...formData, paid: e.target.value})}} className="form-control" id="paid">
            <option value="true">Paid</option>
            <option value="false">Free</option>
          </select>
        </div>
        <input type="submit" className="btn btn-primary" value="Create" />
      </form>
    </div>
  )
}

export default Form;
