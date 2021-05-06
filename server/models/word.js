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
    type: String  
  },
  traditionalSentence: {
    type: String  
  },
  englishSentence: {
    type: String  
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