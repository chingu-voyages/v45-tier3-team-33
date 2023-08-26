const mongoose = require('mongoose');
const propertySchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ['Apartment', 'House', 'Condo', 'Villa', 'Commercial'],
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: ['Available', 'Rented', 'Under Construction'],
    default: 'Available',
  },
  agentId: {
    type: mongoose.Schema.Types.ObjectId,

    ref: 'User',
    // required: true,
  },
});
module.exports = mongoose.model('Property', propertySchema);
