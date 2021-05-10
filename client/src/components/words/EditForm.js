import React, { useState } from 'react';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';
import { updateWord } from '../../actions/words';
import { useHistory } from 'react-router-dom';

const EditForm = ({ word }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [formData, setFormData] = useState({
    simplified: word.simplified,
    traditional: word.traditional,
    pinyin: word.pinyin,
    english: word.english,
    simplifiedSentence: word.simplifiedSentence,
    traditionalSentence: word.traditionalSentence,
    englishSentence: word.englishSentence,
    image: word.image,
    collections: word.collections
  });

  const handleSubmit = (e) => {
    e.preventDefault(); 
    console.log(formData);
    dispatch(updateWord(word._id, formData));
    history.push(`/words/${word._id}`)
  }


  
 
  if (!word) { return <div>Loading...</div> }
 

 
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="modal-body">
            <div className="control-group">
              <label htmlFor="simplified">Simplified</label>
              <input className="form-control" onChange={(e) => setFormData({...formData, simplified: e.target.value})} value={formData.simplified} name="simplified" placeholder="Simplified" />
            </div>
            <div className="form-group">
              <label htmlFor="traditional">Traditional</label>
              <input className="form-control" onChange={(e) => setFormData({...formData, traditional: e.target.value})} value={formData.traditional} name="traditional" placeholder="Traditional" />
            </div>
            <div className="form-group">
              <label htmlFor="pinyin">Pinyin</label>
              <input className="form-control" onChange={(e) => setFormData({...formData, pinyin: e.target.value})} value={formData.pinyin} name="pinyin" placeholder="Pinyin" />
            </div>
            <div className="form-group">
              <label htmlFor="english">English</label>
              <input className="form-control" onChange={(e) => setFormData({...formData, english: e.target.value})} value={formData.english} name="english" placeholder="English" />
            </div>
            <div className="form-group">
              <label htmlFor="simplifiedSentence">Simplified Sentence</label>
              <input className="form-control" onChange={(e) => setFormData({...formData, simplifiedSentence: e.target.value})} value={formData.simplifiedSentence} name="simplifiedSentence" placeholder="Simplified Sentence" />
            </div>
            <div className="form-group">
              <label htmlFor="traditionalSentence">Traditional Sentence</label>
              <input className="form-control" onChange={(e) => setFormData({...formData, traditionalSentence: e.target.value})} value={formData.traditionalSentence}  name="traditionalSentence" placeholder="Traditional Sentence" />
            </div>
            <div className="form-group">
              <label htmlFor="englishSentence">English Sentence</label>
              <input className="form-control" onChange={(e) => setFormData({...formData, englishSentence: e.target.value})} value={formData.englishSentence}  name="englishSentence" placeholder="English Sentence" />
            </div>
            <div className="form-group">
              <label htmlFor="image">Image</label>
              <FileBase type="file" value={formData.image} onChange={(e) => setFormData({...formData, image: e.target.value})} multiple={false} onDone={({ base64 }) => setFormData({ ...formData, image: base64 })} />
            </div>
            <div className="form-group">
              <label htmlFor="collections">Collections</label>
              <input className="form-control" onChange={(e) => setFormData({...formData, collections: e.target.value})} value={formData.collections} name="collections" placeholder="Collections" />
            </div>
        </div>
        <div className="modal-footer">
          <button id="word-form-model-close" type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
          <input type="submit" value="Update Word" className="btn btn-primary" />
        </div>
      </form>
    </div>
  )
}

export default EditForm;
