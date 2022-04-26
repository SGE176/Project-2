const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: 'This field is required.'
  },
  description: {
    type: String,
    required: 'This field is required.'
  },
  email: {
    type: String,
    required: 'This field is required.'
  },
  category: {
    type: String,
    enum: ['Boxing', 'Yoga', 'HIIT', 'Dancing', 'Other'],
    required: 'This field is required.'
  },
  image: {
    type: String,
    required: 'This field is required.'
  },
});

categorySchema.index({ name: 'text', description: 'text' });
// WildCard Indexing


module.exports = mongoose.model('Recipe', categorySchema);