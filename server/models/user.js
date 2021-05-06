import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    minlength: 3
  },
  password: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 100
  },
  currentList: {
    type: String ,
    required: true,
    default: "hsk1"
  },
  characterTyep: {
    type: String,
    required: true,
    default: "simplified"
  },
  resourcesCompleted: {
    type: [String],
    required: true,
    default: []
  }
});

const user = mongoose.model('User', userSchema);
export default user;