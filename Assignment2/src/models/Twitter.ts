import mongoose from 'mongoose';

const Twitter = new mongoose.Schema({
    polarity: Number,
    id: Number,
    date: String,
    query: String,
    user: String,
    text: String
  });
  
export default mongoose.model('twitter', Twitter);