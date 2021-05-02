import mongoose from 'mongoose';

const wordSchema = new mongoose.Schema({
  simplified: {
    type: String,
    required: true,  
  },
  traditional: {
    type: String,
    required: true,  
  },
  pinyin: {
    type: String,
    required: true,  
  },
  english: {
    type: String,
    required: true,  
  },
  simplifiedSentence: {
    type: String,
    required: true,  
  },
  traditionalSentence: {
    type: String,
    required: true,  
  },
  englishSentence: {
    type: String,
    required: true,  
  },
  image: {
    type: String
  },
  collections: {
    type: [String]
  }
});

const word = mongoose.model('Word', wordSchema);
export default word;