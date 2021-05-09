import mongoose from 'mongoose';

const cardSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,  
  },
  wordId: {
    type: String,
    required: true,  
  },
  lastReviewDate: {
    type: Date,
    default: new Date()
  },
  nextReviewDate: {
    type: Date,
    default: new Date()
  },
  cumulativeCorrectAnswers: {
    type: Number,
    default: 0
  },
  totalCorrectAnswers: {
    type: Number,
    default: 0
  },
  totalIncorrectAnswers: {
    type: Number,
    default: 0
  }
});

const card = mongoose.model('Card', cardSchema);
export default card;