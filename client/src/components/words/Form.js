import React, { useState } from 'react';
import FileBase from 'react-file-base64';
import { createWord } from '../../actions/words';
import { useDispatch } from 'react-redux';
import jQuery from 'jquery';
const Form = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    simplified: "",
    traditional: "",
    pinyin: "",
    english: "",
    simplifiedSentence: "",
    traditionalSentence: "",
    englishSentence: "",
    image: "",
    collections: ""
  });

  const resetForm = () => {
    setFormData({
      simplified: "",
      traditional: "",
      pinyin: "",
      english: "",
      simplifiedSentence: "",
      traditionalSentence: "",
      englishSentence: "",
      image: "",
      collections: ""
    });
    jQuery("#word-form-model-close").click();
  }

  const handleSubmit = (e) => {
    e.preventDefault(); 
    console.log(formData);
    dispatch(createWord(formData));
    resetForm();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
          New Word
        </button>
        <div className="modal fade" id="exampleModal" 
        tabindex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">New Word</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
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
                <input type="submit" value="Add Word" className="btn btn-primary" />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Form;
