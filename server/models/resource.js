import mongoose from 'mongoose';

const resourceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true 
  },
  description: {
    type: String,
    required: true 
  },
  link: {
    type: String,
    required: true 
  },
  categories: {
    type: [String],
    required: true 
  },
  words: {
    type: [String]
  },
  paid: {
    type: Boolean,
    default: true
  },
  mediaType: {
    type: String,
    required: true,
    default: "media"
  },
  image: {
    type: String,
    required: true
  },
  mediumType: {
    type: String,
    required: true,
    default: 'article'
  }

});

const resource = mongoose.model('Resource', resourceSchema);
export default resource;